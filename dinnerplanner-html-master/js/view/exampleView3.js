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
	this.menu=[]
	this.numberOfGuests.html(model.getNumberOfGuests());
	var dishPrice= 0;
	var price=0;
	this.funk = function(type){
		dishPrice=0;
		price=0;
		var text = "";

		
		this.getSelectedDish.html(type.Title);
		this.pickedDish = type.id;
		
		
		for (var i = 0; i < type.Ingredients.length; i++) { 
			text = text + "<li>" + (type.Ingredients[i].MetricQuantity
 * model.getNumberOfGuests())+"" + type.Ingredients[i].Unit + "</li>";
			text = text + "<li>" + type.Ingredients[i].Name + "</li>";
			text = text + "<li>"+"SEK"+"</li>";
			text = text + "<li>" + 1 * model.getNumberOfGuests().toFixed(1) + "</li><br>";
			dishPrice = dishPrice + 1 ;
			price = price + 1 * model.getNumberOfGuests().toFixed(1);

		}
		this.getAllIngredients.html(text);
		this.getTotalMenuPrice.html(price);
		this.getSel.html(dishPrice);
	}
	

	this.imgFunk = function(type){
		var bild = type.ImageURL
		
		name = "<img style='width:250px; height:150px;'src='" + bild +"'>";
		this.getAllDishes.html(name);
		loreN = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>";
		this.lorem.html(loreN);
	}
	


	this.update = function(object){
		if(object){
		menu = object;

		}
		this.numberOfGuests.html(model.getNumberOfGuests());

		try{
		this.funk(menu);
		this.imgFunk(menu);
		}
		catch(error){

		}
	
		
		
	
	}

	model.addObserver(this);
	
}








