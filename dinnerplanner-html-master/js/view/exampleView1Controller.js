var ExampleView1Controller = function(view, model) {
	$("#exampleView1").show();
	$("#exampleView2").hide();
	$("#exampleView3").hide();
	$("#exampleView4").hide();
	$("#exampleView5").hide();
	$("#exampleView6").hide();
	$("#sideview").hide();


	view.createDinner.click(function(){
		console.log("You clicked");
	$("body").css("background-image","url()");
	$("#exampleView1").hide();
	$("#exampleView2").show();
	$("#sideview").show();
	$("#exampleView3").hide();
	$("#exampleView4").hide();
	$("#exampleView5").hide();
	$("#exampleView6").hide();

	});

}
