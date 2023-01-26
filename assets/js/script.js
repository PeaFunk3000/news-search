// Search parameters
// ids:
// #searchTerm
// #recordsRet
// #startYear
// #endYear

// Buttons - type='button'
// #searchBtn
// #clearBtn

// Top articles:
// Section/div/article - #articles

// -------------------------------------------------------------------------------------------------------------------

// global Vars
var qURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var api = "&api-key=p1rWIJodsIoHAd4FuDwGjU7ZgwIn8zxY";
var searchParams = ["#searchTerm", "#recordsRet", "#startYear", "#endYear"]
var userParams = [];

// inputRetrieval - function to take values of all input fields, call AJAX func
function inputRetrieval () {
    for (let i = 0; i < searchParams.length; i++) {
        userParams.push($(searchParams[i]).val());
        console.log(userParams)
    }
    apiCall();
}


// on click for search button - calls inputRetrieval
$("#searchBtn").click(inputRetrieval);



// function for AJAX method - possible store response in a global OBJ
function apiCall () {
var query = "q=" + userParams[0];
var records = userParams[1];
var startYear = userParams[2];
var endYear = userParams[3];
var queryURL = qURL + query + api;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response);
    // var articleDiv = $("<div>");
    // var headingH3 = $("<h3>");
    // headingH3.text(response.docs[0].headline.main);
    // articleDiv.append(headingH3);
    // $("#results").append(articleDiv);
  });
}


// on click for clear - ananymous func method


// function for creating articles - jquery dynamic HTML population


// 