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
		view.lista=[]
		view.lista.push(model.getAllDishes("main dish"));
		view.update(view.lista);
		chooseDish();
		searchFunction("main dish");
		


	});
	view.confirmDinner.click(function(){
		if(model.getFullMenu().length==3){
			$("#exampleView2").hide();
			$("#exampleView5").show();
		}

	});
 
	view.getStarter.click(function(){
		view.lista=[]
		view.lista.push(model.getAllDishes("starter"));
		view.update(view.lista);
		chooseDish();
		searchFunction("starter");

	});
	
	$("#getDessert").click(function(){
		view.lista=[]
		view.lista.push(model.getAllDishes("dessert"));
		view.update(view.lista);
		searchFunction("dessert");
		chooseDish();

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
		chooseDish();

	});
}
	
	var chooseDish = function(){
		try{
		
		var e1 = document.getElementById('goDish0');
		e1.addEventListener('click',function(){
			model.addDishToMenu(view.lista[0][0].id);
			$("#exampleView3").show();
			$("#exampleView2").hide();
		});
		var e2 = document.getElementById('goDish1');
		e2.addEventListener('click',function(){
			model.addDishToMenu(view.lista[0][1].id);
			$("#exampleView3").show();
			$("#exampleView2").hide();
		});
		var e3 = document.getElementById('goDish2');
		e3.addEventListener('click',function(){
			model.addDishToMenu(view.lista[0][2].id);
			$("#exampleView3").show();
			$("#exampleView2").hide();
		});
		var e4 = document.getElementById('goDish3');
		e4.addEventListener('click',function(){
			model.addDishToMenu(view.lista[0][3].id);
			$("#exampleView3").show();
			$("#exampleView2").hide();
		});
		
		}
		
	catch(error){
		console.log("FEL I CONTROLL");
		
	}
	}
	
}
