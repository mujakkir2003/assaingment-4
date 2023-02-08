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