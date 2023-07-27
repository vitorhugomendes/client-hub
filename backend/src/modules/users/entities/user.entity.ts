import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  phone: string;
  registerDate: Date;

  constructor() {
    this.id = randomUUID();
  }
}
