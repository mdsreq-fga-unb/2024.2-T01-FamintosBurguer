module.exports = class SyncDatabase1736868562070 {
  name = 'SyncDatabase1736868562070'

  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE "ingredientes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL)`
    )
    await queryRunner.query(
      `CREATE TABLE "ingredientesalimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "alimentoId" integer, "ingredienteId" integer, "pedidoId" integer, CONSTRAINT "REL_91bed45d0ae9fe636309449b94" UNIQUE ("pedidoId"))`
    )
    await queryRunner.query(
      `CREATE TABLE "alimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "tipo" text NOT NULL, "valor" integer NOT NULL, "observacao" text)`
    )
    await queryRunner.query(
      `CREATE TABLE "itenspedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantidade" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "pedidoId" integer, "alimentoId" integer)`
    )
    await queryRunner.query(
      `CREATE TABLE "pedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cliente" text NOT NULL, "desconto" integer NOT NULL, "total" integer NOT NULL, "subtotal" integer NOT NULL, "data" date NOT NULL, "pagamento" text NOT NULL, "status" text NOT NULL)`
    )
    await queryRunner.query(
      `CREATE TABLE "temporary_ingredientesalimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "alimentoId" integer, "ingredienteId" integer, "pedidoId" integer, CONSTRAINT "REL_91bed45d0ae9fe636309449b94" UNIQUE ("pedidoId"), CONSTRAINT "FK_42295708ca7054fdb9b1c9ef4f6" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0bf1250081890dcac7e8e760ef0" FOREIGN KEY ("ingredienteId") REFERENCES "ingredientes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_91bed45d0ae9fe636309449b94c" FOREIGN KEY ("pedidoId") REFERENCES "pedido" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
    )
    await queryRunner.query(
      `INSERT INTO "temporary_ingredientesalimento"("id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId") SELECT "id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId" FROM "ingredientesalimento"`
    )
    await queryRunner.query(`DROP TABLE "ingredientesalimento"`)
    await queryRunner.query(
      `ALTER TABLE "temporary_ingredientesalimento" RENAME TO "ingredientesalimento"`
    )
    await queryRunner.query(
      `CREATE TABLE "temporary_itenspedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantidade" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "pedidoId" integer, "alimentoId" integer, CONSTRAINT "FK_aa2b04aec345e137abafd7550ff" FOREIGN KEY ("pedidoId") REFERENCES "pedido" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8881352e898df02bdee9d5001ba" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
    )
    await queryRunner.query(
      `INSERT INTO "temporary_itenspedido"("id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId") SELECT "id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId" FROM "itenspedido"`
    )
    await queryRunner.query(`DROP TABLE "itenspedido"`)
    await queryRunner.query(`ALTER TABLE "temporary_itenspedido" RENAME TO "itenspedido"`)
    // Inserindo cardápio atual
    // Lanches
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Burguer', 'Lanche', 1300, 'Pão, hambúrguer, queijo, alface, tomate e maionese, criando um clássico com um toque de sabor irresistível')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Salada', 'Lanche', 1500, 'Pão, hambúrguer, bacon, queijo, alface, tomate e maionese, para quem busca um lanche leve e equilibrado')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Egg', 'Lanche', 1700, 'Pão, hambúrguer, bacon, queijo, alface, tomate, maionese e ovo, oferecendo uma combinação rica de sabores')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Bacon', 'Lanche', 1800, 'Pão, hambúrguer, queijo, bacon, alface, tomate e maionese, para quem aprecia um lanche mais robusto e saboroso')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Tudo', 'Lanche', 2000, 'Pão, hambúrguer, bacon, queijo, alface, tomate, maionese e ingredientes adicionais, um lanche completo e recheado de sabor')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Famintos', 'Lanche', 2800, 'Pão, hambúrguer, bacon, queijo, alface, tomate, maionese e ingredientes extras, ideal para quem busca uma refeição generosa')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Dog no Molho', 'Lanche', 1000, 'Pão, salsicha, bacon, queijo, alface, tomate, maionese e molho especial, para quem gosta de um toque único de sabor')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Dog na Chapa', 'Lanche', 1200, 'Pão, salsicha, bacon, queijo, alface, tomate e maionese, com um sabor que só a chapa pode oferecer')`
    )
    // Bebidas
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Refrigerante 220ml', 'Bebida', 350, 'Refrigerante em lata de 220ml')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Refrigerante 310ml', 'Bebida', 500, 'Refrigerante em lata de 310ml')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Refrigerante 600ml', 'Bebida', 700, 'Refrigerante em lata de 600ml')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Água 500ml', 'Bebida', 250, 'Garrafa de Água de 500ml')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Água Com gás 500ml', 'Bebida', 350, 'Garrafa Com Gás de Água de 500ml')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Suco', 'Bebida', 700, 'Suco de Polpa')`
    )

    // Trios
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Burguer', 'Trio', 2000, 'Pão, hambúrguer, queijo, alface, tomate e maionese, criando um clássico com um toque de sabor irresistível')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Salada', 'Trio', 2200, 'Pão, hambúrguer, bacon, queijo, alface, tomate e maionese, para quem busca um Trio leve e equilibrado')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Egg', 'Trio', 2400, 'Pão, hambúrguer, bacon, queijo, alface, tomate, maionese e ovo, oferecendo uma combinação rica de sabores')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Bacon', 'Trio', 2500, 'Pão, hambúrguer, queijo, bacon, alface, tomate e maionese, para quem aprecia um Trio mais robusto e saboroso')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Tudo', 'Trio', 2700, 'Pão, hambúrguer, bacon, queijo, alface, tomate, maionese e ingredientes adicionais, um Trio completo e recheado de sabor')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('X-Famintos', 'Trio', 3500, 'Pão, hambúrguer, bacon, queijo, alface, tomate, maionese e ingredientes extras, ideal para quem busca uma refeição generosa')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Dog no Molho', 'Trio', 1700, 'Pão, salsicha, bacon, queijo, alface, tomate, maionese e molho especial, para quem gosta de um toque único de sabor')`
    )
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao") VALUES ('Dog na Chapa', 'Trio', 1900, 'Pão, salsicha, bacon, queijo, alface, tomate e maionese, com um sabor que só a chapa pode oferecer')`
    )

    // Adicionais
    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao")
      VALUES ('Alface', 'Adicional', 200, 'Folhas frescas de alface para deixar seu lanche mais leve')`
    );

    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao")
      VALUES ('Hambúrguer', 'Adicional', 1000, 'Um hambúrguer extra para tornar seu lanche ainda mais suculento')`
    );

    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao")
      VALUES ('Batata Palha', 'Adicional', 200, 'Batata palha crocante para um toque especial de sabor')`
    );

    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao")
      VALUES ('Bacon', 'Adicional', 200, 'Fatias crocantes de bacon para dar um toque defumado')`
    );

    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao")
      VALUES ('Queijo', 'Adicional', 200, 'Queijo adicional para mais cremosidade')`
    );

    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao")
      VALUES ('Presunto', 'Adicional', 200, 'Fatias de presunto para incrementar o sabor')`
    );

    await queryRunner.query(
      `INSERT INTO "alimento"("nome", "tipo", "valor", "observacao")
      VALUES ('Ovo', 'Adicional', 200, 'Ovo frito para deixar seu lanche ainda mais completo')`
    );

  }

  

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "itenspedido" RENAME TO "temporary_itenspedido"`)
    await queryRunner.query(
      `CREATE TABLE "itenspedido" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantidade" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "pedidoId" integer, "alimentoId" integer)`
    )
    await queryRunner.query(
      `INSERT INTO "itenspedido"("id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId") SELECT "id", "quantidade", "custom", "observacao", "pedidoId", "alimentoId" FROM "temporary_itenspedido"`
    )
    await queryRunner.query(`DROP TABLE "temporary_itenspedido"`)
    await queryRunner.query(
      `ALTER TABLE "ingredientesalimento" RENAME TO "temporary_ingredientesalimento"`
    )
    await queryRunner.query(
      `CREATE TABLE "ingredientesalimento" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "custom" boolean NOT NULL, "observacao" text NOT NULL, "alimentoId" integer, "ingredienteId" integer, "pedidoId" integer, CONSTRAINT "REL_91bed45d0ae9fe636309449b94" UNIQUE ("pedidoId"))`
    )
    await queryRunner.query(
      `INSERT INTO "ingredientesalimento"("id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId") SELECT "id", "nome", "quantidade", "valor", "custom", "observacao", "alimentoId", "ingredienteId", "pedidoId" FROM "temporary_ingredientesalimento"`
    )
    await queryRunner.query(`DROP TABLE "temporary_ingredientesalimento"`)
    await queryRunner.query(`DROP TABLE "pedido"`)
    await queryRunner.query(`DROP TABLE "itenspedido"`)
    await queryRunner.query(`DROP TABLE "alimento"`)
    await queryRunner.query(`DROP TABLE "ingredientesalimento"`)
    await queryRunner.query(`DROP TABLE "ingredientes"`)
  }
}
