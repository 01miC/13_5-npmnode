function calculateTime(data) {
    var secondsModulo = (Number(data)%60).toFixed(0);
    var minutes = Number(data)/60;
    var minutesModulo = (minutes%60).toFixed(0);
    var hours = (minutes/60).toFixed(0);

    var time = hours+"h "+minutesModulo+"min "+secondsModulo+"sec";
    return time;
}

exports.cal = calculateTime;