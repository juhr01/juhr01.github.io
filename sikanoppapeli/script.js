let pelaajienMaara = 0;
let noppienMaara = 0;

let tuplat = 0;

let pisteetNyt = 0;
let pelivuoro = 1;

let pisteet1 = 0;
let pisteet2 = 0;
let pisteet3 = 0;

let pelaaja1;
let pelaaja2;
let pelaaja3;

let noppa1 = 0;
let noppa2 = 0;

let nopat0 = new Image();
nopat0.src = "kuvat/noppa1.png"
let nopat1 = new Image();
nopat1.src = "kuvat/noppa2.png"
let nopat2 = new Image();
nopat2.src = "kuvat/noppa3.png"
let nopat3 = new Image();
nopat3.src = "kuvat/noppa4.png"
let nopat4 = new Image();
nopat4.src = "kuvat/noppa5.png"
let nopat5 = new Image();
nopat5.src = "kuvat/noppa6.png"


function saannotEsiin() {
    let saannot = document.getElementById("saannot");
    if (saannot.style.display == "none") {
        saannot.style.display = "block";
        document.getElementById("pelaanappi2").style.display = "none";
        document.getElementById("pelaanappi3").style.display = "none";
        document.getElementById("saantonappi").innerText = "Takaisin";

    } else {
        saannot.style.display = "none";
        document.getElementById("pelaanappi2").style.display = "block";
        document.getElementById("pelaanappi3").style.display = "block";
        document.getElementById("saantonappi").innerText = "Säännöt";
    }
}

function pelaa2SetupEsiin() {
    let pelaa2 = document.getElementById("kaksiPelaajaaSetup");

    if (pelaa2.style.display == "none") {
        pelaa2.style.display = "block";
        document.getElementById("pelaanappi3").style.display = "none";
        document.getElementById("saantonappi").style.display = "none";
        document.getElementById("pelaanappi2").innerHTML = "Takaisin";
    } else {
        pelaa2.style.display = "none";
        document.getElementById("pelaanappi3").style.display = "block";
        document.getElementById("saantonappi").style.display = "block";
        document.getElementById("pelaanappi2").innerHTML = "2 Pelaajaa";
    }
}

function pelaa3SetupEsiin() {
    let pelaa3 = document.getElementById("kolmePelaajaaSetup");

    if (pelaa3.style.display == "none") {
        pelaa3.style.display = "block";
        document.getElementById("pelaanappi2").style.display = "none";
        document.getElementById("saantonappi").style.display = "none";
        document.getElementById("pelaanappi3").innerHTML = "Takaisin";
    } else {
        pelaa3.style.display = "none";
        document.getElementById("pelaanappi2").style.display = "block";
        document.getElementById("saantonappi").style.display = "block";
        document.getElementById("pelaanappi3").innerHTML = "3 Pelaajaa";
    }
}



function yksiNoppa() {
    noppienMaara = 1;
    document.getElementById("noppa1").style.display = "block";
    document.getElementById("peli").style.display = "block";
    pelaa();
}

function kaksiNoppaa() {
    noppienMaara = 2;
    document.getElementById("noppa1").style.display = "block";
    document.getElementById("noppa2").style.display = "block";
    document.getElementById("peli").style.display = "block";
    document.getElementById("tupliaHeitetty").style.display = "block";
    pelaa();
}

function kaksiPelaajaa() {
    if (document.getElementById("pelaaja1nimi2").value.trim().length == 0) {
        pelaaja1 = "Pelaaja 1";
    } else {
        pelaaja1 = document.getElementById("pelaaja1nimi2").value;
        document.getElementById("pelaaja1").innerHTML = pelaaja1;
    }

    if (document.getElementById("pelaaja2nimi2").value.trim().length == 0) {
        pelaaja2 = "Pelaaja 2";
    } else {
        pelaaja2 = document.getElementById("pelaaja2nimi2").value;
        document.getElementById("pelaaja2").innerHTML = pelaaja2;
    }

    pelaajienMaara = 2;
    document.getElementById("tilasto").style.display = "block";
    document.getElementById("pelaaja1t").style.display = "block";
    document.getElementById("pelaaja2t").style.display = "block";

}

function kolmePelaajaa() {
    if (document.getElementById("pelaaja1nimi3").value.trim().length == 0) {
        pelaaja1 = "Pelaaja 1";
    } else {
        pelaaja1 = document.getElementById("pelaaja1nimi3").value;
        document.getElementById("pelaaja1").innerHTML = pelaaja1;
    }

    if (document.getElementById("pelaaja2nimi3").value.trim().length == 0) {
        pelaaja2 = "Pelaaja 2";
    } else {
        pelaaja2 = document.getElementById("pelaaja2nimi3").value;
        document.getElementById("pelaaja2").innerHTML = pelaaja2;
    }

    if (document.getElementById("pelaaja3nimi3").value.trim().length == 0) {
        pelaaja3 = "Pelaaja 3";
    } else {
        pelaaja3 = document.getElementById("pelaaja3nimi3").value;
        document.getElementById("pelaaja3").innerHTML = pelaaja3;
    }

    pelaajienMaara = 3;
    document.getElementById("tilasto").style.display = "block";
    document.getElementById("pelaaja1t").style.display = "block";
    document.getElementById("pelaaja2t").style.display = "block";
    document.getElementById("pelaaja3t").style.display = "block";

}

function arvoNoppa1() {
    noppa1 = Math.round(Math.random() * 5)
    document.getElementById("noppa1").src = eval("nopat" + noppa1 + ".src");
    return noppa1;

}

function arvoNoppa2() {
    noppa2 = Math.round(Math.random() * 5)
    document.getElementById("noppa2").src = eval("nopat" + noppa2 + ".src");
    return noppa2;
}



