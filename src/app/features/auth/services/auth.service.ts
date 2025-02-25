import { LoginCredentials } from '../models/login-credentials';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoggedInformation } from '../models/logged-information';
import { Observable, tap } from 'rxjs';
import { AuthService as CoreAuthService } from '../../../core/auth/services/auth.service';
import { ACCESS_TOKEN_KEY } from '../../../core/auth/constants/auth-keys';
import { LocalStorageService } from '../../../core/browser/services/local-storage.service';
import { SecretMessage } from '../models/secret-message';
import { RegisterCredentials } from '../models/register-credentials';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends CoreAuthService {
  private readonly apiControllerUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    localStorageService: LocalStorageService
  ) {
    super(localStorageService);
  }

  login(loginCredentials: LoginCredentials): Observable<LoggedInformation> {
    return this.http
      .post<LoggedInformation>(
        `${this.apiControllerUrl}/login`, loginCredentials)
      .pipe(
        tap((loggedInformation) => {
          this.localStorageService.set(ACCESS_TOKEN_KEY,loggedInformation.token);
          this._logged.next();
          this._isLogged.next(true);
        })
      );
  }
  
  register(registerCredentials: RegisterCredentials): Observable<any> {
    return this.http.post(`${this.apiControllerUrl}/register`,registerCredentials);
  }

  //Token'dan UserID'yi alıyoruz
  // getUserIdFromToken(): number {
  //   const token = this.localStorageService.get<string>(ACCESS_TOKEN_KEY);
  //   if (!token) {
  //     throw new Error('No JWT token found');
  //   }

  //   const decodedToken: any = jwtDecode(token);
  //   return decodedToken.nameid; // JWT'deki NameIdentifier (nameid) claim'ini kullanarak ID'yi alın
  // }
}
