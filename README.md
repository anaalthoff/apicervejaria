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
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) 
VALUES 
    ('Heineken', 4.5, 'Lager', 'Holanda'), 
    ('Corona', 5.2, 'Pielsen', 'México'), 
    ('Patagônia', 4.2, 'Amber Ale', 'Argentina'), 
    ('SaintBeer', 3.5, 'IPA', 'Brasil'), 
    ('Duff Beer', 3.5, 'Pielsen', 'EUA'), 
    ('Coruja', 3.5, 'Lager', 'Brasil'), 
    ('Brugse Zot', 6.2, 'IPA', 'Bélgica');

Para realizar as requisições, poderá utilizar o Postman.
