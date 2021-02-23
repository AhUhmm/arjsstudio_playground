AFRAME.registerComponent("audiohandler2", {
    tick: function () {
        if (this.el.sceneEl.camera) {
            var cam = this.el.sceneEl.camera;
            var frustum = new THREE.Frustum();
            frustum.setFromMatrix(
                new THREE.Matrix4().multiplyMatrices(
                    cam.projectionMatrix,
                    cam.matrixWorldInverse
                )
            );

            // Your 3d point to check
            var pos = new THREE.Vector3();
            this.el.object3D.getWorldPosition(pos);

            window.onclick = function () {
                if (frustum.containsPoint(pos)) {
                    // Do something with the position...

                    var video1 = document.querySelector("#video1");
                    var video2 = document.querySelector("#video2");

                    console.log(
                        "video 1 was " +
                            video1.muted +
                            ", " +
                            "video2 was " +
                            video2.muted
                    );

                    video2.muted = !video2.muted;
                    video1.muted = true;

                    console.log(
                        "video 1 is " +
                            video1.muted +
                            ", " +
                            "video2 is " +
                            video2.muted
                    );
                }
            };
        }
    },
});
