module qmr
{
	export class RechargeView extends BaseModule
	{
		public panelGroup:eui.Group;
public but_changePwd0:eui.Group;
public img_code:eui.Image;
public but_changePwd:eui.Group;
public btn_logout:eui.Group;
public txt_md5:eui.Label;
public txt_detail:eui.Label;
public btnReturn:eui.Image;
public codeGroup:eui.Group;



    	public constructor()
		{
			super();
			this.qmrSkinName = "RechargeSkin";
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
			while(t.codeGroup.numChildren > 0){
				t.codeGroup.removeChildAt(0);
			}
			let sp:egret.Sprite = GameUtil.createCode("0x4487e2ac1b5e2acc92cc8251a31b9343849dbe08");
			t.codeGroup.addChild(sp);
			sp.x = (256 - sp.width) / 2;
			sp.x = (256 - sp.height) / 2;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}