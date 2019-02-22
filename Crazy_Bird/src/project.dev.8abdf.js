require = function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
}()({
  bg_move: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4544eX2NO9IipAUsUWMHXyL", "bg_move");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 100
      },
      onLoad: function onLoad() {},
      update: function update(dt) {
        this.node.x -= this.speed * dt;
        this.node.x <= -959 && (this.node.x = 960);
      }
    });
    cc._RF.pop();
  }, {} ],
  bird0_controlor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e23aqqKe1E76BXqeyJ0PMK", "bird0_controlor");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 100
      },
      onLoad: function onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
      },
      update: function update(dt) {
        var y = 460 * cc.randomMinus1To1();
        this.node.y -= y * dt;
        this.node.x += this.speed * dt;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        if (2 == other.tag) {
          var anim = this.getComponent(cc.Animation);
          anim.play("bired0_glode");
          setTimeout(function() {
            this.node.destroy();
          }.bind(this), 500);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  bird1_controlor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90255LVjuJEPJn3V4n1FlvW", "bird1_controlor");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 200
      },
      onLoad: function onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
      },
      update: function update(dt) {
        var y = 460 * cc.randomMinus1To1();
        this.node.y -= y * dt;
        this.node.x += this.speed * dt;
        this.node.y >= 100 || this.node.y <= -100 ? this.speed = 350 : this.speed = 100;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        if (2 == other.tag) {
          var anim = this.getComponent(cc.Animation);
          anim.play("bired1_glode");
          setTimeout(function() {
            this.node.destroy();
          }.bind(this), 500);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  bird2_controlor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29c87gUlcVHH7cEYeGh5Hka", "bird2_controlor");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        anim: {
          default: [],
          type: [ cc.Animation ]
        }
      },
      onLoad: function onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.anim = this.getComponent(cc.Animation);
        var i = 10 * cc.random0To1();
        if (i >= 0 && i <= 3) {
          this.anim.play("1");
          cc.log(1);
        } else if (i >= 3 && i <= 6) {
          this.anim.play("2");
          cc.log(2);
        } else {
          this.anim.play("3");
          cc.log(3);
        }
      },
      update: function update(dt) {},
      onCollisionEnter: function onCollisionEnter(other, self) {
        if (2 == other.tag) {
          var anim = this.getComponent(cc.Animation);
          anim.play("bired2_glode");
          setTimeout(function() {
            this.node.destroy();
          }.bind(this), 500);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  bird4_controlor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0aa1aVYmiROVp7VDaBWmWyy", "bird4_controlor");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        if (2 == other.tag) {
          var anim = this.getComponent(cc.Animation);
          anim.play("bired4_glode");
          setTimeout(function() {
            this.node.destroy();
          }.bind(this), 500);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  boom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1417r8nNtCloVUQ0CbXP+2", "boom");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        anim: {
          default: null,
          type: cc.Animation
        },
        animState: {
          default: null,
          type: cc.AnimationState
        },
        boom: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.anim = this.getComponent(cc.Animation);
        this.animState = this.anim.play("close_open");
      },
      active_boom: function active_boom() {
        this.boom.active = true;
      },
      inactive_boom: function inactive_boom() {
        this.boom.active = false;
      },
      buttonclick: function buttonclick() {
        var playing = this.animState.isPlaying;
        playing || this.anim.play();
      }
    });
    cc._RF.pop();
  }, {} ],
  des: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50379Aoji5J76SWIoveQ6PQ", "des");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      buttonclick: function buttonclick() {
        setTimeout(function() {
          this.node.destroy();
        }.bind(this), 500);
      }
    });
    cc._RF.pop();
  }, {} ],
  gamestart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2aa6clxf7lEMooJ0dS9myJg", "gamestart");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onclick: function onclick() {
        cc.director.loadScene("gaming");
      }
    });
    cc._RF.pop();
  }, {} ],
  grades: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86d66z1MbxNdqtbrzV9cUU3", "grades");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labe: {
          default: null,
          type: cc.Label
        },
        grades: 0
      },
      onLoad: function onLoad() {},
      onCollisionEnter: function onCollisionEnter(other, self) {
        if (0 == other.tag) {
          this.grades = parseInt(this.labe.string);
          cc.log("grades" + this.grades);
          this.grades += 1;
          this.labe.string = this.grades.toString();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  life: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44babtobZ9Ck5Q1ThOLGnh6", "life");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labe: {
          default: null,
          type: cc.Label
        },
        lifes: 10,
        target: {
          default: null,
          type: cc.Prefab
        },
        flag: true
      },
      onLoad: function onLoad() {},
      update: function update(dt) {
        if (this.lifes <= 0) {
          if (this.flag) {
            var scene = cc.director.getScene();
            var node = cc.instantiate(this.target);
            node.parent = scene;
            node.setPosition(0, 0);
            var anim = node.getComponent(cc.Animation);
            anim.play("gamend");
            this.flag = false;
          }
          setTimeout(function() {
            cc.director.loadScene("gamstart");
          }.bind(this), 2500);
        }
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        if (0 === other.tag) {
          this.lifes = parseInt(this.labe.string);
          this.lifes -= 1;
          this.labe.string = this.lifes.toString();
          other.node.destroy();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  pipe_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32e01ggKvhKwYl+3834clB+", "pipe_sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        audioSource: {
          type: cc.AudioSource,
          default: null
        }
      },
      onLoad: function onLoad() {},
      onCollisionEnter: function onCollisionEnter(other, self) {
        0 == other.tag && this.audioSource.play();
      }
    });
    cc._RF.pop();
  }, {} ],
  skill_one: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcb44gdtsxELJx5YSpFLpL3", "skill_one");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        anim: {
          default: null,
          type: cc.Animation
        },
        animState: {
          default: null,
          type: cc.AnimationState
        }
      },
      onLoad: function onLoad() {
        this.anim = this.getComponent(cc.Animation);
        this.animState = this.anim.play("skill_one");
      },
      oncliki: function oncliki() {
        cc.log(1);
        var playing = this.animState.isPlaying;
        playing || this.anim.play("skill_one");
      }
    });
    cc._RF.pop();
  }, {} ],
  swpam_bird: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f376vSFHRKi5xyNxd5FDTc", "swpam_bird");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        brid: {
          default: [],
          type: [ cc.Prefab ]
        },
        time: 0,
        number: 4
      },
      onLoad: function onLoad() {},
      update: function update(dt) {
        this.time += dt;
        if (this.time >= 1.5) {
          this.time = cc.random0To1();
          var scene = cc.director.getScene();
          var j = Math.random() * this.number;
          j = Math.floor(j);
          cc.log("j: ", j);
          var node = cc.instantiate(this.brid[j]);
          var y = 50 * cc.randomMinus1To1() + 320;
          node.parent = scene;
          var x = 50 * cc.randomMinus1To1();
          node.setPosition(x, y);
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "des", "gamestart", "grades", "life", "bg_move", "bird0_controlor", "bird1_controlor", "bird2_controlor", "bird4_controlor", "swpam_bird", "boom", "pipe_sound", "skill_one" ]);
//# sourceMappingURL=project.dev.js.map