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