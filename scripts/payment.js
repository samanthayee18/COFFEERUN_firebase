(function(window){
  
    'use strict';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var FORM_SELECTOR = '[order="form"]';
    var formHandler = new FormHandler(FORM_SELECTOR);
    
    
    
   

    formHandler.addSubmitHandler(function (data) {
        console.log("click!");
        console.log(data.title);
        var titleValue =data.title;
        var nameValue =data.username;
        document.querySelector(".title").innerHTML = titleValue;
        document.querySelector(".name").innerHTML = nameValue;
    });
})(window);