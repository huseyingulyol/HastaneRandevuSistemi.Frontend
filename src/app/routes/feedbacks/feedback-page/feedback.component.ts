import { Component, inject, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../../../shared/components/dynamic-dialog/dynamic-dialog.component';
import { IDynamicDialogConfig } from '../../../shared/models/dynamic-dialog/dynamic-dialog-config';

interface Feedback {
  userMail: string;
  userFeedback: string;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})

export class FeedbackComponent {
  readonly dialog = inject(MatDialog);
  feedback: Feedback = { userMail: '', userFeedback: '' };

  @ViewChild('successDialogTemplate') successDialogTemplate: TemplateRef<any> | undefined;
  @ViewChild('failedDialogTemplate') failedDialogTemplate: TemplateRef<any> | undefined;

  constructor(private http: HttpClient) {}

  feedbackDialog(dialogType: any)
  {
    const dialogRef = this.dialog.open(DynamicDialogComponent, {
      width: '400px',
      data: <IDynamicDialogConfig>{
        title: 'Geri Bildirim',
        dialogContent: dialogType == "success"? this.successDialogTemplate : this.failedDialogTemplate,
        dialogType: dialogType,
        acceptButtonTitle: 'Tamam'
      }
    });
    
  }

  private resetForm(form: NgForm): void {
    form.resetForm();
    this.feedback = { userMail: '', userFeedback: '' };
  }

  onSubmit(feedbackForm: NgForm) {
    this.http.post('https://localhost:7027/api/feedback/add', this.feedback)
      .subscribe(response => {
        console.log('Geri bildirim başarıyla gönderildi. Teşekkür ederiz.', response);
        this.feedbackDialog("success");
        this.resetForm(feedbackForm);
      }, error => {
        console.error('Geri bildirim gönderilirken hata oluştu.', error);
        this.feedbackDialog("failed");
        this.resetForm(feedbackForm);
      });
  }
}