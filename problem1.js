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
    const myNumof=mindGame(50);
    console.log(myNumof);
  