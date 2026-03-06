const malzemeler = {
    "su": 1, "sut": 1.03, "sivi_yag": 0.92, "un": 0.6,
    "toz_seker": 0.85, "pirinc": 0.9, "pudra_sekeri": 0.6, "kakao": 0.5,
    "tereyagi": 0.91, "bal": 1.42 
};

const birimHacimleri = {
    "su_bardagi": 200, "cay_bardagi": 100, "yemek_kasigi": 15,
    "tatli_kasigi": 10, "cay_kasigi": 5, "ml": 1, "gr": 0 
};

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
    let gramKarsiligi = kaynakBirim === "gr" ? miktar : (miktar * birimHacimleri[kaynakBirim] * yogunluk);

    let finalSonuc;
    if (hedefBirim === "gr") {
        finalSonuc = gramKarsiligi.toFixed(1) + " gr";
    } else {
        let hedefMl = gramKarsiligi / yogunluk;
        finalSonuc = (hedefMl / birimHacimleri[hedefBirim]).toFixed(1) + " " + hedefBirim.replace("_", " ");
    }
    document.getElementById('resultText').innerText = "Sonuç: " + finalSonuc;
}

function yemekOner() {
    const corbalar = ["Mercimek Çorbası", "Ezogelin Çorbası", "Yayla Çorbası", "Domates Çorbası"];
    const anaYemekler = ["Tas Kebabı", "Karnıyarık", "Taze Fasulye", "Hünkar Beğendi", "İzmir Köfte"];
    const yanUrunler = ["Pirinç Pilavı", "Bulgur Pilavı", "Mevsim Salata", "Cacık", "Haydari"];
    const icecekler = ["Bol Köpüklü Ayran", "Acılı Şalgam Suyu", "Ev Yapımı Limonata", "Soğuk Çay", "Reyhan Şerbeti"];

    const secilenCorba = corbalar[Math.floor(Math.random() * corbalar.length)];
    const secilenYemek = anaYemekler[Math.floor(Math.random() * anaYemekler.length)];
    const secilenYan = yanUrunler[Math.floor(Math.random() * yanUrunler.length)];
    const secilenIcecek = icecekler[Math.floor(Math.random() * icecekler.length)];

    document.getElementById('menuResult').innerHTML = 
        "🥣 " + secilenCorba + "<br>" + 
        "🥘 " + secilenYemek + "<br>" + 
        "🍚 " + secilenYan + "<br>" +
        "🥤 " + secilenIcecek;
}

function tatliOner() {
    const tatlilar = ["Sütlaç", "Baklava", "Künefe", "Magnolia", "Güllaç", "Kazandibi", "Supangle"];
    document.getElementById('dessertResult').innerText = "Tatlımız: " + tatlilar[Math.floor(Math.random() * tatlilar.length)];
}// Update 1
// Update 2
// Update 3
// Update 4
// Update 5
// Sync 1
// Sync 2
// Sync 3
// Sync 4
// Sync 5
// Sync 1
// Sync 2
