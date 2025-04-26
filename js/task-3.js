const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
});


/* Без тернарного оператора */


// function updateGreeting() {
//     const trimedValue = nameInput.value.trim();
//     if (trimedValue === '') {
//         nameOutput.textContent = "Anonymous";
//     } else {
//         nameOutput.textContent = trimedValue;
//     }
// }
// nameInput.addEventListener("input", updateGreeting);


/* /Без тернарного оператора */