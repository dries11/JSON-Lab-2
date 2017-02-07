var dataReq = new XMLHttpRequest();

dataReq.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

dataReq.onreadystatechange = function(){
    if(dataReq.status === 200 && dataReq.readyState === 4){
        var jsonData = JSON.parse(dataReq.responseText);
        var movieData = jsonData.data;

        for(var i = 0; i < data.length; i++){
            if(jsonData.movieData[i][11] === "Golden Gate Bridge"){
                var title = jsonData.movieData[i][9];
                var year = jsonData.movieData[i][10];
                var production = jsonData.movieData[i][12];
                var movieInfo = "<p>" + title + " year " + year + " produced by " + production + "</p> <br>";
                document.getElementById('result').innerHTML += movieInfo;
            }
        }
    }
}

dataReq.send();
