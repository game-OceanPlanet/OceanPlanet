module qmr
{
	export class ActiveShopController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: ActiveShopController;
		public static get instance(): ActiveShopController
		{
			return this._instance || (this._instance = new ActiveShopController());
		}

		protected initListeners(): void
		{
            this.addSocketListener(MessageID.S_GET_DEAP_ACTIVITY_INFO, this.getActiveResponse, this, false);
            this.addSocketListener(MessageID.S_GET_MY_DEAP_ACTIVITY_INFO, this.getMyActiveResponse, this, false);
            this.addSocketListener(MessageID.S_BUY_DEAP_ACTIVITY_FISH, this.getBuyFishResponse, this, false);
            this.addSocketListener(MessageID.S_GET_OCEAN_ACTIVITY_INFO, this.getOcpActiveResponse, this, false);
            this.addSocketListener(MessageID.S_GET_MY_OCEAN_ACTIVITY_INFO, this.getMyOcpActiveResponse, this, false);
            this.addSocketListener(MessageID.S_OCEAN_ACTIVITY_DRAW, this.getDrawResponse, this, false);
		}

        //获取深海活动信息
		public requestActiveInfo(): void
		{
			var c: com.message.C_GET_DEAP_ACTIVITY_INFO = new com.message.C_GET_DEAP_ACTIVITY_INFO();
			this.sendCmd(c, MessageID.C_GET_DEAP_ACTIVITY_INFO, true);
        }
        
        // 获取深海活动信息
        private getActiveResponse(s: com.message.S_GET_DEAP_ACTIVITY_INFO):void
        {
            ActiveShopModel.instance.activePro = s.deapActivityMsg as com.message.DeapActivityMsg;
            this.dispatch(NotifyConst.S_GET_DEAP_ACTIVITY_INFO);
        }
        
         //获取我的深海活动信息(活动未开不要请求)
		public requestMyActiveInfo(): void
		{
			var c: com.message.C_GET_MY_DEAP_ACTIVITY_INFO = new com.message.C_GET_MY_DEAP_ACTIVITY_INFO();
			this.sendCmd(c, MessageID.C_GET_MY_DEAP_ACTIVITY_INFO, true);
        }
        
        // 获取我的深海活动信息
        private getMyActiveResponse(s: com.message.S_GET_MY_DEAP_ACTIVITY_INFO):void
        {
            ActiveShopModel.instance.myActivePro = s.myDeapActivityMsg as com.message.MyDeapActivityMsg;
            this.dispatch(NotifyConst.S_GET_MY_DEAP_ACTIVITY_INFO);
        }

		//买深海活动鱼
		public requestBuyFish(id:number): void
		{
            var c: com.message.C_BUY_DEAP_ACTIVITY_FISH = new com.message.C_BUY_DEAP_ACTIVITY_FISH();
            c.fishId = id;
			this.sendCmd(c, MessageID.C_BUY_DEAP_ACTIVITY_FISH, true);
        }
        
        // 买深海活动鱼
        private getBuyFishResponse(s: com.message.S_BUY_DEAP_ACTIVITY_FISH):void
        {
            let pro:com.message.FishMsg = s.fishMsg as com.message.FishMsg;
            let cfg:PetCfg = ConfigManager.getConf(ConfigEnum.PET, s.fishMsg.fishId);
            let name:string = LabelUtil.getCNMessage(cfg.name);
            TipManagerCommon.getInstance().showLanTip("CN_210",name);
            
            ActiveShopModel.instance.myActivePro = s.myDeapActivityMsg as com.message.MyDeapActivityMsg;
            this.dispatch(NotifyConst.S_BUY_DEAP_ACTIVITY_FISH);

            this.requestActiveInfo();
        }


        //获取海洋星球活动信息
		public requestOcpActiveInfo(): void
		{
			var c: com.message.C_GET_OCEAN_ACTIVITY_INFO = new com.message.C_GET_OCEAN_ACTIVITY_INFO();
			this.sendCmd(c, MessageID.C_GET_OCEAN_ACTIVITY_INFO, true);
        }
        
        // 获取海洋星球活动信息
        private getOcpActiveResponse(s: com.message.S_GET_OCEAN_ACTIVITY_INFO):void
        {
            ActiveShopModel.instance.ocpActivePro = s.ocenActivityMsg as com.message.OcenActivityMsg;
            this.dispatch(NotifyConst.S_GET_OCEAN_ACTIVITY_INFO);
        }

        //获取我的海洋星球活动信息(活动未开不要请求)
		public requestMyOcpActiveInfo(): void
		{
			var c: com.message.C_GET_MY_OCEAN_ACTIVITY_INFO = new com.message.C_GET_MY_OCEAN_ACTIVITY_INFO();
			this.sendCmd(c, MessageID.C_GET_MY_OCEAN_ACTIVITY_INFO, true);
        }
        
        // 获取我的海洋星球活动信息
        private getMyOcpActiveResponse(s: com.message.S_GET_MY_OCEAN_ACTIVITY_INFO):void
        {
            ActiveShopModel.instance.myOcpActivePro = s.myOceanActivityMsg as com.message.MyOceanActivityMsg;
            this.dispatch(NotifyConst.S_GET_MY_OCEAN_ACTIVITY_INFO);
        }

        //海洋星球活动-抽奖
		public requestDraw(): void
		{
			var c: com.message.C_OCEAN_ACTIVITY_DRAW = new com.message.C_OCEAN_ACTIVITY_DRAW();
			this.sendCmd(c, MessageID.C_OCEAN_ACTIVITY_DRAW, true);
        }
        
        // 海洋星球活动-抽奖
        private getDrawResponse(s: com.message.S_OCEAN_ACTIVITY_DRAW):void
        {
            ActiveShopModel.instance.drawId = Int64Util.getNumber(s.rewardId);
            ActiveShopModel.instance.myOcpActivePro = s.myOceanActivityMsg as com.message.MyOceanActivityMsg;
            this.dispatch(NotifyConst.S_OCEAN_ACTIVITY_DRAW);
        }
    }
}