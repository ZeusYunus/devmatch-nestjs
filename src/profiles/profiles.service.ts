import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';

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

    update(id: string, updateProfileDto: UpdateProfileDto) {
        const matchingProfile = this.profiles.find((existingProfile) => existingProfile.id === id);

        if (!matchingProfile) {
            return {};
        }

        matchingProfile.name = updateProfileDto.name;
        matchingProfile.description = updateProfileDto.description

        return matchingProfile;
    }

    remove(id: string): void {
        const matchingProfileIndex = this.profiles.findIndex((profile) => profile.id === id);

        if (matchingProfileIndex > -1) {
            this.profiles.splice(matchingProfileIndex, 1);
        }
    }
}
