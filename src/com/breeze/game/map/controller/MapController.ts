module qmr {
    /**
     * 场景对象管理器
     * */
    export class MapController extends BaseController {

        private static _instance: MapController;
        /**  获取单例对象  */
        public static get instance(): MapController {
            if (this._instance == null) { this._instance = new MapController(); }
            return this._instance;
        }

        constructor() {
            super();
            this.playerInfos = new Dictionary();
            this.playerUnits = new Dictionary();
        }

        private playerInfos: Dictionary;
        private playerUnits: Dictionary;
        protected initListeners(): void {
            let t = this;

        }

        public addTestPet(): void {
            let t = this;
            t._endTimeKey = egret.setInterval(t.addPet, t, 500);
        }

        public addPlayer(info: PetActorInfo): void {
            let t = this;
            t.playerInfos.set(info.id, info);

            let actor: PetActor = t.playerUnits.get(info.id);
            if (!actor) {
                actor = PetActor.getPetActor();
                t.addShowActorTween(actor);
            }
            actor.update(info);
            SceneManager.instance.addObject(actor);
        }

        public removePlayer(id: number): void {
            let t = this;
            let actor: PetActor = t.playerUnits.get(id);
            if (actor) {
                actor.dispos();
                PetActor.recovryPetActor(actor);
            }
            t.playerUnits.remove(id);
            t.playerInfos.remove(id);
            SceneManager.instance.removeBaseObjectById(id);
        }

        private addShowActorTween(actor: PetActor): void {
            egret.Tween.get(actor).to({ alpha: 1 }, 1000).wait(50)
                .call(() => {
                    egret.Tween.removeTweens(actor);
                });
        }

        private ids: number[] = [1, 1, 1]//,1,1,2,2,2,2,3,3,3,4,4,5,5,6,6,7,8,9,10,11,12,13,14,15];
        private _endTimeKey;


        //随机移动
        // private _sourcePos:egret.Point = new egret.Point();
        // private _targetPos:egret.Point = new egret.Point();
        private addPet(): void {
            let t = this;
            if (t.ids.length == 0) {
                egret.clearInterval(this._endTimeKey);
                this._endTimeKey = -1;
                return;
            }

            let heroId: number = t.ids.shift();
            let info: PetActorInfo = new PetActorInfo();
            info.id = heroId;
            info.fishId = heroId;
            let p = t.getPetPosition(heroId);
            info.posX = p.x;
            info.posY = p.y;

            let actor: PetActor = new PetActor();
            actor.update(info);
            actor.alpha = 0;

            t.playerUnits.set(heroId, actor);
            SceneManager.instance.addObject(actor);
            t.addShowActorTween(actor);
        }

        public getPetPosition(id: number): egret.Point {
            var p: egret.Point = new egret.Point(500 * Math.random(), 1000 * Math.random());

            if (id > 7) {
                p.x = 0;
            }

            p.y = p.y < 300 ? 200 + Math.random() * 600 : p.y;

            if (id == 15) {
                p.x = 400;
                p.y = 200;
            }

            return p;
        }
    }
}
