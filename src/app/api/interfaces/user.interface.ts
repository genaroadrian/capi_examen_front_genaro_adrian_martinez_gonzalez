import { IBaseModel } from './base-model.interface';
import { IUserAddress } from './user-address.interface';

export interface IUser extends IBaseModel {
  name: string;
  email: string;
  email_verified_at: Date;
  fecha_nacimiento: Date;
  edad: number;
  domicilio: IUserAddress;
}
