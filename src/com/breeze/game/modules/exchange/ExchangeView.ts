module qmr
{
	export class ExchangeView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_kda_total:eui.Label;
public txt_exchanged_total:eui.Label;
public txt_rate:eui.Label;
public txt_kh_totalSelf:eui.Label;
public txt_kadTotalSelf:eui.Label;
public txt_exchangeDes:eui.Label;
public text_input_price:eui.EditableText;
public btn_exchange_group:eui.Group;
public txt_button_buy:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;


		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "ExchangeSkin";
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
			t.addClickEvent(t.btnReturn, t.closeView, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
		}

		private updateView():void
		{
            let t = this;

		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}