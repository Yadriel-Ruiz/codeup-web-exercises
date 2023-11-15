document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var profilePic = document.getElementById("profile-pic");
        profilePic.src = "https://via.placeholder.com/150/FF0000";
    }, 2000);
    setTimeout(function () {
        var profileName = document.getElementById("profile-name");
        profileName.innerHTML = "Jane Doe";
    }, 4000);
    setTimeout(function () {
        var profileDesc = document.getElementById("profile-desc");
        profileDesc.classList.add("new-description");
    }, 6000);
    setInterval(function () {
        var profileCard = document.getElementById("profile-card");
        profileCard.classList.toggle("alternate-background");
    }, 2000);
});