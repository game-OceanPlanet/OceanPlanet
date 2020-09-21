module qmr
{
	export class CertificationView extends BaseModule
	{
		public panelGroup:eui.Group;
public identifyedView:eui.Group;
public txt_name_show:eui.Label;
public txt_tel_show:eui.Label;
public txt_id_show:eui.Label;
public identifyView:eui.Group;
public text_name:eui.EditableText;
public text_id:eui.EditableText;
public text_tel:eui.EditableText;
public btn_Identify:eui.Group;
public txt_button_buy1:eui.Label;
public txt_detail:eui.Label;
public btnReturn:eui.Image;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "CertificationSkin";
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
            t.addClickEvent(t.btn_Identify, t.onIdentifyClick, t);
		}

		private updateView():void
		{
            let t = this;
            let playerPro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
            let isIdentify:boolean = playerPro.state == 1;//实名验证状态0未实名，1已经实名 
            t.identifyView.visible = !isIdentify;
            t.identifyedView.visible = isIdentify;

            // t.identifyView.visible = true;
            // t.identifyedView.visible = false;

            if(isIdentify){
                t.txt_name_show.text = NumberUtil.getPersonNameShow(playerPro.name);
                t.txt_id_show.text = NumberUtil.getIdentifyNumberShow(playerPro.idNum);
                t.txt_tel_show.text = NumberUtil.getTelNumberShow(Int64Util.getNumber(playerPro.playerId));
            } else {

            }
        }
        
        private onIdentifyClick():void
        {
            let t = this;
            let name:string = t.text_name.text;
            let id:string = t.text_id.text;
            let tel:string = t.text_tel.text;

            if(RegexpUtil.IsNull(name)){
                return;
            }
            if(!RegexpUtil.isPhoneNumber(tel)){
                TipManagerCommon.getInstance().createCommonTip("请输入正确的手机号");
                return;
            }
            if(!RegexpUtil.isIdentifyId(id)){
                TipManagerCommon.getInstance().createCommonTip("请输入正确的身份证");
                return;
            }

            DividendController.instance.requestIdVerifCMD(tel, name, id);
        }

		public dispose(): void
		{
			super.dispose();
		}
	}
}