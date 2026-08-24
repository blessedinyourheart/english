let randomWord;

var dictionary = {};
var learnedWords = {};
var words = Object.keys(dictionary);

var choseSide = 1;
var mainWindow = document.getElementById('main-word');
mainWindow.onclick = function () {
    changeSideOfTheCard();
}

mainWindow.onmouseleave = function () {
    if (choseSide == 0) {
        choseSide = 1;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( 0deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 180deg )";
    }
}

document.getElementById("submit").onclick = function () {
    checkTheCard();
}
document.getElementById("next-word").onclick = function () {
    document.getElementById("next-word").style.backgroundColor = "#00ff00";
    setTimeout(function () {
        document.getElementById("next-word").style.backgroundColor = "var(--btn-color)";
        document.getElementById("next-word").style.color = "var(--bgc-word)";
    }, 300);
    nextWord();
}


function changeSideOfTheCard() {
    if (choseSide == 1) {
        choseSide = 0;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( -180deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 0deg )";
    } else {
        choseSide = 1;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( 0deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 180deg )";
    }
}

function checkTheCard() {
    let input = document.getElementById("input-field").value.toLowerCase().trim();
    let currentWord = dictionary[randomWord][2].toLowerCase().trim();

    if (input == currentWord) {
        document.getElementById("input-field").value = "";

        document.getElementById("submit").style.backgroundColor = "#00ff00";
        setTimeout(function () {
            document.getElementById("submit").style.backgroundColor = "var(--btn-color)";
            document.getElementById("submit").style.color = "var(--bgc-word)";
        }, 300);
        document.getElementById("input-field").focus();
        learnedWords[randomWord] = dictionary[randomWord];
        delete dictionary[randomWord];
        let index = words.indexOf(randomWord);
        if (index !== -1) {
            words.splice(index, 1);
        }
        nextWord();
    } else {
        document.getElementById("submit").style.backgroundColor = "#ff0000";
        setTimeout(function () {
            document.getElementById("submit").style.backgroundColor = "var(--btn-color)";
            document.getElementById("submit").style.color = "var(--bgc-word)";
        }, 300);
        document.getElementById("input-field").focus();
    }
}

function nextWord() {
    if (Object.entries(dictionary).length !== 0) {
        words = Object.keys(dictionary);
        let randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex];
        document.getElementById("word").innerHTML = dictionary[randomWord][0];
        document.getElementById("transcription").innerHTML = dictionary[randomWord][1];
        document.getElementById("word-translate").innerHTML = dictionary[randomWord][2];
    } else {
        document.getElementById("submit").disabled = true;
        document.getElementById("word").innerHTML = "Congratulation!";
        document.getElementById("transcription").innerHTML = "you learned all words in this page";
        document.getElementById("word-translate").innerHTML = "Вітаємо, ви вивчили всі слова";
    }
}

let flagFloatDictionaryNew = 0;
document.getElementById("list-new-words").onclick = function () {
    if (flagFloatDictionaryNew == 0) {
        flagFloatDictionaryNew = 1;
        document.getElementById("float-menu").classList.remove("hidden");
        document.getElementById("new-words").classList.remove("hidden");
        let textFace = "<b>English</b><br>";
        let textBack = "<b>Українська</b><br>";
        words = Object.keys(dictionary);
        for (let i = 0; i < Object.keys(dictionary).length; i++) {
            textFace += dictionary[words[i]][0] + "<br>";
            document.getElementById("new-words-from-face").innerHTML = textFace;
            textBack += dictionary[words[i]][2] + "<br>";
            document.getElementById("new-words-from-back").innerHTML = textBack;
        }
        document.getElementById("list-new-words").classList.add("active");
    } else {
        flagFloatDictionaryNew = 0;
        document.getElementById("float-menu").classList.add("hidden");
        document.getElementById("new-words").classList.add("hidden");
        document.getElementById("list-new-words").classList.remove("active");
    }
}
let flagFloatDictionaryLearned = 0;
document.getElementById("list-learned-words").onclick = function () {
    if (flagFloatDictionaryLearned == 0) {
        let textFace = "<b>English</b><br>";
        let textBack = "<b>Українська</b><br>";
        let wordsL = Object.keys(learnedWords);
        if (wordsL.length !== 0) {
            flagFloatDictionaryLearned = 1;
            document.getElementById("float-menu").classList.remove("hidden");
            document.getElementById("learned-words").classList.remove("hidden");
            for (let j = 0; j < Object.keys(learnedWords).length; j++) {
                textFace += learnedWords[wordsL[j]][0] + "<br>";
                document.getElementById("learned-words-from-face").innerHTML = textFace;
                textBack += learnedWords[wordsL[j]][2] + "<br>";
                document.getElementById("learned-words-from-back").innerHTML = textBack;
            }
            document.getElementById("list-learned-words").classList.add("active");
        }
    } else {
        flagFloatDictionaryLearned = 0;
        document.getElementById("float-menu").classList.add("hidden");
        document.getElementById("learned-words").classList.add("hidden");
        document.getElementById("list-learned-words").classList.remove("active");
    }
}

function decodeBase64(base64String) {
    var decodedString = decodeURIComponent(
        Array.prototype.map.call(window.atob(base64String), function (char) {
            return "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2);}).join("")
    );
    return decodedString;
}

function loadData() {
    let inputVal = document.getElementById("input-change-theme").value;
    let decodedValue = decodeBase64(inputVal);
    console.log(dictionary);
    dictionary = new Function('return ' + decodedValue)();
    console.log(dictionary);
}

let flagFloatInputChangeTheme = 0;
document.getElementById("change-theme").onclick = function () {
    if (flagFloatInputChangeTheme == 0) {
        flagFloatInputChangeTheme = 1;
        document.getElementById("input-change-theme").classList.remove("hidden");
        document.getElementById("change-theme").classList.add("active");
    } else if (document.getElementById("input-change-theme").value !== "") {
        loadData();
        flagFloatInputChangeTheme = 0;
        document.getElementById("input-change-theme").value = "";
        document.getElementById("input-change-theme").classList.add("hidden");
        document.getElementById("change-theme").classList.remove("active");
        document.getElementById("next-word").disabled = false;
    } else {
        flagFloatInputChangeTheme = 0;
        document.getElementById("input-change-theme").classList.add("hidden");
        document.getElementById("change-theme").classList.remove("active");
    }
}


//_____HANDLERS_______

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        nextWord();
    }
});

document.addEventListener('keydown', (event) => {
    if (Object.entries(dictionary).length !== 0) {
        if (event.code === 'Enter') {
            checkTheCard();
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        changeSideOfTheCard();
    }
});