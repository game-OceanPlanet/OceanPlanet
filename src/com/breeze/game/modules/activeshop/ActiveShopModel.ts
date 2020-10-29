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

    }
}