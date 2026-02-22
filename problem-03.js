var lastDay = 6;

if(lastDay > 0 && lastDay <= 30){
    for(var i = 1; i <= lastDay; i++){
        if(i % 3 === 0){
            console.log('medicine');
        }
        else{
            console.log('rest')
        }
    }
}