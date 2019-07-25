// --------------- 1 -------------------
//create a date
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);
// --------------- 1 -------------------
// --------------- 2 -------------------
function getWeekDay(day){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

let week = new Date(2012, 0, 3);
console.log(getWeekDay(week));
// --------------- 2 -------------------
// --------------- 3 -------------------
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }
let date1 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getLocalDay(date1) );       // tuesday, should show 2
// --------------- 3 -------------------
// --------------- 4 -------------------
