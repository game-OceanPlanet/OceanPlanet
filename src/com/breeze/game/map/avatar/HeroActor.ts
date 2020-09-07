module qmr {
    export class HeroActor extends BaseMoverActor {
        private resPath: string;

        public constructor() {
            super();
        }

        public update(): void {
            let t = this;
            t.initBaseActor();
            t.updateBaseActor();
            t.updatePos();

            t.layout();
        }

        /** 初始化卡牌特效 */
        private initBaseActor() {
            let t = this;
            t.resPath = SystemPath.rolePath;//方便怪物共用角色模型，放在一个路径下了
            let s = t.id == 115 ? Status.IDLE : Status.MOVE;
            t.baseActor = new qmr.BaseActor(t.resPath, t.onBodyLoad, t, s);
            t.baseActor.touchChildren = false;
            t.addChild(t.baseActor);
        }

        /**  裸体加载完毕 */
        protected onBodyLoad(): void {
        }

        /** 更新形象 */
        protected updateBaseActor() {
            let t = this;
            t.removeActor();
            if (t.id > 0) {
                t.addPartAt(ActorPart.BODY, t.id);
            }
        }

        public updateDir(dir:number):void
        {
            this.dir = dir;
            // this.baseActor.changeDir(dir);
        }

        /** 放到指定位置 */
        public updatePos() {
            let t = this;
            var p: egret.Point = new egret.Point(500 * Math.random(), 1000 * Math.random());
            
            t.x = p.x;
            if(t.id > 107){
                t.x =0;
            }

            t.y = p.y < 300 ? 200 + Math.random() * 600 : p.y;

            if(t.id == 115){
                t.x = 400;
                t.y = 200;
            }
        }

        /** 重新布局 */
        private layout() {
            // this.baseActor.x = this._w >> 1;
            // this.baseActor.y = this._h - 10;
        }

        private removeActor() {
            if (this.baseActor) {
                this.baseActor.dispos(false);
            }
        }
    }
}