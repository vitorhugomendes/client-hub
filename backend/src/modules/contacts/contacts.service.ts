import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(data: CreateContactDto, userId: string) {
    const findContact = await this.contactsRepository.findByEmailAndUser(
      data.email,
      userId,
    );
    if (findContact) {
      throw new ConflictException('contact already registered');
    }

    const contact = await this.contactsRepository.create(data, userId);
    return contact;
  }

  async findByUser(userId: string) {
    return this.contactsRepository.findByUser(userId);
  }

  async findAll() {
    return this.contactsRepository.findAll();
  }

  async findOne(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return findContact;
  }

  async update(id: string, data: UpdateContactDto) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return this.contactsRepository.update(id, data);
  }

  async remove(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return this.contactsRepository.delete(id);
  }
}
