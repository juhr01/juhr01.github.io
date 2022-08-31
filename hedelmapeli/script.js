let panosTeksti = document.querySelector("#panosTeksti");
let rahaTeksti = document.querySelector("#rahaTeksti");
let saldo = 50;
let panos = 1;

let lukitseminen = false;

let lukko1 = false;
let lukko2 = false;
let lukko3 = false;
let lukko4 = false;

const pv = document.querySelector("#punajuurivoitto");
const sv = document.querySelector("#sitruunavoitto");
const av = document.querySelector("#appelsiinivoitto");
const bv = document.querySelector("#banaanivoitto");
const vv = document.querySelector("#vesimelonivoitto");


function asetaPanos(x) {
    if (saldo < x) {
        alert('Rahat eivät riitä!');
    } 
    if (saldo >= x) {
        panos = x;
        panosTeksti.innerHTML = panos;

        if (lukitseminen == false) {
            pv.innerHTML = panos * 2;
            sv.innerHTML = panos * 4;
            av.innerHTML = panos * 6;
            bv.innerHTML = panos * 8;
            vv.innerHTML = panos * 10;
        }
        
    }
}


function pelaa() {
    pv.innerHTML = panos * 2;
    sv.innerHTML = panos * 4;
    av.innerHTML = panos * 6;
    bv.innerHTML = panos * 8;
    vv.innerHTML = panos * 10;

    document.getElementById("voittotausta1").style.borderColor = "black";
    document.getElementById("voittotausta2").style.borderColor = "black";
    document.getElementById("voittotausta3").style.borderColor = "black";
    document.getElementById("voittotausta4").style.borderColor = "black";
    document.getElementById("voittotausta5").style.borderColor = "black";

    document.getElementById("voittotausta1").style.borderWidth = "0.1em";
    document.getElementById("voittotausta2").style.borderWidth = "0.1em";
    document.getElementById("voittotausta3").style.borderWidth = "0.1em";
    document.getElementById("voittotausta4").style.borderWidth = "0.1em";
    document.getElementById("voittotausta5").style.borderWidth = "0.1em";
    
    if (saldo < panos) {
        alert('Rahat eivät riitä!');
    } else {
        saldo = saldo - panos;
        rahaTeksti.innerHTML = saldo;

        if (lukko1 == true || lukko2 == true || lukko3 == true || lukko4 == true) {
            lukitseminen = true;
        } else {
            lukitseminen = false;
        }

        if (lukko1 == false) {
            vaihdaKuva("rulla1");
        }
        if (lukko2 == false) {
            vaihdaKuva("rulla2");
        }
        if (lukko3 == false) {
            vaihdaKuva("rulla3");
        }
        if (lukko4 == false) {
            vaihdaKuva("rulla4");
        }

        tarkistaVoitto();

        lukko1 = false;
        lukko2 = false;
        lukko3 = false;
        lukko4 = false;

        if (lukitseminen==false) {
            document.getElementById("lukko1").src = "kuvat/lukitse.png";
            document.getElementById("lukko1").disabled = false;
            document.getElementById("lukko2").src = "kuvat/lukitse.png";
            document.getElementById("lukko2").disabled = false;
            document.getElementById("lukko3").src = "kuvat/lukitse.png";
            document.getElementById("lukko3").disabled = false;
            document.getElementById("lukko4").src = "kuvat/lukitse.png";
            document.getElementById("lukko4").disabled = false;
          }
          else {
            document.getElementById("lukko1").src = "kuvat/lukitselukittu.png";
            document.getElementById("lukko1").disabled = true;
            document.getElementById("lukko2").src = "kuvat/lukitselukittu.png";
            document.getElementById("lukko2").disabled = true;
            document.getElementById("lukko3").src = "kuvat/lukitselukittu.png";
            document.getElementById("lukko3").disabled = true;
            document.getElementById("lukko4").src = "kuvat/lukitselukittu.png";
            document.getElementById("lukko4").disabled = true;
          }
    }
    if (saldo < 1) {
        document.querySelector("#pelaa").remove();
        alert('Rahat loppuivat!');
    }
}

function vaihdaKuva(rulla) {
    var image = "";
    randInt = Math.floor((Math.random() * 5) + 1);
    console.log(randInt);

    switch (randInt) {
        case 1:
            image = "kuvat/munajuuri.png";
            break;
        case 2:
            image = "kuvat/sitruuna.png";
            break;
        case 3:
            image = "kuvat/abelsin.png";
            break;
        case 4:
            image = "kuvat/banan.png";
            break;
        case 5:
            image = "kuvat/mesiveloni.png"
            break;
    }

    document.getElementById(rulla).src = image;
}

function tarkistaVoitto() {
    const kuva1 = document.getElementById("rulla1").src;
    const kuva2 = document.getElementById("rulla2").src;
    const kuva3 = document.getElementById("rulla3").src;
    const kuva4 = document.getElementById("rulla4").src;

    if (kuva1 == kuva2 && kuva2 == kuva3 && kuva3 == kuva4) {
        const tiedostoNimi = kuva1.split('/').pop();
        switch (tiedostoNimi) {
            case "munajuuri.png":
                document.getElementById("voittotausta1").style.borderColor = "red";
                document.getElementById("voittotausta1").style.borderWidth = "0.3em";
                saldo = saldo + panos * 2;
                break;
            case "sitruuna.png":
                document.getElementById("voittotausta2").style.borderColor = "red";
                document.getElementById("voittotausta2").style.borderWidth = "0.3em";
                saldo = saldo + panos * 4;
                break;
            case "abelsin.png":
                document.getElementById("voittotausta3").style.borderColor = "red";
                document.getElementById("voittotausta3").style.borderWidth = "0.3em";
                saldo = saldo + panos * 6;
                break;
            case "banan.png":
                document.getElementById("voittotausta4").style.borderColor = "red";
                document.getElementById("voittotausta4").style.borderWidth = "0.3em";
                saldo = saldo + panos * 8;
                break;
            case "mesiveloni.png":
                document.getElementById("voittotausta5").style.borderColor = "red";
                document.getElementById("voittotausta5").style.borderWidth = "0.3em";
                saldo = saldo + panos * 10;
                break;

        }
        rahaTeksti.innerHTML = saldo;
    }
}

function lukitus(rullaNumero) {
    switch (rullaNumero) {
        case 1:
            if (lukko1 == true) {
                lukko1 = false;
                document.getElementById("lukko1").src = "kuvat/lukitse.png"
            } else {
                lukko1 = true;
                document.getElementById("lukko1").src = "kuvat/avaalukitus.png"
            }
            break;
        case 2:
            if (lukko2 == true) {
                lukko2 = false;
                document.getElementById("lukko2").src = "kuvat/lukitse.png"
            } else {
                lukko2 = true;
                document.getElementById("lukko2").src = "kuvat/avaalukitus.png"
            }
            break;
        case 3:
            if (lukko3 == true) {
                lukko3 = false;
                document.getElementById("lukko3").src = "kuvat/lukitse.png"
            } else {
                lukko3= true;
                document.getElementById("lukko3").src = "kuvat/avaalukitus.png"
            }
            break;
        case 4:
            if (lukko4 == true) {
                lukko4 = false;
                document.getElementById("lukko4").src = "kuvat/lukitse.png"
            } else {
                lukko4 = true;
                document.getElementById("lukko4").src = "kuvat/avaalukitus.png"
            }
            break;
    }
}