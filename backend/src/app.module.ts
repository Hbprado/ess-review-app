import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ContentModule } from './content/content.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), UserModule, ContentModule, PrismaModule, AuthModule],
})
export class AppModule {}
