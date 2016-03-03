//ExampleView Object constructor
var ExampleView2 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusButt");
	this.minusButton = container.find("#minusButt");
	this.getTotalMenuPrice = container.find(".getTotalMenuPrice");
	this.addDishToMenu = container.find("#addDishToMenu");
	this.getAllDishes = container.find(".getAllDishes");
	this.lorem = container.find("#Lorem");
	this.getSelectedDish = container.find(".getSelectedDish");
	this.getPrice = container.find("#getPrice");
	this.getAllIngredients = container.find("#getAllIngredients");
	this.getYourMenu = container.find(".YourMenu");
	this.getPrice2 = container.find(".getPrice2");
	this.getEmptyMenu = container.find(".empty");
	this.menuPrice = container.find("#menuPrice");
	this.getDishPrice1 = container.find("#getDishPrice1");
	this.getDishPrice2 = container.find("#getDishPrice2");
	this.getDishPrice3 = container.find("#getDishPrice3");
	this.getSel = container.find(".getSel");

	this.getMain = container.find("#getMain");
	this.getStarter = container.find("#getStarter");
	this.getDessert = container.find("#getDessert");
	//this.getThatDish = container.find("#goDish");
	this.confirmDinner=container.find("#confirmDinner");
	this.table = container.find(".table");
	this.search = container.find("#search");
	this.input = container.find("#input");
	
	model.setNumberOfGuests(1);
	this.getTotalMenuPrice.html(model.getTotalMenuPrice());

	this.getThePrics = function(type){
		var ThePrice = 0;
		for(p=0; p<type.Ingredients.length; p++){
			ThePrice += 1;

		}
		return ThePrice;
	}
	



	this.update = function(object){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.getTotalMenuPrice.html(model.getTotalMenuPrice()*model.getNumberOfGuests());

		
		try{
		var showThis = "<TABLE border border-collapse='seperate' border-spacing='10px'>";
		var totPrice = 0;
		for(i=0; i<model.getFullMenu().length; i++){
			showThis += "<tr><th>"+model.getFullMenu()[i].Title+"<th> cost  <th>"+this.getThePrics(model.getFullMenu()[i])+"<th><button class='removeButt' id='"+i+"'>X</button>";
			totPrice += this.getThePrics(model.getFullMenu()[i]);
		}
		showThis += "</Table>";
		this.table.html(showThis);

		this.getTotalMenuPrice.html(totPrice*model.getNumberOfGuests());

		this.Remove = container.find(".removeButt");
		exampleView2Controller.chooseRemove();

		}
		catch(err){
			console.log(err);
		}

		try{
		if(object){
		var name = "";
		var loreN = ""; 
		for(i=0; i<object.length; i++){

			loreN = "<div class='text2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>";
			name += "<div class='mat'>"+"<button class='goDish' id='"+object[i].RecipeID+"'><img id='bild' src='" + object[i].ImageURL +"'> </button>"+ "<div class='text'>"+ object[i].Title +"</div>"+loreN+"</div>";
			
	
		this.getAllDishes.html(name);

		}

		this.matKnapp = container.find(".goDish");

		exampleView2Controller.chooseDish();
		}
		}
		catch(error){

		}

	
	}

	this.update();
	


	model.addObserver(this);
	
}


