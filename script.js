// buttons
const buttons = document.querySelectorAll('.toolbar button');

buttons.forEach(button => {
button.addEventListener('click', () => {
    button.classList.toggle('active');
});
});

//delete button
const deleteButton = document.querySelector('.delete button');

deleteButton.addEventListener('click', () => {
    content.innerHTML = '';
    localStorage.setItem('text', '');
});

buttons.forEach(button => {
    deleteButton.addEventListener('click', () => {
    button.classList.remove('active');
});
});

// save editor to localStorage
const content = document.querySelector('.content');

content.addEventListener('input', () => {
localStorage.setItem('text', content.innerHTML);
});

// load localStorage
const savedText = localStorage.getItem('text');

if (savedText) {
content.innerHTML = savedText;
}
