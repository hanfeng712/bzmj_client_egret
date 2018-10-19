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
    var LoginScene = (function (_super) {
        __extends(LoginScene, _super);
        function LoginScene() {
            var _this = _super.call(this) || this;
            _this.skinName = new loginSceneSkin();
            _this.init();
            return _this;
        }
        Object.defineProperty(LoginScene, "Instance", {
            get: function () {
                if (this.m_Instance == null)
                    this.m_Instance = new LoginScene();
                return this.m_Instance;
            },
            enumerable: true,
            configurable: true
        });
        //初始化函数
        LoginScene.prototype.init = function () {
            this.addUIListener();
            this.addActionListener(); //"echo.websocket.org", 80
            NetMgr.GetInstance().Connect("ws://192.168.210.86:7850/");
        };
        //销毁函数
        LoginScene.prototype.destory = function () {
            this.removeUIListener();
            this.removeActionListener();
            this.parent.removeChild(this);
        };
        //UI控件回调
        LoginScene.prototype.addUIListener = function () {
            this.loginBtn.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onLoginCallBack, this);
        };
        LoginScene.prototype.removeUIListener = function () {
        };
        //动作监听
        LoginScene.prototype.addActionListener = function () {
        };
        LoginScene.prototype.removeActionListener = function () {
        };
        //登录按钮回调
        LoginScene.prototype.onLoginCallBack = function (event) {
            console.log("loginBtn call back");
            //切换到大厅界面
            this.parent.addChild(Game.LobbyScene.Instance);
            //销毁自己
            this.destory();
        };
        return LoginScene;
    }(eui.Component));
    Game.LoginScene = LoginScene;
    __reflect(LoginScene.prototype, "Game.LoginScene");
})(Game || (Game = {}));
//# sourceMappingURL=LoginScene.js.map