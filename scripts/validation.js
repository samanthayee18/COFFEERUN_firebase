(function (window) {
    'use strict';
    var App = window.App || {};
  
    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@bignerdranch\.com$/.test(email); //check to see what this line is supposed to print
          }
    };
  
    App.Validation = Validation;
    window.App = App;
  })(window);