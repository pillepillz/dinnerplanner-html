$(function() {
    //We instantiate our model
    var model = new DinnerModel();
 
    //And create the needed controllers and views
    var exampleView = new ExampleView($("#exampleView"));
 
    for( i in (model.getSelectedDish("starter"))){
        console.log((model.getSelectedDish("starter"))[i]);
    }
})
