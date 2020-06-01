$(document).ready(function () {

   


    $('a.login-window').click(function () {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        // var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $('#login-box').fadeIn(300);

        // thêm phần tử id="over" vào cuối thẻ body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close", function () {
        $('#over,.login,.success,.reset ').fadeOut(300, function () {
            $('#over').remove();
        });
        return false;
    });
    //click submit button
    $('#submit').click(function () {
        
        var user = $('#username').val();
        var pass = $('#password').val();
       
        $(this).addClass("active");

        setTimeout(function(){
            $('#submit').removeClass("active");

            if (user == 'admin' && pass == 'admin') {
                $('#login-box').fadeOut(300);
                $('.success').fadeIn(300);
    
                $('.login-window').text('dang nhap thanh cong');
    
    
    
            } else if (user == '' && pass == '') {
                $('#user_error').html('** Username  is not filled');
                $('#pass_error').html('** Password  is not filled');
                $('#user_error').css('color', 'red');
                $('#pass_error').css('color', 'red');
    
                return false;
    
            } else {
                $('#user_error').html('** Incorrect');
                $('#user_error').css('color', 'red');
                $('#pass_error').css('color', 'red');
                $('#pass_error').html('** Incorrect');
                return false;
            };
        },2000);

        
    })

    //click forgot button
    $('.forgot__link').click(function(){
        $('#login-box').fadeOut(300);
        $('#reset-box').fadeIn(300);
    });

    //click save button
    $('#save').click(function(){

        var newPass = $('#new-password').val();
        var confirmPass = $('#confirm-password').val();

        if (newPass == '' && confirmPass == '') {
            $('#reset_error').html('** Password  is not filled');
            $('#confirm_error').html('** Password  is not filled');
            $('#reset_error').css('color', 'red');
            $('#confirm_error').css('color', 'red');




        } else if (newPass == confirmPass) {
            $('#reset-box').fadeOut(300);
            $('#login-box').fadeIn(300);

            $('#submit').text('new password');

            $('#password').val() = $('#confirm-password').val();





            return false;

        } else {
            
          
            $('#confirm_error').css('color', 'red');
            $('#confirm_error').html('** Password does not match');
            return false;
        }
   
    })
       
    

});

