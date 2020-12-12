// sans jQuery
// var extlinksonel = document.getElementsByClassName("extlinkson");
// for(var i = 0; i < extlinksonel.length; i++) {
//     var a = extlinksonel[i].querySelectorAll("a[href^=http]");
//     for(var j = 0; j < a.length; j++) {
//         var exticon = document.createElement("i");
//         exticon.setAttribute("class", "icon icon-link");
//         exticon.setAttribute("style", "margin-right: 0.1rem");
//         a[j].prepend(exticon);
//     }
// }
// Mais comme il est activé par Featherlight / TNT Search...
$(".extlinkson").find("a[href^=http]").addClass('exlinksona').prepend('<i class="icon icon-link"></i>');