module qmr {
	export class TeamRankItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_direct:eui.Label;
public txt_team:eui.Label;
public txt_count:eui.Label;
public txt_tel:eui.Label;

		
		public constructor()
		{
			super();
			this.skinName = "TeamItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.OceanActivityRankMsg = t.data;
            if(pro){
                t.txt_tel.text = pro.mobile;
                t.txt_direct.text = pro.directCount + "";
                t.txt_team.text = pro.teamCount + "";
                t.txt_count.text = pro.leftCount + "";
            }
        }
	}
}