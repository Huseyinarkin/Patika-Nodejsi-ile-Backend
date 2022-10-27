# SQL Temelleri 1
****
## SQL Ödev 1

```sql
SELECT title, description FROM film;

SELECT * FROM film 
WHERE length > 60 AND length < 75;

SELECT * FROM film 
WHERE rental_rate = 0.99 AND ( replacement_cost = 12.99 OR replacement_cost = 28.99 );

SELECT last_name FROM customer
WHERE first_name = 'Mary';

SELECT * FROM film
WHERE NOT ( length > 50 ) AND NOT ( rental_rate = 2.99 OR rental_rate = 4.99 );
```
****

## SQL Ödev 2

```sql
SELECT * FROM film
WHERE replacement_cost BETWEEN 12.99 AND 16.99;

SELECT * FROM actor
WHERE first_name IN ( 'Penelope', 'Nick', 'Ed' );

SELECT * FROM film
WHERE rental_rate IN ( 0.99, 2.99, 4.99 ) AND replacement_cost IN ( 12.99, 15.99, 28.99 );
```
****

## SQL Ödev 3

```sql
SELECT * FROM country
WHERE country LIKE 'A%a';

SELECT * FROM country
WHERE country LIKE '%_____n';

SELECT * FROM film
WHERE title ILIKE '%T%T%T%T%';

SELECT * FROM film
WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;
```
****

## SQL Ödev 4

```sql
SELECT DISTINCT replacement_cost FROM film;

SELECT COUNT(DISTINCT replacement_cost ) FROM film;

SELECT COUNT(*) FROM film
WHERE title LIKE 'T%' AND rating = 'G';

SELECT COUNT(*) FROM country
WHERE country LIKE '_____';

SELECT COUNT(*) FROM city
WHERE city ILIKE '%r';
```
****
# SQL Temelleri 2
****

## SQL Ödev 5

```sql
SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length DESC
LIMIT 5;

SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length ASC
OFFSET 5
LIMIT 5;

SELECT * FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;
```
****
## SQL Ödev 6

```sql
SELECT AVG( rental_rate ) FROM film;

SELECT COUNT(*) FROM film
WHERE title LIKE 'C%';

SELECT MAX(length) FROM film
WHERE rental_rate = 0.99;

SELECT COUNT(DISTINCT replacement_cost) FROM film
WHERE length > 150;
```
****
## SQL Ödev 7

```sql
SELECT rating FROM film
GROUP BY rating;

SELECT replacement_cost, COUNT(replacement_cost)
FROM film
GROUP BY replacement_cost
HAVING COUNT(replacement_cost) >50;

SELECT store_id, COUNT(*)
FROM customer
GROUP BY store_id;

SELECT country_id, COUNT(*)
FROM city
GROUP BY country_id
ORDER BY COUNT(*) DESC
LIMIT 1;
```