var ExampleView5Controller = function(view, model) {


	view.goBackEdit.click(function(){
		$("#exampleView2").show();
		$("#exampleView5").hide();
	});

	view.printM.click(function(){
		$("#exampleView5").hide();
		$("#exampleView6").show();
	});
}
