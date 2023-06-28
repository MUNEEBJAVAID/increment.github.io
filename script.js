const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = 0;

const updateCounter = () =>{
    const targetPoint = + counter.getAttribute("data-Tagert");
    const startPoint = Number(counter.innerHTML);
    
    const incr = targetPoint/100;

    if(startPoint < targetPoint){
        counter.innerHTML = `${startPoint + incr}`;
        setTimeout(updateCounter , 1000);
    }

    
}

    updateCounter();
})
