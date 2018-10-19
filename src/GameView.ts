module Game {
	export class GameView extends eui.Component {

		private static m_Instance: GameView
		public static get Instance() {
			if (this.m_Instance == null)
				this.m_Instance = new GameView();
			return this.m_Instance;
		}
		
		public constructor() {
			super();
			this.skinName = new GameViewSkin();
			this.init();
		}
		
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
		private chipButton1 : eui.Button;
		private chipButton2 : eui.Button;
		private chipButton3 : eui.Button;
		private chipButton4 : eui.Button;
		private chipButton5 : eui.Button;

		//UI控件回调
		private addUIListener():void{
			this.chipButton1.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack,this);
			this.chipButton2.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack,this);
			this.chipButton3.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack,this);
			this.chipButton4.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack,this);
			this.chipButton5.$addListener(egret.TouchEvent.TOUCH_BEGIN, this.onChipCallBack,this);
		}
		private removeUIListener():void{
			
		}

		//动作监听
		private addActionListener():void{

		}
		private removeActionListener():void{

		}

		//登录按钮回调
		private onChipCallBack(e:egret.TouchEvent){
			if (e.target == this.chipButton1){
                this.sendBetReq(1);
            }
            else if (e.target == this.chipButton2){
                this.sendBetReq(2);
            }
            else if (e.target == this.chipButton3){
                this.sendBetReq(3);
            }
            else if (e.target == this.chipButton4){
                this.sendBetReq(4);
            }
            else if (e.target == this.chipButton5){
                this.sendBetReq(5);
            }
		}

		private sendBetReq(chipNum:number):void{
			console.log("======come in ===chipBtn:",chipNum,"=============");
		}
	}

}