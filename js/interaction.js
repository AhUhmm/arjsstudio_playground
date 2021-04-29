AFRAME.registerComponent("intersection", {
    init: function () {
        let el = this.el;
        let self = this;
        self.parts = [];
        el.addEventListener("model-loaded", (e) => {
            let model3D = el.getObject3D("mesh");
            if (!model3D) {
                return;
            }
            //console.log('model3D', model3D);
            model3D.traverse(function (node) {
                if (node.isMesh) {
                    console.log(node);
                    self.parts.push(node);
                    /* node.material = new THREE.MeshStandardMaterial({
                        color: 0x33aa00,
                    }); */
                }
            });
        });

        el.addEventListener("raycaster-intersected", (e) => {
            self.raycaster = e.detail.el;
            let intersection = self.raycaster.components.raycaster.getIntersection(
                el
            );
            console.log(
                "click",
                intersection.object.name,
                self.mouseOverObject,
                intersection.object.name != self.mouseOverObject
            );
            if (self.mouseOverObject != intersection.object.name) {
                intersection.object.material.emissive = new THREE.Color(
                    0xffff00
                );
                intersection.object.material.emissiveIntensity = 0.5;
            } else {
                intersection.object.material.emissive = new THREE.Color(
                    0x000000
                );
                intersection.object.material.emissiveIntensity = 0.0;
            }
            self.mouseOverObject = intersection.object.name;
        });

        el.addEventListener("raycaster-intersected-cleared", (e) => {
            self.parts.forEach(function (tree) {
                tree.material.emissive = new THREE.Color(0x000000);
                tree.material.emissiveIntensity = 0.0;
            });
            self.mouseOverObject = null;
        });

        /* el.addEventListener("click", function () {
            console.log(self.mouseOverObject);
            if (self.mouseOverObject === "Trunk_A") {
                //console.log('link');
                let url = "https://supermedium.com/supercraft/";
                let win = window.open(url, "_blank");
                win.focus();
            }
        }); */
    },
});
