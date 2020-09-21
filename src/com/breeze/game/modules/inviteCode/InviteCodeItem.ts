module qmr {
	export class InviteCodeItem extends  eui.ItemRenderer {
		public txt_time:eui.Label;
public txt_id:eui.Label;
public txt_team:eui.Label;

		
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
            let pro:com.message.DirectInfoMsg = t.data;
            if(pro){
				t.txt_id.text = pro.name;
				t.txt_team.text = pro.effectDirectNum + "人";
				t.txt_time.text = pro.allEffectNum+"人";
            }
        }
	}
}
