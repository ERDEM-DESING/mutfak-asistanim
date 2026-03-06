// --- BİRİM VE YOĞUNLUK VERİLERİ ---
const malzemeler = {
    "su": 1,
    "sut": 1.03,
    "sivi_yag": 0.92,
    "un": 0.6,
    "toz_seker": 0.85,
    "pirinc": 0.9,
    "pudra_sekeri": 0.6,
    "kakao": 0.5
};

const birimHacimleri = {
    "su_bardagi": 200,
    "cay_bardagi": 100,
    "yemek_kasigi": 15,
    "tatli_kasigi": 10,
    "cay_kasigi": 5,
    "ml": 1,
    "gr": 0 
};

// --- AKILLI DÖNÜŞTÜRÜCÜ FONKSİYONU ---
function donustur() {
    let miktar = parseFloat(document.getElementById('amount').value);
    let kaynakBirim = document.getElementById('unit').value; 
    let hedefBirim = document.getElementById('targetUnit').value; 
    let malzeme = document.getElementById('material').value; 

    if (!miktar) {
        document.getElementById('resultText').innerText = "Lütfen miktar girin!";
        return;
    }

    const yogunluk = malzemeler[malzeme] || 1;
    let gramKarsiligi;

    if (kaynakBirim === "gr") {
        gramKarsiligi = miktar;
    } else {
        let mlKarsiligi = miktar * birimHacimleri[kaynakBirim];
        gramKarsiligi = mlKarsiligi * yogunluk;
    }

    let finalSonuc;
    if (hedefBirim === "gr") {
        finalSonuc = gramKarsiligi.toFixed(1) + " gr";
    } else {
        let hedefMl = gramKarsiligi / yogunluk;
        finalSonuc = (hedefMl / birimHacimleri[hedefBirim]).toFixed(1) + " " + hedefBirim.replace("_", " ");
    }

    document.getElementById('resultText').innerText = "Sonuç: " + finalSonuc;
}

// --- YEMEK ÖNERİSİ ---
function yemekOner() {
    const corbalar = ["Mercimek Çorbası", "Ezogelin Çorbası", "Yayla Çorbası", "Domates Çorbası", "Tarhana Çorbası", "Ayran Aşı Çorbası"];
    const anaYemekler = ["Tas Kebabı", "Karnıyarık", "Taze Fasulye", "Hünkar Beğendi", "İzmir Köfte", "Patlıcan Musakka", "Tavuk Sote", "Kadınbudu Köfte"];
    const yanUrunler = ["Pirinç Pilavı", "Bulgur Pilavı", "Mevsim Salata", "Cacık", "Haydari", "Çoban Salata", "Patates Kızartması"];
    const icecekler = ["Bol Köpüklü Ayran", "Acılı Şalgam Suyu", "Ev Yapımı Limonata", "Naneli Taze Ayran", "Sıkma Portakal Suyu", "Soğuk Çay", "Maden Suyu", "Reyhan Şerbeti", "Demirhindi Şerbeti"];

    const secilenCorba = corbalar[Math.floor(Math.random() * corbalar.length)];
    const secilenYemek = anaYemekler[Math.floor(Math.random() * anaYemekler.length)];
    const secilenYan = yanUrunler[Math.floor(Math.random() * yanUrunler.length)];
    const secilenIcecek = icecekler[Math.floor(Math.random() * icecekler.length)];

    // ÇIKTIYI BURADA KONTROL EDİYORUZ
    document.getElementById('menuResult').innerHTML = 
        "🥣 <b>Çorba:</b> " + secilenCorba + "<br>" + 
        "🥘 <b>Ana Yemek:</b> " + secilenYemek + "<br>" + 
        "🍚 <b>Yan Ürün:</b> " + secilenYan + "<br>" +
        "🥤 <b>İçecek:</b> " + secilenIcecek;
}

// --- TATLI ÖNERİSİ ---
function tatliOner() {
    const tatlilar = ["Sütlaç", "Baklava", "Künefe", "Magnolia", "Güllaç", "Kazandibi", "Şekerpare", "Sufle", "Profiterol", "Trileçe", "Supangle"];
    document.getElementById('dessertResult').innerText = "Tatlımız: " + tatlilar[Math.floor(Math.random() * tatlilar.length)];
}