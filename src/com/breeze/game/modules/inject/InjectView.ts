module qmr
{
	export class InjectView extends BaseModule
	{
		public panelGroup:eui.Group;

public txt_MyPercent:eui.Label;
public txt_selfTotal:eui.Label;
public txt_kda_total:eui.Label;
public text_input_price:eui.TextInput;
public btn_stepSelected:eui.Group;
public btn_exchange_group:eui.Group;
public txt_personnum:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public selectView:qmr.InjectSelectView;
public btn_help:eui.Image;
public btnReturn:eui.Image;

public CN_340:eui.Label;
public CN_344:eui.Label;
public CN_338:eui.Label;
public CN_339:eui.Label;
public CN_336:eui.Label;
public CN_337:eui.Label;
public CN_335:eui.Label;
public CN_343:eui.Label;
public CN_342:eui.Label;
public CN_341:eui.Label;
public CN_345:eui.Label;
public title_zhuru:eui.Image;

        private _arrCollection: eui.ArrayCollection;
        private _injectNum:number = 0;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "InjectSkin";
            this.isNeedMask = true;
            
            this.helpId = HelpIdEnum.TIP_3;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = InjectLogItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;

            t.text_input_price.restrict = "0-9";
            t.showTxtNames = ["CN_340","CN_344","CN_338","CN_339","CN_336","CN_337","CN_335","CN_343","CN_342","CN_342","CN_345","CN_341"];
		}

		protected initData(): void {
			super.initData();
			let t = this;
            t.updateView();
            DividendController.instance.requestInjectInfoCMD();
        }
        
        protected switchLange(){
			let t = this;
			super.switchLange();
            t.text_input_price.prompt = LabelUtil.getCNMessage("CN_346");
            if(GlobalConfig.isCN){
                t.title_zhuru.source = "nameImg_json.title_zhuru";
            } else {
                t.title_zhuru.source = "nameImg_en_json.title_zhuru";
            }
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
            t.addClickEvent(t.btnReturn, t.closeView, t);
            t.addClickEvent(t.btn_exchange_group, t.onInjectClick, t);
            t.addClickEvent(t.btn_stepSelected, t.onStepClick, t);
            t.addEvent(t.text_input_price, egret.Event.FOCUS_OUT, t.onFocusOut, t);
            t.addEvent(t.text_input_price, egret.Event.CHANGE,t.onTextInputChange,t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_INJECT_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_INJECT_KAD, t.updateView, t);

            t.registerNotify(NotifyConst.SELECT_ITEM_SELECTED, t.onStepSelected, t);

            LabelUtil.addInputListener(t.text_input_price, t);
        }

        private selecteWightId:number = 0;
        private onStepSelected(cfg:InjectCycleCfg):void
        {
            let t = this;
            if(cfg){
                let des:string = ConfigManagerAft.getCNValue(cfg.des);
                LabelUtil.setLabelText(t.CN_341, "CN_428", des, cfg.weights);
                this.selecteWightId = cfg.id;
            }
        }

        private onTextInputChange(evt: egret.Event):void
		{
            let str:string = evt.target.text;
            if(RegexpUtil.IsNull(str)){
				return;
			}
            if(!RegexpUtil.IsInteger(str)){
                return;
			}
            this._injectNum = Number(str.trim());
		}

        private onFocusOut(): void
		{
		}

        private onInjectClick():void
        {
            if(this._injectNum <= 0){
				TipManagerCommon.getInstance().showLanTip("CN_207");
				return;
			}
			if(this._injectNum > HeroModel.instance.totalKAD){
				TipManagerCommon.getInstance().showLanTip("CN_208");
				return;
            }
            if(this.selecteWightId <= 0){
                TipManagerCommon.getInstance().showLanTip("CN_209");
				return;
            }
            DividendController.instance.requestInjectCMD(this._injectNum, this.selecteWightId);
        }

        private onStepClick():void
        {
            this.selectView.show(true);
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
                t.txt_MyPercent.text = NumberUtil.getFloat6Number2String(myTotal/total * 100) + "%";
				t.txt_selfTotal.text = NumberUtil.getFloat6Number2String(myTotal) + HeroModel.KAD;
            } else {
                t.txt_MyPercent.text = "0%";
                t.txt_selfTotal.text = "0"+HeroModel.KAD;
            }
            t.txt_personnum.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalKAD) + HeroModel.KAD;
            if(logs){
				logs.sort((a, b)=>{
					return Int64Util.getNumber(b.createTime) - Int64Util.getNumber(a.createTime);
				});
			}
            t._arrCollection.replaceAll(logs);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}