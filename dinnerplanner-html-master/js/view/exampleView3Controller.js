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
		model.getNotifyObservers();
		$("#exampleView2").show();
		$("#exampleView3").hide();
	});

	$("#FrontButton").click(function(){

		model.addDishToMenu(model.getPending()[0]);
		model.getNotifyObservers();
		$("#exampleView2").show();
		$("#exampleView3").hide();
		
		
	});
	

}
