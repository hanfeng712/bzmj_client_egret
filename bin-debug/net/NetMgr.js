var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
/**
 * 网络管理类
 */
var NetMgr = (function (_super) {
    __extends(NetMgr, _super);
    function NetMgr() {
        var _this = _super.call(this) || this;
        _this.socket = new egret.WebSocket();
        _this.recv_buffer = new egret.ByteArray();
        _this.send_buffer = new egret.ByteArray();
        _this.temp_msg = new Message();
        return _this;
    }
    NetMgr.GetInstance = function () {
        if (this.net == null) {
            this.net = new NetMgr();
        }
        return this.net;
    };
    NetMgr.prototype.Connect = function (serverurl) {
        if (this.socket.connected)
            return;
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.IOError, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.Close, this);
        this.socket.connectByUrl(serverurl);
        //this.socket.connect("echo.websocket.org", 80);
        this.conn_url = serverurl;
    };
    /**
     * 发送消息
     */
    NetMgr.prototype.SendMsg = function (msg) {
        try {
            if (this.socket.connected) {
                this.send_buffer.clear();
                //this.send_buffer.endian = egret.Endian.BIG_ENDIAN;
                this.send_buffer.writeInt(msg.buff_msg.length);
                //this.send_buffer.endian = egret.Endian.LITTLE_ENDIAN;
                this.send_buffer.writeBytes(msg.buff_msg);
                this.socket.writeBytes(this.send_buffer, 0, this.send_buffer.length);
                this.socket.flush();
                console.log("====msgLen:", msg.buff_msg.length, ", send_buffer:", this.send_buffer.length);
            }
            else {
                console.error("网络没有连接");
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    NetMgr.prototype.SendPB = function (msg_name, pb_type, pb_stru) {
        this.temp_msg.reset(msg_name);
        this.temp_msg.wprotobuf(pb_type, pb_stru);
        this.SendMsg(this.temp_msg);
    };
    NetMgr.prototype.GetStatus = function () {
        return this.socket.connected;
    };
    NetMgr.prototype.onReceiveMessage = function () {
        this.socket.readBytes(this.recv_buffer, this.recv_buffer.position);
        this.recv_buffer.position = this.recv_buffer.length;
        console.log("Recv msg len:", this.recv_buffer.bytesAvailable, ",postion:", this.recv_buffer.position, ",len:", this.recv_buffer.length);
        if (this.recv_buffer.length > 4) {
            //取出消息的长度
            var temLen = this.recv_buffer.position;
            this.recv_buffer.position = 0;
            var msg_len = this.recv_buffer.readInt();
            console.log("msg body len:", msg_len);
            if (this.recv_buffer.length >= msg_len) {
                var msg = new Message();
                msg.fill(this.recv_buffer, this.recv_buffer.position, msg_len);
                this.recv_buffer.clear();
                this.processReceive(msg);
            }
            else {
                this.recv_buffer.position = temLen;
            }
        }
    };
    NetMgr.prototype.processReceive = function (msg) {
        msg.body_msg_rsp = msg.rprotobuf(rpc.Request);
        msg.name = msg.body_msg_rsp.Method;
        console.log("recv msg : " + msg.name);
        /*
        let netevent: NetEvent = new NetEvent(msg.name)
        netevent.msg = msg;
        this.dispatchEvent(netevent);
        */
    };
    NetMgr.prototype.Close = function () {
        console.log("连接关闭");
    };
    NetMgr.prototype.onSocketOpen = function () {
        console.log("=========================================================");
        console.log("网络连接成功，发送LOGIN。");
        var msgReq = rpc.Request.create();
        msgReq.Method = "LobbyServicesForClient.LobbyHandlePingMsg";
        var betMsg = rpc.CS_BetMsg.create();
        msgReq.SerializedRequest = rpc.CS_BetMsg.encode(betMsg).finish();
        NetMgr.GetInstance().SendPB("LOGIN", rpc.Request, msgReq);
        /*
        let betMsg:rpc.CS_LoginMsg = rpc.CS_LoginMsg.create();
        betMsg.UserName="11";
        betMsg.UserPass="22";
        NetMgr.GetInstance().SendPB( "LOGIN", rpc.CS_LoginMsg, betMsg );
        */
    };
    NetMgr.prototype.IOError = function () {
        console.log("网络连接断开");
    };
    return NetMgr;
}(egret.DisplayObject));
__reflect(NetMgr.prototype, "NetMgr");
//# sourceMappingURL=NetMgr.js.map