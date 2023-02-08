// Is Less or Greater than seven...
function isLGSeven(Number) {
    if (typeof Number == 'number') {
        let mynumber = Number - 7;
        if (mynumber >= 7) {
            const totalNumber = Number * 2;
            return totalNumber;
        }
        else if (mynumber < 7) {
            return mynumber;
        }

        }
        else {
            let errorMessage = "plese Enter Number";
            return errorMessage;
        }
}
// const Numberof = isLGSeven(6);
// console.log(Numberof);
