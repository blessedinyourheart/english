// ПЕРЕВЕРТАННЯ КАРТОЧОК

var choseSide = 1;
var mainWindow = document.getElementById('main-word');
// Глобальна змінна для словника
var dictionary = {};

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

// АКТИВНИЙ ФУТЕР

const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

// ВИБІР РЕЖИМУ ТЕСТУВАННЯ

var testMode = 0;
document.getElementById("mode_test").onclick = function () {
    if (testMode !== 1) {
        setTimeout(function () {
            choseMode(1);
            nextWord();
            createVariantsForTest();
        }, 600);
    }
}
document.getElementById("mode_couple").onclick = function () {
    if (testMode !== 2) {
        setTimeout(function () {
            choseMode(2);
            placeWordsInBloks();
        }, 600);
    }
}
document.getElementById("mode_input").onclick = function () {
    if (testMode !== 3) {
        setTimeout(function () {
            choseMode(3);
        }, 600);
    }
}
document.getElementById("learn_word").onclick = function () {
    if (testMode !== 4) {
        setTimeout(function () {
            choseMode(4);
        }, 600);
    }
}
document.getElementById("setting_btn").onclick = function () {
    if (testMode !== 5) {
        setTimeout(function () {
            choseMode(5);
        }, 600);
    }
}

function choseMode(current) {
    if (current == 1) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 1;
            document.getElementById("main-word").classList.remove("hidden");
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 5) {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        }
    } else if (current == 2) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 5) {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        }
    } else if (current == 3) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 5) {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        }
    } else if (current == 4) {
        if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 4;
            document.getElementById("main-word").classList.remove("hidden");
            document.getElementById("next-word").classList.remove("hidden");
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        } else if (testMode == 5) {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        }
    } else if (current == 5) {
        if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        }
    }
}

var mainWord = "";
var mainTranscription = "";
var mainTranslate = [];
let idVariants = ["var_one", "var_two", "var_three", "var_four"];

