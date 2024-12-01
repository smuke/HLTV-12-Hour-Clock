document.querySelectorAll(".teambox .middleExtra").forEach(e => {
    e.style.lineHeight = "1.5";

    const [hours, mins] = e.innerText.split(":");

    if (hours > 12) {
        e.innerHTML = `${hours - 12}:${mins}<br>PM`;
    }
    else if (hours == 0) {
        e.innerHTML = `12:${mins}<br>AM`;
    }
    else {
        if (hours < 10) e.innerHTML = `${hours.substring(1)}:${mins}<br>AM`;
        else e.innerHTML = `${hours}:${mins}<br>AM`;
    }
});