function readURL(e){if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(e){$("#blah").attr("src",e.target.result)},a.readAsDataURL(e.files[0])}}$("#imgInp").change(function(){readURL(this)});