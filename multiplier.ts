type Operation = 'multiply'|'add'|'divide';
const calculator = (a:number,b:number,op:Operation): number =>{
    switch(op){
        case "multiply":
            return a*b;
        case "add":
            return a+b;
        case "divide":
            if(b===0) throw new Error('Can\'t divide by 0!');
            return a/b;
        default:
            throw new Error('Operation is not multiply, add or divide!');
    }
}
try{
    console.log(calculator(1,5,'divide'));
}catch(error:unknown){
    let errorMessage = 'Something went wrong: '
    if(error instanceof Error){
        errorMessage+=error.message;
    }
    console.log(errorMessage);
}
// ///////////////////////////////////////////////////////////////////////
const multiplicator = (a:number, b:number, printText:string) => {
    console.log(printText,  a * b);
  }
const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);
//   multiplicator(2, 4, 'Multiplied a string and 4, the result is:');
