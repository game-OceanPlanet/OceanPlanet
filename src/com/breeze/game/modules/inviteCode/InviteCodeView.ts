module qmr
{
	export class InviteCodeView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_guimo:eui.Label;
public txt_teamguimo:eui.Label;
public txt_ticheng:eui.Label;
public txt_shouxufei:eui.Label;
public txt_teamticheng:eui.Label;
public txt_tips:eui.Label;
public txt_code:eui.Label;
public btn_copy_code:eui.Group;
public btn_copy_address:eui.Group;
public txt_title:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;



		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "InviteCodeSkin";
			this.isNeedMask = true;

			this.helpId = HelpId.ID_1;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = InviteCodeItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			TeamController.instance.requestTeamInfoCMD();
			TeamController.instance.requestMyTeamListCMD()
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.btn_copy_code, t.copyCode, t);
			t.addClickEvent(t.btn_copy_address, t.copyAddress, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			
			t.registerNotify(NotifyConst.S_GET_MY_TEAM_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MY_TEAM_LIST, t.updateView, t);
		}

		private copyCode():void
		{
			let code:string = this.txt_code.text.trim();
			if(code){
				StringUtils.copyClipBoard(code);
			}
		}

		private copyAddress():void
		{
			let code:string = this.txt_code.text.trim();
			if(code){
				let address:string = "http://129.226.177.253/game.html?code="+code+"&register=1";
				StringUtils.copyClipBoard(address);
			}
		}

		private updateView():void
		{
            let t = this;
			let pro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
			if(pro){
				t.txt_code.text = pro.inviteCode;
			}

			let info:com.message.MyTeamMsg = TeamModdel.instance.myTeam;
			if(info){
				t.txt_guimo.text = info.count + "";
				t.txt_teamguimo.text = info.allCount + "";

				let id:number = TeamModdel.instance.getTradeConstIdByCount(info.count);
				let costCfg:TradeCostCfg = ConfigManager.getConf(ConfigEnum.TRADECOST, id);
				t.txt_shouxufei.text = parseInt(costCfg.precent) * 100 + "%";

				id = TeamModdel.instance.getteamRateCfgsIdByCount(info.count, info.allCount);
				let rateCfg:TeamRateCfg = ConfigManager.getConf(ConfigEnum.TEAMRATE, id);
				t.txt_teamticheng.text = rateCfg.precent + "%";

				id = TeamModdel.instance.getdirectRateCfgsIdByCount(info.count);
				let directCfg:DirectRateCfg = ConfigManager.getConf(ConfigEnum.DIRECTRATE, id);
				t.txt_ticheng.text = directCfg.precent + "%";
			}

			let teams:com.message.DirectInfoMsg[] = TeamModdel.instance.teamers;
			t._arrCollection.replaceAll(teams);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}