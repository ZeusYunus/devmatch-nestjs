import { Controller, Get, Param, Query } from '@nestjs/common';

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
    // PUT /profiles/:id
    // DELETE /profiles/:id
}
