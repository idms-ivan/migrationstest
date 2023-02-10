import { MigrationInterface, QueryRunner } from 'typeorm';

export class myMigration1676045859880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" RENAME COLUMN "content" TO "name"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
