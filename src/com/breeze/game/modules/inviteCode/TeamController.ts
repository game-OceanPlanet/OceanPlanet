module qmr
{
	export class TeamController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: TeamController;
		public static get instance(): TeamController
		{
			return this._instance || (this._instance = new TeamController());
		}

		protected initListeners(): void
		{
            this.addSocketListener(MessageID.S_GET_MY_TEAM_INFO, this.getTeamInfoResponse, this, false);
            this.addSocketListener(MessageID.S_GET_MY_TEAM_LIST, this.getMyTeamListResponse, this, false);
		}

        //获取我的团队信息
		public requestTeamInfoCMD(): void
		{
			var c: com.message.C_GET_MY_TEAM_INFO = new com.message.C_GET_MY_TEAM_INFO();
			this.sendCmd(c, MessageID.C_GET_MY_TEAM_INFO, true);
        }
        
        // 获取我的团队信息
        private getTeamInfoResponse(s: com.message.S_GET_MY_TEAM_INFO):void
        {
            TeamModdel.instance.myTeam = s.myTeamMsg as com.message.MyTeamMsg;
            this.dispatch(NotifyConst.S_GET_MY_TEAM_INFO);
        }

        //获取我的直推成员信息
		public requestMyTeamListCMD(): void
		{
            let currPage:number = TeamModdel.instance.getCurrentPageIndex();
            let nextPage:number = currPage + 1;
            var c: com.message.C_GET_MY_TEAM_LIST = new com.message.C_GET_MY_TEAM_LIST();
            c.page = nextPage;
            c.pageSize = TeamModdel.PAGE_SIZE;
			this.sendCmd(c, MessageID.C_GET_MY_TEAM_LIST, true);
        }
        
        // 获取我的直推成员信息
        private getMyTeamListResponse(s: com.message.S_GET_MY_TEAM_LIST):void
        {
            TeamModdel.instance.addTeamers(s.page, s.directInfoMsg as com.message.DirectInfoMsg[]);
            this.dispatch(NotifyConst.S_GET_MY_TEAM_LIST);
        }

    }
}