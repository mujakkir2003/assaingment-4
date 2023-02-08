//  Finding Bad data...
let Numbers = [-4, -9, -5, -33, -55]
function findingBadData(numbers) {
   
       const array = Array.isArray(numbers);  
       if (array){
    let Baddata =0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < 0) {
            Baddata++;
        }
    }
    return Baddata;
    }
    else{
        let errorMessage="plese Enter array";
        return errorMessage;
    }
}
// const numberslgth = findingBadData(Numbers);
// console.log(numberslgth);
