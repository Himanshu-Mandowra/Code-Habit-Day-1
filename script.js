const textArea = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordsCount = document.getElementById('wordCount');
const resetButton = document.getElementById('resetButton');
const readingTime = document.getElementById('readingTime');

textArea.addEventListener('input', updateCount);
resetButton.addEventListener('click', resetText);


function resetText() {
    textArea.value = '';
    charCount.textContent = '0';
    wordsCount.textContent = '0';
    readingTime.textContent = '0';
}

function updateCount() {
    const text = textArea.value;
    charCount.textContent = text.length;

    readingTime.textContent = Math.ceil(text.trim().length / 200);

    const words = text.trim().split(/\s+/);
    wordsCount.textContent = text.trim() === "" ? 0 : words.length;
}
