$(function(){
    //We instantiate our model
    var model = new DinnerModel();
 
    //And create the needed controllers and views
    var exampleView = new ExampleView($("#exampleView"));

    console.log(model.getSelectedDish("starter"));
    model.addDishToMenu(1);
    model.addDishToMenu(100);
    console.log(model.getFullMenu());
    console.log(model.getSelectedDish("starter"));
    console.log(model.getAllIngredients());
    console.log(model.getTotalMenuPrice());
    

})
