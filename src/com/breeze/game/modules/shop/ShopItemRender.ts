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


		
		public constructor()
		{
			super();
			this.skinName = "ShopItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
            // t.btn_buy_group.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onBuyClick, t);
            DisplayUtils.addClick(t.btn_buy_group, t.onBuyClick, t);
        }

        private onBuyClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能开发中...");
        }
        
		public dataChanged(): void {
			let t = this;
            let index:number = t.data;
            if(index > 0){
                var itemRes:string = ResPathUtilAft.getHeadUrl(index+"");
                t.img_head.source = itemRes;
            }
		}
	}
}