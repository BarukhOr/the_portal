$(document).ready(function() {
	var uploadfiles = document.querySelector('#uploadfiles');
	uploadfiles.addEventListener('change', function () {
	    var files = this.files;
	    for(var i=0; i<files.length; i++){
	    	console.log("Multiple File " + i);
	        uploadFile(this.files[i]); // call the function to upload the file
	    }
	}, false);
});

function uploadFile(file){
	console.log('uploading: ' + file);
    var url = '/fileUpload';
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Every thing ok, file uploaded
            console.log(xhr.responseText); // handle response.
        }
    };
    fd.append("upload_file", file);
    xhr.send(fd);
}