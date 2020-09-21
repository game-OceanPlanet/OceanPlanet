module qmr {
	export class InviteCodeItem extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_time:eui.Label;
public txt_count:eui.Label;
public txt_name:eui.Label;
		
		public constructor()
		{
			super();
			this.skinName = "InviteCodeItemSkin";
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
                
            }
        }
	}
}
