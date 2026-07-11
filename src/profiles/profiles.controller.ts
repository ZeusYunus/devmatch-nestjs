import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import { ProfilesGuard } from './profiles.guard';
import { PinoLogger } from 'nestjs-pino';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService, private readonly logger: PinoLogger) { }

    // GET /profiles
    @Get()
    findAll() {
        this.logger.info('Fetching profiles');
        return this.profilesService.findAll();
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
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
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateProfileDto: UpdateProfileDto,
    ) {
        return this.profilesService.update(id, updateProfileDto);
    }

    // DELETE /profiles/:id
    @Delete(':id')
    @UseGuards(ProfilesGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: string) {
        this.logger.info(`User ${id} has been deleted.`)
        return this.profilesService.remove(id);
    }
}
