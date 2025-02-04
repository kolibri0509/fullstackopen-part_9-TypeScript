interface Result {
    periodLength:number,
    trainingDays:number,
    success:boolean,
    target:number,
    average:number,
    ratingDescription:string,
    rating:number
};
const calculateExercises = (hours:number[]):Result=> {
    let periodLength: number = hours.length;
    let trainingDays: number = 0;
    for(let i=0;i<=hours.length;i++){
        if(hours[i]>0){
            trainingDays+=1;
        }
    }
    let success:boolean;
    trainingDays===periodLength ? success=true : success=false;
    const target:number = 2 ;
    let sum:number=hours.reduce((a,b)=> a+b);
    let average:number=sum/hours.length;
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
}
console.log(calculateExercises([0,1,2,0,1.5,1,1]))