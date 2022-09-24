var counter= document.querySelector('.counter');
let count =0;
function changeCounter(span) {
    if (span==plus ) {
     count +=1   
    } else if (span== minus) {
        if(count>0){
        count -=1;}
    }else if(span==reset){
        count=0;        
    }
    counter.innerHTML=count;
}