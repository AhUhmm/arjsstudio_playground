window.onload = function () {
    var myVideo = document.getElementById("video1");
    var myVideo2 = document.getElementById("video2");

    window.onclick = function () {
        if (myVideo1.visible == true) {
            myVideo1.muted = !myVideo.muted;
            return false;
        } else if (myVideo2.visible == true) {
            myVideo2.muted = !myVideo.muted;
            return false;
        } else {
            myVideo1.muted = !myVideo.muted;
            myVideo2.muted = !myVideo.muted;
            return false;
        }
    };
};
