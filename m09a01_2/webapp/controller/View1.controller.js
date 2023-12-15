sap.ui.define([
    "moovi/project1/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("moovi.project1.controller.View1", {
            onInit: function () {

            },

            onListItemPress: function(oEvent){
               let oItem, oCtx;
               oItem =  oEvent.getSource();
               oCtx = oItem.getBindingContext();
                this.getRouter().navTo("RouteCompanyDetail", {
                      carrId: oCtx.getProperty("Carrid")
                });
            }
        });
    });
