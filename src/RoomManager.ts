module Game {
	/*
		游戏状态枚举
	*/
	export enum GameStateType{
		/*
			初始化
		*/
		GameState_Init = 1,
		/*
			抢地主
		*/
		GameState_GrabLandlord,
		/*
			游戏中
		*/
		GameState_Gameing,
		/*
			结算状态
		*/
		GameState_Settle,
	}
	export class RoomManager {
		private static m_Instance: RoomManager;
		public static get Instance() {
			if (this.m_Instance == null)
				this.m_Instance = new RoomManager();
			return this.m_Instance;
		}
		public constructor() {
		}
		
		private init():void{
		}

	}
	export class GameStateMgr{
		private static m_Instance: GameStateMgr;
		public static get Instance() {
			if (this.m_Instance == null)
				this.m_Instance = new GameStateMgr();
			return this.m_Instance;
		}

		public constructor() {
		}

		private stateList : { [key: string]: StateMachineMgr } = {};

		public GetStateMatchine(key:string):StateMachineMgr{
			let matchine = new StateMachineMgr;
			this.stateList[key] = matchine;
			matchine.mName = key;
			return matchine;
		}
		public RemoveStateMatchine(v : StateMachineMgr){
			this.stateList[v.mName] = null;
		}
	}

	export class StateMachineMgr{
		public constructor() {
		}
		public mName : string;
		public mCurGameStatus : string;//游戏当前的状态
		public mNextGameStatus : string;//游戏的下一个状态
		public mGameStateActionMap :{ [key: number]: Function } = {};//游戏的状态容器
		public mGameStateDestoryMap :{ [key: number]: Function } = {};//游戏的状态容器
		public mGameStateList : Array<string> = [];
		/*
			设置当前的状态
		*/
		public SetCurGameStatus(v:string) : void{
			this.mCurGameStatus = v;
			this.mNextGameStatus = v;
		}

		/*
			初始化游戏状态容器
		*/
		public PushGameState(key:string, callback1:Function, callback2:Function):void{
			this.mGameStateActionMap[key] = callback1;
			this.mGameStateDestoryMap[key] = callback2;
			this.mGameStateList.push(key);
		}
		/*
			调整执行顺序
		*/
		public SetGameState(keys : string[]):void{
			this.mGameStateList = [];
			for(let k = 0; k < keys.length; k++){
				this.mGameStateList.push(keys[k]);
			}
		}

		/*
			刚进入游戏，初始化游戏信息
		*/
		public InitCurGameInfo(state:string):void{
			this.SetCurGameStatus(state);
			this.mNextGameStatus = state;
		}
		/*
			计算下一个状态
		*/
		public CalcNextState():void{
			if(this.mCurGameStatus == this.mGameStateList[this.mGameStateList.length - 1]){
				this.mNextGameStatus = this.mGameStateList[0];
				return;
			}
			for(let i = 0; i < this.mGameStateList.length;i++){
				if(this.mGameStateList[i] == this.mCurGameStatus){
					this.mNextGameStatus = this.mGameStateList[i + 1]
				}
			}
		}
		/*
			切换游戏状态
		*/
		public SwitchGameState():void{
			this.mCurGameStatus = this.mNextGameStatus;
			this.CalcNextState();
			//清理其他状态的方法
			for(let k in this.mGameStateDestoryMap){
				if (k != this.mCurGameStatus.toString()){
					let destoryCallFunc = this.mGameStateDestoryMap[k];
					if(destoryCallFunc != null)
					{
						destoryCallFunc();
					}
				}
			}
			//执行自己状态的方法
			let actionCallFun = this.mGameStateActionMap[this.mCurGameStatus];
			actionCallFun();
		}
	}
}