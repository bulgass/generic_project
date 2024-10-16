/*
 * Copyright (c) 2024-Present, Bulgass Inc.
 * All rights reserved.
 *
 * Bulgass under your choice of the Bulgass Source Available License 2.0
 * (RSALv2) or the Server Side Public License v1 (SSPLv1).
 */

import { Controller, Post, Body, Get } from '@nestjs/common'; 
import { AuthService } from './auth.service'; 
import { CreateUserDto } from './create-user.dto'; 
import { User } from './user.entity'; 

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.authService.signUp(createUserDto.username, createUserDto.password);
  }

  @Post('signin')
  signIn(@Body() createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(createUserDto.username, createUserDto.password);
  }


  @Get('users') 
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.authService.findAllUsers();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
