module qmr {
	export class ActiveKeyItem extends  eui.ItemRenderer {
		public txt_name:eui.Label;
public txt_1:eui.Label;
public txt_2:eui.Label;
public txt_3:eui.Label;
public txt_4:eui.Label;
public img_head:eui.Image;
public txt_5:eui.Label;





		
		public constructor()
		{
			super();
			this.skinName = "ActiveKeyItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
            let t = this;
        }

		public dataChanged(): void {
            let t = this;
            let pro:com.message.KeyLogMsg = t.data;
            if(pro){
                let dt = new Date();
                dt.setTime(Int64Util.getNumber(pro.logTime));
                t.txt_2.text = TimeUtil.formatColumnDate(dt);
                
                t.txt_3.text = Int64Util.getNumber(pro.playerId)+"";
                t.txt_4.text = Int64Util.getNumber(pro.bePlayerId)+"";
                t.txt_5.text = pro.info;
                t.txt_1.text = t.getState(pro.type);
            }
        }
        
        private getState(s):string
        {
            //状态，0生产中，1停产中,2已过期
            let msg:string;
            switch(s){
                case 301:
                    msg = "使用"
                    break;
                case 302:
                    msg = "赠送"
                    break;
            }
            return msg;
        }

	}
}