import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProfileDto } from 'src/dto/create-profile.dto';

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
    // DELETE /profiles/:id
}
