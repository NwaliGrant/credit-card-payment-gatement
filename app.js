const cardNumberInput = document.querySelector('.card-number-input');
const cardNumberBox = document.querySelector('.card-number-box');
const cardHolderInput = document.querySelector('.card-holder-input');
const cardHolderName = document.querySelector('.card-holder-name');
const monthInput = document.querySelector('.month-input');
const expMonth = document.querySelector('.exp-month');
const yearInput = document.querySelector('.year-input');
const expYear = document.querySelector('.exp-year');
const cvvInput = document.querySelector('.cvv-input');
const frontCard = document.querySelector('.front');
const backCard = document.querySelector('.back');
const cvvBox = document.querySelector('.cvv-box');
const form = document.querySelector('form');

cardNumberInput.addEventListener('input', () => {
    const cardNumber = cardNumberInput.value.replace(/\D/g, ''); // Remove non-digit characters
    const formattedNumber = formatCardNumber(cardNumber);
    cardNumberBox.textContent = formattedNumber;
});

cardHolderInput.addEventListener('input', () => {
    const cardHolder = cardHolderInput.value.replace(/[^a-zA-Z ]/g, ''); // Remove non-alphabet characters
    cardHolderName.textContent = cardHolder;
});

monthInput.addEventListener('input', () => {
    expMonth.textContent = monthInput.value;
});

yearInput.addEventListener('input', () => {
    expYear.textContent = yearInput.value;
});

cvvInput.addEventListener('mouseenter', () => {
    frontCard.style.transform = 'perspective(1000px) rotateY(-180deg)';
    backCard.style.transform = 'perspective(1000px) rotateY(0deg)';
});

cvvInput.addEventListener('mouseleave', () => {
    frontCard.style.transform = 'perspective(1000px) rotateY(0deg)';
    backCard.style.transform = 'perspective(1000px) rotateY(180deg)';
});

cvvInput.addEventListener('input', () => {
    const cvv = cvvInput.value.replace(/\D/g, '').slice(0, 3); // Remove non-digit characters and limit to 3 digits
    cvvBox.textContent = cvv;
});

function formatCardNumber(cardNumber) {
    const formattedNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim(); // Insert a space after every four digits
    return formattedNumber;
}


form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    // Additional validation and processing logic
  
    // Show SweetAlert message
    swal('Submitted', 'Your payment has been submitted!', 'success');
  });