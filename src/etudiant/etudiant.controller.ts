import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { converBase64ToImage } from 'convert-base64-to-image'
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { unlink, unlinkSync } from 'fs';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @Post()
  create(@Body() createEtudiantDto: CreateEtudiantDto) {
    return this.etudiantService.create(createEtudiantDto);
  }

  @Get()
  findAll() {
    return this.etudiantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etudiantService.findOne(id);
  }

  @Post('byid')
  findById(@Body() searchDTO : { id: string }) {
    return this.etudiantService.findById(searchDTO.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEtudiantDto: UpdateEtudiantDto,
  ) {
    return this.etudiantService.update(id, updateEtudiantDto);
  }

  @Patch('avatar/:id')
 async avatar(
    @Param('id') id: string,
    @Body() updateAvatarDto: {avatar: string},
  ) {
    const unixPath = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const pathToSaveImage = `./uploads/${unixPath}-avatar.jpg`;
    converBase64ToImage(updateAvatarDto.avatar, pathToSaveImage);
    const lt =  await this.etudiantService.update(id, {avatar: `uploads/${unixPath}-avatar.jpg`});
    if(lt.avatar !== 'uploads/default_avatar.jpg') {
      unlinkSync(lt.avatar);
    }
    return lt;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etudiantService.remove(id);
  }
}
