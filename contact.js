$(document).ready(function(){
    //alert("ready")

    $("#button").click(function(e){
        e.preventDefault();
        var first = $('#fName').val();
        var last = $('#lName').val();
        var description = $('#description').val();

        console.log(first, last, description)
        var card = "<div class='card'><h1>" + first + " " + last + "</h1>" + "<h5>Click Here for Description</h5>" + "<p>" + description + "</p></div>"
        $('#cardArea').append(card);
    })

    $(document).on('click', '.card', function(){
        $(this).children().toggle();

    })
})      