// script.js

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
// script.js

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
// script.js

document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});// script.js

let history = [];

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
        addToHistory(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function addToHistory(result) {
    history.push(result);
    if (history.length > 5) {
        history.shift(); // Keep only the last 5 results
    }
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });
}
// script.js
// script.js


function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        history.push(`${display.value} = ${result}`);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function showHistory() {
    const historyModal = document.getElementById('historyModal');
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear previous history

    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });

    historyModal.style.display = 'block'; // Show the modal
}

function closeHistory() {
    const historyModal = document.getElementById('historyModal');
    historyModal.style.display = 'none'; // Hide the modal
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const historyModal = document.getElementById('historyModal');
    if (event.target === historyModal) {
        historyModal.style.display = 'none';
    }
}


