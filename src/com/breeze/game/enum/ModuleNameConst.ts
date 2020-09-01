module qmr
{
	/**
	 *
	 * @author coler
	 * @description 模块命名的常量，所有模块的命名都在这里
	 *
	 */
	export class ModuleNameConst
	{

		public static MAINUI_VIEW: string = "qmr.MainView";        				//主ui模块
		public static WORLDMAP_VIEW: string = "qmr.WorldMapView";        		//主ui世界地图
		public static BAG_VIEW: string = "qmr.BagView";				 			//背包模块
		public static BAG_ADD_VIEW: string = "qmr.BagAddView";				 	//背包模块
		public static SELECTABLE_BOX: string = "qmr.SelectableBox";				//可选宝箱
		public static BATCH_USE_PROP: string = "qmr.BatchUseProp";				//批量开启


		public static HERO_VIEW: string = "qmr.HeroView";						//角色界面
		public static JINJIE_VIEW: string = "qmr.JinjieView";				 	//进阶界面
		public static WARRIOR_SELECT_VIEW: string = "qmr.WarriorSelectView";	//武将库选择界面
		public static WARRIOR_ACTIVE_SHOW_VIEW: string = "qmr.ActiveShowView";	//武将激活展示界面
		public static EMBATTLE_VIEW: string = "qmr.EmbattleView";				//布阵模块
		public static GM_VIEW: string = "qmr.GmView";							//GM模块
		public static BATTLE_MAIN_VIEW: string = "qmr.BattleMainView";			//战斗模块
		public static BATTLE_ACCOUNT_VIEW: string = "qmr.BattleAccountView";	//战斗结算界面
		public static BATTLE_TIANTI_ACCOUNT_VIEW: string = "qmr.TianTiMatchAccountView";//天梯战斗结算界面
		public static MAIN_VIEW_TOPBAR: string = "qmr.MainTopBarView";			//活动导航模块
		public static MAIN_LAYER_VIEW:string = "qmr.MainLayerView";				//活动导航模块
		public static MAIN_BUTTON_VIEW:string = "qmr.MainButtonView";			//活动导航模块
		public static FORGE_VIEW: string = "qmr.ForgeView";						//锻造界面
		public static GETTING_THINGS_VIEW: string = "qmr.GettingThingsView";	//物品获得模块
		public static ZUOJI_SKILL_INFO: string = "qmr.SkillinfoView";			//坐骑技能
		public static ZUOJI_SKIN_VIEW: string = "qmr.ZuojipifuView";			//坐骑皮肤
		public static ZUOJI_ATTRIBUT_VIEW: string = "qmr.ZuojiAttributeView";	//坐骑属性详情
		public static WING_ATTRIBUT_VIEW: string = "qmr.WingAttributeView";		//翅膀属性详情
		public static SHUGO_ATTRIBUT_VIEW: string = "qmr.ShugoAttributeView";	//灵宠属性详情
		public static ATTRIBUT_VIEW: string = "qmr.AttributeView";				//属性详情
		public static HALO_ATTRIBUT_VIEW: string = "qmr.HaloAttributeView";		//光环属性详情
		public static HALO_SKILL_VIEW: string = "qmr.HaloSkillinfoView";		//光环技能
		public static WING_SKIN_VIEW: string = "qmr.WingpifuView";				//翅膀皮肤
		public static HALO_SKIN_VIEW: string = "qmr.HalopifuView";				//光环皮肤
		public static SHUGO_SKIN_VIEW: string = "qmr.ShugopifuView";			//灵宠皮肤
		public static SYS_HORSE_TIP: string = "qmr.HorseRaceTip"; 				//跑马灯
		public static GODCLOTH_VIEW: string = "qmr.GodClothView";				//神装界面
		public static HEROPRACTICE_VIEW: string = "qmr.HeroPracticeView";		//修行界面
		public static HEROBATTLE_VIEW: string = "qmr.HeroBattleView";			//战装界面
		public static PROMPT_VIEW: string = "qmr.PromptView";					//提示窗口
		public static GETMATERIAL_VIEW: string = "qmr.GetMaterialView";			//材料获取窗口
		public static LUCKYSHOPBUY_VIEW: string = "qmr.LuckyShopBuyView";			//材料获取窗口
		public static EQUIPWAY_VIEW: string = "qmr.EquipWayView";				//装备获取窗口
		public static GETWAY_EXP_VIEW: string = "qmr.GetWayView";				//经验获取窗口
		public static ILLUSTRATED_VIEW: string = "qmr.IllustratedView";			//神将图鉴
		public static HERO_SKILL_VIEW: string = "qmr.HeroSkillView";			//主角技能界面
		public static HERO_RUNE_CHANGE_VIEW: string = "qmr.HeroRuneChangeView";	//符文替换界面
		public static HERO_RUNE_DECOMPOSE_VIEW: string = "qmr.HeroRuneDecomposeView";//符文分解界面
		public static HERO_PRACTICE_SKILL_VIEW: string = "qmr.HeroPracticeSkillView";//修行技能界面
		public static HERO_PRACTICE_TIPS_VIEW: string = "qmr.HeroPracticeTipsView";//修行悟道界面
		public static HERO_MAGIC_VIEW: string = "qmr.NewMagicWeaponView";			//主角法宝界面
		public static HERO_MAGIC_UPSTAR: string = "qmr.MagicUpStarNewView";		//法宝升星界面
		public static HERO_MAGIC_UPLEVEL: string = "qmr.MagicUpLevelView";		//法宝升级界面
		public static HERO_MAGIC_ILLUSTRATED: string = "qmr.MagicIllustratedView";		//法宝图鉴界面
		public static HERO_MAGIC_TIPS: string = "qmr.MagicTipsView";		//法宝图鉴界面
		public static MAGIC_MASTER: string = "qmr.MagicMasterDialog";		//法宝大师
		public static EQUIP_DETAIL_VIEW: string = "qmr.EquipDetailView";		//装备详情界面
		public static EQUIP_WEAR_VIEW: string = "qmr.EquipWearView";		//装备穿戴界面
		public static EQUIP_SUIT_DETAIL_VIEW: string = "qmr.EquipSuitDetailView";	//装备套装详情界面
		public static COLLECT_SUIT_DETAIL_VIEW: string = "qmr.CollectSuitDetailView";	//收集套装详情界面
		public static COLLECT_SUIT_VIEW: string = "qmr.CollectSuitView"; //套装收集


		public static HEROBOOK_RENDER_TIP_VIEW: string = "qmr.HeroBookRenderTIpView";		//秘籍提示展示界面



		public static MAGIC_SKILL_INFO: string = "qmr.MagicSkillInfoView";		//主角法宝技能
		public static OFFLINE_HANGUP_VIEW: string = "qmr.OffLineHangup";		//离线挂机窗口
		public static DECORATE_VIEW: string = "qmr.DecorateView";				//装扮系统
		public static HALO_VIEW: string = "qmr.HaloView";						//光环系统
		public static BOOK_LIBRARY: string = "qmr.Cangjingge";					//藏经阁界面
		public static BOOK_FUSION: string = "qmr.BookFusion";					//秘籍合成界面
		public static BOOK_FUSION_NEW_VIEW: string = "qmr.BookFusionNewView";					//新秘籍合成界面
		public static RECEPI_VIEW: string = "qmr.RecipeView";					//秘籍配方预览界面
		public static AGENT_FUSION_VIEW: string = "qmr.AgentFusionView";					//智能合成界面
		
		
		
		public static BOOK_WAY: string = "qmr.BookWay";							//秘籍获取界面
		public static BOOK_PROP_INFO: string = "qmr.BookpropinfoView";			//秘籍属性页面
		public static RESOLVE_VIEW: string = "qmr.ResolveView";                 //装备分解界面
		public static BAG_DECOMPOSE_VIEW: string = "qmr.BagDecomposeView";      //背包分解界面
		public static EMAIL_VIEW: string = "qmr.EmailView";          			//邮件模块
		public static FRIEND_MAIN: string = "qmr.FriendMainView";          			//好友模块
		public static FRIEND_VIEW: string = "qmr.FriendView";          			//好友模块
		public static CHAT_VIEW: string = "qmr.ChatView";             			//聊天模块
		public static CHAT_ROLE_VIEW: string = "qmr.ChatRoleView";             	//查看玩家信息模块
		public static WING_SKILL_INFO: string = "qmr.WingSkillinfoView";        //翅膀技能
		public static SHUGO_SKILL_INFO: string = "qmr.ShugoSkillinfoView";      //灵宠技能
		public static COPY_VIEW: string = "qmr.CopyView";						//副本模块
		public static COPY_DAY_CHOOSE_VIEW ="qmr.CopyDayChooseView";      //日常副本选择难度界面
		public static COPY_LOTTERY_VIEW: string = "qmr.CopyRuneLotteryView";	//地狱塔转盘模块
		public static COPY_RANK_VIEW: string = "qmr.CopyRuneRankView";			//地狱塔排行榜模块
		public static DAILY_VIEW: string = "qmr.DailyView";						//日常模块
		public static DAILY_WEEK_VIEW: string = "qmr.DailyLiveWeekView";				//日常模块-活动日历
		public static DAILY_CHALLENGE_VIEW: string = "qmr.DailyAutoChallengeView";//护送任务->自动挑战
		public static DAILY_BOOK_REMIND_VIEW: string = "qmr.DailyBookRemindView";//护送任务->取经归来提醒
		public static DAILY_BOOK_AWARD_VIEW: string = "qmr.DailyBookAwardView"; //护送任务->取经归来，领奖
		public static DAILY_BOOK_LOOT_VIEW: string = "qmr.DailyBookLootView";   //护送任务->抢夺秘籍，确认面板
		public static DAILY_AREAN_PLAYERINFO_VIEW: string = "qmr.DailyAreanPlayerInfoView";   //竞技场玩家详细信息面
		public static DAILY_AREAN_REWARD_VIEW: string = "qmr.DailyAreanRewardView";   //竞技场 每日奖励
		public static DAILY_AREAN_DEFENSE_RECORD_VIEW: string = "qmr.DailyAreanDefenseRecordView";   //竞技场 防守记录
		public static DAILY_AREAN_DEFENSE_VIEW: string = "qmr.DailyAreanDefenseView";   //竞技场 防守阵容
		public static DAILY_AREAN_RESULT_VIEW: string = "qmr.DailyAreanResultView";   //竞技场 结算界面
		public static DAILY_AREAN_RANK_REWARD_VIEW: string = "qmr.DailyAreanFirstRewardView";   //竞技场 首排奖励界面
		public static DAILY_REWARDTASK_RESULT_VIEW: string = "qmr.DailyRewardTaskResultPage";   //悬赏 结算界面
		public static DAILY_REWARDTASK_LEVEL_VIEW: string = "qmr.DailyReward2TaskLvlView";   //悬赏 等級界面
		public static DAILY_REWARDTASK_INFO_VIEW: string = "qmr.DailyReward2TaskContent";   //悬赏 任务界面

		/**  无间炼狱 */
		public static ENDLESS_HELL: string = "qmr.EndlessHellView";//无间炼狱
		public static EMBATTLE_COTY_VIEW: string = "qmr.EmbattleCopyView";//神将副本
		public static EMBATTLE_COTY_CHAPTER_VIEW: string = "qmr.EmbattleCopyChpaterView";//神将副本章节界面
		public static EMBATTLE_COPY_CHALLENGE: string = "qmr.EmbattleCopyChallenge";//神将副本挑战界面
		public static EMBATTLE_COPY_BUY_COUNT: string = "qmr.EmbattleCopyBuyView";//神将副本挑战界面

		/** 天庭 */
		public static TEAM_COPY_VIEW_NEW: string = "qmr.TeamCopyViewNew";//新组队副本(Slow)
		public static TEAM_COPY_TEAM_VIEW: string = "qmr.TeamCopyTeamView";//队伍界面(Slow)
		public static TRANSLATE_TEAM_FORMATIOM_VIEW: string = "qmr.TranslateTeamFormationView";//队伍布阵界面(Slow)
		public static TEAM_COPY_INVITED_VIEW: string = "qmr.TeamCopyInvitedView";//邀请界面
		public static TEAM_COPY_INVITED_MSG_VIEW: string = "qmr.TeamCopyInvitedMsgView";//邀请信息界面
		public static TEAM_CHAT: string = "qmr.TeamCopyChatView";//邀请信息界面
		public static TEAM_COPY_REWARD: string = "qmr.TeamCopyReward";//组队副本奖励预览界面

		public static EMBATTLE_FLYUP_EVERYSTAGE_PREVIEW: string = "qmr.EmbattleFlyUpEveryStagePreview";//飞升单个阶段预览界面
		public static EMBATTLE_FLYUP_PREVIEW: string = "qmr.EmbattleFlyUpPreview";//飞升预览界面









		public static PEAK_ARENA_FIGHT_VIEW: string = "qmr.PeakArenaPrepareFightView";//巅峰争霸备战界面
	
		public static PEAK_ARENA_VIEW: string = "qmr.PeakArenaView";//巅峰争霸界面

		public static SEVER_DAYBOSS_BOSS_RANK: string = "qmr.SeverDayBossRank";//全服日常boss排行榜
		public static SEVER_DAYBOSS_VIEW: string = "qmr.SeverDayBossView";//全服日常boss
		public static SEVER_BOSS_BULLET_SCREEN: string = "qmr.ServerBossBulletScreen";//全服日常boss

		public static BOSSCHALLENGES_RANK_VIEW: string = "qmr.BossChallengesRankView";//挑战BOSS排行
		public static BOSSCHALLENGES_VIEW: string = "qmr.BossChallenges";		//挑战BOSS窗口
		public static BOSS_VIEW: string = "qmr.BossView";						//BOSS系统
		public static BOSS_DAMAGE_RECORD: string = "qmr.BossDamageRecord";      //BOSS伤害排行
		public static BOSS_AUTO_CHALLENGE: string = "qmr.BossAutoChallenge";    //BOSS自动挑战列表
		public static BOSS_CHALLENGES_ALERT: string = "qmr.BossChallengesAlert";//BOSS挑战购买弹出框
		public static BOSS_INSPIRE_ALERT: string = "qmr.BossInspireAlert";		//boss挑战鼓舞确认框
		public static BOSS_REFRESH_REMIND: string = "qmr.BossRefreshRemind";	//boss刷新提醒
		public static HAVE_BESTEQUIP_REMIND: string = "qmr.HaveBestEquipRemindView";	//更好装备提示
		public static ITEM_USE_REMIND: string = "qmr.ItemUseRemindView";		//物品使用提提示
		public static SYSTEM_RULE: string = "qmr.SystemRule";             		//通用规则说明

		public static FORGE_MASTER_VIEW: string = "qmr.ForgeMasterDialog";     	//锻造大师面板
		public static TIPS_WARRIOR_VIEW: string = "qmr.WarriorTipsView";       	//武将TIPS
		public static TIPS_EQUIP_VIEW: string = "qmr.EquipTipsView";     		//装备TIPS
		public static TIPS_ITEM_VIEW: string = "qmr.ItemTipsView";     			//物品TIPS
		public static TIPS_SKILL_VIEW: string = "qmr.SkillTipsView";     		//技能TIPS
		public static REBIRTH_VIEW: string = "qmr.RebirthView";     		//技能TIPS
		public static TIPS_HERO_VIEW: string = "qmr.HeroTipsView";     		//背包武将TIPS
		public static TIPS_ITEM_USE_VIEW: string = "qmr.ItemUseView";     		//背包道具使用前往TIPS

		public static MAGIC_REPOSITORY: string = "qmr.MagicRepositoryNew";     		//法宝仓库



		public static SHOP_VIEW: string = "qmr.ShopPanel";     					//商城
		public static SHOP_ENTRANCE_VIEW: string = "qmr.ShopEntranceView";     	//商城入口
		public static XUNBAO_VIEW: string = "qmr.TreasurehouseView";     				//寻宝
		public static SEVENT_LOGIN_VIEW: string = "qmr.SeventDayLoginView";     //七日登陆
		public static WELFAREVIEW_VIEW: string = "qmr.WelfareView";     		//福利
		public static FIRST_RECHARGE_VIEW: string = "qmr.FirstRechargetView";   //首充
		public static FIRST_REBATE_VIEW: string = "qmr.FirstRebateView";   		//封测返利
		public static ACC_RECHARGE_VIEW: string = "qmr.AccRechargeView";     	//累充
		public static OPEN_SEVER_ACTIVITY_VIEW: string = "qmr.OpenServerActivityView"; //开服活动
		public static OPEN_SEVER_RANK_DETIAL_VIEW: string = "qmr.OpenServerDetailRankView"; //开服排行
		public static VIP_VIEW: string = "qmr.VipNewView"; 						//VIP
		public static SUPER_VIP_VIEW: string = "qmr.SuperVipPopView"; 			//超级VIP

		public static OPEN_ACHIEVEMENT_VIEW: string = "qmr.Achievement"; 			//成就

		public static EMBATTLE_ZFADD_VIEW: string = "qmr.EmbattleZFAdd"; 			//阵法加成说明
		public static EMBATTLE_ZFTJ_VIEW: string = "qmr.EmbattleZFTJView"; 			//阵法推荐
		public static EMBATTLE_TEAM_VIEW: string = "qmr.EmbattleTeamPopView"; 			//阵法布阵
		public static EMBATTLE_CHANGE_VIEW: string = "qmr.EmbattleChangePopView"; 			//更换上阵
		public static EMBATTLE_ZF_UP: string = "qmr.EmbattleZFUpPopView"; 			//阵法升级
		public static EMBATTLE_ZF_MASTER: string = "qmr.EmbattleZFMasterPopView"; 			//阵法大师

		public static GUILD_LIST_VIEW: string = "qmr.GuildListView"; 				//帮会列表
		public static GUILD_CREATE_VIEW: string = "qmr.GuildCreateView"; 			//帮会创建
		public static GUILD_MAIN_VIEW: string = "qmr.GuildMainView"; 				//帮会主界面
		public static GUILD_HISTORY_VIEW: string = "qmr.GuildHistoryView"; 			//帮会记录
		public static GUILD_MEMBER_VIEW: string = "qmr.GuildMemberInfoView"; 		//成员信息
		public static GUILD_APPLYFOR_LIST_VIEW: string = "qmr.GuildApplyForListView"; //帮会申请列表
		public static GUILD_POST_VIEW: string = "qmr.GuildPostView"; 				//帮会任命
		public static GUILD_BOSS_RANK_VIEW: string = "qmr.GuildBossRankView"; 		//帮会boss排行
		public static GUILD_EDIT_NOTICE_VIEW: string = "qmr.GuildEditNoticeView"; 	//帮会修改公告界面
		public static GUILD_EDIT_NAME_VIEW: string = "qmr.GuildEditNameView"; 		//帮会修改名称界面
		public static GUILD_COPY_PASS_RANK: string = "qmr.GuildCopyPassRank";    	//帮派副本排行
		public static GUILD_COPY_ADDPROP_RANK: string = "qmr.GuildCopyAddPropRank"; //帮派加成排行
		public static GUILD_EMBATTLE_VIEW: string = "qmr.GuildEmbattleView"; //帮会帮战布阵界面
		public static GUILD_EMBATTLE_MATCH_VIEW: string = "qmr.GuildBattleMatchView"; //帮会帮战匹配成功界面
		public static GUILD_EMBATTLE_ACCOUNT_VIEW: string = "qmr.GuildBattleAccountView"; //帮会帮战匹配成功界面
		public static GUILD_BATTLE_REWARD_VIEW: string = "qmr.GuildBattleRewardView"; //帮会帮战奖励预览界面
		public static GUILD_LABYRINTH_VIEW: string = "qmr.GuildLabyrinthView";//帮会迷宫
		public static GUILD_DONATE_VIEW: string = "qmr.GuildDonateView";//帮会捐献
		public static GUILD_SKILL_VIEW: string = "qmr.GuildSkillView";//帮会技能
		public static GUILD_SKILL_LEARN: string = "qmr.GuildSkillInfoTips";//帮会技能弹窗
		public static GUILD_TASK_VIEW: string = "qmr.GuildTaskView";//帮会任务
		public static GUILD_TASK_SCENE_VIEW: string = "qmr.GuildTaskSceneView";//帮会任务场景
		public static GUILD_TASK_CHAPTER_VIEW: string = "qmr.GuildTaskChapterView";//帮会任务章节
		public static GUILD_TASK_MONSTER_INFO: string = "qmr.GuildTaskMonsterInfoView";//帮会任务怪物信息
		public static GUILD_TASK_SUBMIT_ITEM_VIEW: string = "qmr.GuildTaskSubmitItemView";//帮会任务提交道具
		public static GUILD_FEED_VIEW: string = "qmr.GuildFeedView";//帮会喂养(新的帮会BOSS)
		public static GUILD_FEED_BONUS_VIEW: string = "qmr.GuildFeedBonusView";//帮会喂养奖励预览(新的帮会BOSS)
		public static GUILD_FEED_BOSS_RANK_VIEW: string = "qmr.GuildFeedBossRankView";//帮会喂养boss排行榜

		public static BATTLE_EQUIP_SHOP_VIEW: string = "qmr.BattleEquipShopView"; 	//战装商城
		public static BATTLE_EQUIP_RESOLVE_VIEW: string = "qmr.BattleEquipResolveView"; //战装分解
		public static MAIN_CITY_VIVEW: string = "qmr.MainCity"; 				 	//主城模块
		public static MAIN_CITY_HEAD_ALERT: string = "qmr.MainCityHeadAlert";     	//主页名字详情
		public static MAIN_MODIFY_NAME_ALERT: string = "qmr.MainModifyNameAlert";   //主页修改名字

		public static ACT_DATI_VIVEW: string = "qmr.ActDaTiView";     				//答题界面
		public static ACT_DATI_RESULT_VIVEW: string = "qmr.ActDaTiResultView";     		//答题结束界面
		public static ACT_DATI_RANK_REWARD_VIVEW: string = "qmr.ActDaTiRankRewardView";    //答题排行奖励界面
		public static ACT_TIANTI_RANK_VIVEW: string = "qmr.TianTiRankView";    		//天梯排行
		public static FULL_SERVER_RANK_VIEW: string = "qmr.FullServerRankView";    	//全服排行榜
		public static ACT_ACTIVITY_HALL_VIVEW: string = "qmr.ActivityHallView";    //活动大厅
		public static BE_STRONGER_VIVEW: string = "qmr.BeStronger";    //我要变强
		public static DEMON_EMBATTLE_VIEW: string = "qmr.DemonEmbattleView";    //钟馗抓鬼 布阵
		public static DEMON_SHOP_VIEW: string = "qmr.DemoShop";    //钟馗抓鬼 神秘商店
		public static DEMON_BUFFSHOP_VIEW: string = "qmr.DemonPeento";    //钟馗抓鬼 蟠桃
		public static DEMON_CHALLENGE_VIEW: string = "qmr.DemonChallengePage";    //钟馗抓鬼 挑战
		public static DEMON_PROP_VIEW: string = "qmr.DemonPropPage";    //钟馗抓鬼 助战属性
		public static DEMON_SCORE_SHOP_VIEW: string = "qmr.DemonScoreShopView";    //钟馗抓鬼 积分商店
		public static EMBATTLE_JB_ALERT: string = "qmr.EmbattleJBAlert";    		//羁绊激活提醒

		public static ACTIVITY_REFRESH_REMIND_VIEW: string = "qmr.ActivityRefreshRemindView";	//活动刷新提醒
		public static SUPREME_VIEW: string = "qmr.SupremeView";    					//至尊塔活动
		public static SUPREME_PREVUE_VIEW: string = "qmr.SupremeRrevueView";    	//至尊塔活动预告
		public static SUPREME_OVER_RESULT_VIVEW: string = "qmr.SupremeOverResultView";//至尊塔活动结束结算界面
		public static SUPREME_RANK_VIVEW: string = "qmr.SupremeRankView";			//至尊塔活动排行榜界面
		public static SUPREME_BUY_REVIVE_ALERT: string = "qmr.SupremeBuyReviveAlert";	//至尊塔活动挑战失败复活提示界面
		public static CROSS_SERVER_VIEW: string = "qmr.CrossServerView";     		//跨服界面
		public static CROSS_BOSS_VIEW: string = "qmr.CrossBossView";     		//跨服BOSS
		public static CROSS_DOOR_VIEW: string = "qmr.CrossDoorlView";     		//跨服BOSS门
		public static CROSS_BOSS_CHAPTER_VIEW: string = "qmr.CrossBossChapterView";     		//跨服BOSS章节界面
		public static CROSS_BOSS_MONSTER_INFO_VIEW: string = "qmr.CrossBossMonsterInfoView";     		//跨服BOSS章节界面
		
		
		
		

		public static CROSS_REALM_VIEW: string = "qmr.CrossRealmView"; //跨服系统
		public static CROSS_BOSS_INFO: string = "qmr.SanjieBossPop"; //跨服三界boos信息

		public static YUEKA_PAGE_VIEW: string = "qmr.InvestView"; //成长基金
		public static TORTOISERUN: string = "qmr.TortoiseRunView"; //乌龟赛跑
		public static YUEKA_GET_VIEW: string = "qmr.MonthCardGet"; //月卡
		// public static RECHARGE_VIEW: string = "qmr.RechargeView"; //充值界面
		public static TORTOISE_RUN_ITEM_USE_VIEW: string = "qmr.TortoiseItemUseView"; //乌龟赛跑道具使用面板

		public static COMMON_COUTDOWN_VIEW: string = "qmr.CommonCoutDownView"; //通用倒计时

		public static GUIDE_VIEW: string = "qmr.GuideView"; //指引模块
		public static GUIDE_PLOT_VIEW: string = "qmr.GuidePlotView"; //新手剧情模块
		public static BATTLE_RANK_VIEW: string = "qmr.BattleRankView"; //战斗结算排行榜

		public static HALO_GATHER_SOUL: string = "qmr.HaloGatherSoulView"; //光环聚魂
		public static FORGE_CHAIN_VIEW: string = "qmr.ForgingChainDialog";     	//锻造大师面板

		public static MONSTER_SOUL_VIEW: string = "qmr.MonsterSoulView"; //兽魂
		public static GOLD_WILL_SET_VIEW: string = "qmr.GoldWillSetView"; //神将台
		public static GOLDWILL_PREVIEW_VIEW: string = "qmr.GoldWillPreview"; //神将台-神将预览
		public static GOLD_WILL_EXTRACT: string = "qmr.GoldWillExtract"; //神将台-抽奖效果

		public static FUN_OPEN_FORESHOW_VIEW: string = "qmr.NewFunOpenForeshowView"; //功能开启预告
		public static FUN_OPEN_SHOW_VIEW: string = "qmr.FunOpenShowView"; //功能开启弹框

		public static JINJIE_EAT_DAN: string = "qmr.EatDan"; //进阶系统吃丹界面


		public static ZERO_BUY_VIEW: string = "qmr.SpecialBuyView"; //0元购
		public static LUCKY_SHOP_VIEW: string = "qmr.LuckyShopView"; //机缘商店
		public static BOSS_INFO_TIPS: string = "qmr.BossInfoTips"; //怪物tips
		public static XUNBAO_PRO_PREVIEW: string = "qmr.XunbaoProbPreView"; //寻宝属性预览

		public static DAILY_FIRSR_RECHARGE: string = "qmr.DailyFirstRechargeView"; //每日首充
		public static FES_CELE_VIEW: string = "qmr.FestivalcelebrationView"; //节日庆典


		public static COPY_TOWER_RANK: string = "qmr.CopyTowerRankView"; //玲珑塔排行榜
		public static COPY_TOWER_SHOP: string = "qmr.CopyTowerShopView"; //玲珑塔商店

		public static VIP_MAIN_VIEW: string = "qmr.VipMainView"; //vip豪礼
		public static VIP_UP_LEVEL: string = "qmr.VipUpView"; //vip升级
		public static VIP_SUPER_GIFT: string = "qmr.SuperGiftView"; //特惠礼包
		public static BATTLE_BIG_SKILL_VIEW: string = "qmr.BattleBigSkillView"; //终极技能

		public static GOLD_LOTTERY_VIEW: string = "qmr.GoldLotteryView"; //元宝转盘
		public static WARRIOR_PUZZLE_VIEW: string = "qmr.WarriorPuzzleView"; //神将拼图
		public static WARRIOR_DISINTEGRATE_VIEW: string = "qmr.WarriorDisintegrateView"; //神将分解
		public static WARRIOR_SOUL_SHOP_VIEW: string = "qmr.WarriorSoulShopView"; //将魂商店
		public static WARRIOR_SOUL_SHOP_BUY_VIEW: string = "qmr.WarriorSoulShopBuyView"; //将魂商店购买项
		public static GOD_COLLECT_VIEW: string = "qmr.GodCollectView"; //神将收集
		public static GOLD_WILL_SET_HERO_ALERT: string = "qmr.GoldWillSetHeroAlert"; //神将领取
		public static OPEN_XIANG_MOLU_VIEW: string = "qmr.OpenXiangmoluView"; //降魔录
		public static JINJIE_UP_DAN: string = "qmr.UpJinJieDanView"; //进阶直升丹
		public static GOD_CHALLENGE_VIEW: string = "qmr.GodChallengeView"; //神将挑战
		public static GOD_CHALLENGE_INFO: string = "qmr.GodChallengeInfoView"; //神将挑战
		public static DAILY_AREAN_EMBATTLE_VIEW: string = "qmr.DailyAreanEmbattleView"; //竞技场通用布阵

		public static JINJIE_3_DAN_VIEW: string = "qmr.JinjieUpDanView"; //直升3阶
		public static BOSS_LEIZHU_VIEW: string = "qmr.BossLeizhuView"; //野外BOSS擂主
		public static LOGIN_GIFT_VIEW: string = "qmr.LoginGiftView"; //首次登陆礼包
		public static HANG_BAO_XIANG: string = "qmr.HangBaoxiang"; //挂机宝箱
		public static HANG_BAO_XIANG_ALERT: string = "qmr.HangBaoxiangAlert"; //挂机卡
		public static EMBATTLE_ZF_Page: string = "qmr.EmbattleZFPage"; //阵法
		public static HERO_UPDATE_ALERT: string = "qmr.HeroUpdateAlert"; //武将升级


		public static ONE_BUY: string = "qmr.OneBuyView"; //1元购
		public static ONE_SUPER_BUY: string = "qmr.OneSuperBuyView"; //超级1元购
		public static GOLD_EGG: string = "qmr.GoldEggView"; //砸金蛋
		public static TEMPLE_XUNBAO: string = "qmr.TempleXunbaoView"; //天宫寻宝


		public static LINGXIAO_BAODIAN: string = "qmr.LingxiaoshengdianView"; //凌霄宝殿
		public static ONE_LIMITBUY: string = "qmr.OnelimitbuyView"; //1元抢购

		public static SHARE_GAME: string = "qmr.ShareGameView";
		public static WXDAILYRED_VIDW: string = "qmr.WXDailyRewardView";
		public static ATTENT_GIFT_VIEW: string = "qmr.AttentGiftView";
		public static LUCK_SHOP_GET: string = "qmr.LucktShopGetView"; //幸运商店购买
		public static MAIN_SHARE_GAME: string = "qmr.MainShareView";

		public static NTM_VIEW: string = "qmr.NantmView";//南天门主面板
		public static NTM_RANK_VIEW: string = "qmr.NantmRankView";//南天门排行榜面板
		public static NTM_HELL_VIEW: string = "qmr.NtmHellView";//南天门大厅

		public static MINE_WAR_VIEW: string = "qmr.MineWarView";//占矿主面板
		public static MINE_WAR_PREVIEW: string = "qmr.MineWarPreView";//夺矿面板
		public static MINE_TECH_VIEW: string = "qmr.MineTechView";//科技面板
		public static MINE_RECORD_VIEW: string = "qmr.MineRecordView";//战报面板

		public static DAILY_ACTIVILY_HALL: string = "qmr.DailyActivityView";//每日活动
		public static DAILY_ACTIVILY_CAIFUJIANGLI: string = "qmr.ChongzhizhuanpanrewardView";//每日活动-财富奖励
		public static DAILY_ACTIVILY_CAIFUJIANGLI_LOG: string = "qmr.ChongzhiMylogView";//每日活动-财富奖励_日志

		public static NEW_YEAR_ACTIVILY: string = "qmr.NewyearActivityView";//新年活动

		public static LONG_GONG: string = "qmr.LonggongActivityView";//海底龙宫
		public static LONG_GONG_YULAN: string = "qmr.LonggongyulanView";//海底龙宫

		public static TITLE_MAIN: string = "qmr.TitleMainView";//称号主面板
		public static TITLE_ATTRIBUTE: string = "qmr.TitleAttributeView";//称号属性面板

		public static ABIHELL_MAIN: string = "qmr.ABiHellMainView";//阿鼻地狱主面板
		public static ABIHELL_BOX: string = "qmr.ABiHellBoxView";//阿鼻地狱宝箱面板

		public static RECHARGE_GUILD: string = "qmr.RechargeGuildView";//充值引导

		public static XYTB_VIEW: string = "qmr.FestivalLuckyView";//幸运探宝

		public static XSLB_VIEW: string = "qmr.XianshilibaoView";//限时礼包

		public static YYLB_VIEW: string = "qmr.OneSpecialBuyView";//一元礼包

		public static YYCJ_VIEW: string = "qmr.OneHeroBuyView";//一元橙将

		public static CROSS_PK_GAME_MAIN:string = "qmr.CrossPkGameMainView";//跨服争霸主面板
		public static CROSS_PK_GAME_PAPRE:string = "qmr.PapreWarMainView";//跨服争霸备战界面
		public static CROSS_PK_GAME_GUESS_PRE:string = "qmr.CrossGuessPreview";//跨服争霸备战界面
		public static CROSS_PK_GAME_VS_RECORD:string = "qmr.CrossVSRecordView";//跨服争霸备战界面
		public static CROSS_PK_GAME_OVER:string = "qmr.CrosspkGameOverView";//跨服争霸备战界面
		public static CROSS_PK_GAME_SUCESS:string = "qmr.CrosspkGameSuccessView";//跨服争霸备战界面
		public static CROSS_PK_ENTRANCE:string = "qmr.CrosspkEntranceView";//跨服争霸入口面板
		public static CROSS_PK_REWARD_SHOW:string = "qmr.CrossRewardShowView";//跨服争霸入口面板

		/**合服 */
		public static MERGE_AVTIVE: string = "qmr.MergeServerAcitvityView";//合服活动

		/**限时活动 */
		public static LIMIT_ACTIVITY: string = "qmr.LimitServerActivityView";//限时活动
		/**羁绊 */
		public static EMBATTLE_VIEW_JB: string = "qmr.EmbattleJBPage";
		public static EMBATTLE_JB_SELECT:string = "qmr.EmbattleJBSelectView";

		/**拆红包 */
		public static OPEN_WALLET_VIEW:string = "qmr.OpenWalletView";//拆红包

		/**神将好礼 */
		public static GOD_GIFTS:string = "qmr.GodgiftsView";//神将好礼

		/**在线礼包 */
		public static ONLINE_REWARD:string = "qmr.OnlineRewardView";//神将好礼

		/**qq转盘红包 */
		public static RED_WHEEL_VIEW:string = "qmr.RedWheelView";

		/**助阵 */
		public static FORMATION_HELP: string = "qmr.FormationHelpView";//助阵主界面
		public static FORMATION_HELP_CHANGE_LEFT: string = "qmr.FormationHelpChangeLeftView";//助阵位上神将
		public static FORMATION_HELP_ATTR: string = "qmr.FormationHelpAttrView";//助阵总属性界面
		public static FORMATION_HELP_FIGHT: string = "qmr.FormationHelpFightView";//助阵战力界面

		/**竞技场 */
		public static AREAN_VIEW:string = "qmr.AreanView";
		/**神将商店 */
		public static HERO_SHOP_VIEW: string = "qmr.HeroShopView";//助阵总属性界面
		/**新豪华首充 */
		public static NEW_FIRSTRECHARGE_VIEW: string = "qmr.NewFirstRechargetView";//新豪华首充

		/**六一寻宝排行 */
		public static CHILDRENDAY_TREASURE_RANK: string = "qmr.ChildrenDayTreasureRankView";
		/**六一寻宝积分奖励 */
		public static CHILDRENDAY_TREASURE_SCORE_REWARD: string = "qmr.ChildrenDayTreasureRewardView";
		/**系统设置 */
		public static GAME_SETTING_VIEW: string = "qmr.MaingamesetAlert";
		/**神将重生选择界面 */
		public static REBIRTH_CHOOSE_VIEW: string = "qmr.RebirthChooseView";
		/**法宝重生选择界面 */
		public static MAGIC_REBORN_CHOOSE_VIEW: string = "qmr.MagicRebornChooseView";
		/**天梯 */
		public static TIANTI_MATCH_VIEW: string = "qmr.DailyTianTiMatchPage";

		public static GUILD_WAR_MAIN: string = "qmr.GuildWarMainView";//帮派战主界面
		public static GUILD_WAR_HISTORY_MAIN: string = "qmr.GuildWarHistoryView";//荣誉商店
		public static GUILD_WAR_RANK_MAIN: string = "qmr.GuildWarRankMainView";//帮派排行榜
		public static GUILD_WAR_PLAY_MAIN: string = "qmr.GuildWarPlayView";//帮派战对战面板
		public static GUILD_WAR_CHALLGE_MAIN: string = "qmr.GuildWarChallgeView";//帮派战挑选对手面板
		public static GUILD_WAR_RECORD_MAIN: string = "qmr.GuildWarRecordView";//帮派战对阵图面板
		/**神将升星预览界面 */
		public static EMBATTLE_SX_PREVIEW_VIEW:string = "qmr.EmbattleSXPreviewView";
		/**新5倍首充 */
		public static NEW_FIVERECHARGE_VIEW:string = "qmr.NewFiveRechargetView";
		/**意见反馈 */
		public static FEEDBACK_VIEW:string = "qmr.FeedbackView";
		/**新神将好礼 */
		public static NEW_GODGIFT:string = "qmr.NewGodgiftsView";
		/**三日累充 */
		public static THREE_DAY_RECHARGE:string = "qmr.ThreeDayConsumeView";
	}
}
