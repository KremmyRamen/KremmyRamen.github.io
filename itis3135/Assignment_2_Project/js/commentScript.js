

$(document).ready(function(){

    var $comments = $('#comments');

    $.ajax({
        type:'GET',
        url: 'apis/comments.json',
        success: function (comments) {
            $.each(comments, function (i, comment) {
                $comments.append('<li>Name: ' + comment.name + '. Comment: ' + comment.comment + '</li>');
            });
        }
    });

});