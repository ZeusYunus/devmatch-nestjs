import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ParseUUIDPipe } from '@nestjs/common';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) {}

    // GET /profiles
    @Get()
    findAll() {
        return this.profilesService.findAll();
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesService.findOne(id);
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profilesService.create(createProfileDto);
    }

    // PUT /profiles/:id
    @Put(':id')
    update(
        @Param('id', ParseUUIDPipe) id: UUID, 
        @Body() updateProfileDto: UpdateProfileDto
    ) {
        return this.profilesService.update(id, updateProfileDto);
    }

    // DELETE /profiles/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: UUID) {
        this.profilesService.remove(id);
    }
}
