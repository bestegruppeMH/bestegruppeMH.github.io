// https://ourairports.com/data/airports.csv

// https://www.w3schools.com/jsref/dom_obj_text.asp

function Fluglinie(){
  var start = document.getElementById("startAirport").value;
  var ziel = document.getElementById("destAirport").value;


	// https://www.js-tutorials.com/jquery-tutorials/reading-csv-file-using-jquery/
	var data;
	$.ajax({
	  type: "GET",
	  url: "https://ourairports.com/data/airports.csv",
	  dataType: "text",
	  success: function(response)
	  {
		data = $.csv.toArrays(response);
		generateHtmlTable(data);
	  }
	});





  document.getElementById("done").innerHTML = "Linie von ".concat(start, " nach ", ziel, " erstellt.");
}

// https://www.js-tutorials.com/jquery-tutorials/reading-csv-file-using-jquery/

function generateHtmlTable(data) {
    var html = '<table  class="table table-condensed table-hover table-striped">';

      if(typeof(data[0]) === 'undefined') {
        return null;
      } else {
		$.each(data, function( index, row ) {
		  //bind header
		  if(index == 0) {
			html += '<thead>';
			html += '<tr>';
			$.each(row, function( index, colData ) {
				html += '<th>';
				html += colData;
				html += '</th>';
			});
			html += '</tr>';
			html += '</thead>';
			html += '<tbody>';
		  } else {
			html += '<tr>';
			$.each(row, function( index, colData ) {
				html += '<td>';
				html += colData;
				html += '</td>';
			});
			html += '</tr>';
		  }
		});
		html += '</tbody>';
		html += '</table>';
		alert(html);
		$('#csv-display').append(html);
	  }
	}
