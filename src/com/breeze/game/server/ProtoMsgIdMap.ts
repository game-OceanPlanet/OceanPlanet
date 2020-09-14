module qmr {
	/**
	 *
	 * @author coler 2018.12.11
	 * 根据消息MessageID自动生成，请勿修改
	 *
	 */
	export class ProtoMsgIdMap {
		private static _instance: ProtoMsgIdMap;
		public msgIdMap: any = {};

		/**
		*  获取单例
		*/
		public static get instance(): ProtoMsgIdMap {
			if (this._instance == null) { this._instance = new ProtoMsgIdMap(); }
			return this._instance;
		}

		public constructor() {
			this.msgIdMap[MessageID.S_EXCEPTION_MSG] = com.message.S_EXCEPTION_MSG;
			this.msgIdMap[MessageID.S_USER_LOGIN] = com.message.S_USER_LOGIN;
			this.msgIdMap[MessageID.S_USER_LOGIN_BAN] = com.message.S_USER_LOGIN_BAN;
			this.msgIdMap[MessageID.S_USER_LOGOUT] = com.message.S_USER_LOGOUT;
			this.msgIdMap[MessageID.S_USER_LOGIN_INIT_FINISH] = com.message.S_USER_LOGIN_INIT_FINISH;
			this.msgIdMap[MessageID.S_GET_NICKNAME_INFO] = com.message.S_GET_NICKNAME_INFO;
			this.msgIdMap[MessageID.S_SEND_SDK_DATA] = com.message.S_SEND_SDK_DATA;
			this.msgIdMap[MessageID.S_GET_FISH_INFO] = com.message.S_GET_FISH_INFO;
			this.msgIdMap[MessageID.S_BUY_FISH] = com.message.S_BUY_FISH;
			this.msgIdMap[MessageID.S_COMBINE_FISH] = com.message.S_COMBINE_FISH;
			this.msgIdMap[MessageID.S_GET_MONEY_REWARD] = com.message.S_GET_MONEY_REWARD;
			this.msgIdMap[MessageID.S_GET_MONEY_INFO] = com.message.S_GET_MONEY_INFO;
			this.msgIdMap[MessageID.S_DIAMOND_BUY_FISH] = com.message.S_DIAMOND_BUY_FISH;
			this.msgIdMap[MessageID.S_GET_MONEY_LOG_LIST] = com.message.S_GET_MONEY_LOG_LIST;
			this.msgIdMap[MessageID.S_GET_DIAMOND_LOG_LIST] = com.message.S_GET_DIAMOND_LOG_LIST;
			this.msgIdMap[MessageID.S_GET_OCT_MARKET_INFO] = com.message.S_GET_OCT_MARKET_INFO;
			this.msgIdMap[MessageID.S_MARKET_BUY] = com.message.S_MARKET_BUY;
			this.msgIdMap[MessageID.S_MARKET_SELL] = com.message.S_MARKET_SELL;
			this.msgIdMap[MessageID.S_MARKET_CANCEL] = com.message.S_MARKET_CANCEL;
			this.msgIdMap[MessageID.S_GET_MONEY_EXCHANGE_INFO] = com.message.S_GET_MONEY_EXCHANGE_INFO;
			this.msgIdMap[MessageID.S_MONEY_EXCHANGE_KAD] = com.message.S_MONEY_EXCHANGE_KAD;
			this.msgIdMap[MessageID.C_GET_BONUS_INFO] = com.message.C_GET_BONUS_INFO;
			this.msgIdMap[MessageID.S_GET_BONUS_INFO] = com.message.S_GET_BONUS_INFO;
			this.msgIdMap[MessageID.S_GET_INJECT_INFO] = com.message.S_GET_INJECT_INFO;
			this.msgIdMap[MessageID.S_INJECT_KAD] = com.message.S_INJECT_KAD;
			this.msgIdMap[MessageID.S_SYN_PROPERTY] = com.message.S_SYN_PROPERTY;
			this.msgIdMap[MessageID.C_SYNC_TIME] = com.message.C_SYNC_TIME;
			this.msgIdMap[MessageID.S_SYNC_TIME] = com.message.S_SYNC_TIME;
			this.msgIdMap[MessageID.S_DEBUG_COMMON] = com.message.S_DEBUG_COMMON;
			this.msgIdMap[MessageID.CROSS_C_HEART_BEAT] = com.message.CROSS_C_HEART_BEAT;
			this.msgIdMap[MessageID.CROSS_S_HEART_BEAT] = com.message.CROSS_S_HEART_BEAT;
			this.msgIdMap[MessageID.CROSS_C_SERVER_REGISTER] = com.message.CROSS_C_SERVER_REGISTER;
			this.msgIdMap[MessageID.CROSS_S_SERVER_REGISTER] = com.message.CROSS_S_SERVER_REGISTER;
			this.msgIdMap[MessageID.CROSS_S_EXCEPTION_MSG] = com.message.CROSS_S_EXCEPTION_MSG;
			this.msgIdMap[MessageID.CROSS_C_SERVER_PUSH] = com.message.CROSS_C_SERVER_PUSH;
			this.msgIdMap[MessageID.CROSS_S_SERVER_PUSH] = com.message.CROSS_S_SERVER_PUSH;
			this.msgIdMap[MessageID.CROSS_C_HTTP_DATA] = com.message.CROSS_C_HTTP_DATA;

		}

	}
}
