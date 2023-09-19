import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/auth.interface';
import { AuthStatus} from '../interfaces/auth-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject( HttpClient );

  private _currentUser  = signal<User|null>(null);
  private _authStatus   = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(()=> this._currentUser());
  public authStatus  = computed(()=> this._authStatus());

  constructor() { }


  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/services/auth/signin`;

    if (email === 'prueba.pass@gmail.com' && password === 'pruebaSeleccion') {
      return this.http.post<User>(url, null)
        .pipe(
          map(() => false),
          
          // catchError((error) => throwError(error))
        );
    } else {
      this._authStatus.set(AuthStatus.authenticated);
      return of(true);
    }
  }


}
