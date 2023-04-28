import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddingFieldsProducts1682676750055 implements MigrationInterface {
  name = 'AddingFieldsProducts1682676750055';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`Product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`stock\` int NOT NULL, \`image\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`Product\``);
  }
}
