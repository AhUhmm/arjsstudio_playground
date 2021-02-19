window.onload = function () {
    var scene = document.querySelector("a-scene");

    if (scene.hasLoaded) {
        run();
    } else {
        scene.addEventListener("loaded", run);
    }

    function run() {
        var myVideo1 = document.getElementById("video1");
        var myVideo2 = document.getElementById("video2");

        window.onclick = function () {
            if (document.querySelector("#roma").getAttribute("distance") < 3) {
                myVideo1.muted = !myVideo.muted;

                document.getElementById(
                    "displaybtn"
                ).innerHTML = document
                    .querySelector("#roma")
                    .getAttribute("distance");
            } else if (
                document.querySelector("#roma").getAttribute("distance")
            ) {
                myVideo2.muted = !myVideo.muted;
                return false;
            } else {
                myVideo1.muted = !myVideo.muted;
                myVideo2.muted = !myVideo.muted;
                return false;
            }
        };
    }
};
