(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  var firebaseRef = firebase.database().ref();
  function RemoteDataStore (url) {
    if (!url) {
      throw new Error('No URL provided.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key, val) {
    $.post(this.serverUrl, val, function (serverResponse){
      firebaseRef.child("order").child(serverResponse._id).update(serverResponse);

      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function (cb) {
    $.get(this.serverUrl, function (serverResponse) {
      //console.log(serverResponse);

     cb(serverResponse);
     
    });
  };

  RemoteDataStore.prototype.get = function (key, cb) {
    $.get(this.serverUrl + '/' + key, function (serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function (key) {
    $.get(this.serverUrl + '/' + key, function (serverResponse) {
    //  console.log(serverResponse._id);  
    })
    .then(function(serverResponse){
      console.log(serverResponse._id);
      firebaseRef.child("order").child(serverResponse._id).remove();

    })
    $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE',
      key: key, 
    })
  
  }

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);