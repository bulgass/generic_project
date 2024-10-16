import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.entity';
import { JwtModule } from '@nestjs/jwt'; 
import { JwtService } from '@nestjs/jwt'; 


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Your_new_P@ssword123',
      database: 'users',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'GQ0r3QbaPQG5ETFzL8I4ux0XXbAz2yfoHI1j4V+EZN8=', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
