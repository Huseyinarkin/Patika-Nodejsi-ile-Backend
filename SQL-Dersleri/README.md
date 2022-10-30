# SQL Temelleri 1
****
## SQL Ödev 1

1. film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.
```sql
SELECT title, description FROM film;
```
2. film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.
```sql
SELECT * FROM film 
WHERE length > 60 AND length < 75;
```
3. film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.
```sql
SELECT * FROM film 
WHERE rental_rate = 0.99 AND ( replacement_cost = 12.99 OR replacement_cost = 28.99 );
```
4. customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?
```sql
SELECT last_name FROM customer
WHERE first_name = 'Mary';
```
5. film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.
```sql
SELECT * FROM film
WHERE NOT ( length > 50 ) AND NOT ( rental_rate = 2.99 OR rental_rate = 4.99 );
```
****

## SQL Ödev 2

1. film tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)
```sql
SELECT * FROM film
WHERE replacement_cost BETWEEN 12.99 AND 16.99;
```
2. actor tablosunda bulunan first_name ve last_name sütunlardaki verileri first_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)
```sql
SELECT * FROM actor
WHERE first_name IN ( 'Penelope', 'Nick', 'Ed' );
```
3. film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99, 2.99, 4.99 VE replacement_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)
```sql
SELECT * FROM film
WHERE rental_rate IN ( 0.99, 2.99, 4.99 ) AND replacement_cost IN ( 12.99, 15.99, 28.99 );
```
****

## SQL Ödev 3

1. country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
```sql
SELECT * FROM country
WHERE country LIKE 'A%a';
```
2. country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
```sql
SELECT * FROM country
WHERE country LIKE '%_____n';
```
3. film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.
```sql
SELECT * FROM film
WHERE title ILIKE '%T%T%T%T%';
``` 
4. film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.
```sql
SELECT * FROM film
WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;
```
****

## SQL Ödev 4

1. film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
```sql
SELECT DISTINCT replacement_cost FROM film;
```
2. film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
```sql
SELECT COUNT(DISTINCT replacement_cost ) FROM film;
```
3. film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
```sql
SELECT COUNT(*) FROM film
WHERE title LIKE 'T%' AND rating = 'G';
```
4. country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
```sql
SELECT COUNT(*) FROM country
WHERE country LIKE '_____';
```
5. city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?
```sql
SELECT COUNT(*) FROM city
WHERE city ILIKE '%r';
```
****
# SQL Temelleri 2
****

## SQL Ödev 5

1. film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.
```sql
SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length DESC
LIMIT 5;
```
2. film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.
```sql
SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length ASC
OFFSET 5
LIMIT 5;
```
3. customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.
```sql
SELECT * FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;
```
****
## SQL Ödev 6

1. film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
```sql
SELECT AVG( rental_rate ) FROM film;
```
2. film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?
```sql
SELECT COUNT(*) FROM film
WHERE title LIKE 'C%';
```
3. film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
```sql
SELECT MAX(length) FROM film
WHERE rental_rate = 0.99;
```
4. film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?
```sql
SELECT COUNT(DISTINCT replacement_cost) FROM film
WHERE length > 150;
```
****
## SQL Ödev 7

