$(document).ready(function())
{
    $('ul.tabs').tabs();
    $("#btnContinue").click(function (){
        $('ul.tabs').tabs('select_tab', 'contact');
    })
};


// var counter = 0;
// var orderCounter = 1;
// function newKeyword() {
   
//   $( ".keywords" ).append( '<div class=\"row rowKey animated zoomIn2\">\r\n        <div class=\"input-field col s6\" style=\"\r\n    width: 42%;\r\n\">\r\n          \r\n          <input id=\"icon_prefix1' + counter + '\" type=\"text\" class=\"validate\">\r\n          <label for=\"icon_prefix1' + counter + '\" class=\"\">Keyword<\/label>\r\n        <\/div>\r\n   <div class=\"row\">\r\n    <!--<div style=\"    top: 0.8rem;\" class=\"col s2\"> Density :<\/div> -->\r\n     <div class=\"input-field col s2\" style=\"    top: 0.7rem;\"> Density<\/div>\r\n        <div class=\"input-field col s2\">\r\n          <input id=\"icon_telephone1' + counter + '\" type=\"number\" class=\"validate\">\r\n          <label for=\"icon_telephone1' + counter + '\" class=\"\">Min<\/label>\r\n        <\/div>\r\n        <div class=\"input-field col s2\">\r\n          <input id=\"max1' + counter + '\" type=\"number\" class=\"validate\">\r\n          <label for=\"max1' + counter + '\" class=\"\">Max<\/label>\r\n        <\/div>\r\n    <i class=\"material-icons prefix remove active\" style=\"\r\n    margin-top: 1.7rem; cursor: pointer;color: #607D8B;\r\n\">close<\/i><\/div>\r\n       <\/div>' );
//   counter++;
// };

// $(".promo-example").hover(
//   function () {
//     $(this).addClass("hovered");
//   },
//   function () {
//     $(this).removeClass("hovered");
//   }
// );
     


// $(".promo-example").click(
//   function () {
//     $(".promo-example").removeClass("selected")
//     $(this).addClass("selected");
//   }
// );  

// $(".promo-example2").hover(
//   function () {
//     $(this).addClass("hovered");
//   },
//   function () {
//     $(this).removeClass("hovered");
//   }
// );
     


// $(".promo-example2").click(
//   function () {
//     $(".promo-example").removeClass("selected")
//     $(this).addClass("selected");
//   }
// );  

// $(".keywords").delegate(".remove", "click", function () {  
//     $(this).closest('.rowKey').remove();
//   }
// );  


// function newOrder() {
//   var orderNumber = $( ".card" ).length;
//   //var orderNumber = $(".card").index(this);
//   $( ".creation" ).prepend('<div class=\"card animated zoomIn\">\r\n\t\t<h2 class=\"fs-title\" style=\"    padding-top: 25px;\r\n    padding-left: 25px;\r\n    text-align: left;\r\n    width: 100%;\">Product description n\u00B0'+ orderNumber +'<\/h2>\r\n<div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n          <input  id=\"first_name'+ orderNumber +'\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name'+ orderNumber +'\">Order name<\/label> \r\n        <\/div> \r\n  <div class=\"row col s12\" style=\"color:grey;font-size: 10px;text-align: left;margin-top: -10px;margin-left: 0px\">Name your order, you can also use a reference Id from your system to find it easily <\/div>\r\n      <\/div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n          <input  id=\"first_name2'+ orderNumber +'\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name2'+ orderNumber +'\">URL (optional)<\/label> \r\n        <\/div> \r\n     \r\n      <div class=\"row col s12\" style=\"color:grey;font-size: 10px;text-align: left;margin-top: -10px;margin-left: 0px\">You can add an url to give more informations to the writer<\/div> <\/div> \r\n      \r\n       <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n          <input  id=\"first_name2'+ orderNumber +'\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name2'+ orderNumber +'\">Reference id (optional)<\/label> \r\n        <\/div> \r\n     \r\n      <div class=\"row col s12\" style=\"color:grey;font-size: 10px;text-align: left;margin-top: -10px;margin-left: 0px\">You can add a reference id to match the order with your system<\/div> <\/div>  \r\n  <div class=\"keywords\">    \r\n<!-- <div class=\"row\">\r\n        <div class=\"input-field col s6\">\r\n          <i class=\"material-icons prefix\">label<\/i>\r\n          <input id=\"icon_prefix'+ orderNumber +'\" type=\"text\" class=\"validate\">\r\n          <label for=\"icon_prefix'+ orderNumber +'\">Keyword<\/label>\r\n        <\/div>\r\n   <div class=\"row\">\r\n    <div style=\"margin-top:2rem\" class=\"col s2\"> Density<\/div> \r\n     <div class=\"input-field col s2\"> Density<\/div>\r\n        <div class=\"input-field col s2\">\r\n          <input id=\"icon_telephone'+ orderNumber +'\" type=\"number\" class=\"validate\">\r\n          <label for=\"icon_telephone'+ orderNumber +'\">Min<\/label>\r\n        <\/div>\r\n        <div class=\"input-field col s2\">\r\n          <input id=\"max'+ orderNumber +'\" type=\"number\" class=\"validate\">\r\n          <label for=\"max'+ orderNumber +'\">Max<\/label>\r\n        <\/div>\r\n    <\/div>\r\n       <\/div>-->\r\n    \r\n\r\n    <\/div>\r\n          <div><a class=\"waves-effect waves-light btn\" onClick=\"newKeyword()\"><i class=\"material-icons left\">add<\/i>Add a Keyword<\/a><\/div> \r\n      <\/div>\r\n    <\/div>');
//   orderCounter++;
//   counter++;
// };

// $("fieldset").delegate(".removeOrder", "click", function () {  
//     $(this).closest('.card').remove();
//   }
// );