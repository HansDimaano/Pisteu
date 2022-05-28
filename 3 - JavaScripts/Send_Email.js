////-- JAVASCRIPT FOR SENDING EMAILS THROUGH FORMS


// if document is ready
$(document).ready(function () { 

    // if email is submitted
    // users cannot submit form if value is invalid because of the "required" attribute in HTML tag
    $('#email_form').on('submit', function (submit) { 

        submit.preventDefault(); // prevent the refreshing of page when submitting the form

        $.ajax({ // use ajax for sending the email

            method: 'POST', // type method as POST 
            url: 'https://formsubmit.co/ajax/hanschdimaano@gmail.com', // url for sending the message to hanschdimaano@gmail.com
            dataType: 'json', // set data type to json
            accepts: 'application/json', // set the accepted data to application/json

            // set data to send through email
            data: {
                Email: $('input[name="Email"]').val(), // get email from the value of input[name="Email"]
                Name: $('input[name="Name"]').val(), // get name from the value of input[name="Name"]
                Subject: $('input[name="Subject"]').val(), // get subject from the value of input[name="Subject"]
                Message: $('textarea[name="Message"]').val() // get message from the value of input[name="Message"]
            },

            // if sending email is a success, do this function
            success: function () {
                $('#email_form').trigger('reset'); // reset the values of form to blank
                $('#message_sent_txt').addClass('active'); // add active class to message sent text (to make the message sent text visible)

                // set a timeout for 5 seconds before removing the active class to message sent text
                setTimeout(function () { $("#message_sent_txt").removeClass('active'); }, 5000);
            }
        });
    });

});