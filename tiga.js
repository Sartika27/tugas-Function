
let hitungUsiaKucing = (angka) => {
    event.preventDefault();

    let kuUmur= document.getElementById('years').value;
    let kucingUmur;
    if (kuUmur == 1){
        kucingUmur = 17;
    }
    else if (kuUmur == 2){
        kucingUmur = 17 + 9;
    }
    else if (kuUmur > 2){
        kucingUmur = (kuUmur - 2) * 4 + 24 ;
    }
    else {
        kucingUmur = 0;
    }

document.getElementById('outputCat').innerHTML= kucingUmur + ' years old in human years.';
}