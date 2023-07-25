import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phone: number;
  register_date: string;

  constructor() {
    this.id = randomUUID();
    this.register_date = new Date().toLocaleDateString('pt-br');
  }
}
