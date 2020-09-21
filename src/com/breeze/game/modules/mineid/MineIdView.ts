module qmr
{
	export class MineIdView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_name:eui.Label;
public txt_kda_total:eui.Label;
public text_input_pwd:eui.EditableText;
public but_changePwd:eui.Group;
public btn_logout:eui.Group;
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
            t.addClickEvent(t.but_changePwd, t.onSetPwd, t);
            t.addClickEvent(t.btn_logout, t.onLogout, t);
        }
        
        private onSetPwd():void
        {
			let t = this;
			let pwd:string = t.text_input_pwd.text.trim();
			if(RegexpUtil.IsNull(pwd)){
				return;
			}

			if(pwd.length < 6){
				TipManagerCommon.getInstance().createCommonColorTip("请输入至少6位数的密码");
				return;
			}

			if(pwd.length > 12){
				TipManagerCommon.getInstance().createCommonColorTip("输入的密码长度不能多于12位");
				return;
			}
			let tel:string = HeroModel.instance.IdentityPro.mobile;
			let vcode:string = "8888";

			TeamController.instance.requestChangePwdCMD(tel, pwd, vcode);
        }

        private onLogout():void
        {
			PromptController.instance.showPrompt("                       确定退出游戏？", this.backGame, this);
		}
		
		// 尝试重新加载游戏，不能加载退出游戏 
		private backGame()
		{
			PlatformManager.instance.platform.reloadGame();
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