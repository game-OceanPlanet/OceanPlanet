module qmr
{
	export class TradeTypeEnum
	{
		
        /** 领取鱼日产金币*/
        public static MONEY_REWARD = 1;
        /** 金币买鱼*/
        public static MONEY_BUY_FISH = 2;
        /** OTC-卖给Ta，消耗金币*/
        public static OCT_SELL_MONEY = 3;
        /** OTC-有玩家卖金币给我了，得金币*/
        public static OCT_SOMEONE_SELL_ME = 4;

        /** U买鱼*/
        public static DIAMOND_BUY_FISH = 101;
        /** OTC-买入金币（挂单），消耗u*/
        public static OCT_BUY_MONEY_COST_U = 102;
        /** OTC-卖给Ta，获得U*/
        public static OCT_SELL_MONEY_GOT_U = 103;
        /** OTC-撤单，获得U*/
        public static OCT_CANCEL_GOT_U = 104;
	}
}