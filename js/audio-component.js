AFRAME.registerComponent("audiohandler", {
    init: function () {
        this.vid = document.querySelector("#video1");
        var sceneEl = document.querySelector("a-scene");
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
                    var video1 = document.querySelector("#video1");
                    var video2 = document.querySelector("#video2");
                    var videoSrc = sceneEL.querySelector("#roma");

                    video1.muted = !video1.muted;
                    video2.muted = true;
                    //console.log(this.el.getAttribute("material"));
                    console.log(videoSrc.getDOMAttribute("material").src);
                    var btnTxt = document.getElementById("displayBtn");
                    btnTxt.innerHTML = "Sound Off";
                };
            }
        }
    },
});
