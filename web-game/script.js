// частоиспользуемые элементы
let minNumber, maxNumber,
errorOnlyNum = document.querySelector('#error-only-num'),
errorMinMax = document.querySelector('#error-min-max'),
errorMinNumberMaxNumber = document.querySelector('#error-min-to-max'),
errorOnlyPNumbers = document.querySelector('#error-only-p-numbers'),
errorCoincidence = document.querySelector('#error-coincidence')
interval = document.querySelector('.interval'),
playD = document.querySelector('.play'),
againD = document.querySelector('#again'),
continueD = document.querySelector('#continue'),
gameOver = document.querySelector('#game-over'),
result = document.querySelector('.result'),
score = document.querySelector('#score'),
record = document.querySelector('#record'),
attempt = document.querySelector('#attempt'),
value = document.querySelector('#value'),
moreLess = document.querySelector('#more-less'),
answer = document.querySelector('#answer');

let intervalBool = true; // чтобы отличить play() от check() внутри countin

let attemptCount = 0, recordCount = 0, scoreCount = 0, randNumber, error = false;

function update(){ // обновляем счёт и попытки
    score.innerHTML = scoreCount;
    attempt.innerHTML = attemptCount;
}

function clear(){ //очищаем вводы
    document.querySelector('#value').value = '';
    document.querySelector('#minNumber').value = '';
    document.querySelector('#maxNumber').value = '';
}

function again(){ //перезапуск после проигрыша
    // изменяем параметры
    randNumber = Math.trunc(Math.random() * maxNumber + minNumber);
    if (recordCount > record.innerHTML){
        record.innerHTML = recordCount;
        recordCount = 0;
    }
    scoreCount = 0;
    attemptCount = maxAttempt;
    moreLess.innerHTML = 'больше/меньше';

    gameOver.style.display = 'none';
    againD.style.display = 'none';
    playD.style.display = 'block';
}

function countin(){ // продолжение после ошибки
    errorOnlyNum.style.display = 'none';
    errorMinMax.style.display = 'none';
    errorMinNumberMaxNumber.style.display = 'none';
    errorOnlyPNumbers.style.display = 'none';
    errorCoincidence.style.display = 'none';
    continueD.style.display = 'none';
    if (intervalBool){
        interval.style.display = 'block';
    }
    else {
        playD.style.display = 'block';
        result.style.display = 'flex';
    }
}

function checkValue(isValue){ //проверяем введенные значения
    if (Number.isNaN(minNumber) || Number.isNaN(maxNumber)) { //только числа
        errorOnlyNum.style.display = 'block';
        error = true;
    }
    else if (minNumber > maxNumber) { //только числа от меньшего в к большему
        errorMinNumberMaxNumber.style.display = 'block';
        error = true;
    }
    else if (((minNumber < 0) || (maxNumber < 0))){ // только положителные числа
        errorOnlyPNumbers.style.display = 'block';
        error = true;
    }
    else if (minNumber == maxNumber){// числа не должны совпадать
        errorCoincidence.style.display = 'block';
        error = true;
    }
    else 
        error = false;
    
    if (isValue){
            if (0 > value.value) { // только положительные числа
                errorOnlyPNumbers.style.display = 'block';
                result.style.display = 'none';
                playD.style.display = 'none';
                error = true;
            }
            else if ((value.value < minNumber) || (value.value > maxNumber)) {// числа должны быть в интервале от minNumber до maxNumber 
                document.querySelector('#error-minNumber').innerHTML = minNumber;
                document.querySelector('#error-maxNumber').innerHTML = maxNumber;
                errorMinMax.style.display = 'block';
                result.style.display = 'none';
                playD.style.display = 'none';
                error = true;
            }
            else if (Number.isNaN(Number(value.value))){ // числа не должны содержать символов
                errorOnlyNum.style.display = 'block';
                result.style.display = 'none';
                playD.style.display = 'none';
                error = true;
            }
            else 
                error = false;
        }

    if (error){
        interval.style.display = 'none';
        continueD.style.display = 'block';
    }

    return error;
}  


function play(){
    minNumber = Number(document.querySelector('#minNumber').value);
    maxNumber = Number(document.querySelector('#maxNumber').value);
    
    clear();

    if (checkValue(false)){
        return ;
    }

    interval.style.display = 'none';
    playD.style.display = 'block';
    result.style.display = 'flex';
    document.querySelector('.interval-header').style.display = 'block';
    document.querySelector('.interval-header').innerHTML = `от ${minNumber} до ${maxNumber}`;
    intervalBool = false;
    randNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    maxAttempt = Math.ceil(Math.log(maxNumber) / Math.log(2)) + 1;
    attemptCount = maxAttempt;
    attempt.innerHTML = attemptCount;
}

function check(){
    console.log(randNumber)
    if (checkValue(true)){
        clear();
        return ;}
    if (value.value == randNumber){ // в случае победы
            randNumber = Math.floor(Math.random() * (maxNumber-minNumber) + minNumber);
            scoreCount++;
            recordCount++;
            attemptCount = maxAttempt;
            moreLess.innerHTML = 'больше/меньше'   
    }
    else if (attemptCount == 1){ // в случае проигрыша
        attemptCount = 0;
        gameOver.style.display = 'block';
        playD.style.display = 'none';
        againD.style.display = 'block';
        answer.innerHTML = randNumber;
    }
    else if (value.value < randNumber){ // если  будет меньше 
        attemptCount--;
        moreLess.innerHTML = 'больше';
    }
    else if (value.value > randNumber){ // если будет больше
        attemptCount--;
        moreLess.innerHTML = 'меньше';
    }
    clear();
    update();
}