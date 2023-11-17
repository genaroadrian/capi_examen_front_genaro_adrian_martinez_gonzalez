import { IBaseModel } from './base-model.interface';

export interface IUserAddress extends IBaseModel {
  user_id: number;
  domicilio: string;
  numero_exterior: string;
  colonia: string;
  cp: string;
  ciudad: string;
}
