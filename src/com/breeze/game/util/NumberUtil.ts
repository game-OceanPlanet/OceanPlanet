module qmr {
	export class NumberUtil {
        /**
         * 保四位小数点
         * @param num 
         */
		public static getFloat4Number(num:number): number
		{
                  let re = /([0-9]+\.[0-9]{4})[0-9]*/;
                  let nums:string = num.toString();
                  return Number(nums.replace(re,"$1"));
		}

	}
}