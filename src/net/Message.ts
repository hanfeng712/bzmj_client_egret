class Message {
    
    public      name: string;
    public      body_msg_rsp : rpc.Request;
    public      body_msg_req : rpc.Request;
    public      buff_msg: egret.ByteArray;


    public constructor(name = '') {
        this.buff_msg           = new egret.ByteArray();
        this.buff_msg.endian    = egret.Endian.LITTLE_ENDIAN;
        this.reset(name);
    }

    reset( name: string ) {
        this.name = name;
        this.buff_msg.clear();
        /*
        this.buff_msg.writeInt(0);
        this.buff_msg.writeByte(0);
        this.wstring(this.name);
        */
    }

    fill( val: egret.ByteArray, offset:number, len: number ) {
        this.buff_msg.clear();
        this.buff_msg.writeBytes(val, offset, len);
    }

    wstring( val: string ){
        this.wint32( val.length );
        this.buff_msg.writeUTFBytes (val);
    }

    wint32( val: number ) {
        this.buff_msg.writeInt(val);
    }

    wuint32( val: number ) {
        this.buff_msg.writeUnsignedInt(val);
    }

    wint64( val: (Long | number | string) ){
        let long = protobuf.util.LongBits.from( val );
        this.wuint32(long.lo);
        this.wuint32(long.hi);
    }

    wdouble(val: number) {
        this.buff_msg.writeDouble(val);
    }

    wprotobuf(pb_type, pb_stru) {
        let buff_msg = pb_type.encode(pb_stru).finish();
        let egret_buffer = new egret.ByteArray(buff_msg);
        this.buff_msg.writeBytes(egret_buffer, 0, egret_buffer.length);
    }

    wjson(val: any){
        this.wstring(JSON.stringify(val));
    }

    ////////////////////////

    rint32() {
        return this.buff_msg.readInt();
    }

    ruint32() {
        return this.buff_msg.readUnsignedInt();
    }

    rdouble(){
        return this.buff_msg.readDouble();
    }

    rstring(){
        let len = this.rint32();
        return this.buff_msg.readUTFBytes(len);
    }

    rint64(unsigned?: boolean){
        let val = new protobuf.util.LongBits(0,0);
        val.hi          = this.ruint32();
        val.lo          = this.ruint32();
        return val.toLong(unsigned);
    }

    rjson(){
        let len = this.rint32(); 
        let json_str = this.buff_msg.readUTFBytes(len);
        return JSON.parse(json_str);
    }

    rprotobuf(msg_type: any) {
        let pb_buffer = new egret.ByteArray();
        this.buff_msg.position = 0
        this.buff_msg.readBytes( pb_buffer, this.buff_msg.position);
        return msg_type.decode(pb_buffer.bytes);
    }

    rHead(){
        this.buff_msg.position = 0;
        return this.buff_msg.readInt();
    }
    
}

