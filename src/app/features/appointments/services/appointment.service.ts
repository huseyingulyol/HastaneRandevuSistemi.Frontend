import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListAvailableAppointmentResponse } from '../models/list-available-appointment-response';
import { environment } from '../../../../environments/environment';
import { ListAvailableAppointmentRequest } from '../models/list-available-appointment-request';
import { BookAppointmentRequest } from '../models/book-appointment-request';
import { ListActiveAppointmentByDoctorResponse } from '../models/list-active-appointment-by-doctor-reponse';
import { GetListAppointmentResponse } from '../models/get-list-appointment-response';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly apiControllerUrl = `${environment.apiUrl}/Appointment`;

  constructor(private http: HttpClient) { }

  getListAvailableAppointment(requestBody:ListAvailableAppointmentRequest): Observable<ListAvailableAppointmentResponse> {
    return this.http.post<ListAvailableAppointmentResponse>(`${this.apiControllerUrl}/GetListAvailableAppointments`,requestBody);
  }

  getListActiveAppointmentByDoctor(): Observable<ListActiveAppointmentByDoctorResponse[]> {
    return this.http.post<ListActiveAppointmentByDoctorResponse[]>(`${this.apiControllerUrl}/GetListActiveAppointmentByDoctor`, {});
  }

  getListAppointment(): Observable<GetListAppointmentResponse[]> {
    return this.http.post<GetListAppointmentResponse[]>(`${this.apiControllerUrl}/List`, {});
  }

  bookAvailableAppointment(requestBody:BookAppointmentRequest): Observable<any> {
    return this.http.post(`${this.apiControllerUrl}/Book`,requestBody);
  }
}