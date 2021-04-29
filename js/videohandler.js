AFRAME.registerComponent("vidhandler", {
    schema: {
        target: { type: "string" },
    },
    init: function () {
        this.videoNodes = document.querySelectorAll(this.data.target);
    },
    tick: function () {
        if (this.el.object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                for (let i = 0; i < this.videoNodes.length; i++) {
                    this.videoNodes[i].play();
                }
            }
        } else {
            if (this.toggle) {
                for (let i = 0; i < this.videoNodes.length; i++) {
                    this.videoNodes[i].pause();
                }
                this.toggle = false;
            }
        }
    },
});
