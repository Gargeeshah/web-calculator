let calculation = '';

function updateCalculation(value) {
    calculation += value;
    displayCalculation();
}

function calculateResult() {
    try {
            calculation = eval(calculation);
            localStorage.setItem('calculation', calculation);
            displayCalculation();
        } catch (e) {
            document.querySelector('.js-calculation')
                .innerHTML = e;    
        }
}

function clearCalculation() {
    calculation = '';
    localStorage.setItem('calculation', calculation);
    displayCalculation();
}
            
function displayCalculation() {
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
}