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
  async create(createContactDto: CreateContactDto) {
    const findContact = await this.contactsRepository.findByEmail(
      createContactDto.email,
    );

    if (findContact) {
      throw new ConflictException('email already exists');
    }

    const contact = await this.contactsRepository.create(createContactDto);
    return contact;
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

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return this.contactsRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return this.contactsRepository.delete(id);
  }
}
