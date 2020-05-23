function Test(){
	<script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
	var GoogleAuth; // Google Auth object.
	init();
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
function init() {
  gapi.load('auth2', initClient() {
    /* Ready. Make a call to gapi.auth2.init or some other API */
  });
}

function initClient() {
  gapi.client.init({
      'apiKey': 'AIzaSyCiexyDT-5r4kVo7G9oFhNeW95LGFpIPDw',
      'clientId': '458950126622-170a7i9aqsmhp31r6l1r0ffnibua2qp1.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}

function ButtonPressed(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			readXML(this);
		}
	};
	
	//initClient();
	init();
	GoogleAuth.signIn();
	
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
