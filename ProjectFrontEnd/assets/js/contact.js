const URL = 'https://ramro-project.herokuapp.com'

$('#contact').on('submit', function (event) {

	//   console.log('Form submitted!')
	event.preventDefault()
	// console.log(JSON.stringify(event))
	var contact = {};
	var inputs = $('#contact').serializeArray();
	$.each(inputs, function (i, input) {
		contact[input.name] = input.value;
		

	});
	// console.log(contact);
	contact = JSON.stringify(contact)
	$.ajax({
			type: 'POST',
			url: `${URL}/contact`,
			contentType: "application/json; charset=utf-8",
			data: contact,
		})
		.then((res) => {
			return JSON.stringify(res)
		})
		
		.catch(function () {
			alert('error')
		})


