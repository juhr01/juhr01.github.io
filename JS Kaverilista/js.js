const nimiInput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const friendList = document.querySelector('#friends');
const container = document.querySelector('.container');
const myForm = document.querySelector('#my-form');
let kaverit = [];
const nappi = document.querySelector('.btn');
const label = document.querySelector('.label');

myForm.addEventListener('submit', onSubmit);


    function onSubmit(e) {
        e.preventDefault();

        if (kaverit.length >= 9) {
            kaverit.push(nimiInput.value);
            nimiInput.remove();
            nappi.remove();
            label.remove();
            for (let nimi of kaverit) {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(`${nimi}`));
                friendList.appendChild(li);
            }
        } else if (nimiInput.value === '') {
            msg.classList.add('error');
            msg.innerHTML = 'Syötä nimi';
            setTimeout(() => msg.remove(), 3000);
        } else {
            kaverit.push(nimiInput.value);
            nimiInput.value = '';
        }

    }

