// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","libs/qrcode"],function(a,b){return a([b],{baseClass:"jimu-qrcode",declaredClass:"jimu.dijit.QRCode",postCreate:function(){new QRCode(this.domNode,{text:this.text,width:this.width||128,height:this.height||128,colorDark:this.colorDark||" #000000",colorLight:this.colorLight||"#ffffff",correctLevel:this.correctLevel||QRCode.CorrectLevel.L})}})});