1. film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.
```sql
SELECT rating FROM film
GROUP BY rating;
```
2. film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.
```sql
SELECT replacement_cost, COUNT(replacement_cost)
FROM film
GROUP BY replacement_cost
HAVING COUNT(replacement_cost) >50;
```
3. customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?
```sql
SELECT store_id, COUNT(*)
FROM customer
GROUP BY store_id;
```
4. city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.
```sql
SELECT country_id, COUNT(*)
FROM city
GROUP BY country_id
ORDER BY COUNT(*) DESC
LIMIT 1;
```
****
# Tablolarla Çalışmak
****
## SQL Ödev 8
1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
```sql
CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);
```
2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
```sql
insert into employee (name, birthday, email) values ('Bren Sparshatt', '1997-12-20', 'bsparshatt0@homestead.com');
insert into employee (name, birthday, email) values ('Aviva Swoffer', '1978-01-27', 'aswoffer1@feedburner.com');
insert into employee (name, birthday, email) values ('Karrah Bodimeade', '1983-08-17', 'kbodimeade2@mac.com');
insert into employee (name, birthday, email) values ('Teirtza Brigge', '2005-08-27', 'tbrigge3@spiegel.de');
insert into employee (name, birthday, email) values ('Moe Sleith', '2000-12-18', 'msleith4@php.net');
insert into employee (name, birthday, email) values ('L;urette Stirtle', '1969-11-29', 'lstirtle5@bbb.org');
insert into employee (name, birthday, email) values ('Krispin Perell', '2014-11-08', 'kperell6@princeton.edu');
insert into employee (name, birthday, email) values ('Allister Duddin', '1960-04-17', 'aduddin7@amazon.com');
insert into employee (name, birthday, email) values ('Vitoria Gason', '2014-03-04', 'vgason8@pinterest.com');
insert into employee (name, birthday, email) values ('Zach Showte', '1953-05-03', 'zshowte9@people.com.cn');
insert into employee (name, birthday, email) values ('Cris O''Flaverty', '1954-04-02', 'coflavertya@thetimes.co.uk');
insert into employee (name, birthday, email) values ('Valma Massy', '1986-09-25', 'vmassyb@sphinn.com');
insert into employee (name, birthday, email) values ('Eleanore Bilam', '2004-03-13', 'ebilamc@sphinn.com');
insert into employee (name, birthday, email) values ('Gretna Gatfield', '1996-02-10', 'ggatfieldd@freewebs.com');
insert into employee (name, birthday, email) values ('Conn Archanbault', '1996-02-24', 'carchanbaulte@netvibes.com');
insert into employee (name, birthday, email) values ('Ellette Perrin', '1988-11-21', 'eperrinf@boston.com');
insert into employee (name, birthday, email) values ('Yasmin Forcer', '2019-08-11', 'yforcerg@oracle.com');
insert into employee (name, birthday, email) values ('Charles Milmoe', '2008-12-29', 'cmilmoeh@ezinearticles.com');
insert into employee (name, birthday, email) values ('Netty Cornuau', '1991-06-28', 'ncornuaui@wp.com');
insert into employee (name, birthday, email) values ('Roth Aurelius', '1979-03-09', 'raureliusj@shareasale.com');
insert into employee (name, birthday, email) values ('Shanan Gabbot', '1982-01-29', 'sgabbotk@networkadvertising.org');
insert into employee (name, birthday, email) values ('Laurene Bowles', '1990-08-12', 'lbowlesl@epa.gov');
insert into employee (name, birthday, email) values ('Freddy Tootin', '1953-12-30', 'ftootinm@seattletimes.com');
insert into employee (name, birthday, email) values ('Nelie Feldheim', '1953-01-08', 'nfeldheimn@webeden.co.uk');
insert into employee (name, birthday, email) values ('Amalia Breache', '1972-09-08', 'abreacheo@ning.com');
insert into employee (name, birthday, email) values ('Orelee Soall', '2011-11-29', 'osoallp@google.co.jp');
insert into employee (name, birthday, email) values ('Charmane Catanheira', '2012-08-31', 'ccatanheiraq@ebay.co.uk');
insert into employee (name, birthday, email) values ('Frans Tozer', '1999-09-17', 'ftozerr@google.co.jp');
insert into employee (name, birthday, email) values ('Jefferey Trangmar', '2006-03-23', 'jtrangmars@arstechnica.com');
insert into employee (name, birthday, email) values ('Shaw Brine', '1976-03-20', 'sbrinet@vistaprint.com');
insert into employee (name, birthday, email) values ('Madlen Akker', '2015-08-14', 'makkeru@wix.com');
insert into employee (name, birthday, email) values ('Rabbi Cozens', '2016-07-26', 'rcozensv@shutterfly.com');
insert into employee (name, birthday, email) values ('Tedra Reany', '2001-11-02', 'treanyw@archive.org');
insert into employee (name, birthday, email) values ('Hesther Halms', '1987-02-21', 'hhalmsx@businessweek.com');
insert into employee (name, birthday, email) values ('Florence Gipp', '1965-01-24', 'fgippy@biglobe.ne.jp');
insert into employee (name, birthday, email) values ('Linnie Patkin', '1977-04-21', 'lpatkinz@domainmarket.com');
insert into employee (name, birthday, email) values ('Garv Taile', '1985-09-11', 'gtaile10@alibaba.com');
insert into employee (name, birthday, email) values ('Nari Folley', '1961-10-08', 'nfolley11@usatoday.com');
insert into employee (name, birthday, email) values ('Jamison Snoding', '2004-02-26', 'jsnoding12@imageshack.us');
insert into employee (name, birthday, email) values ('Jerrine Mattheissen', '1997-08-04', 'jmattheissen13@creativecommons.org');
insert into employee (name, birthday, email) values ('Steffie Conradsen', '1960-03-03', 'sconradsen14@epa.gov');
insert into employee (name, birthday, email) values ('Charlotte Caple', '2021-03-15', 'ccaple15@cmu.edu');
insert into employee (name, birthday, email) values ('Bren Hince', '2019-02-07', 'bhince16@vk.com');
insert into employee (name, birthday, email) values ('Roxi Ottawell', '2000-07-26', 'rottawell17@diigo.com');
insert into employee (name, birthday, email) values ('Elsa Middell', '1952-11-13', 'emiddell18@over-blog.com');
insert into employee (name, birthday, email) values ('Angus Lightbourne', '2005-06-22', 'alightbourne19@indiatimes.com');
insert into employee (name, birthday, email) values ('Eula English', '1981-05-17', 'eenglish1a@reference.com');
insert into employee (name, birthday, email) values ('Tammi Bansal', '2005-11-27', 'tbansal1b@narod.ru');
insert into employee (name, birthday, email) values ('Thorvald O''Donegan', '1954-09-10', 'todonegan1c@biblegateway.com');
insert into employee (name, birthday, email) values ('Raff Ashplant', '1985-10-23', 'rashplant1d@goo.ne.jp');
```
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
```sql
UPDATE employee 
SET email = 'test'
WHERE id IN(1,2,3,4,5)
RETURNING *;
```
4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
```sql
DELETE FROM employee
WHERE email = 'test';
```
****
# JOIN Yapıları
****
## SQL Ödev 9

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
```sql
SELECT  city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id
```
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
```sql
SELECT payment.payment_id, customer.first_name, customer.last_name
FROM payment
INNER JOIN customer
ON payment.customer_id = customer.customer_id
```
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
```sql
SELECT rental.rental_id, customer.first_name, customer.last_name
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
```
****
## SQL Ödev 10

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
```sql
SELECT city, country
FROM city
LEFT JOIN country
ON city.country_id = country.country_id;
```
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
```sql
SELECT  first_name, last_name, payment_id 
FROM customer
RIGHT JOIN payment
ON customer.customer_id = payment.customer_id;
```
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.
```sql
SELECT rental_id, first_name, last_name
FROM customer
FULL JOIN rental
ON customer.customer_id = rental.customer_id;
```
****
## SQL Ödev 11

1. actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
```sql
(SELECT first_name 
FROM actor
ORDER BY first_name)
UNION
(SELECT first_name 
FROM customer 
ORDER BY  first_name);
```
2. actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
```sql
(SELECT first_name 
FROM actor
ORDER BY first_name)
INTERSECT
(SELECT first_name 
FROM customer 
ORDER BY  first_name);
```
3. actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
```sql
(SELECT first_name 
FROM actor
ORDER BY first_name )
EXCEPT
(SELECT first_name 
FROM customer
ORDER BY first_name);
```
4. İlk 3 sorguyu tekrar eden veriler için de yapalım.
```sql
-- UNION ALL
(SELECT first_name 
FROM actor
ORDER BY  first_name)
UNION ALL 
(SELECT first_name 
FROM customer
ORDER BY first_name );

-- INTERSECT ALL
(SELECT first_name 
FROM actor
ORDER BY first_name)
INTERSECT ALL
(SELECT first_name 
FROM customer
ORDER BY first_name );

-- EXCEPT ALL
(SELECT first_name 
FROM actor
ORDER BY first_name)
EXCEPT ALL
(SELECT first_name 
FROM customer
ORDER BY first_name);
```