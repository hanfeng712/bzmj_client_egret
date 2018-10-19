type Long = protobuf.Long;

/** Namespace rpc. */
declare namespace rpc {

    /** Properties of a Request. */
    interface IRequest {

        /** Request Method */
        Method: string;

        /** Request SerializedRequest */
        SerializedRequest: Uint8Array;
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IRequest);

        /** Request Method. */
        public Method: string;

        /** Request SerializedRequest. */
        public SerializedRequest: Uint8Array;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: rpc.IRequest): rpc.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link rpc.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link rpc.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): rpc.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.Request, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CS_BetMsg. */
    interface ICS_BetMsg {
    }

    /** 详细详细内容********************************************** */
    class CS_BetMsg implements ICS_BetMsg {

        /**
         * Constructs a new CS_BetMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICS_BetMsg);

        /**
         * Creates a new CS_BetMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_BetMsg instance
         */
        public static create(properties?: rpc.ICS_BetMsg): rpc.CS_BetMsg;

        /**
         * Encodes the specified CS_BetMsg message. Does not implicitly {@link rpc.CS_BetMsg.verify|verify} messages.
         * @param message CS_BetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICS_BetMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CS_BetMsg message, length delimited. Does not implicitly {@link rpc.CS_BetMsg.verify|verify} messages.
         * @param message CS_BetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICS_BetMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CS_BetMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.CS_BetMsg;

        /**
         * Decodes a CS_BetMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.CS_BetMsg;

        /**
         * Verifies a CS_BetMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_BetMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_BetMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.CS_BetMsg;

        /**
         * Creates a plain object from a CS_BetMsg message. Also converts values to other types if specified.
         * @param message CS_BetMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CS_BetMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_BetMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SC_BetMsg. */
    interface ISC_BetMsg {
    }

    /** Represents a SC_BetMsg. */
    class SC_BetMsg implements ISC_BetMsg {

        /**
         * Constructs a new SC_BetMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ISC_BetMsg);

        /**
         * Creates a new SC_BetMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BetMsg instance
         */
        public static create(properties?: rpc.ISC_BetMsg): rpc.SC_BetMsg;

        /**
         * Encodes the specified SC_BetMsg message. Does not implicitly {@link rpc.SC_BetMsg.verify|verify} messages.
         * @param message SC_BetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ISC_BetMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SC_BetMsg message, length delimited. Does not implicitly {@link rpc.SC_BetMsg.verify|verify} messages.
         * @param message SC_BetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ISC_BetMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SC_BetMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.SC_BetMsg;

        /**
         * Decodes a SC_BetMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.SC_BetMsg;

        /**
         * Verifies a SC_BetMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BetMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BetMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.SC_BetMsg;

        /**
         * Creates a plain object from a SC_BetMsg message. Also converts values to other types if specified.
         * @param message SC_BetMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.SC_BetMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BetMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CS_LoginMsg. */
    interface ICS_LoginMsg {

        /** CS_LoginMsg UserName */
        UserName: string;

        /** CS_LoginMsg UserPass */
        UserPass: string;
    }

    /** Represents a CS_LoginMsg. */
    class CS_LoginMsg implements ICS_LoginMsg {

        /**
         * Constructs a new CS_LoginMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICS_LoginMsg);

        /** CS_LoginMsg UserName. */
        public UserName: string;

        /** CS_LoginMsg UserPass. */
        public UserPass: string;

        /**
         * Creates a new CS_LoginMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_LoginMsg instance
         */
        public static create(properties?: rpc.ICS_LoginMsg): rpc.CS_LoginMsg;

        /**
         * Encodes the specified CS_LoginMsg message. Does not implicitly {@link rpc.CS_LoginMsg.verify|verify} messages.
         * @param message CS_LoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICS_LoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CS_LoginMsg message, length delimited. Does not implicitly {@link rpc.CS_LoginMsg.verify|verify} messages.
         * @param message CS_LoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICS_LoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CS_LoginMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.CS_LoginMsg;

        /**
         * Decodes a CS_LoginMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.CS_LoginMsg;

        /**
         * Verifies a CS_LoginMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_LoginMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_LoginMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.CS_LoginMsg;

        /**
         * Creates a plain object from a CS_LoginMsg message. Also converts values to other types if specified.
         * @param message CS_LoginMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CS_LoginMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_LoginMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SC_LoginMsg. */
    interface ISC_LoginMsg {

        /** SC_LoginMsg Uid */
        Uid: (number|Long);
    }

    /** Represents a SC_LoginMsg. */
    class SC_LoginMsg implements ISC_LoginMsg {

        /**
         * Constructs a new SC_LoginMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ISC_LoginMsg);

        /** SC_LoginMsg Uid. */
        public Uid: (number|Long);

        /**
         * Creates a new SC_LoginMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_LoginMsg instance
         */
        public static create(properties?: rpc.ISC_LoginMsg): rpc.SC_LoginMsg;

        /**
         * Encodes the specified SC_LoginMsg message. Does not implicitly {@link rpc.SC_LoginMsg.verify|verify} messages.
         * @param message SC_LoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ISC_LoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SC_LoginMsg message, length delimited. Does not implicitly {@link rpc.SC_LoginMsg.verify|verify} messages.
         * @param message SC_LoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ISC_LoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SC_LoginMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.SC_LoginMsg;

        /**
         * Decodes a SC_LoginMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.SC_LoginMsg;

        /**
         * Verifies a SC_LoginMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_LoginMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_LoginMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.SC_LoginMsg;

        /**
         * Creates a plain object from a SC_LoginMsg message. Also converts values to other types if specified.
         * @param message SC_LoginMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.SC_LoginMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_LoginMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CS_PingMsg. */
    interface ICS_PingMsg {
    }

    /** Represents a CS_PingMsg. */
    class CS_PingMsg implements ICS_PingMsg {

        /**
         * Constructs a new CS_PingMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICS_PingMsg);

        /**
         * Creates a new CS_PingMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_PingMsg instance
         */
        public static create(properties?: rpc.ICS_PingMsg): rpc.CS_PingMsg;

        /**
         * Encodes the specified CS_PingMsg message. Does not implicitly {@link rpc.CS_PingMsg.verify|verify} messages.
         * @param message CS_PingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICS_PingMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CS_PingMsg message, length delimited. Does not implicitly {@link rpc.CS_PingMsg.verify|verify} messages.
         * @param message CS_PingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICS_PingMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CS_PingMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.CS_PingMsg;

        /**
         * Decodes a CS_PingMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.CS_PingMsg;

        /**
         * Verifies a CS_PingMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_PingMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_PingMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.CS_PingMsg;

        /**
         * Creates a plain object from a CS_PingMsg message. Also converts values to other types if specified.
         * @param message CS_PingMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CS_PingMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_PingMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SC_PingMsg. */
    interface ISC_PingMsg {
    }

    /** Represents a SC_PingMsg. */
    class SC_PingMsg implements ISC_PingMsg {

        /**
         * Constructs a new SC_PingMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ISC_PingMsg);

        /**
         * Creates a new SC_PingMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_PingMsg instance
         */
        public static create(properties?: rpc.ISC_PingMsg): rpc.SC_PingMsg;

        /**
         * Encodes the specified SC_PingMsg message. Does not implicitly {@link rpc.SC_PingMsg.verify|verify} messages.
         * @param message SC_PingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ISC_PingMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SC_PingMsg message, length delimited. Does not implicitly {@link rpc.SC_PingMsg.verify|verify} messages.
         * @param message SC_PingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ISC_PingMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SC_PingMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.SC_PingMsg;

        /**
         * Decodes a SC_PingMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.SC_PingMsg;

        /**
         * Verifies a SC_PingMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_PingMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_PingMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.SC_PingMsg;

        /**
         * Creates a plain object from a SC_PingMsg message. Also converts values to other types if specified.
         * @param message SC_PingMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.SC_PingMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_PingMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RpcErrorResponse. */
    interface IRpcErrorResponse {

        /** RpcErrorResponse Method */
        Method: string;

        /** RpcErrorResponse Text */
        Text: string;
    }

    /** Represents a RpcErrorResponse. */
    class RpcErrorResponse implements IRpcErrorResponse {

        /**
         * Constructs a new RpcErrorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IRpcErrorResponse);

        /** RpcErrorResponse Method. */
        public Method: string;

        /** RpcErrorResponse Text. */
        public Text: string;

        /**
         * Creates a new RpcErrorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RpcErrorResponse instance
         */
        public static create(properties?: rpc.IRpcErrorResponse): rpc.RpcErrorResponse;

        /**
         * Encodes the specified RpcErrorResponse message. Does not implicitly {@link rpc.RpcErrorResponse.verify|verify} messages.
         * @param message RpcErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IRpcErrorResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RpcErrorResponse message, length delimited. Does not implicitly {@link rpc.RpcErrorResponse.verify|verify} messages.
         * @param message RpcErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IRpcErrorResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RpcErrorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RpcErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.RpcErrorResponse;

        /**
         * Decodes a RpcErrorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RpcErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.RpcErrorResponse;

        /**
         * Verifies a RpcErrorResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RpcErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RpcErrorResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.RpcErrorResponse;

        /**
         * Creates a plain object from a RpcErrorResponse message. Also converts values to other types if specified.
         * @param message RpcErrorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.RpcErrorResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RpcErrorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncError. */
    interface ISyncError {

        /** SyncError Text */
        Text: string;
    }

    /** Represents a SyncError. */
    class SyncError implements ISyncError {

        /**
         * Constructs a new SyncError.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ISyncError);

        /** SyncError Text. */
        public Text: string;

        /**
         * Creates a new SyncError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncError instance
         */
        public static create(properties?: rpc.ISyncError): rpc.SyncError;

        /**
         * Encodes the specified SyncError message. Does not implicitly {@link rpc.SyncError.verify|verify} messages.
         * @param message SyncError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ISyncError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SyncError message, length delimited. Does not implicitly {@link rpc.SyncError.verify|verify} messages.
         * @param message SyncError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ISyncError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SyncError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): rpc.SyncError;

        /**
         * Decodes a SyncError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): rpc.SyncError;

        /**
         * Verifies a SyncError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncError
         */
        public static fromObject(object: { [k: string]: any }): rpc.SyncError;

        /**
         * Creates a plain object from a SyncError message. Also converts values to other types if specified.
         * @param message SyncError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.SyncError, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
