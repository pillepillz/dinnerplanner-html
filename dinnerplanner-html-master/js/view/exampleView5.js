//ExampleView Object constructor
var ExampleView5 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
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
	this.goBackEdit=container.find("#goBackEdit");
	this.printM=container.find("#print");





	this.hej = function(){
	var veryprice = 0;
	var totPrice = "";

	for(d=2; d>=0;d--){
		var dishPrice = 0;
		for(c=0; c<model.getAllIngredients()[d].length; c++){
			dishPrice +=1;

		}
	totPrice += "<div class='element'>" + dishPrice + " SEK"+ "</div>";
	veryprice += dishPrice;
	
	this.getPrice2.html(totPrice);
	}
	this.menuPrice.html(veryprice*model.getNumberOfGuests());
	}
	

	
	this.update = function(object){
		try{
			this.hej();
		}
		catch(error){

		}


		this.numberOfGuests.html(model.getNumberOfGuests());
		this.getTotalMenuPrice.html(model.getTotalMenuPrice()*model.getNumberOfGuests());
		var your_menu = model.getFullMenu();
		var name2 = "";
		for(b=0; b<your_menu.length; b++){
			name2 += "<div class='mat'>"+ "<img id='bild' src='"+ your_menu[b].ImageURL +"'>" + "<div class='text'>"+ your_menu[b].Title +"</div></div>";
			this.getYourMenu.html(name2);
		}
	}
	model.addObserver(this);
	
}
