module qmr
{
	export class HeroController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: HeroController;
		public static get instance(): HeroController
		{
			return this._instance || (this._instance = new HeroController());
		}

		protected initListeners(): void
		{
			this.addSocketListener(MessageID.S_USER_LOGIN_INIT_FINISH, this.onRecUseLoginInitFinish, this, true);
            this.addSocketListener(MessageID.S_GET_PLAYER_INFO, this.resGetPlayerInfo, this, false);
            

            this.addSocketListener(MessageID.S_GET_FISH_INFO, this.getFishInfoResponse, this, false);
			this.addSocketListener(MessageID.S_COMBINE_FISH, this.getCombineResponse, this, false);
			this.addSocketListener(MessageID.S_BUY_FISH, this.getBuyFishResponse, this, false);
			this.addSocketListener(MessageID.S_GET_MONEY_REWARD, this.getMoneyResponse, this, false);
			this.addSocketListener(MessageID.C_GET_MONEY_INFO, this.getMoneyInfoResponse, this, false);
		}

		public reqUserLoginInitFinish(): void
		{
			var c: com.message.C_USER_LOGIN_INIT_FINISH = new com.message.C_USER_LOGIN_INIT_FINISH();
			this.sendCmd(c, MessageID.C_USER_LOGIN_INIT_FINISH, true);
		}

		/**
		 *  ---向服务器发送资源初始化完毕，可以推送其它消息了---
		 */
		public reqLoadResFinishToServer(): void
		{
			// var c: com.message.C_SYNC_LOAD_FINISH = new com.message.C_SYNC_LOAD_FINISH();
			// this.sendCmd(c, MessageID.C_SYNC_LOAD_FINISH, true);
		}

		/**
		 *  ===返回角色信息===
		 */
		private onRecUseLoginInitFinish(s: com.message.S_USER_LOGIN_INIT_FINISH): void
		{
            GlobalConfig.userId = Int64Util.getNumber(s.playerId);
            HeroModel.instance.playerPro = s.property as com.message.PlayerPropertyMsg;
            HeroModel.instance.IdentityPro = s.basePlayerMsg as com.message.BasePlayerMsg;
            HeroModel.instance.fishPros = s.fishMsg as com.message.FishMsg[];
			HeroModel.instance.teamPro = s.teamMsg as com.message.TeamMsg;
			HeroModel.instance.pendingMoney = HeroModel.instance.getPetPendingMoney();
			HeroModel.instance.totalMoney = Int64Util.getNumber(s.property.money);
			HeroModel.instance.totalUSDT = Int64Util.getNumber(s.property.diamond);

			ModuleManager.showModule(ModuleNameConst.MAINUI_VIEW, null, LayerConst.TOOLBAR);
			SceneManager.instance.enterHangMap(3004);

			let isOpen = qmr.SoundManager.getInstance().isMusicSoundOpen;
			qmr.SoundManager.getInstance().isMusicSoundOpen = false;
			qmr.SoundManager.getInstance().isMusicSoundOpen = true;
			qmr.SoundManager.getInstance().isMusicSoundOpen = isOpen;
			isOpen = qmr.SoundManager.getInstance().isEffectSoundOpen;
			qmr.SoundManager.getInstance().isEffectSoundOpen = false;
			qmr.SoundManager.getInstance().isEffectSoundOpen = true;
            qmr.SoundManager.getInstance().isEffectSoundOpen = isOpen;
            
			this.reqLoadResFinishToServer();//通知服务器资源已加载完毕，服务端开始广播游戏协议
			//延迟小段时间进入场景，提升视觉体验
			let timer = new egret.Timer(200, 1);
			timer.addEventListener(egret.TimerEvent.TIMER, function(){
				GameLoadingView.getInstance().hideSelf();
			}, this);
			timer.start();
        }
        
        private resGetPlayerInfo(s: com.message.S_GET_PLAYER_INFO):void
        {

        }


        // 获取我的鱼儿
        public getMyFishInfo():void
        {
            var c: com.message.C_GET_FISH_INFO = new com.message.C_GET_FISH_INFO();
			this.sendCmd(c, MessageID.C_GET_FISH_INFO, true);
        }

        // 获取我的鱼儿
        private getFishInfoResponse(s: com.message.S_GET_FISH_INFO):void
        {
            HeroModel.instance.fishPros = s.fishMsg as com.message.FishMsg[];
            this.dispatch(NotifyConst.S_GET_FINSH_INFO);
        }

        // 合并鱼儿
        public getCombineFish(id1:number, id2:number):void
        {
            var c: com.message.C_COMBINE_FISH = new com.message.C_COMBINE_FISH();
            c.fish1Id = id1;
            c.fish2Id = id2;
			this.sendCmd(c, MessageID.C_COMBINE_FISH, true);
        }

        // 合并鱼儿
        private getCombineResponse(s: com.message.S_COMBINE_FISH):void
        {
            HeroModel.instance.fishPros = s.fishMsg as com.message.FishMsg[];
            this.dispatch(NotifyConst.S_COMBINE_FINSH);
		}
		
		// 购买鱼儿
        public getBuyFish(configId:number):void
        {
            var c: com.message.C_BUY_FISH = new com.message.C_BUY_FISH();
            c.fishConfigId = configId;
			this.sendCmd(c, MessageID.C_BUY_FISH, true);
        }

        // 购买鱼儿
        private getBuyFishResponse(s: com.message.S_BUY_FISH):void
        {
            HeroModel.instance.fishPros = s.fishMsg as com.message.FishMsg[];
            this.dispatch(NotifyConst.S_BUY_FISH);
		}
		
		// 领取金币奖励
        public getMoneyCmd():void
        {
            var c: com.message.C_GET_MONEY_REWARD = new com.message.C_GET_MONEY_REWARD();
			this.sendCmd(c, MessageID.C_GET_MONEY_REWARD, true);
        }

        // 领取金币奖励
        private getMoneyResponse(s: com.message.S_GET_MONEY_REWARD):void
        {
            HeroModel.instance.totalMoney = Int64Util.getNumber(s.money);
            this.dispatch(NotifyConst.S_GET_MONEY_REWARD);
		}

		// 领取金币奖励
        public getMoneyInfoCmd():void
        {
            var c: com.message.C_GET_MONEY_INFO = new com.message.C_GET_MONEY_INFO();
			this.sendCmd(c, MessageID.C_GET_MONEY_INFO, true);
        }

        // 领取金币奖励
        private getMoneyInfoResponse(s: com.message.S_GET_MONEY_INFO):void
        {
			HeroModel.instance.totalMoney = Int64Util.getNumber(s.money);
			HeroModel.instance.totalUSDT = Int64Util.getNumber(s.money);
            this.dispatch(NotifyConst.S_GET_MONEY_INFO);
		}
		
	}
}