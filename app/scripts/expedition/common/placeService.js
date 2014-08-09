'use-strict'

angular.module('voyagerDesktopApp')
.factory("PlaceService",function(){
  return function Place(){
    this.selectBy = "addr";
    this.longitude = "Hi There!";
    this.what = function(){
      alert("what?")
    }
  }
})
