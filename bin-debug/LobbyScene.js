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
    var LobbyScene = (function (_super) {
        __extends(LobbyScene, _super);
        function LobbyScene() {
            var _this = _super.call(this) || this;
            _this.skinName = new lobbySceneSkin();
            _this.init();
            return _this;
        }
        Object.defineProperty(LobbyScene, "Instance", {
            get: function () {
                if (this.m_Instance == null)
                    this.m_Instance = new LobbyScene();
                return this.m_Instance;
            },
            enumerable: true,
            configurable: true
        });
        //初始化函数
        LobbyScene.prototype.init = function () {
            this.addUIListener();
            this.addActionListener();
        };
        //销毁函数
        LobbyScene.prototype.destory = function () {
            this.removeUIListener();
            this.removeActionListener();
            this.parent.removeChild(this);
        };
        //UI控件回调
        LobbyScene.prototype.addUIListener = function () {
            this.createRoomBtn.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onCreateRoomBtnCallBack, this);
            this.addRoomBtn.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onAddRoomBtnCallBack, this);
        };
        LobbyScene.prototype.removeUIListener = function () {
        };
        //动作监听
        LobbyScene.prototype.addActionListener = function () {
        };
        LobbyScene.prototype.removeActionListener = function () {
        };
        LobbyScene.prototype.onCreateRoomBtnCallBack = function (event) {
            console.log("LobbyScene:create room btn call back");
            /*
            let data = new message.LoginReq();
            data.accountName = "hf0001";
            data.accountPass = "123456";
            console.log(data);
            */
            //切换到大厅界面
            this.parent.addChild(Game.GameView.Instance);
            //销毁自己
            this.destory();
        };
        LobbyScene.prototype.onAddRoomBtnCallBack = function (event) {
            console.log("LobbyScene:add room btn call back");
        };
        return LobbyScene;
    }(eui.Component));
    Game.LobbyScene = LobbyScene;
    __reflect(LobbyScene.prototype, "Game.LobbyScene");
})(Game || (Game = {}));
//# sourceMappingURL=LobbyScene.js.map