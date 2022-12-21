import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @Length(5, 140, { message: 'Conteudo Min:5 e Max:140' })
  content: string;

  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  category: string;

  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsUUID('4', { message: 'ID não é um UUID versão 4' })
  recipientId: string;
}
