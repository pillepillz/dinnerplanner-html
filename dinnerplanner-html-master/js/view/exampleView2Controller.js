var ExampleView2Controller = function(view, model) {

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});

	view.minusButton.click(function(){
		if(model.getNumberOfGuests()>1){
			model.setNumberOfGuests(model.getNumberOfGuests()-1);
		}
	
	});



	view.getMain.click(function(){
		model.getAllDishes("main dish");
		//chooseDish();
		//searchFunction("main dish");
		


	});
	view.confirmDinner.click(function(){
		if(model.getFullMenu().length==3){
			$("#exampleView2").hide();
			$("#exampleView5").show();
		}

	});
 
	view.getStarter.click(function(){
		model.getAllDishes("starter");

		//searchFunction("starter");

	});
	
	$("#getDessert").click(function(){
		model.getAllDishes("dessert");

		//searchFunction("dessert");

	});


	var searchFunction = function(typen){
	view.search.click(function(){
		var inp = $("#input").val().toLowerCase();
		console.log(inp);
		var maaat = model.getAllDishes(typen,inp)
		view.lista=[];
		console.log(maaat);
		view.lista.push(maaat);
		view.update(view.lista);

		});
	}
	
	this.chooseDish = function(){
			view.matKnapp.click(function(){
				var matId = this.getAttribute("id");
				model.getDish(matId);
				$("#exampleView2").hide();
				$("#exampleView3").show();


		});
	}
	
}
