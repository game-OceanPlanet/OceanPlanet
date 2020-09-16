module qmr
{
	export class MineIdView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_name:eui.Label;
public txt_kda_total:eui.Label;
public text_input_price:eui.EditableText;
public btn_exchange_group0:eui.Group;
public txt_button_buy0:eui.Label;
public btn_exchange_group1:eui.Group;
public txt_button_buy1:eui.Label;
public btn_exchange_group2:eui.Group;
public txt_button_buy2:eui.Label;
public btnReturn:eui.Image;

		
		public constructor()
		{
			super();
			this.qmrSkinName = "MineIDSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();
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
            t.addClickEvent(t.btn_exchange_group1, t.onSetPwd, t);
            t.addClickEvent(t.btn_exchange_group2, t.onLogout, t);
        }
        
        private onSetPwd():void
        {
            TipManagerCommon.getInstance().createCommonTip("敬请期待");
        }

        private onLogout():void
        {
            TipManagerCommon.getInstance().createCommonTip("敬请期待");
        }

		private updateView():void
		{
            let t = this;
            let playerPro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
            t.txt_kda_total.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalKAD) + HeroModel.KAD;
            t.txt_name.text = "ID："+NumberUtil.getTelNumberShow(Int64Util.getNumber(playerPro.playerId));
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}