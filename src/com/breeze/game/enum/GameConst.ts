

//技能归属类别
enum SkillsBelongingtType
{
	ZUO_JI = 1,//坐骑
	CHI_BANG = 2,//翅膀
	GUANG_HUAN = 3,//光环
	JIN_SHEN = 4,//金身
	SHOU_HU = 6,//灵宠
}

//武将激活类型
enum SlotActivateType
{
	HAS_ACTIVATE = 0,	//已激活
	CAN_ACTIVATE = 1,	//可激活
	NOT_ACTIVATE = 2	//不能激活
}

//卡牌品质类型  加上开始和结束用于遍历品质
enum CardQualityType
{
	QUALITY_TYPE_start = 1,
	QUALITY_TYPE_2 = 2,	//绿色
	QUALITY_TYPE_3 = 3,	//蓝色
	QUALITY_TYPE_4 = 4,	//紫色
	QUALITY_TYPE_5 = 5,	//橙色
	QUALITY_TYPE_6 = 6,	//红色
	QUALITY_TYPE_End,
}

//悬赏任务品质类型
enum EquipQualityType
{
	QUALITY_TYPE_WHITE = 1,//白色
	QUALITY_TYPE_GREEN = 2,	//绿色
	QUALITY_TYPE_BLUE = 3,	//蓝色
	QUALITY_TYPE_PURPLE = 4,	//紫色
	QUALITY_TYPE_ORANGE = 5,	//橙色
	QUALITY_TYPE_RED = 6	//红色
}

//悬赏任务品质类型
enum RewardQualityType
{
	QUALITY_TYPE_GREEN = 1,	//绿色
	QUALITY_TYPE_BLUE = 2,	//蓝色
	QUALITY_TYPE_PURPLE = 3,	//紫色
	QUALITY_TYPE_ORANGE = 4,	//橙色
	QUALITY_TYPE_RED = 5	//红色
}

//英雄品质类型
enum HeroQualityType
{
	TYPE_2 = 2, //绿色
	TYPE_3 = 3,	//蓝色
	TYPE_4 = 4,	//紫色
	TYPE_5 = 5,	//橙色
	TYPE_6 = 6,	//红色
	
}

//技能类型
enum SkillType
{
	PUTONG = 1,		//1普通技能
	GAILV = 2,		//2概率性技能
	NENGLIANG = 3 	//3能量型技能
}

//武将排序类型
enum SlotSortType
{
	FIGHTING_TYPE = 0,	//战力
	QUALITY_TYPE = 1,	//品质
	TYPE_TYPE = 2,		//类型升序
	QUALITY_TYPE_UP = 3		//类型降序
}
/**武将类型枚举*/
enum WarriorType
{
	ROLE_WARRIOR = 1, //主角武将
	OTHER_WARRIOR = 2, //其他武将
}
/**武将战斗类型枚举*/
enum WarriorBattleType
{
	WARRIOR_ALL = 0, //全部
	WARRIOR_JZ_G = 1, //近战攻击型
	WARRIOR_BF = 2, //爆发型
	WARRIOR_FY = 3, //防御型
	WARRIOR_FS = 4, //法术型
	WARRIOR_FZ = 5 //辅助型
}

//装备部位常量
enum EquipPart
{
	WEAPON = 1,				//武器
	HELMET = 2,				//头盔
	NECKLACE = 3,			//项链             
	CUIRASS = 4,            //胸甲
	GLOVE = 5,               //手套
	SHOES = 6,				//鞋子
	RING = 7,				//戒指
	ACCESSORIES = 8       	//饰品
}

//属性枚举
enum Attribute
{
	HP = 1,   //生命          
	ATTACK = 2,  //攻击
	DEFENSE = 3,//防御
	HIT = 4,//命中
	DODGE = 5,//闪避
	CRIT = 6,//暴击
	DEFCRIT = 7,//抗暴
	SPEED = 8,//速度
	DUNT = 9,//重击
	BLOCK = 10,//格挡
	PENETRATE = 11,//穿透
	TOUGHNESS = 12//韧性

}

/**道具大类型bigType*/
enum ItemBigType
{
	COMMON = 1, //普通道具材料
	GIFT = 2, //包裹
	GOD = 3, //神将
	GOD_PIECE = 4,//神将碎片
	EQUIP = 5,//装备
	BOOK = 7,//经书
	PRACTICE = 10,//修行道具
	CURRENCY = 100//货币
}

/** 指定道具装备固定位置 */
enum ItemAttType
{
	Type_1 = 1, //武器
	Type_2 = 2, //头盔
	Type_3 = 3, //项链
	Type_4 = 4, //胸甲
	Type_5 = 5, //
	Type_6 = 6, //
	Type_7 = 7, //
	Type_8 = 8, //
}

