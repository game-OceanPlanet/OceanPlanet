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
			let _self = this;
			_self.registerNotify(StageUtil.STAGE_RESIZE, _self.onStageResize, _self);
			_self.registerNotify(NotifyConstLogin.CLOSE_PANEL_LAYER, _self.onTabViewGuide, _self);
			_self.registerNotify(NotifyConst.TAB_VIEW_GUIDE, _self.onTabViewGuide, _self);
			let btn_return = _self["btn_return"];
			if(btn_return){
				_self.addClickEvent(btn_return, _self.onPageBgCloseView, _self);
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