import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profile)
        private readonly profileRepository: Repository<Profile>,
    ) { }

    async findAll(): Promise<Profile[]> {
        return this.profileRepository.find();
    }

    async findOne(id: string): Promise<Profile> {
        const profile = await this.profileRepository.findOne({
            where: { id },
        });

        if (!profile) {
            throw new NotFoundException(
                `Profile with ID ${id} not found.`,
            );
        }

        return profile;
    }

    async create(
        createProfileDto: CreateProfileDto,
    ): Promise<Profile> {
        const profile = this.profileRepository.create(
            createProfileDto,
        );

        return this.profileRepository.save(profile);
    }

    async update(
        id: string,
        updateProfileDto: UpdateProfileDto,
    ): Promise<Profile> {
        const profile = await this.findOne(id);

        Object.assign(profile, updateProfileDto);

        return this.profileRepository.save(profile);
    }

    async remove(id: string): Promise<void> {
        const result = await this.profileRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(
                `Profile with ID ${id} not found.`,
            );
        }
    }
}