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

public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;
public CN_360:eui.Label;
public CN_358:eui.Label;
public CN_361:eui.Label;
public CN_362:eui.Label;
public CN_363:eui.Label;
public CN_364:eui.Label;
public CN_355:eui.Label;
public CN_353:eui.Label;
public CN_356:eui.Label;
public CN_357:eui.Label;
public CN_354:eui.Label;
public CN_359:eui.Label;



		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "InviteCodeSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_6;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = InviteCodeItem;
            t._arrCollection = new eui.ArrayCollection();
			t.item_list.dataProvider = t._arrCollection;
			
			t.showTxtNames = ["CN_360","CN_358","CN_361","CN_362","CN_363","CN_364","CN_355","CN_353","CN_356","CN_357","CN_354","CN_359"];
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			TeamController.instance.requestTeamInfoCMD();
			TeamController.instance.requestMyTeamListCMD();
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
				let address:string = "http://www.siychina.com/opt/game.html?code="+code+"&register=1";
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

			let teamPro:com.message.MyTeamMsg = TeamModdel.instance.myTeam;
			if(teamPro){
				t.txt_guimo.text = teamPro.count + "人";
				t.txt_teamguimo.text = teamPro.allCount + "人";

				if(teamPro.count > 0){
					let dirCfg:DirectRateCfg = TeamModdel.instance.getdirectRateCfgsIdByCount(teamPro.count);
					if(dirCfg){
						t.txt_ticheng.text = dirCfg.precent + "%";
					}
				}
				
				let teamCfg:TeamRateCfg = TeamModdel.instance.getteamRateCfgsIdByCount(teamPro.count, teamPro.allCount);
				if(teamCfg){
					t.txt_teamticheng.text = teamCfg.precent + "%";
				}

				let tradeCfg:TradeCostCfg = TeamModdel.instance.getTradeConstIdByCount(teamPro.count);
				if(tradeCfg){
					t.txt_shouxufei.text = Number(tradeCfg.precent) * 100 + "%";
				}

				let petCfg:PetCfg = TeamModdel.instance.getteamStarCfgsIdByCount(teamPro.count, teamPro.allCount);
				LabelUtil.setLabelText(t.txt_tips, ClientCnEnum.CN_105, petCfg.directPerson, petCfg.teamPerson);
			}

			let logs:com.message.DirectInfoMsg[] = TeamModdel.instance.teamers;
			t._arrCollection.replaceAll(logs);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}