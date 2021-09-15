//I've never built a widget in my life so bless this JS code.

//Bringing in the data from National Weather Service.
//More specifically the data for dahlonega!
console.log("Loaded");
fetch('https://api.weather.gov/gridpoints/FFC/62,122/forecast') 
    .then((res)=>{
        return res.json();
    })
    .then(weather=> {
        console.log(weather);
        //Time to populate the cards in the widget?
        for(i = 0; i < 7;i++){
            //This is starting to remind me of a high school JS esque project I did..
            //All the attributes are numbered with their appriopriate attribute.
            //So therefore I just need to concatanate in I to select them.
            $("#"+i+"-name").html(weather.properties.periods[i].name);
            $("#"+i+"-icon").attr("src",weather.properties.periods[i].icon);
            $("#"+i+"-temp").html(weather.properties.periods[i].temperature+"F");
            $("#"+i+"-detail").html(weather.properties.periods[i].shortForecast);
        }
        console.log(weather.properties.periods[0].name);
    }); 