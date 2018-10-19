// TypeScript file
/**
 * 网络管理类
 */
class NetMgr extends egret.DisplayObject {

    private socket: egret.WebSocket = new egret.WebSocket();
    static net: NetMgr;
    private recv_buffer: egret.ByteArray = new egret.ByteArray();
    private send_buffer: egret.ByteArray = new egret.ByteArray();
    private temp_msg: Message = new Message();
    private conn_url: string;

    constructor() {
        super();

    }
    public static GetInstance(): NetMgr {
        if (this.net == null) {
            this.net = new NetMgr();

        }
        return this.net;
    }

    public Connect(serverurl: string): void {
        if (this.socket.connected) return;

        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.IOError, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.Close, this);
        this.socket.connectByUrl(serverurl)
        //this.socket.connect("echo.websocket.org", 80);
        this.conn_url      = serverurl;
    }

    /**
     * 发送消息
     */
    public SendMsg(msg: Message): void {
        try {

            if ( this.socket.connected ){
                this.send_buffer.clear();
                //this.send_buffer.endian = egret.Endian.BIG_ENDIAN;
                this.send_buffer.writeInt(msg.buff_msg.length);
                //this.send_buffer.endian = egret.Endian.LITTLE_ENDIAN;
                this.send_buffer.writeBytes(msg.buff_msg);

                this.socket.writeBytes(this.send_buffer, 0, this.send_buffer.length);
                this.socket.flush();

                console.log("====msgLen:",msg.buff_msg.length,", send_buffer:",this.send_buffer.length);
            }
            else{
                console.error("网络没有连接");
            }

        } catch (e) {
            console.error(e);
        }
    }

    public SendPB( msg_name: string, pb_type:any, pb_stru: any ): void {
        this.temp_msg.reset(msg_name);
        this.temp_msg.wprotobuf(pb_type, pb_stru);
        this.SendMsg(this.temp_msg);
    }

    public GetStatus(): boolean {
        return this.socket.connected;
    }


    onReceiveMessage(): void {
        this.socket.readBytes(this.recv_buffer, this.recv_buffer.position);
        this.recv_buffer.position = this.recv_buffer.length;
        console.log("Recv msg len:",this.recv_buffer.bytesAvailable, ",postion:",this.recv_buffer.position, ",len:", this.recv_buffer.length);
        if (this.recv_buffer.length > 4) {
            //取出消息的长度
            let temLen = this.recv_buffer.position;
            this.recv_buffer.position = 0; 
            let msg_len = this.recv_buffer.readInt();
            console.log("msg body len:",msg_len);
            if (this.recv_buffer.length >= msg_len) {
                let msg = new Message();
                msg.fill(this.recv_buffer, this.recv_buffer.position, msg_len);
                this.recv_buffer.clear();
                this.processReceive(msg);
            }else{
                this.recv_buffer.position = temLen;
            }
        }
    }

    private processReceive(msg: Message) {
        msg.body_msg_rsp = msg.rprotobuf(rpc.Request);
        msg.name = msg.body_msg_rsp.Method; 
        console.log("recv msg : " + msg.name);
        /*
        let netevent: NetEvent = new NetEvent(msg.name)
        netevent.msg = msg;
        this.dispatchEvent(netevent);
        */
    }


    Close(): void {
        console.log("连接关闭")
    }

    public onSocketOpen(): void {
        console.log("=========================================================");
        console.log("网络连接成功，发送LOGIN。");
        
        let msgReq:rpc.Request = rpc.Request.create();
        msgReq.Method = "LobbyServicesForClient.LobbyHandlePingMsg";

        let betMsg:rpc.CS_BetMsg = rpc.CS_BetMsg.create();
        msgReq.SerializedRequest = rpc.CS_BetMsg.encode(betMsg).finish();
        NetMgr.GetInstance().SendPB( "LOGIN", rpc.Request, msgReq );
        
        /*
        let betMsg:rpc.CS_LoginMsg = rpc.CS_LoginMsg.create();
        betMsg.UserName="11";
        betMsg.UserPass="22";
        NetMgr.GetInstance().SendPB( "LOGIN", rpc.CS_LoginMsg, betMsg );
        */
    }

    IOError(): void {
        console.log("网络连接断开")
    }

}