function updateThreadTime() {
    document.querySelectorAll(".forum-bottombar .time").forEach(e => {
        const [date, time] = e.innerText.split(" ");
        if (!time) return;
        const [hours, mins] = time.split(":");

        if (hours > 12) {
            e.innerText = `${date} ${hours - 12}:${mins} PM`;
        }
        else if (hours == 0) {
            e.innerText = `${date} 12:${mins} AM`;
        }
        else if (hours == 12) {
            e.innerText = `${date} 12:${mins} PM`;
        }
        else {
            if (hours < 10) e.innerText = `${date} ${hours.substring(1)}:${mins} AM`;
            else e.innerText = `${date} ${hours}:${mins} AM`;
        }
    });
}

const threadObserver = new MutationObserver((mutations, observer) => {
    const targetText = mutations[0].target.textContent.toLowerCase();
    if (targetText.includes("am") || targetText.includes("pm")) {
        observer.disconnect();
        return;
    }
    
    updateThreadTime();
});

updateThreadTime();
if (document.querySelector(".forum-bottombar .time")) {
    threadObserver.observe(document.querySelector(".forum-bottombar .time"), { childList: true });
}