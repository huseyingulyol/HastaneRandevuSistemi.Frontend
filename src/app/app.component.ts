import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardComponent } from './shared/components/card/card.component';
import { LoadingOverlayComponent } from './shared/components/loading-overlay/loading-overlay.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { AuthService } from './features/auth/services/auth.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TableComponent } from './shared/components/table/table.component';
import { DropdownListComponent } from './shared/components/dropdown-list/dropdown-list.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './shared/components/calender/calender.component';
import { TableExportComponent } from './shared/components/table-export/table-export.component';
import { DashboardPageComponent } from './routes/dashboard-page/dashboard-page.component';
import { LiveSupportWidgetComponent } from './shared/components/live-support-widget/live-support-widget.component';
import { DataGridComponent } from './shared/components/data-grid/data-grid.component';
import { FeedbackComponent } from './routes/feedbacks/feedback-page/feedback.component';
import { AllFeedbackComponent } from './routes/feedbacks/all-feedback/all-feedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule, 
    NavbarComponent,
    CardComponent,
    LoadingOverlayComponent, 
    ButtonComponent, 
    FooterComponent, 
    TableComponent, 
    DropdownListComponent,
    CalenderComponent,
    LiveSupportWidgetComponent,
    DataGridComponent,
    FeedbackComponent,
    AllFeedbackComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HastaneRandevuSistemi.Frontend';
  
}
