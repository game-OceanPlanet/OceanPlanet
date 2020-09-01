module qmr
{
	export class MapCfg extends BaseBean
	{
		/**地图ID*/
	get mapId():number
	{			
		return this.d["mapId"];			
	}
	/**循环次数    (循环计算：①单波BOSS的 高度要有2000  ②无限重复的挂机地图 高度需要2000  ③3/4/5波怪的这种 需要配置BOSS地图+循环地图 总长度 超过2700，不要太长否则跑动的时间会增加）*/
	get bgRetimes():string
	{			
		return this.d["bgRetimes"];			
	}
	/**图片高度（美术输出的分辨率宽 和 高，750*1334 则填写1334，多张图用“|”隔开）*/
	get bgHeight():string
	{			
		return this.d["bgHeight"];			
	}
	/**资源名字1（支持配置多张地图，前面是循环图，BOSS是特殊图。多个地图用“|"隔开）*/
	get bgNames():string
	{			
		return this.d["bgNames"];			
	}
	/**几波怪物的出生点，总长度的X%处出生，配置多波怪物用"|"分开*/
	get labelsEvent():string
	{			
		return this.d["labelsEvent"];			
	}
	/**背景类型:
0：循环X波，出生点配置3个，3波怪
1：挂机场景，一直循环
2：一张背景图不循环，用于BOSS副本单关卡*/
	get bgType():number
	{			
		return this.d["bgType"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="mapId";
		}
	}

	export class InstanceCfg extends BaseBean
	{
		/**关卡ID
挂机副本-1001-2000
BOSS-2001-3000
副本-3001-5000
挑战BOSS-5001-15000
符文塔-15001-16000
巡山任务17001-18000
护送任务18001-19000
日常副本19001-20000*/
	get instanceId():number
	{			
		return this.d["instanceId"];			
	}
	/**类型 1挂机  2挑战BOSS 3个人BOSS 4世界BOSS 5野外BOSS 6BOSS之家 7地狱迷宫 8巡山任务本 9帮会迷宫 10降妖除魔 11日常副本 12帮派守护 13鬼王试炼 14跨服组队 15至尊塔 16帮派战 17剧情 18跨服BOSS 19组队副本2  20大雁塔   21神将挑战   22.奇遇BOSS 23全服BOSS 24神将副本 103pvp竞技场 104天梯 106切磋 107南天门 108九天仙脉pvp 26新组队副本 25九天仙脉打BOSS 109阿鼻地狱 110巅峰争霸赛 111三界争霸 27跨服BOSS 22帮派任务缉拿逃犯 29帮派BOSS*/
	get type():number
	{			
		return this.d["type"];			
	}
	/**子类型（0=普通本，1=困难本，2精英本）（若类型为8，则1=绿品，2=蓝品，3=紫品，4=金品，5=红品）；若类型为11，则0=金币本、1=经验本、2=坐骑本、3=翅膀本、4=光环本、5=守护本、6=锻造副本、7=神将突破副本、8=神将觉醒副本）（若类型为18，1=水神公工2=火神祝融
若类型为3，则 1=VIP权限 2=月卡权限*/
	get subType():number
	{			
		return this.d["subType"];			
	}
	/**是否跨服（包括连服）0否 1是*/
	get isCross():number
	{			
		return this.d["isCross"];			
	}
	/**顺序*/
	get seq():number
	{			
		return this.d["seq"];			
	}
	/**章节ID*/
	get chapterId():number
	{			
		return this.d["chapterId"];			
	}
	/**名字*/
	get name():string
	{			
		return this.d["name"];			
	}
	/**副本战斗显示名称*/
	get copyTitle():string
	{			
		return this.d["copyTitle"];			
	}
	/**每日免费次数*/
	get freeTimes():number
	{			
		return this.d["freeTimes"];			
	}
	/**每日次数上限*/
	get playTimes():number
	{			
		return this.d["playTimes"];			
	}
	/**推荐人数*/
	get recommendNum():number
	{			
		return this.d["recommendNum"];			
	}
	/**推荐战力*/
	get fightValue():number
	{			
		return this.d["fightValue"];			
	}
	/**次数不足消耗道具 道具id,数量;道具id2,数量2*/
	get needItem():string
	{			
		return this.d["needItem"];			
	}
	/**回合数上限*/
	get maxRound():number
	{			
		return this.d["maxRound"];			
	}
	/**展示奖励*/
	get showReward():string
	{			
		return this.d["showReward"];			
	}
	/**首次胜利奖励 掉落ID*/
	get firstRewardId():string
	{			
		return this.d["firstRewardId"];			
	}
	/**开启扫荡等级*/
	get wipeLevel():number
	{			
		return this.d["wipeLevel"];			
	}
	/**vip等级
帮派迷宫和帮派守护的用作帮派等级判断操作*/
	get vipLevel():number
	{			
		return this.d["vipLevel"];			
	}
	/**是否是月卡*/
	get monthCard():number
	{			
		return this.d["monthCard"];			
	}
	/**适配等级*/
	get suitLevel():number
	{			
		return this.d["suitLevel"];			
	}
	/**最小等级*/
	get minLevel():number
	{			
		return this.d["minLevel"];			
	}
	/**继续挑战的要求，格式：type,star;type,star...
1、上一章节的星级
2、上一关的星级*/
	get needStar():string
	{			
		return this.d["needStar"];			
	}
	/**地图ID*/
	get mapId():number
	{			
		return this.d["mapId"];			
	}
	/**3星奖励 归属奖励*/
	get rewardId3():string
	{			
		return this.d["rewardId3"];			
	}
	/**怪物总共波次*/
	get totelSep():number
	{			
		return this.d["totelSep"];			
	}
	/**剧情任务id*/
	get plotTask():number
	{			
		return this.d["plotTask"];			
	}
	/**是否开启加速，跳过（不填不开启，填1开启）*/
	get isCanSkipSpeed():number
	{			
		return this.d["isCanSkipSpeed"];			
	}
	/**1*/
	get music():string
	{			
		return this.d["music"];			
	}
	/**满足X级后显示*/
	get showLevel():number
	{			
		return this.d["showLevel"];			
	}
	/**满足X级后不显示*/
	get noShowLevel():number
	{			
		return this.d["noShowLevel"];			
	}
	/**功能开启ID*/
	get funId():number
	{			
		return this.d["funId"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="instanceId";
		}
	}

	export class ChapterCfg extends BaseBean
	{
		/**章节ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**类型 1挂机  2挑战BOSS 3个人BOSS 4世界BOSS 5野外BOSS 6BOSS之家 7阎王殿 8巡山任务本 9帮派BOSS 10西行之路 11日常副本*/
	get type():number
	{			
		return this.d["type"];			
	}
	/**章节的挂机战斗场景地图*/
	get map():number
	{			
		return this.d["map"];			
	}
	/**小地图ID*/
	get bgRes():string
	{			
		return this.d["bgRes"];			
	}
	/**需要等级*/
	get minLevel():number
	{			
		return this.d["minLevel"];			
	}
	/**章节奖励*/
	get rewardId():number
	{			
		return this.d["rewardId"];			
	}
	/**1星奖励*/
	get rewardId1():number
	{			
		return this.d["rewardId1"];			
	}
	/**2星奖励*/
	get rewardId2():number
	{			
		return this.d["rewardId2"];			
	}
	/**3星奖励*/
	get rewardId3():number
	{			
		return this.d["rewardId3"];			
	}
	/**背景音*/
	get music():string
	{			
		return this.d["music"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class InstanceMonsterCfg extends BaseBean
	{
		/**副本id*/
	get instanceId():number
	{			
		return this.d["instanceId"];			
	}
	/**波次*/
	get seq():number
	{			
		return this.d["seq"];			
	}
	/**位置1的怪物ID*/
	get monsterId1():number
	{			
		return this.d["monsterId1"];			
	}
	/**位置2的怪物ID*/
	get monsterId2():number
	{			
		return this.d["monsterId2"];			
	}
	/**位置3的怪物ID*/
	get monsterId3():number
	{			
		return this.d["monsterId3"];			
	}
	/**位置4的怪物ID*/
	get monsterId4():number
	{			
		return this.d["monsterId4"];			
	}
	/**位置5的怪物ID*/
	get monsterId5():number
	{			
		return this.d["monsterId5"];			
	}
	/**位置6的怪物ID*/
	get monsterId6():number
	{			
		return this.d["monsterId6"];			
	}
	/**是否展示BOSS来袭*/
	get isShowBossGo():number
	{			
		return this.d["isShowBossGo"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="instanceId_seq";
		}
	}

	export class MonsterCfg extends BaseBean
	{
		/**怪物id*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**名字*/
	get name():string
	{			
		return this.d["name"];			
	}
	/**怪物等级*/
	get level():number
	{			
		return this.d["level"];			
	}
	/**头像*/
	get headIcon():number
	{			
		return this.d["headIcon"];			
	}
	/**品质*/
	get quality():number
	{			
		return this.d["quality"];			
	}
	/**属性ID*/
	get propId():number
	{			
		return this.d["propId"];			
	}
	/**携带技能 技能id1,技能id2,技能id3*/
	get skillIds():string
	{			
		return this.d["skillIds"];			
	}
	/**怪物类型 0小怪 1精英 2boss 3机器人*/
	get type():number
	{			
		return this.d["type"];			
	}
	/**显示ode*/
	get showModel():number
	{			
		return this.d["showModel"];			
	}
	/**战斗类型*/
	get battleType():number
	{			
		return this.d["battleType"];			
	}
	/**资源类型*/
	get resType():number
	{			
		return this.d["resType"];			
	}
	/**尺寸类型*/
	get sizeType():number
	{			
		return this.d["sizeType"];			
	}
	/**出场方式*/
	get enter():string
	{			
		return this.d["enter"];			
	}
	/**是否播放怒气技能横幅效果:0或者不填不展示，1为展示*/
	get isPlayAngerSkill():number
	{			
		return this.d["isPlayAngerSkill"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class HangUpCfg extends BaseBean
	{
		/**挑战BOSS副本id*/
	get hangUpBossId():number
	{			
		return this.d["hangUpBossId"];			
	}
	/**关卡boss默认波次*/
	get num():number
	{			
		return this.d["num"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="hangUpBossId";
		}
	}

	export class HangUpRewardCfg extends BaseBean
	{
	
		constructor(element)
		{				
			super(element)
		this.key="seq";
		}
	}

	export class LogoutRewardCfg extends BaseBean
	{
		/**关卡（弃用）*/
	get seq():number
	{			
		return this.d["seq"];			
	}
	/**离线经验 每分钟*/
	get exp():number
	{			
		return this.d["exp"];			
	}
	/**离线金币 每分钟*/
	get money():number
	{			
		return this.d["money"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="seq";
		}
	}

	export class XinHangUpCfg extends BaseBean
	{
		/**战斗地图ID*/
	get mapId():number
	{			
		return this.d["mapId"];			
	}
	/**名字*/
	get name():string
	{			
		return this.d["name"];			
	}
	/**挂机师徒四人位置高度，默认380*/
	get roadHeight():number
	{			
		return this.d["roadHeight"];			
	}
	/**挂机场景资源ID*/
	get mapResId():number
	{			
		return this.d["mapResId"];			
	}
	/**小怪模型（多个用,分隔）*/
	get showUiModel():string
	{			
		return this.d["showUiModel"];			
	}
	/**BOSS模型（多个用,分隔）*/
	get bossShowUiModel():string
	{			
		return this.d["bossShowUiModel"];			
	}
	/**遇怪时长（最小时间,最大时间）*/
	get time():string
	{			
		return this.d["time"];			
	}
	/**遇怪波数（最小波数,最大波数）*/
	get step():string
	{			
		return this.d["step"];			
	}
	/**背景音*/
	get music():string
	{			
		return this.d["music"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="mapId";
		}
	}

	export class ModelScaleCfg extends BaseBean
	{
		/**模型id*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**缩放比*/
	get scale():number
	{			
		return this.d["scale"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class CommonConfigCfg extends BaseBean
	{
		/**ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**参数*/
	get param():string
	{			
		return this.d["param"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class OutBossInspireCfg extends BaseBean
	{
		/**鼓舞等级*/
	get level():number
	{			
		return this.d["level"];			
	}
	/**消耗材料*/
	get cost():string
	{			
		return this.d["cost"];			
	}
	/**鼓舞buff：buffId1，buffId2*/
	get buffs():string
	{			
		return this.d["buffs"];			
	}
	/**描述*/
	get dec():string
	{			
		return this.d["dec"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="level";
		}
	}

	export class SkillEffectCfg extends BaseBean
	{
		/**技能效果ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**动效类型（
1.移动到目标位置攻击：普攻刀光。。
2.突现到目标位置：闪现突刺
3.远程，子弹飞行攻击：弹道
4.远程，天降技能，同时受击：群疗类，群体效果，所有目标都会播放一个单独的表现效果，同时播放受击效果
5.远程，天降技能，中心受击之后，外网再次受击（暂未测用）
6.远程，闪攻击，目标依次受击：闪电链
7.治疗，仅仅有施法，治疗受击：灵宠治疗
8.远程，暴风雪在2和5、8和11之间释放一个效果：远程AOE，特效表现在固定点
9.远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果：对固定点播放弹道效果，弹道（AOE）特效的方向 需要旋转
10.远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果（无角度）对固定点播放弹道效果，弹道（AOE）无方向，不需要旋转
11.远程，目标对应列下方飞出（男主飞剑技能）
12.远程，播放一个弹道效果从己方外面，飞行到对面界面外）：牛魔王的蛮牛冲，坐骑部分技能*/
	get action_type():number
	{			
		return this.d["action_type"];			
	}
	/**起手特效*/
	get cast_effect():number
	{			
		return this.d["cast_effect"];			
	}
	/**起手特效（持续播放时间）*/
	get cast_showTime():number
	{			
		return this.d["cast_showTime"];			
	}
	/**起手时间（多久之后播放表现特效）*/
	get cast_time():number
	{			
		return this.d["cast_time"];			
	}
	/**表现特效*/
	get show_effect():number
	{			
		return this.d["show_effect"];			
	}
	/**飞行速度，远程技能需要*/
	get speed():number
	{			
		return this.d["speed"];			
	}
	/**闪电链/远程AOE依次触发效果*/
	get orderly_effect():number
	{			
		return this.d["orderly_effect"];			
	}
	/**表现持续时间*/
	get show_durotion():number
	{			
		return this.d["show_durotion"];			
	}
	/**表现特效多久之后播放爆点的间隔时间*/
	get show_time():number
	{			
		return this.d["show_time"];			
	}
	/**多段伤害（针对远程技能技能13类型，多次表现,时间间隔：3,100:就是表现三次，每次间隔100毫秒）*/
	get multiTimes():string
	{			
		return this.d["multiTimes"];			
	}
	/**多段伤害（表现特效开始后爆伤害的时间，第一次伤害的权重；第二次爆伤害的时间，第二次伤害的权重。。。。）*/
	get multistage():string
	{			
		return this.d["multistage"];			
	}
	/**击中特效*/
	get hit_effect():number
	{			
		return this.d["hit_effect"];			
	}
	/**命中延迟（与show_time 共同控制多久后播放爆点）*/
	get hitDelay():number
	{			
		return this.d["hitDelay"];			
	}
	/**是否附带震屏效果*/
	get shake():number
	{			
		return this.d["shake"];			
	}
	/**震屏时间点*/
	get shakeTimePoint():number
	{			
		return this.d["shakeTimePoint"];			
	}
	/**震屏持续时间*/
	get shakeTime():number
	{			
		return this.d["shakeTime"];			
	}
	/**整个效果持续时长*/
	get node_duration():number
	{			
		return this.d["node_duration"];			
	}
	/**镜头缩放*/
	get cameraStartTime():number
	{			
		return this.d["cameraStartTime"];			
	}
	/**镜头聚焦之后持续时间*/
	get cameraWaitTime():number
	{			
		return this.d["cameraWaitTime"];			
	}
	/**聚焦时间*/
	get cameraScaleTime():number
	{			
		return this.d["cameraScaleTime"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class EffectDataCfg extends BaseBean
	{
		/**特效Id*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**特效引用资源hide*/
	get res():string
	{			
		return this.d["res"];			
	}
	/**播放次数hide*/
	get playTimes():number
	{			
		return this.d["playTimes"];			
	}
	/**播放位置*/
	get position():number
	{			
		return this.d["position"];			
	}
	/**缩放比*/
	get scale():number
	{			
		return this.d["scale"];			
	}
	/**位图模式*/
	get blendMode():number
	{			
		return this.d["blendMode"];			
	}
	/**是否是随机从某一帧播放*/
	get isRandomPlay():number
	{			
		return this.d["isRandomPlay"];			
	}
	/**音效*/
	get sound():string
	{			
		return this.d["sound"];			
	}
	/**是否需要垂直翻转*/
	get needOverturn():number
	{			
		return this.d["needOverturn"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

}