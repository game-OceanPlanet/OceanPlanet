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

            t.changeStatus(Status.MOVE);
            t.layout();
        }

        /** 初始化卡牌特效 */
        private initBaseActor() {
            this.resPath = SystemPath.rolePath;//方便怪物共用角色模型，放在一个路径下了
            this.baseActor = new qmr.BaseActor(this.resPath, this.onBodyLoad, Status.MOVE);
            this.baseActor.touchChildren = false;
            this.addChild(this.baseActor);

            // this.avatar = new BaseActor(SystemPath.roleUiPath, null, this, Status.IDLE);
            // this.groupRoleMonkey.addChild(this.avatar);
            // this.avatar.addPartAt(ActorPart.BODY, avatarId, 0, -1);
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
            var p: egret.Point = new egret.Point(700 * Math.random(), 1200 * Math.random());
            t.x = p.x;
            t.y = p.y < 300 ? 200 + Math.random() * 500 : p.y;
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