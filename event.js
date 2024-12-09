function updateEventPlayoffTimes() {
    document.querySelectorAll(".time-time").forEach(e => {
        const [hours, mins] = e.innerText.split(":");
        console.log(hours, mins);

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
            if (hours < 10) e.innerText = `${hours.substring(1)}:${mins} AM`;
            else e.innerText = `${hours}:${mins} AM`;
        }
    });
}

const eventObserver = new MutationObserver((mutations, observer) => {
    const targetText = mutations[0].target.textContent.toLowerCase();
    if (targetText.includes("am") || targetText.includes("pm")) {
        observer.disconnect();
        return;
    }
    
    updateEventPlayoffTimes();
});

updateEventPlayoffTimes();
eventObserver.observe(document.querySelector(".time-time"), { childList: true });