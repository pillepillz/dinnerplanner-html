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
		for(p=0; p<model.getSelectedDish(type)[0].ingredients.length; p++){
			ThePrice += model.getSelectedDish(type)[0].ingredients[p].price;

		}
		return ThePrice;
	}
	this.showinMenu = function(){
		var showThis = "";
	

			theStarter="Starter"
			var ThisPrice = 0;
	
			theMain="Main Dish";
			var ThisPriceM = 0;


			theDessert="Dessert";
			var ThisPriceD = 0;

		

		showThis = showThis + "<TABLE border border-collapse='seperate' border-spacing='10px'><tr><th>"+theStarter+"<th> cost  <th>"+ThisPrice+"<th><button id='dish_s'>X</button><tr><th>"+theMain+"<th> cost  <th>"+ThisPriceM+"<th><button id='dish_m'>X</button><tr><th>"+theDessert+"<th> cost <th>"+ThisPriceD+"<th><button id='dish_d'>X</button></Table>"
		return showThis;
	}


	this.update = function(object){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.getTotalMenuPrice.html(model.getTotalMenuPrice()*model.getNumberOfGuests());

		
		this.table.html(this.showinMenu());
		
		
		try{
			var d1 = document.getElementById('dish_s');
		d1.addEventListener('click',function(){
			model.removeDishFromMenu(model.getSelectedDish("starter")[0].id);
		});
		
		var d2 = document.getElementById('dish_m');
		d2.addEventListener('click',function(){
			model.removeDishFromMenu(model.getSelectedDish("main dish")[0].id);
		});
		
		var d2 = document.getElementById('dish_d');
		d2.addEventListener('click',function(){
			model.removeDishFromMenu(model.getSelectedDish("dessert")[0].id);
		});
		}
		catch(error){

		}



		try{
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

		catch(error){

		}

	
	}

	this.update();
	


	model.addObserver(this);
	
}


