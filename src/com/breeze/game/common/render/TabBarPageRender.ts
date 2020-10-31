module qmr {
	/** 
	 * 公用tab页签Tabbar渲染项目 
	 * 第一个和最后一个圆角
	 * */
	export class TabBarPageRender extends eui.ItemRenderer{
		private _tabSelected:boolean = false;
		public constructor() {
			super();
		}

		protected dataChanged(): void{
			super.dataChanged();
			if (this.itemIndex == 0){
				this.currentState = this.selected ? "leftUpSelected" : "leftUp";
			}
			else if (this.itemIndex == (this.parent as eui.ListBase).dataProvider.length - 1){
				this.currentState = this.selected ? "rightUpSelected" : "rightUp";
			}
		}

		public get selected():boolean{
			return this._tabSelected;
		}
		
		public set selected(value:boolean){
			this._tabSelected = value;
			if (this.itemIndex == 0){
				this.currentState = value ? "leftUpSelected" : "leftUp";
			}
			else if (this.itemIndex == (this.parent as eui.ListBase).dataProvider.length - 1){
				this.currentState = value ? "rightUpSelected" : "rightUp";
			}
			else{
				this.currentState = value ? "upAndSelected" : "up";
			}
		}
	}
}