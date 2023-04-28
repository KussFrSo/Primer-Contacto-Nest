import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1682675285424 implements MigrationInterface {
    name = 'Init1682675285424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`stock\` int NOT NULL, \`image\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Product\``);
    }

}
