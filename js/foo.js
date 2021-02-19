AFRAME.registerComponent("foo", {
    init: function () {
        this.vid = document.querySelector("#video1");
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
                console.log(pos);
                //this.vid.pause();
            } else {
                var x = document.getElementsByClassName("debug");
                x.style.display = "flex";
                document.getElementById("debugContent").innerHTML = pos;
                //this.vid.play();
            }
        }
    },
});
