document.querySelectorAll(".timeAndEvent .time").forEach(e => {
    const [hours, mins] = e.innerText.split(":");

    if (hours > 12) {
        e.innerText = `${hours - 12}:${mins} PM`;
    }
    else if (hours == 0) {
        e.innerText = `12:${mins} AM`;
    }
    else if (hours == 12) {
        e.innerHTML = `12:${mins} PM`;
    }
    else {
        if (hours < 10) e.innerText = `${hours.substring(1)}:${mins} AM`;
        else e.innerText = `${hours}:${mins} AM`;
    }
});