var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    rpc.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof rpc
         * @interface IRequest
         * @property {string} Method Request Method
         * @property {Uint8Array} SerializedRequest Request SerializedRequest
         */

        /**
         * Constructs a new Request.
         * @memberof rpc
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {rpc.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request Method.
         * @member {string} Method
         * @memberof rpc.Request
         * @instance
         */
        Request.prototype.Method = "";

        /**
         * Request SerializedRequest.
         * @member {Uint8Array} SerializedRequest
         * @memberof rpc.Request
         * @instance
         */
        Request.prototype.SerializedRequest = $util.newBuffer([]);

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof rpc.Request
         * @static
         * @param {rpc.IRequest=} [properties] Properties to set
         * @returns {rpc.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link rpc.Request.verify|verify} messages.
         * @function encode
         * @memberof rpc.Request
         * @static
         * @param {rpc.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Method);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.SerializedRequest);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link rpc.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.Request
         * @static
         * @param {rpc.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Method = reader.string();
                    break;
                case 2:
                    message.SerializedRequest = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Method"))
                throw $util.ProtocolError("missing required 'Method'", { instance: message });
            if (!message.hasOwnProperty("SerializedRequest"))
                throw $util.ProtocolError("missing required 'SerializedRequest'", { instance: message });
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof rpc.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Method))
                return "Method: string expected";
            if (!(message.SerializedRequest && typeof message.SerializedRequest.length === "number" || $util.isString(message.SerializedRequest)))
                return "SerializedRequest: buffer expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.Request)
                return object;
            var message = new $root.rpc.Request();
            if (object.Method != null)
                message.Method = String(object.Method);
            if (object.SerializedRequest != null)
                if (typeof object.SerializedRequest === "string")
                    $util.base64.decode(object.SerializedRequest, message.SerializedRequest = $util.newBuffer($util.base64.length(object.SerializedRequest)), 0);
                else if (object.SerializedRequest.length)
                    message.SerializedRequest = object.SerializedRequest;
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.Request
         * @static
         * @param {rpc.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Method = "";
                object.SerializedRequest = options.bytes === String ? "" : [];
            }
            if (message.Method != null && message.hasOwnProperty("Method"))
                object.Method = message.Method;
            if (message.SerializedRequest != null && message.hasOwnProperty("SerializedRequest"))
                object.SerializedRequest = options.bytes === String ? $util.base64.encode(message.SerializedRequest, 0, message.SerializedRequest.length) : options.bytes === Array ? Array.prototype.slice.call(message.SerializedRequest) : message.SerializedRequest;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof rpc.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    rpc.CS_BetMsg = (function() {

        /**
         * Properties of a CS_BetMsg.
         * @memberof rpc
         * @interface ICS_BetMsg
         */

        /**
         * Constructs a new CS_BetMsg.
         * @memberof rpc
         * @classdesc 详细详细内容**********************************************
         * @implements ICS_BetMsg
         * @constructor
         * @param {rpc.ICS_BetMsg=} [properties] Properties to set
         */
        function CS_BetMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CS_BetMsg instance using the specified properties.
         * @function create
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {rpc.ICS_BetMsg=} [properties] Properties to set
         * @returns {rpc.CS_BetMsg} CS_BetMsg instance
         */
        CS_BetMsg.create = function create(properties) {
            return new CS_BetMsg(properties);
        };

        /**
         * Encodes the specified CS_BetMsg message. Does not implicitly {@link rpc.CS_BetMsg.verify|verify} messages.
         * @function encode
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {rpc.ICS_BetMsg} message CS_BetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BetMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CS_BetMsg message, length delimited. Does not implicitly {@link rpc.CS_BetMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {rpc.ICS_BetMsg} message CS_BetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BetMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_BetMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.CS_BetMsg} CS_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BetMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.CS_BetMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_BetMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.CS_BetMsg} CS_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BetMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_BetMsg message.
         * @function verify
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_BetMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CS_BetMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.CS_BetMsg} CS_BetMsg
         */
        CS_BetMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.CS_BetMsg)
                return object;
            return new $root.rpc.CS_BetMsg();
        };

        /**
         * Creates a plain object from a CS_BetMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.CS_BetMsg
         * @static
         * @param {rpc.CS_BetMsg} message CS_BetMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_BetMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CS_BetMsg to JSON.
         * @function toJSON
         * @memberof rpc.CS_BetMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_BetMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_BetMsg;
    })();

    rpc.SC_BetMsg = (function() {

        /**
         * Properties of a SC_BetMsg.
         * @memberof rpc
         * @interface ISC_BetMsg
         */

        /**
         * Constructs a new SC_BetMsg.
         * @memberof rpc
         * @classdesc Represents a SC_BetMsg.
         * @implements ISC_BetMsg
         * @constructor
         * @param {rpc.ISC_BetMsg=} [properties] Properties to set
         */
        function SC_BetMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SC_BetMsg instance using the specified properties.
         * @function create
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {rpc.ISC_BetMsg=} [properties] Properties to set
         * @returns {rpc.SC_BetMsg} SC_BetMsg instance
         */
        SC_BetMsg.create = function create(properties) {
            return new SC_BetMsg(properties);
        };

        /**
         * Encodes the specified SC_BetMsg message. Does not implicitly {@link rpc.SC_BetMsg.verify|verify} messages.
         * @function encode
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {rpc.ISC_BetMsg} message SC_BetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BetMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SC_BetMsg message, length delimited. Does not implicitly {@link rpc.SC_BetMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {rpc.ISC_BetMsg} message SC_BetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BetMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BetMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.SC_BetMsg} SC_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BetMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.SC_BetMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BetMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.SC_BetMsg} SC_BetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BetMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BetMsg message.
         * @function verify
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BetMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SC_BetMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.SC_BetMsg} SC_BetMsg
         */
        SC_BetMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.SC_BetMsg)
                return object;
            return new $root.rpc.SC_BetMsg();
        };

        /**
         * Creates a plain object from a SC_BetMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.SC_BetMsg
         * @static
         * @param {rpc.SC_BetMsg} message SC_BetMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BetMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SC_BetMsg to JSON.
         * @function toJSON
         * @memberof rpc.SC_BetMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BetMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_BetMsg;
    })();

    rpc.CS_LoginMsg = (function() {

        /**
         * Properties of a CS_LoginMsg.
         * @memberof rpc
         * @interface ICS_LoginMsg
         * @property {string} UserName CS_LoginMsg UserName
         * @property {string} UserPass CS_LoginMsg UserPass
         */

        /**
         * Constructs a new CS_LoginMsg.
         * @memberof rpc
         * @classdesc Represents a CS_LoginMsg.
         * @implements ICS_LoginMsg
         * @constructor
         * @param {rpc.ICS_LoginMsg=} [properties] Properties to set
         */
        function CS_LoginMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_LoginMsg UserName.
         * @member {string} UserName
         * @memberof rpc.CS_LoginMsg
         * @instance
         */
        CS_LoginMsg.prototype.UserName = "";

        /**
         * CS_LoginMsg UserPass.
         * @member {string} UserPass
         * @memberof rpc.CS_LoginMsg
         * @instance
         */
        CS_LoginMsg.prototype.UserPass = "";

        /**
         * Creates a new CS_LoginMsg instance using the specified properties.
         * @function create
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {rpc.ICS_LoginMsg=} [properties] Properties to set
         * @returns {rpc.CS_LoginMsg} CS_LoginMsg instance
         */
        CS_LoginMsg.create = function create(properties) {
            return new CS_LoginMsg(properties);
        };

        /**
         * Encodes the specified CS_LoginMsg message. Does not implicitly {@link rpc.CS_LoginMsg.verify|verify} messages.
         * @function encode
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {rpc.ICS_LoginMsg} message CS_LoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_LoginMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserPass);
            return writer;
        };

        /**
         * Encodes the specified CS_LoginMsg message, length delimited. Does not implicitly {@link rpc.CS_LoginMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {rpc.ICS_LoginMsg} message CS_LoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_LoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_LoginMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.CS_LoginMsg} CS_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_LoginMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.CS_LoginMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserName = reader.string();
                    break;
                case 2:
                    message.UserPass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserName"))
                throw $util.ProtocolError("missing required 'UserName'", { instance: message });
            if (!message.hasOwnProperty("UserPass"))
                throw $util.ProtocolError("missing required 'UserPass'", { instance: message });
            return message;
        };

        /**
         * Decodes a CS_LoginMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.CS_LoginMsg} CS_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_LoginMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_LoginMsg message.
         * @function verify
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_LoginMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.UserName))
                return "UserName: string expected";
            if (!$util.isString(message.UserPass))
                return "UserPass: string expected";
            return null;
        };

        /**
         * Creates a CS_LoginMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.CS_LoginMsg} CS_LoginMsg
         */
        CS_LoginMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.CS_LoginMsg)
                return object;
            var message = new $root.rpc.CS_LoginMsg();
            if (object.UserName != null)
                message.UserName = String(object.UserName);
            if (object.UserPass != null)
                message.UserPass = String(object.UserPass);
            return message;
        };

        /**
         * Creates a plain object from a CS_LoginMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.CS_LoginMsg
         * @static
         * @param {rpc.CS_LoginMsg} message CS_LoginMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_LoginMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserName = "";
                object.UserPass = "";
            }
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                object.UserName = message.UserName;
            if (message.UserPass != null && message.hasOwnProperty("UserPass"))
                object.UserPass = message.UserPass;
            return object;
        };

        /**
         * Converts this CS_LoginMsg to JSON.
         * @function toJSON
         * @memberof rpc.CS_LoginMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_LoginMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_LoginMsg;
    })();

    rpc.SC_LoginMsg = (function() {

        /**
         * Properties of a SC_LoginMsg.
         * @memberof rpc
         * @interface ISC_LoginMsg
         * @property {number|Long} Uid SC_LoginMsg Uid
         */

        /**
         * Constructs a new SC_LoginMsg.
         * @memberof rpc
         * @classdesc Represents a SC_LoginMsg.
         * @implements ISC_LoginMsg
         * @constructor
         * @param {rpc.ISC_LoginMsg=} [properties] Properties to set
         */
        function SC_LoginMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_LoginMsg Uid.
         * @member {number|Long} Uid
         * @memberof rpc.SC_LoginMsg
         * @instance
         */
        SC_LoginMsg.prototype.Uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SC_LoginMsg instance using the specified properties.
         * @function create
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {rpc.ISC_LoginMsg=} [properties] Properties to set
         * @returns {rpc.SC_LoginMsg} SC_LoginMsg instance
         */
        SC_LoginMsg.create = function create(properties) {
            return new SC_LoginMsg(properties);
        };

        /**
         * Encodes the specified SC_LoginMsg message. Does not implicitly {@link rpc.SC_LoginMsg.verify|verify} messages.
         * @function encode
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {rpc.ISC_LoginMsg} message SC_LoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_LoginMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Uid);
            return writer;
        };

        /**
         * Encodes the specified SC_LoginMsg message, length delimited. Does not implicitly {@link rpc.SC_LoginMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {rpc.ISC_LoginMsg} message SC_LoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_LoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_LoginMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.SC_LoginMsg} SC_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_LoginMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.SC_LoginMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Uid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Uid"))
                throw $util.ProtocolError("missing required 'Uid'", { instance: message });
            return message;
        };

        /**
         * Decodes a SC_LoginMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.SC_LoginMsg} SC_LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_LoginMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_LoginMsg message.
         * @function verify
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_LoginMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Uid) && !(message.Uid && $util.isInteger(message.Uid.low) && $util.isInteger(message.Uid.high)))
                return "Uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a SC_LoginMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.SC_LoginMsg} SC_LoginMsg
         */
        SC_LoginMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.SC_LoginMsg)
                return object;
            var message = new $root.rpc.SC_LoginMsg();
            if (object.Uid != null)
                if ($util.Long)
                    (message.Uid = $util.Long.fromValue(object.Uid)).unsigned = true;
                else if (typeof object.Uid === "string")
                    message.Uid = parseInt(object.Uid, 10);
                else if (typeof object.Uid === "number")
                    message.Uid = object.Uid;
                else if (typeof object.Uid === "object")
                    message.Uid = new $util.LongBits(object.Uid.low >>> 0, object.Uid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SC_LoginMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.SC_LoginMsg
         * @static
         * @param {rpc.SC_LoginMsg} message SC_LoginMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_LoginMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Uid = options.longs === String ? "0" : 0;
            if (message.Uid != null && message.hasOwnProperty("Uid"))
                if (typeof message.Uid === "number")
                    object.Uid = options.longs === String ? String(message.Uid) : message.Uid;
                else
                    object.Uid = options.longs === String ? $util.Long.prototype.toString.call(message.Uid) : options.longs === Number ? new $util.LongBits(message.Uid.low >>> 0, message.Uid.high >>> 0).toNumber(true) : message.Uid;
            return object;
        };

        /**
         * Converts this SC_LoginMsg to JSON.
         * @function toJSON
         * @memberof rpc.SC_LoginMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_LoginMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_LoginMsg;
    })();

    rpc.CS_PingMsg = (function() {

        /**
         * Properties of a CS_PingMsg.
         * @memberof rpc
         * @interface ICS_PingMsg
         */

        /**
         * Constructs a new CS_PingMsg.
         * @memberof rpc
         * @classdesc Represents a CS_PingMsg.
         * @implements ICS_PingMsg
         * @constructor
         * @param {rpc.ICS_PingMsg=} [properties] Properties to set
         */
        function CS_PingMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CS_PingMsg instance using the specified properties.
         * @function create
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {rpc.ICS_PingMsg=} [properties] Properties to set
         * @returns {rpc.CS_PingMsg} CS_PingMsg instance
         */
        CS_PingMsg.create = function create(properties) {
            return new CS_PingMsg(properties);
        };

        /**
         * Encodes the specified CS_PingMsg message. Does not implicitly {@link rpc.CS_PingMsg.verify|verify} messages.
         * @function encode
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {rpc.ICS_PingMsg} message CS_PingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_PingMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CS_PingMsg message, length delimited. Does not implicitly {@link rpc.CS_PingMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {rpc.ICS_PingMsg} message CS_PingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_PingMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_PingMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.CS_PingMsg} CS_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_PingMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.CS_PingMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_PingMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.CS_PingMsg} CS_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_PingMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_PingMsg message.
         * @function verify
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_PingMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CS_PingMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.CS_PingMsg} CS_PingMsg
         */
        CS_PingMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.CS_PingMsg)
                return object;
            return new $root.rpc.CS_PingMsg();
        };

        /**
         * Creates a plain object from a CS_PingMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.CS_PingMsg
         * @static
         * @param {rpc.CS_PingMsg} message CS_PingMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_PingMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CS_PingMsg to JSON.
         * @function toJSON
         * @memberof rpc.CS_PingMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_PingMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_PingMsg;
    })();

    rpc.SC_PingMsg = (function() {

        /**
         * Properties of a SC_PingMsg.
         * @memberof rpc
         * @interface ISC_PingMsg
         */

        /**
         * Constructs a new SC_PingMsg.
         * @memberof rpc
         * @classdesc Represents a SC_PingMsg.
         * @implements ISC_PingMsg
         * @constructor
         * @param {rpc.ISC_PingMsg=} [properties] Properties to set
         */
        function SC_PingMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SC_PingMsg instance using the specified properties.
         * @function create
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {rpc.ISC_PingMsg=} [properties] Properties to set
         * @returns {rpc.SC_PingMsg} SC_PingMsg instance
         */
        SC_PingMsg.create = function create(properties) {
            return new SC_PingMsg(properties);
        };

        /**
         * Encodes the specified SC_PingMsg message. Does not implicitly {@link rpc.SC_PingMsg.verify|verify} messages.
         * @function encode
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {rpc.ISC_PingMsg} message SC_PingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_PingMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SC_PingMsg message, length delimited. Does not implicitly {@link rpc.SC_PingMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {rpc.ISC_PingMsg} message SC_PingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_PingMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_PingMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.SC_PingMsg} SC_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_PingMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.SC_PingMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_PingMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.SC_PingMsg} SC_PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_PingMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_PingMsg message.
         * @function verify
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_PingMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SC_PingMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.SC_PingMsg} SC_PingMsg
         */
        SC_PingMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.SC_PingMsg)
                return object;
            return new $root.rpc.SC_PingMsg();
        };

        /**
         * Creates a plain object from a SC_PingMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.SC_PingMsg
         * @static
         * @param {rpc.SC_PingMsg} message SC_PingMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_PingMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SC_PingMsg to JSON.
         * @function toJSON
         * @memberof rpc.SC_PingMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_PingMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_PingMsg;
    })();

    rpc.RpcErrorResponse = (function() {

        /**
         * Properties of a RpcErrorResponse.
         * @memberof rpc
         * @interface IRpcErrorResponse
         * @property {string} Method RpcErrorResponse Method
         * @property {string} Text RpcErrorResponse Text
         */

        /**
         * Constructs a new RpcErrorResponse.
         * @memberof rpc
         * @classdesc Represents a RpcErrorResponse.
         * @implements IRpcErrorResponse
         * @constructor
         * @param {rpc.IRpcErrorResponse=} [properties] Properties to set
         */
        function RpcErrorResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcErrorResponse Method.
         * @member {string} Method
         * @memberof rpc.RpcErrorResponse
         * @instance
         */
        RpcErrorResponse.prototype.Method = "";

        /**
         * RpcErrorResponse Text.
         * @member {string} Text
         * @memberof rpc.RpcErrorResponse
         * @instance
         */
        RpcErrorResponse.prototype.Text = "";

        /**
         * Creates a new RpcErrorResponse instance using the specified properties.
         * @function create
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {rpc.IRpcErrorResponse=} [properties] Properties to set
         * @returns {rpc.RpcErrorResponse} RpcErrorResponse instance
         */
        RpcErrorResponse.create = function create(properties) {
            return new RpcErrorResponse(properties);
        };

        /**
         * Encodes the specified RpcErrorResponse message. Does not implicitly {@link rpc.RpcErrorResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {rpc.IRpcErrorResponse} message RpcErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcErrorResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Method);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Text);
            return writer;
        };

        /**
         * Encodes the specified RpcErrorResponse message, length delimited. Does not implicitly {@link rpc.RpcErrorResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {rpc.IRpcErrorResponse} message RpcErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcErrorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.RpcErrorResponse} RpcErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcErrorResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.RpcErrorResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Method = reader.string();
                    break;
                case 2:
                    message.Text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Method"))
                throw $util.ProtocolError("missing required 'Method'", { instance: message });
            if (!message.hasOwnProperty("Text"))
                throw $util.ProtocolError("missing required 'Text'", { instance: message });
            return message;
        };

        /**
         * Decodes a RpcErrorResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.RpcErrorResponse} RpcErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcErrorResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcErrorResponse message.
         * @function verify
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcErrorResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Method))
                return "Method: string expected";
            if (!$util.isString(message.Text))
                return "Text: string expected";
            return null;
        };

        /**
         * Creates a RpcErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.RpcErrorResponse} RpcErrorResponse
         */
        RpcErrorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.RpcErrorResponse)
                return object;
            var message = new $root.rpc.RpcErrorResponse();
            if (object.Method != null)
                message.Method = String(object.Method);
            if (object.Text != null)
                message.Text = String(object.Text);
            return message;
        };

        /**
         * Creates a plain object from a RpcErrorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.RpcErrorResponse
         * @static
         * @param {rpc.RpcErrorResponse} message RpcErrorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcErrorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Method = "";
                object.Text = "";
            }
            if (message.Method != null && message.hasOwnProperty("Method"))
                object.Method = message.Method;
            if (message.Text != null && message.hasOwnProperty("Text"))
                object.Text = message.Text;
            return object;
        };

        /**
         * Converts this RpcErrorResponse to JSON.
         * @function toJSON
         * @memberof rpc.RpcErrorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcErrorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RpcErrorResponse;
    })();

    rpc.SyncError = (function() {

        /**
         * Properties of a SyncError.
         * @memberof rpc
         * @interface ISyncError
         * @property {string} Text SyncError Text
         */

        /**
         * Constructs a new SyncError.
         * @memberof rpc
         * @classdesc Represents a SyncError.
         * @implements ISyncError
         * @constructor
         * @param {rpc.ISyncError=} [properties] Properties to set
         */
        function SyncError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncError Text.
         * @member {string} Text
         * @memberof rpc.SyncError
         * @instance
         */
        SyncError.prototype.Text = "";

        /**
         * Creates a new SyncError instance using the specified properties.
         * @function create
         * @memberof rpc.SyncError
         * @static
         * @param {rpc.ISyncError=} [properties] Properties to set
         * @returns {rpc.SyncError} SyncError instance
         */
        SyncError.create = function create(properties) {
            return new SyncError(properties);
        };

        /**
         * Encodes the specified SyncError message. Does not implicitly {@link rpc.SyncError.verify|verify} messages.
         * @function encode
         * @memberof rpc.SyncError
         * @static
         * @param {rpc.ISyncError} message SyncError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Text);
            return writer;
        };

        /**
         * Encodes the specified SyncError message, length delimited. Does not implicitly {@link rpc.SyncError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.SyncError
         * @static
         * @param {rpc.ISyncError} message SyncError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncError message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.SyncError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.SyncError} SyncError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.SyncError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.Text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Text"))
                throw $util.ProtocolError("missing required 'Text'", { instance: message });
            return message;
        };

        /**
         * Decodes a SyncError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.SyncError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.SyncError} SyncError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncError message.
         * @function verify
         * @memberof rpc.SyncError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Text))
                return "Text: string expected";
            return null;
        };

        /**
         * Creates a SyncError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.SyncError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.SyncError} SyncError
         */
        SyncError.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.SyncError)
                return object;
            var message = new $root.rpc.SyncError();
            if (object.Text != null)
                message.Text = String(object.Text);
            return message;
        };

        /**
         * Creates a plain object from a SyncError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.SyncError
         * @static
         * @param {rpc.SyncError} message SyncError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Text = "";
            if (message.Text != null && message.hasOwnProperty("Text"))
                object.Text = message.Text;
            return object;
        };

        /**
         * Converts this SyncError to JSON.
         * @function toJSON
         * @memberof rpc.SyncError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncError;
    })();

    return rpc;
})();