import { Routes } from '@angular/router';
import { authRoutes } from './routes/auth/auth.routes';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { DashboardPageComponent } from './routes/dashboard-page/dashboard-page.component';
import { securedRouteGuard } from './core/auth/guards/secured-route.guard';
import { authGuard } from './core/auth/guards/auth.guard';
import { DoctorPageComponent } from './routes/doctors/doctor-page/doctor-page.component';
import { AdminPageComponent } from './routes/admins/admin-page/admin-page.component';
import { AllDoctorComponent } from './routes/doctors/all-doctor/all-doctor.component';
import { CalenderComponent } from './shared/components/calender/calender.component';
import { roleGuard } from './core/auth/guards/role.guard';
import { SettingsPageComponent } from './routes/settings-page/settings-page.component';
import { BookAppointmentComponent } from './routes/patients/book-appointment/book-appointment.component';
import { PatientPageComponent } from './routes/patients/patient-page/patient-page.component';
import { AppointmentListComponent } from './routes/patients/appointment-list/appointment-list.component';
import { AllFeedbackComponent } from './routes/feedbacks/all-feedback/all-feedback.component';
import { ListPastAppointmentComponent } from './routes/doctors/list-past-appointment/list-past-appointment.component';
import { PatientListComponent } from './routes/doctors/patient-list/patient-list.component';
import { FeedbackComponent } from './routes/feedbacks/feedback-page/feedback.component';
import { ManageOfficeLocationComponent } from './routes/office-location/manage-office-location/manage-office-location.component';
import { ManageOfficeAllocationComponent } from './routes/office-location/office-allocation/manage-office-allocation/manage-office-allocation.component';
import { AllPatientComponent } from './routes/patients/all-patient/all-patient.component';
import { GetListAllAppointmentComponent } from './routes/admins/get-list-all-appointment/get-list-all-appointment.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'home', pathMatch:'full',
  },
  {
      path: 'home',
      component: HomePageComponent,
      canActivate: [authGuard],
  },
  {
    path: 'doctor',
    component: DoctorPageComponent ,
    canActivate: [securedRouteGuard, roleGuard],
    data: { role: 'Doctor' }, // Bu rotaya erişmek için gerekli rol
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'all-doctor', component: AllDoctorComponent },
      { path: 'calendar', component: CalenderComponent },
      { path: 'settings', component: SettingsPageComponent },
      { path: 'past-appointment', component: ListPastAppointmentComponent },
      { path: 'patient', component: PatientListComponent },
      {path: 'feedback', component: FeedbackComponent},

    ],
  },
  {
    path: 'admin',
    component: AdminPageComponent ,
    canActivate: [securedRouteGuard, roleGuard],
    data: { role: 'Admin' }, // Bu rotaya erişmek için gerekli rol
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'all-doctor', component: AllDoctorComponent },
      { path: 'all-feedback', component: AllFeedbackComponent},
      { path: 'settings', component: SettingsPageComponent },
      { path: 'officeLocation', component: ManageOfficeLocationComponent },
      { path: 'doctorOfficeAllocation', component: ManageOfficeAllocationComponent },
      { path: 'all-patient', component: AllPatientComponent },
      { path: 'all-appointment', component: GetListAllAppointmentComponent }
    ],
  },
  { 
    path: 'patient' , 
    component: PatientPageComponent,
    canActivate: [securedRouteGuard, roleGuard],
    data: { role: 'Patient' }, // Bu rotaya erişmek için gerekli rol
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'book-appointment', component: BookAppointmentComponent},
      { path: 'appointments', component: AppointmentListComponent},
      { path: 'settings', component: SettingsPageComponent },
      { path: 'feedback', component: FeedbackComponent},
      { path: 'all-doctor', component: AllDoctorComponent },
    ]
  },

  ...authRoutes,
];
