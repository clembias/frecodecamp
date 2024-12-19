const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", function() {
    if (number.value === "") {
        output.innerHTML = `Please enter a valid number`; 
    } else {
        const numValue = parseInt(number.value); 

        if (numValue < 1) {
            output.innerHTML = `Please enter a number greater than or equal to 1`;
        } else if (numValue >= 4000) {
            output.innerHTML = `Please enter a number less than or equal to 3999`;
        } else {
            const numberArray = numValue.toString().split("").map(Number); 

            let result = "";
            const thousands = ["", "M", "MM", "MMM"];
            const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
            const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
            const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

            if (numberArray.length === 4) {
                result += thousands[numberArray[0]];
                result += hundreds[numberArray[1]];
                result += tens[numberArray[2]];
                result += units[numberArray[3]];
            } else if (numberArray.length === 3) {
                result += hundreds[numberArray[0]];
                result += tens[numberArray[1]];
                result += units[numberArray[2]];
            } else if (numberArray.length === 2) {
                result += tens[numberArray[0]];
                result += units[numberArray[1]];
            } else if (numberArray.length === 1) {
                result += units[numberArray[0]];
            }
            output.innerHTML = result;
        }
    }
});

