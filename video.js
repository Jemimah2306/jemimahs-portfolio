// Get the video element by its ID
var myVideo = document.getElementById("video");
// Function to play or pause the video when the button is clicked
function playPause() 
{ 
    // Check if the video is currently paused
    if (myVideo.paused) myVideo.play(); // If paused, play the video
    else myVideo.pause(); // If playing, pause the video
}