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