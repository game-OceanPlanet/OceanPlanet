module qmr
{
	/**
	 *
	 * @author coler
	 * @description 所有模块的基类
	 *
	 */
	export class BaseModule extends SuperBaseModule
	{

		public constructor()
		{
			super();
		}

		/** 初始化事件 */
		protected initListener(): void
		{
			let t = this;
			t.registerNotify(StageUtil.STAGE_RESIZE, t.onStageResize, t);
			t.registerNotify(NotifyConstLogin.CLOSE_PANEL_LAYER, t.onTabViewGuide, t);
			t.registerNotify(NotifyConst.TAB_VIEW_GUIDE, t.onTabViewGuide, t);
			let btn_return = t["btn_return"];
			if(btn_return){
				t.addClickEvent(btn_return, t.onPageBgCloseView, t);
			}
			
			super.initListener();
		}

		protected initData():void
		{
			super.initData();
			this.updateTitle(this.title, this.ruleId);
		}

		protected onTabViewGuide() {
			let t = this;

		}

	}
}