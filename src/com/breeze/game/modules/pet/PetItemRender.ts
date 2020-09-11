module qmr {
	export class PetItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public img_head:eui.Image;
public txt_name:eui.Label;
public txt_state:eui.Label;
public t:eui.Label;
public txt_gain:eui.Label;
public txt_left:eui.Label;
public txt_total:eui.Label;
public txt_leftTime:eui.Label;
public txt_todayGained:eui.Label;
public txt_todayCanGain:eui.Label;
public txt_totalLeft:eui.Label;


        private _endTime:number = 0;
		private _timekey:number = -1;
		
		public constructor()
		{
			super();
			this.skinName = "PetItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
        }

		public dataChanged(): void {
            let t = this;
            let info:PetActorInfo = t.data;
            if(info){
                let cfg:PetCfg = ConfigManager.getConf(ConfigEnum.PET, info.fishId);
                t.txt_name.text = cfg.name + "(Lv." + cfg.level + ")";
                t.txt_gain.text = Number(info.extMoney.toFixed(4)) + HeroModel.KH;//鱼生累计已经产出金币,包括遗漏的
                let left:number = cfg.produce - info.extMoney;
                t.txt_left.text = Number(left.toFixed(4)) + HeroModel.KH;
                t.txt_total.text = cfg.produce+"";

                t.txt_totalLeft.text = Number(info.leftMoney.toFixed(4))+ HeroModel.KH;//鱼生累计遗漏未领取金币
                t.txt_todayGained.text = Number(info.todayGotMoney.toFixed(4)) + HeroModel.KH;//今日已经领取金币
                t.txt_todayCanGain.text = Number(info.todayCurMoney.toFixed(4)) + HeroModel.KH;//今日当前可领取金币
                
                var itemRes:string = ResPathUtilAft.getHeadUrl(cfg.id+"");
                t.img_head.source = itemRes;
                t.txt_state.text = t.getState(info.state);

                let totalSeconds:number = cfg.limitTime * 3600 * 2;//一条鱼总共生产的周期
                let dayProduce:number = cfg.produce / cfg.limitTime;//每天的产量
                let secondProduce:number = dayProduce / 2 / 3600;//每秒的产量
                let produceedSeconds:number = info.extMoney / secondProduce;//这条鱼已经生产了多少秒
                let leftSeconds:number = totalSeconds - produceedSeconds;//这条鱼还剩余的生产时间 秒
                let produceedHours:number = Math.floor(leftSeconds/ 3600);//已经还剩余多少小时
                let dayCount:number = Math.ceil(produceedHours / 2);//两个小时为一天，这条鱼还剩下多少天,向上取整，比如剩余3.5天取4天
                let totalLeftSeconds:number = dayCount * 24 * 3600 - produceedSeconds % 7200;

                
                if(totalLeftSeconds > 0){
                    t._endTime = ServerTime.serverTime + totalLeftSeconds * 1000;
                }
            }

            if (t._timekey != -1){
                egret.clearInterval(t._timekey);
            }

            if(t._endTime < ServerTime.serverTime){
				t._endTime = 0;
			}

			if(t._endTime > ServerTime.serverTime){
				t.txt_leftTime.text = TimeUtil.formatRemain4((t._endTime - ServerTime.serverTime)/1000);
				t._timekey = egret.setInterval(t.updateTime, t, 1000);
			} else {
				t.stopTime();
			}
        }

        private updateTime(){
			let t = this;
			if(this._endTime < ServerTime.serverTime){
				t.txt_leftTime.text = "00：00";
				return;
			}
			t.txt_leftTime.text = TimeUtil.formatRemain4((t._endTime - ServerTime.serverTime)/1000);
		}

        private stopTime(): void
		{
			let t = this;
			if (t._timekey != -1){
				egret.clearInterval(t._timekey);
			}
			t._timekey = -1;
			t.txt_leftTime.text = "00：00";
		}

        
        private getState(s):string
        {
            //状态，0生产中，1停产中,2已过期
            let msg:string;
            switch(s){
                case 0:
                    msg = "生产中"
                    break;
                case 1:
                    msg = "停产中"
                    break;
                case 2:
                    msg = "已过期"
                    break;
            }
            return msg;
        }

	}
}