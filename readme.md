# **🎵 Lyrics Search API - NPM Package**  

**🔍 Cari lirik lagu dengan mudah menggunakan API [zaroffc.xyz](https://api.zaroffc.xyz)!**  
[![NPM Version](https://img.shields.io/npm/v/lyrics-apis?color=blue&label=Latest%20Version)](https://www.npmjs.com/package/lyrics-apis)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)  

---

## **✨ Fitur**  
✔️ Cari lirik lagu berdasarkan **judul** dan **artis**  
✔️ Response cepat dalam format **JSON**  
✔️ Mudah diintegrasikan ke proyek Node.js  

---

## **🚀 Instalasi**  
```bash
npm install lyrics-apis
# atau
yarn add lyrics-apis
```

---

## **📌 Cara Pakai**  

### **1. Cari Lirik Berdasarkan Judul & Artis**  
```javascript
const lyrics = require('lyrics-apis');

lyrics.search({ 
  title: 'Blinding Lights', 
  artist: 'The Weeknd' 
})
  .then(console.log)
  .catch(console.error);
```

---

## **📋 Contoh Response**  
```json
{
  "status": true,
  "creator": "ZarOffc",
  "metadata": {
    "apiVersion": "2.0",
    "searchEngine": "Musixmatch"
  },
  "data": {
    "title": "Tarian Penghancur Raya",
    "artist": ".Feast",
    "trackId": "187038861",
    "artworkUrl": "https://s.mxmcdn.net/images-storage/albums5/7/9/4/2/4/7/46742497_350_350.jpg",
    "lyrics": "Mata dan peluh yang asin\nPerlahan dihapus angin\nJogja yang beku mendingin\nMenari menghancurkan alam raya yang kecewa\n\nDibuatnya malapetaka\nKamar berjeruji berpenghuni bersafari berbagai fauna\nFlora kerasukan freon di ruko toko bunga\nBank ahli industri teknologi\nEtnografi produksi menggurui penghuni asli\n\nBerbicara cepat bilang haram\nKearifan lokal yang dibungkam\nTuli pada yang belajar alam\nMati sesak nafas tengah malam\n\nTrotoar lebar, bahan hijau, Tesla\nKalah cepat disalip kuda Asia\nTewas di lampu merah, garis zebra\nEfek Rumah Kaca tiba-tiba suddenly di mana-mana\n\nUap terlontar mengepung kota\nBerlomba ciptakan plastik kita\nSaat senja kehabisan kata\nSiang malam pun gelap gulita\n\nKerja bakti menyusun neraka\nKita miliki bahan bakarnya\nPerihal waktu tunggu datangnya\nO2 dijual oleh negara\n\nOh, terima kasih 'kan usahanya\nSedotan besi, plastik cycle tiga\nPun pepohonan tak berkuasa\nLawan kebijakan yang bertamasya\n\nBurung bersiul malapetaka\nGurun menatap dingin manusia\nLaut dan pegunungan kecewa\nKudeta besar alam semesta\n\nSiarkan kabar penelan surya\nMeleleh matikan kutub utara\nAmalkan tarian penghancur raya\nKobarkan tarian penghancur raya\n\nKobarkan tarian penghancur raya\nKobarkan tarian penghancur raya"
  }
}
```

---

## **❓ FAQ**  

### **Q: Apa yang terjadi jika lirik tidak ditemukan?**  
A: API akan mengembalikan respons dengan `status: "error"` dan pesan yang sesuai.  

### **Q: Apakah API ini gratis?**  
A: Ya! API dari [zaroffc.xyz](https://api.zaroffc.xyz) **gratis** untuk penggunaan pribadi.  

### **Q: Bagaimana cara kontribusi?**  
Buka **Issue** atau **Pull Request** di [GitHub Repository](https://github.com/ZarOffc11/lyrics-apis).  

---

## **📜 License**  
**MIT License** © 2025 [ZarOffc](https://github.com/ZarOfff11)  

---

**🎶 Happy Coding!**  
🔥 **Jangan lupa kasih ⭐ di [GitHub](https://github.com/ZarOffc11/lyrics-apis) jika package ini membantu!**  

---

### **🔗 Links**  
- **NPM Package**: [https://www.npmjs.com/package/lyrics-apis](https://www.npmjs.com/package/lyrics-apis)  
- **GitHub Repo**: [https://github.com/ZarOffc11/lyrics-apis](https://github.com/ZarOffc11/lyrics-apis)  
- **API Docs**: [https://api.zaroffc.xyz/](https://api.zaroffc.xyz/)  

---

**💡 Ide untuk pengembangan?**  
Buka **Discussion** atau **Issue** di GitHub! 🚀  

---

**🎤 Contoh Lagu Populer untuk Dicoba:**  
- `"Dynamite" - BTS`  
- `"Stay" - The Kid LAROI, Justin Bieber`  
- `"Levitating" - Dua Lipa`  

**Coba sekarang dan dapatkan liriknya!** 🎶
