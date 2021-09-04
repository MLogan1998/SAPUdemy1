sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	function (Controller) {
		"use strict";

		return Controller.extend("udemy1.controller.View1", {
			onInit: function () {
            var oJSONModel = new sap.ui.model.json.JSONModel("model/emp.json")
            this.getView().setModel(oJSONModel, "JSN")
            
            var oLangu = sap.ui.getCore().getConfiguration().getLanguage();
            var oResModel = new sap.ui.model.resource.ResourceModel({
                bundleName : "i18n.emp",
                bundleLocale : oLangu
            });
            this.getView().setModel(oResModel, "RES");
			}
		});
	});
