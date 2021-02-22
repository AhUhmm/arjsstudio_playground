window.onload = function () {
    var scene = document.querySelector("a-scene");
    var myVideo = document.querySelector("video1");

    if (scene.hasLoaded) {
        run();
    } else {
        scene.addEventListener("loaded", run);
    }
    function run() {
        document
            .querySelector(".say-hi-button")
            .addEventListener("click", function () {
                var cam = document.querySelector("a-camera");
                var frustum = new THREE.Frustum();
                frustum.setFromMatrix(
                    new THREE.Matrix4().multiplyMatrices(
                        cam.projectionMatrix,
                        cam.matrixWorldInverse
                    )
                );

                var pos = new THREE.Vector3();
                document.querySelector("#roma").object3D.getWorldPosition(pos);

                if (frustum.containsPoint(pos)) {
                    // Do something with the position...
                    console.log(worldPos);
                    myVideo.muted = !myVideo.muted;
                    alert("tap!");
                    //this.vid.pause();
                    return false;
                }
            });
    }
};
