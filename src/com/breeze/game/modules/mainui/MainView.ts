module qmr {
    export class MainView extends BaseModule {
        public game_title:eui.Image;
public btn_bottom_gold:eui.Image;
public btn_bottom_property:eui.Image;
public btn_bottom_pet:eui.Image;
public effect_group_pet:eui.Group;
public title_pet:eui.Image;
public title_jibi:eui.Image;
public title_zichan:eui.Image;
public money_icon:eui.Image;
public CN_448:eui.Label;
public txt_curr:eui.Label;
public btn_get_group:eui.Group;
public btn_get:eui.Image;
public img_reward:eui.Image;
public txt_totalGold:eui.Label;
public txt_totalUsdt:eui.Label;
public btn_price_group:eui.Group;
public img_price:eui.Image;
public effect_group_3:eui.Group;
public effect_group_1:eui.Group;
public effect_group_2:eui.Group;
public effect_group_4:eui.Group;
public effect_group_5:eui.Group;
public btn_exchange:eui.Image;
public btn_injection:eui.Image;
public btn_shop:eui.Image;
public btn_dividend:eui.Image;
public btn_promote:eui.Image;
public img_name_shop:eui.Image;
public img_name_divide:eui.Image;
public title_push:eui.Image;
public img_exchange2:eui.Image;
public img_name_inject:eui.Image;
public btn_realname:eui.Image;
public btn_person:eui.Image;
public btn_permit:eui.Image;
public btn_ActKey:eui.Image;
public img_name_person:eui.Image;
public img_name_certify:eui.Image;
public img_name_code:eui.Image;
public img_passport:eui.Image;
public btn_download:eui.Image;
public btn_help:eui.Image;
public img_name_down:eui.Image;
public img_name_help:eui.Image;



        private __timekey: number;
        private __dayTotal: number;//每天总共产出多少金币
        private __secondSpeed: number;//每秒产生的金币
        private __totalMoney: number;//我的总资产

        private __lastGetMoneyTime: number = 0;//上次零钱的时间点

        private baseEffect: BaseEffect;
        private baseEffect2: BaseEffect;
        private baseEffect3: BaseEffect;
        private baseEffect4: BaseEffect;
        private baseEffect5: BaseEffect;
        private baseEffectPet: BaseEffect;

        public constructor() {
            super();
            this.qmrSkinName = "Mainui";
        }

        protected initComponent():void
		{
            let t = this;
            t.showTxtNames = ["CN_448"];
        }

        protected switchLange(){
			let t = this;
			super.switchLange();
			if(GlobalConfig.isCN){
                t.game_title.source = "nameImg_json.game_title";
                t.img_reward.source = "nameImg_json.img_reward";
                t.img_price.source = "nameImg_json.img_price";
                t.img_name_shop.source = "nameImg_json.img_name_shop";
                t.img_exchange2.source = "nameImg_json.img_exchange2";
                t.img_name_inject.source = "nameImg_json.img_name_inject";
                t.img_name_divide.source = "nameImg_json.img_name_divide";
                t.title_push.source = "nameImg_json.title_push";
                t.img_name_code.source = "nameImg_json.img_name_code";
                t.img_name_person.source = "nameImg_json.img_name_person";
                t.img_name_certify.source = "nameImg_json.img_name_certify";
                t.img_passport.source = "nameImg_json.img_passport";
                t.img_name_help.source = "nameImg_json.img_name_help";
                t.img_name_down.source = "nameImg_json.img_name_down";
                t.title_zichan.source = "nameImg_json.title_zichan";
                t.title_pet.source = "nameImg_json.title_pet";
                t.title_jibi.source = "nameImg_json.title_jibi";
            } else {
                t.game_title.source = "nameImg_en_json.game_title";
                t.img_reward.source = "nameImg_en_json.img_reward";
                t.img_price.source = "nameImg_en_json.img_price";
                t.img_name_shop.source = "nameImg_en_json.img_name_shop";
                t.img_exchange2.source = "nameImg_en_json.img_exchange2";
                t.img_name_inject.source = "nameImg_en_json.img_name_inject";
                t.img_name_divide.source = "nameImg_en_json.img_name_divide";
                t.title_push.source = "nameImg_en_json.title_push";
                t.img_name_code.source = "nameImg_en_json.img_name_code";
                t.img_name_person.source = "nameImg_en_json.img_name_person";
                t.img_name_certify.source = "nameImg_en_json.img_name_certify";
                t.img_passport.source = "nameImg_en_json.img_passport";
                t.img_name_help.source = "nameImg_en_json.img_name_help";
                t.img_name_down.source = "nameImg_en_json.img_name_down";
                t.title_zichan.source = "nameImg_en_json.title_zichan";
                t.title_pet.source = "nameImg_en_json.title_pet";
                t.title_jibi.source = "nameImg_en_json.title_jibi";
            }
		}

        /**
         * @description 初始化事件
         */
        protected initListener(): void {
            super.initListener();
            let t = this;
            t.addClickEvent(t.btn_get_group, t.onGetClick, t);
            t.addClickEvent(t.btn_price_group, t.onPriceClick, t);

            t.addClickEvent(t.btn_exchange, t.onExchangeClick, t);
            t.addClickEvent(t.btn_injection, t.onInjectClick, t);
            t.addClickEvent(t.btn_shop, t.onShopClick, t);
            t.addClickEvent(t.btn_dividend, t.onDividendClick, t);
            t.addClickEvent(t.btn_promote, t.onPromoteClick, t);
            t.addClickEvent(t.btn_ActKey, t.onKeyClick, t);

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

        private startPoint:egret.Point;
        private endPoint:egret.Point;
        public getMoneyStartPont():egret.Point
        {
            let t = this;
            if(!t.startPoint){
                t.startPoint = new egret.Point();
            }

            t.money_icon.localToGlobal(0, 0,t.startPoint);
            t.startPoint.x += 24;
            t.startPoint.y += 24;
            return t.startPoint;
        }

        public getMoneyEndPont():egret.Point
        {
            let t = this;
            if(!t.endPoint){
                t.endPoint = new egret.Point();
            }

            t.txt_totalUsdt.localToGlobal(0, 0,t.endPoint);
            t.endPoint.x += 55;
            return t.endPoint;
        }

        protected addedToStage(evt: egret.Event): void {
            super.addedToStage(evt);

        }

        //资产面板
        private onPropertyViewClick(): void {
            ModuleManager.showModule(ModuleNameConst.USDT_LOG_VIEW);
            PetController.instance.getUSDTLogCmd();
        }

        //金币面板
        private onGoldViewClick(): void {
            ModuleManager.showModule(ModuleNameConst.GOLD_LOG_VIEW);
            PetController.instance.getMoneyLogCmd();
        }

        //实名认证
        private onRealNameClick(): void {
            ModuleManager.showModule(ModuleNameConst.CERTIFICATION_VIEW);
        }
        //通行证
        private onPermitClick(): void {
            ModuleManager.showModule(ModuleNameConst.MINE_PASSIED_VIEW);
        }
        //个人中心
        private onPersonClick(): void {
            ModuleManager.showModule(ModuleNameConst.MINEID_VIEW);
        }
        //下载
        private onDowonClick(): void {
            ModuleManager.showModule(ModuleNameConst.APP_DOWN_VIEW);
        }

        //领钱
        private onGetClick(): void {
            let t = this;

            BesselImgUtil.flyMoney(t.getMoneyStartPont(), t.getMoneyEndPont());

            if (t.__lastGetMoneyTime - egret.getTimer() > 0) {
                let count:number = t.getCurrentWaitMoney();
                HeroModel.instance.pendingMoney = 0;
                HeroModel.instance.totalMoney += count;
                HeroModel.instance.lastGetMoneyServerTime = ServerTime.serverTime;
                t.updateView();
                return;
            }
            t.__lastGetMoneyTime = egret.getTimer() + 10000;

            PetController.instance.getMoneyCmd();
        }
        //查看价钱
        private onPriceClick(): void {
            ModuleManager.showModule(ModuleNameConst.TRADE_VIEW);
            TradeController.instance.requestOTCInfo();
            TradeController.instance.requestOTCList();
        }

        //查看宠物面板
        private onPetViewClick(): void {
            ModuleManager.showModule(ModuleNameConst.PET_VIEW);
            PetController.instance.getMyFishInfo();
        }

        //查看帮助
        private onHelpClick(): void {
            ModuleManager.showModule(ModuleNameConst.HELP_MAIN_VIEW);
        }
        //兑换
        private onExchangeClick(): void {
            ModuleManager.showModule(ModuleNameConst.EXCHANGE_VIEW);
        }
        //注入
        private onInjectClick(): void {
            ModuleManager.showModule(ModuleNameConst.INJECT_VIEW);
        }
        //商城
        private onShopClick(): void {
            ModuleManager.showModule(ModuleNameConst.SHOP_VIEW);
        }
        //分红
        private onDividendClick(): void {
            ModuleManager.showModule(ModuleNameConst.DIVIDEND_VIEW);
        }
        //推广
        private onPromoteClick(): void {
            ModuleManager.showModule(ModuleNameConst.INVITE_CODE_VIEW);
        }
         //激活码
        private onKeyClick():void
        {
            ModuleManager.showModule(ModuleNameConst.ACT_KEY_VIEW);
        }

        /**
        * @description 初始化数据,需被子类继承
        */
        protected initData(): void {
            super.initData();
            let t = this;
            t.updateView();

            if (!t.baseEffect) {
                t.baseEffect = new BaseEffect();
                t.baseEffect.scaleX = t.baseEffect.scaleY = 1.5;
                t.effect_group_1.addChild(t.baseEffect);
                t.baseEffect.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect2) {
                t.baseEffect2 = new BaseEffect();
                t.baseEffect2.scaleX = t.baseEffect2.scaleY = 1.5;
                t.effect_group_2.addChild(t.baseEffect2);
                t.baseEffect2.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect3) {
                t.baseEffect3 = new BaseEffect();
                t.baseEffect3.scaleX = t.baseEffect3.scaleY = 1.5;
                t.effect_group_3.addChild(t.baseEffect3);
                t.baseEffect3.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect4) {
                t.baseEffect4 = new BaseEffect();
                t.baseEffect4.scaleX = t.baseEffect4.scaleY = 1.5;
                t.effect_group_4.addChild(t.baseEffect4);
                t.baseEffect4.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect5) {
                t.baseEffect5 = new BaseEffect();
                t.baseEffect5.scaleX = t.baseEffect5.scaleY = 1.5;
                t.effect_group_5.addChild(t.baseEffect5);
                t.baseEffect5.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffectPet) {
                t.baseEffectPet = new BaseEffect();
                t.baseEffectPet.scaleX = t.baseEffectPet.scaleY = 1.5;
                t.effect_group_pet.addChild(t.baseEffectPet);
                t.baseEffectPet.playUIEffect("ui_jinjie_zhe", -1, -1, 1);
            }

            t.baseEffectPet.touchChildren = t.baseEffectPet.touchEnabled = false;
            t.effect_group_pet.touchEnabled = false;

        }

        private updateView(): void {
            let t = this;

            let md: HeroModel = HeroModel.instance;
            t.__totalMoney = md.totalMoney;
            t.__secondSpeed = md.getProduceMoneySpeed();
            t.__dayTotal = md.getEveryDayProduceMoney();

            let count:number = t.getCurrentWaitMoney();
            t.txt_curr.text = NumberUtil.getFloat4Number2String(count);
            t.txt_totalGold.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalMoney);
            t.txt_totalUsdt.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalUSDT);


            if (t.__timekey != -1) {
                egret.clearInterval(t.__timekey);
            }

            if (t.__secondSpeed > 0) {
                t.__timekey = egret.setInterval(t.onTimeRun, t, 1000);
            } else {
                t.stopTime();
            }
        }

        private onTimeRun() {
            let t = this;
            let count:number = t.getCurrentWaitMoney();
            
            if (count >= t.__dayTotal) {
                t.txt_curr.text = NumberUtil.getFloat4Number2String(t.__dayTotal);
                t.stopTime();
                return;
            }
            
            t.txt_curr.text = NumberUtil.getFloat4Number2String(count);
        }

        private stopTime(): void {
            let t = this;
            if (t.__timekey != -1) {
                egret.clearInterval(t.__timekey);
            }
            t.__timekey = -1;
            t.txt_curr.text = NumberUtil.getFloat4Number2String(HeroModel.instance.getPetPendingMoney());
        }

        private getCurrentWaitMoney():number
        {
            let sec:number = Math.floor(ServerTime.serverTime - HeroModel.instance.lastGetMoneyServerTime) / 1000;
            let add:number = this.__secondSpeed * sec;
            let count:number = HeroModel.instance.pendingMoney + add;
            return count;
        }
    }
}
