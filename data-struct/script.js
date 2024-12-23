function data_struct (){
    const array=[]
    for(let num = 0; num < 100; num=num+1) {
        if(num % 3 == 0 && num % 5 != 0){
            array.push("FIZZ")
        }
        else if(num % 5 == 0 && num % 3 != 0){
            array.push("BUZZ")
        }
        else if(num % 5 == 0 && num % 3 == 0){
            array.push("FIZZBUZZ")
        }
        else array.push(num.toString())
    }
    return array;
}

console.log(data_struct());
