### a)

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Deleta coluna "salary" da tabela Actor

b)

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Na tabela Actor, muda o nome da coluna gender para sex que é uma string com até 6 carcteres

c) 

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Na tabela actor muda o gender para gender de string de até 255 caracteres

d) *Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


2.
a) *Escreva uma query que atualize a data de nascimento do ator com o id `003`*
UPDATE Actor
SET birth_date = "2022-08-23" 
WHERE id = "003"

b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*

UPDATE Actor
SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes"

c) *Escreva uma query que atualize todas as informações do ator com o id `005`*
SET name = "Batata", birth_date = '2022-09-30', 
salary = 234567, gender = 'male'
WHERE id = "005";

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não apresenta erro, mas não altera nada 

3
a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

4.

a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*
SELECT MAX(salary)
FROM Actor;

b) *Escreva uma query que pegue o menor salário das atrizes*
SELECT MIN(salary)
FROM Actor WHERE gender= 'female';

c) *Escreva uma query que pegue a quantidade de atrizes*
SELECT COUNT(*) FROM Actor WHERE gender = "female"

d) *Escreva uma query que pegue a soma de todos os salários*
SELECT SUM(salary) FROM Actor 


5.

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

conta o numero de atores de cada genero

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
SELECT id, name FROM Actor
ORDER BY name DESC


c) *Faça uma query que retorne todos os atores ordenados pelo salário*
SELECT * FROM Actor
ORDER BY salary

d) *Faça uma query que retorne os atores com os três maiores salarios*
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3

e) *Faça uma query que retorne a média de salário por gênero*
SELECT AVG(salary)  FROM Actor
GROUP BY gender;


