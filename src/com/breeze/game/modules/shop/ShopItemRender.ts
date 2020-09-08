module qmr {
	export class ShopItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_name:eui.Label;
public txt_1:eui.Label;
public txt_2:eui.Label;
public txt_3:eui.Label;
public btn_buy_group:eui.Group;
public btn_buy:eui.Image;
public img_head:eui.Image;
public txt_price:eui.Label;


		
		public constructor()
		{
			super();
			this.skinName = "ShopItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
            DisplayUtils.addClick(t.btn_buy_group, t.onBuyClick, t);
        }

        private onBuyClick():void
        {
            let cfg:PetCfg = this.data;
            if(!cfg){
                return;
            }
            HeroController.instance.getBuyFish(cfg.id);
        }
        
		public dataChanged(): void {
			let t = this;
            let cfg:PetCfg = t.data;
            if(cfg){
                t.txt_name.text = cfg.name + "(Lv." + cfg.level + ")";
                t.txt_1.text = cfg.produce + "";
                t.txt_2.text = cfg.limitTime + "";
                t.txt_3.text = cfg.monthly + "%";
                t.txt_price.text = cfg.price + "JT";
                var itemRes:string = ResPathUtilAft.getHeadUrl(cfg.resId+"");
                t.img_head.source = itemRes;
            }
		}
	}
}