module qmr {
	export class InviteCodeItem extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_tel:eui.Label;
public txt_direct_count:eui.Label;
public txt_direct_money:eui.Label;
public txt_team_count:eui.Label;
public txt_d_count2:eui.Label;
public txt_t_count2:eui.Label;


		
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
				t.txt_tel.textFlow =  HtmlUtil.getHtmlString(pro.name + t.getState(pro.state));
				t.txt_direct_count.text = pro.effectDirectNum+" 人";
				t.txt_direct_money.text =  NumberUtil.getFloat4Number2String(pro.money) + HeroModel.KH;
				t.txt_team_count.text = pro.allEffectNum+" 人";
				t.txt_d_count2.text = pro.directActivity+"";
				t.txt_t_count2.text = pro.teamActivity+"";
            }
		}
		
		private getState(state:number):string
		{
			let s:string = "";
			switch(state){
				case 0:
					s = "<font color ='0xdd1900'>(未激活)</font>";
					break;
				case 1:
					if(PlatformConfig.GameId == 1){
						s = "<font color ='0x09a608'>(已激活)</font>"// + "<font color ='0x803F07'>(海洋星球)</font>";
					} else  if(PlatformConfig.GameId == 2){
						s = "<font color ='0xdd1900'>(未激活)</font>";// + "<font color ='0x803F07'>(海洋星球)</font>";
					}
					break;
				case 2:
					if(PlatformConfig.GameId == 1){
						s = "<font color ='0xdd1900'>(未激活)</font>"; // + "<font color ='0x803F07'>(海洋部落)</font>";
					} else  if(PlatformConfig.GameId == 2){
						s = "<font color ='0x09a608'>(已激活)</font>";// + "<font color ='0x803F07'>(海洋部落)</font>";
					}
					break;
				case 3:
					s = "<font color ='0x09a608'>(已激活)</font>"
					break;
			}

			return s;
		}
	}
}
