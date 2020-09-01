module qmr {
	/**
	 * @author eric
	 * @desc 飘浮提示
	 */
	export class FloatTip extends UIComponent {
		private content: eui.Group;
		private lbl_tips: eui.Label;
		private img_bg: eui.Image;
		public img_icon:eui.Image;
		private iscompleted:boolean =false;
		private isSeted:boolean = false;
		public constructor() {
			super();
			this.skinName = "FloatTipSkin";
		}
		protected initComponent():void{
			super.initComponent();
			this.iscompleted = true;
			// this.lbl_tips.strokeColor = ColorConst.COLOR_BLACK;
			// this.lbl_tips.stroke = 0.5;
			//this.bgd.visible = false;
			//this.lbl_tipMsg0.visible = true;
			this.touchEnabled = this.touchChildren=false;
		}
		protected initListener():void{
			super.initListener();
		}
		protected initData(){
			super.initData();
			this.setTip();
		}
		public onStageResize():void{
			super.onStageResize();
			this.width = StageUtil.stageWidth;
		}
		public showTip(data:any): void {
			this.data = data;
			if(this.iscompleted) {
				this.setTip();
			}
		}
		public setTip():void{
			let _self = this;
			if(!_self.data) return;
			if(_self.isSeted) return;
			_self.isSeted = true;
			_self.alpha = 1;
			_self.lbl_tips.textFlow = HtmlUtil.htmlParse.parser(_self.data.mess);
			_self.y = _self.data.yPos ? _self.data.yPos : StageUtil.stageHeight / 2 - _self.height / 2;
			let offset = _self.y - 60;
			if(_self.data.itemcfg)
			{
				ImageUtil.setItemIcon(_self.img_icon, _self.data.itemcfg.icon, _self.data.itemcfg.page);
			}
			egret.Tween.get(_self)
				.to({ y: offset }, 800)
				.wait(50)
				.to({y: offset - 30, alpha: 0 }, 400)
				.call(_self.dispose, _self);
		}
		public dispose(): void {
			this.data = null;
			this.isSeted = false;
			this.lbl_tips.textFlow = [];
			this.img_icon.source = null;
			super.dispose();
			egret.Tween.removeTweens(this);
		}
	}
}