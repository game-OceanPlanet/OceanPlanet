module qmr {
	export class PetActorInfo {
        public id:number; // 鱼的唯一ID
        public level:number; //等级
        public fishId:number; //鱼配置ID
        public state:number; //状态，0生产中，1停产中
        public allMoney:number; //总共可以产出金币，读表
        public extMoney:number; //已经产出金币，存
        public todayMoney:number; //今日产出金币，存
        public allDay:number;//生命周期，读表
        public leftDay:number;//剩余天数，（总币-已产出）/日产出率

        public posX:number;
        public posY:number;

        private _cfg:PetCfg;

		public constructor() {
        }
        
        public setData(pro:com.message.FishMsg):void
        {
            let t = this;
            t.id = Int64Util.getNumber(pro.id);
            t.level = pro.level;
            t.fishId = Int64Util.getNumber(pro.fishId);
            t.state = pro.state;
            t.allMoney = Int64Util.getNumber(pro.allMoney);
            t.extMoney = Int64Util.getNumber(pro.extMoney);
            t.todayMoney = Int64Util.getNumber(pro.todayMoney);
            t.allDay = pro.allDay;
            t.leftDay = pro.leftDay;
        }

        public get config():PetCfg
        {
            let t = this;
            if(!t._cfg && t.fishId && t.fishId > 0){
                t._cfg = ConfigManager.getConf(ConfigEnum.PET, t.fishId);
            }
            return t._cfg;
        }

        public get modelId():number
        {
            let t = this;
            let cfg:PetCfg = t.config;
            if(cfg){
                return parseInt(cfg.resId);
            }
            return 0;
        }

	}
}