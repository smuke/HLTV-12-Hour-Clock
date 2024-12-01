document.querySelectorAll(".forum-bottombar .time").forEach(e => {
    const [date, time] = e.innerText.split(" ");
    const [hours, mins] = time.split(":");

    if (hours > 12) {
        e.innerText = `${date} ${hours - 12}:${mins} PM`;
    }
    else if (hours == 0) {
        e.innerText = `${date} 12:${mins} AM`;
    }
    else if (hours == 12) {
        e.innerHTML = `12:${mins} PM`;
    }
    else {
        if (hours < 10) e.innerText = `${date} ${hours.substring(1)}:${mins} AM`;
        else e.innerText = `${date} ${hours}:${mins} AM`;
    }
});