$(document).ready(function () {

    var arr1 = [];
    var arr2 = [];

    $("#submitButton").click(function (event) {
        event.preventDefault();
        var favoriteThing = $("#favoriteThing").val();
        arr1.push(favoriteThing);
        writeToPage();


        function writeToPage() {
            $("#list1").empty();

            arr1.forEach(function (item, index) {
                $("#list1").append('<li id=' + index + ' class="list-time">' + item + ' </li>');
            });
            $("#list2").empty();
            arr2.forEach(function (item, index) {
                $("#list2").append('<li id=' + index + ' class="list-time">' + item + ' </li>');
            });
            $("#list1").children("li").click(function () {
                arr2.push(arr1[this.id]);
                arr1.splice(this.id, 1);
                writeToPage();
                console.log(this.id);
            });

            $("#list2").children("li").click(function () {
                arr1.push(arr2[this.id]);
                arr2.splice(this.id, 1);
                writeToPage();
                console.log(this.id);
            });
            console.log(arr1 + ' == ' + arr2 );
        }
    });

});