function timeDiff(departTime) {
	console.log( new Date(Date.now()) - departTime );
}

var id = setInterval(function () {
	timeDiff(departed);
}, 5000);
