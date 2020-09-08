module qmr {
	export class MessageID
	{
		/**
		 *
		 * @author coler 2018.12.11
		 * 消息ID自动生成，请勿修改
		 *
		 */
		/** 映射协议ID对应的协议名 */
		private static MSG_KEYS: qmr.Dictionary = new qmr.Dictionary();
		/** 游戏初始化调用 */
		public static init()
		{
			let self = this;
			let id:number;
			for (let p in self)
			{
				id = self[p];
				self.MSG_KEYS.set(id, p);
			}
		}

		/** 通过本类的协议ID映射协议名字 */
		public static getMsgNameById(id: number): string
		{
			return MessageID.MSG_KEYS.get(id)
		}
		
		public static MSG_EMPTY:number = 0;
		/**  异常消息 */
		public static S_EXCEPTION_MSG:number = 900; 
		/**  登录 */
		public static C_USER_LOGIN:number = 1001; 
		/**  登录成功 */
		public static S_USER_LOGIN:number = 1002; 
		/**  被封禁提示 */
		public static S_USER_LOGIN_BAN:number = 1003; 
		/** 注册 */
		public static C_LOGIN_REGISTER:number = 1005; 
		/** 登出 */
		public static C_USER_LOGOUT:number = 1007; 
		public static S_USER_LOGOUT:number = 1008;
		/**  登录注册完成请求 角色信息 */
		public static C_USER_LOGIN_INIT_FINISH:number = 1009; 
		/**  登录注册完成请求 角色信息 */
		public static S_USER_LOGIN_INIT_FINISH:number = 1010; 
		/** 客户端 查看其它角色信息 */
		public static C_GET_PLAYER_INFO:number = 1021;         
		public static S_GET_PLAYER_INFO:number = 1022;
		/** 修改角色昵称 */
		public static C_EDIT_PLAYER_NICKNAME:number = 1023;         
		public static S_EDIT_PLAYER_NICKNAME:number = 1024;
		/**  登录推送客户端玩家离线奖励数据操作 */
		public static S_LOGIN_OFFLINE_HANGUP_PUSH:number = 1028;
		/**  登录推送客户端玩家的背包数据 */
		public static S_LOGIN_BACK_PACK_PUSH:number = 1029;
		/**  客户端核查随机名字是否可以使用 */
		public static C_GET_NICKNAME_INFO:number = 1030;
		public static S_GET_NICKNAME_INFO:number = 1031;
		/**  客户端通知sdk上报数据操作 */
		public static C_SEND_SDK_DATA:number = 1032;
		public static S_SEND_SDK_DATA:number = 1033;
		/** 获取我的鱼儿 */
		public static C_GET_FISH_INFO:number = 1051; 
		public static S_GET_FISH_INFO:number = 1052;
		/** 购买鱼儿 */
		public static C_BUY_FISH:number = 1053; 
		public static S_BUY_FISH:number = 1054;
		/** 合并鱼儿 */
		public static C_COMBINE_FISH:number = 1055; 
		public static S_COMBINE_FISH:number = 1056;
		/** 领取金币奖励 */
		public static C_GET_MONEY_REWARD:number = 1057; 
		public static S_GET_MONEY_REWARD:number = 1058;
		/** 获取金币信息 */
		public static C_GET_MONEY_INFO:number = 1059; 
		public static S_GET_MONEY_INFO:number = 1060;
		/**  客户端通知服务器加载成功，服务器可以推送指令 */
		public static C_SYNC_LOAD_FINISH:number = 2000; 
		/**  同步属性变化 */
		public static S_SYN_PROPERTY:number = 2001; 
		/** 同步时间 */
		public static C_SYNC_TIME:number = 2101; 
		/** 同步时间 */
		public static S_SYNC_TIME:number = 2102; 
		/** debug */
		public static C_DEBUG_COMMON:number = 3101; 
		public static S_DEBUG_COMMON:number = 3102;
		/**  跨服服务器心跳 */
		public static CROSS_C_HEART_BEAT:number = 100001;        
		public static CROSS_S_HEART_BEAT:number = 100002;
		/**  跨服服务器注册 */
		public static CROSS_C_SERVER_REGISTER:number = 100003;        
		public static CROSS_S_SERVER_REGISTER:number = 100004;
		/** 跨服错误吗 */
		public static CROSS_S_EXCEPTION_MSG:number = 100005;
		/**  跨服服务器注册成功推送消息 */
		public static CROSS_C_SERVER_PUSH:number = 100006;       
		public static CROSS_S_SERVER_PUSH:number = 100007;
		/**  坑爹的协议，由于oss不支持跨服的http服务，暂时由游戏服的http接收后发送跨服处理 */
		public static CROSS_C_HTTP_DATA:number = 100008;
		

	}
}