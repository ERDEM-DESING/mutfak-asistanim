function donustur() {
    let miktar = document.getElementById('amount').value;
    let birim = document.getElementById('unit').value;
    let sonuc = birim === "ml" ? (miktar / 15).toFixed(1) + " kaşık" : (miktar / 140).toFixed(1) + " bardak";
    document.getElementById('resultText').innerText = miktar ? sonuc : "Miktar girin!";
}
function yemekOner() {
    const yemekler = ["Mercimek Çorbası", "Karnıyarık", "Mantı", "Taze Fasulye", "Hünkar Beğendi"];
    document.getElementById('menuResult').innerText = "Önerimiz: " + yemekler[Math.floor(Math.random() * yemekler.length)];
}
function tatliOner() {
    const tatlilar = ["Sütlaç", "Baklava", "Künefe", "Magnolia", "Güllaç"];
    document.getElementById('dessertResult').innerText = "Tatlımız: " + tatlilar[Math.floor(Math.random() * tatlilar.length)];
}
