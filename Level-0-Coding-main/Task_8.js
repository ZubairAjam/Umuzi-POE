function minutesToHM (m) {
    var hours = Math.floor(m / 60);
    var mins = m % 60;
    
    if ((mins == 1) && (hours == 1)) {
        return hours + " hour, "+ mins + " minute"
    }else if (mins == 1) {
        return hours + " hours, "+ mins + " minute"
    }else if (hours == 1) {
        return hours + " hour, "+ mins + " minutes" 
    }else {
        return hours + " hours, "+ mins + " minutes"
    }
}
console.log(minutesToHM(150));