module Game {
	export class LobbyScene extends eui.Component{
		private static m_Instance: LobbyScene;
		public static get Instance() {
			if (this.m_Instance == null)
				this.m_Instance = new LobbyScene();
			return this.m_Instance;
		}
		public constructor() {
			super();
			this.skinName = new lobbySceneSkin();
			this.init();
		}

		private createRoomBtn : eui.Button;
		private addRoomBtn : eui.Button;
		private kefuBtn : eui.Button;
		private fenxiangBtn : eui.Button;

		//初始化函数
		private init():void{
			this.addUIListener();
			this.addActionListener();
		}
		//销毁函数
		private destory():void{
			this.removeUIListener();
			this.removeActionListener();
			this.parent.removeChild(this);
		}

		//UI控件回调
		private addUIListener():void{
			this.createRoomBtn.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onCreateRoomBtnCallBack,this);
			this.addRoomBtn.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onAddRoomBtnCallBack,this);
		}
		private removeUIListener():void{
		}

		//动作监听
		private addActionListener():void{

		}
		private removeActionListener():void{

		}
		private onCreateRoomBtnCallBack(event:egret.TouchEvent){
			console.log("LobbyScene:create room btn call back");
			/*
			let data = new message.LoginReq();
			data.accountName = "hf0001";
			data.accountPass = "123456";
			console.log(data);
			*/
			//切换到大厅界面
			this.parent.addChild(GameView.Instance);
			//销毁自己
			this.destory();
		}
		private onAddRoomBtnCallBack(event:egret.TouchEvent){
			console.log("LobbyScene:add room btn call back");
		}
	}
}