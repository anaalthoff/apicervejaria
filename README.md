# apicervejaria
API em Node.Js e banco de dados em PostgreSQL com a utilização do ElephantSQL

Dentro do arquivo banco.js, adicione a URL da sua instância do ElephantSQL dentro dos parênteses da variável "const banco = new pg.Client("")" para ter acesso ao banco de dados.

Para criar a tabela, utilize o código abaixo:
CREATE TABLE cervejaria (
   id SERIAL PRIMARY KEY,
   nome VARCHAR(255) NOT NULL,
   abv NUMERIC NOT NULL,
   tipo VARCHAR(255) NOT NULL,
   nacionalidade VARCHAR(255) NOT NULL
);

Os dados adicionados são:
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES ('Heineken', 4.5, 'Lager', 'Holanda');
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES ('Corona', 5.2, 'Pielsen', 'México');
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES ('Patagônia', 4.2, 'Amber Ale', 'Argentina');
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES ('SaintBeer', 3.5, 'IPA', 'Brasil');
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES ('Duff Beer', 3.5, 'Pielsen', 'EUA');
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES ('Coruja', 3.5, 'Lager', 'Brasil');
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES ('Brugse Zot', 6.2, 'IPA', 'Bélgica').

Para realizar as requisições, poderá utilizar o Postman.
