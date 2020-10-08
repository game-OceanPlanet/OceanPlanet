module qmr {
	export class InjectSelectItem extends eui.ItemRenderer {
		public txt_cycle:eui.Label;

		
		public constructor() {
			super();
			this.skinName = "InjectListItemSkin";
		}

		public dataChanged(): void {
			let t = this;
			let cfg:InjectCycleCfg = t.data;
			if(cfg){
				let des:string = ConfigManagerAft.getCNValue(cfg.des);
				LabelUtil.setLabelText(t.txt_cycle, "CN_428", des, cfg.weights);
			}
		}
	}
}