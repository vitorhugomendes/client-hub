import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Headers,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import jwtDecode, { JwtPayload } from 'jwt-decode';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateContactDto, @Request() req) {
    return this.contactsService.create(data, req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findByUser(@Headers() headers) {
    const token: string = headers.authorization.slice(7);
    const userId = jwtDecode<JwtPayload>(token).sub;

    return this.contactsService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateContactDto) {
    return this.contactsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
