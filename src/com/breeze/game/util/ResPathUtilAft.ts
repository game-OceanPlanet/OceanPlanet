module qmr
{
	export class ResPathUtilAft
	{
		/** 头像icon资源路径 */
		public static getHeadUrl(headName: string)
		{
			return SystemPathAft.headPath + headName + ".png";
		}
	}
}