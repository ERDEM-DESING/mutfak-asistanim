function donustur() {
    let miktar = document.getElementById('amount').value;
    let birim = document.getElementById('unit').value;
    let sonuc = birim === "ml" ? (miktar / 15).toFixed(1) + " kaşık" : (miktar / 140).toFixed(1) + " bardak";
    document.getElementById('resultText').innerText = miktar ? sonuc : "Miktar girin!";
}

function yemekOner() {
    const corbalar = ["Mercimek Çorbası", "Ezogelin Çorbası", "Yayla Çorbası", "Domates Çorbası"];
    const anaYemekler = ["Tas Kebabı", "Karnıyarık", "Taze Fasulye", "Hünkar Beğendi", "Orman Kebabı"];
    const yanUrunler = ["Pirinç Pilavı", "Bulgur Pilavı", "Mevsim Salata", "Cacık"];

    const secilenCorba = corbalar[Math.floor(Math.random() * corbalar.length)];
    const secilenYemek = anaYemekler[Math.floor(Math.random() * anaYemekler.length)];
    const secilenYan = yanUrunler[Math.floor(Math.random() * yanUrunler.length)];

    document.getElementById('menuResult').innerHTML = 
        "🥣 " + secilenCorba + "<br>" + 
        "🥘 " + secilenYemek + "<br>" + 
        "🍚 " + secilenYan;
}

function tatliOner() {
    const tatlilar = ["Sütlaç", "Baklava", "Künefe", "Magnolia", "Güllaç"];
    document.getElementById('dessertResult').innerText = "Tatlımız: " + tatlilar[Math.floor(Math.random() * tatlilar.length)];
}
