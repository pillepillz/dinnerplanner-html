$(function(){
    //We instantiate our model

    var model = new DinnerModel();
 
    //And create the needed controllers and views
    var exampleView1 = new ExampleView1($("#exampleView1"), model);
    
    var exampleView2 = new ExampleView2($("#exampleView2"), model);

    var exampleView3 = new ExampleView3($("#exampleView3"), model);

    
    //var exampleView4 = new ExampleView4($("#exampleView4"), model);

    var exampleView5 = new ExampleView5($("#exampleView5"), model);
    
    var exampleView6 = new ExampleView6($("#exampleView6"), model);

    //controllers
    

    window.exampleView1Controller = new ExampleView1Controller(exampleView1, model);

    window.exampleView2Controller = new ExampleView2Controller(exampleView2,model);
    
    window.exampleView3Controller = new ExampleView3Controller(exampleView3,model);
 
    window.exampleView5Controller = new ExampleView5Controller(exampleView5,model);

    window.exampleView6Controller = new ExampleView6Controller(exampleView6,model);
    

})

	