/** 道具表subType[装备系统] */
enum EquipType
{
	CAN_BREAK_TYPE = -1,//背包可熔炼的(1,3,4,7,8)         
	COMMON_EQUIP = 1,//普通装备          
	GOAL_EQUIP = 2,  //神装
	HORSE_EQUIP = 3, //坐骑装备
	WING_EQUIP = 4,  //翅膀装备
	AUNE_EQUIP = 5,  //符文佩戴
	BATTLE_EQUIP = 6,  //战装
	SHUGO_EQUIP = 7,  //灵宠
	HALO_EQUIP = 8, //光环
}

//货币常量
enum CoinType
{
	/**金币*/
	JINBI = 1,
	/**元宝*/
	YUANBAO = 2,
	/**武将经验池*/
	EXP_POOL = 3,
	/**个人帮贡*/
	GUILD_DONATE = 4,
	/**竞技荣誉 */
	AREAN_HONOR = 6,
	/**鬼王试炼积分 */
	DEMON_SOCRE = 7,
	/**修行碎片 */
	PRACTICE = 8,
	/**绑元 */
	BANGYAUN = 9,
	/**宝塔碎片 */
	TOWERCHIP = 10,
	/**幸运积分 */
	LUCKYSCORE = 11,
	/**南天门积分 */
	NTM_SCORE = 12,
	/**仙晶 */
	MINE_SCORE = 13,
	/**友情值 */
	FRIEND_SCORE = 14,
	/**刀币值 */
	ABIHELL_SCORE = 15,
	/**将魂值 */
	WARRIOR_SOUL = 16
}

//战斗特效播放位置,UI层特效无需此值
enum EffectPosition
{
	CARD_BOTTOM = 0,		//边框下，特效低于边框
	CARD_OVER = 1,			//边框上，特效在边框和人物之间
	CARD_FRONT = 2,			//卡牌上，特效高于卡牌和人物
	CARD_TOP = 3,			//不在卡牌上，在场景之上，特效高于物体层级
}


//角色类型
enum ActorType
{
	HERO = 0,			//我方
	MONSTER = 1,		//敌方
	BOSS = 2,			//敌方BOSS
	DROP = 3			//掉落物
}

//技能动作类型
enum SkillActionType
{
	ACTION_1 = 1,//移动到目标位置攻击
	ACTION_2 = 2,//突现到目标位置
	ACTION_3 = 3,//远程，子弹飞行攻击
	ACTION_4 = 4,//远程，天降技能，同时受击
	ACTION_5 = 5,//远程，天降技能，中心受击之后，外网再次受击
	ACTION_6 = 6,//远程闪攻击，目标依次受击
	ACTION_7 = 7,//治疗，仅仅有施法，治疗受击
	ACTION_8 = 8,//远程，暴风雪在2和5、8和11之间释放一个效果
	ACTION_9 = 9,//远程，暴风雪在2和5、8和11之间释放一个效果
	ACTION_10 = 10,//远程，暴风雪在2和5、8和11之间释放一个效果,没有角度
	ACTION_11 = 11,//远程，从受击目标对面垂直飞行过来攻击
	ACTION_12 = 12,//远程，播放一个弹道效果从己方外面，飞行到对面界面外
	ACTION_13 = 13,//远程，子弹连发,多段攻击
}

//敌我阵营
enum CampType
{
	FOE = 0,		//敌方
	OUR = 1,		//我方
}

//特效常量
enum EffectConst
{
	ACTOR_DIE_EFFECT = 3007, 	//卡牌死亡特效
	VICOTYR_EFFECT = 8027,		//胜利效果
	HALO_SHUI = 100,		//粒子
	HALO_SHUIDI = 101,		//水底
	CHANGE_HERO_EFFECT = 102,//测试用切换卡牌特效
	CARD_QUALITY_EFFECT_6000 = 6000,	//卡牌边框特效_紫色
	CARD_QUALITY_EFFECT_6001 = 6001,	//卡牌边框特效_橙色
	CARD_QUALITY_EFFECT_6002 = 6002,	//卡牌边框特效_红色

	CARD_QUALITY_EFFECT_6005 = 6005,	//卡牌边框怒气特效
	CARD_QUALITY_EFFECT_6006 = 6006,	//卡牌边框进度条怒气

	HALO_SKILL_6006 = 6006, 		 	//普通大招_蓝白爆点
	HALO_SKILL_6007 = 6007, 		 	//羁绊大招_橙红爆点

