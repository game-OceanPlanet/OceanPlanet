module qmr
{
    export class MainView extends BaseModule
    {
        public btn_home:eui.Image;
        public btn_detail:eui.Image;
        public btn_inject:eui.Image;
        public btn_promote:eui.Image;
        public btn_dividend:eui.Image;
        public btn_exchange:eui.Image;
        public btn_shop:eui.Image;
        public btn_get_group:eui.Group;
        public btn_get:eui.Image;
        public btn_price_group:eui.Group;
        public btn_price:eui.Image;


        public constructor()
        {
            super();
            this.qmrSkinName = "Mainui";
        }

        /**
         * @description 初始化事件
         */
        protected initListener(): void
        {
            super.initListener();
            let t = this;
            t.addClickEvent(t.btn_get_group, t.onGetClick, t);
            t.addClickEvent(t.btn_price_group, t.onPriceClick, t);

            t.addClickEvent(t.btn_home, t.onHomeClick, t);
            t.addClickEvent(t.btn_detail, t.onDetailClick, t);

            t.addClickEvent(t.btn_exchange, t.onExchangeClick, t);
            t.addClickEvent(t.btn_inject, t.onInjectClick, t);
            t.addClickEvent(t.btn_shop, t.onShopClick, t);
            t.addClickEvent(t.btn_dividend, t.onDividendClick, t);
            t.addClickEvent(t.btn_promote, t.onPromoteClick, t);
        }

        protected addedToStage(evt: egret.Event): void
        {
            super.addedToStage(evt);

        }

        //领钱
        private onGetClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...", );
        }
        //查看价钱
        private onPriceClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
        }
        //主页
        private onHomeClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
        }
        //
        private onDetailClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能正在开发中...");
        }
        //兑换
        private onExchangeClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
        }
        //注入
        private onInjectClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
        }
        //商城
        private onShopClick():void
        {
            ModuleManager.showModule(ModuleNameConst.SHOP_VIEW);
        }
        //分红
        private onDividendClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
        }
        //推广
        private onPromoteClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
        }

        
        /**
        * @description 初始化数据,需被子类继承
        */
        protected initData(): void
        {
            super.initData();

        }
    }
}
