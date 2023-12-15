sap.ui.define(
    [
      "moovi/project1/controller/BaseController"
    ],
    function (Controller) {
      "use strict";
  
      return Controller.extend("moovi.project1.controller.CompanyDetail", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("RouteCompanyDetail").attachMatched(this.onRouteMatched, this);
        },
  
        onRouteMatched: function(oEvent){
          var oArgs, oView;
          oArgs = oEvent.getParameter("arguments");
          oView = this.getView();
  
          oView.bindElement({
            path: "/ScarrSet('" + oArgs.carrId + "')",
            events: {
              change: this._oBindingChange.bind(this),
              dataRequested: function (oEvent) {
                oView.setBusy(true);
              },
              dataReceived: function (oEvent) {
                oView.seBusy(false);
              }
            }
          });
        },
        _oBindingChange: function(oEvent){
          //No data for the binding
          if (!this.getView().getBindingContext()) {
               this.getRouter().getTargets().display("TargetNotFound");
          }
  
        }
  
      });
    });