function gotoS () { 
    window.location = 'pages/reg.html';
} 
 function submitButton() {
        var Auth = {
            login: $('#login').val(),
            password: $('#password').val()
        };
        addData(Auth)
}
function addData(data){// pass your data in method
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/Bank/myrest/HelloWorld",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            statusCode :{
                200: function () {
//                   alert("success...");
                    document.location.href = "pages/user.html";
                },
                400: function() {
                    alert("Error");
                 }
            }
        });
}
