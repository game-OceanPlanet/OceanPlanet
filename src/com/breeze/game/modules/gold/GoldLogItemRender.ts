module qmr {
	export class GoldLogItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_time:eui.Label;
public txt_count:eui.Label;
public txt_type:eui.Label;
public txt_name:eui.Label;
		
		public constructor()
		{
			super();
			this.skinName = "MoneyLogItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.MoneyLogMsg = t.data;
            if(pro){
                let cfgId:number = Int64Util.getNumber(pro.fishConfigId);
                // let cfg:PetCfg = ConfigManager.getConf(ConfigEnum.PET, cfgId);
                let changeMoney:number = Int64Util.getNumber(pro.changeMoney);
                t.txt_count.text = changeMoney+HeroModel.KH;
                t.txt_type.text = "";
                t.txt_name.text = TradeModule.instance.getType(pro.type);
                t.txt_time.text = TimeUtil.getDateByTimerSecond(Int64Util.getNumber(pro.logTime));
            }
        }
	}
}
