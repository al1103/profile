const sodo = document.getElementsByClassName("contents");
const images = document.getElementsByClassName("svg");

setTimeout(hiddens, 5100)
function hiddens() {
    sodo[0].style.display = "none";
    images[0].style.display = "block"
}
const profile = document.getElementById("profile");
setTimeout(profiles, 12300);
function profiles() {
    images[0].style.display = "none"
    profile.style.display = "block";
    console.log("done");

}
