module qmr {
	export class InjectLogItem extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_addCount:eui.Label;
public txt_time:eui.Label;
public txt_count:eui.Label;



		
		public constructor()
		{
			super();
			this.skinName = "InjectLogItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.PersonInjectMsg = t.data;
            if(pro){
                t.txt_addCount.text = pro.cycleId+"";
                t.txt_count.text = pro.KADCount+HeroModel.USDT;
                t.txt_time.text = TimeUtil.getDateByTimerSecond(Int64Util.getNumber(pro.createTime));
            }
        }
	}
}
