/**
 * Created by jay on 3/2/2017.
 */

//https://github.com/yui/yui3/wiki/Quick-Start  ---yui guide


YUI().use('node', 'node-load', function (Y) {
    var website = "https://crossorigin.me/https://cpanel.com";
    var ajax = new XMLHttpRequest();
    ajax.open('GET',website);
    ajax.send();
    var bodyNode = Y.one(document.body);
    var popupOverlay = Y.Node.create('<div>');
    var popupOverlayStyle = {"width":"100%","height":"100%","top":"0","left":"0","position":"fixed","backgroundColor":"black","opacity":".5","zIndex":"1000"};
    var popupBody = Y.Node.create('<div>');
    var popupBodyStyle = {"top":"0","left":"0","right":"0","bottom":"0","margin": "auto","width":"920px","backgroundColor":"white","position":"absolute","height":"600px","zIndex": "10001","overflow":"auto"};
    var popupHead = Y.Node.create('<div>');
    var popupHeadStyle = {"width":"100%","height":"25px","backgroundColor":"orangered"}
    popupHead.setContent("<a id='closeoverlay' style='float:right;margin-right:10px;cursor:pointer;text-decoration:none;font-size:20px'>Close</a>");
    var popupContent = Y.Node.create("<div>");
    popupContent.setStyle("height","550px");
    Y.Object.each(popupOverlayStyle,function(v,k){popupOverlay.setStyle(k,v);});
    Y.Object.each(popupBodyStyle,function(v,k){popupBody.setStyle(k,v);});
    Y.Object.each(popupHeadStyle,function(v,k){popupHead.setStyle(k,v);});
    Y.one('#website-popup').on('click',function(){
        bodyNode.append(popupOverlay);
        bodyNode.append(popupBody);
        popupBody.append(popupHead)
        popupBody.append(popupContent);
        popupContent.setContent("<object style='width:100%;height:100%;' type='text/html' data='"+URL.createObjectURL(new Blob([ajax.responseText] , {type:'text/html'}))+"' ></object>");
        console.log(ajax.responseText);
        Y.one('#closeoverlay').on('click',function(){
            popupBody.remove();
            popupOverlay.remove();
        });
    });
});
