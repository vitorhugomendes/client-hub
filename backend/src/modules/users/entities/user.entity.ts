import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  phone: string;
  register_date: Date;

  constructor() {
    this.id = randomUUID();
  }
}
