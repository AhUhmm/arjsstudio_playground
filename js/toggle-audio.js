window.onload = function () {
    var myVideo = document.getElementById("video1");

    window.onclick = function () {
        myVideo.muted = !myVideo.muted;
        return false;
    };
};
