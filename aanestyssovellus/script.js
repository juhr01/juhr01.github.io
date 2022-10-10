//Kiitos Henri!!!

//boolean-muuttuja, joka vaihtuu kirjautuessa
let admin = false;

//tarkistetaan, onko jo välimuistissa votes-arrayta
if (window.localStorage.getItem('votes') == null) {
    let votes = [];
    window.localStorage.setItem('votes', JSON.stringify(votes));
}

//sisäänkirjautuminen
function login() {
    if (document.querySelector("#adminword").value == "orava") {
        document.querySelector("#adminword").style.display = "none";
        document.querySelector("#login").style.display = "none";
        document.querySelector("#logout").style.display = "inline-block";
        document.querySelector("#kirjautuneena").style.display = "inline-block";
        document.querySelector("#logginglabel").style.display = "none";
        document.querySelector("#createBtn").style.display = "inline-block";

        const delBtns = document.querySelectorAll('#delBtn');
        delBtns.forEach(i => {
            i.style.display = 'block';
        })

        admin = true;
        getVotes();
    } else if (document.querySelector("#adminword").value == "") {
        alert('Syötä salainen sana ennen kirjautumista!')
    } else {
        alert('Salainen sana oli väärä!')
    }
}

//uloskirjautuminen
function logout() {
    document.querySelector("#adminword").style.display = "inline-block";
    document.querySelector("#login").style.display = "inline-block";
    document.querySelector("#logout").style.display = "none";
    document.querySelector("#kirjautuneena").style.display = "none";
    document.querySelector("#logginglabel").style.display = "inline-block";
    document.querySelector("#createBtn").style.display = "none";

    const delBtns = document.querySelectorAll('#delBtn');
    delBtns.forEach(i => {
        i.style.display = 'none';
    })

    admin = false;
    getVotes();
}

//luo uusi äänestys -ruudun tuominen esiin
function createVote() {
    document.querySelector("#createVote").style.display = "block";
    document.querySelector("#createBtn").style.display = "none";
    document.querySelector("#votes").style.display = "none";
    document.querySelector("#logging").style.display = "none";
}

//luo uusi äänestys -ruudun piilottaminen
function exitCreate() {
    document.querySelector("#createVote").style.display = "none";
    document.querySelector("#createBtn").style.display = "inline-block";
    document.querySelector("#votes").style.display = "block";
    document.querySelector("#logging").style.display = "block";
}

//luo uusi äänestys -ruudun sulkeminen ja arrayn tekeminen syötetyistä arvoista, joka tallennetaan välimuistiin
function finishCreate() {
    if (document.querySelector("#question").value == "" || document.querySelector("#option1").value == "" || document.querySelector("#option2").value == "") {
        alert("Täytäthän kaikki kentät!");
    } else {
        document.querySelector("#createVote").style.display = "none";
        document.querySelector("#createBtn").style.display = "inline-block";
        document.querySelector("#votes").style.display = "block";
        document.querySelector("#logging").style.display = "block";

        let question = document.querySelector("#question").value;
        let option1 = document.querySelector("#option1").value;
        let option2 = document.querySelector("#option2").value;

        let vote = { voteName: question, voteOptions: [{ "optionName": option1, "votes": 0 }, { "optionName": option2, "votes": 0 }] };

        let votes = JSON.parse(window.localStorage.getItem('votes'));
        votes.push(vote);
        window.localStorage.setItem('votes', JSON.stringify(votes));
    }

}

