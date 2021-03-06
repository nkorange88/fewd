
// This is what the data returning from IMDB will look like:
var sampleResult = {
"Search": [
  {
    "Title": "Cool Runnings",
    "Type": "movie",
    "Year": "1993",
    "imdbID": "tt0106611"
  }
]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
event.preventDefault();
var url = "http://omdbapi.com/?s=" + $("#query").val();
$.get(url, resultsReceived);
$('li').remove();
$("#movie-search-form").reset();
}

// var ul = document.querySelector("#movies");
var ul = $("#movies")



function resultsReceived(results) {
for (var i = 0; i < results.Search.length; i++) {
  // var divContainer = document.createElement("div")

  var divContainer = $("<div>").appendTo(movieList)

  // var movieList = document.createElement("li");
  // movieList.classList.add("movie")

  var movieList = $("<li>").addClass("movie").appendTo(ul)

  // var img = document.createElement("img")
  // img.setAttribute("src", "http://img.omdbapi.com/?apikey=3088e9b6&h=376&i="+results["Search"][i]["imdbID"])

  $("<img>").attr("src", "http://img.omdbapi.com/?apikey=3088e9b6&h=376&i="+results["Search"][i]["imdbID"]).appendTo(divContainer)
  // var titleContainer = document.createElement("div")
  var titleContainer = $("<div>").appendTo(divContainer)
  // var title = document.createElement("a")
  // title.textContent = results["Search"][i]["Title"];
  // title.setAttribute("href","http://www.imdb.com/title/"+results["Search"][i]["imdbID"])
  // titleContainer.classList.add("movie-title");

  $("<a>").text(results["Search"][i]["Title"]).attr("href","http://www.imdb.com/title/"+results["Search"][i]["imdbID"]).addClass("movie-title").appendTo(titleContainer)



  // var year = document.createElement("div");
  // year.textContent = results["Search"][i]["Year"];
  // year.classList.add("movie-release-date");

  $("<div>").text(results["Search"][i]["Year"]).addClass("movie-release-date").appendTo(divContainer)

  // ul.appendChild(movieList);
  //
  // movieList.appendChild(divContainer);
  // divContainer.appendChild(img);
  // divContainer.appendChild(titleContainer);

  // titleContainer.appendChild(title);
  // divContainer.appendChild(year);

}


// Try putting a debugger here and inspecting the results argument
// The array of movies lives inside results["Search"]
// See the sampleResult above for an example

// Access the array of movies:
results["Search"]

// Access the first movie title
results["Search"][0]["Title"]
}
