window.onload = function() {


  var fileUpload = document.querySelector(".file-upload");
  var profilePic = document.querySelector(".profile-pic");
  var uploadButton = document.querySelector(".upload-button");
  var si = document.querySelector(".squarepic");
  var post = document.querySelector(".post");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var cen = document.querySelector(".cen");
  var home = document.querySelector(".home");
  var profile = document.querySelector(".profile");

  var readURL = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        profilePic.setAttribute('src', e.target.result);
        profilePic.style.objectFit = 'cover';
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  profilePic.addEventListener('click', function() {
    fileUpload.click();
  });

  fileUpload.addEventListener('change', function() {
    readURL(this);
  });

  post.addEventListener('click',function handlepost(){
    cen.style.display="none";
    left.style.display="block";
    right.style.display="none";
    console.log("clicked");
    
  })

  home.addEventListener('click',function handlepost(){
    cen.style.display="block";
    left.style.display="none";
    right.style.display="none";
    console.log("clicked");
  })

  profile.addEventListener('click',function handlepost(){
    cen.style.display="none";
    left.style.display="none";
    right.style.display="block";
    console.log("clicked");
  })
}
