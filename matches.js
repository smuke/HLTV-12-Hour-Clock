document.querySelectorAll(".guide-same-day-matches span").forEach(e => {
    const [hours, mins] = e.innerText.split(":");

    if (hours > 12) {
        e.innerText = `${hours - 12}:${mins}pm`;
    }
    else if (hours == 0) {
        e.innerText = `12:${mins}am`;
    }
    else if (hours == 12) {
        e.innerHTML = `12:${mins}pm`;
    }
    else {
        e.innerText = `${hours}:${mins}am`;
    }
});

document.querySelectorAll(".toggle-match-notifications-button").forEach(e => {
    e.style.marginLeft = "-5px";
    e.style.marginRight = "5px";
});

document.querySelectorAll(".matchInfo").forEach(e => {
    e.style.flex = "0 0 55px";
    e.style.textAlign = "center";
});

document.querySelectorAll(".matchTime").forEach(e => {
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
    else if (e.innerText != "LIVE") {
        if (hours < 10) e.innerText = `${hours.substring(1)}:${mins} AM`;
        else e.innerText = `${hours}:${mins} AM`;
    }
});