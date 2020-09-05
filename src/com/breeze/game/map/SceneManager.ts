module qmr
{
	export class SceneManager
	{
		//地图类型   0 挂机  1 战斗
		public static MAP_HANG:number = 0;
		public static MAP_FIGHT:number = 1;

		private static _instance: SceneManager;
		/** 战斗背景 */
		private _map: Map;
		/** 挂机背景 */
		private _hangMap: HangMap;
		//战斗scene对象
		private scene: qmr.Scene;
		//副本ID/角色id，不是地图id
		private _instanceId: number;
		private _chapterId:number;
		private _mapId: number;
		private __mapType:number = 0;

		public static get instance(): SceneManager
		{
			if (this._instance == null) { this._instance = new SceneManager; }
			return this._instance;
		}
		public constructor()
		{
			this.initScene();
		}

		public get HangMap()
		{
			if (!this._hangMap)
			{
				this._hangMap = new HangMap();
			}
			return this._hangMap;
		}

		public get Map()
		{
			if (!this._map)
			{
				this._map = new Map();
			}
			return this._map;
		}

		public get mapType():number
		{
			return this.__mapType;
		}
		
		public set mapType(type:number)
		{
			this.__mapType = type;
		}

		public get isInHangMap(){
			return this.mapType == SceneManager.MAP_HANG;
		}

		public get isInFightMap(){
			return this.mapType == SceneManager.MAP_FIGHT;
		}

		/**
	   * @description 初始化场景数据模型
	   */
		public initScene(): void
		{
			this.scene = new Scene();
			// this.scene.touchEnabled = false;
			// this.scene.touchChildren = false;
		}

		private __pets:HeroActor[];
		private createUnits(): void
		{
			let t = this;
			t.__pets = [];
			let len:number = 3;
			for(var i:number = 0; i < len; i ++){
				let heroId: number = 1001;
				let h: HeroActor = new HeroActor();
				h.id = heroId;
				h.update();
				SceneManager.instance.addObject(h);
				t.__pets.push(h);
			}
		}

		//随机移动
		// private _sourcePos:egret.Point = new egret.Point();
		// private _targetPos:egret.Point = new egret.Point();
		private movePet(): void
		{
			let t = this;
			t.count ++;
			if(t.count > 15){
				egret.clearInterval(this._endTimeKey);
				this._endTimeKey = -1;
				return;
			}
			// let len = t.__pets.length
			// let index:number = Math.floor((len + 1) * Math.random());
			// index = index > len - 1 ? len - 1 : index;
			// let pet:HeroActor = t.__pets[index];
			// let targetX:number = StageUtil.stageWidth * Math.random();
			// let targetY:number = StageUtil.stageHeight * Math.random();
			// t._targetPos.x = targetY;
			// t._targetPos.y = targetY;
			// t._sourcePos.x = pet.x;
			// t._sourcePos.y = pet.y;
			// let dir:number = MathUtil.dir(t._sourcePos, t._targetPos);
			// pet.speed = 2;
			// pet.updateDir(dir);
			// pet.changeStatus(Status.MOVE);
			// pet.moveTo(targetX, targetY);

			let heroId: number = 1001;
			let h: HeroActor = new HeroActor();
			h.id = heroId;
			h.update();
			h.alpha = 0;

			egret.Tween.get(h).to({alpha:1}, 1000).wait(50)
            .call(()=>{
                egret.Tween.removeTweens(h);
			});
			SceneManager.instance.addObject(h);
			t.__pets.push(h);
		}


		/** 进入挂机地图 */
		public enterHangMap(chapterId: number = 0)
		{
			let t = this;
			if(t.mapType == SceneManager.MAP_HANG && chapterId == t._chapterId){
				return;
			}
			t.mapType = SceneManager.MAP_HANG;
			// DisplayUtils.removeDisplay(this.scene);
			t._chapterId = chapterId;
			//战斗背景层
			let map = t.HangMap;
			map.x = 0;
			map.y = 52;
			map.loadMap(chapterId);
			let mapCfg: XinHangUpCfg = ConfigManager.getConf(ConfigEnum.XINHANGUP, chapterId);
			if (mapCfg)
			{
				SoundManager.getInstance().loadAndPlayMusic(mapCfg.music);
			}
			if (!map.parent)
			{
				SceneManager.instance.addToMap(map);
			}
			if (!t.scene.parent)
			{
				LayerManager.instance.addDisplay(t.scene, LayerConst.MAP_LAYER);
			}
			t.leaveMap();

			t.createUnits();

			// Ticker.getInstance().registerTick(t.movePet, t, 3000, 10);

			this._endTimeKey = egret.setInterval(this.movePet, this, 1000);
		}

		private _endTimeKey;
		private count:number = 0;

		/** 进入地图instanceId 副本id/角色id */
		public enterMap(instanceId: number, chapterMap: number = 0): void
		{
			let t = this;

			// DisplayUtils.removeDisplay(this.scene);
			if(t.mapType == SceneManager.MAP_FIGHT && instanceId == t._instanceId && t._mapId == chapterMap){
				return;
			}
			t.mapType = SceneManager.MAP_FIGHT;
			t._instanceId = instanceId;
			t._mapId = chapterMap;
			//战斗背景层
			let map = t.Map;
			map.x = map.y = 0;
			// map.alpha = 1;
			// let isBattlePlayer = BattleMainModel.instance.isBattlePlayer;
			// if (isBattlePlayer)
			// {
			// 	if(!BattleMainModel.instance.mapId)
			// 	{
			// 		BattleMainModel.instance.mapId = parseInt(ConfigManager.getCommonConfig(1096));
			// 	}
			// 	map.loadMap(BattleMainModel.instance.mapId);
			// }
			// else
			// {
			// 	let instanceCfg: InstanceCfg = CopyModel.instance.getCopyCfgData(instanceId);
			// 	if (instanceCfg)
			// 	{
			// 		var mid = chapterMap > 0 ? chapterMap : instanceCfg.mapId;
			// 		if(!mid) mid = parseInt(ConfigManager.getCommonConfig(1096));
			// 		map.loadMap(mid);
			// 		SoundManager.getInstance().loadAndPlayMusic(instanceCfg.music);
			// 	}
			// }
			if (!map.parent)
			{
				SceneManager.instance.addToMap(map);
			}
			if (!t.scene.parent)
			{
				LayerManager.instance.addDisplay(t.scene, LayerConst.MAP_LAYER);
			}

			LogUtil.log("战斗:加载战斗地图，准备退出挂机地图",t._mapId,instanceId);
			t.leaveHangMap();
		}

		private removeHangMap()
		{
			let t = this;
			if (t._hangMap)
			{
				let alphaDisappear = function ()
				{
					if (t._hangMap)
					{
						t._hangMap.dispose();
					}
				}
				t._map.alpha = 0.5;
				egret.Tween.get(t._map).to({ alpha: 1 }, 200).call(alphaDisappear, t);
			}
		}

		private removeFightMap()
		{
			let t = this;
			if (t._map)
			{
				let alphaDisappear = function ()
				{
					if (t._map)
					{
						t._map.dispose();
					}
				}
				let map = t.HangMap;
				map.alpha = 0.5;
				egret.Tween.get(map).to({ alpha: 1 }, 200).call(alphaDisappear, t);
			}
		}

		/** 离开地图 */
		public leaveHangMap(): void
		{
			if (this.scene)
			{
				if (this._hangMap)
				{
					this._hangMap.dispose();
					LogUtil.log("战斗:leave hangMap");
				}
			}
		}

		/** 离开地图 */
		public leaveMap(): void
		{
			if (this.scene)
			{
				if (this._map)
				{
					this._map.dispose();
				}
			}
		}

		/** 设置观察者 */
		public lookAt(pos: any, scaleTime: number = 700, waitTime: number = 1000): void
		{
			if (this.scene && pos)
			{
				this.scene.lookAt(pos, scaleTime, waitTime);
			}
		}

		public get mapLayer(): egret.DisplayObjectContainer
		{
			return LayerManager.instance.getLayer(LayerConst.MAP_LAYER);
		}

		private _oldx: number = 0;
		private _oldy: number = 0;
		private _isShake: boolean = false;
		/**
         * @description 震屏
         */
		public shake(shakeTime: number = 200): void
		{
			let t = this;
			t.removeShake();
			t._isShake = true;
			let obj = t.scene;
			t._oldx = obj.x;
			t._oldy = obj.y;
			TweenEffectUtil.shake2(obj, shakeTime);
			Ticker.getInstance().registerTick(t.resetShakePos, t, shakeTime, 1);
		}

		private resetShakePos()
		{
			if (this._isShake)
			{
				this._isShake = false;
				this.scene.x = this._oldx;
				this.scene.x = this._oldy;
			}
		}

		//特殊情况下需要触发移除震屏
		public removeShake()
		{
			if (this._isShake)
			{
				egret.Tween.removeTweens(this.scene);
				Ticker.getInstance().unRegisterTick(this.resetShakePos, this);
				this.resetShakePos();
			}
		}

		/** 有的技能释放时候屏幕黑一会 */
		public tweenShowOrHideMask(isShow: boolean)
		{
			if (this.scene)
			{
				this.scene.tweenShowOrHideMask(isShow);
			}
		}

		/** 攻击结果返回,飘数字用 */
		public onAttackResultBack(actor: BaseMoverActor, fighterMsg: any, rate: number = 1): void
		{
			if (actor && fighterMsg)
			{
				var type = fighterMsg.beHurtMsg.type;
				var value = (fighterMsg.beHurtMsg.value * rate) | 0;
				if (actor instanceof HeroActor)
				{
					actor.catcheState(fighterMsg.beginState, fighterMsg.endState);
					// actor.updateHitOverProperty();
					actor.onPlayHit();
				}
				FloatManager.createFloatHp(type, value, actor.x, actor.y, 1, 2);
			}
		}

		/** 添加到地图层 */
		public addToMap(disPlay: egret.DisplayObject): void
		{
			this.scene.addToMap(disPlay);
		}

		/** 添加到卡牌下层 */
		public addToBottom(disPlay: egret.DisplayObject): void
		{
			this.scene.addToBottom(disPlay);
		}

		/** 添加到卡牌层 */
		public addObject(baseObject: BaseObject): void
		{
			this.scene.addObject(baseObject);
		}

		/** 添加到卡牌层 */
		public addObjectToTop(baseObject: BaseObject): void
		{
			this.scene.addObjectToTop(baseObject);
		}

		/** 添加到卡牌层之上，比如飘血,前景特效 */
		public addToFront(disPlay: egret.DisplayObject): void
		{
			this.scene.addToFront(disPlay);
		}

		/** 添加显示到物体前层，用于大技能  */
		public addToTop(disPlay: egret.DisplayObject): void
		{
			this.scene.addToTop(disPlay);
		}

		/**
         * @description 根据Id获取一个BaseObject
         */
		public getBaseObjectByid(id: any): BaseObject
		{
			return this.scene.findBaseObjectById(id);
		}
        /**
         * @description 根据类型获取一个BaseObject数组
         */
		public getObjectListByType(type: number): Array<BaseObject>
		{
			return this.scene.getObjectListByType(type);
		}
        /**
         * @description 根据Id删除一个BaseObject
         */
		public removeBaseObjectById(id: any): void
		{
			this.scene.removeBaseObjectById(id);
		}

		/**
         * @description 清除怪
         */
		public clearMonster(): void
		{
			let actorList: Array<BaseObject> = this.scene.getObjectListByType(ActorType.MONSTER);
			while (actorList.length > 0)
			{
				let item: BaseObject = actorList.shift();
				this.removeBaseObject(item);
			}
		}

		/** 移除掉落层物品 */
		public removeAllBottomObj()
		{
			this.scene.removeAllBottomObj();
		}

		/**
         * @description 获取当前渲染的列表
         */
		public getRenderList(): Array<BaseObject>
		{
			return this.scene.getObjectList();
		}

		/**
        * @description 停止渲染场景
        */
		public pause(): void
		{
			this.scene.pause();
		}

        /**
         * @description 重新渲染场景
         */
		public resume(): void
		{
			this.scene.resume();
		}

		/**
		* @description 根据对象本身移除一个BaseObject
		*/
		public removeBaseObject(baseObject: BaseObject): void
		{
			this.scene.removeBaseObject(baseObject);
		}

		public removeAll()
		{
			if (this.scene)
			{
				this.scene.clear();
			}
		}

	}
}