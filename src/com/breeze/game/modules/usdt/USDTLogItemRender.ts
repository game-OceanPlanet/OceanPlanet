module qmr {
	export class USDTLogItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_time:eui.Label;
public txt_count:eui.Label;
public txt_type:eui.Label;
public txt_name:eui.Label;
		
		public constructor()
		{
			super();
			this.skinName = "USDTLogItemSkin";
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
                let cfg:PetCfg = ConfigManager.getConf(ConfigEnum.PET, cfgId);
                let changeMoney:number = Int64Util.getNumber(pro.changeMoney);
                t.txt_count.text = changeMoney+HeroModel.KH;
                t.txt_type.text = t.getType(pro.type);
                t.txt_name.text = cfg.name;
                t.txt_time.text = TimeUtil.getDateByTimerSecond(Int64Util.getNumber(pro.logTime));
            }
        }
        
        private getType(s):string
        {
            //类型,1=领取鱼日产金币,2=金币买鱼,101=U买鱼
            let msg:string;
            switch(s){
                case 1:
                    msg = "领取"
                    break;
                case 2:
                    msg = "购买"
                    break;
                case 101:
                    msg = "购买"
                    break;
            }
            return msg;
        }
	}
}