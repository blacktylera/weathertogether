var submit = document.querySelector('.submit');
var weather_data;
var location_data;

//Using event listener to grab the information entered into input / update url of api call / then clearing
submit.addEventListener('click', function(mouseEvent){
  clear();
  var zipcode = document.querySelector('.zipcode').value;
  var zip_url = 'https://api.wunderground.com/api/181a3f71699e535c/forecast10day/geolookup/q/' + zipcode + '.json';

  //attaching selected weather values to html containers
  getJSON(zip_url, function(data){
    weather_data = data.forecast.simpleforecast.forecastday.splice(0,5);
    location_data = data.location;

    document.querySelector('h2').appendChild(cityName());

    document.querySelector('.containerDay1').appendChild(createList1());

    document.querySelector('.containerDay2').appendChild(createList2());

    document.querySelector('.containerDay3').appendChild(createList3());

    document.querySelector('.containerDay4').appendChild(createList4());

    document.querySelector('.containerDay5').appendChild(createList5());
  });
});

//Clear function to prevent info from stacking
function clear(){

  var cityState = document.querySelector('h2')
  cityState.innerHTML = '';

  var day1 = document.querySelector('.containerDay1');
  var day2 = document.querySelector('.containerDay2')
  var day3 = document.querySelector('.containerDay3')
  var day4 = document.querySelector('.containerDay4')
  var day5 = document.querySelector('.containerDay5')

  day1.innerHTML = '';
  day2.innerHTML = '';
  day3.innerHTML = '';
  day4.innerHTML = '';
  day5.innerHTML = '';
}


//Get City

function cityName(){
  var docFragment = document.createDocumentFragment();

  var h2 = document.createElement('H2');
  docFragment.appendChild(h2);
  var text = document.createTextNode(location_data.city + ", " + location_data.state);
  h2.appendChild(text);

  return docFragment;
}

//Day1 weather values

function createList1(){
  var docFragment1 = document.createDocumentFragment();

  var div = document.createElement('DIV');
  div.setAttribute("class", "weekday");
  docFragment1.appendChild(div);
  var text = document.createTextNode(weather_data[0].date.weekday);
  div.appendChild(text);

  var img = document.createElement('IMG');
  img.setAttribute("src", weather_data[0].icon_url);
  img.setAttribute("class", "icon");
  docFragment1.appendChild(img);

  var div_0 = document.createElement('DIV');
  div_0.setAttribute("class", "high");
  docFragment1.appendChild(div_0);
  var text_1 = document.createTextNode("High: " + weather_data[0].high.fahrenheit + "°F");
  div_0.appendChild(text_1);

  var div_1 = document.createElement('DIV');
  div_1.setAttribute("class", "low");
  docFragment1.appendChild(div_1);
  var text_2 = document.createTextNode("Low: " + weather_data[0].low.fahrenheit + "°F");
  div_1.appendChild(text_2);

  var div_2 = document.createElement('DIV');
  div_2.setAttribute("class", "conditions");
  docFragment1.appendChild(div_2);
  var text_3 = document.createTextNode(weather_data[0].conditions);
  div_2.appendChild(text_3);

  return docFragment1;
}

//Day2

function createList2(){
  var docFragment2 = document.createDocumentFragment();

  var div = document.createElement('DIV');
  div.setAttribute("class", "weekday");
  docFragment2.appendChild(div);
  var text = document.createTextNode(weather_data[1].date.weekday);
  div.appendChild(text);

  var img = document.createElement('IMG');
  img.setAttribute("src", weather_data[1].icon_url);
  img.setAttribute("class", "icon");
  docFragment2.appendChild(img);

  var div_0 = document.createElement('DIV');
  div_0.setAttribute("class", "high");
  docFragment2.appendChild(div_0);
  var text_1 = document.createTextNode("High: " + weather_data[1].high.fahrenheit + "°F");
  div_0.appendChild(text_1);

  var div_1 = document.createElement('DIV');
  div_1.setAttribute("class", "low");
  docFragment2.appendChild(div_1);
  var text_2 = document.createTextNode("Low: " + weather_data[1].low.fahrenheit + "°F");
  div_1.appendChild(text_2);

  var div_2 = document.createElement('DIV');
  div_2.setAttribute("class", "conditions");
  docFragment2.appendChild(div_2);
  var text_3 = document.createTextNode(weather_data[1].conditions);
  div_2.appendChild(text_3);

  return docFragment2;
}

