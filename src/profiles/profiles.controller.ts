import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
    // GET /profiles
    @Get()
    findAll(@Query('location') location: number) {
        return [{ location }];
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return {
            name: createProfileDto.name,
            description: createProfileDto.description
        };
    }

    // PUT /profiles/:id
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return {
            id,
            ...updateProfileDto
        };
    }

    // DELETE /profiles/:id
}
