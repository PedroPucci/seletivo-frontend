import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface UserListItem {
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserListComponent {
  searchName = '';
  searchEmail = '';
  showToast = false;
  toastMessage = '';

  users: UserListItem[] = [
    {
      name: 'Pedro Teste',
      email: 'pedroteste@gmail.com',
      role: 'Usuario',
      createdAt: '31/05/2026',
    },
  ];

  confirmDelete(user: UserListItem): void {
    console.log('Cliquei na lixeira:', user);

    const confirmDelete = window.confirm(
      `Deseja realmente deletar o usuário ${user.name}?`
    );

    if (!confirmDelete) {
      return;
    }

    this.users = this.users.filter(item => item.email !== user.email);
    this.toastMessage = 'Usuário removido com sucesso!';
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}