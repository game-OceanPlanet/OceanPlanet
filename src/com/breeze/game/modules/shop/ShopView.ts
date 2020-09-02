module qmr
{
	export class ShopView extends BaseModule
	{
		public all_group:eui.Group;
        public bg:eui.Image;
        public btnClose:eui.Image;
        public itemGroup:eui.Group;
        public item_list:eui.List;

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
		}

		private updateView():void
		{
            let t = this;
            let items = [1,2,3,4,5];
            t._arrCollection.replaceAll(items);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}