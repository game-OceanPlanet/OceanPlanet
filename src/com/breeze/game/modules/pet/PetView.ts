module qmr
{
	export class PetView extends BaseModule
	{
		public all_group:eui.Group;
public btnClose:eui.Image;
public txt_total:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;




		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "PetViewSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = PetItemRender;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
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
			t.addClickEvent(t.btnClose, t.closeView, t);
			t.addClickEvent(t.btnReturn, t.closeView, t);
			
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_FINSH_INFO, t.updateView, t);
		}

		private updateView():void
		{
            let t = this;
			let pets:PetActorInfo[] = HeroModel.instance.getPets();
			pets.sort((a, b)=>{
				return b.level - a.level;
			})
            t._arrCollection.replaceAll(pets);
			
			t.txt_total.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalMoney) + HeroModel.KH;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}