// ПЕРЕВЕРТАННЯ КАРТОЧОК

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

// ПЕРЕВЕРТАННЯ КАРТОЧОК

// АКТИВНИЙ ФУТЕР

const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

// АКТИВНИЙ ФУТЕР

//ВИБІР РЕЖИМУ ТЕСТУВАННЯ

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
        } else if (testMode == 1) {
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
        } else {
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
        } else if (testMode == 2) {
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 2;
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else {
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
        } else if (testMode == 3) {
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        }
    } else if (current == 4) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.remove("hidden");
            testMode = 4;
        } else if (testMode == 1) {
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
        } else if (testMode == 4) {
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        }
    } else if (current == 5) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.remove("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 1) {
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
        } else {
        }
    }
}

//ВИБІР РЕЖИМУ ТЕСТУВАННЯ


var dictionary = {
    "assume": ["əˈsjuːm", ["припускати"]],
"chuckles": ["ˈtʃʌkəlz", ["тихо сміятися", "посміюватися"]],
"clean": ["kliːn", ["чистий"]],
"crush": ["krʌʃ", ["закоханість", "симпатія"]],
"factor": ["ˈfæktər", ["фактор", "чинник"]],
"feel like": ["fiːl laɪk", ["хотіти", "мати бажання"]],
"get": ["ɡɛt", ["ставати"]],
"gotta": ["ˈɡɒtə", ["мусиш", "повинен"]],
"hanger": ["ˈhæŋər", ["вішалка", "плечики"]],
"honestly": ["ˈɒnɪstli", ["чесно", "чесно кажучи", "відверто"]],
"horny": ["ˈhɔːrni", ["сексуально збуджений"]],
"hungry": ["ˈhʌŋɡri", ["голодний"]],
"intense": ["ɪnˈtɛns", ["сильний", "інтенсивний", "глибокий"]],
"line": ["laɪn", ["заготовлена фраза", "підкат"]],
"mean": ["miːn", ["мати на увазі"]],
"on a roll": ["ɒn ə rəʊl", ["на хвилі успіху", "коли все вдається"]],
"perform": ["pərˈfɔːrm", ["виступати", "виконувати", "справлятися"]],
"scariest": ["ˈskeəriɪst", ["найстрашніший"]],
"sophisticated": ["səˈfɪstɪkeɪtɪd", ["витончений", "складний", "досвідчений"]],
"vulnerability": ["ˌvʌlnərəˈbɪləti", ["вразливість"]],
"wooden": ["ˈwʊdən", ["дерев'яний"]]}
var mainWord = "";
var mainTranscription = "";
var mainTranslate = "";
let idVariants = ["var_one", "var_two", "var_three", "var_four"];

document.getElementById("next-word").onclick = function () {
    document.getElementById("next-word").style.backgroundColor = "#42703C";
    setTimeout(function () {
        document.getElementById("next-word").style.backgroundColor = "var(--green-bgc)";
    }, 300);
    nextWord();
}

