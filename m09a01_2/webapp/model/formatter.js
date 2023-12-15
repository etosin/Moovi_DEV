sap.ui.define([
], function (Currcode) {
    'use strict';

    return {

        setIconStatusFltime: function (Currcode) {

            if (Currcode == 'USD') {

                return "sap-icon://message-success";

            }

            if (Currcode != 'USD') {

                return "sap-icon://error";

            }
           
        }

    }

});