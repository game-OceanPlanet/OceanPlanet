module qmr
{
	export class ActiveKeyView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_unused:eui.Label;
public btn_use:eui.Group;
public btn_give:eui.Group;
public text_input_count:eui.EditableText;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;





		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "ActiveKeySkin";
			this.isNeedMask = true;

			this.helpId = HelpId.ID_4;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = ActiveKeyItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
            t.updateView();
            
			TeamController.instance.requestMyKeyCMD();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
            t.addClickEvent(t.btnReturn, t.closeView, t);
            t.addClickEvent(t.btn_use, t.onUse, t);
            t.addClickEvent(t.btn_give, t.onGive, t);
            
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_KEY_LIST, t.updateView, t);
            t.registerNotify(NotifyConst.S_USE_KEY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GIVE_KEY, t.updateView, t);
        }
        
        private onGive():void
        {
            let tel:string = this.text_input_count.text;
            if(RegexpUtil.IsNull(tel)){
                return;
            }
            if(!RegexpUtil.isPhoneNumber(tel)){
                TipManagerCommon.getInstance().createCommonColorTip("请输入正确的手机号码");
                return;
            }
            TeamController.instance.requestGiveCMD(tel);
        }

        private onUse():void
        {
            let state:number = HeroModel.instance.IdentityPro.state;//激活+实名状态,0未实名，1已激活，2已实名 
            if(state == 1){
                TipManagerCommon.getInstance().createCommonColorTip("账号已激活，不能再次使用激活码");
                return;
            }
            if(HeroModel.instance.keyCount <= 0){
                TipManagerCommon.getInstance().createCommonColorTip("您没有可用激活码，无法使用");
                return;
            }
            TeamController.instance.requestUseKeyCMD();
        }

		private updateView():void
		{
			let t = this;
			
            t.txt_unused.text = HeroModel.instance.keyCount+"";
			let logs = TeamModdel.instance.keyLogs;
			
			t._arrCollection.replaceAll(logs);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}