import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Post } from 'src/post/post.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.config.get('database.type'),
      host: this.config.get('database.host'),
      port: this.config.get('database.port'),
      username: this.config.get('database.username'),
      password: this.config.get('database.password'),
      database: this.config.get('database.database'),
      entities: [Post],
      logging: true,
      migrations: ['src/migrations/**/*{.ts,.js}'],
      migrationsTableName: 'custom_migration_table',
    } as TypeOrmModuleOptions;
  }
}
