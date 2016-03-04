
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.
	loadData();

});

function loadData() {

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
	$.getJSON("js/donations_over_5k.json", function(data) {
		//writeTable(data);
		theData=data;
		writeTable();
	});
}


function writeTable() {

	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount
	for(i=0; i<theData.length; i++) {
		var committee = theData[i].Committee;
		var date = theData[i]["Contribution Date"];
		var info = theData[i]["Contribution Information"];
		var amount = theData[i]["Amount"];
		if(committee === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL")
		{
			$(".table.donations tbody").append(
				"<tr><td>"+date+"</td><td>"+info+"</td><td>"+amount+"</td></tr>"
				);
		}
	}
}