	hang_skill_13004 = 13004,			//挂机男主角施法怪物受击特效
	hang_skill_13005 = 13005,			//挂机男主角施法特效1
	hang_skill_13006 = 13006,			//挂机男主角施法特效2
	hang_skill_13007 = 13007,			//挂机男主角施法怪物受击特效
	hang_skill_13008 = 13008,			//挂机女主角施法特效1
	hang_skill_13009 = 13009,			//挂机女主角施法特效2


	/** 。。。。。。。。。。以下暂未用到。。。。。。 */

	BIG_SELECT_EFFECT = 40107, //大一点的选中框
	AUTO_FIGHT_EFFECT = 8001, //自动战斗特效
	SMALL_SELECT_EFFECT = 40106, //小一点的选中框
	LEVELUP_EFFECT = 8002,		//升级特效
	CLICK_EFFECT = 8003,			//点击特效
	TASK_COMPLETE_EFFECT = 8004,	//任务完成特效
	MELT_EFFECT = 8005,			//熔炼特效
	STRENGTH_EFFECT = 8051,		//强化成功
	UPSTAR_EFFECT = 8051,			//升星成功
	JINGJIE_EFFECT = 8051,	//进阶成功
	UP_PING_EFFECT = 8051,		//升品成功
	SKILL_ADD_EFFECT = 8021,	//技能突破和激活成功特效
	SKILL_UPGRADE = 8022,       //技能升级成功特效
	TASK_AWARD_EFFECT = 8023,		//任务可领取奖励特效
	TASK_CLICK_EFFECT = 8024,		//任务的点击特效
	BOX_AWARD_EFFECT = 8025,		//宝箱可领取状态特效
	ICON_SELECT_EFFECT = 8026,		//icon选中效果

	GREEN_HANDER = 8028,		//手指点击效果
	TASK_DONE = 8029,				//新艘任务完成效果
	TOUCH_BTN = 8030,              //缠绵按钮特效
	CANTOUCH_EFFECT = 8031,        //可缠绵特效
	PRESENTGIFT_EFFECT = 8032,     //送礼成功特效
	GOLD_EFFECT = 8033,				//摇钱树特效
	PETALSFLY_EFFECT = 8034,        //花瓣飘飞特效
	BEAUTYFIT_EFFECT = 8035,        //美人合体特效
	MARTIAL_EFFECT = 8040,          //武学升级特效
	TAOBAO_WEAPON1 = 8041,			//淘宝武器1特效
	TAOBAO_WEAPON2 = 8042,			//淘宝武器2特效
	TAOBAO_WEAPON3 = 8043,  			//淘宝武器3特效
	PROGRESS_EFFECT = 8044,  			//进度条特效
	CAVALRY_EFFECT = 8045,			//骑兵特效
	INTERACTION_EFFECT = 8046,			//互动特效
	SKILL_SINGLE_UP = 8047,				//单个技能升级特效
	BEAUTY_LIKE_EFFECT = 8048,			//好感度增加特效
	ANSWER_EFFECT = 8049,                //答题正确特效
	INTERACTION_OPERA_EFFECT = 8050,      //互动按钮可操作时特效
	STONE_EFFECT = 8051,					//装备宝石升级特效
	TURNSTAR_EFFECT = 8052,				//美人转身五角星特效
	RELIVE_EFFECT = 9009				//复活特效
}

/**背包分页枚举*/
enum EnumBackpackLabel
{
	PROPS = 0,//道具
	WARRIOR = 1,//神将
	EQUIP = 2,//装备
	ANNE = 3,//命魄
	FABAO = 4,//法宝
	BOOK = 5,//秘籍
}

enum EnumBagDecomposePage {
	EQUIP = 0,//装备
	WARRIOR = 1,//神将
	ANNE = 2,//命魄
	HERO_REBORN = 3,//神将重生
	FABAO_REBORN = 4,//法宝重生
}

/**背包道具使用效果类型效果类型*/
enum ItemEffectType
{
	type1 = 1,//1-角色加经验 
	type2,//2-角色加金币：
	type3,//3-激活武将：
	type4,//4-增加武将经验池：
	type5,//5-增加装备祝福值：
	type6,//6-礼包开启获得道具：
	type7,//7-增加VIP经验：
	type8,//8-增加降妖除魔积分（增益）：
	type9,//9-月卡激活道具：
	type10,//10-投资基金激活道具：
	type11,//11-增加累计充值及元宝：
	type12,//12-进阶直升丹
	type15 = 15,//15-进阶直升丹
}

/**背包道具使用类型*/
enum ItemUseType
{
	type1 = 1,//1-进阶系统
}

