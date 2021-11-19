$(document).ready(function() {
    $.ajax({
        type: "get",
        // type: "post",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        // dataType: "xml",
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            // $(data).find("management").children().each(function() {
                // var xmlDoc = $(this);
                // $("#team").append
                // ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
                //           xmlDoc.find("title").text() + "<br>" +
                //           xmlDoc.find("bio").text() + "<br>");

            $.getJSON("team.json", function(data){
                $.each(data, function(){
                    $.each(this, function(key, value){
                        $("#team").append (
                            "<h3>Name: " + value.name + "</h3>" +
                            value.title + "<br>" +
                            value.bio + "<br>"
                        );
                    });
                });
            });
        }
    });
});
