// ............problem-1..................

// Let’s play a mind game
function mindGame(num){
    if(typeof num =='number'){
    let Multiplenumber=num*3;
    let Sumnumber=Multiplenumber+10;
    let divisonnumber=Sumnumber/2;
    let Absoultenumber=divisonnumber-5;
    return Absoultenumber;
    }
    else{
        let errorMessage="plese Enter Number";
        return errorMessage;
    }
  }
    // const myNumof=mindGame(50);
    // console.log(myNumof);
    
// .............problem-2.............
   
//  Finding even or odd...

function evenOdd(string){
    if(typeof string =='string'){
    if(string.length %2===0){
        let evenNum ='even';
        return evenNum;
    }
    else{
        let oddNum ='odd';
        return oddNum;
    }

}
else{
        let errorMessage="plese Enter sentence";
        return errorMessage;
    }
}
   
//    const myCharacter=evenOdd('Phero');
//    console.log(myCharacter);


// .............problem-3............
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

// ..................problem-4..............
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

// .............problem-5.............
// Convert your gems into diamond..
function gemsToDiamond (friendOne =0,friendTwo=0,friendThree=0){
    let value=friendOne+friendTwo+friendThree;
    if (typeof(value)==='number'){
  let frindOneGems=friendOne*21;
  let frindTwoGems=friendTwo*32;
  let frindThreeGems=friendThree*43;
  let myDiamont=frindOneGems+frindTwoGems+frindThreeGems;
  if(myDiamont>=2000){
      let Diamont=myDiamont-2000;
      return Diamont; 
  }
  
  else if(myDiamont < 2000){
      return myDiamont;
  }
   }
  else{
      let errorMessage="plese  all Enter Number";
      return errorMessage;
  }
}
// let output=gemsToDiamond( 1, 1, 1);
// console.log(output);

