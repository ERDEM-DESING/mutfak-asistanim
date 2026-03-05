function donustur() {
    let miktar = document.getElementById('amount').value;
    let birim = document.getElementById('unit').value;
    let sonuc = "";

    if (!miktar || miktar <= 0) {
        sonuc = "⚠️ Miktar girin!";
    } else if (birim === "ml") {
        sonuc = miktar + " ml = " + (miktar / 15).toFixed(1) + " yemek kaşığı";
    } else if (birim === "gr") {
        sonuc = miktar + " gr un = " + (miktar / 140).toFixed(1) + " su bardağı";
    }
    document.getElementById('resultText').innerText = sonuc;
}

function yemekOner() {
    const yemekler = [
        "Mercimek Çorbası", 
        "Karnıyarık", 
        "Taze Fasulye", 
        "Mantı", 
        "İmambayıldı", 
        "Yayla Çorbası", 
        "Tas Kebabı",
        "Hünkar Beğendi"
    ];
    const rastgeleIndeks = Math.floor(Math.random() * yemekler.length);
    const secilenYemek = yemekler[rastgeleIndeks];
    
    document.getElementById('menuResult').innerText = "👨‍🍳 Önerimiz: " + secilenYemek;
    console.log("Yemek seçildi: " + secilenYemek); // Hata ayıklama için
}