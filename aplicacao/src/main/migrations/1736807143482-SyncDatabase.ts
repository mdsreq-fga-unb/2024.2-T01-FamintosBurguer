import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncDatabase1736807143482 implements MigrationInterface {
    name = 'SyncDatabase1736807143482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ingredientes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "ingredientesalimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "alimentoId" integer, "ingredienteId" integer, "pedidoId" integer, CONSTRAINT "REL_91bed45d0ae9fe636309449b94" UNIQUE ("pedidoId"))`);
        await queryRunner.query(`CREATE TABLE "alimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "valor" integer NOT NULL, "observacao" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "itenspedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantidade" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "pedidoId" integer, "alimentoId" integer)`);
        await queryRunner.query(`CREATE TABLE "pedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cliente" text NOT NULL, "desconto" integer NOT NULL, "total" integer NOT NULL, "subtotal" integer NOT NULL, "data" date NOT NULL, "pagamento" text NOT NULL, "status" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_ingredientesalimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "alimentoId" integer, "ingredienteId" integer, "pedidoId" integer, CONSTRAINT "REL_91bed45d0ae9fe636309449b94" UNIQUE ("pedidoId"), CONSTRAINT "FK_42295708ca7054fdb9b1c9ef4f6" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0bf1250081890dcac7e8e760ef0" FOREIGN KEY ("ingredienteId") REFERENCES "ingredientes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_91bed45d0ae9fe636309449b94c" FOREIGN KEY ("pedidoId") REFERENCES "pedido" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_ingredientesalimento"("id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId") SELECT "id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId" FROM "ingredientesalimento"`);
        await queryRunner.query(`DROP TABLE "ingredientesalimento"`);
        await queryRunner.query(`ALTER TABLE "temporary_ingredientesalimento" RENAME TO "ingredientesalimento"`);
        await queryRunner.query(`CREATE TABLE "temporary_itenspedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantidade" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "pedidoId" integer, "alimentoId" integer, CONSTRAINT "FK_aa2b04aec345e137abafd7550ff" FOREIGN KEY ("pedidoId") REFERENCES "pedido" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8881352e898df02bdee9d5001ba" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_itenspedido"("id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId") SELECT "id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId" FROM "itenspedido"`);
        await queryRunner.query(`DROP TABLE "itenspedido"`);
        await queryRunner.query(`ALTER TABLE "temporary_itenspedido" RENAME TO "itenspedido"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itenspedido" RENAME TO "temporary_itenspedido"`);
        await queryRunner.query(`CREATE TABLE "itenspedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantidade" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "pedidoId" integer, "alimentoId" integer)`);
        await queryRunner.query(`INSERT INTO "itenspedido"("id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId") SELECT "id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId" FROM "temporary_itenspedido"`);
        await queryRunner.query(`DROP TABLE "temporary_itenspedido"`);
        await queryRunner.query(`ALTER TABLE "ingredientesalimento" RENAME TO "temporary_ingredientesalimento"`);
        await queryRunner.query(`CREATE TABLE "ingredientesalimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "alimentoId" integer, "ingredienteId" integer, "pedidoId" integer, CONSTRAINT "REL_91bed45d0ae9fe636309449b94" UNIQUE ("pedidoId"))`);
        await queryRunner.query(`INSERT INTO "ingredientesalimento"("id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId") SELECT "id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId" FROM "temporary_ingredientesalimento"`);
        await queryRunner.query(`DROP TABLE "temporary_ingredientesalimento"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "itenspedido"`);
        await queryRunner.query(`DROP TABLE "alimento"`);
        await queryRunner.query(`DROP TABLE "ingredientesalimento"`);
        await queryRunner.query(`DROP TABLE "ingredientes"`);
    }

}
