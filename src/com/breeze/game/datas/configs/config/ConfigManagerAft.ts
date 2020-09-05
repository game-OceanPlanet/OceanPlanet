module qmr
{
	export class ConfigManagerAft
	{
		
		/**
		 * 获取全局配置
		 */
		public static getCommonConfig(key: number): string
		{
			var config: Dictionary = ConfigManager.getBean(ConfigEnum.COMMONCONFIG);
			var clientCnVo: CommonConfigCfg = config.get(key);
			if (clientCnVo)
			{
				return clientCnVo.param;
			}
			return "";
		}
		
	}
}