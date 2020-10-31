module qmr
{
	export class ActiveShopView extends BaseModule
	{
		public itemGroup:eui.Group;
public text_allCount:eui.Label;
public txt_time:eui.Label;
public text_count:eui.Label;
public txt_title:eui.Label;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;




		private _arrCollection: eui.ArrayCollection;

		private __endTime:number = 0;
		private __timekey:number;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "ActiveShopSkin";
			this.isNeedMask = true;
			this.helpId = HelpIdEnum.TIP_15;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = ActiveShopItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected switchLange(){
			let t = this;
			super.switchLange();
			// if(GlobalConfig.isCN){
            //     t.title_shop.source = "nameImg_json.title_shop";
            // } else {
            //     t.title_shop.source = "nameImg_en_json.title_shop";
            // }
		}

		protected initData(): void {
			super.initData();
			let t = this;
            t.updateView();
            
            let pro:com.message.DeapActivityMsg = ActiveShopModel.instance.activePro;
            if(pro){
                let endTime:number = Int64Util.getNumber(pro.endTime);
                if(endTime > ServerTime.serverTime / 1000){
					ActiveShopController.instance.requestMyActiveInfo();
					t.__endTime = endTime;
                }
            }
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MY_DEAP_ACTIVITY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_BUY_DEAP_ACTIVITY_FISH, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_DEAP_ACTIVITY_INFO, t.updateView, t);
		}

		private updateView():void
		{
            let t = this;
            let cfgs:PetCfg[] = ConfigManager.getBean(ConfigEnum.PET).values;
            let fishCfgs:PetCfg[] = [];
            for(var i:number = 0; i < cfgs.length; i ++){
                if(cfgs[i].UActivePrice > 0){
                    fishCfgs.push(cfgs[i]);
                }
            }
			t._arrCollection.replaceAll(fishCfgs);

			t.text_count.text = "0";
			t.txt_time.text = "活动已经结束"
			let pro:com.message.MyDeapActivityMsg = ActiveShopModel.instance.myActivePro;
			let sysPro:com.message.DeapActivityMsg = ActiveShopModel.instance.activePro;
			t.txt_time.textColor = 0x09a608;
			if(pro){
				t.text_count.text = pro.leftCount + "/" + (sysPro.limiteCount * 2);
				t.text_allCount.text = sysPro.leftCount + "/" + sysPro.allCount;
				let leftTime:number = t.__endTime - ServerTime.serverTime / 1000;
				leftTime = Math.floor(leftTime);
				if(leftTime > 0){
					if (t.__timekey != -1){
						egret.clearInterval(t.__timekey);
					}
					t.__timekey = egret.setInterval(t.updateTime, t, 1000);
					t.txt_time.text = TimeUtil.formatRemain4(t.__endTime - ServerTime.serverTime / 1000);
				} else {
					t.stopTime();
				}
			} else {
				t.stopTime();
			}
		}

		private updateTime(){
			let t = this;
			if(t.__endTime < ServerTime.serverTime/1000){
				t.stopTime();
				return;
			}
			t.txt_time.text = TimeUtil.formatRemain4(t.__endTime - ServerTime.serverTime/1000);
		}

		private stopTime(): void
		{
			let t = this;
			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}
            t.__timekey = -1;
			t.txt_time.text = "活动已经结束";
			t.txt_time.textColor = 0xdd1900;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}