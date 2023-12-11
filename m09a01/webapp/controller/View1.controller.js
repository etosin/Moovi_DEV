sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("moovi.m09a01.controller.View1", {
            onInit: function () {

            },

            onListItemPress: function(oEvent){
               let oItem, oCtx;
               oItem =  oEvent.getSource();
               oCtx = oItem.getBindingContext();
                this.getRouter().navTo("RouteCompanyDetail", {
                      carrid: oCtx.getProperty("Carrid")
                });
            }
        });
    });
