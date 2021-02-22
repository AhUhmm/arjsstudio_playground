window.onload = function () {
    var scene = document.querySelector("a-scene");
    var myVideo = document.getElementById("video1");

    if (scene.hasLoaded) {
        run();
    } else {
        scene.addEventListener("loaded", run);
    }

    function run() {
        document
            .querySelector(".say-hi-button")
            .addEventListener("click", function () {
                var dist = document
                    .querySelector("#roma")
                    .getAttribute("distance");

                if (dist < 3) {
                    myVideo.muted = !myVideo.muted;
                    alert("tap!");
                    return false;
                }
            });
    }
};
