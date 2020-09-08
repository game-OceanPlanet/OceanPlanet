module qmr
{
	export class ShopView extends BaseModule
	{
		public all_group:eui.Group;
        public bg:eui.Image;
        public btnClose:eui.Image;
        public itemGroup:eui.Group;
		public item_list:eui.List;
		public txt_total:eui.Label;


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
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
		}

		private updateView():void
		{
            let t = this;
            let cfgs:PetCfg[] = ConfigManager.getBean(ConfigEnum.PET).values;
			t._arrCollection.replaceAll(cfgs);
			
			t.txt_total.text = HeroModel.instance.totalUSDT+"";
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}