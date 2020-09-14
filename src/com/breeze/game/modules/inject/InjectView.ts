module qmr
{
	export class InjectView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_MyPercent:eui.Label;
public txt_selfTotal:eui.Label;
public txt_kda_total:eui.Label;
public text_input_price:eui.EditableText;
public btn_exchange_group:eui.Group;
public txt_button_buy:eui.Label;
public btn_exchange_group1:eui.Group;
public txt_button_buy1:eui.Label;
public txt_personnum:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;

        private _arrCollection: eui.ArrayCollection;
        private _injectNum:number = 0;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "InjectSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = InjectLogItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;

            t.text_input_price.restrict = "0-9";
		}

		protected initData(): void {
			super.initData();
			let t = this;
            t.updateView();
            DividendController.instance.requestInjectInfoCMD();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
            t.addClickEvent(t.btnReturn, t.closeView, t);
            t.addClickEvent(t.btn_exchange_group1, t.onInjectClick, t);
            t.addEvent(t.text_input_price, egret.Event.FOCUS_OUT, t.onFocusOut, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_INJECT_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_INJECT_KAD, t.updateView, t);
        }

        private onFocusOut(): void
		{
			this._injectNum = parseInt(this.text_input_price.text.trim());
		}

        private onInjectClick():void
        {
            if(this._injectNum <= 0){
				TipManagerCommon.getInstance().createCommonTip("输入KAD数量有误");
				return;
			}
			if(this._injectNum > HeroModel.instance.totalKAD){
				TipManagerCommon.getInstance().createCommonTip("对不起您的KAD不足");
				return;
			}
            DividendController.instance.requestInjectCMD(this._injectNum, 1);
        }

		private updateView():void
		{
            let t = this;
            let md:DividendModel = DividendModel.instance;
            t.txt_kda_total.text = NumberUtil.getFloat6Number2String(md.allInject);

            let myTotal:number = 0;
            let logs:com.message.PersonInjectMsg[] = md.injectLogs;
            if(logs && logs.length > 0){
                for(var i:number = 0; i < logs.length; i ++){
                    myTotal += logs[i].KADCount;
                }
            }

            let total:number = md.allInject;
            if(total > 0 && myTotal > 0){
                t.txt_MyPercent.text = NumberUtil.getFloat6Number2String(myTotal/total) + "%";
				t.txt_selfTotal.text = NumberUtil.getFloat6Number2String(myTotal) + HeroModel.KAD;
            } else {
                t.txt_MyPercent.text = "0%";
                t.txt_selfTotal.text = "0"+HeroModel.KAD;
            }
            t.txt_personnum.text = HeroModel.instance.totalKAD + HeroModel.KAD;

            t._arrCollection.replaceAll(logs);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}