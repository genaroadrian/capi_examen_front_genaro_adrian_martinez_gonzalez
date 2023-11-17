import { Injectable } from '@angular/core';
import { Repository } from 'src/app/common/repository';
import { IUser } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersService extends Repository<IUser> {
  constructor() {
    super('users');
  }
}
