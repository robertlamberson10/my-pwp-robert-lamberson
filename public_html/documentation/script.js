$(document).ready(function () {
    $("#contact-form").validate({
        debug:true,
        errorClass: "alert alert-danger",
        errorLabelContainer: "#output-area",
        errorElement: "div",
        // rules here define what is good or bad input
        // each rule starts with the form input element's NAME attributes
        rules:{
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000,
            }
        },
        message:{
            name: {
                required: "Please provide a name"
            },
            email: {
                email: "Please provide a valid email address",
                required: "Email is a required field"
            },
            message: {
                required: "Please provide a message",
                maxlength: "Message is to long"
            }
        },
        submitHandler: (form) => {
          $("#contact").ajaxSubmit({
              type: "Post",
              url: $("#contact").attr('action'),
              success: (ajaxOutput) => {
                  $("output-area").css("display", "")
                  $("output-area").html(ajaxOutput)
                  if($(".alert-sucess" >= 1)) {
                      $("#contact")[0].reset()
                  }
              }
          })
        }
    })
})
