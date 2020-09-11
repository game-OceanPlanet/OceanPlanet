module qmr {
    export class TradeModule extends BaseModel {
        public sysDiamonPrice:number = 0;//今日系统U的指导价
        public historyPrices:com.message.HistoryPriceMsg[];//系统指导价历史信息
        public buyGoodsList:com.message.BuyGoodMsg[];//OCT求购信息

        public constructor() {
            super();
            let t = this;

        }

        private static _instance: TradeModule;
        public static get instance(): TradeModule {
            return this._instance || (this._instance = new TradeModule());
        }

        /**
         * 
         * @param pro 添加一个挂单数据
         */
        public addBuyOrder(pro:com.message.BuyGoodMsg):void
        {
            let t = this;
            if(!t.buyGoodsList){
                t.buyGoodsList = [];
            }
            if(pro){
                t.buyGoodsList.push(pro);
            }
        }

        /**
         * 
         * @param pro 更新一个挂单数据
         */
        public updateBuyOrder(pro:com.message.BuyGoodMsg):void
        {
            let t = this;
            if(!t.buyGoodsList){
                t.buyGoodsList = [];
            }
            if(pro){
                let id:number = Int64Util.getNumber(pro.buyGoodMsgId);
                let len:number = t.buyGoodsList.length;
                for(var i:number = 0; i < len; i ++){
                    if(id == Int64Util.getNumber(t.buyGoodsList[i].buyGoodMsgId)){
                        t.buyGoodsList[i] = pro;
                        break;
                    }
                }
            }
        }
    }
}