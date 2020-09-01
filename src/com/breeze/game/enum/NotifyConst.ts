module qmr
{
	/**
	 *
	 * @author coler
	 * @description 消息通知的常量,所有的消息通知常量都写在这里
	 *
	 */
	export class NotifyConst
	{

		public static TAB_VIEW_GUIDE: string = "TAB_VIEW_GUIDE";   							//TabView显示关闭引导
		public static RED_HOT_UPDATE:string = "RED_HOT_UPDATE";//红点系统更新通知

		/*-------------------------------武将选择--------------------------------------*/
		public static CHANGE_TABBAR: string = "CHANGE_TABBAR";    			//武将还原
		public static CHANGE_TABBAR_NEXT: string = "CHANGE_TABBAR_NEXT";    //武将切换下一个
		public static CHANGE_TABBAR_PRE: string = "CHANGE_TABBAR_PRE";      //武将切换上一个
		public static CHANGE_TABBAR_RED: string = "CHANGE_TABBAR_RED";    	//武将列表红点更新
		public static S_FORMATION_LIST: string = "S_FORMATION_LIST";    	//获取阵形列表

		/*-------------------------------新手引导--------------------------------------*/
		public static GUIDE_PLOT_MY_WARRIOR: string = "GUIDE_ADD_MY_WARRIOR";    			//我方上阵武将
		public static GUIDE_PLOT_EN_WARRIOR: string = "GUIDE_ADD_EN_WARRIOR";    			//敌方上阵武将
		public static GUIDE_PLOT_NEXT: string = "GUIDE_PLOT_NEXT";    						//新手剧情下一步
		public static GUIDE_PLOT_SKIP: string = "GUIDE_PLOT_SKIP";    						//新手剧情跳过开始战斗
		public static GUIDE_PLOT_FIGHT: string = "GUIDE_ADD_FIGHT";    						//开始战斗
		public static GUIDE_PLOT_FIGHT_ACCOUNT: string = "GUIDE_PLOT_FIGHT_ACCOUNT";    	//战斗结算
		public static GUIDE_AUTO_GOTO:string = "GUIDE_AUTO_GOTO";//新手自动执行步骤

		/*-------------------------------背包--------------------------------------*/
		public static S_GOODS_BREAK: string = "S_GOODS_BREAK";                              //分解
		public static S_UPDATE_BACKPACK_ITEM: string = "S_UPDATE_BACKPACK_ITEM";            //背包物品更新
		public static UPDATE_BACKPACK_NUM: string = "UPDATE_BACKPACK_NUM";            		//背包物品数量发生变化,刷红点用
		public static UPDATE_BACKPACK_NUM_FULL: string = "UPDATE_BACKPACK_NUM_FULL";        //背包物品数量满了刷新
		public static BACKPACK_USE_SUCC: string = "BACKPACK_USE_SUCC";        				//背包物品使用成功

		/*-------------------------------推荐阵容--------------------------------------*/
		public static C_GET_CONFIG_ZHENRONG: string = "C_GET_CONFIG_ZHENRONG";              //配置阵容
		public static S_GET_FIGHT_RANK_FORMATION_HERO_INFO: string = "S_GET_FIGHT_RANK_FORMATION_HERO_INFO";//排行阵容

		/*-------------------------------阵容--------------------------------------*/
		public static S_FORMATION_HERO_ON: string = "S_FORMATION_HERO_ON";                 	//槽位改变
		public static S_FORMATION_HERO_SWITCH: string = "S_FORMATION_HERO_SWITCH";          //阵容改变
		public static HERO_SWITCH_SUCCESS: string = "HERO_SWITCH_SUCCESS";          		//返回改变阵容成功
		public static HERO_SWITCH_ERROR: string = "HERO_SWITCH_ERROR";          			//返回改变阵容失败
		public static S_FORMATION_HERO_OFF: string = "S_FORMATION_HERO_OFF";                //下阵容了
		public static S_FORMATION_HERO_ON2: string = "S_FORMATION_HERO_ON2";                //上阵容了
		public static SELECT_EMBATTLE_CARD: string = "SELECT_EMBATTLE_CARD";                //选中或者取消选中武将库的卡牌了
		public static SELECT_DOWN_CARD: string = "SELECT_DOWN_CARD";                		//选中或者取消选中武将库的卡牌了,用于状态改变
		public static SELECT_BUZHEN_CARD: string = "SELECT_BUZHEN_CARD";                	//选中布阵武将库的卡牌
		public static SCROLL_BUZHEN_CARD: string = "SCROLL_BUZHEN_CARD";                	//滚动武将库的卡牌
		public static S_FORMATION_HERO_ON3: string = "S_FORMATION_HERO_ON3";                //武将上阵
		public static UPDATE_HERO_SELECTED:string = "UPDATE_HERO_SELECTED";

		/*-------------------------------武将--------------------------------------*/
		public static S_WARRIOR_ACTIVE: string = "S_WARRIOR_ACTIVE";                 	    //武将激活
		public static S_WARRIOR_LEVEL: string = "S_WARRIOR_LEVEL";                 			//武将升级
		public static S_WARRIOR_ADD: string = "S_WARRIOR_ADD";                 				//上阵新的武将(无->有)
		public static S_WARRIOR_UPDATE_WAKELEVEL: string = "S_WARRIOR_UPDATE_WAKELEVEL";    //武将觉醒等级改变


		/*-------------------------------武将升星-----------------------------------*/
		public static S_UPGRADE_HERO_STAR: string = "S_UPGRADE_HERO_STAR";                 	//武将升星
		public static S_UPGRADE_HERO_STAR_RED: string = "S_UPGRADE_HERO_STAR_RED";          //武将升星红点更新

		/*-------------------------------装备--------------------------------------*/
		public static S_EQUIPMENT_SLOT_INFO: string = "S_EQUIPMENT_SLOT_INFO";    //装备信息
		public static UPDATE_EQUIP_WEAR_STATUS = "UPDATE_EQUIP_WEAR_STATUS";//装备穿戴状态变更
		public static UPDATE_EQUIP: string = "UPDATE_EQUIP";    //装备状态变更
		public static UPDATE_HORSE_EQUIP: string = "S_HORSE_EQUIP_WEAR_STATUS_CHANGE";    //宠物装备穿戴状态变更
		public static S_GET_SUIT_COLLECT_INFO: string = "S_GET_SUIT_COLLECT_INFO";		//套装收集信息，没有参数更新所有，有参数更新某位置的

		/*-------------------------------主角--------------------------------------*/
		public static S_HERO_PROP_CHANGE: string = "S_HERO_PROP_CHANGE";    				//主角属性改变
		public static S_HERO_LEVEL_CHANGE: string = "S_HERO_LEVEL_CHANGE";    				//主角等级改变
		public static S_HERO_QUALITY_CHANGE: string = "S_HERO_QUALITY_CHANGE";    				//主角等级改变
		public static S_HERO_PLAYER_INFO: string = "S_HERO_PLAYER_INFO";    				//玩家信息
		public static S_EDIT_PLAYER_NICKNAME: string = "S_EDIT_PLAYER_NICKNAME";    		//返回修改角色名字

		/*-------------------------------战斗--------------------------------------*/
		public static S_ENTER_INSTANCE: string = "S_ENTER_INSTANCE";                 	    //进战斗前预先请求返回
		public static S_GET_WAR_REPORT: string = "S_GET_WAR_REPORT";                 	    //获取战报返回
		public static C_FINISH_INSTANCE: string = "C_FINISH_INSTANCE";                 	    //副本结算事件
		public static UPDATE_FIGHT_BOUT: string = "UPDATE_FIGHT_BOUT";                 	    //更新战斗回合数
		public static UPDATE_BOUT_CHILD: string = "UPDATE_BOUT_CHILD";                 	    //更新战斗回合的子回合数

		public static UPDATE_WAVE: string = "UPDATE_WAVE";                 	    			//更新波数		
		public static BATTLE_ACCOUNT_CLOSE: string = "BATTLE_ACCOUNT_CLOSE";                //更新战斗回合数
		public static BATTLE_ENTER: string = "BATTLE_ENTER";                				//进入战斗
		// public static SHOW_MAIN_TOP_MONEY_TYPE: string = "SHOW_MAIN_TOP_MONEY_TYPE";        //展示主界面顶部金币类型
		public static S_ENTER_CROSS_INSTANCE: string = "S_ENTER_CROSS_INSTANCE";            //打跨服副本、获取战报返回
		public static S_ONE_KEY_SWEEP_INSTANCE: string = "S_ONE_KEY_SWEEP_INSTANCE";        //一键扫荡返回
		public static CHANGE_HANG_INSTANCE_ID: string = "CHANGE_HANG_INSTANCE_ID";        	//改变挂机副本ID
		public static S_SKIP_BATTLE: string = "S_SKIP_BATTLE";        						//战斗跳过次数变化

		/*-------------------------------战斗挂机-----------------------------------*/
		public static S_GET_HANGUP_WAR_REPORT: string = "S_GET_HANGUP_WAR_REPORT";          //获取挂机副本战报
		public static S_SYNC_DEFEAT_NUM: string = "S_SYNC_DEFEAT_NUM";          			//挂机击败波次数量同步
		public static C_RESET_STAR_COUNT: string = "C_RESET_STAR_COUNT";          			//重置星星数量
		public static RESET_AUTO_HANG_STATE: string = "RESET_AUTO_HANG_STATE";          	//重置挂机状态
		public static TWEEN_SHOW_FIGHT: string = "TWEEN_SHOW_FIGHT";          				//缓动显示

		/*-------------------------------功能按钮条-----------------------------------*/
		public static C_CLOSE_SERVER_ACTIVE_BTN: string = "C_CLOSE_SERVER_ACTIVE_BTN";     //隐藏开服活动按钮

		/*-------------------------------地图滚动刷怪--------------------------------------*/
		public static REFRESH_MONSTER: string = "REFRESH_MONSTER";                         //开始刷波
		/*-------------------------------主界面--------------------------------------*/
		public static MAIN_BUTTON_SHOW_OR_HIDE: string = "MAIN_BUTTON_SHOW_OR_HIDE";       //主界面下面隐藏或者显示

		/*-------------------------------锻造系统--------------------------------------*/
		public static UPDATE_EQUIP_STERNGTHEN_LEVEL: string = "UPDATE_EQUIP_STERNGTHEN_LEVEL";//更新装备部位强化等级
		public static UPDATE_EQUIP_GEM_LEVEL: string = "UPDATE_EQUIP_GEM_LEVEL";			//更新装备部位宝石等级
		public static UPDATE_EQUIP_STAR_LEVEL: string = "UPDATE_EQUIP_STAR_LEVEL";			//更新装备部位升星等级
		public static UPDATE_EQUIP_ENCHANTMENT_LEVEL: string = "UPDATE_EQUIP_ENCHANTMENT_LEVEL";//更新装备部位熔炼等级
		public static UPDATE_EQUIP_WAKE_LEVEL: string = "UPDATE_EQUIP_WAKE_LEVEL";			//更新装备部位觉醒等级

		/*-------------------------------进阶系统--------------------------------------*/
		public static S_JINJIE_INFO_BACK: string = "S_JINJIE_INFO_BACK";//坐骑进阶数据请求
		public static S_JINJIE_QUIST_BACK: string = "S_JINJIE_QUIST_BACK";//坐骑进阶返回
		public static S_JINJIE_DAN_BACK: string = "S_JINJIE_DAN_BACK";//进阶吃丹返回

		public static S_IMAGE_INFO__BACK: string = "IMAGE_INFO__BACK";//坐骑运营皮肤信息
		public static S_IMAGE_ACTIVATE_LEVEL: string = "IMAGE_ACTIVATE_LEVEL";//幻化激活
		public static S_IMAGE_SART_LEVEL: string = "IMAGE_SART_LEVEL";//幻化升级
		public static S_DRESS_BACK: string = "S_DRESS_BACK";//幻化返回

		/*-------------------------------其它进阶系统【刻羽，圣纹】--------------------------------------*/
		public static JINJIE_OTHER_INFO: string = "JINJIE_OTHER_INFO";				//刻羽系统信息
		public static JINJIE_OTHER_UPGRADE: string = "JINJIE_OTHER_UPGRADE";		//刻羽升级

		/*-------------------------------技能--------------------------------------*/
		public static S_LEARN_SKILL: string = "S_LEARN_SKILL";//技能升级返回
		public static UPDATE_XINGTU_RED:string = "UPDATE_XINGTU_RED";//星图升星红点刷新

		/*-------------------------------主角符文--------------------------------------*/
		public static HERO_RUNE_PEIDAI: string = "HERO_RUNE_PEIDAI";		//符文佩戴
		public static HERO_RUNE_UPGRADE: string = "HERO_RUNE_UPGRADE";		//符文升级
		public static HERO_RUNE_DECOMPOSE: string = "HERO_RUNE_DECOMPOSE";	//符文分解
		public static HERO_RUNE_DECOMPOSE_SELECT: string = "HERO_RUNE_DECOMPOSE_SELECT";//符文分解选择项目

		/*-------------------------------主角修行--------------------------------------*/
		public static HERO_P_INFO: string = "HERO_P_INFO";				//修行系统信息
		public static HERO_P_UPGRADE: string = "HERO_P_UPGRADE";		//修行升级
		public static HERO_P_REVICE: string = "HERO_P_REVICE";			//修行领取
		public static HERO_P_EXCHANGE: string = "HERO_P_EXCHANGE";		//修行兑换


		/*-------------------------------主角技能--------------------------------------*/
		public static UPDATE_HERO_SKILLLIST: string = "UPDATE_HERO_SKILLLIST";		//技能列表
		public static UPGRADE_HERO_SKILL: string = "UPGRADE_HERO_SKILL";		//升级主角技能
		public static UPGRADE_ONE_KEY_HERO_SKILL: string = "UPGRADE_ONE_KEY_HERO_SKILL";		//升级主角技能
		public static UNLOCK_HERO_SKILL: string = "UNLOCK_HERO_SKILL";		//解锁一个技能

		/*-------------------------------BOSS系统--------------------------------------*/
		public static SELECT_BOSS_AUTO_CHALLENGE: string = "SELECT_BOSS_AUTO_CHALLENGE";    //勾选boss自动挑战
		public static GET_BOSS_INFO: string = "GET_BOSS_INFO";								//返回副本列表信息
		public static S_GET_HOME_BOSS_INFO: string = "S_GET_HOME_BOSS_INFO";								//返回副本列表信息
		public static RECEIVE_CHAPTER_BOSS: string = "RECEIVE_CHAPTER_BOSS";				//返回副本列表信息
		public static RECEIVE_CHAPTER_BOSS2: string = "RECEIVE_CHAPTER_BOSS2";				//返回副本列表信息
		public static SSELECT_BOSS_NOTICE: string = "SSELECT_BOSS_NOTICE";                	//返回勾选刷新提醒
		public static SELECT_BOSS_CHALLENGE: string = "SELECT_BOSS_CHALLENGE";            	//勾选/取消自动挑战
		public static SELECT_BOSS_CHALLENGE_ALL: string = "SELECT_BOSS_CHALLENGE_ALL";      //勾选全部自动挑战
		public static CLICK_BOSS_VIP_MENU: string = "CLICK_BOSS_VIP_MENU";                	//点击boss之家VIP_MENU
		public static S_OUT_BOSS_INSPIRE: string = "S_OUT_BOSS_INSPIRE";                	//返回野外boss鼓舞
		public static S_SYNC_WORLD_BOSS_REFRESH: string = "S_SYNC_WORLD_BOSS_REFRESH";      //Boos刷新推送
		public static C_SYNC_WORLD_BOSS_REFRESH: string = "C_SYNC_WORLD_BOSS_REFRESH";      //Boos刷新推送,前端用
		public static S_GET_HANGUP_RANK_INFO: string = "S_GET_HANGUP_RANK_INFO";      //Boos刷新推送,前端用
		// public static S_WORLD_BOSS_BUY_TIME: string = "S_WORLD_BOSS_BUY_TIME";      		//世界Boos挑战令购买
		// public static S_OUT_BOSS_BUY_TIME: string = "S_OUT_BOSS_BUY_TIME";      			//野外Boos挑战令购买

		/*-------------------------------副本系统--------------------------------------*/
		public static COPY_RUNE_INFO: string = "COPY_RUNE_INFO";							//地狱塔信息
		public static COPY_RUNE_DAILY_AWARD: string = "COPY_RUNE_DAILY_AWARD";				//更新地狱塔每日领奖
		public static COPY_LOTTERY_INFO: string = "COPY_LOTTERY_INFO";						//地狱塔转盘结果
		public static COPY_WESTING_SELECT: string = "COPY_WESTING_SELECT";						//地狱塔转盘结果
		public static COPY_WESTING_INFO: string = "COPY_WESTING_INFO";						//地狱塔转盘结果

		/*-------------------------------日常系统--------------------------------------*/
		public static DAILY_BOSS_INFO: string = "DAILY_BOSS_INFO";							//封妖信息
		public static DAILY_BOSS_REFRSH: string = "DAILY_BOSS_REFRSH";							//封妖信息
		public static DAILY_BOSS_TIME: string = "DAILY_BOSS_TIME";							//封妖信息
		public static DAILY_BOOK_INFO: string = "DAILY_BOOK_INFO";							//取经信息
		public static DAILY_LOOT_BOOK: string = "DAILY_LOOT_BOOK";							//抢夺秘籍
		public static DAILY_GET_BOOK: string = "DAILY_GET_BOOK";							//西游取经
		public static DAILY_REFRSH_BOOK: string = "DAILY_REFRSH_BOOK";						//刷新西游取经
		public static DAILY_START_BOOK: string = "DAILY_START_BOOK";						//开始西游取经
		public static DAILY_LOOT_RECORD: string = "DAILY_LOOT_RECORD";						//抢夺秘籍记录
		public static DAILY_SELECT_AUTO_CHALLENGE: string = "DAILY_SELECT_AUTO_CHALLENGE";  //勾选自动挑战
		public static DAILY_LIVE_INFO: string = "DAILY_LIVE_INFO";  						//获取活跃度信息
		public static DAILY_LIVE_REWARD: string = "DAILY_LIVE_REWARD";  					//领取活跃度奖励
		public static DAILY_GET_TASK_REWARD: string = "DAILY_GET_TASK_REWARD";  			//领取任务奖励



		/*-------------------------------任务系统--------------------------------------*/
		public static S_GET_TASK_INFO: string = "S_GET_TASK_INFO";//任务系统
		public static S_TASK_REVICE: string = "S_TASK_REVICE";//任务领奖
		public static UPDATE_TASK_INFO: string = "UPDATE_TASK_INFO";//更新任务信息
		public static UPDATE_CHAPTER_INFO: string = "UPDATE_CHAPTER_INFO";//更新任务章节信息

		/*-------------------------------帮派任务--------------------------------------*/
		public static S_GET_GUILD_TASK_INFO: string = "S_GET_GUILD_TASK_INFO";//帮派任务
		public static S_GUILD_TASK_REVICE: string = "S_GUILD_TASK_REVICE";//帮派任务领奖

		/*-------------------------------聊天系统--------------------------------------*/
		public static CHAT_CHANNEL_SUCCESS: string = "CHAT_CHANNEL_SUCCESS";//更新主线任务信息
		public static TEAM_CHAT_CHANNEL_SUCCESS: string = "TEAM_CHAT_CHANNEL_SUCCESS";//组队副本聊天更新
		public static CHAT_COUNT_UPDATE: string = "CHAT_COUNT_UPDATE";//进入聊天的次数更新

		public static TEAM_CHAT_CLOSE: string = "TEAM_CHAT_CLOSE";//关闭聊天界面


		public static CHAT_PRIVATE_DELETE: string = "CHAT_PRIVATE_DELETE";//删除私聊
		public static FRIEND_INFO: string = "FRIEND_INFO";
		public static FRIEND_OPTION: string = "FRIEND_OPTION";
		public static FRIEND_NEW_APPLY: string = "FRIEND_NEW_APPLY";
		public static FRIEND_AGREE_APPLY: string = "FRIEND_AGREE_APPLY";
		public static FRIEND_QY_REFRESH: string = "FRIEND_QY_REFRESH";//刷新好友友情状态

		/*-------------------------------邮件系统系统--------------------------------------*/
		public static EMAIL_REF_MAIL_LIST: string = "EMAIL_REF_MAIL_LIST";//读取邮件列表
		public static EMAIL_NEW_NOTIFY: string = "EMAIL_NEW_NOTIFY";//新邮件通知
		public static EMAIL_READ_MAIL_INFO: string = "EMAIL_READ_MAIL_INFO";//读取邮件
		public static EMAIL_REVIVE_SUCCESS: string = "EMAIL_REVIVE_SUCCESS";//领取附件

		/*-------------------------------神装系统--------------------------------------*/
		public static S_SLOT_WASH_INFO: string = "S_SLOT_WASH_INFO";//获取洗练信息返回
		public static S_SLOT_WASH_REPLACE: string = "S_SLOT_WASH_REPLACE";//洗练替换
		public static S_LOCK_INDEX: string = "S_LOCK_INDEX";//洗练槽位锁定
		public static S_SLOT_UNLOCK_INDEX: string = "S_SLOT_UNLOCK_INDEX";//解锁洗练槽位
		public static S_SLOT_WASH: string = "S_SLOT_WASH";//洗练
		public static S_QUENCHING_SLOT: string = "S_QUENCHING_SLOT";//淬炼返回
		public static S_SAVE_QUENCHING_SLOT: string = "S_SAVE_QUENCHING_SLOT";//淬炼保存
		public static S_EQUIPMENT_SPRITE: string = "S_EQUIPMENT_SPRITE";//装备注灵返回
		public static S_EQUIPMENT_SUIT_UPGRADE: string = "S_EQUIPMENT_SUIT_UPGRADE";//装备升阶

		public static S_SHOP_PURCHASE: string = "S_SHOP_PURCHASE";//商品购买成功
		public static S_UPDATE_SHOP_INFO: string = "S_UPDATE_SHOP_INFO";//商城信息

		public static S_XUNBAO_INFO: string = "S_XUNBAO_INFO";//寻宝信息
		public static S_START_XUNBAO: string = "S_START_XUNBAO";//开始寻宝
		public static S_UPDATE_XUNBAO_LOG: string = "S_UPDATE_XUNBAO_LOG";//更新寻宝日志
		public static S_GET_XUNBAO_REWARD: string = "S_GET_XUNBAO_REWARD";//领取寻宝积分奖励

		public static S_SEVENT_DAY_LOGIN_INFO: string = "S_SEVENT_DAY_LOGIN_INFO";//七日登陆信息
		public static S_SEVENT_DAY_LOGIN_REV_REWARDS: string = "S_SEVENT_DAY_LOGIN_REV_REWARDS";//领取七日奖励
		public static UPDATE_SEVENT_LOGIN_IOCN: string = "UPDATE_SEVENT_LOGIN_IOCN";//更新七日登录icon


		public static S_SIGNIN_INFO: string = "S_SIGNIN_INFO";//签到信息
		public static S_SIGNIN_SUCCESS: string = "S_SIGNIN_SUCCESS";//签到成功
		public static S_SIGNIN_REV_REWARDS: string = "S_SIGNIN_INFO_REV_REWARDS";//领取累计签到成功

		public static S_REV_FIRST_INFO: string = "S_REV_FIRST_INFO";//首充信息
		public static S_REV_FIRST_REWARDS: string = "S_REV_FIRST_REWARDS";//领取首充奖励成功
		public static S_UPDATA_FIRST_RECHARGET_BTN_SHOW: string = "S_UPDATA_FIRST_RECHARGET_BTN_SHOW";//更新首充按钮显示
		public static S_RECHARGE_RTN_PUSH: string = "S_RECHARGE_RTN_PUSH";//更新封测返利按钮显示
		public static S_RECHARGE_RTN_REWARD: string = "S_RECHARGE_RTN_REWARD";//封测返利按钮领奖


		public static S_REV_ACC_INFO: string = "S_REV_ACC_INFO";//累充信息
		public static S_REV_ACC_REWARDS: string = "S_REV_ACC_REWARDS";//领取首充奖励成功

		/*-------------------------------法宝系统--------------------------------------*/
		public static S_MAGIC_WEAPON_INFO: string = "S_MAGIC_WEAPON_INFO";//法宝信息返回
		public static S_MAGIC_OERATION_INFO: string = "S_MAGIC_OERATION_INFO";//法宝信息返回
		public static S_MAGIC_DRESS_INFO: string = "S_MAGIC_DRESS_INFO";//法宝穿脱返回

		public static S_OPEN_SERVER_RANK_INFO: string = "S_OPEN_SERVER_RANK_INFO";//开服排行信息
		public static S_SERVER_RANK_INFO: string = "S_SERVER_RANK_INFO";//全服排行信息


		/*-------------------------------秘籍系统--------------------------------------*/
		public static S_BOOK_LEARN_BACK: string = "S_BOOK_LEARN_BACK";//秘籍学习返回
		public static S_BOOK_FUSION_BACK: string = "S_BOOK_FUSION_BACK";//秘籍合成返回
		public static S_BOOK_CHANGE_LOCK_BACK: string = "S_BOOK_CHANGE_LOCK_BACK";//改变秘籍状态返回
		public static OPEN_AGENT_FUSION_VIEW: string = "OPEN_AGENT_FUSION_VIEW";//打开智能合成界面

		public static BOOK_RED_UPDATE: string = "BOOK_RED_UPDATE";//秘籍红点变化
		public static BOOK_AGENT_MERGE_UPDATE: string = "BOOK_AGENT_MERGE_UPDATE";//只能合成数量变化了
		public static BOOK_POS_OPEN: string = "BOOK_POS_OPEN";//经书开孔

		public static BAG_MERGE_UPDATE: string = "BAG_MERGE_UPDATE";//背包碎片合成

		/*-------------------------------阵法系统--------------------------------------*/
		public static S_ZHEN_FA_USE: string = "S_ZHEN_FA_USE";//返回阵法系统使用
		public static S_ZHEN_FA_STAR_UP: string = "S_ZHEN_FA_STAR_UP";//返回阵法系统升级
		public static S_GET_ZHEN_FA_INFO: string = "S_GET_ZHEN_FA_INFO";//返回获得阵法系统信息
		public static SELECT_ZHENFA_CARD: string = "SELECT_ZHENFA_CARD";//选中或取消选中阵法牌
		public static S_ZHEN_FA_MASTER: string = "S_ZHEN_FA_MASTER";//阵法大师
        public static S_ZHEN_FA_RELIVE: string = "S_ZHEN_FA_RELIVE";//阵法重生

		/*-------------------------------帮派系统--------------------------------------*/
		public static S_GET_GUILD_PAGE_LIST: string = "S_GET_GUILD_PAGE_LIST";//返回帮派列表
		public static S_GET_GUILD_MEMBER_LIST: string = "S_GET_GUILD_MEMBER_LIST";//返回帮派成员列表
		public static S_GET_GUILD_APPLY_LIST: string = "S_GET_GUILD_APPLY_LIST";//返回帮派申请列表
		public static S_GET_GUILD_BASE_INFO: string = "S_GET_GUILD_BASE_INFO";//返回帮派基本信息
		public static S_GET_MY_GUILD_APPLY: string = "S_GET_MY_GUILD_APPLY";//返回个人帮派申请列表
		public static S_CREATE_GUILD: string = "S_CREATE_GUILD";//创建帮派返回
		public static S_APPLY_JOIN_GUILD: string = "S_APPLY_JOIN_GUILD";//申请加入帮派返回
		public static S_EXIT_GUILD: string = "S_EXIT_GUILD";//退出帮派返回
		public static S_DROP_OUT_GUILD: string = "S_DROP_OUT_GUILD";//踢出帮派返回
		public static S_LEVEL_UP_GUILD: string = "S_LEVEL_UP_GUILD";//升级帮派返回
		public static S_EDIT_GUILD_DESC: string = "S_EDIT_GUILD_DESC";//修改帮派公告返回
		public static S_DONATE_GUILD: string = "S_DONATE_GUILD";//捐献返回
		public static S_GET_BOX_REWARD: string = "S_GET_BOX_REWARD";//领取捐献宝箱奖励
		public static S_SET_AUTOJOIN_GUILD: string = "S_SET_AUTOJOIN_GUILD";//设置自动加入帮派返回
		public static S_APPOINT_GUILD_MEMBER: string = "S_APPOINT_GUILD_MEMBER";//任命成员职位返回
		public static S_INHERIT_CHAIR: string = "S_INHERIT_CHAIR";//继承会长职位返回
		public static S_APPROVE_GUILD_MEMBER: string = "S_APPROVE_GUILD_MEMBER";//审批玩家入会返回
		public static S_GET_GUILD_SKILL_LIST: string = "S_GET_GUILD_SKILL_LIST";//返回帮派技能列表
		public static S_GUILD_SKILL_LEVELUP: string = "S_GUILD_SKILL_LEVELUP";//帮派技能升级返回
		public static S_GUILD_TRANSFER_CHAIR: string = "S_GUILD_TRANSFER_CHAIR";//转让会长职位返回
		public static S_EDIT_GUILD_NAME: string = "S_EDIT_GUILD_NAME";//修改帮派名字返回
		public static S_GET_GUILD_LOG: string = "S_GET_GUILD_LOG";//获取帮派记录信息
		public static S_GET_GUILD_BOSS_INFO: string = "S_GET_GUILD_BOSS_INFO";//获取帮派boss信息
		public static S_GET_GUILD_INST_INFO: string = "S_GET_GUILD_INST_INFO";//返回帮派副本信息
		public static S_GUILD_BOSS_DAMAGE_RANK: string = "S_GUILD_BOSS_DAMAGE_RANK";//获取帮派boss总伤害列表
		public static S_GET_GUILD_BOSS_REWARD: string = "S_GET_GUILD_BOSS_REWARD";//领取帮派boss奖励
		public static S_BUY_GUILD_BOSS_REVIVE: string = "S_BUY_GUILD_BOSS_REVIVE";//立即复活
		public static S_GET_GUILD_TASK_RANK: string = "S_GET_GUILD_TASK_RANK";//帮派悬赏排名
		public static S_GET_GUILD_WAR_INFO: string = "S_GET_GUILD_WAR_INFO";//获取帮派战信息
		public static S_GUILD_WAR_PART_IN: string = "S_GUILD_WAR_PART_IN";//参加帮派战
		public static S_GUILD_WAR_REVIVE: string = "S_GUILD_WAR_REVIVE";//帮派战复活
		public static S_GUILD_WAR_EDIT_DEC: string = "S_GUILD_WAR_EDIT_DEC";//修改帮派战公告
		public static S_GUILD_WAR_CLOSE: string = "S_GUILD_WAR_CLOSE";//帮派战结果
		public static S_GUILD_RECRUIT: string = "S_GUILD_RECRUIT";//修改帮派战公告
		public static SYNC_GUILD_NOTICE: string = "SYNC_GUILD_NOTICE";//修改帮派战公告
		public static GUILD_FEED_BOSS_INFO_CHANGE: string = "GUILD_FEED_BOSS_INFO_CHANGE";//帮会喂养boss信息变化
		public static GUILD_FEED_BOSS_STATE_CHANGE: string = "FEED_BOSS_STATE_CHANGE";//获取帮会喂养boss信息

		/** 帮派战 */
		public static S_GUILD_ARENA_APPLY: string = "S_GUILD_ARENA_APPLY";// 帮主申请报名的结果
		public static S_GET_GUILD_ARENA_INFO: string = "S_GET_GUILD_ARENA_INFO";// 获取帮派三界争霸的数据
		public static S_GUILD_ARENA_HISTORY: string = "S_GUILD_ARENA_HISTORY";// 获取三界争霸的荣誉殿堂数据
		public static S_GUILD_ARENA_RANK: string = "S_GUILD_ARENA_RANK";// 获取三界争霸的排行榜数据
		public static S_GUILD_ARENA_PEAK: string = "S_GUILD_ARENA_PEAK";//获取三界争霸的对阵数据
		public static S_GUILD_ARENA_TARGETS: string = "S_GUILD_ARENA_TARGETS";//获取三界争霸的对阵数据
		public static S_GUILD_ARENA_RECORD: string = "S_GUILD_ARENA_RECORD";//获取三界争霸的对战和战绩记录
		public static S_GUILD_ARENA_REPORT: string = "S_GUILD_ARENA_REPORT";//获取三界争霸的对战和战绩记录
		public static S_GUILD_ARENA_BUY_TIMES:string = "S_GUILD_ARENA_BUY_TIMES";
		public static S_GUILD_ARENA_ATTACK:string = "S_GUILD_ARENA_ATTACK";
		public static GUILD_WAR_SELECT_HISTORY:string = "GUILD_WAR_SELECT_HISTORY";

		/** 全服boss */
		public static SEVER_BOSS_BULLET_SCREEN: string = "SEVER_BOSS_BULLET_SCREEN";//全服boss弹幕		
		public static SEVER_BOSS_INFO: string = "SEVER_BOSS_INFO";//全服boss信息
		public static SEVER_BOSS_RANK: string = "SEVER_BOSS_RANK";//全服boss排行
		public static SEVER_BOSS_STATE_CHANGE: string = "SEVER_BOSS_STATE_CHANGE";//获取三界争霸的对手数据

		/** 神将副本 */
		public static EMBATTLE_COPY_INFO: string = "EMBATTLE_COPY_INFO";//神将副本信息
		public static EMBATTLE_COPY_RECEIVE_BOX: string = "EMBATTLE_COPY_RECEIVE_BOX";//领取到神将副本宝箱信息
		public static EMBATTLE_COPY_TIME_CHANGE: string = "EMBATTLE_COPY_TIME_CHANGE";//神将副本挑战次数
		public static EMBATTLE_COPY_BOX_RED: string = "EMBATTLE_COPY_BOX_RED";//神将副本宝箱红点


		/** 新组队副本 */
		public static TEAM_COPY_NEW_CURINFO_UPDATE: string = "TEAM_COPY_NEW_CURINFO_UPDATE";//当前副本信息更新
		public static TEAM_COPY_NEW_JOIN_TEAM: string = "TEAM_COPY_NEW_JOIN_TEAM";//加入队伍
		public static EXIT_TEAM: string = "EXIT_TEAM";//退出队伍
		public static CHANGE_BATTLEPOS: string = "CHANGE_BATTLEPOS";//切换上阵的神将
		public static UPDATE_TEAM_INFO: string = "UPDATE_TEAM_INFO";//刷新队伍信息
		public static UPDATE_TEAM_LIMIT_INFO: string = "UPDATE_TEAM_LIMIT_INFO";//刷新队伍进入限制信息
		public static INVITED_TIY: string = "INVITED_TIY";//被邀请了
		public static INVITEDINFO: string = "INVITEDINFO";//邀请信息
		public static ONEKTY_IGNORE: string = "ONEKTY_IGNORE";//一键忽略
		public static CAN_INVITEINFO_BACK: string = "CAN_INVITEINFO_BACK";//能够邀请的信息返回
		public static CHALLENGE_TIMES: string = "CHALLENGE_TIMES";//挑战次数

		/** 跨服Boss */
		public static CROSS_BOSS_INFO_UPDATE: string = "CROSS_BOSS_INFO_UPDATE";//跨服boss信息刷新
		public static CROSS_BOSS_TIME_UPDATE: string = "CROSS_BOSS_TIME_UPDATE";//跨服倒计时刷新
		public static CROSS_BOSS_CHAPTER_INFO_UPDATE: string = "CROSS_BOSS_CHAPTER_INFO_UPDATE";//boss信息刷新
		public static CROSS_BOSS_SEARCH_BOSS_UPDATE: string = "CROSS_BOSS_SEARCH_BOSS_UPDATE";//查找的boss信息刷新
		public static CROSS_BOSS_BELONG_TIME_UPDATE: string = "CROSS_BOSS_BELONG_TIME_UPDATE";//归属时间刷新
		public static CROSS_BOSS_CHECK_BOSS_INFO_UPDATE: string = "CROSS_BOSS_CHECK_BOSS_INFO_UPDATE";//查询的boss信息刷新
		public static CROSS_BOSS_BOSS_DEAD: string = "CROSS_BOSS_BOSS_DEAD";//boss死亡通知







		/** 飞升 */
		public static REQHEROFLYUPBACK: string = "REQHEROFLYUPBACK";//神将飞升升级返回
		public static REQHERO_TUPO_BACK: string = "REQHERO_TUPO_BACK";//神将飞升升级返回



		/*-------------------------------成就系统--------------------------------------*/
		public static S_GET_ACHIEVEMENT_LIST: string = "S_GET_ACHIEVEMENT_LIST";//返回成就列表
		public static S_GET_REWARD_ACHIEVEMENT: string = "S_GET_REWARD_ACHIEVEMENT";//领取成就返回
		public static S_GET_ACHIEVEMENT_CHANGE: string = "S_GET_ACHIEVEMENT_CHANGE";//成就状态改变
		public static ACHIEVEMENT_ONEKEY_CHANGE: string = "ACHIEVEMENT_ONEKEY_CHANGE";//成就一键领取状态
		public static S_GET_ACHIEVEMENT_POINT_REWARD: string = "S_GET_ACHIEVEMENT_POINT_REWARD";//成就点领取返回
		/*-------------------------------竞技场--------------------------------------*/
		public static S_GET_ARENA_INFO: string = "S_GET_ARENA_INFO";	//返回竞技场信息
		public static S_REFRESH_ARENA_INFO: string = "S_REFRESH_ARENA_INFO";	//刷新竞技场信息
		public static S_GET_ARENA_REWARD: string = "S_GET_ARENA_REWARD";//领取每日奖励
		public static S_GET_ARENA_LOG: string = "S_GET_ARENA_LOG";//拉取防守记录
		public static S_GET_OTHER_FORMATION: string = "S_GET_OTHER_FORMATION";//获取其他阵型
		public static S_GUILD_WAR_REWARD: string = "S_GUILD_WAR_REWARD";//领取帮派战奖励，点赞/领取奖励
		public static S_GUILD_WAR_DEFEND: string = "S_GUILD_WAR_DEFEND";//守护
		public static S_GUILD_WAR_CANCEL_DEFEND: string = "S_GUILD_WAR_CANCEL_DEFEND";//守护
		public static S_ARENA_SWEEP: string = "S_ARENA_SWEEP";//扫荡
		public static S_ARENA_BUY_CHALLENGE:string = "S_ARENA_BUY_CHALLENGE";

		public static S_QUESTION_INFO: string = "S_QUESTION_INFO";//答题题目信息
		public static S_GET_DATI_ACT_OPEN_INFO: string = "S_GET_DATI_ACT_OPEN_INFO";//获取答题开启状态


		/*-------------------------------Vip系统--------------------------------------*/
		public static S_GET_VIP_INFO: string = "S_GET_VIP_INFO";//请求Vip
		public static S_GET_VIP_REWARD: string = "S_GET_VIP_REWARD";//领取Vip等级礼包
		public static S_GET_MONTH_CARD_INFO: string = "S_GET_MONTH_CARD_INFO";//请求月卡返回
		public static S_GET_MONTH_CARD_REWARD: string = "S_GET_MONTH_CARD_REWARD";//领取月卡返回
		public static S_BUY_VIP_GIFT: string = "S_BUY_VIP_GIFT";//Vip礼包购买返回

		public static CARD_OPEN_PREVIEW: string = "CARD_OPEN_PREVIEW";//打开充值奖励预览
		public static CARD_CLOSE_PREVIEW: string = "CARD_CLOSE_PREVIEW";//关闭充值奖励预览


		public static S_GET_LADDER_INFO: string = "S_GET_LADDER_INFO";//天梯信息
		public static S_UPDATE_BUY_LADDER_TIMES: string = "S_UPDATE_BUY_LADDER_TIMES";//更新购买次数
		public static S_MATCH_SUCCESS: string = "S_MATCH_SUCCESS";//匹配成功
		public static S_TIAN_TI_RANK_INFO: string = "S_TIAN_TI_RANK_INFO";//天梯排行信息

		public static S_ACT_LIST: string = "S_ACT_LIST";//活动列表
		public static S_ACT_STATUE_OPEN: string = "S_ACT_STATUE_OPEN";//活动状态改变
		public static S_ACT_STATUE_CLOSE: string = "S_ACT_STATUE_CLOSE";//活动状态改变
		public static OP_ACTIVITE_CHANGE_STATUE: string = "OP_ACTIVITE_CHANGE_STATUE";//运营活动改变状态
		public static UPDATE_OP_ACTIVITE_TABLE: string = "UPDATE_OP_ACTIVITE_TABLE";//更新一张运营活动的表
		public static UPDATE_OP_ACTIVITE_TIME: string = "UPDATE_OP_ACTIVITE_TIME";//运营活动时间变更
		public static S_GET_OP_INFO: string = "S_GET_OP_INFO";//领取运营活动信息
		public static S_GET_OP_REWARD: string = "S_GET_OP_REWARD";//领取运营活动奖励
		public static S_GET_OPACTIVE_INFO: string = "S_GET_OPACTIVE_INFO";//运营活动信息
		public static S_OPACTIVE_LOG: string = "S_OPACTIVE_LOG";//运营活动日志
		public static S_OP_LUCKY_HUNT: string = "S_OP_LUCKY_HUNT";//运营活动幸运寻宝

		/*-------------------------------钟馗抓鬼--------------------------------------*/
		public static S_GET_DEMON_INFO: string = "S_GET_DEMON_INFO";//拉取钟馗抓鬼信息
		public static S_GET_SPECIAL_BUY: string = "S_GET_SPECIAL_BUY";//钟馗抓鬼神秘商店购买
		public static S_DEMON_BUY_BUFF: string = "S_DEMON_BUY_BUFF";//钟馗抓鬼蟠桃购买
		public static S_SET_DEMON_FORMATION_INFO: string = "S_SET_DEMON_FORMATION_INFO";//阵位替补信息
		public static S_DEMON_SWEEP: string = "S_DEMON_SWEEP";//扫荡返回
		public static S_DEMON_RESET: string = "S_DEMON_RESET";//重置返回


		public static S_UPDATE_ACTIVITY_FORECAST: string = "S_UPDATE_ACTIVITY_FORECAST";	//更新活动预告

		/*-------------------------------羁绊系统-----------------------------------*/
		public static S_GET_FETTER_INFO: string = "S_GET_FETTER_INFO";//羁绊信息
		public static SYNC_FETTER_ACTIVE: string = "SYNC_FETTER_ACTIVE";//羁绊激活推送信息
		public static S_FETTER_ACTIVE: string = "S_FETTER_ACTIVE";//羁绊激活服务端消息推送 服务端更新羁绊信息需要发出这个这个事件
		public static CLOSE_GET_JB_TIP: string = "CLOSE_GET_JB_TIP";//关闭羁绊界面提示
		public static S_GET_FETTER_CALL_INFO:string = "S_GET_FETTER_CALL_INFO";
		public static SELECT_EMBATTLE_CALL_HERO:string = "SELECT_EMBATTLE_CALL_HERO";
		public static S_FETTER_CALL:string = "S_FETTER_CALL";
		public static S_FETTER_CALL_SELECT_HERO:string = "S_FETTER_CALL_SELECT_HERO";

		public static S_GET_TEAM_INSTANCE_INFO: string = "S_GET_TEAM_INSTANCE_INFO";//获取组队副本信息
		public static S_GET_TEAM_LIST: string = "S_GET_TEAM_LIST";//队伍列表
		public static S_UPDATE_TEAM_INFO: string = "S_UPDATE_TEAM_INFO";//更新队伍信息
		public static S_UPDATE_MY_FORMATION: string = "S_UPDATE_MY_FORMATION";//更新我的阵型
		public static S_UPDATE_EXIT_TEAM: string = "S_UPDATE_EXIT_TEAM";//退出队伍
		public static S_UPDATE_FULL_TEAM: string = "S_UPDATE_FULL_TEAM";//满队伍返回
		public static S_UPDATE_START_COUNT_TIME: string = "S_UPDATE_START_COUNT_TIME";//开始倒计时

		/*-------------------------------至尊塔系统-----------------------------------*/
		public static UPDATE_SUPREME_TASK_INFO = "UPDATE_SUPREME_TASK_INFO";//尊塔任务更新
		public static S_GET_SUPREME_RANK = "S_GET_SUPREME_RANK";//拉取排行榜信息
		public static S_SUPREME_BUY_REVIVE = "S_SUPREME_BUY_REVIVE";//返回复活
		public static S_SUPREME_SEND_SCORE = "S_SUPREME_SEND_SCORE";//服务端主动推送积分
		public static S_SYN_LAYER_NUM = "S_SYN_LAYER_NUM";//服务端主动推送积分
		public static S_GET_SUPREME_INFO = "S_GET_SUPREME_INFO";//返回至尊塔信息


		/*-------------------------------赛龟-----------------------------------*/
		public static S_UPDATE_TORTOISE_INFO: string = "S_UPDATE_TORTOISE_INFO";//更新赛龟信息
		public static S_UPDATE_TORTOISE_DAN_MU: string = "S_UPDATE_TORTOISE_DAN_MU";//更新弹幕
		public static S_UPDATE_TORTOISE_STAKEINFO: string = "S_UPDATE_TORTOISE_STAKEINFO";//更新押注信息
		public static S_USE_ITEM_SUCCESS: string = "S_USE_ITEM_SUCCESS";//道具使用成功
		public static S_TORTOISE_START: string = "S_TORTOISE_START";//比赛开始
		public static S_TORTOISE_SYNC_INFO: string = "S_TORTOISE_SYNC_INFO";//同步乌龟信息
		public static S_TORTOISE_RESULT: string = "S_TORTOISE_RESULT";//结算
		public static S_SELECTED_TORTOISE: string = "S_SELECTED_TORTOISE";//选中一个乌龟抛出
		public static S_TORTOISE_GET_STAKE_INFO: string = "S_TORTOISE_GET_STAKE_INFO";//奖池变化抛出

		/*-------------------------------悬赏-----------------------------------*/
		public static S_GET_REWARD_TASK_INFO = "S_GET_REWARD_TASK_INFO";//悬赏信息
		public static S_REFRESH_REWARD_TASK_INFO = "S_REFRESH_REWARD_TASK_INFO";//刷新悬赏信息
		public static S_REWARD_TASK_SET_HERO = "S_REWARD_TASK_SET_HERO";//悬赏 设置上阵 
		public static S_START_REWARD_TASK = "S_START_REWARD_TASK";//悬赏 开始
		public static S_REWARD_TASK_WATCH_AND_GET_REWARD = "S_REWARD_TASK_WATCH_AND_GET_REWARD";//悬赏 查看任务

		/*-------------------------------我要变强-----------------------------------*/
		public static S_GET_STRONGER_INFO = "S_GET_STRONGER_INFO";//我要变强请求返回
		public static S_GET_STRONGER_REWARD = "S_GET_STRONGER_REWARD";//我要变强请领取奖励返回
		public static S_SYN_MODULE_FIGHT = "S_SYN_MODULE_FIGHT";//我要变强战斗力更新


		/*-------------------------------跨服-----------------------------------*/
		public static S_GET_WAR_BOSS_INFO = "S_GET_WAR_BOSS_INFO";//战场boss请求返回
		public static WAR_BOSS_TIME = "WAR_BOSS_TIME";//
		public static S_WAR_BOSS_BUY_TIME: string = "S_WAR_BOSS_BUY_TIME";      //战场Boos挑战令购买

		public static FUN_OPEN = "FUN_OPEN";//功能开启
		public static FUN_UPDATE = "FUN_UPDATE";//功能开启
		public static BUTTON_UPDATE:string = "BUTTON_UPDATE";//按钮刷新
		/*-------------------------------神将台-----------------------------------*/
		public static S_XUNBAO_NEW_GET_INFO = "S_XUNBAO_NEW_GET_INFO";//神将台返回
		public static S_XUNBAO_NEW_START = "S_XUNBAO_NEW_START";//抽奖返回
		public static S_FUN_OPEN_GET_REWARD = "FUN_OPEN_GET_REWARD";//功能开启领奖成功
		public static S_GET_MODULE_REWARD_INFO = "S_GET_MODULE_REWARD_INFO";//功能开启领奖信息获取
		public static S_GET_XUNBAO_NEW_SCORE = "S_GET_XUNBAO_NEW_SCORE";//拉取神将台神将兑换信息
		public static S_XUNBAO_NEW_CHANGE_HERO = "S_XUNBAO_NEW_CHANGE_HERO";//请求兑换神将返回

		public static SLOT_SELECTE_MAIN_ROLE: string = "SLOT_SELECTE_MAIN_ROLE";//选中主角

		public static SLOT_SELECTE_UPDATE: string = "SLOT_SELECTE_UPDATE";//刷新选中信息


		/*-------------------------------开服活动-----------------------------------*/
		public static S_GET_SERVER_ACTIVE_INFO: string = "S_GET_SERVER_ACTIVE_INFO";//获得开服活动系统信息
		public static S_GET_SERVER_ACTIVE_REWARD: string = "S_GET_SERVER_ACTIVE_REWARD";//领取开服活动目标奖励
		public static C_ACTIVE_RESET: string = "C_ACTIVE_RESET";//跨天之后，数据更新
		public static S_GET_ZERO_PREFERENTIAL_INFO: string = "S_GET_ZERO_PREFERENTIAL_INFO";//拉取0元特惠
		public static S_BUY_ZERO_PREFERENTIAL: string = "S_BUY_ZERO_PREFERENTIAL";//购买0元特惠
		public static S_GET_ZERO_PREFERENTIAL_RETURN: string = "S_GET_ZERO_PREFERENTIAL_RETURN";//领取0元特惠
		public static S_GET_MARKET_OVER_FLOW_INFO: string = "S_GET_MARKET_OVER_FLOW_INFO";//拉取超值限购
		public static S_BUY_OVER_FLOW_LUCKY: string = "S_BUY_OVER_FLOW_LUCKY";//超值限购购买返回

		/*-------------------------------机缘商店-----------------------------------*/
		public static S_GET_MARKET_LUCKY_INFO = "S_GET_MARKET_LUCKY_INFO";//机缘商店请求返回
		public static S_BUY_MARKET_LUCKY = "S_BUY_MARKET_LUCKY";//机缘商店购买返回

		/*-------------------------------玲珑塔-----------------------------------*/
		public static S_GET_TOWER_INFO = "S_GET_TOWER_INFO";//拉取玲珑塔
		public static S_GET_TOWER_RANK_INFO = "S_GET_TOWER_RANK_INFO";//玲珑塔排行
		public static S_TOWER_AUTO_CHALLENG = "S_TOWER_AUTO_CHALLENG";//玲珑塔自动勾选

		/*-------------------------------折扣商店-----------------------------------*/
		public static S_GET_MARKET_DISCOUNT_INFO = "S_GET_MARKET_DISCOUNT_INFO";//折扣商店请求返回
		public static S_BUY_MARKET_DISCOUNT = "S_BUY_MARKET_DISCOUNT";//折扣商店购买返回

		public static S_CHECK_CD_KEY: string = "S_CHECK_CD_KEY";//cdkey检测
		public static S_REV_CDKEY_SUCCESS: string = "S_REV_CDKEY_SUCCESS";//cdkey领取
		public static LOAD_RESOURCE_COMPLETE: string = "LOAD_RESOURCE_COMPLETE";//加载一个资源完毕回调

		public static S_MONEY_TREE_INFO: string = "S_MONEY_TREE_INFO";//摇钱树
		public static S_MONEY_TREE_GET: string = "S_MONEY_TREE_GET";//摇一摇
		public static S_MONEY_TREE_REWARD: string = "S_MONEY_TREE_REWARD";//领取额外奖励

		public static DAILY_FIRST_RECHAGE_INFO: string = "DAILY_FIRST_RECHAGE_INFO";//每日首充信息
		public static DAILY_FIRST_RECHAGE_REWARD: string = "DAILY_FIRST_RECHAGE_REWARD"//每日首充领取成功
		public static S_UPDATA_DIYLTY_FIRST_RECHARGET_BTN_SHOW: string = "S_UPDATA_DIYLTY_FIRST_RECHARGET_BTN_SHOW";//更新每日首充按钮显示

		/*-------------------------------神将集结-----------------------------------*/
		public static S_GET_HERO_COLLECTOR_INFO: string = "S_GET_HERO_COLLECTOR_INFO";//神将集结系统信息
		public static S_GET_HERO_COLLECTOR_REWARD: string = "S_GET_HERO_COLLECTOR_REWARD";//神将集结奖励
		public static S_GET_HERO_PUZZLE_INFO: string = "S_GET_HERO_PUZZLE_INFO";//神将拼图
		public static S_HERO_PUZZLE_LIGHT: string = "S_HERO_PUZZLE_LIGHT";//神将拼图点亮成功
		public static S_HERO_PUZZLE_LIGHT2: string = "S_HERO_PUZZLE_LIGHT2";//神将拼图点亮成功
		public static S_HERO_PUZZLE_TASK: string = "S_HERO_PUZZLE_TASK";//神将拼图的任务进度推送消息
		public static S_HAVE_GET_WARRIOR: string = "S_HAVE_GET_WARRIOR";//获取到神将列表时抛出的事件
		public static S_HERO_RELIVE: string = "S_HERO_RELIVE";//武将重生返回



		/** ----------------------------- 元宝轮盘 ----------------------- */
		public static GOLD_LOTTER_INFO: string = "GOLD_LOTTER_INFO";
		public static GOLD_LOTTER_INFO_AWARD: string = "GOLD_LOTTER_INFO_AWARD";
		public static GOLD_LOTTER_LOG: string = "GOLD_LOTTER_LOG";

		/** ----------------------------- 降魔录 ----------------------- */
		public static S_XIANG_MO_LU_INFO: string = "S_XIANG_MO_LU_INFO";//降魔录数据
		public static S_XIANG_MO_LU_REWARD: string = "S_XIANG_MO_LU_REWARD";//领取降魔录奖励
		public static S_XIANG_MO_LU_TASK: string = "S_XIANG_MO_LU_TASK";//服务器推送客户端，降魔录的任务进度

		/**进阶3阶直升活动 */
		public static S_BLESS_ACTIVITY_PUSH: string = "S_BLESS_ACTIVITY_PUSH";//服务器推送客户端，进阶直升活动
		public static ACTIVITY_TIME_END: string = "ACTIVITY_TIME_END";//进阶直升活动倒计时结束
		public static S_GET_BLESS_ACTIVITY_INFO: string = "S_GET_BLESS_ACTIVITY_INFO";//进阶直升活动拉取返回
		public static S_BLESS_ACTIVITY_BUY: string = "S_BLESS_ACTIVITY_BUY";//进阶直升活动购买返回

		/** ----------------------------- 挂机宝箱 ----------------------- */
		public static C_ENTER_HANG_BOSS: string = "C_ENTER_HANG_BOSS";//进入挂机打BOSS
		public static S_GET_GUA_JI_BOX_INFO: string = "S_GET_GUA_JI_BOX_INFO";//挂机宝箱的数据
		public static S_GUA_JI_BOX_FORWARD: string = "S_GUA_JI_BOX_FORWARD";//提前领取挂机宝箱
		public static S_GUA_JI_BOX_REWARD: string = "S_GUA_JI_BOX_REWARD";//挂机宝箱领取
		public static GUA_JI_BOX_UPDATE_TIME: string = "GUA_JI_BOX_UPDATE_TIME";//挂机时间刷新
		public static S_GUA_JI_BOX_USEITEM: string = "S_GUA_JI_BOX_USEITEM";//使用道具增加挂机宝箱时间
		public static S_HERO_LEVEL_UP: string = "S_HERO_LEVEL_UP";//武将升级返回

		/** ----------------------------- 砸蛋 -----------------------------  */
		public static S_GET_HIT_GOLD_EGG_INFO: string = "S_GET_HIT_GOLD_EGG_INFO";//砸蛋信息返回
		public static S_HIT_GOLD_EGG: string = "S_HIT_GOLD_EGG";//砸蛋奖励返回
		public static EGG_EFF_BACK: string = "EGG_EFF_BACK";//砸蛋动画返回；

		/** ---------------------------- 天宫寻宝 ------------------------- */
		public static TEMPLE_INFO_BACK: string = "TEMPLE_INFO_BACK";//砸蛋动画返回
		public static TEMPLE_TOUZI_BACK: string = "TEMPLE_TOUZI_BACK";//砸蛋动画返回

		/**全名狂嗨 */
		public static S_GET_ALL_HIGH_INFO: string = "S_GET_ALL_HIGH_INFO";//全民狂嗨返回
		public static S_ALL_HIGH_TASK_REWARD: string = "S_ALL_HIGH_TASK_REWARD";//全民狂嗨任务返回
		public static S_ALL_HIGH_REWARD: string = "S_ALL_HIGH_REWARD";//全民狂嗨嗨点奖励返回
		public static S_PUSH_ALL_HIGH_TASK: string = "S_PUSH_ALL_HIGH_TASK";//全民狂嗨消息推送

		/**幸运转盘 */
		public static S_GET_LUCK_PAN_INFO: string = "S_GET_LUCK_PAN_INFO";//幸运转盘消息推送
		public static S_LUCK_PAN_BUY: string = "S_LUCK_PAN_BUY";//幸运转盘购买
		public static S_LUCK_PAN_SHOP: string = "S_LUCK_PAN_SHOP";//幸运转盘商店购买
		public static OPEN_PAN_SHOP: string = "OPEN_PAN_SHOP";//打开转盘商店
		public static S_GET_SUPER_GIFT_INFO: string = "S_GET_SUPER_GIFT_INFO";//超值礼包
		public static S_BUY_SUPER_GIFT: string = "S_BUY_SUPER_GIFT";//超值礼包购买
		public static S_PUSH_SUPER_GIFT: string = "S_PUSH_SUPER_GIFT";//超值礼包推送

		/**分享奖励 */
		public static S_GET_SHARE_REWARD_INFO: string = "S_GET_SHARE_REWARD_INFO";//返回客户端分享数据的信息
		public static S_GET_SHARE_REWARD: string = "S_GET_SHARE_REWARD";//返回客户端领取分享奖励数据
		public static S_LUCK_PAN_TISHI: string = "S_LUCK_PAN_TISHI";//转盘商店红点

		/**南天门 */
		public static S_GET_NAN_TIAN_GATE_INFO: string = "S_GET_NAN_TIAN_GATE_INFO";// 返回客户端南天门的信息
		public static S_NAN_TIAN_GATE_REFRESH: string = "S_NAN_TIAN_GATE_REFRESH";// 返回客户端刷新南天门对手数据
		public static S_NAN_TIAN_GATE_WIN_BOX: string = "S_NAN_TIAN_GATE_WIN_BOX";//// 返回客户端领取南天门三连斩宝箱奖励数据
		public static S_NAN_TIAN_GATE_BOX: string = "S_NAN_TIAN_GATE_BOX";// 返还客户端领取南天门连胜宝箱奖励
		public static S_NAN_TIAN_GATE_BUY_TIMES: string = "S_NAN_TIAN_GATE_BUY_TIMES";// 返还客户端购买南天门挑战次数
		public static S_NAN_TIAN_GATE_BUY_BUFF: string = "S_NAN_TIAN_GATE_BUY_BUFF";//返还客户端购买南天门鼓舞buff数据
		public static S_NAN_TIAN_GATE_RANK: string = "S_NAN_TIAN_GATE_RANK";// 返还客户端南天门排行榜数据

		/**气泡功能 */
		public static MAIN_POP_FINISH: string = "MAIN_POP_FINISH";//完成泡泡

		/**矿战 */
		public static S_GET_XIANMAI_INFO: string = "S_GET_XIANMAI_INFO";//服务器推送客户端九天仙脉的数据
		public static S_GET_XIANMAI_PLAYER: string = "S_GET_XIANMAI_PLAYER";//服务器推送客户端查看指定九天仙脉的数据
		public static S_GET_XIANMAI_ADDTIEM: string = "S_GET_XIANMAI_ADDTIEM";//服务器推送客户端仙脉延时的操作
		public static S_GET_XIANMAI_GIVEUP: string = "S_GET_XIANMAI_GIVEUP";//服务器推送客户端放弃仙脉的操作
		public static S_GET_XIANMAI_BOXREWARD: string = "S_GET_XIANMAI_BOXREWARD";//服务器推送客户端领取仙脉宝箱的操作
		public static S_GET_XIANMAI_ATTACK: string = "S_GET_XIANMAI_ATTACK";//服务器推送客户端攻占仙脉的操作
		public static S_GET_XIANMAI_SNEAK: string = "S_GET_XIANMAI_SNEAK";//服务器推送客户端偷袭的操作
		public static S_GET_XIANMAI_LOGS: string = "S_GET_XIANMAI_INFO";//服务器推送客户端仙脉的记录数据
		public static CROSS_S_GET_XIANMAI_INFO: string = "CROSS_S_GET_XIANMAI_INFO";// 返还服务器获取跨服仙脉相关信息
		public static CROSS_S_GET_XIANMAI_PLAYER: string = "CROSS_S_GET_XIANMAI_PLAYER";// 返还服务器获取指定玩家的仙脉的数据
		public static CROSS_S_XIANMAI_ADDTIME: string = "CROSS_S_XIANMAI_ADDTIME";//  返还服务器玩家的仙脉增加占领时间的操作
		public static CROSS_S_XIANMAI_GIVEUP: string = "CROSS_S_XIANMAI_GIVEUP";//  返还服务器玩家的放弃仙脉的操作
		public static CROSS_S_XIANMAI_LOGS: string = "CROSS_S_XIANMAI_LOGS";//  返还服务器仙脉的总记录数据
		public static CROSS_S_XIANMAI_REWARD: string = "CROSS_S_XIANMAI_REWARD";//  推送给服务器玩家的仙脉奖励操作
		public static CROSS_S_XIANMAI_GET: string = "CROSS_S_XIANMAI_GET";// 推送给服务器玩家占领仙脉的操作
		public static CROSS_S_XIANMAI_BATTLE_LOG: string = "CROSS_S_XIANMAI_BATTLE_LOG";// 推送给服务器玩家占领仙脉的操作
		public static S_GET_XIANMAI_TEACH_UP: string = "S_GET_XIANMAI_TEACH_UP";//服务器返回客户端仙脉的科技升级
		public static S_GET_XIANMAI_BUY_TIMES: string = "S_GET_XIANMAI_BUY_TIMES";//服务器返回客户端购买占矿次数的操作

		/**每日活动 */
		public static S_GET_EVERYDAY_RTN_INFO: string = "S_GET_EVERYDAY_RTN_INFO";// 返回天天返利的信息
		/**领取天天返利 */
		public static S_EVERYDAY_RTN_REWARD: string = "S_EVERYDAY_RTN_REWARD";// 返回天天返利的信息
		/**天天返利推送 */
		public static S_EVERYDAY_RTN_PUSH: string = "S_EVERYDAY_RTN_PUSH";// 返回天天返利的信息
		/**今日特惠 */
		public static S_GET_TODAY_DISCOUNT_INFO: string = "S_GET_TODAY_DISCOUNT_INFO";// 返回今日特惠的信息
		public static S_BUY_TODAY_DISCOUNT: string = "S_BUY_TODAY_DISCOUNT";// 返回今日特惠购买的信息

		/**寻宝轮盘 */
		public static S_GET_CHARGE_PAN_INFO: string = "S_GET_CHARGE_PAN_INFO";// 返回每日活动的充值轮盘的信息
		public static S_CHARGE_PAN_REWARD: string = "S_CHARGE_PAN_REWARD";// 返回客户端每日活动的充值轮盘抽奖的奖励
		public static S_CHARGE_PAN_LUCK_REWARD: string = "S_CHARGE_PAN_LUCK_REWARD";// 返回客户端每日活动的充值轮盘的财富值奖励
		public static S_CHARGE_PAN_LOGS: string = "S_CHARGE_PAN_LOGS";// 返回客户端每日活动的充值轮盘记录数据

		/**龙宫商店 */
		public static S_GET_SEA_SHOP_INFO: string = "S_GET_SEA_SHOP_INFO";// 龙宫商店
		public static S_SEA_SHOP_BUY: string = "S_SEA_SHOP_BUY";// 龙宫商店购买
		public static S_SEA_SHOP_REFRESH: string = "S_SEA_SHOP_REFRESH";// 龙宫商店刷新
		public static S_SEA_SHOP_BUY_ALL: string = "S_SEA_SHOP_BUY_ALL";// 龙宫商店全部购买

		/**称号相关 */
		public static S_GET_SHOW_INFO: string = "S_GET_SHOW_INFO";// // 返回客户端获取角色的称号、头像框和聊天气泡数据

		/**限时礼包 */
		public static S_GET_LEVEL_BUY_INFO: string = "S_GET_LEVEL_BUY_INFO"; //返回限时礼包信息
		public static S_GET_LEVEL_BUY_REWARD: string = "S_GET_LEVEL_BUY_REWARD"; //返回限时礼包购买返回
		public static S_PUSH_LEVEL_BUY_INFO: string = "S_PUSH_LEVEL_BUY_INFO"; //返回限时礼包推送

		/**阿鼻地狱 */
		public static S_GET_ABI_HELL_INFO: string = "S_GET_ABI_HELL_INFO";// 服务器返还给客户端阿鼻地狱副本的数据
		public static S_GET_ABI_HELL_NEXT: string = "S_GET_ABI_HELL_NEXT";// 服务器返还给客户端阿鼻地狱副本的下一层操作
		public static S_GET_ABI_BOX_REWARD: string = "S_GET_ABI_BOX_REWARD";// 服务器返还给客户端阿鼻地狱副本的下一层操作
		public static S_GET_ABI_BUY_TIMES: string = "S_GET_ABI_BUY_TIMES";//购买阿鼻地狱副本挑战次数的操作

		/** 跨服争霸赛 */
		public static S_GET_TOP_RANK_PLAY_INFO:string = "S_GET_TOP_RANK_PLAY_INFO";// 服务器返还给客户端巅峰争霸赛的数据
		public static S_GET_TOP_RANK_PLAY_WORSHIP:string = "S_GET_TOP_RANK_PLAY_WORSHIP";// 玩家膜拜操作
		public static S_GET_TOP_RANK_PLAY_WARRECORD:string = "S_GET_TOP_RANK_PLAY_WARRECORD";// 服务器返还给客户端自己海选赛的对战记录操作
		public static S_GET_TOP_RANK_PLAY_FORMATION:string = "S_GET_TOP_RANK_PLAY_FORMATION";// 服务器返还给客户端角色当前争霸赛的阵容数据
		public static S_UPDATE_TOP_RANK_PLAY_FORMATION:string = "S_UPDATE_TOP_RANK_PLAY_FORMATION";// 服务器返还给客户端当前争霸赛的阵容数据
		public static S_GET_TOP_RANK_PLAY_APPLY:string = "S_GET_TOP_RANK_PLAY_APPLY";// 服务器返还给客户端当前争霸赛的阵容数据
		public static S_GET_TOP_RANK_PLAY_WIN:string = "S_GET_TOP_RANK_PLAY_WIN";// 服务器返还给客户端本次的晋级赛的数据
		public static S_GET_TOP_RANK_PLAY_GUESS:string = "S_GET_TOP_RANK_PLAY_GUESS";// 服务器返还给客户端参与竞猜操作
		public static S_GET_TOP_RANK_GUESS_RECORD:string = "S_GET_TOP_RANK_GUESS_RECORD";// 服务器返还给客户端参与竞猜记录数据
		public static S_GET_TOP_RANK_PLAY_CHAMPION:string = "S_GET_TOP_RANK_PLAY_CHAMPION";// 服务器返还给客户端本次的冠军赛的数据
		public static S_GET_TOP_RANK_BATTLE:string = "S_GET_TOP_RANK_BATTLE";// 服务器返还给客户端对战记录的数据
		public static S_GET_TOP_RANK_WARREPORT:string = "S_GET_TOP_RANK_WARREPORT";// 服务器返还给客户端指定的战报数据
		public static CROSSPK_GAME_STEP_SELECTED:string = "CROSSPK_GAME_STEP_SELECTED";//选择当前的区段
		public static CROSSPK_GAME_STEP_SET:string = "CROSSPK_GAME_STEP_SET";//从外部设置当前旋选择的区段
		/**合服活动 */
		public static S_GET_MERGE_ACTIVITY_INFO: string = "S_GET_MERGE_ACTIVITY_INFO";// 合服拉取
		public static S_GET_MERGE_ACTIVITY_REWARD: string = "S_GET_MERGE_ACTIVITY_REWARD";// 合服领取奖励

		/**神将分解 */
		public static WARRIOR_DISINTEGRATE_ITEM_STATUS_CHANGED: string = "WARRIOR_DISINTEGRATE_ITEM_STATUS_CHANGED";//神将分解列表子项选择状态变化
		/**装备分解 */
		public static EQUIP_DECOMPOSE_CHECK_STATUS_CHANGE: string = "EQUIP_DECOMPOSE_CHECK_STATUS_CHANGE";//装备分解列表子项选择状态变化

		public static WARRIOR_SOUL_SHOP_CHANGED: string = "WARRIOR_SOUL_SHOP_CHANGED";/**将魂商店数据更新 */
		public static WARRIOR_SOUL_SHOP_ITEM_CHANGED: string = "WARRIOR_SOUL_SHOP_ITEM_CHANGED";/**将魂商店某商品数据更新 */

		public static S_GET_RED_PACKET_INFO:string = "S_GET_RED_PACKET_INFO";// 返回客户端当前红包的数据
		public static S_GET_RED_PACKET_REWARD:string = "S_GET_RED_PACKET_REWARD";// 返回客户端领取当前红包的奖励
		public static S_GET_RED_PACKET_PUSH:string = "S_GET_RED_PACKET_PUSH";// 登录推送客户端是否显示红包icon
		public static S_RED_PACKET_PUSH_REWARD:string = "S_RED_PACKET_PUSH_REWARD";// 登录推送客户端是否显示红包icon

		/**转盘红包 */
		public static S_GET_RED_MONEY_PUSH:string = "S_GET_RED_MONEY_PUSH";
		public static S_GET_RED_WHEEL_INFO:string = "S_GET_RED_WHEEL_INFO";// 返回客户端返现轮盘和返现大礼的数据
		public static S_GET_RED_WHEEL_PLAY:string = "S_GET_RED_WHEEL_PLAY";
		public static S_GET_RED_WHEEL_RECORD:string = "S_GET_RED_WHEEL_RECORD";
		public static S_GET_RED_WHEEL_MONEY:string = "S_GET_RED_WHEEL_MONEY";
		public static S_GET_RED_WHEEL_MONEY_RECORD:string = "S_GET_RED_WHEEL_MONEY_RECORD";
		public static S_RED_MONEY_PUSH_REWARD:string = "S_RED_MONEY_PUSH_REWARD";
		public static S_GET_FORMATION_HELP_INFO:string = "S_GET_FORMATION_HELP_INFO";// 获取助阵武将相关的数据
		public static S_FORMATION_HELP_HERO_SELECT:string = "S_FORMATION_HELP_HERO_SELECT";// 助阵武将选择要加属性的默认阵容武将id
		public static S_FORMATION_HELP_LEVEL:string = "S_FORMATION_HELP_LEVEL";// 助阵武将的属性提升升级操作

		/** 神将商店*/
		public static S_GET_HERO_SHOP_INFO:string = "S_GET_HERO_SHOP_INFO";// 获取神将s
		public static S_HERO_SHOP_BUY_REWARD:string = "S_HERO_SHOP_BUY_REWARD";// 神将商店购买优惠折扣物品
		public static CLOSE_SHOP_BUY_VIEW:string = "CLOSE_SHOP_BUY_VIEW";// 关闭神将商店

		/**六一活动-寻宝 */
		public static S_GET_LIUYI_LUCKY_INFO: string = "S_GET_LIUYI_LUCKY_INFO";//获取六一寻宝活动的信息
		public static S_LIUYI_LUCKY_XUNBAO: string = "S_LIUYI_LUCKY_XUNBAO";//玩家寻宝抽奖操作
		public static S_GET_LIUYI_LOG_INFO: string = "S_GET_LIUYI_LOG_INFO";//获取六一寻宝活动的记录查询
		public static S_LIUYI_LUCKY_SCORE_REWARD: string = "S_LIUYI_LUCKY_SCORE_REWARD";//获取六一寻宝活动的积分奖励领取操作
		public static S_LIUYI_LUCKY_RANK_DATA: string = "S_LIUYI_LUCKY_RANK_DATA";//六一寻宝活动的排行榜数据
		public static OPEN_NEW_YEAR_RECHARGE: string = "OPEN_NEW_YEAR_RECHARGE";//打开新春累充

		/**背包事件中断 */
		public static BREAK_ITEM_CLICK: string = "BREAK_ITEM_CLICK";//render点击
		/**日常副本选择难度更新 */
		public static DAY_COPY_CHOOSE_DIFFICULT:string = "DAY_COPY_CHOOSE_DIFFICULT";//日常副本选择难度更新
		/**神将重生选择神将更新 */
		public static HERO_REBIRTH_CHOOSE:string = "HERO_REBIRTH_CHOOSE";
		/**法宝重生选择法宝更新 */
		public static MAGIC_REBIRTH_CHOOSE:string = "MAGIC_REBIRTH_CHOOSE";
		/**世界地图宝箱点击 */
		public static WORLD_BOX_CLICK:string = "WORLD_BOX_CLICK";

		/**新版帮会任务 */
		public static S_GET_NEW_GUILD_TASK_INFO: string = "S_GET_NEW_GUILD_TASK_INFO";
		public static S_GET_GUILD_TASK_REWARD: string = "S_GET_GUILD_TASK_REWARD";
		public static S_GET_GUILD_TASK_STAGE_REWARD: string = "S_GET_GUILD_TASK_STAGE_REWARD";
		public static S_GUILD_TASK_COLLECT: string = "S_GUILD_TASK_COLLECT";
		public static S_GUILD_TASK_SEARCH: string = "S_GUILD_TASK_SEARCH";
		public static S_GUILD_TASK_SUBMIT: string = "S_GUILD_TASK_SUBMIT";
		public static S_SYNC_GUILD_TASK_FINISH: string = "S_SYNC_GUILD_TASK_FINISH";

		/**每日活动-每日登陆 */
		public static S_GET_EVERY_LOGIN_INFO: string = "S_GET_EVERY_LOGIN_INFO";//返还客户端每日活动中每日登录信息
		public static S_GET_EVERY_LOGIN_REWARD: string = "S_GET_EVERY_LOGIN_REWARD";//每日活动中每日登录的奖励领取操作
		
		/**进入新新首充 */
		public static ENTER_FIVERECHARGE:string = "ENTER_FIVERECHARGE";
		/**进入至尊卡 */
		public static ENTER_FORVERCARD:string = "ENTER_FORVERCARD";

		/**新神将好礼 */
		public static S_GET_HERO_GIFT_INFO:string = "S_GET_HERO_GIFT_INFO";
		public static S_GET_HERO_GIFT_REWARD:string = "S_GET_HERO_GIFT_REWARD";
		public static S_HERO_GIFT_INFO_PUSH:string = "S_HERO_GIFT_INFO_PUSH";
		/**激活神将界面关闭 */
		public static ACTIVE_HERO_CLOSE:string = "ACTIVE_HERO_CLOSE";
	}

}