AFRAME.registerComponent("audiohandler2", {
    init: function () {
        //this.vid = document.querySelector("#video2");
    },
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

            if (frustum.containsPoint(pos)) {
                // Do something with the position...
                alert("visto video 2");
                window.onclick = function () {
                    var video1 = document.querySelector("#video1");
                    var video2 = document.querySelector("#video2");

                    video2.muted = !video2.muted;
                    video1.muted = true;
                };
            }
        }
    },
});