function nextWord() {
    if (Object.entries(dictionary).length !== 0) {
        words = Object.keys(dictionary);
        let randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex];
        document.getElementById("word").innerHTML = randomWord.toUpperCase();

        document.getElementById("transcription").innerHTML = dictionary[randomWord][0];
        let translate = "";
        for (i = 0; i < dictionary[randomWord][1].length; i++) {
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
for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", handleOptionClick);
    options[i].style.backgroundColor = "var(--bgc_card)";
}


function handleOptionClick(event) {
    var selectedOption = event.target;
    // Если выбранный вариант уже имеет выделение (фоновый цвет), снимаем его
    if (selectedOption.style.backgroundColor === "lightblue") {
        selectedOption.style.backgroundColor = "var(--bgc_card)";
        selectedVariant = '';
        return; // Прерываем выполнение функции, чтобы не устанавливать новое выделение
    }
    // Сбросить стили всех вариантов ответа
    for (var i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "var(--bgc_card)";
    }
    // Изменить стиль выбранного варианта ответа
    selectedOption.style.backgroundColor = "lightblue";
    selectedVariant = selectedOption;
}

function createVariantsForTest() {
    let choseId = Math.floor(Math.random() * idVariants.length);
    document.getElementById(idVariants[choseId]).innerHTML = mainTranslate[Math.floor(Math.random() * mainTranslate.length)];
    for (let i = 0; i < idVariants.length; i++) {
        if (i == choseId) {
            document.getElementById(idVariants[choseId]).innerHTML = mainTranslate[Math.floor(Math.random() * mainTranslate.length)];
        } else {
            document.getElementById(idVariants[i]).innerHTML = dictionary[Object.keys(dictionary)[Math.floor(Math.random() * Object.keys(dictionary).length)]][1][Math.floor(Math.random() * this.length)];
        }
    }
}

document.getElementById("apply_variants").onclick = function () {
    checkVariant();
}

function checkVariant() {
    if (selectedVariant == 0 || selectedVariant == '') {
        console.log("Виберіть варінт для відповіді");
    } else {
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
}

/* Поиск пары*/

var coupleLeft = document.getElementsByClassName("couple_left");
var coupleRight = document.getElementsByClassName("couple_right");
var selectedLeftBlock = null;
var selectedRightBlock = null;

function handleLeftVariant(event) {
    var selectedLeftVariant = event.target;
    // Если выбранный вариант уже имеет выделение (фоновый цвет), снимаем его
    if (selectedLeftVariant.style.backgroundColor === "lightblue") {
        selectedLeftVariant.style.backgroundColor = "var(--bgc_card)";
        return; // Прерываем выполнение функции, чтобы не устанавливать новое выделение
    }
    // Сбросить стили всех вариантов ответа
    for (var i = 0; i < coupleLeft.length; i++) {
        coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
    }
    // Изменить стиль выбранного варианта ответа
    selectedLeftVariant.style.backgroundColor = "lightblue";
    selectedLeftBlock = selectedLeftVariant;
    if (selectedLeftBlock !== null && selectedRightBlock !== null){
        handler();
    }

}

function handleRightVariant(event) {
    var selectedRightVariant = event.target;
    // Если выбранный вариант уже имеет выделение (фоновый цвет), снимаем его
    if (selectedRightVariant.style.backgroundColor === "lightblue") {
        selectedRightVariant.style.backgroundColor = "var(--bgc_card)";
        return; // Прерываем выполнение функции, чтобы не устанавливать новое выделение
    }
    // Сбросить стили всех вариантов ответа
    for (var i = 0; i < coupleRight.length; i++) {
        coupleRight[i].style.backgroundColor = "var(--bgc_card)";
    }
    // Изменить стиль выбранного варианта ответа
    selectedRightVariant.style.backgroundColor = "lightblue";
    selectedRightBlock = selectedRightVariant;
    if (selectedLeftBlock !== null && selectedRightBlock !== null){
        handler();
    }
}
let selectedCouple = 0;

function handler() {
    if (dictionary[selectedLeftBlock.textContent][1].includes(selectedRightBlock.textContent)) {
        for (let i = 0; i < 5; i++) {
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
        if (selectedCouple == 3) {
            checkEmptyBlocks();
            selectedLeftBlock = null;
            selectedRightBlock = null;
        }
    }
}

let listEmptyPositionLeft = [];
let listEmptyPositionRight = [];
let suffledListEmptyPositionRight = [];

function checkEmptyBlocks(){
    selectedCouple = 0;
    listEmptyPositionLeft = [];
    listEmptyPositionRight = [];
    for (var i = 0; i < coupleLeft.length; i++) {
        if (coupleLeft[i].textContent == ""){
            listEmptyPositionLeft.push(i);
        }
    }
    for (var i = 0; i < coupleRight.length; i++) {
        if (coupleRight[i].textContent == ""){
            listEmptyPositionRight.push(i);
        }
    }
    updateBlocks();
}

function updateBlocks(){
    // Обновление блока английских слов (левая колонка)

    // Проверяем какие слова уже есть в левой колонке и записываем их положение в кейсах словаря.
    let positionOfExistingValue = [];
    for (let q = 0; q < coupleLeft.length; q++){
        if (coupleLeft[q].textContent !== ""){
            positionOfExistingValue.push(Object.keys(dictionary).indexOf(coupleLeft[q].textContent));
        }
    }
    // Проверяем есть ли значение в массиве positionOfExistingValue, если нету то добавляем это слово
    for (let i = 0; i < listEmptyPositionLeft.length; i++){
        let key = getRandomNumberNotInArray(positionOfExistingValue, Object.keys(dictionary).length);
        positionOfExistingValue.push(key);
        coupleLeft[listEmptyPositionLeft[i]].innerHTML = Object.keys(dictionary)[key];
    }
    // Запускаем Алгоритм Фишера Йетса для перемешивания массива
    suffledListEmptyPositionRight = shuffle(listEmptyPositionRight);

    // Обновляем украинские слова (в правой колонке).

    for (let j = 0; j < listEmptyPositionRight.length; j++){
        coupleRight[suffledListEmptyPositionRight[j]].innerHTML = dictionary[coupleLeft[listEmptyPositionLeft[j]].textContent][1][Math.floor(Math.random() * dictionary[coupleLeft[listEmptyPositionLeft[j]].textContent][1].length)];
    }
}

function getRandomNumberNotInArray(array, lengthArray) {
    var randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * lengthArray); // Генерация случайного числа от 1 до 10
    } while (array.includes(randomNumber));
  
    return randomNumber;
  }

// Алгоритм Фишера Йетса для перемешивания массива
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

/* Написание алгоритма заполнения слов */

let dictionaryFromFindCouple = {};

function createDictionaryFromFindCouple() {
    // обновляем словарь и список
    let arrayOfRandomIndex = [];
    dictionaryFromFindCouple = {};
    // вибираем рандомно индексы с которых будет браться слова
    while (arrayOfRandomIndex.length < 5) {
        let randomValue = Math.floor(Math.random() * Object.keys(dictionary).length);
        if (!arrayOfRandomIndex.includes(randomValue)) {
            arrayOfRandomIndex.push(randomValue);
        }
    }
    // создаем словарь для поиска пары
    for (var i = 0; i < arrayOfRandomIndex.length; i++) {
        let key = Object.keys(dictionary)[arrayOfRandomIndex[i]];
        dictionaryFromFindCouple[key] = dictionary[key];
    }
}

function placeWordsInBloks() {

    createDictionaryFromFindCouple();

    for (var i = 0; i < coupleLeft.length; i++) {
        coupleLeft[i].addEventListener("click", handleLeftVariant);
        coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
        coupleLeft[i].innerHTML = Object.keys(dictionaryFromFindCouple)[i];
    }

    let randomizeTranslate = [];
    while (randomizeTranslate.length < 5) {
        let randomValue = Math.floor(Math.random() * 5);
        if (!randomizeTranslate.includes(randomValue)) {
            randomizeTranslate.push(randomValue);
        }
    }
    for (var i = 0; i < coupleRight.length; i++) {
        coupleRight[i].addEventListener("click", handleRightVariant);
        coupleRight[i].style.backgroundColor = "var(--bgc_card)";
        coupleRight[i].innerHTML = dictionaryFromFindCouple[Object.keys(dictionaryFromFindCouple)[randomizeTranslate[i]]][1][Math.floor(Math.random() * this.length)];
    }
}

/* Поиск пары*/

