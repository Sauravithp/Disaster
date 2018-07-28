const URL = 'https://ramro-project.herokuapp.com'

$('#donation').on('submit', function (event) {

	//   console.log('Form submitted!')
	event.preventDefault()
	// console.log(JSON.stringify(event))
	var donation = {};
	var inputs = $('#donation').serializeArray();
	$.each(inputs, function (i, input) {
		donation[input.name] = input.value;
		

	});
	// console.log(donation);
	donation = JSON.stringify(donation)
	$.ajax({
			type: 'POST',
			url: `${URL}/donation`,
			contentType: "application/json; charset=utf-8",
			data: donation,
		})
		.then((res) => {
			return JSON.stringify(res)
		})
		
		.catch(function () {
			alert('error')
		})


