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
		
		var fileUploadControl = $("#profilePhotoFileUpload")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
  var name = "photo.jpg";

  var parseFile = new Parse.File(name, file);

parseFile.save().then(function() {
	var jobApplication = new Parse.Object("JobApplication");
jobApplication.set("applicantName", "Joe Smith");
jobApplication.set("applicantResumeFile", parseFile);
jobApplication.save();
	console.log("Success faggot");
  // The file has been saved to Parse.
}, function(error) {
	console.log("error");
  // The file either could not be read, or could not be saved to Parse.
});
}

 
		
		comment.save(data, {
			success:function() {
				console.log("Success");
				$('#response').html('Email successful!').addClass('success').fadeIn('fast');
				 $('form[name="contact-form"]').submit();
  $('input[type="text"], textarea').val('');
  $('input[type="email"], textarea').val('');
			},
			error:function(e) {
				console.dir(e);
				$('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
			}
		});
	});
});