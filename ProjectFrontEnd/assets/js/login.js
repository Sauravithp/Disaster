const URL = 'https://ramro-project.herokuapp.com'

$('#login').on('submit', function (event) {

	//   console.log('Form submitted!')
	event.preventDefault()
	// console.log(JSON.stringify(event))
	var login = {};
	var inputs = $('#login').serializeArray();
	$.each(inputs, function (i, input) {
		login[input.name] = input.value;
	});
	// console.log(login);
	login = JSON.stringify(login)
	$.ajax({
			type: 'POST',
			url: `${URL}/login`,
			contentType: "application/json; charset=utf-8",
			data: login,
		})
		.then((res) => {
			return JSON.stringify(res)
		})
		.then((res) => {
			alert(res)
			// Set localStorage varibles!

				localStorage.setItem('token',res.token);
				localStorage.setItem('id',res.id);
				localStorage.setItem('logged',"logged");

			console.log(res)
		})

		.catch(function () {
			alert('error')
		})
})

// $('#login').ajax({
// 		url: `${URL}/login` ,

// 			.then(resp) => {

// 				if (resp.token) {

// 					localStorage.setItem('token', resp.token);
// 					localStorage.setItem('id', '');
// 				}
// 			}

// 		});

// form.on('submit', function (e) {
// 	e.preventDefault();

// 	emailId = document.queryselector("#emailId").val,
// 		id = localStorage.id,
// 		token = localStorage.token,
// });

// $('#signup').on('click', function () {
// 		var signup = {
// 			firstName: $firstName.val(),
// 			lastName: $lastName.val(),
// 			contact: $contact.val(),
// 			emailId: $emailId.val(),
// 			password: $password.val(),
// 			gender: $gender.val(),
// 			birthday: $birthday.val(),
// 		};

// 		$.ajax({
// 			type: 'POST',
// 			url: ,
// 			data: signup,
// 			.then

// 			function () {
// 				alert('success');
// 			},

// 			.catch

// 			function () {
// 				alert('error');
// 			}
// 		});
