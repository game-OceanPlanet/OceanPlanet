module qmr
{
	export class TradeView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_totalCount:eui.Label;
public txt_totalChangeValue:eui.Label;
public txt_todayPrice:eui.Label;
public txt_changeValue:eui.Label;
public txt_price5:eui.Label;
public txt_price2:eui.Label;
public txt_price3:eui.Label;
public txt_price4:eui.Label;
public txt_price0:eui.Label;
public txt_price1:eui.Label;
public txt_date0:eui.Label;
public txt_date2:eui.Label;
public txt_date3:eui.Label;
public txt_date4:eui.Label;
public txt_date5:eui.Label;
public txt_date6:eui.Label;
public txt_date7:eui.Label;
public txt_date1:eui.Label;
public column_0:eui.Image;
public column_1:eui.Image;
public column_2:eui.Image;
public column_3:eui.Image;
public column_4:eui.Image;
public column_5:eui.Image;
public column_6:eui.Image;
public column_7:eui.Image;
public input_group0:eui.Group;
public text_input_price:eui.EditableText;
public input_group:eui.Group;
public text_input_count:eui.EditableText;
public btn_buy_group:eui.Group;
public txt_button_buy:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;



		private _arrCollection: eui.ArrayCollection;
		private _stepLabels:eui.Label[];
		private _dateLabels:eui.Label[];
		private _columns:eui.Image[];
		private _positions:egret.Point[];
		
		public constructor()
		{
			super();
			this.qmrSkinName = "PriceSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = TradeItemRender;
            t._arrCollection = new eui.ArrayCollection();
			t.item_list.dataProvider = t._arrCollection;
			
			// t.text_input_price.restrict = new RegExp(reg);
			// t.text_input_price.restrict = reg;

			t._stepLabels = [t.txt_price0,t.txt_price1,t.txt_price2,t.txt_price3,t.txt_price4,t.txt_price5];
			t._dateLabels = [t.txt_date0,t.txt_date1,t.txt_date2,t.txt_date3,t.txt_date4,t.txt_date5,t.txt_date6,t.txt_date7];
			t._columns = [t.column_0,t.column_1,t.column_2,t.column_3,t.column_4,t.column_5,t.column_6,t.column_7];
			t._positions = [];
			for(var i:number = 0; i < t._columns.length; i ++){
				t._positions[i] = new egret.Point(t._columns[i].x, t._columns[i].y);
			}
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.btn_buy_group, t.buyClick, t);
			
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_OCT_MARKET_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_MARKET_BUY, t.updateView, t);
			t.registerNotify(NotifyConst.S_MARKET_SELL, t.updateView, t);
			t.registerNotify(NotifyConst.S_MARKET_CANCEL, t.updateView, t);
		}

		private buyClick():void
		{
			let t = this;
			let str:string = t.text_input_price.text.trim();
			if (str.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入购买价格");
                return;
			}
			let price:number = Number(str);
			if(price <= 0){
				TipManagerCommon.getInstance().createCommonColorTip("输入价格有误");
                return;
			}
			str = t.text_input_count.text.trim();
			if (str.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入购买数量");
                return;
			}

			let count:number = Number(str);
			if(count <= 0){
				TipManagerCommon.getInstance().createCommonColorTip("输入数量有误");
                return;
			}

			if(price > TradeModule.instance.sysDiamonPrice){
				TipManagerCommon.getInstance().createCommonColorTip("购买的价格不能大于系统指导价格");
                return;
			}

			let money:number = count * price;
			if(money > HeroModel.instance.totalUSDT){
				TipManagerCommon.getInstance().createCommonColorTip("对不起购买货币不足");
				return;
			}
			TradeController.instance.getBuyOrderRequest(count, price);
		}

		private updateView():void
		{
            let t = this;
			let pros:com.message.BuyGoodMsg[] = TradeModule.instance.buyGoodsList;
			let totalBuyCount:number = 0;
			let len:number;
			if(pros && pros.length > 0){
				len = pros.length;
				for(var i:number = 0; i < len;i ++){
					totalBuyCount += Int64Util.getNumber(pros[i].moneyCount);
				}
			}
			t._arrCollection.replaceAll(pros);
			
			t.txt_todayPrice.text = TradeModule.instance.sysDiamonPrice + HeroModel.USDT;
			t.txt_totalCount.text = totalBuyCount + HeroModel.USDT;

			let historyPros:com.message.HistoryPriceMsg[] = TradeModule.instance.historyPrices;
			let prices:number[] = [];//最近8天的价格，不足用0补上
			let days:number[] = [];//最近8天的日期
			let startTime:number = ServerTime.serverTime;
			if(historyPros && historyPros.length > 0){
				historyPros.sort((a, b)=>{
					return Int64Util.getNumber(a.historyTime) - Int64Util.getNumber(b.historyTime);
				});
				len = historyPros.length;
				for(var i:number = 0; i < len; i ++){
					prices.push(Int64Util.getNumber(historyPros[i].historyPrice));
					days.push(Int64Util.getNumber(historyPros[i].historyTime));
				}
				startTime = Int64Util.getNumber(historyPros[0].historyTime);
			}

			if(prices.length > 8){
				prices = prices.slice(0, 8);
				days = days.slice(0, 8);
			}
			
			let dayMiniSeconds:number = 24 * 3600 * 1000;
			while(prices.length < 8){
				prices.push(0);
				days.push(startTime + dayMiniSeconds);
			}

			let maxPrice:number = 0;
			let minPrice:number = 0;
			for(var i:number = 0; i < prices.length; i ++){
				maxPrice = maxPrice < prices[i] ? prices[i] : maxPrice;
				minPrice = minPrice > prices[i] ? prices[i] : minPrice;
			}
			maxPrice = maxPrice * 1.5;
			let add:number = (maxPrice - minPrice) / 6;
			let steps:number[] = [];
			for(var i:number = 0; i < 6; i ++){
				steps[i] = minPrice + add * i;
			}

			len = steps.length;
			for(var i:number = 0; i < len; i ++){
				t._stepLabels[i].text = NumberUtil.getFloat4Number(steps[i]) + "";
			}

			len = prices.length;
			let dt:Date = new Date();
			let price:number;
			let maxHeight:number = 220;
			for(var i:number = 0; i < len; i ++){
				dt.setTime(days[i]);
				price = prices[i];
				t._dateLabels[i].text = TimeUtil.formatMD(dt);
				t._columns[i].height = maxHeight * price / maxPrice;
				t._columns[i].y = t._positions[i].y - t._columns[i].height;
			}
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}