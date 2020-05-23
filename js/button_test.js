function Test(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			readXML(this);
		}
	};
	
	xhttp.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml", true);
	//xhttp.open("GET", "http://www.google.com/bookmarks/?output=xml", true);
	xhttp.send();
}

function ButtonPressed(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			readXML(this);
		}
	};
	
	//xhttp.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml", true);
	xhttp.open("GET", "http://www.google.com/bookmarks/?output=xml", true);
	xhttp.send();
	

	/*
	var data;
  alert('WAMP klicked...');
		$.ajax({
		crossOrigin: true,
  dataType: 'xml',
  url: 'http://www.google.com/bookmarks/?output=xml',
		data: data,
	success: success(data)
	});
	*/
}

function readXML(xml) {
	alert('readXML wurde aufgerufen');
		var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("CD");
	for(i = 0; i<2; i++) {
		alert	(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
	}
}
/*
*/

function success(data) {
	$(data).find('price').each(function(){
	var name = $(this).text();
	alert(name);
});
    alert('Success called');
				
}
