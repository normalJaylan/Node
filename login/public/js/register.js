$(function() {
    $('#button').click(function() {
        var username = $('#username').val();
        var phone = $('#phone').val();
        var password = $('#password').val();
        $.ajax ({
            type : 'post',
            url : '/register',
            data : {
                username : username,
                phone : phone,
                password : password
            },
            success : function(data) {

            },
            error : function(data) {
                console.log('XHR error');
            }
        });
    });
});
