# API Cervejaria

API desenvolvida em Node.js com banco de dados PostgreSQL hospedado no ElephantSQL.
O objetivo é consultar informações de cervejas cadastradas, com endpoints para busca por nome, nacionalidade, tipo, ABV e pesquisas parciais.

## Tecnologias Utilizadas
- Node.js
- Express
- pg (node-postgres)
- ElephantSQL (PostgreSQL cloud)

## Configuração do Banco de Dados

Dentro do arquivo banco.js, adicione a URL da sua instância do ElephantSQL:
`const banco = new pg.Client("SUA_URL_DO_ELEPHANTSQL")`

Crie a tabela cervejaria no seu banco de dados:
`
CREATE TABLE cervejaria (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    abv NUMERIC NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    nacionalidade VARCHAR(255) NOT NULL
);
`

Insira alguns dados iniciais:

`
INSERT INTO cervejaria (nome, abv, tipo, nacionalidade) VALUES
('Heineken', 4.5, 'Lager', 'Holanda'),
('Corona', 5.2, 'Pielsen', 'México'),
('Patagônia', 4.2, 'Amber Ale', 'Argentina'),
('SaintBeer', 3.5, 'IPA', 'Brasil'),
('Duff Beer', 3.5, 'Pielsen', 'EUA'),
('Coruja', 3.5, 'Lager', 'Brasil'),
('Brugse Zot', 6.2, 'IPA', 'Bélgica');
`

## Como Executar

1. Clone este repositório:
```
git clone https://github.com/seu-usuario/api-cervejaria.git
cd api-cervejaria
```
2. Instale as dependências:
```
npm install express body-parser pg`
```
3. Inicie o servidor:
```
node server.js
```

O servidor estará rodando em:
`http://localhost:3000`

## Endpoints
- Buscar cerveja pelo nome exato
`GET /buscar-nome/:nome`

- Buscar cervejas por nacionalidade
`GET /buscar-nac/:nacionalidade`

- Listar cervejas em ordem decrescente de ABV
`GET /maior-abv`

- Buscar cervejas por tipo
`GET /buscar-tipo/:tipo`

- Buscar cervejas pelo nome parcial
`GET /buscar-nome-parcial/:nome`

## Testando a API

Você pode utilizar o Postman ou Insomnia para realizar as requisições.
Basta configurar os métodos HTTP (GET) e chamar os endpoints listados acima.
