//ExampleView Object constructor
var ExampleView3 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusButt");
	this.minusButton = container.find("#minusButt");
	this.getDishes = container.find("#getDishes");
	this.getSelectedDish = container.find(".getSelectedDish");
	this.getFullMenu = container.find("#getFullMenu");
	this.getAllIngredients = container.find(".getAllIngredients");
	this.getTotalMenuPrice = container.find(".getTotalMenuPrice");
	this.addDishToMenu = container.find("#addDishToMenu");
	this.removeDishFromMenu=container.find("#removeDishFromMenu");
	this.getAllDishes = container.find(".getAllDishes");
	this.getDish = container.find("#getDish");
	this.lorem=container.find(".Lorem");
	this.getADish=container.find(".getADish");
	this.getDescription=container.find(".getDescription");
	this.getSel = container.find(".getSel");
	this.backbutton = container.find("#BackButton");

//initiella värden
	this.numberOfGuests.html(model.getNumberOfGuests());
	var dishPrice= 0;
	var price=0;
	this.funk = function(type){
		dishPrice=0;
		price=0;
		var text = "";
		
		console.log(model.getSelectedDish(type)[0].Title)
		this.getSelectedDish.html(model.getSelectedDish(type)[0].Title);
		this.pickedDish = model.getSelectedDish(type)[0].id;
		
		
		for (var i = 0; i < model.getAllIngredients()[0].length; i++) { 
			text = text + "<li>" + (model.getAllIngredients()[0][i].quantity * model.getNumberOfGuests()).toFixed(1) + model.getAllIngredients()[0][i].unit + "</li>";
			text = text + "<li>" + model.getAllIngredients()[0][i].name + "</li>";
			text = text + "<li>"+"SEK"+"</li>";
			text = text + "<li>" + model.getAllIngredients()[0][i].price * model.getNumberOfGuests().toFixed(1) + "</li><br>";
			dishPrice = dishPrice + model.getAllIngredients()[0][i].price ;
			price = price +  model.getAllIngredients()[0][i].price * model.getNumberOfGuests().toFixed(1);

		}
		
		this.getAllIngredients.html(text);
		this.getTotalMenuPrice.html(price);
		this.getSel.html(dishPrice);
	}
	

	this.imgFunk = function(type){
		var bild = model.getSelectedDish(type)[0].image;
		
		name = "<img src='/home/p/h/phigul/Desktop/Hemsidan/dinnerplanner-html-master/images/" + bild +"'>";
		this.getAllDishes.html(name);
		loreN = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>";
		this.lorem.html(loreN);
	}
	


	this.update = function(object){
		this.numberOfGuests.html(model.getNumberOfGuests());
	


		var mnlist =model.getFullMenu();
		console.log(mnlist);
		var a = mnlist.length
		try{
			if (mnlist[a-1].Category == "starter"){
			var type="starter"
			}
			else if(mnlist[a-1].responseJSON.Category == "Main Dish"){
			var type="Main Dish"
			}
			else if(mnlist[a-1].Category == "Desserts"){
			var type="dessert"
			}
			this.funk(type);
			this.imgFunk(type);
		}
		catch(error){
		}
	
		
		
	
	}

	model.addObserver(this);
	
}








