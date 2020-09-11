module qmr {
	export class TradeItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_id:eui.Label;
public txt_price:eui.Label;
public txt_count:eui.Label;
public txt_time:eui.Label;
public btn_sell_group:eui.Group;
public btn_buy:eui.Image;
public txt_price_gold:eui.Label;


		
		public constructor()
		{
			super();
			this.skinName = "BuyGoodItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
            DisplayUtils.addClick(t.btn_sell_group, t.onSellClick, t);
        }

        private onSellClick():void
        {
            let cfg:PetCfg = this.data;
            if(!cfg){
                return;
            }
            PetController.instance.getBuyFish(cfg.id);
        }

		public dataChanged(): void {
			let t = this;
            let cfg:PetCfg = t.data;
            if(cfg){
                
            }
		}
	}
}