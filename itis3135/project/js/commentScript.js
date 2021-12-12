$(function(){

    //cache comments unordered list
    var $comments = $('#comments');

    //on webpage load, gets list of comments from comments.json and writes them to the comments unordered list
    $.ajax({
        type:'GET',
        url: 'apis/comments.json',
        success: function (comments) { // if get request is successful, adds comments to table under this format: "[NAME]: [COMMENT]"
            $.each(comments, function (i, comment) {
                $comments.append('<li>' + comment.name + ': ' + comment.comment + '</li><br />');
            });
        },
        error: function () { //if get request is unsuccessful, alert box pops up warning the user that comments were unable to be successfully loaded
            alert('error loading comments');
        }
    });

    //when the submit button is pressed, it checks for any text within the comment box then posts it onto the page without refreshing
    $('#submit-comment').on('click', function () {

        //gets text in the comment section and makes an object
        var newCommentMade = {
            name: $('#name').val(),
            comment: $('#comment').val(),
        };

        //posts the data retrieved from the comment area
        $.ajax({
            type: 'POST',
            url: 'apis/comments.json',
            data: JSON.stringify(newCommentMade),
            dataType: 'json',
            processData: false,
            success: function (newComment) { // if post request is successful, adds comments to table under this format: "[NAME]: [COMMENT]"
                $comments.append('<li>' + newCommentMade.name + ': ' + newCommentMade.comment + '</li><br />');
            },
            error: function () { //if post request is unsuccessful, alert box pops up warning the user that comments were unable to be successfully posted
                alert('error saving comment');
            }
        })
    });

});