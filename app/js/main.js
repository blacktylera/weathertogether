var weather_url = 'https://api.wunderground.com/api/181a3f71699e535c/forecast10day/q/TN/Nashville.json';
var daysArray;
//console.log testing

/*function displayForecast(data){
  var days = data.forecast.txt_forecast.forecastday;
  console.log(days[0].title);
  console.log(days[2].title);
  console.log(days[4].title);
  console.log(days[6].title);
  console.log(days[8].title);
}*/

/*getJSON(weather_url, displayForecast);*/

getJSON(weather_url, function(data){ 
  daysArray = data.forecast.simpleforecast.forecastday.splice(0,5);
  var uniqueList = createList();
  
  
  document.querySelector('.days').appendChild(uniqueList);
});



function createList(){
  var docFragment = document.createDocumentFragment(); // contains all gathered nodes

  var div = document.createElement('DIV');
  docFragment.appendChild(div);
  var text = document.createTextNode(daysArray[0].date.weekday);
  div.appendChild(text);

  var img = document.createElement('IMG');
  img.setAttribute("src", daysArray[0].icon_url);
  docFragment.appendChild(img);

  var div_0 = document.createElement('DIV');
  docFragment.appendChild(div_0);
  var text_0 = document.createTextNode(daysArray[0].icon);
  div_0.appendChild(text_0);

  var div_1 = document.createElement('DIV');
  docFragment.appendChild(div_1);
  var text_1 = document.createTextNode(daysArray[0].conditions);
  div_1.appendChild(text_1);

  var div_2 = document.createElement('DIV');
  docFragment.appendChild(div_2);
  var text_2 = document.createTextNode(daysArray[0].high.fahrenheit + " / " + daysArray[0].low.fahrenheit);
  div_2.appendChild(text_2);
  
  return docFragment;
}




function getJSON(url, cb) {
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };
  request.send();
}

//getJSON(weather_url, function(data){
  //var list = createList(data.forecast.simpleforecast.forecastday);
  //document.querySelector('ul').appendChild(list);
//});


//function createList(forecastHighs){
  //var docFragment = document.createDocumentFragment();

  //forecastHighs.forEach(function(forecastHigh){
    //var li    = document.createElement('li'),
        //fahrenheit = document.createTextNode(forecastHigh.high.fahrenheit);

    //li.appendChild(fahrenheit);
    //docFragment.appendChild(li);
  //});

  //return docFragment;
//}
