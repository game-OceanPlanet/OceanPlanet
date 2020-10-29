module qmr {
	export class ActiveShopItem extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_name:eui.Label;
public CN_115:eui.Label;
public CN_116:eui.Label;
public CN_117:eui.Label;
public txt_1:eui.Label;
public txt_2:eui.Label;
public txt_3:eui.Label;
public btn_buy_group:eui.Group;
public btn_buy:eui.Image;
public CN_256:eui.Label;
public img_head:eui.Image;

	
		public constructor()
		{
			super();
			this.skinName = "ActiveShopItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
            DisplayUtils.addClick(t.btn_buy_group, t.onBuyClick, t);
            t.switchLanguage();
        }

        private switchLanguage():void
        {
            let t = this;
            t.CN_115.text = LabelUtil.getCNMessage("CN_115");
            t.CN_116.text = LabelUtil.getCNMessage("CN_116");
            t.CN_117.text = LabelUtil.getCNMessage("CN_117");
        }

        private onBuyClick():void
        {
            let cfg:PetCfg = this.data;
            if(!cfg){
                return;
            }

            let pro:com.message.MyDeapActivityMsg = ActiveShopModel.instance.myActivePro;
            let sysPro:com.message.DeapActivityMsg = ActiveShopModel.instance.activePro;
            if(!sysPro){
                TipManagerCommon.getInstance().createCommonTip("对不起活动未开启");
                return;
            }

            if(!pro){
                TipManagerCommon.getInstance().createCommonTip("对不起活动未开启");
                return;
            }

            if(sysPro && sysPro.leftCount <= 0){
                TipManagerCommon.getInstance().createCommonTip("鱼已经售完");
                return;
            }

            if(pro && pro.leftCount <= 0){
                TipManagerCommon.getInstance().createCommonTip("对不起购买次数不足");
                return;
            }

            if(cfg.UActivePrice > HeroModel.instance.totalMoney){
                TipManagerCommon.getInstance().showLanTip("CN_131");
                return;
            }

            ActiveShopController.instance.requestBuyFish(cfg.id);
        }

		public dataChanged(): void {
			let t = this;
            let cfg:PetCfg = t.data;
            t.btn_buy_group.visible = true;
            t.btn_buy_group.y = 81;
            if(cfg){
                t.txt_name.text =  LabelUtil.getCNMessage(cfg.name) + "(Lv." + cfg.level + ")";
                t.txt_1.text = cfg.produce + "";
                t.txt_2.text = cfg.limitTime + "";
                t.txt_3.text = cfg.monthly + "%";
                t.CN_256.text =  NumberUtil.getFloat4Number2String(cfg.UActivePrice) + HeroModel.USDT;
                var itemRes:string = ResPathUtilAft.getHeadUrl(cfg.id+"");
                t.img_head.source = itemRes;

            }
		}
	}
}