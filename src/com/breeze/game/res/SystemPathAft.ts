module qmr
{
    export class SystemPathAft
    {    
        public static get effectPath(): string {
            return PlatformConfig.webRoot + "animation/effect/";      
        }

        public static get headPath(): string {
            return PlatformConfig.webRoot + "icon/head/";      
        }
    }
}
