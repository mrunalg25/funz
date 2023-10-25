function countdown() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var time = document.getElementById("time").value;
    if (day === "" || month === "" || year === "" || time === "") {
        alert("Please provide values for all fields: Day, Month, Year, and Time");
        return;
    }
    const timeBlock = time.split(":");
    console.log(timeBlock[0],timeBlock[1],timeBlock[2],typeof(timeBlock[0]))
    if(timeBlock[0]===undefined||timeBlock[1]===undefined||timeBlock[2]===undefined){
        alert("Please provide complete values of Time");
        return;
    }
    var x = setInterval(function () {
        var currentDate = new Date().getTime();
        var countDownDate = new Date(year, month - 1, day, timeBlock[0], timeBlock[1], timeBlock[2]).getTime();
        var timeLeft = countDownDate - currentDate;
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("output").innerHTML = "Time Left : " + days + " Days " + hours + " Hours  " + minutes + " Minutes " + seconds + " Seconds ";

        if (timeLeft <= 0) {
            clearInterval(x);
            document.getElementById("output").innerHTML = "Countdown Timer Expired";
        }
    }
        , 500);
}