// function randomQuote togenerate random quote's
function randomQuote() {
			// variable randomColor for storing random color
			var randomColor= '#' + (Math.random().toString(16) + "000000").substring(2,8);
			// ajax request for for api to fetch random quote
			$.ajax({
				// url form where qutes fetching
				url: "http://api.forismatic.com/api/1.0/?",
				// datatype for in which form data reterived , in this case it is in json format
				dataType: "jsonp",
				data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
				// success method if response is ok
				success: function( response ) {
					// showing the data in html element
					$("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
						response.quoteText + "<br/>&dash; " + "</p>" + "<span>"+  response.quoteAuthor + " &dash;</span>");
					// showing the tweeter limk if somebody wants to share on tweeter
					$("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
						' (' + response.quoteAuthor + ')');
					// changing the color of background when quote change
					$("body").css("background", randomColor)
				}
			});
		}
		// calling the function
		$(function() {
			// call randomquote function
			randomQuote();
			// calling the function on button when click
			$("#test").click(function() {
				randomQuote();
			});
		});