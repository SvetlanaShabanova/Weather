let today = new Date();

function displayDate(today) {
    let optionsDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    let optionsWeekday = {
        weekday: 'long',
    }
    document.querySelector(".weekday").innerHTML = today.toLocaleDateString("en-GB", optionsWeekday);
    document.querySelector(".today").innerHTML = today.toLocaleDateString("en-GB", optionsDate);
}

displayDate(today);