function pelaa() {
    document.getElementById("pelivuoro").innerHTML = pelaaja1;
    document.getElementById("valikko").style.display = "none";
    document.getElementById("peli").style.display = "block";

}

function heita() {
    arvoNoppa1();
    if (noppienMaara == 2) {
        arvoNoppa2();
    }
    arvioiTulos();
}

function arvioiTulos() {
    if (noppienMaara == 2 && tuplat == 2 && noppa1 == noppa2) {
        pisteetNyt = 0;
        lopetaVuoro();
        return;
    }

    if (noppienMaara == 2 && ((noppa1 == 0 && noppa2 != 0) || (noppa1 != 0 && noppa2 == 0))) {
        pisteetNyt = 0;
        lopetaVuoro();
        return;
    }

    if (noppienMaara == 1 && noppa1 == 0) {
        pisteetNyt = 0;
        lopetaVuoro();
        return;

    }




    if (noppienMaara == 1) {
        pisteetNyt = pisteetNyt + 1 + noppa1;
        document.getElementById("pisteet").innerHTML = pisteetNyt;
        return;
    } else {
        if ((noppa1 == 0 && noppa2 == 0) && tuplat <= 2) {
            pisteetNyt = pisteetNyt + 25;
            tuplat = tuplat + 1;
            document.getElementById("pisteet").innerHTML = pisteetNyt;
            document.getElementById("tuplat").innerHTML = tuplat;
            return;

        } else if (noppa1 == noppa2 && noppa1 != 0 && tuplat <= 2) {
            pisteetNyt = (noppa1 + noppa2 + 2) * 2 + pisteetNyt;
            tuplat = tuplat + 1;
            document.getElementById("pisteet").innerHTML = pisteetNyt;
            document.getElementById("tuplat").innerHTML = tuplat;
            return;
        } else {
            pisteetNyt = noppa1 + noppa2 + 2 + pisteetNyt;
            document.getElementById("pisteet").innerHTML = pisteetNyt;
            return;
        }
    }
}


function lopetaVuoro() {
    if (pisteet1 + pisteetNyt >= 100 && pelivuoro == 1) {
        document.getElementById("peli").style.display = "none";
        document.getElementById("voittaja").innerHTML = pelaaja1;
        document.getElementById("peliloppu").style.display = "block";
    } else if (pisteet2 + pisteetNyt >= 100 && pelivuoro == 2) {
        document.getElementById("peli").style.display = "none";
        document.getElementById("voittaja").innerHTML = pelaaja2;
        document.getElementById("peliloppu").style.display = "block";
    } else if (pisteet3 + pisteetNyt >= 100 && pelivuoro == 3) {
        document.getElementById("peli").style.display = "none";
        document.getElementById("voittaja").innerHTML = pelaaja3;
        document.getElementById("peliloppu").style.display = "block";
    } else {
        jatkaEsiin();
    }





}

function vaihdaVuoroa() {
    if (pelivuoro == 3 && pelaajienMaara == 3) {
        pelivuoro = 1;
        document.getElementById("pelivuoro").innerHTML = pelaaja1;
        return;
    }
    if (pelivuoro == 2 && pelaajienMaara == 2) {
        pelivuoro = 1;
        document.getElementById("pelivuoro").innerHTML = pelaaja1;
        return;
    }
    if (pelivuoro == 2) {
        pelivuoro = pelivuoro + 1;
        document.getElementById("pelivuoro").innerHTML = pelaaja3;
        return;
    }
    if (pelivuoro == 1) {
        pelivuoro = pelivuoro + 1;
        document.getElementById("pelivuoro").innerHTML = pelaaja2;
        return;
    }

}


function jatkaEsiin() {
    document.getElementById("jatka").style.display = "block";
    document.getElementById("vuoroohi").style.display = "block";
    document.getElementById("tupliaHeitetty").style.display = "none";
    document.getElementById("pisteetNyt").style.display = "none";
    document.getElementById("heita").style.display = "none";
    document.getElementById("lopeta").style.display = "none";

    if (pelivuoro == 3 && pelaajienMaara == 3) {
        pisteet3 = pisteetNyt + pisteet3;
        document.getElementById("pelaaja3p").innerHTML = pisteet3;
        return;
    }
    if (pelivuoro == 2 && pelaajienMaara == 2) {
        pisteet2 = pisteetNyt + pisteet2;
        document.getElementById("pelaaja2p").innerHTML = pisteet2;
        return;
    }
    if (pelivuoro == 2) {
        pisteet2 = pisteet2 + pisteetNyt;
        document.getElementById("pelaaja2p").innerHTML = pisteet2;
        return;
    }
    if (pelivuoro == 1) {
        pisteet1 = pisteet1 + pisteetNyt;
        document.getElementById("pelaaja1p").innerHTML = pisteet1;
        return;
    }
}

function jatka() {
    vaihdaVuoroa();
    nollaaPisteet();
    document.getElementById("jatka").style.display = "none";
    document.getElementById("vuoroohi").style.display = "none";

    if (noppienMaara == 2) {
        document.getElementById("tupliaHeitetty").style.display = "block";
    }

    document.getElementById("pisteetNyt").style.display = "block";
    document.getElementById("heita").style.display = "block";
    document.getElementById("lopeta").style.display = "block";
}

function nollaaPisteet() {
    pisteetNyt = 0;
    tuplat = 0;

    document.getElementById("noppa1").src = "kuvat/tyhjanoppa.png";
    document.getElementById("noppa2").src = "kuvat/tyhjanoppa.png";
    document.getElementById("tuplat").innerHTML = tuplat;
    document.getElementById("pisteet").innerHTML = pisteetNyt;
}
