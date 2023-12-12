sap.ui.define(
    [
      "moovi/m09a01/controller/BaseController"
    ],
    function (Controller) {
      "use strict";
  
      return Controller.extend("moovi.m09a01.controller.CompanyDetail", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("RouteCompanyDetail").attachMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function(oEvent){
          var oArgs, oView;
          oArgs = oEvent.getParameter("arguments");
          oView = this.getView();
        }
  
      });
    });