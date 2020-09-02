module qmr {
	export class EntryAfterLogin {
		
		public static onEnterGame() {
			console.log("======================开始进入游戏场景======================");
			
			ModuleManagerAft.init();//设置游戏模块类初始化
			
			ModuleManager.showModule(ModuleNameConst.MAINUI_VIEW, null, LayerConst.TOOLBAR);
			SceneManager.instance.enterHangMap(3004);
		}

	}
}