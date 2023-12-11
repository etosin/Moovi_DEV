sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
  
      return Controller.extend("moovi.m09a01.controller.Notfound", {
        onInit: function() {
        },
        onNavback: function(){
            this.getRouter().navTo("RouteView1");
        }
      });
    }
  );