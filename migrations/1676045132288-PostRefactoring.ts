import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1676045132288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" RENAME COLUMN "content" TO "name"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" RENAME COLUMN "name" TO "content"`,
    );
  }
}
