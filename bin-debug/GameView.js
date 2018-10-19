var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game;
(function (Game) {
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            var _this = _super.call(this) || this;
            _this.skinName = new GameViewSkin();
            _this.init();
            return _this;
        }
        Object.defineProperty(GameView, "Instance", {
            get: function () {
                if (this.m_Instance == null)
                    this.m_Instance = new GameView();
                return this.m_Instance;
            },
            enumerable: true,
            configurable: true
        });
        //初始化函数
        GameView.prototype.init = function () {
            this.addUIListener();
            this.addActionListener();
        };
        //销毁函数
        GameView.prototype.destory = function () {
            this.removeUIListener();
            this.removeActionListener();
            this.parent.removeChild(this);
        };
        //UI控件回调
        GameView.prototype.addUIListener = function () {
            this.chipButton1.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack, this);
            this.chipButton2.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack, this);
            this.chipButton3.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack, this);
            this.chipButton4.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack, this);
            this.chipButton5.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack, this);
        };
        GameView.prototype.removeUIListener = function () {
        };
        //动作监听
        GameView.prototype.addActionListener = function () {
        };
        GameView.prototype.removeActionListener = function () {
        };
        //登录按钮回调
        GameView.prototype.onChipCallBack = function (e) {
            if (e.target == this.chipButton1) {
                this.sendBetReq(1);
            }
            else if (e.target == this.chipButton2) {
                this.sendBetReq(2);
            }
            else if (e.target == this.chipButton3) {
                this.sendBetReq(3);
            }
            else if (e.target == this.chipButton4) {
                this.sendBetReq(4);
            }
            else if (e.target == this.chipButton5) {
                this.sendBetReq(5);
            }
        };
        GameView.prototype.sendBetReq = function (chipNum) {
            console.log("======come in ===chipBtn:", chipNum, "=============");
        };
        return GameView;
    }(eui.Component));
    Game.GameView = GameView;
    __reflect(GameView.prototype, "Game.GameView");
})(Game || (Game = {}));
//# sourceMappingURL=GameView.js.map