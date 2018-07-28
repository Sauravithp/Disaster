const URL = 'https://ramro-project.herokuapp.com'

$('#subscribe').on('submit', function (event) {

	//   console.log('Form subscribeted!')
	event.preventDefault()
	// console.log(JSON.stringify(event))
	var subscribe = {};
	var inputs = $('#subscribe').serializeArray();
	$.each(inputs, function (i, input) {
		subscribe[input.name] = input.value;
		

	});
	// console.log(subscribe);
	subscribe = JSON.stringify(subscribe)
	$.ajax({
			type: 'POST',
			url: `${URL}/subscribe`,
			contentType: "application/json; charset=utf-8",
			data: subscribe,
		})
		.then((res) => {
			return JSON.stringify(res)
		})
		
		.catch(function () {
			alert('error')
		})


