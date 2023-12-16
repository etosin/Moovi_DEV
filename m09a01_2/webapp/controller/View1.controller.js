sap.ui.define([
    "moovi/project1/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, formatter) {
        "use strict";

        return Controller.extend("moovi.project1.controller.View1", {

            formatter: formatter,
            onInit: function () {
        
                let varInput = this.byId("searchField");
                varInput.setProperty("value", 'AA');

            },

            onListItemPress: function(oEvent){
               let oItem, oCtx;
               oItem =  oEvent.getSource();
               oCtx = oItem.getBindingContext();
                this.getRouter().navTo("RouteCompanyDetail", {
                      carrId: oCtx.getProperty("Carrid")
                });
            },

            onFilterFlights: function (oEvent) {
                // buildthefilterarray
                let aFilter = [];
                let sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter(
                        "Carrid", FilterOperator.Contains, sQuery));
                }
                // filterthelistviabinding
                    let oList = this.getView().byId("companyList");
                    let oBinding = oList.getBinding("items");
                    oBinding.filter(aFilter);
                }
        });
    });
