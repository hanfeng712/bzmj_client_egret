var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Game;
(function (Game) {
    /*
        游戏状态枚举
    */
    var GameStateType;
    (function (GameStateType) {
        /*
            初始化
        */
        GameStateType[GameStateType["GameState_Init"] = 1] = "GameState_Init";
        /*
            抢地主
        */
        GameStateType[GameStateType["GameState_GrabLandlord"] = 2] = "GameState_GrabLandlord";
        /*
            游戏中
        */
        GameStateType[GameStateType["GameState_Gameing"] = 3] = "GameState_Gameing";
        /*
            结算状态
        */
        GameStateType[GameStateType["GameState_Settle"] = 4] = "GameState_Settle";
    })(GameStateType = Game.GameStateType || (Game.GameStateType = {}));
    var RoomManager = (function () {
        function RoomManager() {
        }
        Object.defineProperty(RoomManager, "Instance", {
            get: function () {
                if (this.m_Instance == null)
                    this.m_Instance = new RoomManager();
                return this.m_Instance;
            },
            enumerable: true,
            configurable: true
        });
        RoomManager.prototype.init = function () {
        };
        return RoomManager;
    }());
    Game.RoomManager = RoomManager;
    __reflect(RoomManager.prototype, "Game.RoomManager");
    var GameStateMgr = (function () {
        function GameStateMgr() {
            this.stateList = {};
        }
        Object.defineProperty(GameStateMgr, "Instance", {
            get: function () {
                if (this.m_Instance == null)
                    this.m_Instance = new GameStateMgr();
                return this.m_Instance;
            },
            enumerable: true,
            configurable: true
        });
        GameStateMgr.prototype.GetStateMatchine = function (key) {
            var matchine = new StateMachineMgr;
            this.stateList[key] = matchine;
            matchine.mName = key;
            return matchine;
        };
        GameStateMgr.prototype.RemoveStateMatchine = function (v) {
            this.stateList[v.mName] = null;
        };
        return GameStateMgr;
    }());
    Game.GameStateMgr = GameStateMgr;
    __reflect(GameStateMgr.prototype, "Game.GameStateMgr");
    var StateMachineMgr = (function () {
        function StateMachineMgr() {
            this.mGameStateActionMap = {}; //游戏的状态容器
            this.mGameStateDestoryMap = {}; //游戏的状态容器
            this.mGameStateList = [];
        }
        /*
            设置当前的状态
        */
        StateMachineMgr.prototype.SetCurGameStatus = function (v) {
            this.mCurGameStatus = v;
            this.mNextGameStatus = v;
        };
        /*
            初始化游戏状态容器
        */
        StateMachineMgr.prototype.PushGameState = function (key, callback1, callback2) {
            this.mGameStateActionMap[key] = callback1;
            this.mGameStateDestoryMap[key] = callback2;
            this.mGameStateList.push(key);
        };
        /*
            调整执行顺序
        */
        StateMachineMgr.prototype.SetGameState = function (keys) {
            this.mGameStateList = [];
            for (var k = 0; k < keys.length; k++) {
                this.mGameStateList.push(keys[k]);
            }
        };
        /*
            刚进入游戏，初始化游戏信息
        */
        StateMachineMgr.prototype.InitCurGameInfo = function (state) {
            this.SetCurGameStatus(state);
            this.mNextGameStatus = state;
        };
        /*
            计算下一个状态
        */
        StateMachineMgr.prototype.CalcNextState = function () {
            if (this.mCurGameStatus == this.mGameStateList[this.mGameStateList.length - 1]) {
                this.mNextGameStatus = this.mGameStateList[0];
                return;
            }
            for (var i = 0; i < this.mGameStateList.length; i++) {
                if (this.mGameStateList[i] == this.mCurGameStatus) {
                    this.mNextGameStatus = this.mGameStateList[i + 1];
                }
            }
        };
        /*
            切换游戏状态
        */
        StateMachineMgr.prototype.SwitchGameState = function () {
            this.mCurGameStatus = this.mNextGameStatus;
            this.CalcNextState();
            //清理其他状态的方法
            for (var k in this.mGameStateDestoryMap) {
                if (k != this.mCurGameStatus.toString()) {
                    var destoryCallFunc = this.mGameStateDestoryMap[k];
                    if (destoryCallFunc != null) {
                        destoryCallFunc();
                    }
                }
            }
            //执行自己状态的方法
            var actionCallFun = this.mGameStateActionMap[this.mCurGameStatus];
            actionCallFun();
        };
        return StateMachineMgr;
    }());
    Game.StateMachineMgr = StateMachineMgr;
    __reflect(StateMachineMgr.prototype, "Game.StateMachineMgr");
})(Game || (Game = {}));
//# sourceMappingURL=RoomManager.js.map