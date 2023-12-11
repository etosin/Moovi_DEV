sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/rounting/History",
        "sap/ui/core/UIComponent"
    ],
    function(Controller, History, UIComponent) {
      "use strict";
  
      return Controller.extend("moovi.m09a01.controller.BaseController", {
       
        getRouter : function(){
            return UIComponent.getRouterFor(this);
        },

        onNavBack: function(){
         var oHistory, sPreviousHash;

         oHistory = oHistory.getInstance();
         sPreviousHash = oHistory.getPreviousHash();

         if (sPreviousHash !== undefined){
            window.history.go(-1);
         }else{
            this.getRouter().navTo("RouteView1", {}, true /*no history*/);
         }
        }
      });
    }
  );
  