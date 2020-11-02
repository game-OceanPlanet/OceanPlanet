module qmr
{
	export class TeamRankView extends BaseModule
	{
		public panelBg:qmr.PanelPopBgUI;
public txt_title:eui.Label;
public content:eui.Group;
public rankGroup:eui.Group;
public rank_list:eui.List;
public tabBar:eui.TabBar;
public btn_return:eui.Image;
public btn_help:eui.Image;


private __pageIndex:number = 0;
private _arrCollection: eui.ArrayCollection;
private _isGetRank:boolean;


		public constructor()
		{
			super();
			this.qmrSkinName = "TeamRankSkin";
			this.isNeedMask = true;
			this.helpId = HelpIdEnum.TIP_15;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();
			t.tabBar.itemRenderer = TabBarPageRender;

			t.rank_list.itemRenderer = TeamRankItemRender;
            t._arrCollection = new eui.ArrayCollection();
			t.rank_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			t._isGetRank = false;
			ActiveShopController.instance.requestOcpRankInfo(1);
		}
		
		protected initListener(): void
		{
			super.initListener();
			let t = this;
			t.addEvent(t.tabBar, egret.Event.CHANGING, t.onTabarChanage, t);

			t.registerNotify(NotifyConst.S_GET_OCEAN_ACTIVITY_RANK, t.updateView, t);
		}

		protected onTabarChanage(e: egret.Event): void {
            let t = this;
			t.__pageIndex = t.tabBar.selectedIndex;
			if(!t._isGetRank){
				t._isGetRank = true;
				ActiveShopController.instance.requestOcpRankInfo(2);
			}
			t.updateView();
		}

		private updateView():void
		{
			let t = this;
			let ranks:com.message.OceanActivityRankMsg[];
			if(t.__pageIndex == 0){
				ranks = ActiveShopModel.instance.directRankPros;
			} else {
				ranks = ActiveShopModel.instance.teamRankPros;
			} 

			let pros:com.message.OceanActivityRankMsg[] = [];
			if(ranks && ranks.length > 0){
				let len:number = ranks.length;
				for(var i:number = 0; i < len; i ++){
					if(ranks[i].directCount || ranks[i].teamCount > 0){
						pros.push(ranks[i]);
					}
				}
			}

			// if(logs){
			// 	logs.sort((a, b)=>{
			// 		return Int64Util.getNumber(b.logTime) - Int64Util.getNumber(a.logTime);
			// 	});
			// }
			t._arrCollection.source = pros;
		}
		
		

		public dispose(): void
		{
			super.dispose();
		}
	}
}