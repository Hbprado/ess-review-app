import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
