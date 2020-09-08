module qmr
{
    export class MainView extends BaseModule
    {
        public btn_home:eui.Image;
public btn_detail:eui.Image;
public btn_bottom_gold:eui.Image;
public btn_bottom_property:eui.Image;
public btn_bottom_pet:eui.Image;
public txt_curr:eui.Label;
public btn_get_group:eui.Group;
public btn_get:eui.Image;
public txt_total:eui.Label;
public btn_price_group:eui.Group;
public btn_price:eui.Image;
public btn_exchange:eui.Image;
public btn_injection:eui.Image;
public btn_shop:eui.Image;
public btn_dividend:eui.Image;
public btn_promote:eui.Image;
public btn_realname:eui.Image;
public btn_person:eui.Image;
public btn_permit:eui.Image;
public btn_download:eui.Image;
public btn_help:eui.Image;
public effect_group_1:eui.Group;
public effect_group_2:eui.Group;
public effect_group_3:eui.Group;
public effect_group_4:eui.Group;
public effect_group_5:eui.Group;
public effect_group_pet:eui.Group;





		private __timekey:number;
        private __dayTotal:number;//每天总共产出多少金币
        private __secondSpeed:number;//每秒产生的金币
        private __currMoney:number;//当前可以领取的金币
        private __totalMoney:number;//我的总资产

        private __lastGetMoneyTime:number = 0;//上次零钱的时间点

        private baseEffect: BaseEffect;
        private baseEffect2: BaseEffect;
        private baseEffect3: BaseEffect;
        private baseEffect4: BaseEffect;
        private baseEffect5: BaseEffect;
        private baseEffectPet: BaseEffect;

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

            t.addClickEvent(t.btn_exchange, t.onExchangeClick, t);
            t.addClickEvent(t.btn_injection, t.onInjectClick, t);
            t.addClickEvent(t.btn_shop, t.onShopClick, t);
            t.addClickEvent(t.btn_dividend, t.onDividendClick, t);
            t.addClickEvent(t.btn_promote, t.onPromoteClick, t);

            t.addClickEvent(t.btn_bottom_pet, t.onPetViewClick, t);
            t.addClickEvent(t.btn_bottom_property, t.onPropertyViewClick, t);
            t.addClickEvent(t.btn_bottom_gold, t.onGoldViewClick, t);

            t.addClickEvent(t.btn_realname, t.onRealNameClick, t);
            t.addClickEvent(t.btn_person, t.onPersonClick, t);
            t.addClickEvent(t.btn_permit, t.onPermitClick, t);
            t.addClickEvent(t.btn_download, t.onDowonClick, t);
            t.addClickEvent(t.btn_help, t.onHelpClick, t);


            t.registerNotify(NotifyConst.S_GET_FINSH_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_COMBINE_FINSH, t.updateView, t);
            t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
        }

        protected addedToStage(evt: egret.Event): void
        {
            super.addedToStage(evt);

        }

        //资产面板
        private onPropertyViewClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("测试鱼儿合成功能...");
            HeroModel.instance.testMerge();
        }

        //金币面板
        private onGoldViewClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能正在开发中...");
        }

        //实名认证
        private onRealNameClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能正在开发中...");
        }
        //通行证
        private onPermitClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能正在开发中...");
        }
        //个人中心
        private onPersonClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能正在开发中...");
        }
        //下载
        private onDowonClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能正在开发中...");
        }

        //领钱
        private onGetClick():void
        {
            let t = this;
            if(t.__lastGetMoneyTime - egret.getTimer() > 0){
                let pendingMoney:number = t.__currMoney;
                HeroModel.instance.pendingMoney = 0;
                HeroModel.instance.totalMoney += pendingMoney;
                t.updateView();
                return;
            }
            t.__lastGetMoneyTime = egret.getTimer() + 60000;
            
            PetController.instance.getMoneyCmd();
        }
        //查看价钱
        private onPriceClick():void
        {
            TipManagerCommon.getInstance().createCommonColorTip("功能正在开发中...");
        }

        //查看宠物面板
        private onPetViewClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能正在开发中...");

            PetController.instance.getMyFishInfo();
        }

        //查看帮助
        private onHelpClick():void
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

            if(!t.baseEffect){
                t.baseEffect = new BaseEffect();
                t.baseEffect.scaleX = t.baseEffect.scaleY = 1.5;
				t.effect_group_1.addChild(t.baseEffect);
				t.baseEffect.playUIEffect("uieffect_act", -1, -1, 1);
            }
            
            if(!t.baseEffect2){
                t.baseEffect2 = new BaseEffect();
                t.baseEffect2.scaleX = t.baseEffect2.scaleY = 1.5;
				t.effect_group_2.addChild(t.baseEffect2);
				t.baseEffect2.playUIEffect("uieffect_act", -1, -1, 1);
            }
            
            if(!t.baseEffect3){
                t.baseEffect3 = new BaseEffect();
                t.baseEffect3.scaleX = t.baseEffect3.scaleY = 1.5;
				t.effect_group_3.addChild(t.baseEffect3);
				t.baseEffect3.playUIEffect("uieffect_act", -1, -1, 1);
            }
            
            if(!t.baseEffect4){
                t.baseEffect4 = new BaseEffect();
                t.baseEffect4.scaleX = t.baseEffect4.scaleY = 1.5;
				t.effect_group_4.addChild(t.baseEffect4);
				t.baseEffect4.playUIEffect("uieffect_act", -1, -1, 1);
            }
            
            if(!t.baseEffect5){
                t.baseEffect5 = new BaseEffect();
                t.baseEffect5.scaleX = t.baseEffect5.scaleY = 1.5;
				t.effect_group_5.addChild(t.baseEffect5);
				t.baseEffect5.playUIEffect("uieffect_act", -1, -1, 1);
            }
            
            if(!t.baseEffectPet){
                t.baseEffectPet = new BaseEffect();
                t.baseEffectPet.scaleX = t.baseEffectPet.scaleY = 1.5;
				t.effect_group_pet.addChild(t.baseEffectPet);
				t.baseEffectPet.playUIEffect("ui_jinjie_zhe", -1, -1, 1);
            }
            
            t.baseEffectPet.touchChildren = t.baseEffectPet.touchEnabled = false;
            t.effect_group_pet.touchEnabled = false;

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
				t.__timekey = egret.setInterval(t.onTimeRun, t, 1000);
			} else {
				t.stopTime();
            }
        }

        private onTimeRun(){
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
