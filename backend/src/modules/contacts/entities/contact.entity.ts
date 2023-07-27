import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  registerDate: Date;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
