module qmr
{
	export class WithdrawalView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_name0:eui.Label;
public txt_name1:eui.Label;
public text_input_pwd0:eui.EditableText;
public text_input_pwd1:eui.EditableText;
public txt_name:eui.Label;
public txt_kda_total:eui.Label;
public txt_name2:eui.Label;
public text_input_pwd:eui.EditableText;
public btn_logout:eui.Group;
public txt_detail:eui.Label;
public btnReturn:eui.Image;




    	public constructor()
		{
			super();
			this.qmrSkinName = "WithdrawalSkin";
			this.isNeedMask = true;

			this.helpId = HelpId.ID_4;
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
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_BONUS_INFO, t.updateView, t);
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