// Функція асинхронного завантаження словника за шляхом
async function loadDictionary(filePath) {
    try {
        let response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Помилка завантаження файлу: ${response.statusText}`);
        }
        let data = await response.json();
        
        // Записуємо слова у глобальну змінну
        dictionary = data.words;
        console.log(`Словник "${data.title}" успішно завантажено!`);
        
        // Оновлюємо інтерфейс залежно від поточного активного режиму
        nextWord();
        if (testMode === 1) {
            createVariantsForTest();
        } else if (testMode === 2) {
            placeWordsInBloks();
        }
    } catch (error) {
        console.error("Не вдалося завантажити словник:", error);
    }
}

// Слухач подій на зміну випадаючого списку (автоматично бере шлях з обраного option)
document.getElementById("dictionary-select").addEventListener("change", function(event) {
    loadDictionary(event.target.value);
});

// Завантажуємо словник за замовчуванням під час першого запуску (беремо значення першого опціона з HTML)
window.addEventListener("DOMContentLoaded", () => {
    let selectElement = document.getElementById("dictionary-select");
    if (selectElement && selectElement.value) {
        loadDictionary(selectElement.value);
    }
});

document.getElementById("next-word").onclick = function () {
    document.getElementById("next-word").style.backgroundColor = "#42703C";
    setTimeout(function () {
        document.getElementById("next-word").style.backgroundColor = "var(--green-bgc)";
    }, 300);
    nextWord();
}

function nextWord() {
    let keys = Object.keys(dictionary);
    if (keys.length !== 0) {
        let randomIndex = Math.floor(Math.random() * keys.length);
        let randomWord = keys[randomIndex];
        document.getElementById("word").innerHTML = randomWord.toUpperCase();

        document.getElementById("transcription").innerHTML = dictionary[randomWord][0];
        let translate = "";
        for (let i = 0; i < dictionary[randomWord][1].length; i++) {
            translate += dictionary[randomWord][1][i] + "<br>";
        }
        document.getElementById("word-translate").innerHTML = translate.toUpperCase();
        mainWord = randomWord;
        mainTranscription = dictionary[randomWord][0];
        mainTranslate = dictionary[randomWord][1];
    } else {
        document.getElementById("word").innerHTML = "Congratulation!";
        document.getElementById("transcription").innerHTML = "you learned all words in this page";
        document.getElementById("word-translate").innerHTML = "Вітаємо, ви вивчили всі слова";
    }
}

let selectedVariant = '';
var options = document.getElementsByClassName("option");

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", handleOptionClick);
    options[i].style.backgroundColor = "var(--bgc_card)";
}

function handleOptionClick(event) {
    var selectedOption = event.target;
    if (selectedOption.style.backgroundColor === "lightblue" || selectedOption.style.backgroundColor === "rgb(173, 216, 230)") {
        selectedOption.style.backgroundColor = "var(--bgc_card)";
        selectedVariant = '';
        return;
    }
    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "var(--bgc_card)";
    }
    selectedOption.style.backgroundColor = "lightblue";
    selectedVariant = selectedOption;
}

function createVariantsForTest() {
    let keys = Object.keys(dictionary);
    if (keys.length === 0) return;

    let choseId = Math.floor(Math.random() * idVariants.length);
    document.getElementById(idVariants[choseId]).innerHTML = mainTranslate[Math.floor(Math.random() * mainTranslate.length)];
    
    for (let i = 0; i < idVariants.length; i++) {
        if (i !== choseId) {
            let randomKey = keys[Math.floor(Math.random() * keys.length)];
            let randomTransList = dictionary[randomKey][1];
            let randomTrans = randomTransList[Math.floor(Math.random() * randomTransList.length)];
            document.getElementById(idVariants[i]).innerHTML = randomTrans;
        }
    }
}

document.getElementById("apply_variants").onclick = function () {
    checkVariant();
}

function checkVariant() {
    if (!selectedVariant) {
        console.log("Виберіть варіант для відповіді");
        return;
    }
    if (dictionary[mainWord][1].includes(selectedVariant.textContent)) {
        document.getElementById(selectedVariant.id).classList.add('div-glow-true');
        setTimeout(function () {
            document.getElementById(selectedVariant.id).style.backgroundColor = "var(--bgc_card)";
            document.getElementById(selectedVariant.id).classList.remove('div-glow-true');
        }, 500);
        setTimeout(function () {
            nextWord();
            createVariantsForTest();
            selectedVariant = '';
        }, 500);
    } else {
        document.getElementById(selectedVariant.id).classList.add('div-glow-wrong');
        setTimeout(function () {
            document.getElementById(selectedVariant.id).style.backgroundColor = "var(--bgc_card)";
            document.getElementById(selectedVariant.id).classList.remove('div-glow-wrong');
            selectedVariant = '';
        }, 500);
    }
}

// РЕЖИМ: ПОШУК ПАРИ

var coupleLeft = document.getElementsByClassName("couple_left");
var coupleRight = document.getElementsByClassName("couple_right");
var selectedLeftBlock = null;
var selectedRightBlock = null;
let selectedCouple = 0;
let dictionaryFromFindCouple = {};

function handleLeftVariant(event) {
    var selectedLeftVariant = event.target;
    if (!selectedLeftVariant.textContent) return;

    if (selectedLeftVariant.style.backgroundColor === "lightblue" || selectedLeftVariant.style.backgroundColor === "rgb(173, 216, 230)") {
        selectedLeftVariant.style.backgroundColor = "var(--bgc_card)";
        selectedLeftBlock = null;
        return;
    }
    for (let i = 0; i < coupleLeft.length; i++) {
        coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
    }
    selectedLeftVariant.style.backgroundColor = "lightblue";
    selectedLeftBlock = selectedLeftVariant;
    if (selectedLeftBlock !== null && selectedRightBlock !== null) {
        handler();
    }
}

function handleRightVariant(event) {
    var selectedRightVariant = event.target;
    if (!selectedRightVariant.textContent) return;

    if (selectedRightVariant.style.backgroundColor === "lightblue" || selectedRightVariant.style.backgroundColor === "rgb(173, 216, 230)") {
        selectedRightVariant.style.backgroundColor = "var(--bgc_card)";
        selectedRightBlock = null;
        return;
    }
    for (let i = 0; i < coupleRight.length; i++) {
        coupleRight[i].style.backgroundColor = "var(--bgc_card)";
    }
    selectedRightVariant.style.backgroundColor = "lightblue";
    selectedRightBlock = selectedRightVariant;
    if (selectedLeftBlock !== null && selectedRightBlock !== null) {
        handler();
    }
}

function handler() {
    if (dictionary[selectedLeftBlock.textContent] && dictionary[selectedLeftBlock.textContent][1].includes(selectedRightBlock.textContent)) {
        for (let i = 0; i < coupleLeft.length; i++) {
            if (coupleLeft[i].textContent == selectedLeftBlock.textContent) {
                coupleLeft[i].innerHTML = "";
                coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
            }
            if (coupleRight[i].textContent == selectedRightBlock.textContent) {
                coupleRight[i].innerHTML = "";
                coupleRight[i].style.backgroundColor = "var(--bgc_card)";
            }
        }
        selectedCouple += 1;
        selectedLeftBlock = null;
        selectedRightBlock = null;

        if (selectedCouple >= coupleLeft.length) {
            checkEmptyBlocks();
        }
    } else {
        if (selectedLeftBlock) selectedLeftBlock.style.backgroundColor = "var(--bgc_card)";
        if (selectedRightBlock) selectedRightBlock.style.backgroundColor = "var(--bgc_card)";
        selectedLeftBlock = null;
        selectedRightBlock = null;
    }
}

let listEmptyPositionLeft = [];
let listEmptyPositionRight = [];
let suffledListEmptyPositionRight = [];

function checkEmptyBlocks() {
    selectedCouple = 0;
    listEmptyPositionLeft = [];
    listEmptyPositionRight = [];
    for (let i = 0; i < coupleLeft.length; i++) {
        if (coupleLeft[i].textContent == "") {
            listEmptyPositionLeft.push(i);
        }
    }
    for (let i = 0; i < coupleRight.length; i++) {
        if (coupleRight[i].textContent == "") {
            listEmptyPositionRight.push(i);
        }
    }
    updateBlocks();
}

function updateBlocks() {
    let positionOfExistingValue = [];
    let dictKeys = Object.keys(dictionary);

    for (let q = 0; q < coupleLeft.length; q++) {
        if (coupleLeft[q].textContent !== "") {
            positionOfExistingValue.push(dictKeys.indexOf(coupleLeft[q].textContent));
        }
    }
    
    for (let i = 0; i < listEmptyPositionLeft.length; i++) {
        let key = getRandomNumberNotInArray(positionOfExistingValue, dictKeys.length);
        positionOfExistingValue.push(key);
        coupleLeft[listEmptyPositionLeft[i]].innerHTML = dictKeys[key];
    }
    
    suffledListEmptyPositionRight = shuffle([...listEmptyPositionRight]);

    for (let j = 0; j < listEmptyPositionRight.length; j++) {
        let leftWord = coupleLeft[listEmptyPositionLeft[j]].textContent;
        let transList = dictionary[leftWord][1];
        let randomTrans = transList[Math.floor(Math.random() * transList.length)];
        coupleRight[suffledListEmptyPositionRight[j]].innerHTML = randomTrans;
    }
}

function getRandomNumberNotInArray(array, lengthArray) {
    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * lengthArray);
    } while (array.includes(randomNumber));
    return randomNumber;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createDictionaryFromFindCouple() {
    let dictKeys = Object.keys(dictionary);
    let arrayOfRandomIndex = [];
    dictionaryFromFindCouple = {};

    while (arrayOfRandomIndex.length < 5 && arrayOfRandomIndex.length < dictKeys.length) {
        let randomValue = Math.floor(Math.random() * dictKeys.length);
        if (!arrayOfRandomIndex.includes(randomValue)) {
            arrayOfRandomIndex.push(randomValue);
        }
    }

    for (let i = 0; i < arrayOfRandomIndex.length; i++) {
        let key = dictKeys[arrayOfRandomIndex[i]];
        dictionaryFromFindCouple[key] = dictionary[key];
    }
}

function placeWordsInBloks() {
    createDictionaryFromFindCouple();
    let dictKeys = Object.keys(dictionaryFromFindCouple);

    for (let i = 0; i < coupleLeft.length; i++) {
        coupleLeft[i].removeEventListener("click", handleLeftVariant);
        coupleLeft[i].addEventListener("click", handleLeftVariant);
        coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
        coupleLeft[i].innerHTML = dictKeys[i] || "";
    }

    let randomizeTranslate = [];
    while (randomizeTranslate.length < coupleRight.length && randomizeTranslate.length < dictKeys.length) {
        let randomValue = Math.floor(Math.random() * dictKeys.length);
        if (!randomizeTranslate.includes(randomValue)) {
            randomizeTranslate.push(randomValue);
        }
    }

    for (let i = 0; i < coupleRight.length; i++) {
        coupleRight[i].removeEventListener("click", handleRightVariant);
        coupleRight[i].addEventListener("click", handleRightVariant);
        coupleRight[i].style.backgroundColor = "var(--bgc_card)";
        
        if (dictKeys[randomizeTranslate[i]]) {
            let key = dictKeys[randomizeTranslate[i]];
            let transList = dictionaryFromFindCouple[key][1];
            coupleRight[i].innerHTML = transList[Math.floor(Math.random() * transList.length)];
        } else {
            coupleRight[i].innerHTML = "";
        }
    }
}