//Day3

function createList3(){
  var docFragment3 = document.createDocumentFragment();

  var div = document.createElement('DIV');
  div.setAttribute("class", "weekday");
  docFragment3.appendChild(div);
  var text = document.createTextNode(weather_data[2].date.weekday);
  div.appendChild(text);

  var img = document.createElement('IMG');
  img.setAttribute("src", weather_data[2].icon_url);
  img.setAttribute("class", "icon");
  docFragment3.appendChild(img);

  var div_0 = document.createElement('DIV');
  div_0.setAttribute("class", "high");
  docFragment3.appendChild(div_0);
  var text_1 = document.createTextNode("High: " + weather_data[2].high.fahrenheit + "°F");
  div_0.appendChild(text_1);

  var div_1 = document.createElement('DIV');
  div_1.setAttribute("class", "low");
  docFragment3.appendChild(div_1);
  var text_2 = document.createTextNode("Low: " + weather_data[2].low.fahrenheit + "°F");
  div_1.appendChild(text_2);

  var div_2 = document.createElement('DIV');
  div_2.setAttribute("class", "conditions");
  docFragment3.appendChild(div_2);
  var text_3 = document.createTextNode(weather_data[2].conditions);
  div_2.appendChild(text_3);

  return docFragment3;
}

//Day4

function createList4(){
  var docFragment4 = document.createDocumentFragment();

  var div = document.createElement('DIV');
  div.setAttribute("class", "weekday");
  docFragment4.appendChild(div);
  var text = document.createTextNode(weather_data[3].date.weekday);
  div.appendChild(text);

  var img = document.createElement('IMG');
  img.setAttribute("src", weather_data[3].icon_url);
  img.setAttribute("class", "icon");
  docFragment4.appendChild(img);

  var div_0 = document.createElement('DIV');
  div_0.setAttribute("class", "high");
  docFragment4.appendChild(div_0);
  var text_1 = document.createTextNode("High: " + weather_data[3].high.fahrenheit + "°F");
  div_0.appendChild(text_1);

  var div_1 = document.createElement('DIV');
  div_1.setAttribute("class", "low");
  docFragment4.appendChild(div_1);
  var text_2 = document.createTextNode("Low: " + weather_data[3].low.fahrenheit + "°F");
  div_1.appendChild(text_2);

  var div_2 = document.createElement('DIV');
  div_2.setAttribute("class", "conditions");
  docFragment4.appendChild(div_2);
  var text_3 = document.createTextNode(weather_data[3].conditions);
  div_2.appendChild(text_3);

  return docFragment4;
}

//Day5

function createList5(){
  var docFragment5 = document.createDocumentFragment();

  var div = document.createElement('DIV');
  div.setAttribute("class", "weekday");
  docFragment5.appendChild(div);
  var text = document.createTextNode(weather_data[4].date.weekday);
  div.appendChild(text);

  var img = document.createElement('IMG');
  img.setAttribute("src", weather_data[4].icon_url);
  img.setAttribute("class", "icon");
  docFragment5.appendChild(img);

  var div_0 = document.createElement('DIV');
  div_0.setAttribute("class", "high");
  docFragment5.appendChild(div_0);
  var text_1 = document.createTextNode("High: " + weather_data[4].high.fahrenheit + "°F");
  div_0.appendChild(text_1);

  var div_1 = document.createElement('DIV');
  div_1.setAttribute("class", "low");
  docFragment5.appendChild(div_1);
  var text_2 = document.createTextNode("Low: " + weather_data[4].low.fahrenheit + "°F");
  div_1.appendChild(text_2);

  var div_2 = document.createElement('DIV');
  div_2.setAttribute("class", "conditions");
  docFragment5.appendChild(div_2);
  var text_3 = document.createTextNode(weather_data[4].conditions);
  div_2.appendChild(text_3);

  return docFragment5;
}

//pull request
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


