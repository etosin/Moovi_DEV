sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
                       
        return Controller.extend("moovi.m06a01.controller.View1", {
            
            onInit: function () {
          
            },
            onAfterRendering: function () {
                var oModel = this.getView().getModel("mainService");
                
                var sPath = "/ScarrSet('AA')";

                oModel.read(sPath, {
                    success: function(oData) {
                       // O objeto oData contém os dados lidos
                       var sCarrname = oData.Carrname;
              
                       // Atribui o valor ao campo de entrada na sua view
                       var oInput = this.byId("companyInput");
                       oInput.setValue(sCarrname);
                    }.bind(this),
                    error: function(oError) {
                       // Lidar com erros, se necessário
                       console.error("Erro ao ler dados do OData:", oError);
                    }
                 });

             }
        });
    });
