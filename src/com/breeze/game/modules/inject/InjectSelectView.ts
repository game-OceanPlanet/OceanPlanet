module qmr
{
	export class InjectSelectView extends UIComponent
	{
		public drowBtn:eui.Image;
        public donwBtn:eui.Image;
        public stepTxt:eui.Label;
        public dropListGroup:eui.Group;
		public rank_list:eui.List;
		public myStepImg:eui.Image;
		public selectBtn:eui.Image;



		private __selectIndex:number = 0;
		private __state:number = 0;

		public constructor()
		{
			super();
			this.skinName = "InjectListSkin";
        }
        
        /** 初始化组件  */
		protected initComponent(): void
		{
			super.initComponent();

			let t = this;
			t.rank_list.itemRenderer = InjectSelectItem;
			t.stepTxt.text = "巅峰赛区";
			t.donwBtn.visible = false;
            t.dropListGroup.visible = false;
		}

		protected initListener(): void
		{
			super.initListener();
			let t = this;
			// t.registerNotify(NotifyConst.S_GET_SHOW_INFO, t.onShowChange, t);
			// t.drowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClickDrop, t);
			// t.donwBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClicDown, t);
			t.addEvent(t.rank_list, eui.ItemTapEvent.ITEM_TAP, t.onClickItem, t);
			t.selectBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClicSelectBtn, t);

			if (t.stage) t.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouch, t);
		}

		/** 初始化数据 */
		protected initData(): void
		{
			super.initData();

			let t = this;
			// t.rank_list.dataProvider = new eui.ArrayCollection(CrossPkGameModel.instance.getStepNames());
		}
		
		public setSelectStep(step:number):void
		{
			let t = this;
			// let s:string = CrossPkGameModel.instance.getStepName(step);
			// t.stepTxt.text = s;
			// CrossPkGameModel.instance.currentSelectChampionType = step;

			// t.myStepImg.visible = step == CrossPkGameModel.instance.selfChampionType;

			// t.rank_list.dataProvider = new eui.ArrayCollection(CrossPkGameModel.instance.getStepNames());
		}

		private updateStep(step:number):void
		{
			this.setSelectStep(step);
		}
        
        private onClickItem(e: eui.ItemTapEvent): void
		{
			let t = this;
			let info = e.item;
			// var item:CrosspkStepItem = e.itemRenderer as CrosspkStepItem;
            // if(!info || !item){
            //     return;
			// }

			// t.__selectIndex = t.rank_list.selectedIndex;
			// let md:CrossPkGameModel = CrossPkGameModel.instance;
			// let step = md.getStepByIndex(t.__selectIndex);
			// let maxStep:number = md.maxStep;
			// if(md.championList && md.championList.length > 0){
			// 	if(md.championList.indexOf(step) == -1){
			// 		TipManagerCommon.getInstance().createCommonColorTip("本赛季该赛区未开启");
			// 		return;
			// 	}
			// }

			// t.stepTxt.text = info;
            // t.dropListGroup.visible = false;
            // t.drowBtn.visible = true;
            // t.donwBtn.visible = false;

			// md.currentSelectChampionType = step;
			// t.setSelectStep(step);
			// t.dispatch(NotifyConst.CROSSPK_GAME_STEP_SELECTED);
		}

		// private onClickDrop():void
		// {
		// 	let t = this;
		// 	t.dropListGroup.visible = true;
		// 	t.drowBtn.visible = false;
		// 	t.donwBtn.visible = true;
		// }

		// private onClicDown():void
		// {
		// 	let t = this;
		// 	t.dropListGroup.visible = false;
		// 	t.drowBtn.visible = true;
		// 	t.donwBtn.visible = false;
		// }

		private onClicSelectBtn(e:egret.Event):void
		{
			let t = this;
			e.preventDefault();
			t.__state = t.__state == 0 ? 1 : 0;
			t.updatePanel();
		}

		private onTouch(e: egret.Event): void
		{
			let t = this;
			// if(t.__state == 0){
			// 	return;
			// }

			// var target = e.target;

			// if(target == t.selectBtn){
			// 	return;
			// }

			// if(target == t.dropListGroup){
			// 	return;
			// }

			// if(target == t.rank_list){
			// 	return;
			// }

			// if (target instanceof CrosspkStepItem)
			// {
			// 	return;
			// }
			// var p = target.parent;
			// if (p && p instanceof CrosspkStepItem)
			// {
			// 	return;
			// }
			// t.__state = 0;
			// t.updatePanel();
		}

		private updatePanel():void
		{
			let t = this;
			t.dropListGroup.visible = t.__state == 1;
			t.drowBtn.visible = t.__state == 0;
			t.donwBtn.visible = t.__state == 1;
		}

		public dispose()
		{
			let t = this;
			super.dispose();
			if (t.stage) t.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouch, t);
		}

	}
}