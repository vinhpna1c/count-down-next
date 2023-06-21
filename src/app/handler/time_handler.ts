type RemainTimeType=[
    days:number,
    hours:number,
    minutes:number,
    seconds:number,
];
const calculateRemainTime=(end:number)=>{

    return end- Date.now();
}

const useDateDiff=(diff:number):RemainTimeType=>{
    
    let days=0;
    let hours=0;
    let minutes=0;
    let seconds=0;
    seconds=Math.floor(diff%60);
    diff=diff-seconds;
    days=Math.floor(diff/(3600*24));
    diff=diff-3600*24*days;
    hours=Math.floor(diff/3600);
    diff=diff-3600*hours;
    minutes=Math.floor(diff/60);

    return [days,hours,minutes,seconds];
}

export {
    calculateRemainTime,
    useDateDiff
}