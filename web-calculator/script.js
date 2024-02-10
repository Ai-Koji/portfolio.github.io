let display = document.getElementById("display");

function appendChar(char) {
    display.innerText += char;
}

function clearDisplay() {
    display.innerText = "";
}

function deleteChar() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    let result;
    try {
        result = eval(display.innerText);
    }
    catch {
        result = "error"
    }
    display.innerText = result;
}