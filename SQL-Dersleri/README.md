# SQL Ödev 1

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

# SQL Ödev 2

```sql
SELECT * FROM film
WHERE replacement_cost BETWEEN 12.99 AND 16.99;

SELECT * FROM actor
WHERE first_name IN ( 'Penelope', 'Nick', 'Ed' );

SELECT * FROM film
WHERE rental_rate IN ( 0.99, 2.99, 4.99 ) AND replacement_cost IN ( 12.99, 15.99, 28.99 );
```