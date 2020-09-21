class GameUtil {

    //多个条件同时满足即解锁 id:vale,id:value,...
    static analysisMultiUnlock(value: string): boolean {

        let unlock = true;
        if (value) {
            let arr = value.split(",");
            for (var i = 0; i < arr.length; i++) {
                var element = arr[i];
                let con = element.split(":");
                switch (parseInt(con[0])) {
                    case UnlockType.Role_Level:
                        break;
                    case UnlockType.Vip_Level:
                        break;
                    case UnlockType.Clan_Level:
                        break;
                    case UnlockType.Under_Level:
                        break;
                    case UnlockType.Copy_Level:
                    case UnlockType.Open_Day:
                        break;
                    default:
                        break;
                }
            }
        }

        return unlock;
    }

    //多个条件同时满足 解锁条件转义字符串
    static analysisMultiUnlockString(value: string): string {

        let unlock = [];
        if (value) {
            let arr = value.split(",");
            for (var i = 0; i < arr.length; i++) {
                var element = arr[i];
                let con = element.split(":");
                let unlockstr = "";
                switch (parseInt(con[0])) {
                    case UnlockType.Role_Level:
                        unlock.push(unlockstr);
                        break;
                    case UnlockType.Vip_Level:
                        unlock.push(unlockstr);
                        break;
                    case UnlockType.Clan_Level:
                        unlock.push(unlockstr);
                        break;
                    case UnlockType.Copy_Level:
                        break;
                    case UnlockType.Under_Level:
                        break;
                    case UnlockType.Open_Day:
                        break;
                    default:
                        break;
                }
            }
        }
        let lockStr = unlock.join("且");
        return lockStr;
    }

    static dbDic: { [key: string]: number } = {};

    //加载骨骼动画
    static LoadDB(con: eui.Group, res: string, getDb: Function, posX: number = 0, posY: number = 0, img?: eui.Image) {
        let _self = this;

        let dic = GameUtil.dbDic;
        if (dic[res]) {
            dic[res] = undefined;
            delete dic[res];
        }

        function loadComplete(res: string) {
            // if (con && con.stage && con.parent) {
            if (con && con.parent) {
                let egretFactory = dragonBones.EgretFactory.factory;
                let armatureDisplay = egretFactory.buildArmatureDisplay("armatureName", res, null, res);
                if (armatureDisplay) {
                    //线上这里有报错，先容错下看看情况
                    con.addChild(armatureDisplay);
                    armatureDisplay.x = posX;
                    armatureDisplay.y = posY;
                    armatureDisplay.animation.play("newAnimation");
                    getDb && getDb(armatureDisplay);
                }
            }
        }

        const $res: ResManager = new ResManager();
        $res.loadDBData(res, loadComplete, _self, res);

        // if (AppConfig.isWebGL) {
        //     $res.loadDBData(res, loadComplete, _self, res);
        // } else {
        //     if (!img) img = new eui.Image();
        //     if (con && con.stage) con.addChild(img);
        //     $texture.push(img, $res.getRoleImgPath(res));
        //     getDb && getDb(undefined, img);
        // }
    }

    static unLoadDB(armatureDisplay: dragonBones.EgretArmatureDisplay, res: string) {
        armatureDisplay.animation.stop();
        armatureDisplay.armature.dispose();
        armatureDisplay.dispose(true);
        let p = armatureDisplay.parent;
        p && p.removeChild(armatureDisplay);
        // GameFunctions.dbDic[res] = $loop.loopTime + 30000;
    }

    //动态生成二维码
    public static createCode(url: string): egret.Sprite {
        return qr.QRCode.create(url);
    }
}

enum UnlockType {
    Role_Level = 1,//等级
    Copy_Level = 2,//关卡
    Clan_Level = 3, //帮派
    Under_Level = 4,//历练
    Vip_Level = 5,//vip
    Open_Day = 6,//开服天数
}