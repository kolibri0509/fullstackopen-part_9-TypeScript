interface Result {
    periodLength:number,
    trainingDays:number,
    success:boolean,
    target:number,
    average:number,
    ratingDescription:string,
    rating:number
}
const calculateExercises = (argv:string[]):Result=> {
    if(argv.length<3) throw new Error('Not enough arguments');
    argv.splice(0,2);
    if (argv.every((elem)=>!isNaN(Number(elem)))){
        let periodLength: number = argv.length;
        let trainingDays: number = 0;
        let sum: number = 0;
        for(let i=0;i<=argv.length-1;i++){
            if(Number(argv[i])>0){
                trainingDays+=1;
            }
            sum+= Number(argv[i]);
        }
        let success:boolean;
        trainingDays===periodLength ? success=true : success=false;
        const target:number = 2 ;
        let average:number=sum/periodLength;
        let ratingDescription:string;
        let rating:number;
        if(average>=2){
            ratingDescription='Very good!';
            rating=3;
        }else if(average>1.5 && average<2){
            ratingDescription='Not too bad, but could be better';
            rating=2;
        }else{
            ratingDescription='Need more practice';
            rating=1
        }
        return {
            periodLength:periodLength,
            trainingDays:trainingDays,
            success:success,
            target:target,
            average:average,
            ratingDescription:ratingDescription,
            rating:rating
        }
    }else{
        throw new Error('Provided values were not numbers!');
    }
}     
try{
    console.log(calculateExercises(process.argv))
}catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }