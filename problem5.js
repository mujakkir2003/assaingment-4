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
