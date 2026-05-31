import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {

  username = '';
  password = '';

  usernameError = '';
  passwordError = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.usernameError = '';
    this.passwordError = '';

    if (!this.username || this.username.trim() === '') {
      this.usernameError = 'O usuário é obrigatório.';
    }

    if (!this.password || this.password.trim() === '') {
      this.passwordError = 'A senha é obrigatória.';
    }

    if (this.usernameError || this.passwordError) {
      return;
    }

    const request = {
      username: this.username,
      password: this.password,
    };

    console.log('Enviando login:', request);

    this.authService.login(request).subscribe({
      next: (response) => {
        console.log('Resposta login:', response);

        if (response.success === true) {
          this.authService.saveToken(response.accessToken);
          alert('Login realizado com sucesso!');
          // this.router.navigate(['/orders']);
          this.router.navigate(['/dashboard']);
          return;
        }

        alert(response.message ?? 'Usuário ou senha inválidos.');
      },
      error: (error) => {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login.');
      },
    });
  }
}