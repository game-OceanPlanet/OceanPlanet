module qmr {
	export class RuneLotteryAwardItem extends UIComponent{
		public txt:eui.Label;

		public constructor() {
			super();
			this.skinName = "RuneLotteryItemSkin";
		}

		protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
			
			// t.txt.text = t.data+"";
		}
		
		public setInfo(info:string):void
		{
			this.txt.text = info;
		}

	}
}