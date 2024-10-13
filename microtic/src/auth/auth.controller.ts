import { Controller, Post, Body } from '@nestjs/common'; 
import { AuthService } from './auth.service'; 
import { CreateUserDto } from './create-user.dto'; 

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
}
