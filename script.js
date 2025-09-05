//my day is amazing today!becyase i am amazing everyday
// createnewsurl & headlineurl
function getnewsurl(keyterm) {
	var newsurl = "https://newsapi.org/v2/everything?q=";
	var newsapi = "&from=2018-10-07&to=2018-09-28&apiKey=e44dd8d8d0b34b149aa43ed64228d7f4";
	var wholenewsurl = newsurl + keyterm + newsapi;


	console.log("print the news api");
	var headlineurl = "https://newsapi.org/v2/top-headlines?q=";
	var headlineapi = "&from=2018-10-07&to=2018-09-28&apiKey=ab7cf3d04a364e438fa203e7e829cf6f";
	var wholeheadlineurl = headlineurl + keyterm + headlineapi;
	// usetheapitograbnews(wholeheadlineurl)
	console.log("print the headline api:" + wholeheadlineurl + "going to requrest headline info");



    // var top = document.getElementById("news");
    // var bottom = document.getElementById("headline");

    //     // top.style.display = "block";
    //             top.style.display = "none";
    //     bottom.style.display = "none";

	$.ajax({
		url: wholenewsurl,
		type: "GET",
		data: "jsonp",
		error: function (err) {
			console.log("opps");
			console.log(err);
		},
		success: function (data) {
			console.log("yay!");
			console.log(data);
			var numberofarticles = data.articles.length;
			console.log("number of articles:" + numberofarticles);
			// var numberofarticles= data.totalResults
			// var title= data.articles
		

			for (var i = 0; i < numberofarticles; i++) {

				//check the url to see if it is ok
				var whatwithindiv = "<a id='newsmargin'" + "href='" + data.articles[i].url + "'> <h2>" + data.articles[i].title + "</h2> </a>";
				// PROBLEM: the image size doesn't go half when used 50%, doesn't go half when type 623.67, perhaps is becuase i write it in css, and it doens't work
				// whatwithindiv+="<div id='halfsizeonleft'><img src=" + data.articles[i].urlToImage +"></div>";
				whatwithindiv += "<div id='halfsizeonleft'><img src=" + data.articles[i].urlToImage + " width='100%'></div>";

				// PROBLEM!! why this doesn't work
				// img.position: relative;
				// 				img.right: 0px;
				//  					img.width: 50%;
				// 	// width:623.67px;
				// PROBLEM ends !!

				$("#news-data").append(whatwithindiv);
				// $("news").append(data.articles[i].title)
				console.log("finish articles presentaito on page! just look!");
			}
			// $(whatwithindiv).prepend( "<h3>numberofarticles<h3>" );
		}
	}
	);

	$.ajax({
		url: wholeheadlineurl,
		type: "GET",
		data: "jsonp",
		error: function (err) {
			console.log("oppss for headline");
			console.log(err);
		},
		success: function (data) {
			console.log("yay for HEADLINE!");
			console.log(data);
			var numberofarticlesforheadline = data.articles.length;
			console.log("number of articles for HEADLINE:" + numberofarticlesforheadline);
			// var numberofarticles= data.totalResults
			// var title= data.articles
			for (var i = 0; i < numberofarticlesforheadline; i++) {
				var whatwithindivforheadline = "<a id='headlinemargin'" + "href='" + data.articles[i].url + "'> <h2>" + data.articles[i].title + "</h2> </a>";
				// PROBLEM: the image size doesn't go half when used 50%, doesn't go half when type 623.67, perhaps is becuase i write it in css, and it doens't work
				// whatwithindiv+="<div id='halfsizeonleft'><img src=" + data.articles[i].urlToImage +"></div>";
				whatwithindivforheadline += "<div id='halfsizeonleft'><img src=" + data.articles[i].urlToImage + " width='100%'></div>";
				// img.position: relative;
				// img.right: 0px;
				// img.width: 50 %;
				// width:623.67px;
				$("#headline-data").append(whatwithindivforheadline);
				console.log("feedback_content",whatwithindivforheadline);
				// $("news").append(data.articles[i].title)
			}
			console.log("finish HEADLINE articles presentaito on page! just look!");
			// PROBLEM starts
			// $("whatwithindivforheadline").prepend( "<h3>numberofarticlesforheadline<h3>" );
			// PROBLEM: cannot put in the news number ends
		}
	}
	);
}
// // 3 step
// function grabinput(){
// 	var keyterm
// 	$("#searchterm").append(keyterm)
// 	// or keyterm=$(".searchterm")
// 	getnewsurl(keyterm)
// 	// in this case i dont need to make keyterm global right, since this function is just gonna put it in

// 	// console.log("newsurlappended")
// 	// $(".searchterm").append(headlineurl)
// 		console.log("headlineurlappended")
// }

// // 2 step
// function getnews(keyword){
// 	console.log("trying to get user input to get news and headlines silmultaneously");
// 	$("#searchterm").onkeypress(grabinput(){
// 		console.log("take the input, ready to put into the url");
// 	})
// 	// onkeypress="grabinput()"

// }
function grabinputmakeitvar() {
	$("#press").click(function () {
		$('#news-data').empty();
		$('#headline-data').empty();
		var keyterm = $("#searchterm").val();
		console.log("search term already became variable:" + keyterm);
		getnewsurl(keyterm);
	})
}


// 1 step
$(document).ready(function () {
	console.log("The doc is ready!");
	grabinputmakeitvar();
	// getnewsurl();
	// getheadlineurl();
	// getnews(keyword);

});
