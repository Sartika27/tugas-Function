let suhu  = document.getElementById("suhu");
function convertToFar(){
    let temperature = (parseFloat(suhu .value)*9/5)+32;
    fahrenheit.value= parseFloat(temperature);
}


let fahrenheit = document.getElementById("fahrenheit");
function convertToCel(){
    let temperature = (parseFloat(fahrenheit.value)-32)*5/9;
    suhu.value = parseFloat(temperature);
}

