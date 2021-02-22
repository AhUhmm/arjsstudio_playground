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
                //console.log("visibile");
                //alert("visibile");
                //this.vid.pause();
                window.onclick = function () {
                    var video1 = document.querySelector("#video1");
                    video1.muted = !video1.muted;
                    var btnTxt = document.getElementById("displayBtn");
                    btnTxt.innerHTML = "Sound Off";
                };
            }
        }
    },
});
