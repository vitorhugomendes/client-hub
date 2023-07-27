import { Contact } from '@prisma/client';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact>;
  abstract findAll(): Promise<Contact[]>;
  abstract findOne(id: string): Promise<Contact>;
  abstract findByEmailAndUser(email: string, userId: string): Promise<Contact>;
  abstract update(id: string, data: UpdateContactDto): Promise<Contact>;
  abstract delete(id: string): Promise<void>;
}
