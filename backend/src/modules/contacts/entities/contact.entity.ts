import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  register_date: Date;
  user_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
