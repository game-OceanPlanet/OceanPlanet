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
            modulelManager.registerClass(ModuleNameConst.PET_VIEW, qmr.PetView);
            modulelManager.registerClass(ModuleNameConst.GOLD_LOG_VIEW, qmr.GoldLogView);
            modulelManager.registerClass(ModuleNameConst.USDT_LOG_VIEW, qmr.USDTLogView);
            modulelManager.registerClass(ModuleNameConst.TRADE_VIEW, qmr.TradeView);
        }
    }
}