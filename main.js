function updateInvestmentAmount() {
    var investmentAmountSlider = document.getElementById("investmentAmountSlider");
    var investmentAmount = document.getElementById("investmentAmount");
    investmentAmount.value = investmentAmountSlider.value;
}

function updateInterestRate() {
    var interestRateSlider = document.getElementById("interestRateSlider");
    var interestRate = document.getElementById("interestRateInput");
    interestRate.value = interestRateSlider.value;
}

function updateInvestmentPeriod() {
    var investmentPeriodSlider = document.getElementById("investmentPeriodSlider");
    var investmentPeriod = document.getElementById("investmentPeriodInput");
    investmentPeriod.value = investmentPeriodSlider.value;
}

function updateCompoundingFrequency() {
    // No need for updating as it doesn't affect the input values
}

function validateNumberInput(input) {
    var regex = /^[0-9]+$/;
    if (!regex.test(input.value)) {
        input.value = input.value.replace(/[^0-9]/g, "");
    }
}

function calculate() {
    var investmentAmount = parseFloat(document.getElementById("investmentAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRateInput").value);
    var investmentPeriod = parseInt(document.getElementById("investmentPeriodInput").value);
    var compoundingFrequency = parseInt(document.getElementById("compoundingFrequency").value);

    var principalAmount = investmentAmount;

    // Calculate total interest
    var interestPerYear = (investmentAmount * interestRate) / 100;

    // Compounding Calculation
    var n = compoundingFrequency;
    var r = interestRate / 100;
    var t = investmentPeriod;

    var compoundInterest = investmentAmount * Math.pow(1 + r / n, n * t);
    var maturityAmount = compoundInterest.toFixed(2);

    // Calculate the difference between Maturity Amount and Principal Amount
    var totalInterest = (maturityAmount - principalAmount).toFixed(2);

    // Display the results
    document.getElementById("principalAmount").textContent = principalAmount.toFixed(2);
    document.getElementById("totalInterest").textContent = totalInterest;
    document.getElementById("maturityAmount").textContent = maturityAmount;
   
}
