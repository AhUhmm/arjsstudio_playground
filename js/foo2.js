window.onload = function () {
    var scene = document.querySelector("a-scene");
    var myVideo = document.getElementById("video1");

    if (scene.hasLoaded) {
        run();
    } else {
        scene.addEventListener("loaded", run);
    }
    function run() {
        var cam = scene.querySelector("a-camera");
        var frustum = new THREE.Frustum();
        frustum.setFromMatrix(
            new THREE.Matrix4().multiplyMatrices(
                cam.projectionMatrix,
                cam.matrixWorldInverse
            )
        );

        document
            .querySelector(".say-hi-button")
            .addEventListener("click", function () {
                var pos = new THREE.Vector3();
                scene.querySelector("#roma").object3D.getWorldPosition(pos);
                var dist = document
                    .querySelector("#roma")
                    .getAttribute("distance");
                if (dist < 3) {
                    myVideo.muted = !myVideo.muted;
                    alert(pos);
                    return false;
                }
                //alert(dist);
            });
    }
};
