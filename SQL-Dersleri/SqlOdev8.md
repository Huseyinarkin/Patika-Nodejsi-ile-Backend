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