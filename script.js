const openBtn = document.getElementById("openBtn");

const cover = document.getElementById("cover");

const invitation = document.getElementById("invitation");

openBtn.addEventListener("click", function(){

    cover.style.display = "none";

    invitation.style.display = "block";

});
