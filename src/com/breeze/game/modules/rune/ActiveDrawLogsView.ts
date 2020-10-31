module qmr
{
	export class ActiveDrawLogsView extends BaseModule
	{
		public panelBg:qmr.PanelPopBgUI;
public txt_title:eui.Label;
public content:eui.Group;
public rankGroup:eui.Group;
public rank_list:eui.List;
public btnReturn:eui.Image;





private __pageIndex:number = 0;
private _arrCollection: eui.ArrayCollection;
private _isGetRank:boolean;


		public constructor()
		{
			super();
			this.qmrSkinName = "ActiveDrawLogsSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

			t.rank_list.itemRenderer = ActiveDrawLogsItem;
            t._arrCollection = new eui.ArrayCollection();
			t.rank_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			t._isGetRank = false;
			ActiveShopController.instance.requestOcpDrawLogs();
		}
		
		protected initListener(): void
		{
			super.initListener();
			let t = this;

			t.registerNotify(NotifyConst.S_GET_OCEAN_ACTIVITY_DRAW_LOG, t.updateView, t);
		}

		private updateView():void
		{
			let t = this;
			let ranks:com.message.OceanActivityDrawLogMsg[] = ActiveShopModel.instance.drawLogPros;
			// if(logs){
			// 	logs.sort((a, b)=>{
			// 		return Int64Util.getNumber(b.logTime) - Int64Util.getNumber(a.logTime);
			// 	});
			// }
			t._arrCollection.source = ranks;
		}
		
		

		public dispose(): void
		{
			super.dispose();
		}
	}
}