//排行类型，对应 k开服活动.xlsx
enum RankType
{
	TYPE_1 = 1,//1 坐骑榜
	TYPE_2 = 2,//2 翅膀榜
	TYPE_3 = 3,//3 灵宠榜
	TYPE_4 = 4,//4 辟魔圈榜
	TYPE_6 = 6,//6 等级榜
	TYPE_7 = 7,//7 全服战力榜
	TYPE_8 = 8,//8 竞技场战力榜
	TYPE_12 = 12,//12 神将排行榜
	TYPE_14 = 14,//14 充值排行榜
	TYPE_15 = 15,//15 挑战关卡排行榜
	TYPE_16 = 16,//16 龙宫消费排行榜
	TYPE_17 = 17,//17 法宝排行榜
}

//副本类型
enum CopyType
{
	TYPE_1 = 1,    		//1挂机
	TYPE_2 = 2,			//2挑战BOSS
	TYPE_3 = 3,			//3个人BOSS
	TYPE_4 = 4,			//4世界BOSS
	TYPE_5 = 5,			//5野外BOSS
	TYPE_6 = 6,			//6BOSS之家
	TYPE_7 = 7,			//7地狱塔
	TYPE_8 = 8,			//8封妖【日常任务】
	TYPE_9 = 9,			//9帮派boss
	TYPE_10 = 10,		//10降妖除魔
	TYPE_11 = 11,		//11每日副本
	TYPE_12 = 12,		//12帮派副本
	TYPE_13 = 13,		//13鬼王试炼
	TYPE_14 = 14,		//14跨服组队
	TYPE_15 = 15,		//15至尊塔
	TYPE_16 = 16,		//16帮派战副本
	TYPE_19 = 19,		//19组队副本2
	TYPE_20 = 20,		//玲珑塔
	TYPE_21 = 21,		//神将挑战
	TYPE_23 = 23,		//全服boss
	TYPE_24 = 24,		//神将副本
	TYPE_25 = 25,		//矿战
	TYPE_29 = 29,		//帮会喂养boss
	
	
	TYPE_101 = 101,		//PVP:101护送任务抢夺
	TYPE_102 = 102,		//PVP:102护送任务復仇
	TYPE_103 = 103,      //PVP:103竞技场
	TYPE_104 = 104,      //PVP:104天梯
	TYPE_105 = 105,		//帮派战 攻占(y有守城帮派)
	TYPE_106 = 106,		//排行榜切磋操作
	TYPE_107 = 107,		//南天门的PVP战斗
	TYPE_108 = 108,		//九天仙脉打战领者PVP
	TYPE_109 = 109,		//阿鼻地狱pvp
	TYPE_110 = 110,		//巅峰争霸赛
	TYPE_111 = 111		//三界争霸赛
}

//特殊副本，目前用来控制PVP副本，是否能跳过，加速
enum InstanceIdType
{
	JING_JI_CHANG = 1,//竞技场
	TIAN_TI = 2,//天梯
	NTM = 4,//南天门
	MINE_PVE = 5,
	MINE_PVP = 6,
	ABIHELL = 7,
	CROSS_PK_GAME = 8,//巅峰争霸赛
	GUILD_WAR = 9//三界争霸赛
}

//属性常量 1表示生命、2表示攻击、3表示防御、4命中、5闪避、6暴击、7抗暴、8速度、9重击、10格挡、11穿透、12韧性、13暴击伤害值、14会心伤害值
enum AttributeConst
{
	Hp = 1,				//生命
	Attack = 2,			//攻击
	Defense = 3,		//防御
	Hit = 4,			//命中
	Dodge = 5,			//闪避
	Crit = 6,			//暴击
	CritDeffence = 7,	//抗暴
	Speed = 8,			//速度
	Dunt = 9,			//重击
	Block = 10,			//格挡
	PvpHurt = 11,		//穿透    //PVP增伤
	PvpAvoidHurt = 12,	//韧性    //PVP减伤
	hitRate = 14,       //命中率
	dodgeRate = 15,     //闪避率
	critRate = 16,      //暴击率
	critDefRate = 17,   //抗暴率
	critMultRate = 18,  //暴击倍率
	critHurt = 19,		//暴击伤害
	heartRate = 20,     //会心率
	heartDefRate = 21,  //会心抵抗
	heartMultRate = 22, //会心倍率
	heartHurt = 23,		//会心伤害
	hurtRate = 24,      //伤害加深
	avoidHurtRate = 25, //伤害减免

