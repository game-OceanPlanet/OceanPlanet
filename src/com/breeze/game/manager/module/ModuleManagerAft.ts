module qmr
{
    export class ModuleManagerAft
    {
        public constructor()
        {
        }

        public static init()
        {
            this.setupClass();
        }

        public static setupClass()
        {
            let modulelManager = ModuleManager;
            modulelManager.registerClass(ModuleNameConst.MAINUI_VIEW, qmr.MainView);
            modulelManager.registerClass(ModuleNameConst.SHOP_VIEW, qmr.ShopView);
        }
    }
}