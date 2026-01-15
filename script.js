const textArea = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordsCount = document.getElementById('wordCount');
const resetButton = document.getElementById('resetButton');

textArea.addEventListener('input', countText);
resetButton.addEventListener('click', resetbtn);

function resetbtn() {
    textArea.value = '';
    charCount.textContent = '0';
    wordsCount.textContent = '0';
}

function countText() {
    const text = textArea.value;
    charCount.textContent = text.length;

    const words = text.trim().split(/\s+/);
    wordsCount.textContent = text.trim() === "" ? 0 : words.length;
}
