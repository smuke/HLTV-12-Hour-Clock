function updateTodaysMatchesTime() {
    document.querySelectorAll(".teambox .middleExtra").forEach(e => {
        const [hours, mins] = e.innerText.split(":");
    
        if (hours > 12) {
            e.innerText = `${hours - 12}:${mins} PM`;
        }
        else if (hours == 0) {
            e.innerText = `12:${mins} AM`;
        }
        else if (hours == 12) {
            e.innerText = `12:${mins} PM`;
        }
        else {
            if (hours < 10) e.innerText = `${hours.substring(1).toString()}:${mins.toString()}\nAM`;
            else e.innerText = `${hours}:${mins} AM`;
        }
    });
}

const todaysMatchesObserver = new MutationObserver((mutations, observer) => {
    const targetText = mutations[0].target.textContent.toLowerCase();
    if (targetText.includes("am") || targetText.includes("pm")) {
        observer.disconnect();
        return;
    }
    
    updateTodaysMatchesTime();
});

updateTodaysMatchesTime();
if (document.querySelector(".teambox .middleExtra")) {
    todaysMatchesObserver.observe(document.querySelector(".teambox .middleExtra"), { childList: true });
}