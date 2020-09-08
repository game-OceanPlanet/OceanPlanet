module qmr {
    export class HeroModel extends BaseModel {
        public IdentityPro:com.message.BasePlayerMsg;
        public playerPro:com.message.PlayerPropertyMsg;
        public teamPro:com.message.TeamMsg;

        private fishPros:com.message.FishMsg[];
        private fishIds:number[];

        public pendingMoney:number = 0;//待领取的金币
        public totalMoney:number = 0;//总共持有金币的数量
        public totalUSDT:number = 0;//当前玩家USDT的数量

        public constructor() {
            super();
            let t = this;
            this.fishPros = [];
            this.fishIds = [];
        }

        private static _instance: HeroModel;
        public static get instance(): HeroModel {
            return this._instance || (this._instance = new HeroModel());
        }

        public updateData(infos:com.message.FishMsg[]):void
        {
            let t = this;
            if(!infos){
                return;
            }
            t.fishPros = infos;
            let addPetIds:number[] = [];
            let removeIds:number[] = [];

            let pro:com.message.FishMsg;
            let len:number = infos.length;
            let id:number;
            for(var i:number = 0; i < len; i ++){
                pro = infos[i];
                id = Int64Util.getNumber(pro.id);
                if(t.fishIds.indexOf(id) == -1){
                    addPetIds.push(id);
                }
            }

            len = t.fishIds.length;
            for(var j:number = 0; j < len; j ++){

            }

            if(t.fishPros && t.fishPros.length > 0){
                let len:number = t.fishPros.length;
                for(var i:number = i; i <len; i++){
                    pro = HeroModel.instance.fishPros[i];
                    let info:PetActorInfo = new PetActorInfo();
                    info.id = Int64Util.getNumber(pro.id);
                    info.level = pro.level;
                    info.fishId = Int64Util.getNumber(pro.fishId);
                    info.state = pro.state;
                    MapController.instance.addPlayer(info);
                }
            }
        }

        public addPet(pro:com.message.FishMsg):void
        {
            if(!pro){
                return;
            }
            let info:PetActorInfo = new PetActorInfo();
            info.id = Int64Util.getNumber(pro.id);
            info.level = pro.level;
            info.fishId = Int64Util.getNumber(pro.fishId);
            info.state = pro.state;
            MapController.instance.addPlayer(info);
        }

        public removePet(id:number):void
        {

        }


        /**
         * 获取每秒产生金币的数量
         */
        public getProduceMoneySpeed():number
        {
            let t = this;
            if(!t.fishPros || t.fishPros.length == 0){
                return 0;
            }

            let total:number = 0;
            let len:number = t.fishPros.length;
            let cfg:PetCfg;
            let id:number;
            let pro:com.message.FishMsg;
            for(var i:number = 0; i < len; i ++){
                pro  = t.fishPros[i];
                id = Int64Util.getNumber(pro.fishId);
                if(pro.state == 0){
                    cfg = ConfigManager.getConf(ConfigEnum.PET, id);
                    let dayNum:number = cfg.produce / cfg.limitTime;
                    total += dayNum / 7200;
                }
            }
            return total;
        }

        /**
         * 每天总共可以产出多少金币
         */
        public getEveryDayProduceMoney():number
        {
            let t = this;
            if(!t.fishPros || t.fishPros.length == 0){
                return 0;
            }

            let total:number = 0;
            let len:number = t.fishPros.length;
            let cfg:PetCfg;
            let id:number;
            let pro:com.message.FishMsg;
            for(var i:number = 0; i < len; i ++){
                pro  = t.fishPros[i];
                id = Int64Util.getNumber(pro.fishId);
                if(pro.state == 0){
                    cfg = ConfigManager.getConf(ConfigEnum.PET, id);
                    let dayNum:number = cfg.produce / cfg.limitTime;
                    total += dayNum;
                }
            }
            return total;
        }

        /**
         * 宠物每天还剩余的金币
         * @param id 
         */
        public getPetLeftMoney(id:number):number
        {
            let t = this;
            if(!t.fishPros || t.fishPros.length == 0){
                return 0;
            }
            let len:number = t.fishPros.length;
            let cfg:PetCfg;
            let pro:com.message.FishMsg;
            for(var i:number = 0; i < len; i ++){
                pro  = t.fishPros[i];
                let fid = Int64Util.getNumber(pro.fishId);
                if(pro.state == 0 && id == fid){
                    cfg = ConfigManager.getConf(ConfigEnum.PET, id);
                    let hadProduce:number = Int64Util.getNumber(pro.todayMoney);
                    let left =  cfg.produce / cfg.limitTime - hadProduce;
                    return left;
                }
            }
            
            return 0;
        }

        /**
         * 今日产出可以领取的金币总数量
         */
        public getPetPendingMoney():number
        {
            let t = this;
            if(!t.fishPros || t.fishPros.length == 0){
                return 0;
            }
            let len:number = t.fishPros.length;
            let pro:com.message.FishMsg;
            let total:number = 0;
            for(var i:number = 0; i < len; i ++){
                pro  = t.fishPros[i];
                let pendingMoney:number = Int64Util.getNumber(pro.todayMoney);//今日产出的待领取的金币数量
                let gainedMoney:number = Int64Util.getNumber(pro.extMoney);//宠物总共产出的金币数量，pro.todayMoney领完之后直接加在pro.extMoney上
                total += pendingMoney;
            }
            
            return total;
        }
    }
}