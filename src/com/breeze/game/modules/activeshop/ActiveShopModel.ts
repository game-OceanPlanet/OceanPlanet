module qmr {
    export class ActiveShopModel extends BaseModel {

        public constructor() {
            super();
            let t = this;

        }

        private static _instance: ActiveShopModel;
        public static get instance(): ActiveShopModel {
            return this._instance || (this._instance = new ActiveShopModel());
        }

        public activePro:com.message.DeapActivityMsg;//深海活动信息
        public myActivePro:com.message.MyDeapActivityMsg;//获取我的深海活动信息

        public ocpActivePro:com.message.OcenActivityMsg;//海洋星球活动信息
        public myOcpActivePro:com.message.MyOceanActivityMsg;//我的海洋星球活活动信息
        public drawId:number;//奖励配置id

        public directRankPros:com.message.OceanActivityRankMsg[];//获取海洋星球活动排名信息
        public teamRankPros:com.message.OceanActivityRankMsg[];//获取海洋星球活动排名信息

        public drawLogPros:com.message.OceanActivityDrawLogMsg[];//海洋星球活动-抽奖记录


        public rewardDes = ["10USDT","50KH","1USDT","1000KH","20USDT","500KH","5USDT","200KH"];
        public rewardIndexs = [7,1,5,4,8,3,6,2];
        public getRewardDes(rewardId:number):string
        {
            let index:number = this.rewardIndexs.indexOf(rewardId);
            if(index != -1){
                return this.rewardDes[index];
            }
            return "";
        }

    }
}