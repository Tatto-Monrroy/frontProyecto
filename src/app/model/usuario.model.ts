import { ParentEntity } from './parentEntity.model';
export class UsuarioModel extends ParentEntity {

    public primerNombre: string;
    public segundoNombre: string;
    public apellido: string;
    public segundoApellido: string;
    public telefono: string;
    public direccion: string;
}