	hpAllRate = 26,			//生命百分比
	attackAllRate = 27,		//攻击百分比
	defenceAllRate = 28,		//防御百分比
	hitAllRate = 29,			//命中百分比
	dodgeAllRate = 30,		//闪避百分比
	critAllRate = 31,		//暴击百分比
	critDeffenceAllRate = 32,//抗暴百分比
	speedAllRate = 33,		//速度百分比
	duntAllRate = 34,		//重击百分比
	blockAllRate = 35,		//格挡百分比
	pvpHurtAllRate = 36,		//穿透百分比
	pvpAvoidHurtAllRate = 37,//韧性百分比

	allCount,//用于外部循环

}

/** 主界面上面，货币显示类型 */
enum MainTopType
{
	defaultType = 1, 	//默认类型
	guildType = 2, 		//帮贡类型
	honorType = 3,      //竞技荣誉
	scoreType = 4,       //积分道具(鬼王试炼)
	ntmType = 5,
	mineType = 6,
	abihType = 7
}

/** 进阶属性丹，类型 1坐骑 2翅膀 3光环*/
enum BlessPillType
{
	ZUO_JI = 1, 	//1坐骑
	CHI_BANG = 2, 	//2翅膀
	GUANG_HUAN = 3, //3光环
	SHUGO = 6, 		//4灵宠
}

/** 进阶丹药类型 1潜能丹,2神能丹*/
enum PillType
{
	QIAN_NENG = 1, 	//1潜能丹
	SHEN_NENG = 2, 	//2神能丹
}

/** 战斗时间缩放*/
enum TimeScale
{
	scale_1 = 1,//1倍速
	scale_2 = 1.5,//1.5倍速
	scale_3 = 2,//2倍速
}

/** 播放倍率，展示用，与上面对应 */
enum TimeRate
{
	rate_1 = 1,//1倍速
	rate_2 = 2,//2倍速
	rate_3 = 3,//3倍速
}

//颜色值常量
enum ColorConst
{
	COLOR_WHITE = 0xffffff,	//白色
	COLOR_BLACK = 0x0,		//黑色
	COLOR_VIOLET = 0xff00ff,	//淡紫色
	COLOR_PURPLE = 0xA020F0,//紫色
	COLOR_GREEN = 0x00ff00,	//翠绿色
	COLOR_CADMIUM = 0xFF9000, //镉黄色
	COLOR_RED = 0xFF0000,		//红色
	COLOR_BLUE = 0x2289fe,		//孔雀蓝
	COLOR_SKILL = 0x00FFFF,   //技能名字前面的描述

	//游戏用到颜色枚举
	COMMON_GREEN = 0x05a80d, //绿色
	COMMON_GREEN2 = 0x178947,//绿色
	COMMON_BROWN = 0x5a2e2b, //褐色
	COMMON_BULE = 0x489bc2,  //蓝色
	COMMON_YELLOW = 0xfefc94,  //黄色
	COMMON_BR = 0x803f07,//棕色
	COMMON_BR2 = 0x926b47,//浅棕色
	COMMON_ORANGE = 0xef5500,//橙色
	COMMON_WHITE = 0xffffff,//白色
	COMMON_RED = 0xdd1900,//红色
	COMMON_PURPLE = 0x9328c1,//紫色
	COMMON_BLUE1 = 0x2b9bcf,//蓝色


}

enum PlatType
{
	WJ_PLAT = 100,	 	//玩匠平台
	QUICK_PLAT = 301,	//quicksdk渠道
	FUNCELL_PLAT = 302,	//好玩
	TIANTUAN_PLAT = 303,  //天团
	YINGYONGBAO = 304,	  //应用宝
	AIWEIYOU_PLAT = 305,		//爱微游+疯狂
	QQ_ZONE_IOS = 306,			//QQ空间IOS
	QQ_ZONE_ANDRIOD = 307,		//QQ空间安卓
	QQ_BROWSER = 308,				//QQ浏览器
	JINGBANG_PLAT = 309,			//金榜渠道
	OTHER_PLAT = 401,				//混服
	WANZHUI_PLAT = 501,			//玩醉
	YJ_PLAT = 601,				//易接SDK的
	MY_PLAT = 1000          //米娱
}

// 新手保护等级
enum NewHandProtected
{
	LEVEL = 30
}

//支付渠道
enum PayType
{
	QUICK_H5 = 1,					//quicksdk渠道
	ALIPAY = 2,					//阿里支付
	WEIXINPAY = 3					//微信支付
}

//神装枚举
enum GodEquipTypes
{
	GOD_EQUIP = 1,   //神装        
	GOD_SPIRIT = 2,  //注灵
	GOD_SUIT = 3  //套装
}

enum ItemLocation
{
	BAG_LIST = 0,//背包
	PUT_ON = 1,//穿戴
}
