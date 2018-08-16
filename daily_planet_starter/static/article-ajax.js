$(document).ready(function() {
  console.log('Hello from teams-ajax.js!');

$("#edit-article").submit(function(e){
		e.preventDefault();  //don't submit/send form
	console.log(this);
		var articleTitle = $(this).attr("action");
		var articleBody = $(this).serialize();
		console.log("article title",articleTitle);
		console.log("body", articleBody);

});
	
});

	$("#delete-btn").click(function(e){
		e.preventDefault();
		console.log(this);
		var articleUrl = $(this).attr("href");
		console.log("stuff is working", articleUrl);
	
	});


