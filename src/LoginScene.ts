module Game {
	export class LoginScene extends eui.Component {
		private static m_Instance: LoginScene;
		public static get Instance() {
			if (this.m_Instance == null)
				this.m_Instance = new LoginScene();
			return this.m_Instance;
		}
		public constructor() {
			super();
			this.skinName = new loginSceneSkin();
			this.init();
		}
		private loginBtn : eui.Button;

		//初始化函数
		private init():void{
			this.addUIListener();
			this.addActionListener();//"echo.websocket.org", 80
			NetMgr.GetInstance().Connect("ws://192.168.210.86:7850/");
		}
		//销毁函数
		private destory():void{
			this.removeUIListener();
			this.removeActionListener();
			this.parent.removeChild(this);
		}
		//UI控件回调
		private addUIListener():void{
			this.loginBtn.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onLoginCallBack,this);
		}
		private removeUIListener():void{
			
		}

		//动作监听
		private addActionListener():void{

		}
		private removeActionListener():void{

		}
		private grabGandlordTime : number;
		//登录按钮回调
		private onLoginCallBack(event:egret.TouchEvent){
			console.log("loginBtn call back");
			//切换到大厅界面
			this.parent.addChild(LobbyScene.Instance);
			//销毁自己
			this.destory();
		}
	}
}