import { Module } from '@nestjs/common';
import { UsersService } from './fetch-users.service';
import { UsersController } from './fetch-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/fetch-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
