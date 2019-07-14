
function formatTime(minutes) {
    let numberOfDays = Math.floor(minutes / 3600);
    let numberOfHours = Math.floor((minutes - (numberOfDays * 3600)) / 60);
    let numberOfMinutes = minutes - (numberOfDays * 3600) - (numberOfHours * 60);
    return console.log(`${numberOfDays} day(s) ${numberOfHours} hour(s) ${numberOfMinutes} minute(s).`);
  }

formatTime(120); //=> 0 day(s) 2 hour(s) 0 minute(s).
formatTime(59); //=> 0 day(s) 0 hour(s) 59 minute(s).
formatTime(3601); //=> 1 day(s) 0 hour(s) 1 minute(s).
