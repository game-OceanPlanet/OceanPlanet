module qmr {
	export class RuneLotteryView extends BaseModule {
        protected content: eui.Group;

		protected lottery_g: eui.Group;	//转盘group
		protected start_btn: eui.Image;
		protected cd_time: eui.Label;
		protected lottery_bgd: eui.Image;
		public txt_logs:eui.Label;


        protected cost_num: eui.Label;
        
		//是否在抽奖中
		private isCircling: boolean;
		
		//活动抽奖次数
		private lastTime: number = 10;

		private lotteryId: number = -1;
		private gameItemArr: Array<RuneLotteryAwardItem> = [];

		private __endTime:number = 0;
		private __rewardIndexs:number[];

		public constructor() {
			super();
			this.isNeedMask = true;
            this.isPopupEffect = true;
            
            this.qmrSkinName = "RuneLotteryViewSkin";
		}

		protected initComponent(): void {
			super.initComponent();
			let t = this;
			let len = 8;
			let R = 170;	//半径
			let rangle = 360 / len;

			t.txt_logs.textFlow = new Array<egret.ITextElement>({ text: "查看记录", style: { underline: true } });
			
			let gameItem: RuneLotteryAwardItem;
			
			
			let rdws:string[] = ActiveShopModel.instance.rewardDes;
			for (let i = 0; i < len; i++) {
				gameItem = new RuneLotteryAwardItem();
				//gameItem.scaleX = gameItem.scaleY = 0.8;
				gameItem.horizontalCenter = R * Math.sin(rangle * i * Math.PI / 180);
				gameItem.verticalCenter = -R * Math.cos(rangle * i * Math.PI / 180);
				//gameItem.rotation = rangle * i;
				gameItem.setInfo(rdws[i]);
				this.gameItemArr[i] = gameItem;
				this.lottery_g.addChild(gameItem);
			}

			this.__rewardIndexs = ActiveShopModel.instance.rewardIndexs;
		}
        /**
         * @description 初始化数据
         */
		protected initData(): void {
			super.initData();
			let t = this;
			this.isCircling = false;
			this.setShowTime();

			let pro:com.message.OcenActivityMsg = ActiveShopModel.instance.ocpActivePro;
            if(pro){
                let endTime:number = Int64Util.getNumber(pro.endTime);
                if(endTime > ServerTime.serverTime / 1000){
					ActiveShopController.instance.requestMyOcpActiveInfo();
					t.__endTime = endTime;
                }
            }
		}
        /**
         * @description 初始化监听事件
         */
		protected initListener(): void {
			super.initListener();
			let t = this;
			t.addClickEvent(t.start_btn, t.startLottery, t);
			t.addClickEvent(t.txt_logs, t.showLogsView, t);

			t.registerNotify(NotifyConst.S_GET_MY_OCEAN_ACTIVITY_INFO, t.setShowTime, t);
			t.registerNotify(NotifyConst.S_OCEAN_ACTIVITY_DRAW, t.onDrawResult, t);
		}

		private setShowTime(): void {
			let pro:com.message.MyOceanActivityMsg = ActiveShopModel.instance.myOcpActivePro;
			let actPro:com.message.OcenActivityMsg = ActiveShopModel.instance.ocpActivePro;
			let leftCount:number = 0;
			let directCount:number = 0;
			let teamCount:number = 0;
			if(pro){
				leftCount = pro.leftCount;
				directCount = pro.directCount;
				teamCount = pro.teamCount;
			}
			let directCount2:number = 0;
			let teamCount2:number = 0; 
			if(actPro){
				directCount2 = actPro.directCount;
				teamCount2 = actPro.teamCount;
			}
			this.lastTime = leftCount;
			this.cost_num.textFlow = (new egret.HtmlTextParser).parser("可抽次数:<font color='0x27cb6c'>" +　leftCount + "</font>");
			let msg:string = "直推人数：<font color='0x27cb6c'>" + directCount + "</font>"
							+ "团队规模：<font color='0x27cb6c'>" + teamCount + "</font>\r" 
						   +"直推"+directCount2+"人可以免费获得<font color='0x27cb6c'>" + 1 + "</font>次抽奖机会！可累计！\r"
						   + "团队增加"+teamCount2+"人也免费获得<font color='0x27cb6c'>" + 1 + "</font>次抽奖机会！可累计！"
			this.cd_time.textFlow = (new egret.HtmlTextParser).parser(msg);
		}

		//单次抽奖
		private startLottery(): void {
			if (this.isCircling) return;
			if (this.lastTime <= 0){
				TipManagerCommon.getInstance().createCommonTip("抽奖次不够,请完成足够的团队任务!");
				return;
			}
			this.isCircling = true;
			HeroModel.instance.isDelayShowMoney = true;
			ActiveShopController.instance.requestDraw();
		}

		private onDrawResult():void
		{
			let id:number = ActiveShopModel.instance.drawId;
			if(id && id > 0){
				let index:number = this.__rewardIndexs.indexOf(id);
				if(index != -1){
					this.onResLottery(index + 1);
				}
			}
		}

		private onResLottery(rewardIndex:number): void {
			this.setShowTime();
			this.loadAndPlayEffect("SOUND_ZHUANPAN",0);
			this.lotteryEnd({id:rewardIndex - 1,type:1});
		}
		
		//抽奖完成
		private lotteryEnd(vo: any): void {
			let t = this;
			if (vo.type != -1) {
				let rotation = 5 * 360  + (360/8) * vo.id;
				egret.Tween.get(t.lottery_bgd).to({ rotation: rotation }, 2000, egret.Ease.sineOut).call(() => {
					t.isCircling = false;
					t.lotteryEndTween(vo.id);
					SoundManager.getInstance().stopSoundEffect("SOUND_ZHUANPAN");
				}, t);
			} else {
				t.isCircling = false;
			}
		}

		private lotteryEndTween(index:number): void {
			SoundManager.getInstance().loadAndPlayEffect("SOUND_JINBI");
			let rdws:string[] = ActiveShopModel.instance.rewardDes;
			let des:string = rdws[index];
			TipManagerCommon.getInstance().createCommonTip("恭喜本次抽奖获得："+des);
			HeroModel.instance.isDelayShowMoney = false;
			this.dispatch(NotifyConst.S_SYN_PROPERTY);
		}

		private showLogsView():void
		{
			ModuleManager.showModule(ModuleNameConst.ACTIVE_DRAW_LOGS);
		}
		
		public dispose()
		{
			super.dispose();
			SoundManager.getInstance().stopSoundEffect("SOUND_ZHUANPAN")
		}
	}
}