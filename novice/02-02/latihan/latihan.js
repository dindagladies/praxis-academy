//example blocking and non-blocking
// Blocking: 1,... 2
alert(1);
var value = localStorage.getItem('foo');
alert(2);

// Non-blocking: 1, 3,... 2
alert(1);
fetch('example.com').then(() => alert(2));
alert(3);

// -----------------------6---------------------
//in node js
function  processData(callback){
    fetchdata(function(err, data){
        if (err) {
            console.log("An error has occurred. Abort everything!");
            return callback(err);
          }
          data += 1;
          callback(data);
    })
}
// in a synchronus
function processData () {
    var data = fetchData ();
    data += 1;
    return data;
  }