module qmr {
	export class EntryAfterLogin {
		
		public static onEnterGame() {
			console.log("======================开始进入游戏场景======================");
			
			SceneManager.instance.enterHangMap(3004);
		}

	}
}