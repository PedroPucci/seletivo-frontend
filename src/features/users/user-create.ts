import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCreate } from '../../core/models/user-create.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-create.html',
  styleUrl: './user-create.scss',
})
export class UserCreateComponent {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  user: UserCreate = {
    name: '',
    email: '',
    password: '',
    isActive: true,
    role: 'Usuario',
  };

  nameError = '';
  emailError = '';
  passwordError = '';

  save(): void {

    this.nameError = '';
    this.emailError = '';
    this.passwordError = '';

    if (!this.user.name || this.user.name.trim() === '') {
      this.nameError = 'O nome é obrigatório.';
    }

    if (this.user.name && this.user.name.length < 8) {
      this.nameError = 'O nome deve ter pelo menos 8 caracteres.';
    }

    if (!this.user.email || this.user.email.trim() === '') {
      this.emailError = 'O email é obrigatório.';
    }

    if (!this.user.password || this.user.password.trim() === '') {
      this.passwordError = 'A senha é obrigatória.';
    }

    if (
      this.nameError ||
      this.emailError ||
      this.passwordError
    ) {
      return;
    }

    this.userService.create(this.user).subscribe({

      next: (response) => {

        if (response.success === true) {
          alert('Usuário cadastrado com sucesso!');
          this.router.navigate(['/']);
          return;
        }

        alert(response.message ?? 'Não foi possível cadastrar o usuário.');
        console.log('Erro de validação:', response);
      },

      error: (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário.');
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}