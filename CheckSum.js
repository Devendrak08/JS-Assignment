function checkSum(a,b){
    let c = a+b
    if(c <= 100){
        return true;
    } else {
        return false 
    }
}
console.log(checkSum(6,1000))