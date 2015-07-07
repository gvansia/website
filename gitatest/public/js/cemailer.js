/* global $,document,console,Parse */
$(document).ready(function() {
	
	var parseAPPID = "83aicdJHcXiSfn9vzzVWAeqMkmIqfoUJVreaNTob";
	var parseJSID = "aRco8dA9azBfAe54PpmIJLtakae1KHbJ9fumGqRC";
	
	Parse.initialize(parseAPPID, parseJSID);
	var emailObject = Parse.Object.extend("emailObject");
	
 
	$("#commentForm").on("submit", function(e) {
		e.preventDefault();
 
		console.log("Handling the submit");
		//add error handling here
		//gather the form data
 
		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.comments = $("#comments").val();
		
 
		var comment = new emailObject();
	  
	var companyApplication= new Parse.Object("companyApplication");
companyApplication.set("applicantName", data.name);
companyApplication.set("applicantMSG", data.comments);
companyApplication.set("applicantResumeFile", data.company);
companyApplication.save();


 
		
		comment.save(data, {
			success:function() {
				console.log("Success");
				$('#response').html('Email successful!').addClass('success').fadeIn('fast');
				 $('form[name="contact-form"]').submit();
  $('input[type="text"], textarea').val('');
  $('input[type="email"], textarea').val('');
   $('input[type="file"], textarea').val('');
console.log("hiii");
			},
			error:function(e) {
				console.dir(e);
				$('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
			}
		});
	});
	});