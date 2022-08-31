const mylist = document.querySelector("#myList");
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');

function muunna() {

    if (mylist.options[mylist.selectedIndex].value == "cTOf") {
        cTOf();
    } else if (mylist.options[mylist.selectedIndex].value == "cTOk") {
        cTOk();
    } else if (mylist.options[mylist.selectedIndex].value == "fTOc") {
        fTOc();
    } else if (mylist.options[mylist.selectedIndex].value == "fTOk") {
        fTOk();
    } else if (mylist.options[mylist.selectedIndex].value == "kTOc") {
        kTOc();
    } else {
        kTOf();
    }

}

function pyorista(number, decimalPlaces) {
    const factorOfTen = Math.pow(10, decimalPlaces);
    const a = Math.round(number * factorOfTen) / factorOfTen;
    return a;
  }

function cTOf() {
    const lampotila = document.querySelector('#lampotila').value;
    const cTemp = parseFloat(lampotila);
    const cToFahr = (cTemp * 1.8) + 32;
    if (lampotila == '') {
        alert('Syötä lämpötila!');
    } else if (cTemp < -273.15) {
        alert('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste!');
    } else if (isNaN(lampotila)) {
        alert('Syötä ainoastaan numeroita!');
    } else if (document.getElementById('1d').checked == false && document.getElementById('2d').checked == false && document.getElementById('3d').checked == false) {
        alert('Valitse muunnoksen tarkkuus!');
    } else {
        if (document.getElementById('1d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToFahr, 1).toFixed(1)} &#176;F`;
        }
        if (document.getElementById('2d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToFahr, 2).toFixed(2)} &#176;F`;
        }
        if (document.getElementById('3d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToFahr, 3).toFixed(3)} &#176;F`;
        }
    }
}

function cTOk() {
    const lampotila = document.querySelector('#lampotila').value;
    const cTemp = parseFloat(lampotila);
    const cToKel = cTemp + 273.15;
    if (lampotila == '') {
        alert('Syötä lämpötila!');
    } else if (cTemp < -273.15) {
        alert('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste!');
    } else if (isNaN(lampotila)) {
        alert('Syötä ainoastaan numeroita!');
    } else if (document.getElementById('1d').checked == false && document.getElementById('2d').checked == false && document.getElementById('3d').checked == false) {
        alert('Valitse muunnoksen tarkkuus!');
    } else {
        if (document.getElementById('1d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToKel, 1).toFixed(1)} &#176;K`;
        }
        if (document.getElementById('2d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToKel, 2).toFixed(2)} &#176;K`;
        }
        if (document.getElementById('3d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToKel, 3).toFixed(3)} &#176;K`;
        }
    }
}

function fTOc() {
    const lampotila = document.querySelector('#lampotila').value;
    const fTemp = parseFloat(lampotila);
    const fToCel = (fTemp - 32) / 1.8;
    if (lampotila == '') {
        alert('Syötä lämpötila!');
    } else if (fTemp < -459.67) {
        alert('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste!');;
    } else if (isNaN(lampotila)) {
        alert('Syötä ainoastaan numeroita!');
    } else if (document.getElementById('1d').checked == false && document.getElementById('2d').checked == false && document.getElementById('3d').checked == false) {
        alert('Valitse muunnoksen tarkkuus!');
    } else {
        if (document.getElementById('1d').checked == true) {
            document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${pyorista(fToCel, 1).toFixed(1)} &#176;C`;
        }
        if (document.getElementById('2d').checked == true) {
            document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${pyorista(fToCel, 2).toFixed(2)} &#176;C`;
        }
        if (document.getElementById('3d').checked == true) {
            document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${pyorista(fToCel, 3).toFixed(3)} &#176;C`;
        }
    }
}

function fTOk() {
    const lampotila = document.querySelector('#lampotila').value;
    const fTemp = parseFloat(lampotila);
    const fToKel = ((fTemp - 32) / 1.8) + 273.15;
    if (lampotila == '') {
        alert('Syötä lämpötila!');
    } else if (fTemp < -459.67) {
        alert('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste!');
    } else if (isNaN(lampotila)) {
        alert('Syötä ainoastaan numeroita!');
    } else if (document.getElementById('1d').checked == false && document.getElementById('2d').checked == false && document.getElementById('3d').checked == false) {
        alert('Valitse muunnoksen tarkkuus!');
    } else {
        if (document.getElementById('1d').checked == true) {
            document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${pyorista(fToKel, 1).toFixed(1)} &#176;K`;
        }
        if (document.getElementById('2d').checked == true) {
            document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${pyorista(fToKel, 2).toFixed(2)} &#176;K`;
        }
        if (document.getElementById('3d').checked == true) {
            document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${pyorista(fToKel, 3).toFixed(3)} &#176;K`;
        }
    }
}

function kTOc() {
    const lampotila = document.querySelector('#lampotila').value;
    const kTemp = parseFloat(lampotila);
    const kToCel = kTemp - 273.15;
    if (lampotila == '') {
        alert('Syötä lämpötila!');
    } else if (kTemp < 0) {
        alert('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste!');
    } else if (isNaN(lampotila)) {
        alert('Syötä ainoastaan numeroita!');
    } else if (document.getElementById('1d').checked == false && document.getElementById('2d').checked == false && document.getElementById('3d').checked == false) {
        alert('Valitse muunnoksen tarkkuus!');
    } else {
        if (document.getElementById('1d').checked == true) {
            document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${pyorista(kToCel, 1).toFixed(1)} &#176;C`;
        }
        if (document.getElementById('2d').checked == true) {
            document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${pyorista(kToCel, 2).toFixed(2)} &#176;C`;
        }
        if (document.getElementById('3d').checked == true) {
            document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${pyorista(kToCel, 3).toFixed(3)} &#176;C`;
        }
    }
}

function kTOf() {
    const lampotila = document.querySelector('#lampotila').value;
    const kTemp = parseFloat(lampotila);
    const kToFahr = ((kTemp - 273.15) * 1.8) + 32;
    if (lampotila == '') {
        alert('Syötä lämpötila!');
    } else if (kTemp < 0) {
        alert('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste!');
    } else if (isNaN(lampotila)) {
        alert('Syötä ainoastaan numeroita!');
    } else if (document.getElementById('1d').checked == false && document.getElementById('2d').checked == false && document.getElementById('3d').checked == false) {
        alert('Valitse muunnoksen tarkkuus!');
    } else {
        if (document.getElementById('1d').checked == true) {
            document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${pyorista(kToFahr, 1).toFixed(1)} &#176;F`;
        }
        if (document.getElementById('2d').checked == true) {
            document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${pyorista(kToFahr, 2).toFixed(2)} &#176;F`;
        }
        if (document.getElementById('3d').checked == true) {
            document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${pyorista(kToFahr, 3).toFixed(3)} &#176;F`;
        }
    }
}
