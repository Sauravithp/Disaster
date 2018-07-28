const URL = 'https://ramro-project.herokuapp.com'

$('#search').on('submit', function (event) {

	//   console.log('Form submitted!')
	event.preventDefault()
	// console.log(JSON.stringify(event))
	var search = {};
	var inputs = $('#search').serializeArray();
	$.each(inputs, function (i, input) {
		search[input.name] = input.value;
		

	});
	// console.log(search);
	search = JSON.stringify(search)
	$.ajax({
			type: 'POST',
			url: `${URL}/search`,
			contentType: "application/json; charset=utf-8",
			data: search,
		})
		.then((res) => {
			return JSON.stringify(res)
		})
		
		.catch(function () {
			alert('error')
		})


