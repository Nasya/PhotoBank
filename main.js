function logIn(){
/*$(document).ready(function(){
	$('#successful').click(function(){
		$.post('info.json', {}, function(json){
			$('#successful').html('');
			$(json).find('.form-group1').each(function(){
				$('info.json').append('Login: ' + json.logIn.login + '<br/>')
							 .append('Password: ' + json.logIn.password + '<br/>')
		});
		});
	});
	
});
	alert("hello!");
}*/
$(function() {
    $("#myform").submit(function() {
        var formData = {
            "field1":$("#form-group1").val()
            , "field2":$("#form-group2").val()
        };
        $.ajax({
            url:'info.json',
            type:'POST',
            data:'jsonData=' + $.toJSON(formData),
            success: function(res) {
                alert(res);
            }
        });
        return false;
    });
});
}