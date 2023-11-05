sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], 
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("moovi.m06a01.controller.View1", {
            onInit: function () {

                
            },

            onFilterCompanies: function (oEvent) {
                
                let aFilters = [];
                var sQuery = oEvent.getParameter("query");

                if(sQuery){
                    aFilters.push(new Filter("Carrid", FilterOperator.EQ, sQuery));
                }

                let oListCompany = this.byId("companyList");
                let oBinding = oListCompany.getBinding("items");              
                oBinding.filter(aFilters);
            }
        });
    });
