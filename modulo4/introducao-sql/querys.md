1.
a) 
 id VARCHAR(255): string com até 255 caracteres
 name VARCHAR (255) NOT NULL: string com até 255 caracteres, não podendo ser nula
 salary FLOAT NOT NULL: numero não inteiro, não pode ser nulo
 birth_date DATE NOT NULL: data (sem a hora), não pode ser nula 
 gender VARCHAR(6) NOT NULL: string com até 6 caracteres, não pode ser nula 

 b)SHOW TABLES: mostra as tabelas criadas em determinado banco de dados
 SHOW DATABASES: mostra as databases daquele usuário

 c)DESCRIBE Actor: mostra a estrutura(parametros passados na criação) da tabela

 2 b)*Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'*
Entrada duplicada 002 para chave primaria
Nao é possivel registrar mais de um item com o a mesma chave primária, pois ela é única 

c)*Error Code: 1136. Column count doesn't match value count at row 1*
chaves não foram especificadas corretamente, há menos colunas do que valores

d)*Error Code: 1364. Field 'name' doesn't have a default value*
o nome está faltando nos valores

e)*Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1*
Data não estava entre aspas

3.
a) *Escreva uma query que retorne todas as informações das atrizes*
SELECT id, name from Actor WHERE gender = "female"

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
SELECT id, name, salary from Actor WHERE name = "Tony Ramos";

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
Nenhum dado foi encontrado, pois não foram registrados atores com genero "invalid"

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
SELECT id, name, salary from Actor WHERE salary < 500000;

e) *Error Code: 1054. Unknown column 'nome' in 'field list'*
o campo nome não existe, o correto seria "name"

4.
b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;


c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000



5.
a) *Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.*
CREATE TABLE Filmes (

    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    nota INT NOT NULL
    );

*Crie 4 filmes com as seguintes informações:* 

 b) 
    
    id: `001`
    
    Título: `Se Eu Fosse Você`
    
    Sinopse: `Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos`
    
    Data de lançamento: `06/01/2006`
    
    Avaliação: `7`

- INSERT INTO Filmes (id, nome, sinopse, data_lancamento, nota)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
    
c) 
    
    id: `002`
    
    Título: `Doce de mãe`
    
    Sinopse: `Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela`
    
    Data de lançamento: `27/12/2012`
    
    Avaliação: `10`

 - INSERT INTO Filmes (id, nome, sinopse, data_lancamento, nota)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
    
d) 
    id: `003`
    
    Título: `Dona Flor e Seus Dois Maridos`
    
    Sinopse: `Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.`
    
    Data de lançamento: `02/11/2017`
    
    Avaliação: `8`

- INSERT INTO Filmes (id, nome, sinopse, data_lancamento, nota)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-1'-02",
8
);

    
  
    
