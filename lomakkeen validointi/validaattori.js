
const select = document.querySelector("#select");

function validateForm() {;
    if (kayttajaIdTyhja()) {
      alert("Kaikki pakolliset kentät tulee täyttää!");
      return false;
    } else if (salasanaTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (nimiTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (osoiteTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (maaTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (postiNroTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (sPostiTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (sukupuoliTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (kieliTyhja()) {
        alert("Kaikki pakolliset kentät tulee täyttää!");
        return false;
    } else if (document.querySelector("#kayttajaId").value.length < 6) {
        alert("Käyttäjä ID on alle 6 merkkiä!");
        return false;
    } else if (document.querySelector("#postiNro").value.length != 5) {
        alert("Postinumero ei ole 5 merkkiä!");
        return false;
    } else if (document.querySelector("#sPosti").value.includes("@") == false) {
        alert("Sähköpostiosoitteen tulee olla sähköpostiosoitteen muotoinen");
        return false;
    } else {
        return true;
    }
  }

  function kayttajaIdTyhja() {
    if (document.forms["lomake"]["kayttajaId"].value == "") {
        return true;
    }
    return false;
  }

  function salasanaTyhja() {
    if (document.forms["lomake"]["salasana"].value == "") {
        return true;
    }
    return false;
  }

  function nimiTyhja() {
    if (document.forms["lomake"]["nimi"].value == "") {
        return true;
    }
    return false;
  }

  function osoiteTyhja() {
    if (document.forms["lomake"]["osoite"].value == "") {
        return true;
    }
    return false;
  }

  function maaTyhja() {
    if (select.options[select.selectedIndex].value == "eivalittu") {
        return true;
    }
    return false;
  }

  function postiNroTyhja() {
    if (document.forms["lomake"]["postiNro"].value == "") {
        return true;
    }
    return false;
  }

  function sPostiTyhja() {
    if (document.forms["lomake"]["sPosti"].value == "") {
        return true;
    }
    return false;
  }

  function sukupuoliTyhja() {
    if (document.getElementById('mies').checked == false && document.getElementById('nainen').checked == false && document.getElementById('muu').checked == false) {
        return true;
    }
    return false;
  }

  function kieliTyhja() {
    if (document.getElementById('suomikieli').checked == false && document.getElementById('muuKuinSuomi').checked == false ) {
        return true;
    }
    return false;
  }