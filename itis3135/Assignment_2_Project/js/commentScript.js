$(function(){

    var $comments = $('#comments');

    $.ajax({
        type:'GET',
        url: 'apis/comments.json',
        success: function (comments) {
            $.each(comments, function (i, comment) {
                $comments.append('<li>' + comment.name + ': ' + comment.comment + '</li><br />');
            });
        },
        error: function () {
            alert('error loading comments');
        }
    });

    $('#submit-comment').on('click', function () {

        var newCommentMade = {
            name: $('#name').val(),
            comment: $('#comment').val(),
        };


        $.ajax({
            type: 'POST',
            url: 'apis/comments.json',
            data: JSON.stringify(newCommentMade),
            dataType: 'json',
            processData: false,
            success: function (newComment) {
                $comments.append('<li>' + newCommentMade.name + ': ' + newCommentMade.comment + '</li><br />');
            },
            error: function () {
                alert('error saving comment');
            }
        })
    });

});