function updateMatchesTime() {
    document.querySelectorAll(".guide-same-day-matches span").forEach(e => {
        const [hours, mins] = e.innerText.split(":");
    
        if (hours > 12) {
            e.innerText = `${hours - 12}:${mins}pm`;
        }
        else if (hours == 0) {
            e.innerText = `12:${mins}am`;
        }
        else if (hours == 12) {
            e.innerText = `12:${mins}pm`;
        }
        else {
            e.innerText = `${hours}:${mins}am`;
        }
    });
    
    document.querySelectorAll(".match-time").forEach(e => {
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
        else if (e.innerText != "LIVE") {
            if (hours < 10) e.innerText = `${hours.substring(1)}:${mins} AM`;
            else e.innerText = `${hours}:${mins} AM`;
        }
    });
}

function updateMatchesStyles() {
    document.querySelectorAll(".matches-v4 .match-info").forEach(e => {
        e.style.flex = "0 0 70px";
    });

    document.querySelectorAll(".matches-v4 .match-rating").forEach(e => {
        e.style.left = "10px";
    });
    
    document.querySelectorAll("a.match-info").forEach(e => {
        e.style.alignItems = "center";
    });
    
    document.querySelectorAll(".match-wrapper").forEach(e => {
        e.style.paddingLeft = "0";
    });

    document.querySelectorAll(".match-event.text-ellipsis").forEach(e => {
        e.style.marginLeft = "10px";
    });
}

const matchesObserver = new MutationObserver((mutations, observer) => {
    const targetText = mutations[mutations.length - 1].target.textContent.toLowerCase();
    if (targetText.includes("am") || targetText.includes("pm")) {
        console.log("contains");
        observer.disconnect();
        return;
    }
    
    updateMatchesTime();
});

updateMatchesTime();
updateMatchesStyles();

if (document.querySelector(".match-time")) {
    matchesObserver.observe(document.querySelector(".match-time"), { childList: true });
}