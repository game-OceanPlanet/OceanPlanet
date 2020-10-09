module qmr
{
	export class ShopView extends BaseModule
	{
		public all_group:eui.Group;
public btnClose:eui.Image;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public txt_totalUSDT:eui.Label;
public txt_totalGold:eui.Label;
public title_shop:eui.Image;


		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "ShopSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = ShopItemRender;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected switchLange(){
			let t = this;
			super.switchLange();
			if(GlobalConfig.isCN){
                t.title_shop.source = "nameImg_json.title_shop";
            } else {
                t.title_shop.source = "nameImg_en_json.title_shop";
            }
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnClose, t.closeView, t);
			t.addClickEvent(t.btnReturn, t.closeView, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
		}

		private updateView():void
		{
            let t = this;
            let cfgs:PetCfg[] = ConfigManager.getBean(ConfigEnum.PET).values;
			t._arrCollection.replaceAll(cfgs);
			
			t.txt_totalGold.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalMoney) + HeroModel.KH;
			t.txt_totalUSDT.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalUSDT) + HeroModel.USDT;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}