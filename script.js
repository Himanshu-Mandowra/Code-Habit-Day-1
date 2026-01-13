const textArea = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordsCount = document.getElementById('wordCount');

textArea.addEventListener('input', countText);

function countText() {
    const text = textArea.value;
    charCount.textContent = text.length;

    const words = text.trim().split(/\s+/);
    wordsCount.textContent = text.trim() === "" ? 0 : words.length;
}
