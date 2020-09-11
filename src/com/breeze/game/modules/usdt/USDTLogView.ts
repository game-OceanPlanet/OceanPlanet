module qmr
{
	export class USDTLogView extends BaseModule
	{
		public all_group:eui.Group;
public btnClose:eui.Image;
public txt_total:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;


		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "USDTLogVSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = USDTLogItemRender;
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
			t.addClickEvent(t.btnReturn, t.closeView, t);
			
			t.registerNotify(NotifyConst.S_GET_DIAMOND_LOG_LIST, t.updateView, t);
		}

		private updateView():void
		{
            let t = this;
            let logs:com.message.MoneyLogMsg[] = HeroModel.instance.usdtLogs;
			t._arrCollection.replaceAll(logs);
			
			t.txt_total.text = Number(HeroModel.instance.totalMoney.toFixed(4))+HeroModel.KH;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}