var ExampleView3Controller = function(view, model) {

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});

	view.minusButton.click(function(){
		if(model.getNumberOfGuests()>1){
			model.setNumberOfGuests(model.getNumberOfGuests()-1);
		}
	
	});

	view.backbutton.click(function(){
		model.removeDishFromMenu(view.pickedDish);
		$("#exampleView2").show();
		$("#exampleView3").hide();
	});

	$("#FrontButton").click(function(){
		
		$("#exampleView2").show();
		$("#exampleView3").hide();
		
		
	});
	

}
