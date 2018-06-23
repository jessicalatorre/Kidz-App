
//how to store and retreive logged in user information?

$(document).ready(function () {
	// var userID = 1; 
	//commented out this var userID and removed the + user from line 7 to ensure we get all session data
	//NOTE: passport decorates the request object with the user ID!!!
	//Just like rec body now have rec user.
	$.ajax({
		url: "/api/sessions",  
		method: "GET",
		success: function (data) {
			//use a comma below. Can't concatenate an object to a string
			console.log("THIS IS DATA2", data);
			//NOTE: After we GET data we immediately push to map array
			var labels = [];
			var clicks = [];
			var info = new Map();

			for(var i = 0; i < data.length; i++) {
				//rather than uses info.push to push to an array, with map we set pair value keys, like a defintions in a dictionary. Apple (key word) is needed before we find the corresponding defintion key.
				//every key in dictionary must be unique; same thing with map keys and corresponding defintions
				//SO: Object name is our map key and number of clickss (starting at 1) will be the returned value.

				//look up in dictionary
				//if this true, meaning already in the dictionary...
				if(info.has(data[i].objectName)) {
					//looking for animal name in the returned object in brower console log using Map's get method. (info already initialized as global map variable). Then we're storing this data in variable called click
					var click = info.get(data[i].objectName);
					//then we're using that animal name and adding to it using click++
					click++;
					//this code is like a push but for Map
					info.set(data[i].objectName, click);
				} else {
					//if animal (aka objectName) is not in the dictionary, let's add it with one click
					info.set(data[i].objectName, 1);
				}
			}

			//This will show is in the inspector console what  map looks like
			console.log(info);

			//this push returned map object to array object, which is commonly required with APIs that don't directly support Map. Need to convert results into array. Chart.js API requires this.
			for( var [key, value] of info.entries() ) {
				labels.push(key);
				clicks.push(value);
			}

			//after we push, we can view the map console log and the new console.logs for the converted arrays
			console.log(labels);
			console.log(clicks);

			//for (i = 0; i < cars.length; i++)
			// ['A', 'B' , 'B', 'C']
			// ['A', 'B', 'C' ]
			//Helper Function: Iuf name is in array, return true. otherwise, return false.
			//checking to see if label is already in the array
			// function isNameInArray(name) {
			// 	for(var i = 0; i < labels.length; i++) {
			// 		if(name == labels[i])
			// 			return true;
			// 	}
			// 	//if false--meaning animal is not yet in the array--we'll want to push it there via the code below. Not doing so yet, we're just noted the presence or non-presence of animal in this helper function.
			// 	return false;
			// };

			// for (var i = 0; i < data.length; i ++ ) {
			// 	//Upon checking the name of the animal in each returned object (data[i].objectName, if the name is not in the array yet....
			// 	if(!isNameInArray(data[i].objectName)) {
			// 	//Then we'll push the name of the animal into the label
			// 		labels.push(data[i].objectName);
			// 	}
			// 	//clicks.push(data[i].clicks);
			// }

	var chartData = {
			labels: labels,
			datasets: [
				{
					label: '# clicks',
					backgroundColor: ['rgba(255, 128, 0, 1)', 'rgba(0, 255, 64, 1)','rgba(255, 191, 0, 1)', 'rgba(128, 0, 255, 1)','rgba(255, 255, 0, 1)','rgba(255, 0, 0, 1)','rgba(0, 0, 255, 1)','rgba(255, 0, 255,1)','rgba(0, 191, 255,1)'
				],
					borderColor: ['rgba(255, 128, 0, 1)', 'rgba(0, 255, 64, 1)','rgba(255, 191, 0, 1)', 'rgba(128, 0, 255, 1)','rgba(255, 255, 0, 1)','rgba(255, 0, 0, 1)','rgba(0, 0, 255, 1)','rgba(255, 0, 255,1), rgba(0, 191, 255,1)'
				],
					hoverBackgroundColor: ['rgba(255, 128, 0, 1)', 'rgba(0, 255, 64, 1)','rgba(255, 191, 0, 1)', 'rgba(128, 0, 255, 1)','rgba(255, 255, 0, 1)','rgba(255, 0, 0, 1)','rgba(0, 0, 255, 1)','rgba(255, 0, 255,1)','rgba(0, 191, 255,1)'
				],
					hoverBorderColor: 'rgba(200, 200, 200, 1)',
					data: clicks
				}
			]
		};

		var ctx = $("#mycanvas");

		//constructor function that take chartData object above and places it into the constructor function.
		//options is given in documentation.
		//chartData doesn't have to be a separate object--documentation has it combined in the function--but it's easier to see if separate and can easily maninput the chartData colors if another developer needs to in the future. Much easier see.
		var barGraph = new Chart(ctx, {
			type: 'bar',
			data: chartData,
			options: {
				legend: {
					display: true,
					onClick: {
						text: '# clicks'
					},
					labels: {
						fontColor: 'black',
					}
				},
				scales: {
					yAxes: [{
						ticks: {
							min: 0,
							stepSize: 10
						}
					}]
				}
			}
		});
	},
		error: function (data) {
			console.log(data);
		}
	});
});