//getteri, jolla käydään läpi jokainen votes-arrayn arvo, tehdään niille divit ja monen appendchild()-funktion avulla lisätään arrayn arvova käyttäviä elementtejä diviin
function getVotes() {
    let newVoteDiv = document.createElement('div');
    document.querySelector('#votes').innerHTML = "";
    newVoteDiv.innerHTML = "";
    newVoteDiv.className = "votes";
    newVoteDiv.style.display = "block";
    let votes = JSON.parse(window.localStorage.getItem('votes'));
    var voteNumber = 0;

    votes.forEach(vote => {
        //tehdään jokaiselle äänestykselle oma laatikko foreach() avulla
        let newVoteBox = document.createElement('div');
        newVoteBox.innerHTML = "";
        newVoteBox.id = 'newVote';
        newVoteBox.style.display = "block";

        let delBtn = document.createElement('button');
        let delBtnText = document.createTextNode('Poista');
        delBtn.className = "controlBtn";
        delBtn.id = 'delBtn';


        let voteH2 = document.createElement('h2');
        let voteQuestion = document.createTextNode(vote.voteName);
        voteH2.appendChild(voteQuestion);

        delBtn.addEventListener('click', delClick);
        delBtn.appendChild(delBtnText);

        //jos käyttäjä on kirjautunut, näytetään poistonappula
        if (admin == true) {
            newVoteBox.appendChild(delBtn);
        }


        let optionList = document.createElement('ul');
        let optionNumber = 0;

        vote.voteOptions.forEach(option => {
            let optionInList = document.createElement('li');
            let optionTextElement = document.createElement('h3');
            let optionText = document.createTextNode(option.optionName);
            optionTextElement.appendChild(optionText);
            optionInList.appendChild(optionTextElement);

            let h4 = document.createElement('h4');
            let h4text = document.createTextNode("äänet: ");
            h4.appendChild(h4text)
            optionInList.appendChild(h4)

            let span = document.createElement('span');
            span.value = option.votes;
            let spanValue = document.createTextNode(span.value);
            span.appendChild(spanValue);
            optionInList.appendChild(span);

            let p = document.createElement('p');
            optionInList.appendChild(p);
            let voteBtn = document.createElement('button');
            let voteBtnText = document.createTextNode('Äänestä');
            voteBtn.addEventListener('click', voteClick);
            voteBtn.appendChild(voteBtnText);
            voteBtn.dataset.vote = voteNumber;
            voteBtn.dataset.option = optionNumber;
            delBtn.dataset.del1 = voteNumber;
            voteBtn.id = "voteBtn";
            optionInList.appendChild(voteBtn);
            optionList.appendChild(optionInList);
            optionNumber++;


        })

        newVoteBox.appendChild(voteH2);
        newVoteBox.appendChild(optionList);

        newVoteDiv.appendChild(newVoteBox);
        document.querySelector('#votes').appendChild(newVoteDiv);
        voteNumber++;

    })
}

//tehdään välimuistissa olevasta votes-arraysta taas käytettävä array-olio, lisätään yksi votes-arvo lisää määriteltyyn arrayn kohtaan, tallennetaan votes taas välimuistiin ja palautetaan arrayn arvot
function vote(voteId, optionId) {
    let votes = JSON.parse(window.localStorage.getItem('votes'));
    votes[voteId].voteOptions[optionId].votes++;
    window.localStorage.setItem('votes', JSON.stringify(votes));
    return votes[voteId].voteOptions[optionId].votes;
}

//tehdään välimuistissa olevasta votes-arraysta taas käytettävä array-olio, splice() funktion avulla poistetaan määritelty arvo, tallennetaan taas välimuistiin ja suoritetaan getteri uudestaan sovelluksen päivittämiseksi
function voteRemove(vote) {
    let votes = JSON.parse(window.localStorage.getItem('votes'));
    votes.splice(vote, 1);
    window.localStorage.setItem('votes', JSON.stringify(votes));
    getVotes();
}

//kun äänestysnappulaa klikataan, suoritetaan vote()-funktio klikatun elementin arvoilla
function voteClick(event) {
    if (event.target.dataset.vote) {
        let voteSpan = event.target.previousElementSibling.previousElementSibling;
        voteSpan.innerHTML = vote(event.target.dataset.vote, event.target.dataset.option);
    }
}

//kun poistonappulaa klikataan, suoritetaan voteremove()-funktio klikatun elementin arvoilla
function delClick(event) {
    voteRemove(event.target.dataset.vote)
}