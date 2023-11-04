function countdown(num) {
    try{
    if (num <= 0){throw new err;}
    }
    catch(err){
        console.log("ERROR: Please input a positive number");
        return undefined;
    }
    const id = setInterval(function(){
        console.log(--num);
        if (num <= 1){
            clearInterval(id);
            console.log("DONE!");
        };
    }, 1000);
}
function randomGame(){
    let count = 0, rand;
    const iD = setInterval(function(){
        rand = Math.random();
        count++;
        if(rand > .75){
            clearInterval(iD)
            console.log(count)
        }
    }, 1000)
}