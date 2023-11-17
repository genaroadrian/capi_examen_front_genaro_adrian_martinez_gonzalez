import { IUserAddress } from '../interfaces/user-address.interface';
import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
  name: string;
  email: string;
  email_verified_at: Date;
  fecha_nacimiento: Date;
  edad: number;
  domicilio: IUserAddress;
  id: number;
  created_at: Date;
  updated_at: Date;

  get address() {
    if (!this.domicilio) {
      return '';
    }
    const { domicilio, numero_exterior, colonia, cp, ciudad } = this.domicilio;
    return `${domicilio}, ${numero_exterior}, ${colonia}, ${cp}, ${ciudad}`;
  }
  constructor(user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.email_verified_at = user.email_verified_at;
    this.fecha_nacimiento = user.fecha_nacimiento;
    this.edad = user.edad;
    this.domicilio = user.domicilio;
    this.id = user.id;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
