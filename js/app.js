/**
 * Created by mlocher on 5/19/2015.
 */
(function() {
    function LoadContent(page)
    {
        //Load the content
        $('#content').load(page, function( response, status, xhr ) {
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                var content = $('#content');
                content.html('<h1>' + msg + xhr.status + " " + xhr.statusText + '</h1>');
                content.addClass('error');
            }
            else {
                $('#content').removeClass('error');
            }
        });
    }

    $(document).ready(function () {
        $('#test').on('click', function (e) {
            alert('test was clicked');
        });

        //Navigation
        $('.navigation').on('click', function(e){
            //Retrieve menu name that was clicked
            var page = $(this).attr('href');
            LoadContent(page);
            return false; //return false so that the link is not executed
        });
    });
})();
