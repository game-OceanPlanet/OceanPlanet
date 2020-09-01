module qmr
{
	/**
	 * 基于时间的移动特效，用于战斗扩展，具有时间缩放
	 */
	export class BaseEffectMover extends egret.DisplayObjectContainer
	{
		private vx: number;
		private vy: number;
		private disx: number;
		private disy: number;
		private destX: number;
		private destY: number;
		private distance: number;
		private onArrival: Function;
		protected thisObject: any;					//回调函数引用对象
		protected dir: number;                      //当前方向
		public isMoving: boolean;                   //是否在移动中
		public speed: number;                       //移动速度
		public isCanMove: boolean;                  //当前是否能移动
		private nearDiatance: number;
		private argArray:any;	

		public constructor()
		{
			super();
			this.speed = 30;
			this.isMoving = false;
		}

        /**
		 * @description 玩家移动到某个点
		 * @param destX 目标X
		 * @param destY 目标Y
		 * @param onArrival 到达目的地返回函数
		 * @param target 回调函数作用目标
         * @param nearDiatance 代表离目标点多少距离就代表走到了，停止继续移动
		 */
		public moveTo(destX: number, destY: number, onArrival: Function = null, target: any = null, argArray?: any, nearDiatance: number = 0): void
		{
			this.destX = destX;
			this.destY = destY;
			this.onArrival = onArrival;
			this.thisObject = target;
			this.argArray = argArray;
			this.nearDiatance = nearDiatance;
			FightTimer.instance.unRegisterTick(this.enterFrameMove, this);
			FightTimer.instance.registerTick(this.enterFrameMove, this, 33);
		}

        /**
         * @description 每帧移动
         */
		private enterFrameMove(): void
		{
			let _self: BaseEffectMover = this;
			_self.disx = _self.destX - _self.x;
			_self.disy = _self.destY - _self.y;
			_self.distance = Math.sqrt(_self.disx * _self.disx + _self.disy * _self.disy);
			if (_self.distance < 5 || _self.distance < _self.nearDiatance)
			{
				if (_self.x != _self.destX) _self.x = _self.destX;
				if (_self.y != _self.destY) _self.y = _self.destY;
				FightTimer.instance.unRegisterTick(this.enterFrameMove, this);
				_self.onStop();
				if (_self.onArrival)
				{
					_self.onArrival.call(_self.thisObject, this.argArray);
				}
				return;
			}
			_self.disx = (_self.disx / _self.distance) * _self.speed;
			_self.disy = (_self.disy / _self.distance) * _self.speed;
			_self.vx = _self.disx;
			_self.vy = _self.disy;
			if (Math.abs(_self.x - _self.destX) < Math.abs(_self.vx))
			{
				_self.vx = _self.destX - _self.x;
			}
			if (Math.abs(_self.y - _self.destY) < Math.abs(_self.vy))
			{
				_self.vy = _self.destY - _self.y;
			}
			_self.x += _self.vx;
			_self.y += _self.vy;
		}

		/** 停止走动 */
		private stop(): void
		{
			this.onStop();
			FightTimer.instance.unRegisterTick(this.enterFrameMove, this);
		}

		/** 当停止运动的时候调用,需子类继承实现 */
        protected onStop(): void
        {
        }

		public dispos()
		{
			this.stop();
			this.isMoving = false;
			this.onArrival = null;
			this.argArray = null;
			this.thisObject = null;
		}
	}
}