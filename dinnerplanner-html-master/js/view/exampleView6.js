//index6.html
var ExampleView6 = function (container,model){
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.getDishes = container.find("#getDishes");
	this.getSelectedDish = container.find(".getSelectedDish");
	this.getFullMenu = container.find("#getFullMenu");
	this.getAllIngredients = container.find("#getAllIngredients");
	this.getTotalMenuPrice = container.find(".getTotalMenuPrice");
	this.addDishToMenu = container.find("#addDishToMenu");
	this.removeDishFromMenu=container.find("#removeDishFromMenu");
	this.getAllDishes = container.find(".getAllDishes");
	this.getDish = container.find("#getDish");
	this.lorem=container.find(".Lorem");
	this.getADish=container.find(".getADish");
	this.getDescription=container.find(".getDescription");
	this.getSel = container.find("#getSel");
	this.goBackEdit=container.find("#goBackEdit");

	
	
	//this.getDescription.html(model.getSelectedDish("main dish")[0].description);
	this.description = function(){
		var your_menu= model.getFullMenu();
		var info = "";
			for(a=0; a < your_menu.length; a++){
			info = info +"<div class='order'><div class='order-left'><div id='mat2'>"+ "<img style='width:200px; height:150px;' src='"+ your_menu[a].ImageURL +"'>"+"</div>"+"<div class='food'>" +"<h1 class='brod'>" +your_menu[a].Title +"</h1>" + "<p class='brod'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>" +"</div></div>";
			info = info + "<div class ='order-right' id='brode'> <h2 class='brod' >Preparation</h2> " +your_menu[a].Description +"</div></div>";

		this.getADish.html(info);
		}
	}

	this.update = function(object){
		this.description();
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
	model.addObserver(this);


}


