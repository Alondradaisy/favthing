$(document).ready(function(){

var arr1 = [];    

$("#submitButton").click(function(event){
    event.preventDefault();
    var favoriteThing = $("#favoriteThing").val();
    arr1.push(favoriteThing);
    $("#listUl").empty();

    arr1.forEach(function(item, index){
        $("#listUl").append('<li id='+index+' class="list-time">' + item + ' </li>');
    });

    $("#listUl").children("li").click(function(){
        arr1.splice(this.id, 1);
        console.log(this.id);
    });

    console.log(arr1);
});

});