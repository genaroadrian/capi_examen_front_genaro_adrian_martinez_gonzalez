import { Component } from '@angular/core';
import { finalize, map, tap } from 'rxjs';
import { User } from 'src/app/api/clases/user';
import { UsersService } from 'src/app/api/services/users.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss'],
})
export class TablaUsuariosComponent {
  users: User[] = [];
  loading = false;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers().subscribe();
  }

  getUsers() {
    this.loading = true;
    return this.usersService.getAll().pipe(
      map((users) => users.map((_user) => new User(_user))),
      tap((users) => (this.users = users)),
      finalize(() => (this.loading = false))
    );
  }

  identify(index: number, item: User) {
    return item.id;
  }
}
