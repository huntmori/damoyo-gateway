import { UserModule } from './user/user.module';
import { MariaDBConfigService } from './config/database/mariadb.config.service';
import { MariaDbConfigModule } from './config/database/mariadb.config.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.' + process.env.NODE_ENV + '.env',
      ignoreEnvFile: false,
    }),
    TypeOrmModule.forRootAsync({
      imports: [MariaDbConfigModule],
      useClass: MariaDBConfigService,
      inject: [MariaDBConfigService],
    }),
    UserModule,
  ],
})
export class AppModule {}
