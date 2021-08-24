let pembeli = document.getElementById("Klien");
let belanja = document.getElementById("Produk");
document.getElementById("details").addEventListener("click", function () {
    alert('Terima kasih ' +  pembeli.value + " " + 'sudah membeli ' +  belanja.value);
})   