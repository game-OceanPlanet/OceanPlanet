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
public txt_curr:eui.Label;
public btn_get_group:eui.Group;
public btn_get:eui.Image;
public txt_total:eui.Label;
public btn_price_group:eui.Group;
public btn_price:eui.Image;



		private __timekey:number;
        private __dayTotal:number;//每天总共产出多少金币
        private __secondSpeed:number;//每秒产生的金币
        private __currMoney:number;//当前可以领取的金币
        private __totalMoney:number;//我的总资产

        private __lastGetMoneyTime:number = 0;//上次零钱的时间点

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


            t.registerNotify(NotifyConst.S_GET_FINSH_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_COMBINE_FINSH, t.updateView, t);
            t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
        }

        protected addedToStage(evt: egret.Event): void
        {
            super.addedToStage(evt);

        }

        //领钱
        private onGetClick():void
        {
            let t = this;
            if(t.__lastGetMoneyTime - egret.getTimer() > 0){
                let pendingMoney:number = HeroModel.instance.pendingMoney;
                HeroModel.instance.pendingMoney = 0;
                HeroModel.instance.totalMoney += pendingMoney;
                t.updateView();
                return;
            }
            t.__lastGetMoneyTime = egret.getTimer() + 60000;
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
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
            let t = this;
            t.updateView();
        }

        private updateView():void
        {
            let t = this;

            let md:HeroModel = HeroModel.instance;
            t.__currMoney = md.pendingMoney;
            t.__totalMoney = md.totalMoney;
            t.__secondSpeed = md.getProduceMoneySpeed();
            t.__dayTotal = md.getEveryDayProduceMoney();

            t.txt_curr.text = t.__currMoney + "JT";
            t.txt_total.text = t.__totalMoney + "JT";


			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}

			if(t.__currMoney < t.__dayTotal){
				t.__timekey = egret.setInterval(t.updateTime, t, 1000);
			} else {
				t.stopTime();
            }
        }

        private updateTime(){
            let t = this;
			if(t.__currMoney >= t.__dayTotal){
				t.txt_curr.text = t.__dayTotal + "JT";
				t.stopTime();
				return;
			}
            t.__currMoney += t.__secondSpeed;
            t.txt_curr.text = t.__currMoney.toFixed(4) + "JT";
		}

		private stopTime(): void
		{
			let t = this;
			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}
			t.__timekey = -1;
			t.txt_curr.text = t.__dayTotal + "JT";
		}
    }
}
