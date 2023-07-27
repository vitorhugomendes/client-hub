import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
      userId,
    });
    const newContact = await this.prisma.contact.create({
      data: { ...contact },
    });

    return newContact;
  }
  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }
  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    return contact;
  }

  async findByEmailAndUser(email: string, userId: string): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({
      where: { email, userId },
    });

    return contact;
  }

  async findByUser(userId: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: { userId },
    });

    return contacts;
  }
  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return contact;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
