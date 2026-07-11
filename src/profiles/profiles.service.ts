import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from 'src/dto/create-profile.dto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: 'Brianna Watts',
            description: 'Looking for someone to merge with my heart'
        },
        {
            id: randomUUID(),
            name: 'Jasper Quinn',
            description: 'Seeking a partner in crime to compile my heart'
        },
        {
            id: randomUUID(),
            name: 'Leo Park',
            description: 'You think you know VIM'
        },
    ];

    findAll() {
        return this.profiles;
    }

    findOne(id: string) {
        return this.profiles.find((profile) => profile.id === id);
    }

    create(createProfileDto: CreateProfileDto) {
        const createProfile = {
            id: randomUUID(),
            ...createProfileDto
        };

        this.profiles.push(createProfile);
        return createProfile;
    }
}
