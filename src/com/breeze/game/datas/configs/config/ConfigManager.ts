module qmr
{
	export class ConfigManager
	{
		
		/**
		 * 获取全局配置
		 */
		public static getCommonConfig(key: number): string
		{
			var config: Dictionary = ConfigManagerBase.getBean(ConfigEnum.COMMONCONFIG);
			var clientCnVo: CommonConfigCfg = config.get(key);
			if (clientCnVo)
			{
				return clientCnVo.param;
			}
			return "";
		}
		
	}
}