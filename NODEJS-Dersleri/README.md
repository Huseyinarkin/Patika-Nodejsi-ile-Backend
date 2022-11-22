# NodeJs Nedir
****
## NodeJs Ödev 1
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
```js
const inputArray = process.argv.slice(2);
let areaCircle = (radius) => {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(area.toFixed(2));
};
areaCircle(inputArray[0] * 1);
```
****
# Asenkron Javascript
****
## NodeJs Ödev 2
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

**Cevap:** NodeJsOdev2.js
****
# NodeJs'in Temelleri
****
## NodeJs Ödev 3
Daire Modüler Dosyası

* Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
* module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
* require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.

**Cevap:** NodeJsOdev3
****
## NodeJs Ödev 4
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

* employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
* Bu veriyi okuyalım. (READ)
* Bu veriyi güncelleyelim.
* Dosyayı silelim. 

**Cevap:** NodeJsOdev4
****
## NodeJs Ödev 5
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak web sunucumuzu yazalım.

* createServer metodunu kullanacağız.
* index, hakkimda ve iletisim sayfaları oluşturalım.
* Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
* port numarası olarak 5000'i kullanalım.

**Cevap:** NodeJsOdev5

![sonuc](https://user-images.githubusercontent.com/62842902/203212089-0e64513a-9740-4645-b154-0b61b0befccb.png)