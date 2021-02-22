AFRAME.registerComponent("audiohandler", {
    init: function () {
        this.vid = document.querySelector("#video1");
        this.vid1 = document.querySelector("#video1");
        this.vid2 = document.querySelector("#video2");
        var btnTxt = document.getElementById("displayBtn");
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
                window.onclick = function () {
                    this.vid1.muted = !this.video1.muted;
                    //console.log(this.el.getAttribute("material"));
                    console.log(this.el.getDOMAttribute("material").src);

                    btnTxt.innerHTML = "Sound Off";
                };
            }
        }
    },
});
