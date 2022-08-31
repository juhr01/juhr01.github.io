const nimiInput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const friendList = document.querySelector('#friends');
const container = document.querySelector('.container');
const myForm = document.querySelector('#my-form');
let kaverit = [];
const add = document.querySelector('.add');
const del = document.querySelector('.delete');
const arrange = document.querySelector('.arrange');
const label = document.querySelector('.label');

add.addEventListener("click", lisaa)
del.addEventListener("click", poista)
arrange.addEventListener("click", jarjesta)

function lisaa() {

        while (friendList.firstChild) {
            friendList.removeChild(friendList.lastChild);
        }
        kaverit.push(nimiInput.value);
        for (let nimi of kaverit) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nimi}`));
            friendList.appendChild(li);
        }
        nimiInput.value = '';
    
}

function poista() {
    
    while (friendList.firstChild) {
        friendList.removeChild(friendList.lastChild);
    }
    let suodatettu = kaverit.filter(kaveri => kaveri !== nimiInput.value);
    for (let nimi of suodatettu) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nimi}`));
        friendList.appendChild(li);
    }
    kaverit = suodatettu;
    nimiInput.value = '';
    
}

function jarjesta() {
    while (friendList.firstChild) {
        friendList.removeChild(friendList.lastChild);
    }
    kaverit.sort();
    for (let nimi of kaverit) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nimi}`));
        friendList.appendChild(li);
    }
}
