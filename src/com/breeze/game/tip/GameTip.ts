module qmr
{
	export class GameTip
	{
		private static instance: GameTip;
		/**
		 * @desc 获取一个单例
		 */
		public static getInstance(): GameTip
		{
			if (GameTip.instance == null)
			{
				GameTip.instance = new GameTip();
			}
			return GameTip.instance;
		}

		public constructor()
		{
        }
        
        public static show():void
        {
            
        }
	}
}