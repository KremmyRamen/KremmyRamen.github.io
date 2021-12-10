$(document).ready(function(){

    var $comments = $('#comments');
    var $name = $('#name');
    var $comment = $('#comment');

    function addComment(comment) {
        $comments.append('<li>' + comment.name + ': ' + comment.comment + '</li><br />');
    }

    $.ajax({
        type:'GET',
        url: 'apis/comments.json',
        success: function (comments) {
            $.each(comments, function (i, comment) {
                addComment(comment);
            });
        },
        error: function () {
            alert('error loading comments');
        }
    });

    $('#submit-comment').on('click', function () {
        var newComment = {
            name: $name.val(),
            comment: $comment.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'apis/comments.json',
            data: newComment,
            success: function (newComment) {
                addComment(newComment);
            },
            error: function () {
                alert('error saving comment');
            }
        })
    });

});

