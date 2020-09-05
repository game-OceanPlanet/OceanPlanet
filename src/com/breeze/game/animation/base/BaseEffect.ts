module qmr
{
	/**
	 *
	 * @author coler
	 * @description 特效基类,如果有多方向特效，全部采用分方向加载
	 *
	 */
    export class BaseEffect extends BaseEffectMover
    {
        protected currentFrame: number;
        protected totalFrame: number;
        private isStopped: boolean;
        private passedTime: number;
        private frameIntervalTime: number;
        private lastTime: number;
        private playTimes: number;
        private eventDic: any;                       //事件字典
        private _frameRate: number;                  //帧频
        private mainClip: qmr.AnimateClip;
        private loopCallBack: Function;              //播放完一轮的回调函数
        private _timeScale: number;                  //帧频系数,越大频率越快
        private _isRandomPlay: boolean;              //是否随机从某一帧播放
        private _pauseFramed: boolean;              //是否暂停只播放某一帧
        public cfgScale: number = 1;//配置的缩放比

        public constructor()
        {
            super();
            let _self = this;
            _self.currentFrame = 1;
            _self.totalFrame = 0;
            _self.isStopped = true;
            _self._pauseFramed = false;
            _self.passedTime = 0;
            _self.lastTime = 0;
            _self.playTimes = 1;
            _self._timeScale = 1;
            _self.frameRate = 30;
            _self.eventDic = {};
            _self.mainClip = new qmr.AnimateClip(_self.onLoaded, _self);
            _self.touchEnabled = _self.touchChildren = false;
        }

        public getCurrentFrame(): number
        {
            return this.currentFrame;
        }

        public get isRandomPlay(): boolean
        {
            return this._isRandomPlay;
        }

        public set isRandomPlay(value: boolean)
        {
            this._isRandomPlay = value;
        }

        public get pauseFramed(): boolean
        {
            return this._pauseFramed;
        }

        public set pauseFramed(value: boolean)
        {
            this._pauseFramed = value;
        }

		/**
		 * @description 设置是否是分方向加载的特效
		 */
        public setIsDirLoad(value: boolean): void
        {
            if (this.mainClip)
            {
                this.mainClip.setIsDirLoad(value);
            }
        }
		/**
         * @description 资源加载完毕,需被子类继承        */
        protected onLoaded(): void
        {
            this.totalFrame = this.mainClip.totalFrames;
            this.frameRate = this.mainClip.frameRate;
            this.currentFrame = this.isRandomPlay ? Math.floor(Math.random() * this.totalFrame + 1) : 1;
        }

		/**
		 * @description 播放特效,先判断是否支持分方向
		 * @param effectRes 特效资源
		 * @param dir 特效方向,主要是用在多方向分块加载的时候
		 * @param playTimes -1代表无限次
		 */
        public play(effectRes: string, dir: number = -1, playTimes: number = -1, timeScale: number = 1, callBack: Function = null, thisObject: any = null): void
        {
            let _self = this;
            _self.currentFrame = 1;
            _self.totalFrame = 0;
            _self.playTimes = playTimes;
            _self.loopCallBack = callBack;
            _self.thisObject = thisObject;
            _self._timeScale = timeScale;
            _self._pauseFramed = false;
            _self.mainClip.load(SystemPathAft.effectPath, effectRes, qmr.DirUtil.getDir(dir));
            _self.addChild(_self.mainClip);
            _self.setIsStopped(false);
        }

        /**
		 * @description 播放特效,先判断是否支持分方向
		 * @param effectName 特效资源
		 * @param dir 特效方向,主要是用在多方向分块加载的时候
		 * @param playTimes -1代表无限次
		 */
        public playUIEffect(effectName: string, dir: number = -1, playTimes: number = -1, timeScale: number = 1, callBack: Function = null, thisObject: any = null): void
        {
            let _self = this;
            _self.currentFrame = 1;
            _self.totalFrame = 0;
            _self.playTimes = playTimes;
            _self.loopCallBack = callBack;
            _self.thisObject = thisObject;
            _self._timeScale = timeScale;
            _self._pauseFramed = false;
            _self.mainClip.load(SystemPathAft.uieffect, effectName, qmr.DirUtil.getDir(dir));
            _self.addChild(_self.mainClip);
            _self.setIsStopped(false);
        }

        /**
        * @description 注册一个帧事件         */
        public registerFrameEvent(frame: number, callBack: Function, thisObject: any): void
        {
            this.eventDic[frame] = { callBack: callBack, thisObject: thisObject };
        }

        /**
        * @description 取消一个帧事件         */
        public unRegisterFrameEvent(frame: number): void
        {
            if (this.eventDic[frame])
            {
                this.eventDic[frame] = null;
                delete this.eventDic[frame];
            }
        }
		/**
         * @description 帧频调用         */
        private advanceTime(t: number): boolean
        {
            let _self = this;
            let advancedTime: number = t - _self.lastTime;
            _self.lastTime = t;
            let ft: number = _self.frameIntervalTime;
            let currentTime = _self.passedTime + advancedTime;
            _self.passedTime = currentTime % ft;
            let num: number = currentTime / ft;
            if (num < 1)
            {
                return false;
            }
            _self.render();
            while (!_self._pauseFramed && num >= 1)
            {
                num--;
                _self.currentFrame++;
                _self.checkFrameEvent();
            }
            return false;
        }
        /**
         * @description 设置位图填充模式
         */
        public set clipBlendMode(value: string)
        {
            if (this.mainClip)
            {
                this.mainClip.blendMode = value;
            }
        }
        /**
         * @description 检测帧事件         */
        private checkFrameEvent(): void
        {
            if (this.eventDic[this.currentFrame])
            {
                let obj: any = this.eventDic[this.currentFrame];
                if (obj.callBack)
                {
                    obj.callBack.call(obj.thisObject);
                }
            }
        }
        /**
        * @description 渲染 需被子类继承*/
        protected render(): void
        {
            let _self = this;
            if (_self.totalFrame > 0)
            {
                if (_self.currentFrame > _self.totalFrame)
                {
                    _self.currentFrame = 1;
                    if (_self.playTimes == -1)
                    {
                        if (_self.loopCallBack)
                        {
                            _self.loopCallBack.call(_self.thisObject);
                        }
                    }
                    else
                    {
                        _self.playTimes--;
                        if (_self.playTimes <= 0)
                        {
                            if (_self.loopCallBack)
                            {
                                _self.loopCallBack.call(_self.thisObject);
                            }
                            _self.dispos();
                            return;
                        }
                    }
                }
                if (_self.stage)
                {
                    _self.mainClip.render(_self.currentFrame);
                }
            }
        }

        public set effectWidth(value: number)
        {
            if (this.mainClip)
            {
                this.mainClip.effectWidth = value;
            }
        }

        public get effectWidth(): number
        {
            if (this.mainClip)
            {
                return this.mainClip.effectWidth;
            }
            return 0;
        }

        public set scaleXY(value: number)
        {
            this.scaleX = this.scaleY = value;
        }

        /**
         * @description 设置帧频         */
        public set frameRate(value: number)
        {
            if (value > 60)
            {
                value = 60;
            }
            this._frameRate = value;
            this.frameIntervalTime = 1000 / (value * this._timeScale);
        }
        /**
         * @description 设置timescale
         */
        public set timeScale(value: number)
        {
            if (value <= 0)
            {
                value = 1;
            }
            let _self = this;
            _self._timeScale = value;
            if (!isNaN(_self.frameRate))
            {
                _self.frameIntervalTime = 1000 / (_self._frameRate * value);
            }
        }
		/**
            * @param value
            */
        public setIsStopped(value: boolean)
        {
            if (this.isStopped == value)
            {
                return;
            }
            this.isStopped = value;
            if (value)
            {
                egret.stopTick(this.advanceTime, this);
            } else
            {
                this.lastTime = egret.getTimer();
                egret.startTick(this.advanceTime, this);
            }
        }
        /**
         * @description 清除
         */
        public clear(): void
        {
            if (this.mainClip)
            {
                this.mainClip.blendMode = egret.BlendMode.NORMAL;
                this.mainClip.dispos();
            }
            this.setIsStopped(true);
            for (let key in this.eventDic)
            {
                this.eventDic[key] = null;
                delete this.eventDic[key];
            }
        }

        /** 资源释放 千万不要直接调用        */
        public dispos(): void
        {
            let _self = this;
            _self.rotation = 0;
            _self.effectWidth = 0;
            super.dispos()
            if (_self.mainClip)
            {
                _self.mainClip.blendMode = egret.BlendMode.NORMAL;
                _self.mainClip.dispos();
            }
            _self.setIsStopped(true);
            for (let key in _self.eventDic)
            {
                _self.eventDic[key] = null;
                delete _self.eventDic[key];
            }
            _self.scaleXY = 1;
            // EffectFactory.getInstance().releaseEffect(_self);
            if (_self.parent)
            {
                _self.parent.removeChild(_self);
            }
        }
    }
}
