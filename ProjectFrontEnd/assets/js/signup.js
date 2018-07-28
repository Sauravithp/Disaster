const URL = 'https://ramro-project.herokuapp.com'

$('#signup').on('submit', function (event) {

	//   console.log('Form submitted!')
	event.preventDefault()
	// console.log(JSON.stringify(event))
	var signup = {};
	var inputs = $('#signup').serializeArray();
	$.each(inputs, function (i, input) {
		signup[input.name] = input.value;
		

	});
	// console.log(signup);
	signup = JSON.stringify(signup)
	$.ajax({
			type: 'POST',
			url: `${URL}/signup`,
			contentType: "application/json; charset=utf-8",
			data: signup,
		})
		.then((res) => {
			return JSON.stringify(res)
		})
		
		.catch(function () {
			alert('error')
		})


