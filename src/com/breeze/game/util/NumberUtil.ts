module qmr {
        export class NumberUtil {
                public static TEN_THOUSAND:number = 10000;
                /**
                 * 保四位小数点
                 * @param num 
                 */
                public static getFloat4Number(num: number): number {
                        let re = /([0-9]+\.[0-9]{4})[0-9]*/;
                        let nums: string = num.toString();
                        return Number(nums.replace(re, "$1"));
                }

                /**
                 * 保6位小数点
                 * @param num 
                 */
                public static getFloat6Number2String(num: number): string {
                        if(num > NumberUtil.TEN_THOUSAND){
                                return NumberUtil.numberFormat(num);
                        }
                        let nums: string = num.toFixed(6);
                        return Number(nums)+"";
                }

                 /**
                 * 保4位小数点
                 * @param num 
                 */
                public static getFloat4Number2String(num: number): string {
                        if(num > NumberUtil.TEN_THOUSAND){
                                return NumberUtil.numberFormat(num);
                        }
                        let nums: string = num.toFixed(4);
                        return Number(nums)+"";
                }

                /**
		 *  < 100000   2小数
		 * < 1000000  1小数
		 * < 100000000 0小数
		 *  < 1000000000 2小数
		 *  < 10000000000 1小数
		 */
		public static numberFormat(number: number): string
		{
			if (number == undefined) return "0";
			if (number < 10000) return number + "";
			if (number < 100000)
			{
				number = number / 10000;
				number = Math.floor(100 * number) / 100;
				return number + "万";
			}
			if (number < 1000000)
			{
				number = number / 10000;
				number = Math.floor(10 * number) / 10;
				return number + "万";
			}
			if (number < 100000000)
			{
				number = Math.floor(number / 10000);
				return number + "万";
			}
			if (number < 100000000)
			{
				number = number / 100000000;
				number = Math.floor(100 * number) / 100;
				return number + "亿";
			}
			if (number < 1000000000000)
			{
				number = number / 100000000;
				number = Math.floor(10 * number) / 10;
				return number + "亿";
			}
			if (number < 1000000000000000)
			{
				number = number / 1000000000000;
				number = Math.floor(100 * number) / 100;
				return number + "万亿";
			}
		}
        }
}