module qmr {
	export class ActiveDrawLogsItem extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_team:eui.Label;
public txt_time:eui.Label;
public txt_tel:eui.Label;


		
		public constructor()
		{
			super();
			this.skinName = "ActiveDrawLogsItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.OceanActivityDrawLogMsg = t.data;
            if(pro){
                t.txt_tel.text = pro.mobile;
                t.txt_team.text = ActiveShopModel.instance.getRewardDes(Int64Util.getNumber(pro.rewardId));
                t.txt_time.text = TimeUtil.getDateByTimer(Int64Util.getNumber(pro.logTime) * 1000);
            }
        }
	}
}