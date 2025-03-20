import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root' // Permite injeção global do serviço
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/users';
  private tokenKey = 'auth_token';

  private http = inject(HttpClient); // Injeção correta no Angular 19+

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, { username, password }).pipe(
      tap((response: any) => {
        localStorage.setItem(this.tokenKey, response.tokens.access);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
