var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.message = (function() {

        /**
         * Namespace message.
         * @memberof com
         * @namespace
         */
        var message = {};

        message.DeapActivityMsg = (function() {

            /**
             * Properties of a DeapActivityMsg.
             * @memberof com.message
             * @interface IDeapActivityMsg
             * @property {number|null} [allCount] DeapActivityMsg allCount
             * @property {number|null} [leftCount] DeapActivityMsg leftCount
             * @property {number|Long|null} [endTime] DeapActivityMsg endTime
             * @property {number|null} [limiteCount] DeapActivityMsg limiteCount
             */

            /**
             * Constructs a new DeapActivityMsg.
             * @memberof com.message
             * @classdesc Represents a DeapActivityMsg.
             * @implements IDeapActivityMsg
             * @constructor
             * @param {com.message.IDeapActivityMsg=} [properties] Properties to set
             */
            function DeapActivityMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeapActivityMsg allCount.
             * @member {number} allCount
             * @memberof com.message.DeapActivityMsg
             * @instance
             */
            DeapActivityMsg.prototype.allCount = 0;

            /**
             * DeapActivityMsg leftCount.
             * @member {number} leftCount
             * @memberof com.message.DeapActivityMsg
             * @instance
             */
            DeapActivityMsg.prototype.leftCount = 0;

            /**
             * DeapActivityMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.DeapActivityMsg
             * @instance
             */
            DeapActivityMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DeapActivityMsg limiteCount.
             * @member {number} limiteCount
             * @memberof com.message.DeapActivityMsg
             * @instance
             */
            DeapActivityMsg.prototype.limiteCount = 0;

            /**
             * Encodes the specified DeapActivityMsg message. Does not implicitly {@link com.message.DeapActivityMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DeapActivityMsg
             * @static
             * @param {com.message.IDeapActivityMsg} message DeapActivityMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeapActivityMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allCount != null && message.hasOwnProperty("allCount"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.allCount);
                if (message.leftCount != null && message.hasOwnProperty("leftCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.leftCount);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
                if (message.limiteCount != null && message.hasOwnProperty("limiteCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.limiteCount);
                return writer;
            };

            /**
             * Decodes a DeapActivityMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DeapActivityMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DeapActivityMsg} DeapActivityMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeapActivityMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DeapActivityMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.allCount = reader.int32();
                        break;
                    case 2:
                        message.leftCount = reader.int32();
                        break;
                    case 3:
                        message.endTime = reader.int64();
                        break;
                    case 4:
                        message.limiteCount = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DeapActivityMsg;
        })();

        message.C_GET_DEAP_ACTIVITY_INFO = (function() {

            /**
             * Properties of a C_GET_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IC_GET_DEAP_ACTIVITY_INFO
             */

            /**
             * Constructs a new C_GET_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_DEAP_ACTIVITY_INFO.
             * @implements IC_GET_DEAP_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IC_GET_DEAP_ACTIVITY_INFO=} [properties] Properties to set
             */
            function C_GET_DEAP_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DEAP_ACTIVITY_INFO message. Does not implicitly {@link com.message.C_GET_DEAP_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DEAP_ACTIVITY_INFO
             * @static
             * @param {com.message.IC_GET_DEAP_ACTIVITY_INFO} message C_GET_DEAP_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DEAP_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DEAP_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DEAP_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DEAP_ACTIVITY_INFO} C_GET_DEAP_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DEAP_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DEAP_ACTIVITY_INFO();
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

            return C_GET_DEAP_ACTIVITY_INFO;
        })();

        message.S_GET_DEAP_ACTIVITY_INFO = (function() {

            /**
             * Properties of a S_GET_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IS_GET_DEAP_ACTIVITY_INFO
             * @property {com.message.IDeapActivityMsg|null} [deapActivityMsg] S_GET_DEAP_ACTIVITY_INFO deapActivityMsg
             */

            /**
             * Constructs a new S_GET_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_DEAP_ACTIVITY_INFO.
             * @implements IS_GET_DEAP_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IS_GET_DEAP_ACTIVITY_INFO=} [properties] Properties to set
             */
            function S_GET_DEAP_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DEAP_ACTIVITY_INFO deapActivityMsg.
             * @member {com.message.IDeapActivityMsg|null|undefined} deapActivityMsg
             * @memberof com.message.S_GET_DEAP_ACTIVITY_INFO
             * @instance
             */
            S_GET_DEAP_ACTIVITY_INFO.prototype.deapActivityMsg = null;

            /**
             * Encodes the specified S_GET_DEAP_ACTIVITY_INFO message. Does not implicitly {@link com.message.S_GET_DEAP_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DEAP_ACTIVITY_INFO
             * @static
             * @param {com.message.IS_GET_DEAP_ACTIVITY_INFO} message S_GET_DEAP_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DEAP_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deapActivityMsg != null && message.hasOwnProperty("deapActivityMsg"))
                    $root.com.message.DeapActivityMsg.encode(message.deapActivityMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DEAP_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DEAP_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DEAP_ACTIVITY_INFO} S_GET_DEAP_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DEAP_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DEAP_ACTIVITY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deapActivityMsg = $root.com.message.DeapActivityMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DEAP_ACTIVITY_INFO;
        })();

        message.MyDeapActivityMsg = (function() {

            /**
             * Properties of a MyDeapActivityMsg.
             * @memberof com.message
             * @interface IMyDeapActivityMsg
             * @property {number|Long|null} [playerId] MyDeapActivityMsg playerId
             * @property {number|null} [buyCount] MyDeapActivityMsg buyCount
             * @property {number|null} [leftCount] MyDeapActivityMsg leftCount
             * @property {number|Long|null} [endTime] MyDeapActivityMsg endTime
             */

            /**
             * Constructs a new MyDeapActivityMsg.
             * @memberof com.message
             * @classdesc Represents a MyDeapActivityMsg.
             * @implements IMyDeapActivityMsg
             * @constructor
             * @param {com.message.IMyDeapActivityMsg=} [properties] Properties to set
             */
            function MyDeapActivityMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MyDeapActivityMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.MyDeapActivityMsg
             * @instance
             */
            MyDeapActivityMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MyDeapActivityMsg buyCount.
             * @member {number} buyCount
             * @memberof com.message.MyDeapActivityMsg
             * @instance
             */
            MyDeapActivityMsg.prototype.buyCount = 0;

            /**
             * MyDeapActivityMsg leftCount.
             * @member {number} leftCount
             * @memberof com.message.MyDeapActivityMsg
             * @instance
             */
            MyDeapActivityMsg.prototype.leftCount = 0;

            /**
             * MyDeapActivityMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.MyDeapActivityMsg
             * @instance
             */
            MyDeapActivityMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified MyDeapActivityMsg message. Does not implicitly {@link com.message.MyDeapActivityMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.MyDeapActivityMsg
             * @static
             * @param {com.message.IMyDeapActivityMsg} message MyDeapActivityMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyDeapActivityMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.buyCount != null && message.hasOwnProperty("buyCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.buyCount);
                if (message.leftCount != null && message.hasOwnProperty("leftCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.leftCount);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endTime);
                return writer;
            };

            /**
             * Decodes a MyDeapActivityMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.MyDeapActivityMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.MyDeapActivityMsg} MyDeapActivityMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyDeapActivityMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.MyDeapActivityMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.buyCount = reader.int32();
                        break;
                    case 3:
                        message.leftCount = reader.int32();
                        break;
                    case 4:
                        message.endTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MyDeapActivityMsg;
        })();

        message.C_GET_MY_DEAP_ACTIVITY_INFO = (function() {

            /**
             * Properties of a C_GET_MY_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IC_GET_MY_DEAP_ACTIVITY_INFO
             */

            /**
             * Constructs a new C_GET_MY_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_MY_DEAP_ACTIVITY_INFO.
             * @implements IC_GET_MY_DEAP_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IC_GET_MY_DEAP_ACTIVITY_INFO=} [properties] Properties to set
             */
            function C_GET_MY_DEAP_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MY_DEAP_ACTIVITY_INFO message. Does not implicitly {@link com.message.C_GET_MY_DEAP_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MY_DEAP_ACTIVITY_INFO
             * @static
             * @param {com.message.IC_GET_MY_DEAP_ACTIVITY_INFO} message C_GET_MY_DEAP_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MY_DEAP_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MY_DEAP_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MY_DEAP_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MY_DEAP_ACTIVITY_INFO} C_GET_MY_DEAP_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MY_DEAP_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MY_DEAP_ACTIVITY_INFO();
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

            return C_GET_MY_DEAP_ACTIVITY_INFO;
        })();

        message.S_GET_MY_DEAP_ACTIVITY_INFO = (function() {

            /**
             * Properties of a S_GET_MY_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IS_GET_MY_DEAP_ACTIVITY_INFO
             * @property {com.message.IMyDeapActivityMsg|null} [myDeapActivityMsg] S_GET_MY_DEAP_ACTIVITY_INFO myDeapActivityMsg
             */

            /**
             * Constructs a new S_GET_MY_DEAP_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_MY_DEAP_ACTIVITY_INFO.
             * @implements IS_GET_MY_DEAP_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IS_GET_MY_DEAP_ACTIVITY_INFO=} [properties] Properties to set
             */
            function S_GET_MY_DEAP_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MY_DEAP_ACTIVITY_INFO myDeapActivityMsg.
             * @member {com.message.IMyDeapActivityMsg|null|undefined} myDeapActivityMsg
             * @memberof com.message.S_GET_MY_DEAP_ACTIVITY_INFO
             * @instance
             */
            S_GET_MY_DEAP_ACTIVITY_INFO.prototype.myDeapActivityMsg = null;

            /**
             * Encodes the specified S_GET_MY_DEAP_ACTIVITY_INFO message. Does not implicitly {@link com.message.S_GET_MY_DEAP_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MY_DEAP_ACTIVITY_INFO
             * @static
             * @param {com.message.IS_GET_MY_DEAP_ACTIVITY_INFO} message S_GET_MY_DEAP_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MY_DEAP_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.myDeapActivityMsg != null && message.hasOwnProperty("myDeapActivityMsg"))
                    $root.com.message.MyDeapActivityMsg.encode(message.myDeapActivityMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_MY_DEAP_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MY_DEAP_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MY_DEAP_ACTIVITY_INFO} S_GET_MY_DEAP_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MY_DEAP_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MY_DEAP_ACTIVITY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.myDeapActivityMsg = $root.com.message.MyDeapActivityMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MY_DEAP_ACTIVITY_INFO;
        })();

        message.C_BUY_DEAP_ACTIVITY_FISH = (function() {

            /**
             * Properties of a C_BUY_DEAP_ACTIVITY_FISH.
             * @memberof com.message
             * @interface IC_BUY_DEAP_ACTIVITY_FISH
             * @property {number|Long|null} [fishId] C_BUY_DEAP_ACTIVITY_FISH fishId
             */

            /**
             * Constructs a new C_BUY_DEAP_ACTIVITY_FISH.
             * @memberof com.message
             * @classdesc Represents a C_BUY_DEAP_ACTIVITY_FISH.
             * @implements IC_BUY_DEAP_ACTIVITY_FISH
             * @constructor
             * @param {com.message.IC_BUY_DEAP_ACTIVITY_FISH=} [properties] Properties to set
             */
            function C_BUY_DEAP_ACTIVITY_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_BUY_DEAP_ACTIVITY_FISH fishId.
             * @member {number|Long} fishId
             * @memberof com.message.C_BUY_DEAP_ACTIVITY_FISH
             * @instance
             */
            C_BUY_DEAP_ACTIVITY_FISH.prototype.fishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_BUY_DEAP_ACTIVITY_FISH message. Does not implicitly {@link com.message.C_BUY_DEAP_ACTIVITY_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_BUY_DEAP_ACTIVITY_FISH
             * @static
             * @param {com.message.IC_BUY_DEAP_ACTIVITY_FISH} message C_BUY_DEAP_ACTIVITY_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_BUY_DEAP_ACTIVITY_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fishId != null && message.hasOwnProperty("fishId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.fishId);
                return writer;
            };

            /**
             * Decodes a C_BUY_DEAP_ACTIVITY_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_BUY_DEAP_ACTIVITY_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_BUY_DEAP_ACTIVITY_FISH} C_BUY_DEAP_ACTIVITY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_BUY_DEAP_ACTIVITY_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_BUY_DEAP_ACTIVITY_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fishId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_BUY_DEAP_ACTIVITY_FISH;
        })();

        message.S_BUY_DEAP_ACTIVITY_FISH = (function() {

            /**
             * Properties of a S_BUY_DEAP_ACTIVITY_FISH.
             * @memberof com.message
             * @interface IS_BUY_DEAP_ACTIVITY_FISH
             * @property {com.message.IFishMsg|null} [fishMsg] S_BUY_DEAP_ACTIVITY_FISH fishMsg
             * @property {com.message.IMyDeapActivityMsg|null} [myDeapActivityMsg] S_BUY_DEAP_ACTIVITY_FISH myDeapActivityMsg
             */

            /**
             * Constructs a new S_BUY_DEAP_ACTIVITY_FISH.
             * @memberof com.message
             * @classdesc Represents a S_BUY_DEAP_ACTIVITY_FISH.
             * @implements IS_BUY_DEAP_ACTIVITY_FISH
             * @constructor
             * @param {com.message.IS_BUY_DEAP_ACTIVITY_FISH=} [properties] Properties to set
             */
            function S_BUY_DEAP_ACTIVITY_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_BUY_DEAP_ACTIVITY_FISH fishMsg.
             * @member {com.message.IFishMsg|null|undefined} fishMsg
             * @memberof com.message.S_BUY_DEAP_ACTIVITY_FISH
             * @instance
             */
            S_BUY_DEAP_ACTIVITY_FISH.prototype.fishMsg = null;

            /**
             * S_BUY_DEAP_ACTIVITY_FISH myDeapActivityMsg.
             * @member {com.message.IMyDeapActivityMsg|null|undefined} myDeapActivityMsg
             * @memberof com.message.S_BUY_DEAP_ACTIVITY_FISH
             * @instance
             */
            S_BUY_DEAP_ACTIVITY_FISH.prototype.myDeapActivityMsg = null;

            /**
             * Encodes the specified S_BUY_DEAP_ACTIVITY_FISH message. Does not implicitly {@link com.message.S_BUY_DEAP_ACTIVITY_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_BUY_DEAP_ACTIVITY_FISH
             * @static
             * @param {com.message.IS_BUY_DEAP_ACTIVITY_FISH} message S_BUY_DEAP_ACTIVITY_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_BUY_DEAP_ACTIVITY_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fishMsg != null && message.hasOwnProperty("fishMsg"))
                    $root.com.message.FishMsg.encode(message.fishMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.myDeapActivityMsg != null && message.hasOwnProperty("myDeapActivityMsg"))
                    $root.com.message.MyDeapActivityMsg.encode(message.myDeapActivityMsg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_BUY_DEAP_ACTIVITY_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_BUY_DEAP_ACTIVITY_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_BUY_DEAP_ACTIVITY_FISH} S_BUY_DEAP_ACTIVITY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_BUY_DEAP_ACTIVITY_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_BUY_DEAP_ACTIVITY_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fishMsg = $root.com.message.FishMsg.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.myDeapActivityMsg = $root.com.message.MyDeapActivityMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_BUY_DEAP_ACTIVITY_FISH;
        })();

        message.OcenActivityMsg = (function() {

            /**
             * Properties of an OcenActivityMsg.
             * @memberof com.message
             * @interface IOcenActivityMsg
             * @property {number|null} [directCount] OcenActivityMsg directCount
             * @property {number|null} [teamCount] OcenActivityMsg teamCount
             * @property {number|Long|null} [endTime] OcenActivityMsg endTime
             */

            /**
             * Constructs a new OcenActivityMsg.
             * @memberof com.message
             * @classdesc Represents an OcenActivityMsg.
             * @implements IOcenActivityMsg
             * @constructor
             * @param {com.message.IOcenActivityMsg=} [properties] Properties to set
             */
            function OcenActivityMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OcenActivityMsg directCount.
             * @member {number} directCount
             * @memberof com.message.OcenActivityMsg
             * @instance
             */
            OcenActivityMsg.prototype.directCount = 0;

            /**
             * OcenActivityMsg teamCount.
             * @member {number} teamCount
             * @memberof com.message.OcenActivityMsg
             * @instance
             */
            OcenActivityMsg.prototype.teamCount = 0;

            /**
             * OcenActivityMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.OcenActivityMsg
             * @instance
             */
            OcenActivityMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified OcenActivityMsg message. Does not implicitly {@link com.message.OcenActivityMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.OcenActivityMsg
             * @static
             * @param {com.message.IOcenActivityMsg} message OcenActivityMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OcenActivityMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.directCount != null && message.hasOwnProperty("directCount"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.directCount);
                if (message.teamCount != null && message.hasOwnProperty("teamCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.teamCount);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
                return writer;
            };

            /**
             * Decodes an OcenActivityMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.OcenActivityMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.OcenActivityMsg} OcenActivityMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OcenActivityMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.OcenActivityMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.directCount = reader.int32();
                        break;
                    case 2:
                        message.teamCount = reader.int32();
                        break;
                    case 3:
                        message.endTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OcenActivityMsg;
        })();

        message.C_GET_OCEAN_ACTIVITY_INFO = (function() {

            /**
             * Properties of a C_GET_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IC_GET_OCEAN_ACTIVITY_INFO
             */

            /**
             * Constructs a new C_GET_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_OCEAN_ACTIVITY_INFO.
             * @implements IC_GET_OCEAN_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IC_GET_OCEAN_ACTIVITY_INFO=} [properties] Properties to set
             */
            function C_GET_OCEAN_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_OCEAN_ACTIVITY_INFO message. Does not implicitly {@link com.message.C_GET_OCEAN_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_INFO
             * @static
             * @param {com.message.IC_GET_OCEAN_ACTIVITY_INFO} message C_GET_OCEAN_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_OCEAN_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_OCEAN_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_OCEAN_ACTIVITY_INFO} C_GET_OCEAN_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_OCEAN_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_OCEAN_ACTIVITY_INFO();
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

            return C_GET_OCEAN_ACTIVITY_INFO;
        })();

        message.S_GET_OCEAN_ACTIVITY_INFO = (function() {

            /**
             * Properties of a S_GET_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IS_GET_OCEAN_ACTIVITY_INFO
             * @property {com.message.IOcenActivityMsg|null} [ocenActivityMsg] S_GET_OCEAN_ACTIVITY_INFO ocenActivityMsg
             */

            /**
             * Constructs a new S_GET_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_OCEAN_ACTIVITY_INFO.
             * @implements IS_GET_OCEAN_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IS_GET_OCEAN_ACTIVITY_INFO=} [properties] Properties to set
             */
            function S_GET_OCEAN_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_OCEAN_ACTIVITY_INFO ocenActivityMsg.
             * @member {com.message.IOcenActivityMsg|null|undefined} ocenActivityMsg
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_INFO
             * @instance
             */
            S_GET_OCEAN_ACTIVITY_INFO.prototype.ocenActivityMsg = null;

            /**
             * Encodes the specified S_GET_OCEAN_ACTIVITY_INFO message. Does not implicitly {@link com.message.S_GET_OCEAN_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_INFO
             * @static
             * @param {com.message.IS_GET_OCEAN_ACTIVITY_INFO} message S_GET_OCEAN_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_OCEAN_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ocenActivityMsg != null && message.hasOwnProperty("ocenActivityMsg"))
                    $root.com.message.OcenActivityMsg.encode(message.ocenActivityMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_OCEAN_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_OCEAN_ACTIVITY_INFO} S_GET_OCEAN_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_OCEAN_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_OCEAN_ACTIVITY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ocenActivityMsg = $root.com.message.OcenActivityMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_OCEAN_ACTIVITY_INFO;
        })();

        message.MyOceanActivityMsg = (function() {

            /**
             * Properties of a MyOceanActivityMsg.
             * @memberof com.message
             * @interface IMyOceanActivityMsg
             * @property {number|Long|null} [playerId] MyOceanActivityMsg playerId
             * @property {number|null} [directCount] MyOceanActivityMsg directCount
             * @property {number|null} [teamCount] MyOceanActivityMsg teamCount
             * @property {number|null} [leftCount] MyOceanActivityMsg leftCount
             * @property {number|Long|null} [endTime] MyOceanActivityMsg endTime
             */

            /**
             * Constructs a new MyOceanActivityMsg.
             * @memberof com.message
             * @classdesc Represents a MyOceanActivityMsg.
             * @implements IMyOceanActivityMsg
             * @constructor
             * @param {com.message.IMyOceanActivityMsg=} [properties] Properties to set
             */
            function MyOceanActivityMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MyOceanActivityMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.MyOceanActivityMsg
             * @instance
             */
            MyOceanActivityMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MyOceanActivityMsg directCount.
             * @member {number} directCount
             * @memberof com.message.MyOceanActivityMsg
             * @instance
             */
            MyOceanActivityMsg.prototype.directCount = 0;

            /**
             * MyOceanActivityMsg teamCount.
             * @member {number} teamCount
             * @memberof com.message.MyOceanActivityMsg
             * @instance
             */
            MyOceanActivityMsg.prototype.teamCount = 0;

            /**
             * MyOceanActivityMsg leftCount.
             * @member {number} leftCount
             * @memberof com.message.MyOceanActivityMsg
             * @instance
             */
            MyOceanActivityMsg.prototype.leftCount = 0;

            /**
             * MyOceanActivityMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.MyOceanActivityMsg
             * @instance
             */
            MyOceanActivityMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified MyOceanActivityMsg message. Does not implicitly {@link com.message.MyOceanActivityMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.MyOceanActivityMsg
             * @static
             * @param {com.message.IMyOceanActivityMsg} message MyOceanActivityMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyOceanActivityMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.directCount != null && message.hasOwnProperty("directCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.directCount);
                if (message.teamCount != null && message.hasOwnProperty("teamCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.teamCount);
                if (message.leftCount != null && message.hasOwnProperty("leftCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.leftCount);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.endTime);
                return writer;
            };

            /**
             * Decodes a MyOceanActivityMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.MyOceanActivityMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.MyOceanActivityMsg} MyOceanActivityMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyOceanActivityMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.MyOceanActivityMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.directCount = reader.int32();
                        break;
                    case 3:
                        message.teamCount = reader.int32();
                        break;
                    case 4:
                        message.leftCount = reader.int32();
                        break;
                    case 5:
                        message.endTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MyOceanActivityMsg;
        })();

        message.C_GET_MY_OCEAN_ACTIVITY_INFO = (function() {

            /**
             * Properties of a C_GET_MY_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IC_GET_MY_OCEAN_ACTIVITY_INFO
             */

            /**
             * Constructs a new C_GET_MY_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_MY_OCEAN_ACTIVITY_INFO.
             * @implements IC_GET_MY_OCEAN_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IC_GET_MY_OCEAN_ACTIVITY_INFO=} [properties] Properties to set
             */
            function C_GET_MY_OCEAN_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MY_OCEAN_ACTIVITY_INFO message. Does not implicitly {@link com.message.C_GET_MY_OCEAN_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MY_OCEAN_ACTIVITY_INFO
             * @static
             * @param {com.message.IC_GET_MY_OCEAN_ACTIVITY_INFO} message C_GET_MY_OCEAN_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MY_OCEAN_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MY_OCEAN_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MY_OCEAN_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MY_OCEAN_ACTIVITY_INFO} C_GET_MY_OCEAN_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MY_OCEAN_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MY_OCEAN_ACTIVITY_INFO();
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

            return C_GET_MY_OCEAN_ACTIVITY_INFO;
        })();

        message.S_GET_MY_OCEAN_ACTIVITY_INFO = (function() {

            /**
             * Properties of a S_GET_MY_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @interface IS_GET_MY_OCEAN_ACTIVITY_INFO
             * @property {com.message.IMyOceanActivityMsg|null} [myOceanActivityMsg] S_GET_MY_OCEAN_ACTIVITY_INFO myOceanActivityMsg
             */

            /**
             * Constructs a new S_GET_MY_OCEAN_ACTIVITY_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_MY_OCEAN_ACTIVITY_INFO.
             * @implements IS_GET_MY_OCEAN_ACTIVITY_INFO
             * @constructor
             * @param {com.message.IS_GET_MY_OCEAN_ACTIVITY_INFO=} [properties] Properties to set
             */
            function S_GET_MY_OCEAN_ACTIVITY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MY_OCEAN_ACTIVITY_INFO myOceanActivityMsg.
             * @member {com.message.IMyOceanActivityMsg|null|undefined} myOceanActivityMsg
             * @memberof com.message.S_GET_MY_OCEAN_ACTIVITY_INFO
             * @instance
             */
            S_GET_MY_OCEAN_ACTIVITY_INFO.prototype.myOceanActivityMsg = null;

            /**
             * Encodes the specified S_GET_MY_OCEAN_ACTIVITY_INFO message. Does not implicitly {@link com.message.S_GET_MY_OCEAN_ACTIVITY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MY_OCEAN_ACTIVITY_INFO
             * @static
             * @param {com.message.IS_GET_MY_OCEAN_ACTIVITY_INFO} message S_GET_MY_OCEAN_ACTIVITY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MY_OCEAN_ACTIVITY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.myOceanActivityMsg != null && message.hasOwnProperty("myOceanActivityMsg"))
                    $root.com.message.MyOceanActivityMsg.encode(message.myOceanActivityMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_MY_OCEAN_ACTIVITY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MY_OCEAN_ACTIVITY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MY_OCEAN_ACTIVITY_INFO} S_GET_MY_OCEAN_ACTIVITY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MY_OCEAN_ACTIVITY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MY_OCEAN_ACTIVITY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.myOceanActivityMsg = $root.com.message.MyOceanActivityMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MY_OCEAN_ACTIVITY_INFO;
        })();

        message.C_OCEAN_ACTIVITY_DRAW = (function() {

            /**
             * Properties of a C_OCEAN_ACTIVITY_DRAW.
             * @memberof com.message
             * @interface IC_OCEAN_ACTIVITY_DRAW
             */

            /**
             * Constructs a new C_OCEAN_ACTIVITY_DRAW.
             * @memberof com.message
             * @classdesc Represents a C_OCEAN_ACTIVITY_DRAW.
             * @implements IC_OCEAN_ACTIVITY_DRAW
             * @constructor
             * @param {com.message.IC_OCEAN_ACTIVITY_DRAW=} [properties] Properties to set
             */
            function C_OCEAN_ACTIVITY_DRAW(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_OCEAN_ACTIVITY_DRAW message. Does not implicitly {@link com.message.C_OCEAN_ACTIVITY_DRAW.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_OCEAN_ACTIVITY_DRAW
             * @static
             * @param {com.message.IC_OCEAN_ACTIVITY_DRAW} message C_OCEAN_ACTIVITY_DRAW message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_OCEAN_ACTIVITY_DRAW.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_OCEAN_ACTIVITY_DRAW message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_OCEAN_ACTIVITY_DRAW
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_OCEAN_ACTIVITY_DRAW} C_OCEAN_ACTIVITY_DRAW
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_OCEAN_ACTIVITY_DRAW.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_OCEAN_ACTIVITY_DRAW();
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

            return C_OCEAN_ACTIVITY_DRAW;
        })();

        message.S_OCEAN_ACTIVITY_DRAW = (function() {

            /**
             * Properties of a S_OCEAN_ACTIVITY_DRAW.
             * @memberof com.message
             * @interface IS_OCEAN_ACTIVITY_DRAW
             * @property {number|Long|null} [rewardId] S_OCEAN_ACTIVITY_DRAW rewardId
             * @property {string|null} [reward] S_OCEAN_ACTIVITY_DRAW reward
             * @property {com.message.IMyOceanActivityMsg|null} [myOceanActivityMsg] S_OCEAN_ACTIVITY_DRAW myOceanActivityMsg
             */

            /**
             * Constructs a new S_OCEAN_ACTIVITY_DRAW.
             * @memberof com.message
             * @classdesc Represents a S_OCEAN_ACTIVITY_DRAW.
             * @implements IS_OCEAN_ACTIVITY_DRAW
             * @constructor
             * @param {com.message.IS_OCEAN_ACTIVITY_DRAW=} [properties] Properties to set
             */
            function S_OCEAN_ACTIVITY_DRAW(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_OCEAN_ACTIVITY_DRAW rewardId.
             * @member {number|Long} rewardId
             * @memberof com.message.S_OCEAN_ACTIVITY_DRAW
             * @instance
             */
            S_OCEAN_ACTIVITY_DRAW.prototype.rewardId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_OCEAN_ACTIVITY_DRAW reward.
             * @member {string} reward
             * @memberof com.message.S_OCEAN_ACTIVITY_DRAW
             * @instance
             */
            S_OCEAN_ACTIVITY_DRAW.prototype.reward = "";

            /**
             * S_OCEAN_ACTIVITY_DRAW myOceanActivityMsg.
             * @member {com.message.IMyOceanActivityMsg|null|undefined} myOceanActivityMsg
             * @memberof com.message.S_OCEAN_ACTIVITY_DRAW
             * @instance
             */
            S_OCEAN_ACTIVITY_DRAW.prototype.myOceanActivityMsg = null;

            /**
             * Encodes the specified S_OCEAN_ACTIVITY_DRAW message. Does not implicitly {@link com.message.S_OCEAN_ACTIVITY_DRAW.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_OCEAN_ACTIVITY_DRAW
             * @static
             * @param {com.message.IS_OCEAN_ACTIVITY_DRAW} message S_OCEAN_ACTIVITY_DRAW message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_OCEAN_ACTIVITY_DRAW.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.rewardId);
                if (message.reward != null && message.hasOwnProperty("reward"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.reward);
                if (message.myOceanActivityMsg != null && message.hasOwnProperty("myOceanActivityMsg"))
                    $root.com.message.MyOceanActivityMsg.encode(message.myOceanActivityMsg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_OCEAN_ACTIVITY_DRAW message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_OCEAN_ACTIVITY_DRAW
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_OCEAN_ACTIVITY_DRAW} S_OCEAN_ACTIVITY_DRAW
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_OCEAN_ACTIVITY_DRAW.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_OCEAN_ACTIVITY_DRAW();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rewardId = reader.int64();
                        break;
                    case 2:
                        message.reward = reader.string();
                        break;
                    case 3:
                        message.myOceanActivityMsg = $root.com.message.MyOceanActivityMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_OCEAN_ACTIVITY_DRAW;
        })();

        message.OceanActivityRankMsg = (function() {

            /**
             * Properties of an OceanActivityRankMsg.
             * @memberof com.message
             * @interface IOceanActivityRankMsg
             * @property {number|Long|null} [playerId] OceanActivityRankMsg playerId
             * @property {string|null} [mobile] OceanActivityRankMsg mobile
             * @property {number|null} [directCount] OceanActivityRankMsg directCount
             * @property {number|null} [teamCount] OceanActivityRankMsg teamCount
             * @property {number|null} [leftCount] OceanActivityRankMsg leftCount
             * @property {number|Long|null} [endTime] OceanActivityRankMsg endTime
             */

            /**
             * Constructs a new OceanActivityRankMsg.
             * @memberof com.message
             * @classdesc Represents an OceanActivityRankMsg.
             * @implements IOceanActivityRankMsg
             * @constructor
             * @param {com.message.IOceanActivityRankMsg=} [properties] Properties to set
             */
            function OceanActivityRankMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OceanActivityRankMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.OceanActivityRankMsg
             * @instance
             */
            OceanActivityRankMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OceanActivityRankMsg mobile.
             * @member {string} mobile
             * @memberof com.message.OceanActivityRankMsg
             * @instance
             */
            OceanActivityRankMsg.prototype.mobile = "";

            /**
             * OceanActivityRankMsg directCount.
             * @member {number} directCount
             * @memberof com.message.OceanActivityRankMsg
             * @instance
             */
            OceanActivityRankMsg.prototype.directCount = 0;

            /**
             * OceanActivityRankMsg teamCount.
             * @member {number} teamCount
             * @memberof com.message.OceanActivityRankMsg
             * @instance
             */
            OceanActivityRankMsg.prototype.teamCount = 0;

            /**
             * OceanActivityRankMsg leftCount.
             * @member {number} leftCount
             * @memberof com.message.OceanActivityRankMsg
             * @instance
             */
            OceanActivityRankMsg.prototype.leftCount = 0;

            /**
             * OceanActivityRankMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.OceanActivityRankMsg
             * @instance
             */
            OceanActivityRankMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified OceanActivityRankMsg message. Does not implicitly {@link com.message.OceanActivityRankMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.OceanActivityRankMsg
             * @static
             * @param {com.message.IOceanActivityRankMsg} message OceanActivityRankMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OceanActivityRankMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.mobile);
                if (message.directCount != null && message.hasOwnProperty("directCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.directCount);
                if (message.teamCount != null && message.hasOwnProperty("teamCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.teamCount);
                if (message.leftCount != null && message.hasOwnProperty("leftCount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.leftCount);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.endTime);
                return writer;
            };

            /**
             * Decodes an OceanActivityRankMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.OceanActivityRankMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.OceanActivityRankMsg} OceanActivityRankMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OceanActivityRankMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.OceanActivityRankMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.mobile = reader.string();
                        break;
                    case 3:
                        message.directCount = reader.int32();
                        break;
                    case 4:
                        message.teamCount = reader.int32();
                        break;
                    case 5:
                        message.leftCount = reader.int32();
                        break;
                    case 6:
                        message.endTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OceanActivityRankMsg;
        })();

        message.C_GET_OCEAN_ACTIVITY_RANK = (function() {

            /**
             * Properties of a C_GET_OCEAN_ACTIVITY_RANK.
             * @memberof com.message
             * @interface IC_GET_OCEAN_ACTIVITY_RANK
             * @property {number|null} [type] C_GET_OCEAN_ACTIVITY_RANK type
             * @property {number|null} [page] C_GET_OCEAN_ACTIVITY_RANK page
             * @property {number|null} [pageSize] C_GET_OCEAN_ACTIVITY_RANK pageSize
             */

            /**
             * Constructs a new C_GET_OCEAN_ACTIVITY_RANK.
             * @memberof com.message
             * @classdesc Represents a C_GET_OCEAN_ACTIVITY_RANK.
             * @implements IC_GET_OCEAN_ACTIVITY_RANK
             * @constructor
             * @param {com.message.IC_GET_OCEAN_ACTIVITY_RANK=} [properties] Properties to set
             */
            function C_GET_OCEAN_ACTIVITY_RANK(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_GET_OCEAN_ACTIVITY_RANK type.
             * @member {number} type
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_RANK
             * @instance
             */
            C_GET_OCEAN_ACTIVITY_RANK.prototype.type = 0;

            /**
             * C_GET_OCEAN_ACTIVITY_RANK page.
             * @member {number} page
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_RANK
             * @instance
             */
            C_GET_OCEAN_ACTIVITY_RANK.prototype.page = 0;

            /**
             * C_GET_OCEAN_ACTIVITY_RANK pageSize.
             * @member {number} pageSize
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_RANK
             * @instance
             */
            C_GET_OCEAN_ACTIVITY_RANK.prototype.pageSize = 0;

            /**
             * Encodes the specified C_GET_OCEAN_ACTIVITY_RANK message. Does not implicitly {@link com.message.C_GET_OCEAN_ACTIVITY_RANK.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_RANK
             * @static
             * @param {com.message.IC_GET_OCEAN_ACTIVITY_RANK} message C_GET_OCEAN_ACTIVITY_RANK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_OCEAN_ACTIVITY_RANK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.page != null && message.hasOwnProperty("page"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.page);
                if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
                return writer;
            };

            /**
             * Decodes a C_GET_OCEAN_ACTIVITY_RANK message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_RANK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_OCEAN_ACTIVITY_RANK} C_GET_OCEAN_ACTIVITY_RANK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_OCEAN_ACTIVITY_RANK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_OCEAN_ACTIVITY_RANK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.page = reader.int32();
                        break;
                    case 3:
                        message.pageSize = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_GET_OCEAN_ACTIVITY_RANK;
        })();

        message.S_GET_OCEAN_ACTIVITY_RANK = (function() {

            /**
             * Properties of a S_GET_OCEAN_ACTIVITY_RANK.
             * @memberof com.message
             * @interface IS_GET_OCEAN_ACTIVITY_RANK
             * @property {Array.<com.message.IOceanActivityRankMsg>|null} [oceanActivityRankMsg] S_GET_OCEAN_ACTIVITY_RANK oceanActivityRankMsg
             */

            /**
             * Constructs a new S_GET_OCEAN_ACTIVITY_RANK.
             * @memberof com.message
             * @classdesc Represents a S_GET_OCEAN_ACTIVITY_RANK.
             * @implements IS_GET_OCEAN_ACTIVITY_RANK
             * @constructor
             * @param {com.message.IS_GET_OCEAN_ACTIVITY_RANK=} [properties] Properties to set
             */
            function S_GET_OCEAN_ACTIVITY_RANK(properties) {
                this.oceanActivityRankMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_OCEAN_ACTIVITY_RANK oceanActivityRankMsg.
             * @member {Array.<com.message.IOceanActivityRankMsg>} oceanActivityRankMsg
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_RANK
             * @instance
             */
            S_GET_OCEAN_ACTIVITY_RANK.prototype.oceanActivityRankMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_OCEAN_ACTIVITY_RANK message. Does not implicitly {@link com.message.S_GET_OCEAN_ACTIVITY_RANK.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_RANK
             * @static
             * @param {com.message.IS_GET_OCEAN_ACTIVITY_RANK} message S_GET_OCEAN_ACTIVITY_RANK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_OCEAN_ACTIVITY_RANK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.oceanActivityRankMsg != null && message.oceanActivityRankMsg.length)
                    for (var i = 0; i < message.oceanActivityRankMsg.length; ++i)
                        $root.com.message.OceanActivityRankMsg.encode(message.oceanActivityRankMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_OCEAN_ACTIVITY_RANK message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_RANK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_OCEAN_ACTIVITY_RANK} S_GET_OCEAN_ACTIVITY_RANK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_OCEAN_ACTIVITY_RANK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_OCEAN_ACTIVITY_RANK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.oceanActivityRankMsg && message.oceanActivityRankMsg.length))
                            message.oceanActivityRankMsg = [];
                        message.oceanActivityRankMsg.push($root.com.message.OceanActivityRankMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_OCEAN_ACTIVITY_RANK;
        })();

        message.OceanActivityDrawLogMsg = (function() {

            /**
             * Properties of an OceanActivityDrawLogMsg.
             * @memberof com.message
             * @interface IOceanActivityDrawLogMsg
             * @property {number|Long|null} [playerId] OceanActivityDrawLogMsg playerId
             * @property {string|null} [mobile] OceanActivityDrawLogMsg mobile
             * @property {number|Long|null} [rewardId] OceanActivityDrawLogMsg rewardId
             * @property {string|null} [reward] OceanActivityDrawLogMsg reward
             * @property {number|Long|null} [logTime] OceanActivityDrawLogMsg logTime
             */

            /**
             * Constructs a new OceanActivityDrawLogMsg.
             * @memberof com.message
             * @classdesc Represents an OceanActivityDrawLogMsg.
             * @implements IOceanActivityDrawLogMsg
             * @constructor
             * @param {com.message.IOceanActivityDrawLogMsg=} [properties] Properties to set
             */
            function OceanActivityDrawLogMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OceanActivityDrawLogMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.OceanActivityDrawLogMsg
             * @instance
             */
            OceanActivityDrawLogMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OceanActivityDrawLogMsg mobile.
             * @member {string} mobile
             * @memberof com.message.OceanActivityDrawLogMsg
             * @instance
             */
            OceanActivityDrawLogMsg.prototype.mobile = "";

            /**
             * OceanActivityDrawLogMsg rewardId.
             * @member {number|Long} rewardId
             * @memberof com.message.OceanActivityDrawLogMsg
             * @instance
             */
            OceanActivityDrawLogMsg.prototype.rewardId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OceanActivityDrawLogMsg reward.
             * @member {string} reward
             * @memberof com.message.OceanActivityDrawLogMsg
             * @instance
             */
            OceanActivityDrawLogMsg.prototype.reward = "";

            /**
             * OceanActivityDrawLogMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.OceanActivityDrawLogMsg
             * @instance
             */
            OceanActivityDrawLogMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified OceanActivityDrawLogMsg message. Does not implicitly {@link com.message.OceanActivityDrawLogMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.OceanActivityDrawLogMsg
             * @static
             * @param {com.message.IOceanActivityDrawLogMsg} message OceanActivityDrawLogMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OceanActivityDrawLogMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.mobile);
                if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.rewardId);
                if (message.reward != null && message.hasOwnProperty("reward"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.reward);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.logTime);
                return writer;
            };

            /**
             * Decodes an OceanActivityDrawLogMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.OceanActivityDrawLogMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.OceanActivityDrawLogMsg} OceanActivityDrawLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OceanActivityDrawLogMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.OceanActivityDrawLogMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.mobile = reader.string();
                        break;
                    case 3:
                        message.rewardId = reader.int64();
                        break;
                    case 4:
                        message.reward = reader.string();
                        break;
                    case 5:
                        message.logTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OceanActivityDrawLogMsg;
        })();

        message.C_GET_OCEAN_ACTIVITY_DRAW_LOG = (function() {

            /**
             * Properties of a C_GET_OCEAN_ACTIVITY_DRAW_LOG.
             * @memberof com.message
             * @interface IC_GET_OCEAN_ACTIVITY_DRAW_LOG
             */

            /**
             * Constructs a new C_GET_OCEAN_ACTIVITY_DRAW_LOG.
             * @memberof com.message
             * @classdesc Represents a C_GET_OCEAN_ACTIVITY_DRAW_LOG.
             * @implements IC_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @constructor
             * @param {com.message.IC_GET_OCEAN_ACTIVITY_DRAW_LOG=} [properties] Properties to set
             */
            function C_GET_OCEAN_ACTIVITY_DRAW_LOG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_OCEAN_ACTIVITY_DRAW_LOG message. Does not implicitly {@link com.message.C_GET_OCEAN_ACTIVITY_DRAW_LOG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @static
             * @param {com.message.IC_GET_OCEAN_ACTIVITY_DRAW_LOG} message C_GET_OCEAN_ACTIVITY_DRAW_LOG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_OCEAN_ACTIVITY_DRAW_LOG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_OCEAN_ACTIVITY_DRAW_LOG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_OCEAN_ACTIVITY_DRAW_LOG} C_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_OCEAN_ACTIVITY_DRAW_LOG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_OCEAN_ACTIVITY_DRAW_LOG();
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

            return C_GET_OCEAN_ACTIVITY_DRAW_LOG;
        })();

        message.S_GET_OCEAN_ACTIVITY_DRAW_LOG = (function() {

            /**
             * Properties of a S_GET_OCEAN_ACTIVITY_DRAW_LOG.
             * @memberof com.message
             * @interface IS_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @property {Array.<com.message.IOceanActivityDrawLogMsg>|null} [oceanActivityDrawLogMsg] S_GET_OCEAN_ACTIVITY_DRAW_LOG oceanActivityDrawLogMsg
             */

            /**
             * Constructs a new S_GET_OCEAN_ACTIVITY_DRAW_LOG.
             * @memberof com.message
             * @classdesc Represents a S_GET_OCEAN_ACTIVITY_DRAW_LOG.
             * @implements IS_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @constructor
             * @param {com.message.IS_GET_OCEAN_ACTIVITY_DRAW_LOG=} [properties] Properties to set
             */
            function S_GET_OCEAN_ACTIVITY_DRAW_LOG(properties) {
                this.oceanActivityDrawLogMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_OCEAN_ACTIVITY_DRAW_LOG oceanActivityDrawLogMsg.
             * @member {Array.<com.message.IOceanActivityDrawLogMsg>} oceanActivityDrawLogMsg
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @instance
             */
            S_GET_OCEAN_ACTIVITY_DRAW_LOG.prototype.oceanActivityDrawLogMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_OCEAN_ACTIVITY_DRAW_LOG message. Does not implicitly {@link com.message.S_GET_OCEAN_ACTIVITY_DRAW_LOG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @static
             * @param {com.message.IS_GET_OCEAN_ACTIVITY_DRAW_LOG} message S_GET_OCEAN_ACTIVITY_DRAW_LOG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_OCEAN_ACTIVITY_DRAW_LOG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.oceanActivityDrawLogMsg != null && message.oceanActivityDrawLogMsg.length)
                    for (var i = 0; i < message.oceanActivityDrawLogMsg.length; ++i)
                        $root.com.message.OceanActivityDrawLogMsg.encode(message.oceanActivityDrawLogMsg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_OCEAN_ACTIVITY_DRAW_LOG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_OCEAN_ACTIVITY_DRAW_LOG} S_GET_OCEAN_ACTIVITY_DRAW_LOG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_OCEAN_ACTIVITY_DRAW_LOG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_OCEAN_ACTIVITY_DRAW_LOG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.oceanActivityDrawLogMsg && message.oceanActivityDrawLogMsg.length))
                            message.oceanActivityDrawLogMsg = [];
                        message.oceanActivityDrawLogMsg.push($root.com.message.OceanActivityDrawLogMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_OCEAN_ACTIVITY_DRAW_LOG;
        })();

        message.FishMsg = (function() {

            /**
             * Properties of a FishMsg.
             * @memberof com.message
             * @interface IFishMsg
             * @property {number|Long|null} [id] FishMsg id
             * @property {number|null} [level] FishMsg level
             * @property {number|Long|null} [fishId] FishMsg fishId
             * @property {number|null} [state] FishMsg state
             * @property {number|null} [allMoney] FishMsg allMoney
             * @property {number|null} [extMoney] FishMsg extMoney
             * @property {number|null} [leftMoney] FishMsg leftMoney
             * @property {number|null} [todayGotMoney] FishMsg todayGotMoney
             * @property {number|null} [todayCurMoney] FishMsg todayCurMoney
             * @property {number|null} [allDay] FishMsg allDay
             */

            /**
             * Constructs a new FishMsg.
             * @memberof com.message
             * @classdesc Represents a FishMsg.
             * @implements IFishMsg
             * @constructor
             * @param {com.message.IFishMsg=} [properties] Properties to set
             */
            function FishMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FishMsg id.
             * @member {number|Long} id
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishMsg level.
             * @member {number} level
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.level = 0;

            /**
             * FishMsg fishId.
             * @member {number|Long} fishId
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.fishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishMsg state.
             * @member {number} state
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.state = 0;

            /**
             * FishMsg allMoney.
             * @member {number} allMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.allMoney = 0;

            /**
             * FishMsg extMoney.
             * @member {number} extMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.extMoney = 0;

            /**
             * FishMsg leftMoney.
             * @member {number} leftMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.leftMoney = 0;

            /**
             * FishMsg todayGotMoney.
             * @member {number} todayGotMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.todayGotMoney = 0;

            /**
             * FishMsg todayCurMoney.
             * @member {number} todayCurMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.todayCurMoney = 0;

            /**
             * FishMsg allDay.
             * @member {number} allDay
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.allDay = 0;

            /**
             * Encodes the specified FishMsg message. Does not implicitly {@link com.message.FishMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.FishMsg
             * @static
             * @param {com.message.IFishMsg} message FishMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
                if (message.fishId != null && message.hasOwnProperty("fishId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.fishId);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
                if (message.allMoney != null && message.hasOwnProperty("allMoney"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.allMoney);
                if (message.extMoney != null && message.hasOwnProperty("extMoney"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.extMoney);
                if (message.leftMoney != null && message.hasOwnProperty("leftMoney"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.leftMoney);
                if (message.todayGotMoney != null && message.hasOwnProperty("todayGotMoney"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.todayGotMoney);
                if (message.todayCurMoney != null && message.hasOwnProperty("todayCurMoney"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.todayCurMoney);
                if (message.allDay != null && message.hasOwnProperty("allDay"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.allDay);
                return writer;
            };

            /**
             * Decodes a FishMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.FishMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.FishMsg} FishMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.FishMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.level = reader.int32();
                        break;
                    case 3:
                        message.fishId = reader.int64();
                        break;
                    case 4:
                        message.state = reader.int32();
                        break;
                    case 5:
                        message.allMoney = reader.double();
                        break;
                    case 6:
                        message.extMoney = reader.double();
                        break;
                    case 7:
                        message.leftMoney = reader.double();
                        break;
                    case 8:
                        message.todayGotMoney = reader.double();
                        break;
                    case 9:
                        message.todayCurMoney = reader.double();
                        break;
                    case 10:
                        message.allDay = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FishMsg;
        })();

        message.C_GET_FISH_INFO = (function() {

            /**
             * Properties of a C_GET_FISH_INFO.
             * @memberof com.message
             * @interface IC_GET_FISH_INFO
             */

            /**
             * Constructs a new C_GET_FISH_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_FISH_INFO.
             * @implements IC_GET_FISH_INFO
             * @constructor
             * @param {com.message.IC_GET_FISH_INFO=} [properties] Properties to set
             */
            function C_GET_FISH_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_FISH_INFO message. Does not implicitly {@link com.message.C_GET_FISH_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_FISH_INFO
             * @static
             * @param {com.message.IC_GET_FISH_INFO} message C_GET_FISH_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_FISH_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_FISH_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_FISH_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_FISH_INFO} C_GET_FISH_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_FISH_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_FISH_INFO();
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

            return C_GET_FISH_INFO;
        })();

        message.S_GET_FISH_INFO = (function() {

            /**
             * Properties of a S_GET_FISH_INFO.
             * @memberof com.message
             * @interface IS_GET_FISH_INFO
             * @property {Array.<com.message.IFishMsg>|null} [fishMsg] S_GET_FISH_INFO fishMsg
             */

            /**
             * Constructs a new S_GET_FISH_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_FISH_INFO.
             * @implements IS_GET_FISH_INFO
             * @constructor
             * @param {com.message.IS_GET_FISH_INFO=} [properties] Properties to set
             */
            function S_GET_FISH_INFO(properties) {
                this.fishMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_FISH_INFO fishMsg.
             * @member {Array.<com.message.IFishMsg>} fishMsg
             * @memberof com.message.S_GET_FISH_INFO
             * @instance
             */
            S_GET_FISH_INFO.prototype.fishMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_FISH_INFO message. Does not implicitly {@link com.message.S_GET_FISH_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_FISH_INFO
             * @static
             * @param {com.message.IS_GET_FISH_INFO} message S_GET_FISH_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_FISH_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fishMsg != null && message.fishMsg.length)
                    for (var i = 0; i < message.fishMsg.length; ++i)
                        $root.com.message.FishMsg.encode(message.fishMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_FISH_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_FISH_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_FISH_INFO} S_GET_FISH_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_FISH_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_FISH_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.fishMsg && message.fishMsg.length))
                            message.fishMsg = [];
                        message.fishMsg.push($root.com.message.FishMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_FISH_INFO;
        })();

        message.C_BUY_FISH = (function() {

            /**
             * Properties of a C_BUY_FISH.
             * @memberof com.message
             * @interface IC_BUY_FISH
             * @property {number|null} [fishConfigId] C_BUY_FISH fishConfigId
             */

            /**
             * Constructs a new C_BUY_FISH.
             * @memberof com.message
             * @classdesc Represents a C_BUY_FISH.
             * @implements IC_BUY_FISH
             * @constructor
             * @param {com.message.IC_BUY_FISH=} [properties] Properties to set
             */
            function C_BUY_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_BUY_FISH fishConfigId.
             * @member {number} fishConfigId
             * @memberof com.message.C_BUY_FISH
             * @instance
             */
            C_BUY_FISH.prototype.fishConfigId = 0;

            /**
             * Encodes the specified C_BUY_FISH message. Does not implicitly {@link com.message.C_BUY_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_BUY_FISH
             * @static
             * @param {com.message.IC_BUY_FISH} message C_BUY_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_BUY_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fishConfigId != null && message.hasOwnProperty("fishConfigId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fishConfigId);
                return writer;
            };

            /**
             * Decodes a C_BUY_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_BUY_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_BUY_FISH} C_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_BUY_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_BUY_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fishConfigId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_BUY_FISH;
        })();

        message.S_BUY_FISH = (function() {

            /**
             * Properties of a S_BUY_FISH.
             * @memberof com.message
             * @interface IS_BUY_FISH
             * @property {com.message.IFishMsg|null} [fishMsg] S_BUY_FISH fishMsg
             */

            /**
             * Constructs a new S_BUY_FISH.
             * @memberof com.message
             * @classdesc Represents a S_BUY_FISH.
             * @implements IS_BUY_FISH
             * @constructor
             * @param {com.message.IS_BUY_FISH=} [properties] Properties to set
             */
            function S_BUY_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_BUY_FISH fishMsg.
             * @member {com.message.IFishMsg|null|undefined} fishMsg
             * @memberof com.message.S_BUY_FISH
             * @instance
             */
            S_BUY_FISH.prototype.fishMsg = null;

            /**
             * Encodes the specified S_BUY_FISH message. Does not implicitly {@link com.message.S_BUY_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_BUY_FISH
             * @static
             * @param {com.message.IS_BUY_FISH} message S_BUY_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_BUY_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fishMsg != null && message.hasOwnProperty("fishMsg"))
                    $root.com.message.FishMsg.encode(message.fishMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_BUY_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_BUY_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_BUY_FISH} S_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_BUY_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_BUY_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fishMsg = $root.com.message.FishMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_BUY_FISH;
        })();

        message.C_DIAMOND_BUY_FISH = (function() {

            /**
             * Properties of a C_DIAMOND_BUY_FISH.
             * @memberof com.message
             * @interface IC_DIAMOND_BUY_FISH
             * @property {number|null} [fishConfigId] C_DIAMOND_BUY_FISH fishConfigId
             */

            /**
             * Constructs a new C_DIAMOND_BUY_FISH.
             * @memberof com.message
             * @classdesc Represents a C_DIAMOND_BUY_FISH.
             * @implements IC_DIAMOND_BUY_FISH
             * @constructor
             * @param {com.message.IC_DIAMOND_BUY_FISH=} [properties] Properties to set
             */
            function C_DIAMOND_BUY_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_DIAMOND_BUY_FISH fishConfigId.
             * @member {number} fishConfigId
             * @memberof com.message.C_DIAMOND_BUY_FISH
             * @instance
             */
            C_DIAMOND_BUY_FISH.prototype.fishConfigId = 0;

            /**
             * Encodes the specified C_DIAMOND_BUY_FISH message. Does not implicitly {@link com.message.C_DIAMOND_BUY_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_DIAMOND_BUY_FISH
             * @static
             * @param {com.message.IC_DIAMOND_BUY_FISH} message C_DIAMOND_BUY_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_DIAMOND_BUY_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fishConfigId != null && message.hasOwnProperty("fishConfigId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fishConfigId);
                return writer;
            };

            /**
             * Decodes a C_DIAMOND_BUY_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_DIAMOND_BUY_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_DIAMOND_BUY_FISH} C_DIAMOND_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_DIAMOND_BUY_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_DIAMOND_BUY_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fishConfigId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_DIAMOND_BUY_FISH;
        })();

        message.S_DIAMOND_BUY_FISH = (function() {

            /**
             * Properties of a S_DIAMOND_BUY_FISH.
             * @memberof com.message
             * @interface IS_DIAMOND_BUY_FISH
             * @property {com.message.IFishMsg|null} [fishMsg] S_DIAMOND_BUY_FISH fishMsg
             * @property {string|null} [buyFishStr] S_DIAMOND_BUY_FISH buyFishStr
             */

            /**
             * Constructs a new S_DIAMOND_BUY_FISH.
             * @memberof com.message
             * @classdesc Represents a S_DIAMOND_BUY_FISH.
             * @implements IS_DIAMOND_BUY_FISH
             * @constructor
             * @param {com.message.IS_DIAMOND_BUY_FISH=} [properties] Properties to set
             */
            function S_DIAMOND_BUY_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_DIAMOND_BUY_FISH fishMsg.
             * @member {com.message.IFishMsg|null|undefined} fishMsg
             * @memberof com.message.S_DIAMOND_BUY_FISH
             * @instance
             */
            S_DIAMOND_BUY_FISH.prototype.fishMsg = null;

            /**
             * S_DIAMOND_BUY_FISH buyFishStr.
             * @member {string} buyFishStr
             * @memberof com.message.S_DIAMOND_BUY_FISH
             * @instance
             */
            S_DIAMOND_BUY_FISH.prototype.buyFishStr = "";

            /**
             * Encodes the specified S_DIAMOND_BUY_FISH message. Does not implicitly {@link com.message.S_DIAMOND_BUY_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_DIAMOND_BUY_FISH
             * @static
             * @param {com.message.IS_DIAMOND_BUY_FISH} message S_DIAMOND_BUY_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_DIAMOND_BUY_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fishMsg != null && message.hasOwnProperty("fishMsg"))
                    $root.com.message.FishMsg.encode(message.fishMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.buyFishStr != null && message.hasOwnProperty("buyFishStr"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.buyFishStr);
                return writer;
            };

            /**
             * Decodes a S_DIAMOND_BUY_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_DIAMOND_BUY_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_DIAMOND_BUY_FISH} S_DIAMOND_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_DIAMOND_BUY_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_DIAMOND_BUY_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fishMsg = $root.com.message.FishMsg.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.buyFishStr = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_DIAMOND_BUY_FISH;
        })();

        message.C_COMBINE_FISH = (function() {

            /**
             * Properties of a C_COMBINE_FISH.
             * @memberof com.message
             * @interface IC_COMBINE_FISH
             * @property {number|Long|null} [fish1Id] C_COMBINE_FISH fish1Id
             * @property {number|Long|null} [fish2Id] C_COMBINE_FISH fish2Id
             */

            /**
             * Constructs a new C_COMBINE_FISH.
             * @memberof com.message
             * @classdesc Represents a C_COMBINE_FISH.
             * @implements IC_COMBINE_FISH
             * @constructor
             * @param {com.message.IC_COMBINE_FISH=} [properties] Properties to set
             */
            function C_COMBINE_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_COMBINE_FISH fish1Id.
             * @member {number|Long} fish1Id
             * @memberof com.message.C_COMBINE_FISH
             * @instance
             */
            C_COMBINE_FISH.prototype.fish1Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * C_COMBINE_FISH fish2Id.
             * @member {number|Long} fish2Id
             * @memberof com.message.C_COMBINE_FISH
             * @instance
             */
            C_COMBINE_FISH.prototype.fish2Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_COMBINE_FISH message. Does not implicitly {@link com.message.C_COMBINE_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_COMBINE_FISH
             * @static
             * @param {com.message.IC_COMBINE_FISH} message C_COMBINE_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_COMBINE_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fish1Id != null && message.hasOwnProperty("fish1Id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.fish1Id);
                if (message.fish2Id != null && message.hasOwnProperty("fish2Id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.fish2Id);
                return writer;
            };

            /**
             * Decodes a C_COMBINE_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_COMBINE_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_COMBINE_FISH} C_COMBINE_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_COMBINE_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_COMBINE_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fish1Id = reader.int64();
                        break;
                    case 2:
                        message.fish2Id = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_COMBINE_FISH;
        })();

        message.S_COMBINE_FISH = (function() {

            /**
             * Properties of a S_COMBINE_FISH.
             * @memberof com.message
             * @interface IS_COMBINE_FISH
             * @property {number|Long|null} [fish1Id] S_COMBINE_FISH fish1Id
             * @property {number|Long|null} [fish2Id] S_COMBINE_FISH fish2Id
             * @property {com.message.IFishMsg|null} [fishMsg] S_COMBINE_FISH fishMsg
             */

            /**
             * Constructs a new S_COMBINE_FISH.
             * @memberof com.message
             * @classdesc Represents a S_COMBINE_FISH.
             * @implements IS_COMBINE_FISH
             * @constructor
             * @param {com.message.IS_COMBINE_FISH=} [properties] Properties to set
             */
            function S_COMBINE_FISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_COMBINE_FISH fish1Id.
             * @member {number|Long} fish1Id
             * @memberof com.message.S_COMBINE_FISH
             * @instance
             */
            S_COMBINE_FISH.prototype.fish1Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_COMBINE_FISH fish2Id.
             * @member {number|Long} fish2Id
             * @memberof com.message.S_COMBINE_FISH
             * @instance
             */
            S_COMBINE_FISH.prototype.fish2Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_COMBINE_FISH fishMsg.
             * @member {com.message.IFishMsg|null|undefined} fishMsg
             * @memberof com.message.S_COMBINE_FISH
             * @instance
             */
            S_COMBINE_FISH.prototype.fishMsg = null;

            /**
             * Encodes the specified S_COMBINE_FISH message. Does not implicitly {@link com.message.S_COMBINE_FISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_COMBINE_FISH
             * @static
             * @param {com.message.IS_COMBINE_FISH} message S_COMBINE_FISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_COMBINE_FISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fish1Id != null && message.hasOwnProperty("fish1Id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.fish1Id);
                if (message.fish2Id != null && message.hasOwnProperty("fish2Id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.fish2Id);
                if (message.fishMsg != null && message.hasOwnProperty("fishMsg"))
                    $root.com.message.FishMsg.encode(message.fishMsg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_COMBINE_FISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_COMBINE_FISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_COMBINE_FISH} S_COMBINE_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_COMBINE_FISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_COMBINE_FISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fish1Id = reader.int64();
                        break;
                    case 2:
                        message.fish2Id = reader.int64();
                        break;
                    case 3:
                        message.fishMsg = $root.com.message.FishMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_COMBINE_FISH;
        })();

        message.C_GET_MONEY_REWARD = (function() {

            /**
             * Properties of a C_GET_MONEY_REWARD.
             * @memberof com.message
             * @interface IC_GET_MONEY_REWARD
             */

            /**
             * Constructs a new C_GET_MONEY_REWARD.
             * @memberof com.message
             * @classdesc Represents a C_GET_MONEY_REWARD.
             * @implements IC_GET_MONEY_REWARD
             * @constructor
             * @param {com.message.IC_GET_MONEY_REWARD=} [properties] Properties to set
             */
            function C_GET_MONEY_REWARD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MONEY_REWARD message. Does not implicitly {@link com.message.C_GET_MONEY_REWARD.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MONEY_REWARD
             * @static
             * @param {com.message.IC_GET_MONEY_REWARD} message C_GET_MONEY_REWARD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MONEY_REWARD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MONEY_REWARD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MONEY_REWARD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MONEY_REWARD} C_GET_MONEY_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MONEY_REWARD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MONEY_REWARD();
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

            return C_GET_MONEY_REWARD;
        })();

        message.S_GET_MONEY_REWARD = (function() {

            /**
             * Properties of a S_GET_MONEY_REWARD.
             * @memberof com.message
             * @interface IS_GET_MONEY_REWARD
             * @property {number|null} [money] S_GET_MONEY_REWARD money
             */

            /**
             * Constructs a new S_GET_MONEY_REWARD.
             * @memberof com.message
             * @classdesc Represents a S_GET_MONEY_REWARD.
             * @implements IS_GET_MONEY_REWARD
             * @constructor
             * @param {com.message.IS_GET_MONEY_REWARD=} [properties] Properties to set
             */
            function S_GET_MONEY_REWARD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MONEY_REWARD money.
             * @member {number} money
             * @memberof com.message.S_GET_MONEY_REWARD
             * @instance
             */
            S_GET_MONEY_REWARD.prototype.money = 0;

            /**
             * Encodes the specified S_GET_MONEY_REWARD message. Does not implicitly {@link com.message.S_GET_MONEY_REWARD.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MONEY_REWARD
             * @static
             * @param {com.message.IS_GET_MONEY_REWARD} message S_GET_MONEY_REWARD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MONEY_REWARD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.money);
                return writer;
            };

            /**
             * Decodes a S_GET_MONEY_REWARD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MONEY_REWARD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MONEY_REWARD} S_GET_MONEY_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MONEY_REWARD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MONEY_REWARD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3:
                        message.money = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MONEY_REWARD;
        })();

        message.C_GET_MONEY_INFO = (function() {

            /**
             * Properties of a C_GET_MONEY_INFO.
             * @memberof com.message
             * @interface IC_GET_MONEY_INFO
             */

            /**
             * Constructs a new C_GET_MONEY_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_MONEY_INFO.
             * @implements IC_GET_MONEY_INFO
             * @constructor
             * @param {com.message.IC_GET_MONEY_INFO=} [properties] Properties to set
             */
            function C_GET_MONEY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MONEY_INFO message. Does not implicitly {@link com.message.C_GET_MONEY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MONEY_INFO
             * @static
             * @param {com.message.IC_GET_MONEY_INFO} message C_GET_MONEY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MONEY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MONEY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MONEY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MONEY_INFO} C_GET_MONEY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MONEY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MONEY_INFO();
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

            return C_GET_MONEY_INFO;
        })();

        message.S_GET_MONEY_INFO = (function() {

            /**
             * Properties of a S_GET_MONEY_INFO.
             * @memberof com.message
             * @interface IS_GET_MONEY_INFO
             * @property {number|null} [money] S_GET_MONEY_INFO money
             * @property {number|null} [diamond] S_GET_MONEY_INFO diamond
             */

            /**
             * Constructs a new S_GET_MONEY_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_MONEY_INFO.
             * @implements IS_GET_MONEY_INFO
             * @constructor
             * @param {com.message.IS_GET_MONEY_INFO=} [properties] Properties to set
             */
            function S_GET_MONEY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MONEY_INFO money.
             * @member {number} money
             * @memberof com.message.S_GET_MONEY_INFO
             * @instance
             */
            S_GET_MONEY_INFO.prototype.money = 0;

            /**
             * S_GET_MONEY_INFO diamond.
             * @member {number} diamond
             * @memberof com.message.S_GET_MONEY_INFO
             * @instance
             */
            S_GET_MONEY_INFO.prototype.diamond = 0;

            /**
             * Encodes the specified S_GET_MONEY_INFO message. Does not implicitly {@link com.message.S_GET_MONEY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MONEY_INFO
             * @static
             * @param {com.message.IS_GET_MONEY_INFO} message S_GET_MONEY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MONEY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.money);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.diamond);
                return writer;
            };

            /**
             * Decodes a S_GET_MONEY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MONEY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MONEY_INFO} S_GET_MONEY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MONEY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MONEY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3:
                        message.money = reader.double();
                        break;
                    case 4:
                        message.diamond = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MONEY_INFO;
        })();

        message.MoneyLogMsg = (function() {

            /**
             * Properties of a MoneyLogMsg.
             * @memberof com.message
             * @interface IMoneyLogMsg
             * @property {number|Long|null} [playerId] MoneyLogMsg playerId
             * @property {number|Long|null} [fishId] MoneyLogMsg fishId
             * @property {number|Long|null} [fishConfigId] MoneyLogMsg fishConfigId
             * @property {number|null} [type] MoneyLogMsg type
             * @property {number|null} [beforeMoney] MoneyLogMsg beforeMoney
             * @property {number|null} [changeMoney] MoneyLogMsg changeMoney
             * @property {number|null} [afterMoney] MoneyLogMsg afterMoney
             * @property {number|Long|null} [logTime] MoneyLogMsg logTime
             * @property {string|null} [info] MoneyLogMsg info
             */

            /**
             * Constructs a new MoneyLogMsg.
             * @memberof com.message
             * @classdesc Represents a MoneyLogMsg.
             * @implements IMoneyLogMsg
             * @constructor
             * @param {com.message.IMoneyLogMsg=} [properties] Properties to set
             */
            function MoneyLogMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MoneyLogMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MoneyLogMsg fishId.
             * @member {number|Long} fishId
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.fishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MoneyLogMsg fishConfigId.
             * @member {number|Long} fishConfigId
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.fishConfigId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MoneyLogMsg type.
             * @member {number} type
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.type = 0;

            /**
             * MoneyLogMsg beforeMoney.
             * @member {number} beforeMoney
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.beforeMoney = 0;

            /**
             * MoneyLogMsg changeMoney.
             * @member {number} changeMoney
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.changeMoney = 0;

            /**
             * MoneyLogMsg afterMoney.
             * @member {number} afterMoney
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.afterMoney = 0;

            /**
             * MoneyLogMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MoneyLogMsg info.
             * @member {string} info
             * @memberof com.message.MoneyLogMsg
             * @instance
             */
            MoneyLogMsg.prototype.info = "";

            /**
             * Encodes the specified MoneyLogMsg message. Does not implicitly {@link com.message.MoneyLogMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.MoneyLogMsg
             * @static
             * @param {com.message.IMoneyLogMsg} message MoneyLogMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoneyLogMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.fishId != null && message.hasOwnProperty("fishId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.fishId);
                if (message.fishConfigId != null && message.hasOwnProperty("fishConfigId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.fishConfigId);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                if (message.beforeMoney != null && message.hasOwnProperty("beforeMoney"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.beforeMoney);
                if (message.changeMoney != null && message.hasOwnProperty("changeMoney"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.changeMoney);
                if (message.afterMoney != null && message.hasOwnProperty("afterMoney"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.afterMoney);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.logTime);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.info);
                return writer;
            };

            /**
             * Decodes a MoneyLogMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.MoneyLogMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.MoneyLogMsg} MoneyLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoneyLogMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.MoneyLogMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.fishId = reader.int64();
                        break;
                    case 3:
                        message.fishConfigId = reader.int64();
                        break;
                    case 4:
                        message.type = reader.int32();
                        break;
                    case 5:
                        message.beforeMoney = reader.double();
                        break;
                    case 6:
                        message.changeMoney = reader.double();
                        break;
                    case 7:
                        message.afterMoney = reader.double();
                        break;
                    case 8:
                        message.logTime = reader.int64();
                        break;
                    case 9:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MoneyLogMsg;
        })();

        message.C_GET_MONEY_LOG_LIST = (function() {

            /**
             * Properties of a C_GET_MONEY_LOG_LIST.
             * @memberof com.message
             * @interface IC_GET_MONEY_LOG_LIST
             */

            /**
             * Constructs a new C_GET_MONEY_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_MONEY_LOG_LIST.
             * @implements IC_GET_MONEY_LOG_LIST
             * @constructor
             * @param {com.message.IC_GET_MONEY_LOG_LIST=} [properties] Properties to set
             */
            function C_GET_MONEY_LOG_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MONEY_LOG_LIST message. Does not implicitly {@link com.message.C_GET_MONEY_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MONEY_LOG_LIST
             * @static
             * @param {com.message.IC_GET_MONEY_LOG_LIST} message C_GET_MONEY_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MONEY_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MONEY_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MONEY_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MONEY_LOG_LIST} C_GET_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MONEY_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MONEY_LOG_LIST();
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

            return C_GET_MONEY_LOG_LIST;
        })();

        message.S_GET_MONEY_LOG_LIST = (function() {

            /**
             * Properties of a S_GET_MONEY_LOG_LIST.
             * @memberof com.message
             * @interface IS_GET_MONEY_LOG_LIST
             * @property {Array.<com.message.IMoneyLogMsg>|null} [moneyLogMsg] S_GET_MONEY_LOG_LIST moneyLogMsg
             */

            /**
             * Constructs a new S_GET_MONEY_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_MONEY_LOG_LIST.
             * @implements IS_GET_MONEY_LOG_LIST
             * @constructor
             * @param {com.message.IS_GET_MONEY_LOG_LIST=} [properties] Properties to set
             */
            function S_GET_MONEY_LOG_LIST(properties) {
                this.moneyLogMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MONEY_LOG_LIST moneyLogMsg.
             * @member {Array.<com.message.IMoneyLogMsg>} moneyLogMsg
             * @memberof com.message.S_GET_MONEY_LOG_LIST
             * @instance
             */
            S_GET_MONEY_LOG_LIST.prototype.moneyLogMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_MONEY_LOG_LIST message. Does not implicitly {@link com.message.S_GET_MONEY_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MONEY_LOG_LIST
             * @static
             * @param {com.message.IS_GET_MONEY_LOG_LIST} message S_GET_MONEY_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MONEY_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.moneyLogMsg != null && message.moneyLogMsg.length)
                    for (var i = 0; i < message.moneyLogMsg.length; ++i)
                        $root.com.message.MoneyLogMsg.encode(message.moneyLogMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_MONEY_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MONEY_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MONEY_LOG_LIST} S_GET_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MONEY_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MONEY_LOG_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.moneyLogMsg && message.moneyLogMsg.length))
                            message.moneyLogMsg = [];
                        message.moneyLogMsg.push($root.com.message.MoneyLogMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MONEY_LOG_LIST;
        })();

        message.C_GET_DIAMOND_LOG_LIST = (function() {

            /**
             * Properties of a C_GET_DIAMOND_LOG_LIST.
             * @memberof com.message
             * @interface IC_GET_DIAMOND_LOG_LIST
             */

            /**
             * Constructs a new C_GET_DIAMOND_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_DIAMOND_LOG_LIST.
             * @implements IC_GET_DIAMOND_LOG_LIST
             * @constructor
             * @param {com.message.IC_GET_DIAMOND_LOG_LIST=} [properties] Properties to set
             */
            function C_GET_DIAMOND_LOG_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DIAMOND_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DIAMOND_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DIAMOND_LOG_LIST
             * @static
             * @param {com.message.IC_GET_DIAMOND_LOG_LIST} message C_GET_DIAMOND_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DIAMOND_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DIAMOND_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DIAMOND_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DIAMOND_LOG_LIST} C_GET_DIAMOND_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DIAMOND_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DIAMOND_LOG_LIST();
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

            return C_GET_DIAMOND_LOG_LIST;
        })();

        message.S_GET_DIAMOND_LOG_LIST = (function() {

            /**
             * Properties of a S_GET_DIAMOND_LOG_LIST.
             * @memberof com.message
             * @interface IS_GET_DIAMOND_LOG_LIST
             * @property {Array.<com.message.IMoneyLogMsg>|null} [moneyLogMsg] S_GET_DIAMOND_LOG_LIST moneyLogMsg
             */

            /**
             * Constructs a new S_GET_DIAMOND_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_DIAMOND_LOG_LIST.
             * @implements IS_GET_DIAMOND_LOG_LIST
             * @constructor
             * @param {com.message.IS_GET_DIAMOND_LOG_LIST=} [properties] Properties to set
             */
            function S_GET_DIAMOND_LOG_LIST(properties) {
                this.moneyLogMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DIAMOND_LOG_LIST moneyLogMsg.
             * @member {Array.<com.message.IMoneyLogMsg>} moneyLogMsg
             * @memberof com.message.S_GET_DIAMOND_LOG_LIST
             * @instance
             */
            S_GET_DIAMOND_LOG_LIST.prototype.moneyLogMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DIAMOND_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DIAMOND_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DIAMOND_LOG_LIST
             * @static
             * @param {com.message.IS_GET_DIAMOND_LOG_LIST} message S_GET_DIAMOND_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DIAMOND_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.moneyLogMsg != null && message.moneyLogMsg.length)
                    for (var i = 0; i < message.moneyLogMsg.length; ++i)
                        $root.com.message.MoneyLogMsg.encode(message.moneyLogMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DIAMOND_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DIAMOND_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DIAMOND_LOG_LIST} S_GET_DIAMOND_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DIAMOND_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DIAMOND_LOG_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.moneyLogMsg && message.moneyLogMsg.length))
                            message.moneyLogMsg = [];
                        message.moneyLogMsg.push($root.com.message.MoneyLogMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DIAMOND_LOG_LIST;
        })();

        message.IntIntMapMsg = (function() {

            /**
             * Properties of an IntIntMapMsg.
             * @memberof com.message
             * @interface IIntIntMapMsg
             * @property {number|null} [key] IntIntMapMsg key
             * @property {number|null} [value] IntIntMapMsg value
             */

            /**
             * Constructs a new IntIntMapMsg.
             * @memberof com.message
             * @classdesc Represents an IntIntMapMsg.
             * @implements IIntIntMapMsg
             * @constructor
             * @param {com.message.IIntIntMapMsg=} [properties] Properties to set
             */
            function IntIntMapMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IntIntMapMsg key.
             * @member {number} key
             * @memberof com.message.IntIntMapMsg
             * @instance
             */
            IntIntMapMsg.prototype.key = 0;

            /**
             * IntIntMapMsg value.
             * @member {number} value
             * @memberof com.message.IntIntMapMsg
             * @instance
             */
            IntIntMapMsg.prototype.value = 0;

            /**
             * Encodes the specified IntIntMapMsg message. Does not implicitly {@link com.message.IntIntMapMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.IntIntMapMsg
             * @static
             * @param {com.message.IIntIntMapMsg} message IntIntMapMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntIntMapMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
                return writer;
            };

            /**
             * Decodes an IntIntMapMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.IntIntMapMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.IntIntMapMsg} IntIntMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntIntMapMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.IntIntMapMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.int32();
                        break;
                    case 2:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return IntIntMapMsg;
        })();

        message.StringIntMapMsg = (function() {

            /**
             * Properties of a StringIntMapMsg.
             * @memberof com.message
             * @interface IStringIntMapMsg
             * @property {string|null} [key] StringIntMapMsg key
             * @property {number|null} [value] StringIntMapMsg value
             */

            /**
             * Constructs a new StringIntMapMsg.
             * @memberof com.message
             * @classdesc Represents a StringIntMapMsg.
             * @implements IStringIntMapMsg
             * @constructor
             * @param {com.message.IStringIntMapMsg=} [properties] Properties to set
             */
            function StringIntMapMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringIntMapMsg key.
             * @member {string} key
             * @memberof com.message.StringIntMapMsg
             * @instance
             */
            StringIntMapMsg.prototype.key = "";

            /**
             * StringIntMapMsg value.
             * @member {number} value
             * @memberof com.message.StringIntMapMsg
             * @instance
             */
            StringIntMapMsg.prototype.value = 0;

            /**
             * Encodes the specified StringIntMapMsg message. Does not implicitly {@link com.message.StringIntMapMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.StringIntMapMsg
             * @static
             * @param {com.message.IStringIntMapMsg} message StringIntMapMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringIntMapMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
                return writer;
            };

            /**
             * Decodes a StringIntMapMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.StringIntMapMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.StringIntMapMsg} StringIntMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringIntMapMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.StringIntMapMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return StringIntMapMsg;
        })();

        message.IntLongMapMsg = (function() {

            /**
             * Properties of an IntLongMapMsg.
             * @memberof com.message
             * @interface IIntLongMapMsg
             * @property {number|null} [key] IntLongMapMsg key
             * @property {number|Long|null} [value] IntLongMapMsg value
             */

            /**
             * Constructs a new IntLongMapMsg.
             * @memberof com.message
             * @classdesc Represents an IntLongMapMsg.
             * @implements IIntLongMapMsg
             * @constructor
             * @param {com.message.IIntLongMapMsg=} [properties] Properties to set
             */
            function IntLongMapMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IntLongMapMsg key.
             * @member {number} key
             * @memberof com.message.IntLongMapMsg
             * @instance
             */
            IntLongMapMsg.prototype.key = 0;

            /**
             * IntLongMapMsg value.
             * @member {number|Long} value
             * @memberof com.message.IntLongMapMsg
             * @instance
             */
            IntLongMapMsg.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified IntLongMapMsg message. Does not implicitly {@link com.message.IntLongMapMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.IntLongMapMsg
             * @static
             * @param {com.message.IIntLongMapMsg} message IntLongMapMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntLongMapMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.value);
                return writer;
            };

            /**
             * Decodes an IntLongMapMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.IntLongMapMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.IntLongMapMsg} IntLongMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntLongMapMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.IntLongMapMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.int32();
                        break;
                    case 2:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return IntLongMapMsg;
        })();

        message.IntDoubleMapMsg = (function() {

            /**
             * Properties of an IntDoubleMapMsg.
             * @memberof com.message
             * @interface IIntDoubleMapMsg
             * @property {number|null} [key] IntDoubleMapMsg key
             * @property {number|null} [value] IntDoubleMapMsg value
             */

            /**
             * Constructs a new IntDoubleMapMsg.
             * @memberof com.message
             * @classdesc Represents an IntDoubleMapMsg.
             * @implements IIntDoubleMapMsg
             * @constructor
             * @param {com.message.IIntDoubleMapMsg=} [properties] Properties to set
             */
            function IntDoubleMapMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IntDoubleMapMsg key.
             * @member {number} key
             * @memberof com.message.IntDoubleMapMsg
             * @instance
             */
            IntDoubleMapMsg.prototype.key = 0;

            /**
             * IntDoubleMapMsg value.
             * @member {number} value
             * @memberof com.message.IntDoubleMapMsg
             * @instance
             */
            IntDoubleMapMsg.prototype.value = 0;

            /**
             * Encodes the specified IntDoubleMapMsg message. Does not implicitly {@link com.message.IntDoubleMapMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.IntDoubleMapMsg
             * @static
             * @param {com.message.IIntDoubleMapMsg} message IntDoubleMapMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntDoubleMapMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
                return writer;
            };

            /**
             * Decodes an IntDoubleMapMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.IntDoubleMapMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.IntDoubleMapMsg} IntDoubleMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntDoubleMapMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.IntDoubleMapMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.int32();
                        break;
                    case 2:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return IntDoubleMapMsg;
        })();

        message.IntFloatMapMsg = (function() {

            /**
             * Properties of an IntFloatMapMsg.
             * @memberof com.message
             * @interface IIntFloatMapMsg
             * @property {number|null} [key] IntFloatMapMsg key
             * @property {number|null} [value] IntFloatMapMsg value
             */

            /**
             * Constructs a new IntFloatMapMsg.
             * @memberof com.message
             * @classdesc Represents an IntFloatMapMsg.
             * @implements IIntFloatMapMsg
             * @constructor
             * @param {com.message.IIntFloatMapMsg=} [properties] Properties to set
             */
            function IntFloatMapMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IntFloatMapMsg key.
             * @member {number} key
             * @memberof com.message.IntFloatMapMsg
             * @instance
             */
            IntFloatMapMsg.prototype.key = 0;

            /**
             * IntFloatMapMsg value.
             * @member {number} value
             * @memberof com.message.IntFloatMapMsg
             * @instance
             */
            IntFloatMapMsg.prototype.value = 0;

            /**
             * Encodes the specified IntFloatMapMsg message. Does not implicitly {@link com.message.IntFloatMapMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.IntFloatMapMsg
             * @static
             * @param {com.message.IIntFloatMapMsg} message IntFloatMapMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntFloatMapMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.value);
                return writer;
            };

            /**
             * Decodes an IntFloatMapMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.IntFloatMapMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.IntFloatMapMsg} IntFloatMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntFloatMapMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.IntFloatMapMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.int32();
                        break;
                    case 2:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return IntFloatMapMsg;
        })();

        message.ItemMsg = (function() {

            /**
             * Properties of an ItemMsg.
             * @memberof com.message
             * @interface IItemMsg
             * @property {number|null} [itemId] ItemMsg itemId
             * @property {number|null} [num] ItemMsg num
             */

            /**
             * Constructs a new ItemMsg.
             * @memberof com.message
             * @classdesc Represents an ItemMsg.
             * @implements IItemMsg
             * @constructor
             * @param {com.message.IItemMsg=} [properties] Properties to set
             */
            function ItemMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ItemMsg itemId.
             * @member {number} itemId
             * @memberof com.message.ItemMsg
             * @instance
             */
            ItemMsg.prototype.itemId = 0;

            /**
             * ItemMsg num.
             * @member {number} num
             * @memberof com.message.ItemMsg
             * @instance
             */
            ItemMsg.prototype.num = 0;

            /**
             * Encodes the specified ItemMsg message. Does not implicitly {@link com.message.ItemMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.ItemMsg
             * @static
             * @param {com.message.IItemMsg} message ItemMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ItemMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
                if (message.num != null && message.hasOwnProperty("num"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
                return writer;
            };

            /**
             * Decodes an ItemMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.ItemMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.ItemMsg} ItemMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ItemMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.ItemMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.itemId = reader.int32();
                        break;
                    case 2:
                        message.num = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ItemMsg;
        })();

        message.ItemListMsg = (function() {

            /**
             * Properties of an ItemListMsg.
             * @memberof com.message
             * @interface IItemListMsg
             * @property {Array.<com.message.IItemMsg>|null} [list] ItemListMsg list
             */

            /**
             * Constructs a new ItemListMsg.
             * @memberof com.message
             * @classdesc Represents an ItemListMsg.
             * @implements IItemListMsg
             * @constructor
             * @param {com.message.IItemListMsg=} [properties] Properties to set
             */
            function ItemListMsg(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ItemListMsg list.
             * @member {Array.<com.message.IItemMsg>} list
             * @memberof com.message.ItemListMsg
             * @instance
             */
            ItemListMsg.prototype.list = $util.emptyArray;

            /**
             * Encodes the specified ItemListMsg message. Does not implicitly {@link com.message.ItemListMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.ItemListMsg
             * @static
             * @param {com.message.IItemListMsg} message ItemListMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ItemListMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (var i = 0; i < message.list.length; ++i)
                        $root.com.message.ItemMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an ItemListMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.ItemListMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.ItemListMsg} ItemListMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ItemListMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.ItemListMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.com.message.ItemMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ItemListMsg;
        })();

        message.SysConfigMsg = (function() {

            /**
             * Properties of a SysConfigMsg.
             * @memberof com.message
             * @interface ISysConfigMsg
             * @property {number|Long|null} [id] SysConfigMsg id
             * @property {string|null} [param] SysConfigMsg param
             * @property {string|null} [srcDec] SysConfigMsg srcDec
             */

            /**
             * Constructs a new SysConfigMsg.
             * @memberof com.message
             * @classdesc Represents a SysConfigMsg.
             * @implements ISysConfigMsg
             * @constructor
             * @param {com.message.ISysConfigMsg=} [properties] Properties to set
             */
            function SysConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SysConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.SysConfigMsg
             * @instance
             */
            SysConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SysConfigMsg param.
             * @member {string} param
             * @memberof com.message.SysConfigMsg
             * @instance
             */
            SysConfigMsg.prototype.param = "";

            /**
             * SysConfigMsg srcDec.
             * @member {string} srcDec
             * @memberof com.message.SysConfigMsg
             * @instance
             */
            SysConfigMsg.prototype.srcDec = "";

            /**
             * Encodes the specified SysConfigMsg message. Does not implicitly {@link com.message.SysConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.SysConfigMsg
             * @static
             * @param {com.message.ISysConfigMsg} message SysConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SysConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.param != null && message.hasOwnProperty("param"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.param);
                if (message.srcDec != null && message.hasOwnProperty("srcDec"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.srcDec);
                return writer;
            };

            /**
             * Decodes a SysConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.SysConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.SysConfigMsg} SysConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SysConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.SysConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.param = reader.string();
                        break;
                    case 3:
                        message.srcDec = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SysConfigMsg;
        })();

        message.C_GET_SYS_CONFIG = (function() {

            /**
             * Properties of a C_GET_SYS_CONFIG.
             * @memberof com.message
             * @interface IC_GET_SYS_CONFIG
             */

            /**
             * Constructs a new C_GET_SYS_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_SYS_CONFIG.
             * @implements IC_GET_SYS_CONFIG
             * @constructor
             * @param {com.message.IC_GET_SYS_CONFIG=} [properties] Properties to set
             */
            function C_GET_SYS_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_SYS_CONFIG message. Does not implicitly {@link com.message.C_GET_SYS_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_SYS_CONFIG
             * @static
             * @param {com.message.IC_GET_SYS_CONFIG} message C_GET_SYS_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_SYS_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_SYS_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_SYS_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_SYS_CONFIG} C_GET_SYS_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_SYS_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_SYS_CONFIG();
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

            return C_GET_SYS_CONFIG;
        })();

        message.S_GET_SYS_CONFIG = (function() {

            /**
             * Properties of a S_GET_SYS_CONFIG.
             * @memberof com.message
             * @interface IS_GET_SYS_CONFIG
             * @property {Array.<com.message.ISysConfigMsg>|null} [sysConfigMsgList] S_GET_SYS_CONFIG sysConfigMsgList
             */

            /**
             * Constructs a new S_GET_SYS_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_SYS_CONFIG.
             * @implements IS_GET_SYS_CONFIG
             * @constructor
             * @param {com.message.IS_GET_SYS_CONFIG=} [properties] Properties to set
             */
            function S_GET_SYS_CONFIG(properties) {
                this.sysConfigMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_SYS_CONFIG sysConfigMsgList.
             * @member {Array.<com.message.ISysConfigMsg>} sysConfigMsgList
             * @memberof com.message.S_GET_SYS_CONFIG
             * @instance
             */
            S_GET_SYS_CONFIG.prototype.sysConfigMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_SYS_CONFIG message. Does not implicitly {@link com.message.S_GET_SYS_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_SYS_CONFIG
             * @static
             * @param {com.message.IS_GET_SYS_CONFIG} message S_GET_SYS_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_SYS_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sysConfigMsgList != null && message.sysConfigMsgList.length)
                    for (var i = 0; i < message.sysConfigMsgList.length; ++i)
                        $root.com.message.SysConfigMsg.encode(message.sysConfigMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_SYS_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_SYS_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_SYS_CONFIG} S_GET_SYS_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_SYS_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_SYS_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.sysConfigMsgList && message.sysConfigMsgList.length))
                            message.sysConfigMsgList = [];
                        message.sysConfigMsgList.push($root.com.message.SysConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_SYS_CONFIG;
        })();

        message.S_SYNC_SYS_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_SYS_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_SYS_CONFIG
             * @property {com.message.ISysConfigMsg|null} [sysConfigMsg] S_SYNC_SYS_CONFIG sysConfigMsg
             */

            /**
             * Constructs a new S_SYNC_SYS_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_SYS_CONFIG.
             * @implements IS_SYNC_SYS_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_SYS_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_SYS_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_SYS_CONFIG sysConfigMsg.
             * @member {com.message.ISysConfigMsg|null|undefined} sysConfigMsg
             * @memberof com.message.S_SYNC_SYS_CONFIG
             * @instance
             */
            S_SYNC_SYS_CONFIG.prototype.sysConfigMsg = null;

            /**
             * Encodes the specified S_SYNC_SYS_CONFIG message. Does not implicitly {@link com.message.S_SYNC_SYS_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_SYS_CONFIG
             * @static
             * @param {com.message.IS_SYNC_SYS_CONFIG} message S_SYNC_SYS_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_SYS_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sysConfigMsg != null && message.hasOwnProperty("sysConfigMsg"))
                    $root.com.message.SysConfigMsg.encode(message.sysConfigMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_SYS_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_SYS_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_SYS_CONFIG} S_SYNC_SYS_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_SYS_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_SYS_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sysConfigMsg = $root.com.message.SysConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_SYS_CONFIG;
        })();

        message.DirectRateConfigMsg = (function() {

            /**
             * Properties of a DirectRateConfigMsg.
             * @memberof com.message
             * @interface IDirectRateConfigMsg
             * @property {number|Long|null} [id] DirectRateConfigMsg id
             * @property {number|null} [count] DirectRateConfigMsg count
             * @property {number|null} [precent] DirectRateConfigMsg precent
             * @property {string|null} [dec] DirectRateConfigMsg dec
             */

            /**
             * Constructs a new DirectRateConfigMsg.
             * @memberof com.message
             * @classdesc Represents a DirectRateConfigMsg.
             * @implements IDirectRateConfigMsg
             * @constructor
             * @param {com.message.IDirectRateConfigMsg=} [properties] Properties to set
             */
            function DirectRateConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DirectRateConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.DirectRateConfigMsg
             * @instance
             */
            DirectRateConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DirectRateConfigMsg count.
             * @member {number} count
             * @memberof com.message.DirectRateConfigMsg
             * @instance
             */
            DirectRateConfigMsg.prototype.count = 0;

            /**
             * DirectRateConfigMsg precent.
             * @member {number} precent
             * @memberof com.message.DirectRateConfigMsg
             * @instance
             */
            DirectRateConfigMsg.prototype.precent = 0;

            /**
             * DirectRateConfigMsg dec.
             * @member {string} dec
             * @memberof com.message.DirectRateConfigMsg
             * @instance
             */
            DirectRateConfigMsg.prototype.dec = "";

            /**
             * Encodes the specified DirectRateConfigMsg message. Does not implicitly {@link com.message.DirectRateConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DirectRateConfigMsg
             * @static
             * @param {com.message.IDirectRateConfigMsg} message DirectRateConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DirectRateConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                if (message.precent != null && message.hasOwnProperty("precent"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.precent);
                if (message.dec != null && message.hasOwnProperty("dec"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dec);
                return writer;
            };

            /**
             * Decodes a DirectRateConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DirectRateConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DirectRateConfigMsg} DirectRateConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DirectRateConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DirectRateConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.count = reader.int32();
                        break;
                    case 3:
                        message.precent = reader.double();
                        break;
                    case 4:
                        message.dec = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DirectRateConfigMsg;
        })();

        message.C_GET_DIRECT_RATE_CONFIG = (function() {

            /**
             * Properties of a C_GET_DIRECT_RATE_CONFIG.
             * @memberof com.message
             * @interface IC_GET_DIRECT_RATE_CONFIG
             */

            /**
             * Constructs a new C_GET_DIRECT_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_DIRECT_RATE_CONFIG.
             * @implements IC_GET_DIRECT_RATE_CONFIG
             * @constructor
             * @param {com.message.IC_GET_DIRECT_RATE_CONFIG=} [properties] Properties to set
             */
            function C_GET_DIRECT_RATE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DIRECT_RATE_CONFIG message. Does not implicitly {@link com.message.C_GET_DIRECT_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DIRECT_RATE_CONFIG
             * @static
             * @param {com.message.IC_GET_DIRECT_RATE_CONFIG} message C_GET_DIRECT_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DIRECT_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DIRECT_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DIRECT_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DIRECT_RATE_CONFIG} C_GET_DIRECT_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DIRECT_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DIRECT_RATE_CONFIG();
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

            return C_GET_DIRECT_RATE_CONFIG;
        })();

        message.S_GET_DIRECT_RATE_CONFIG = (function() {

            /**
             * Properties of a S_GET_DIRECT_RATE_CONFIG.
             * @memberof com.message
             * @interface IS_GET_DIRECT_RATE_CONFIG
             * @property {Array.<com.message.IDirectRateConfigMsg>|null} [configMsgList] S_GET_DIRECT_RATE_CONFIG configMsgList
             */

            /**
             * Constructs a new S_GET_DIRECT_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_DIRECT_RATE_CONFIG.
             * @implements IS_GET_DIRECT_RATE_CONFIG
             * @constructor
             * @param {com.message.IS_GET_DIRECT_RATE_CONFIG=} [properties] Properties to set
             */
            function S_GET_DIRECT_RATE_CONFIG(properties) {
                this.configMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DIRECT_RATE_CONFIG configMsgList.
             * @member {Array.<com.message.IDirectRateConfigMsg>} configMsgList
             * @memberof com.message.S_GET_DIRECT_RATE_CONFIG
             * @instance
             */
            S_GET_DIRECT_RATE_CONFIG.prototype.configMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DIRECT_RATE_CONFIG message. Does not implicitly {@link com.message.S_GET_DIRECT_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DIRECT_RATE_CONFIG
             * @static
             * @param {com.message.IS_GET_DIRECT_RATE_CONFIG} message S_GET_DIRECT_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DIRECT_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsgList != null && message.configMsgList.length)
                    for (var i = 0; i < message.configMsgList.length; ++i)
                        $root.com.message.DirectRateConfigMsg.encode(message.configMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DIRECT_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DIRECT_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DIRECT_RATE_CONFIG} S_GET_DIRECT_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DIRECT_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DIRECT_RATE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.configMsgList && message.configMsgList.length))
                            message.configMsgList = [];
                        message.configMsgList.push($root.com.message.DirectRateConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DIRECT_RATE_CONFIG;
        })();

        message.S_SYNC_DIRECT_RATE_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_DIRECT_RATE_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_DIRECT_RATE_CONFIG
             * @property {com.message.IDirectRateConfigMsg|null} [configMsg] S_SYNC_DIRECT_RATE_CONFIG configMsg
             */

            /**
             * Constructs a new S_SYNC_DIRECT_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_DIRECT_RATE_CONFIG.
             * @implements IS_SYNC_DIRECT_RATE_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_DIRECT_RATE_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_DIRECT_RATE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_DIRECT_RATE_CONFIG configMsg.
             * @member {com.message.IDirectRateConfigMsg|null|undefined} configMsg
             * @memberof com.message.S_SYNC_DIRECT_RATE_CONFIG
             * @instance
             */
            S_SYNC_DIRECT_RATE_CONFIG.prototype.configMsg = null;

            /**
             * Encodes the specified S_SYNC_DIRECT_RATE_CONFIG message. Does not implicitly {@link com.message.S_SYNC_DIRECT_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_DIRECT_RATE_CONFIG
             * @static
             * @param {com.message.IS_SYNC_DIRECT_RATE_CONFIG} message S_SYNC_DIRECT_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_DIRECT_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsg != null && message.hasOwnProperty("configMsg"))
                    $root.com.message.DirectRateConfigMsg.encode(message.configMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_DIRECT_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_DIRECT_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_DIRECT_RATE_CONFIG} S_SYNC_DIRECT_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_DIRECT_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_DIRECT_RATE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configMsg = $root.com.message.DirectRateConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_DIRECT_RATE_CONFIG;
        })();

        message.FishConfigMsg = (function() {

            /**
             * Properties of a FishConfigMsg.
             * @memberof com.message
             * @interface IFishConfigMsg
             * @property {number|Long|null} [id] FishConfigMsg id
             * @property {string|null} [name] FishConfigMsg name
             * @property {number|null} [level] FishConfigMsg level
             * @property {number|null} [limitTime] FishConfigMsg limitTime
             * @property {number|null} [monthly] FishConfigMsg monthly
             * @property {number|Long|null} [produce] FishConfigMsg produce
             * @property {number|null} [directPerson] FishConfigMsg directPerson
             * @property {number|null} [teamPerson] FishConfigMsg teamPerson
             * @property {number|null} [ubuyPrice] FishConfigMsg ubuyPrice
             * @property {number|null} [ubuyLimit] FishConfigMsg ubuyLimit
             * @property {number|null} [ubuyStar] FishConfigMsg ubuyStar
             * @property {number|null} [price] FishConfigMsg price
             */

            /**
             * Constructs a new FishConfigMsg.
             * @memberof com.message
             * @classdesc Represents a FishConfigMsg.
             * @implements IFishConfigMsg
             * @constructor
             * @param {com.message.IFishConfigMsg=} [properties] Properties to set
             */
            function FishConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FishConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishConfigMsg name.
             * @member {string} name
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.name = "";

            /**
             * FishConfigMsg level.
             * @member {number} level
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.level = 0;

            /**
             * FishConfigMsg limitTime.
             * @member {number} limitTime
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.limitTime = 0;

            /**
             * FishConfigMsg monthly.
             * @member {number} monthly
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.monthly = 0;

            /**
             * FishConfigMsg produce.
             * @member {number|Long} produce
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.produce = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishConfigMsg directPerson.
             * @member {number} directPerson
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.directPerson = 0;

            /**
             * FishConfigMsg teamPerson.
             * @member {number} teamPerson
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.teamPerson = 0;

            /**
             * FishConfigMsg ubuyPrice.
             * @member {number} ubuyPrice
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.ubuyPrice = 0;

            /**
             * FishConfigMsg ubuyLimit.
             * @member {number} ubuyLimit
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.ubuyLimit = 0;

            /**
             * FishConfigMsg ubuyStar.
             * @member {number} ubuyStar
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.ubuyStar = 0;

            /**
             * FishConfigMsg price.
             * @member {number} price
             * @memberof com.message.FishConfigMsg
             * @instance
             */
            FishConfigMsg.prototype.price = 0;

            /**
             * Encodes the specified FishConfigMsg message. Does not implicitly {@link com.message.FishConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.FishConfigMsg
             * @static
             * @param {com.message.IFishConfigMsg} message FishConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
                if (message.limitTime != null && message.hasOwnProperty("limitTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.limitTime);
                if (message.monthly != null && message.hasOwnProperty("monthly"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.monthly);
                if (message.produce != null && message.hasOwnProperty("produce"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.produce);
                if (message.directPerson != null && message.hasOwnProperty("directPerson"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.directPerson);
                if (message.teamPerson != null && message.hasOwnProperty("teamPerson"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.teamPerson);
                if (message.ubuyPrice != null && message.hasOwnProperty("ubuyPrice"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.ubuyPrice);
                if (message.ubuyLimit != null && message.hasOwnProperty("ubuyLimit"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.ubuyLimit);
                if (message.ubuyStar != null && message.hasOwnProperty("ubuyStar"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.ubuyStar);
                if (message.price != null && message.hasOwnProperty("price"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.price);
                return writer;
            };

            /**
             * Decodes a FishConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.FishConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.FishConfigMsg} FishConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.FishConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.level = reader.int32();
                        break;
                    case 4:
                        message.limitTime = reader.int32();
                        break;
                    case 5:
                        message.monthly = reader.int32();
                        break;
                    case 6:
                        message.produce = reader.int64();
                        break;
                    case 7:
                        message.directPerson = reader.int32();
                        break;
                    case 8:
                        message.teamPerson = reader.int32();
                        break;
                    case 9:
                        message.ubuyPrice = reader.double();
                        break;
                    case 10:
                        message.ubuyLimit = reader.int32();
                        break;
                    case 11:
                        message.ubuyStar = reader.int32();
                        break;
                    case 12:
                        message.price = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FishConfigMsg;
        })();

        message.C_GET_FISH_CONFIG = (function() {

            /**
             * Properties of a C_GET_FISH_CONFIG.
             * @memberof com.message
             * @interface IC_GET_FISH_CONFIG
             */

            /**
             * Constructs a new C_GET_FISH_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_FISH_CONFIG.
             * @implements IC_GET_FISH_CONFIG
             * @constructor
             * @param {com.message.IC_GET_FISH_CONFIG=} [properties] Properties to set
             */
            function C_GET_FISH_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_FISH_CONFIG message. Does not implicitly {@link com.message.C_GET_FISH_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_FISH_CONFIG
             * @static
             * @param {com.message.IC_GET_FISH_CONFIG} message C_GET_FISH_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_FISH_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_FISH_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_FISH_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_FISH_CONFIG} C_GET_FISH_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_FISH_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_FISH_CONFIG();
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

            return C_GET_FISH_CONFIG;
        })();

        message.S_GET_FISH_CONFIG = (function() {

            /**
             * Properties of a S_GET_FISH_CONFIG.
             * @memberof com.message
             * @interface IS_GET_FISH_CONFIG
             * @property {Array.<com.message.IFishConfigMsg>|null} [configMsgList] S_GET_FISH_CONFIG configMsgList
             */

            /**
             * Constructs a new S_GET_FISH_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_FISH_CONFIG.
             * @implements IS_GET_FISH_CONFIG
             * @constructor
             * @param {com.message.IS_GET_FISH_CONFIG=} [properties] Properties to set
             */
            function S_GET_FISH_CONFIG(properties) {
                this.configMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_FISH_CONFIG configMsgList.
             * @member {Array.<com.message.IFishConfigMsg>} configMsgList
             * @memberof com.message.S_GET_FISH_CONFIG
             * @instance
             */
            S_GET_FISH_CONFIG.prototype.configMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_FISH_CONFIG message. Does not implicitly {@link com.message.S_GET_FISH_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_FISH_CONFIG
             * @static
             * @param {com.message.IS_GET_FISH_CONFIG} message S_GET_FISH_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_FISH_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsgList != null && message.configMsgList.length)
                    for (var i = 0; i < message.configMsgList.length; ++i)
                        $root.com.message.FishConfigMsg.encode(message.configMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_FISH_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_FISH_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_FISH_CONFIG} S_GET_FISH_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_FISH_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_FISH_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.configMsgList && message.configMsgList.length))
                            message.configMsgList = [];
                        message.configMsgList.push($root.com.message.FishConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_FISH_CONFIG;
        })();

        message.S_SYNC_FISH_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_FISH_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_FISH_CONFIG
             * @property {com.message.IFishConfigMsg|null} [configMsg] S_SYNC_FISH_CONFIG configMsg
             */

            /**
             * Constructs a new S_SYNC_FISH_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_FISH_CONFIG.
             * @implements IS_SYNC_FISH_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_FISH_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_FISH_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_FISH_CONFIG configMsg.
             * @member {com.message.IFishConfigMsg|null|undefined} configMsg
             * @memberof com.message.S_SYNC_FISH_CONFIG
             * @instance
             */
            S_SYNC_FISH_CONFIG.prototype.configMsg = null;

            /**
             * Encodes the specified S_SYNC_FISH_CONFIG message. Does not implicitly {@link com.message.S_SYNC_FISH_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_FISH_CONFIG
             * @static
             * @param {com.message.IS_SYNC_FISH_CONFIG} message S_SYNC_FISH_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_FISH_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsg != null && message.hasOwnProperty("configMsg"))
                    $root.com.message.FishConfigMsg.encode(message.configMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_FISH_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_FISH_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_FISH_CONFIG} S_SYNC_FISH_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_FISH_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_FISH_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configMsg = $root.com.message.FishConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_FISH_CONFIG;
        })();

        message.InjectCycleConfigMsg = (function() {

            /**
             * Properties of an InjectCycleConfigMsg.
             * @memberof com.message
             * @interface IInjectCycleConfigMsg
             * @property {number|Long|null} [id] InjectCycleConfigMsg id
             * @property {number|null} [cycle] InjectCycleConfigMsg cycle
             * @property {number|null} [weights] InjectCycleConfigMsg weights
             * @property {string|null} [dec] InjectCycleConfigMsg dec
             */

            /**
             * Constructs a new InjectCycleConfigMsg.
             * @memberof com.message
             * @classdesc Represents an InjectCycleConfigMsg.
             * @implements IInjectCycleConfigMsg
             * @constructor
             * @param {com.message.IInjectCycleConfigMsg=} [properties] Properties to set
             */
            function InjectCycleConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InjectCycleConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.InjectCycleConfigMsg
             * @instance
             */
            InjectCycleConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * InjectCycleConfigMsg cycle.
             * @member {number} cycle
             * @memberof com.message.InjectCycleConfigMsg
             * @instance
             */
            InjectCycleConfigMsg.prototype.cycle = 0;

            /**
             * InjectCycleConfigMsg weights.
             * @member {number} weights
             * @memberof com.message.InjectCycleConfigMsg
             * @instance
             */
            InjectCycleConfigMsg.prototype.weights = 0;

            /**
             * InjectCycleConfigMsg dec.
             * @member {string} dec
             * @memberof com.message.InjectCycleConfigMsg
             * @instance
             */
            InjectCycleConfigMsg.prototype.dec = "";

            /**
             * Encodes the specified InjectCycleConfigMsg message. Does not implicitly {@link com.message.InjectCycleConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.InjectCycleConfigMsg
             * @static
             * @param {com.message.IInjectCycleConfigMsg} message InjectCycleConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InjectCycleConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.cycle != null && message.hasOwnProperty("cycle"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cycle);
                if (message.weights != null && message.hasOwnProperty("weights"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.weights);
                if (message.dec != null && message.hasOwnProperty("dec"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dec);
                return writer;
            };

            /**
             * Decodes an InjectCycleConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.InjectCycleConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.InjectCycleConfigMsg} InjectCycleConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InjectCycleConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.InjectCycleConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.cycle = reader.int32();
                        break;
                    case 3:
                        message.weights = reader.double();
                        break;
                    case 4:
                        message.dec = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return InjectCycleConfigMsg;
        })();

        message.C_GET_INJECT_CYCLE_CONFIG = (function() {

            /**
             * Properties of a C_GET_INJECT_CYCLE_CONFIG.
             * @memberof com.message
             * @interface IC_GET_INJECT_CYCLE_CONFIG
             */

            /**
             * Constructs a new C_GET_INJECT_CYCLE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_INJECT_CYCLE_CONFIG.
             * @implements IC_GET_INJECT_CYCLE_CONFIG
             * @constructor
             * @param {com.message.IC_GET_INJECT_CYCLE_CONFIG=} [properties] Properties to set
             */
            function C_GET_INJECT_CYCLE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_INJECT_CYCLE_CONFIG message. Does not implicitly {@link com.message.C_GET_INJECT_CYCLE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_INJECT_CYCLE_CONFIG
             * @static
             * @param {com.message.IC_GET_INJECT_CYCLE_CONFIG} message C_GET_INJECT_CYCLE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_INJECT_CYCLE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_INJECT_CYCLE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_INJECT_CYCLE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_INJECT_CYCLE_CONFIG} C_GET_INJECT_CYCLE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_INJECT_CYCLE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_INJECT_CYCLE_CONFIG();
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

            return C_GET_INJECT_CYCLE_CONFIG;
        })();

        message.S_GET_INJECT_CYCLE_CONFIG = (function() {

            /**
             * Properties of a S_GET_INJECT_CYCLE_CONFIG.
             * @memberof com.message
             * @interface IS_GET_INJECT_CYCLE_CONFIG
             * @property {Array.<com.message.IInjectCycleConfigMsg>|null} [configMsgList] S_GET_INJECT_CYCLE_CONFIG configMsgList
             */

            /**
             * Constructs a new S_GET_INJECT_CYCLE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_INJECT_CYCLE_CONFIG.
             * @implements IS_GET_INJECT_CYCLE_CONFIG
             * @constructor
             * @param {com.message.IS_GET_INJECT_CYCLE_CONFIG=} [properties] Properties to set
             */
            function S_GET_INJECT_CYCLE_CONFIG(properties) {
                this.configMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_INJECT_CYCLE_CONFIG configMsgList.
             * @member {Array.<com.message.IInjectCycleConfigMsg>} configMsgList
             * @memberof com.message.S_GET_INJECT_CYCLE_CONFIG
             * @instance
             */
            S_GET_INJECT_CYCLE_CONFIG.prototype.configMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_INJECT_CYCLE_CONFIG message. Does not implicitly {@link com.message.S_GET_INJECT_CYCLE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_INJECT_CYCLE_CONFIG
             * @static
             * @param {com.message.IS_GET_INJECT_CYCLE_CONFIG} message S_GET_INJECT_CYCLE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_INJECT_CYCLE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsgList != null && message.configMsgList.length)
                    for (var i = 0; i < message.configMsgList.length; ++i)
                        $root.com.message.InjectCycleConfigMsg.encode(message.configMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_INJECT_CYCLE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_INJECT_CYCLE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_INJECT_CYCLE_CONFIG} S_GET_INJECT_CYCLE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_INJECT_CYCLE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_INJECT_CYCLE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.configMsgList && message.configMsgList.length))
                            message.configMsgList = [];
                        message.configMsgList.push($root.com.message.InjectCycleConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_INJECT_CYCLE_CONFIG;
        })();

        message.S_SYNC_INJECT_CYCLE_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_INJECT_CYCLE_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_INJECT_CYCLE_CONFIG
             * @property {com.message.IInjectCycleConfigMsg|null} [configMsg] S_SYNC_INJECT_CYCLE_CONFIG configMsg
             */

            /**
             * Constructs a new S_SYNC_INJECT_CYCLE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_INJECT_CYCLE_CONFIG.
             * @implements IS_SYNC_INJECT_CYCLE_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_INJECT_CYCLE_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_INJECT_CYCLE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_INJECT_CYCLE_CONFIG configMsg.
             * @member {com.message.IInjectCycleConfigMsg|null|undefined} configMsg
             * @memberof com.message.S_SYNC_INJECT_CYCLE_CONFIG
             * @instance
             */
            S_SYNC_INJECT_CYCLE_CONFIG.prototype.configMsg = null;

            /**
             * Encodes the specified S_SYNC_INJECT_CYCLE_CONFIG message. Does not implicitly {@link com.message.S_SYNC_INJECT_CYCLE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_INJECT_CYCLE_CONFIG
             * @static
             * @param {com.message.IS_SYNC_INJECT_CYCLE_CONFIG} message S_SYNC_INJECT_CYCLE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_INJECT_CYCLE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsg != null && message.hasOwnProperty("configMsg"))
                    $root.com.message.InjectCycleConfigMsg.encode(message.configMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_INJECT_CYCLE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_INJECT_CYCLE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_INJECT_CYCLE_CONFIG} S_SYNC_INJECT_CYCLE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_INJECT_CYCLE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_INJECT_CYCLE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configMsg = $root.com.message.InjectCycleConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_INJECT_CYCLE_CONFIG;
        })();

        message.TeamRateConfigMsg = (function() {

            /**
             * Properties of a TeamRateConfigMsg.
             * @memberof com.message
             * @interface ITeamRateConfigMsg
             * @property {number|Long|null} [id] TeamRateConfigMsg id
             * @property {number|null} [allCount] TeamRateConfigMsg allCount
             * @property {number|null} [directCount] TeamRateConfigMsg directCount
             * @property {number|null} [otherCount] TeamRateConfigMsg otherCount
             * @property {number|null} [precent] TeamRateConfigMsg precent
             * @property {string|null} [dec] TeamRateConfigMsg dec
             */

            /**
             * Constructs a new TeamRateConfigMsg.
             * @memberof com.message
             * @classdesc Represents a TeamRateConfigMsg.
             * @implements ITeamRateConfigMsg
             * @constructor
             * @param {com.message.ITeamRateConfigMsg=} [properties] Properties to set
             */
            function TeamRateConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TeamRateConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.TeamRateConfigMsg
             * @instance
             */
            TeamRateConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TeamRateConfigMsg allCount.
             * @member {number} allCount
             * @memberof com.message.TeamRateConfigMsg
             * @instance
             */
            TeamRateConfigMsg.prototype.allCount = 0;

            /**
             * TeamRateConfigMsg directCount.
             * @member {number} directCount
             * @memberof com.message.TeamRateConfigMsg
             * @instance
             */
            TeamRateConfigMsg.prototype.directCount = 0;

            /**
             * TeamRateConfigMsg otherCount.
             * @member {number} otherCount
             * @memberof com.message.TeamRateConfigMsg
             * @instance
             */
            TeamRateConfigMsg.prototype.otherCount = 0;

            /**
             * TeamRateConfigMsg precent.
             * @member {number} precent
             * @memberof com.message.TeamRateConfigMsg
             * @instance
             */
            TeamRateConfigMsg.prototype.precent = 0;

            /**
             * TeamRateConfigMsg dec.
             * @member {string} dec
             * @memberof com.message.TeamRateConfigMsg
             * @instance
             */
            TeamRateConfigMsg.prototype.dec = "";

            /**
             * Encodes the specified TeamRateConfigMsg message. Does not implicitly {@link com.message.TeamRateConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.TeamRateConfigMsg
             * @static
             * @param {com.message.ITeamRateConfigMsg} message TeamRateConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamRateConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.allCount != null && message.hasOwnProperty("allCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.allCount);
                if (message.directCount != null && message.hasOwnProperty("directCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.directCount);
                if (message.otherCount != null && message.hasOwnProperty("otherCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.otherCount);
                if (message.precent != null && message.hasOwnProperty("precent"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.precent);
                if (message.dec != null && message.hasOwnProperty("dec"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.dec);
                return writer;
            };

            /**
             * Decodes a TeamRateConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.TeamRateConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.TeamRateConfigMsg} TeamRateConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamRateConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.TeamRateConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.allCount = reader.int32();
                        break;
                    case 3:
                        message.directCount = reader.int32();
                        break;
                    case 4:
                        message.otherCount = reader.int32();
                        break;
                    case 5:
                        message.precent = reader.double();
                        break;
                    case 6:
                        message.dec = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TeamRateConfigMsg;
        })();

        message.C_GET_TEAM_RATE_CONFIG = (function() {

            /**
             * Properties of a C_GET_TEAM_RATE_CONFIG.
             * @memberof com.message
             * @interface IC_GET_TEAM_RATE_CONFIG
             */

            /**
             * Constructs a new C_GET_TEAM_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_TEAM_RATE_CONFIG.
             * @implements IC_GET_TEAM_RATE_CONFIG
             * @constructor
             * @param {com.message.IC_GET_TEAM_RATE_CONFIG=} [properties] Properties to set
             */
            function C_GET_TEAM_RATE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_TEAM_RATE_CONFIG message. Does not implicitly {@link com.message.C_GET_TEAM_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_TEAM_RATE_CONFIG
             * @static
             * @param {com.message.IC_GET_TEAM_RATE_CONFIG} message C_GET_TEAM_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_TEAM_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_TEAM_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_TEAM_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_TEAM_RATE_CONFIG} C_GET_TEAM_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_TEAM_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_TEAM_RATE_CONFIG();
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

            return C_GET_TEAM_RATE_CONFIG;
        })();

        message.S_GET_TEAM_RATE_CONFIG = (function() {

            /**
             * Properties of a S_GET_TEAM_RATE_CONFIG.
             * @memberof com.message
             * @interface IS_GET_TEAM_RATE_CONFIG
             * @property {Array.<com.message.ITeamRateConfigMsg>|null} [configMsgList] S_GET_TEAM_RATE_CONFIG configMsgList
             */

            /**
             * Constructs a new S_GET_TEAM_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_TEAM_RATE_CONFIG.
             * @implements IS_GET_TEAM_RATE_CONFIG
             * @constructor
             * @param {com.message.IS_GET_TEAM_RATE_CONFIG=} [properties] Properties to set
             */
            function S_GET_TEAM_RATE_CONFIG(properties) {
                this.configMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_TEAM_RATE_CONFIG configMsgList.
             * @member {Array.<com.message.ITeamRateConfigMsg>} configMsgList
             * @memberof com.message.S_GET_TEAM_RATE_CONFIG
             * @instance
             */
            S_GET_TEAM_RATE_CONFIG.prototype.configMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_TEAM_RATE_CONFIG message. Does not implicitly {@link com.message.S_GET_TEAM_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_TEAM_RATE_CONFIG
             * @static
             * @param {com.message.IS_GET_TEAM_RATE_CONFIG} message S_GET_TEAM_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_TEAM_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsgList != null && message.configMsgList.length)
                    for (var i = 0; i < message.configMsgList.length; ++i)
                        $root.com.message.TeamRateConfigMsg.encode(message.configMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_TEAM_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_TEAM_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_TEAM_RATE_CONFIG} S_GET_TEAM_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_TEAM_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_TEAM_RATE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.configMsgList && message.configMsgList.length))
                            message.configMsgList = [];
                        message.configMsgList.push($root.com.message.TeamRateConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_TEAM_RATE_CONFIG;
        })();

        message.S_SYNC_TEAM_RATE_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_TEAM_RATE_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_TEAM_RATE_CONFIG
             * @property {com.message.ITeamRateConfigMsg|null} [configMsg] S_SYNC_TEAM_RATE_CONFIG configMsg
             */

            /**
             * Constructs a new S_SYNC_TEAM_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_TEAM_RATE_CONFIG.
             * @implements IS_SYNC_TEAM_RATE_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_TEAM_RATE_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_TEAM_RATE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_TEAM_RATE_CONFIG configMsg.
             * @member {com.message.ITeamRateConfigMsg|null|undefined} configMsg
             * @memberof com.message.S_SYNC_TEAM_RATE_CONFIG
             * @instance
             */
            S_SYNC_TEAM_RATE_CONFIG.prototype.configMsg = null;

            /**
             * Encodes the specified S_SYNC_TEAM_RATE_CONFIG message. Does not implicitly {@link com.message.S_SYNC_TEAM_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_TEAM_RATE_CONFIG
             * @static
             * @param {com.message.IS_SYNC_TEAM_RATE_CONFIG} message S_SYNC_TEAM_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_TEAM_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsg != null && message.hasOwnProperty("configMsg"))
                    $root.com.message.TeamRateConfigMsg.encode(message.configMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_TEAM_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_TEAM_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_TEAM_RATE_CONFIG} S_SYNC_TEAM_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_TEAM_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_TEAM_RATE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configMsg = $root.com.message.TeamRateConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_TEAM_RATE_CONFIG;
        })();

        message.TradeCostConfigMsg = (function() {

            /**
             * Properties of a TradeCostConfigMsg.
             * @memberof com.message
             * @interface ITradeCostConfigMsg
             * @property {number|Long|null} [id] TradeCostConfigMsg id
             * @property {number|null} [count] TradeCostConfigMsg count
             * @property {number|null} [precent] TradeCostConfigMsg precent
             * @property {string|null} [dec] TradeCostConfigMsg dec
             */

            /**
             * Constructs a new TradeCostConfigMsg.
             * @memberof com.message
             * @classdesc Represents a TradeCostConfigMsg.
             * @implements ITradeCostConfigMsg
             * @constructor
             * @param {com.message.ITradeCostConfigMsg=} [properties] Properties to set
             */
            function TradeCostConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TradeCostConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.TradeCostConfigMsg
             * @instance
             */
            TradeCostConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TradeCostConfigMsg count.
             * @member {number} count
             * @memberof com.message.TradeCostConfigMsg
             * @instance
             */
            TradeCostConfigMsg.prototype.count = 0;

            /**
             * TradeCostConfigMsg precent.
             * @member {number} precent
             * @memberof com.message.TradeCostConfigMsg
             * @instance
             */
            TradeCostConfigMsg.prototype.precent = 0;

            /**
             * TradeCostConfigMsg dec.
             * @member {string} dec
             * @memberof com.message.TradeCostConfigMsg
             * @instance
             */
            TradeCostConfigMsg.prototype.dec = "";

            /**
             * Encodes the specified TradeCostConfigMsg message. Does not implicitly {@link com.message.TradeCostConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.TradeCostConfigMsg
             * @static
             * @param {com.message.ITradeCostConfigMsg} message TradeCostConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TradeCostConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                if (message.precent != null && message.hasOwnProperty("precent"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.precent);
                if (message.dec != null && message.hasOwnProperty("dec"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dec);
                return writer;
            };

            /**
             * Decodes a TradeCostConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.TradeCostConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.TradeCostConfigMsg} TradeCostConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TradeCostConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.TradeCostConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.count = reader.int32();
                        break;
                    case 3:
                        message.precent = reader.double();
                        break;
                    case 4:
                        message.dec = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TradeCostConfigMsg;
        })();

        message.C_GET_TRADE_RATE_CONFIG = (function() {

            /**
             * Properties of a C_GET_TRADE_RATE_CONFIG.
             * @memberof com.message
             * @interface IC_GET_TRADE_RATE_CONFIG
             */

            /**
             * Constructs a new C_GET_TRADE_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_TRADE_RATE_CONFIG.
             * @implements IC_GET_TRADE_RATE_CONFIG
             * @constructor
             * @param {com.message.IC_GET_TRADE_RATE_CONFIG=} [properties] Properties to set
             */
            function C_GET_TRADE_RATE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_TRADE_RATE_CONFIG message. Does not implicitly {@link com.message.C_GET_TRADE_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_TRADE_RATE_CONFIG
             * @static
             * @param {com.message.IC_GET_TRADE_RATE_CONFIG} message C_GET_TRADE_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_TRADE_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_TRADE_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_TRADE_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_TRADE_RATE_CONFIG} C_GET_TRADE_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_TRADE_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_TRADE_RATE_CONFIG();
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

            return C_GET_TRADE_RATE_CONFIG;
        })();

        message.S_GET_TRADE_RATE_CONFIG = (function() {

            /**
             * Properties of a S_GET_TRADE_RATE_CONFIG.
             * @memberof com.message
             * @interface IS_GET_TRADE_RATE_CONFIG
             * @property {Array.<com.message.ITradeCostConfigMsg>|null} [configMsgList] S_GET_TRADE_RATE_CONFIG configMsgList
             */

            /**
             * Constructs a new S_GET_TRADE_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_TRADE_RATE_CONFIG.
             * @implements IS_GET_TRADE_RATE_CONFIG
             * @constructor
             * @param {com.message.IS_GET_TRADE_RATE_CONFIG=} [properties] Properties to set
             */
            function S_GET_TRADE_RATE_CONFIG(properties) {
                this.configMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_TRADE_RATE_CONFIG configMsgList.
             * @member {Array.<com.message.ITradeCostConfigMsg>} configMsgList
             * @memberof com.message.S_GET_TRADE_RATE_CONFIG
             * @instance
             */
            S_GET_TRADE_RATE_CONFIG.prototype.configMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_TRADE_RATE_CONFIG message. Does not implicitly {@link com.message.S_GET_TRADE_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_TRADE_RATE_CONFIG
             * @static
             * @param {com.message.IS_GET_TRADE_RATE_CONFIG} message S_GET_TRADE_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_TRADE_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsgList != null && message.configMsgList.length)
                    for (var i = 0; i < message.configMsgList.length; ++i)
                        $root.com.message.TradeCostConfigMsg.encode(message.configMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_TRADE_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_TRADE_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_TRADE_RATE_CONFIG} S_GET_TRADE_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_TRADE_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_TRADE_RATE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.configMsgList && message.configMsgList.length))
                            message.configMsgList = [];
                        message.configMsgList.push($root.com.message.TradeCostConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_TRADE_RATE_CONFIG;
        })();

        message.S_SYNC_TRADE_RATE_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_TRADE_RATE_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_TRADE_RATE_CONFIG
             * @property {com.message.ITradeCostConfigMsg|null} [configMsg] S_SYNC_TRADE_RATE_CONFIG configMsg
             */

            /**
             * Constructs a new S_SYNC_TRADE_RATE_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_TRADE_RATE_CONFIG.
             * @implements IS_SYNC_TRADE_RATE_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_TRADE_RATE_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_TRADE_RATE_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_TRADE_RATE_CONFIG configMsg.
             * @member {com.message.ITradeCostConfigMsg|null|undefined} configMsg
             * @memberof com.message.S_SYNC_TRADE_RATE_CONFIG
             * @instance
             */
            S_SYNC_TRADE_RATE_CONFIG.prototype.configMsg = null;

            /**
             * Encodes the specified S_SYNC_TRADE_RATE_CONFIG message. Does not implicitly {@link com.message.S_SYNC_TRADE_RATE_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_TRADE_RATE_CONFIG
             * @static
             * @param {com.message.IS_SYNC_TRADE_RATE_CONFIG} message S_SYNC_TRADE_RATE_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_TRADE_RATE_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsg != null && message.hasOwnProperty("configMsg"))
                    $root.com.message.TradeCostConfigMsg.encode(message.configMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_TRADE_RATE_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_TRADE_RATE_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_TRADE_RATE_CONFIG} S_SYNC_TRADE_RATE_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_TRADE_RATE_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_TRADE_RATE_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configMsg = $root.com.message.TradeCostConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_TRADE_RATE_CONFIG;
        })();

        message.DeepFishConfigMsg = (function() {

            /**
             * Properties of a DeepFishConfigMsg.
             * @memberof com.message
             * @interface IDeepFishConfigMsg
             * @property {number|Long|null} [id] DeepFishConfigMsg id
             * @property {number|Long|null} [fishId] DeepFishConfigMsg fishId
             * @property {number|null} [ubuyPrice] DeepFishConfigMsg ubuyPrice
             * @property {string|null} [dec] DeepFishConfigMsg dec
             */

            /**
             * Constructs a new DeepFishConfigMsg.
             * @memberof com.message
             * @classdesc Represents a DeepFishConfigMsg.
             * @implements IDeepFishConfigMsg
             * @constructor
             * @param {com.message.IDeepFishConfigMsg=} [properties] Properties to set
             */
            function DeepFishConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeepFishConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.DeepFishConfigMsg
             * @instance
             */
            DeepFishConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DeepFishConfigMsg fishId.
             * @member {number|Long} fishId
             * @memberof com.message.DeepFishConfigMsg
             * @instance
             */
            DeepFishConfigMsg.prototype.fishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DeepFishConfigMsg ubuyPrice.
             * @member {number} ubuyPrice
             * @memberof com.message.DeepFishConfigMsg
             * @instance
             */
            DeepFishConfigMsg.prototype.ubuyPrice = 0;

            /**
             * DeepFishConfigMsg dec.
             * @member {string} dec
             * @memberof com.message.DeepFishConfigMsg
             * @instance
             */
            DeepFishConfigMsg.prototype.dec = "";

            /**
             * Encodes the specified DeepFishConfigMsg message. Does not implicitly {@link com.message.DeepFishConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DeepFishConfigMsg
             * @static
             * @param {com.message.IDeepFishConfigMsg} message DeepFishConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeepFishConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.fishId != null && message.hasOwnProperty("fishId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.fishId);
                if (message.dec != null && message.hasOwnProperty("dec"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dec);
                if (message.ubuyPrice != null && message.hasOwnProperty("ubuyPrice"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.ubuyPrice);
                return writer;
            };

            /**
             * Decodes a DeepFishConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DeepFishConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DeepFishConfigMsg} DeepFishConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeepFishConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DeepFishConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 3:
                        message.fishId = reader.int64();
                        break;
                    case 9:
                        message.ubuyPrice = reader.double();
                        break;
                    case 4:
                        message.dec = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DeepFishConfigMsg;
        })();

        message.C_GET_DEEP_FISH_CONFIG = (function() {

            /**
             * Properties of a C_GET_DEEP_FISH_CONFIG.
             * @memberof com.message
             * @interface IC_GET_DEEP_FISH_CONFIG
             */

            /**
             * Constructs a new C_GET_DEEP_FISH_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_DEEP_FISH_CONFIG.
             * @implements IC_GET_DEEP_FISH_CONFIG
             * @constructor
             * @param {com.message.IC_GET_DEEP_FISH_CONFIG=} [properties] Properties to set
             */
            function C_GET_DEEP_FISH_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DEEP_FISH_CONFIG message. Does not implicitly {@link com.message.C_GET_DEEP_FISH_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DEEP_FISH_CONFIG
             * @static
             * @param {com.message.IC_GET_DEEP_FISH_CONFIG} message C_GET_DEEP_FISH_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DEEP_FISH_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DEEP_FISH_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DEEP_FISH_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DEEP_FISH_CONFIG} C_GET_DEEP_FISH_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DEEP_FISH_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DEEP_FISH_CONFIG();
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

            return C_GET_DEEP_FISH_CONFIG;
        })();

        message.S_GET_DEEP_FISH_CONFIG = (function() {

            /**
             * Properties of a S_GET_DEEP_FISH_CONFIG.
             * @memberof com.message
             * @interface IS_GET_DEEP_FISH_CONFIG
             * @property {Array.<com.message.IDeepFishConfigMsg>|null} [configMsgList] S_GET_DEEP_FISH_CONFIG configMsgList
             */

            /**
             * Constructs a new S_GET_DEEP_FISH_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_DEEP_FISH_CONFIG.
             * @implements IS_GET_DEEP_FISH_CONFIG
             * @constructor
             * @param {com.message.IS_GET_DEEP_FISH_CONFIG=} [properties] Properties to set
             */
            function S_GET_DEEP_FISH_CONFIG(properties) {
                this.configMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DEEP_FISH_CONFIG configMsgList.
             * @member {Array.<com.message.IDeepFishConfigMsg>} configMsgList
             * @memberof com.message.S_GET_DEEP_FISH_CONFIG
             * @instance
             */
            S_GET_DEEP_FISH_CONFIG.prototype.configMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DEEP_FISH_CONFIG message. Does not implicitly {@link com.message.S_GET_DEEP_FISH_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DEEP_FISH_CONFIG
             * @static
             * @param {com.message.IS_GET_DEEP_FISH_CONFIG} message S_GET_DEEP_FISH_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DEEP_FISH_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsgList != null && message.configMsgList.length)
                    for (var i = 0; i < message.configMsgList.length; ++i)
                        $root.com.message.DeepFishConfigMsg.encode(message.configMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DEEP_FISH_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DEEP_FISH_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DEEP_FISH_CONFIG} S_GET_DEEP_FISH_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DEEP_FISH_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DEEP_FISH_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.configMsgList && message.configMsgList.length))
                            message.configMsgList = [];
                        message.configMsgList.push($root.com.message.DeepFishConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DEEP_FISH_CONFIG;
        })();

        message.S_SYNC_DEEP_FISH_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_DEEP_FISH_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_DEEP_FISH_CONFIG
             * @property {com.message.IDeepFishConfigMsg|null} [configMsg] S_SYNC_DEEP_FISH_CONFIG configMsg
             */

            /**
             * Constructs a new S_SYNC_DEEP_FISH_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_DEEP_FISH_CONFIG.
             * @implements IS_SYNC_DEEP_FISH_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_DEEP_FISH_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_DEEP_FISH_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_DEEP_FISH_CONFIG configMsg.
             * @member {com.message.IDeepFishConfigMsg|null|undefined} configMsg
             * @memberof com.message.S_SYNC_DEEP_FISH_CONFIG
             * @instance
             */
            S_SYNC_DEEP_FISH_CONFIG.prototype.configMsg = null;

            /**
             * Encodes the specified S_SYNC_DEEP_FISH_CONFIG message. Does not implicitly {@link com.message.S_SYNC_DEEP_FISH_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_DEEP_FISH_CONFIG
             * @static
             * @param {com.message.IS_SYNC_DEEP_FISH_CONFIG} message S_SYNC_DEEP_FISH_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_DEEP_FISH_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsg != null && message.hasOwnProperty("configMsg"))
                    $root.com.message.DeepFishConfigMsg.encode(message.configMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_DEEP_FISH_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_DEEP_FISH_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_DEEP_FISH_CONFIG} S_SYNC_DEEP_FISH_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_DEEP_FISH_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_DEEP_FISH_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configMsg = $root.com.message.DeepFishConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_DEEP_FISH_CONFIG;
        })();

        message.OceanDrawConfigMsg = (function() {

            /**
             * Properties of an OceanDrawConfigMsg.
             * @memberof com.message
             * @interface IOceanDrawConfigMsg
             * @property {number|Long|null} [id] OceanDrawConfigMsg id
             * @property {number|null} [money] OceanDrawConfigMsg money
             * @property {number|null} [diamond] OceanDrawConfigMsg diamond
             * @property {number|null} [reward] OceanDrawConfigMsg reward
             * @property {number|null} [rate] OceanDrawConfigMsg rate
             * @property {string|null} [dec] OceanDrawConfigMsg dec
             */

            /**
             * Constructs a new OceanDrawConfigMsg.
             * @memberof com.message
             * @classdesc Represents an OceanDrawConfigMsg.
             * @implements IOceanDrawConfigMsg
             * @constructor
             * @param {com.message.IOceanDrawConfigMsg=} [properties] Properties to set
             */
            function OceanDrawConfigMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OceanDrawConfigMsg id.
             * @member {number|Long} id
             * @memberof com.message.OceanDrawConfigMsg
             * @instance
             */
            OceanDrawConfigMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OceanDrawConfigMsg money.
             * @member {number} money
             * @memberof com.message.OceanDrawConfigMsg
             * @instance
             */
            OceanDrawConfigMsg.prototype.money = 0;

            /**
             * OceanDrawConfigMsg diamond.
             * @member {number} diamond
             * @memberof com.message.OceanDrawConfigMsg
             * @instance
             */
            OceanDrawConfigMsg.prototype.diamond = 0;

            /**
             * OceanDrawConfigMsg reward.
             * @member {number} reward
             * @memberof com.message.OceanDrawConfigMsg
             * @instance
             */
            OceanDrawConfigMsg.prototype.reward = 0;

            /**
             * OceanDrawConfigMsg rate.
             * @member {number} rate
             * @memberof com.message.OceanDrawConfigMsg
             * @instance
             */
            OceanDrawConfigMsg.prototype.rate = 0;

            /**
             * OceanDrawConfigMsg dec.
             * @member {string} dec
             * @memberof com.message.OceanDrawConfigMsg
             * @instance
             */
            OceanDrawConfigMsg.prototype.dec = "";

            /**
             * Encodes the specified OceanDrawConfigMsg message. Does not implicitly {@link com.message.OceanDrawConfigMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.OceanDrawConfigMsg
             * @static
             * @param {com.message.IOceanDrawConfigMsg} message OceanDrawConfigMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OceanDrawConfigMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.money);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.diamond);
                if (message.reward != null && message.hasOwnProperty("reward"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.reward);
                if (message.rate != null && message.hasOwnProperty("rate"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rate);
                if (message.dec != null && message.hasOwnProperty("dec"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.dec);
                return writer;
            };

            /**
             * Decodes an OceanDrawConfigMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.OceanDrawConfigMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.OceanDrawConfigMsg} OceanDrawConfigMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OceanDrawConfigMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.OceanDrawConfigMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.money = reader.double();
                        break;
                    case 3:
                        message.diamond = reader.double();
                        break;
                    case 4:
                        message.reward = reader.int32();
                        break;
                    case 5:
                        message.rate = reader.int32();
                        break;
                    case 6:
                        message.dec = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OceanDrawConfigMsg;
        })();

        message.C_GET_OCEAN_DRAW_CONFIG = (function() {

            /**
             * Properties of a C_GET_OCEAN_DRAW_CONFIG.
             * @memberof com.message
             * @interface IC_GET_OCEAN_DRAW_CONFIG
             */

            /**
             * Constructs a new C_GET_OCEAN_DRAW_CONFIG.
             * @memberof com.message
             * @classdesc Represents a C_GET_OCEAN_DRAW_CONFIG.
             * @implements IC_GET_OCEAN_DRAW_CONFIG
             * @constructor
             * @param {com.message.IC_GET_OCEAN_DRAW_CONFIG=} [properties] Properties to set
             */
            function C_GET_OCEAN_DRAW_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_OCEAN_DRAW_CONFIG message. Does not implicitly {@link com.message.C_GET_OCEAN_DRAW_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_OCEAN_DRAW_CONFIG
             * @static
             * @param {com.message.IC_GET_OCEAN_DRAW_CONFIG} message C_GET_OCEAN_DRAW_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_OCEAN_DRAW_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_OCEAN_DRAW_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_OCEAN_DRAW_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_OCEAN_DRAW_CONFIG} C_GET_OCEAN_DRAW_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_OCEAN_DRAW_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_OCEAN_DRAW_CONFIG();
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

            return C_GET_OCEAN_DRAW_CONFIG;
        })();

        message.S_GET_OCEAN_DRAW_CONFIG = (function() {

            /**
             * Properties of a S_GET_OCEAN_DRAW_CONFIG.
             * @memberof com.message
             * @interface IS_GET_OCEAN_DRAW_CONFIG
             * @property {Array.<com.message.IOceanDrawConfigMsg>|null} [configMsgList] S_GET_OCEAN_DRAW_CONFIG configMsgList
             */

            /**
             * Constructs a new S_GET_OCEAN_DRAW_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_GET_OCEAN_DRAW_CONFIG.
             * @implements IS_GET_OCEAN_DRAW_CONFIG
             * @constructor
             * @param {com.message.IS_GET_OCEAN_DRAW_CONFIG=} [properties] Properties to set
             */
            function S_GET_OCEAN_DRAW_CONFIG(properties) {
                this.configMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_OCEAN_DRAW_CONFIG configMsgList.
             * @member {Array.<com.message.IOceanDrawConfigMsg>} configMsgList
             * @memberof com.message.S_GET_OCEAN_DRAW_CONFIG
             * @instance
             */
            S_GET_OCEAN_DRAW_CONFIG.prototype.configMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_OCEAN_DRAW_CONFIG message. Does not implicitly {@link com.message.S_GET_OCEAN_DRAW_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_OCEAN_DRAW_CONFIG
             * @static
             * @param {com.message.IS_GET_OCEAN_DRAW_CONFIG} message S_GET_OCEAN_DRAW_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_OCEAN_DRAW_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsgList != null && message.configMsgList.length)
                    for (var i = 0; i < message.configMsgList.length; ++i)
                        $root.com.message.OceanDrawConfigMsg.encode(message.configMsgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_OCEAN_DRAW_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_OCEAN_DRAW_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_OCEAN_DRAW_CONFIG} S_GET_OCEAN_DRAW_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_OCEAN_DRAW_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_OCEAN_DRAW_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.configMsgList && message.configMsgList.length))
                            message.configMsgList = [];
                        message.configMsgList.push($root.com.message.OceanDrawConfigMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_OCEAN_DRAW_CONFIG;
        })();

        message.S_SYNC_OCEAN_DRAW_CONFIG = (function() {

            /**
             * Properties of a S_SYNC_OCEAN_DRAW_CONFIG.
             * @memberof com.message
             * @interface IS_SYNC_OCEAN_DRAW_CONFIG
             * @property {com.message.IOceanDrawConfigMsg|null} [configMsg] S_SYNC_OCEAN_DRAW_CONFIG configMsg
             */

            /**
             * Constructs a new S_SYNC_OCEAN_DRAW_CONFIG.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_OCEAN_DRAW_CONFIG.
             * @implements IS_SYNC_OCEAN_DRAW_CONFIG
             * @constructor
             * @param {com.message.IS_SYNC_OCEAN_DRAW_CONFIG=} [properties] Properties to set
             */
            function S_SYNC_OCEAN_DRAW_CONFIG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_OCEAN_DRAW_CONFIG configMsg.
             * @member {com.message.IOceanDrawConfigMsg|null|undefined} configMsg
             * @memberof com.message.S_SYNC_OCEAN_DRAW_CONFIG
             * @instance
             */
            S_SYNC_OCEAN_DRAW_CONFIG.prototype.configMsg = null;

            /**
             * Encodes the specified S_SYNC_OCEAN_DRAW_CONFIG message. Does not implicitly {@link com.message.S_SYNC_OCEAN_DRAW_CONFIG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_OCEAN_DRAW_CONFIG
             * @static
             * @param {com.message.IS_SYNC_OCEAN_DRAW_CONFIG} message S_SYNC_OCEAN_DRAW_CONFIG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_OCEAN_DRAW_CONFIG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configMsg != null && message.hasOwnProperty("configMsg"))
                    $root.com.message.OceanDrawConfigMsg.encode(message.configMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_OCEAN_DRAW_CONFIG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_OCEAN_DRAW_CONFIG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_OCEAN_DRAW_CONFIG} S_SYNC_OCEAN_DRAW_CONFIG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_OCEAN_DRAW_CONFIG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_OCEAN_DRAW_CONFIG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configMsg = $root.com.message.OceanDrawConfigMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_OCEAN_DRAW_CONFIG;
        })();

        message.CROSS_C_SERVER_REGISTER = (function() {

            /**
             * Properties of a CROSS_C_SERVER_REGISTER.
             * @memberof com.message
             * @interface ICROSS_C_SERVER_REGISTER
             * @property {number|null} [serverId] CROSS_C_SERVER_REGISTER serverId
             * @property {string|null} [platName] CROSS_C_SERVER_REGISTER platName
             * @property {string|null} [mergeServerIds] CROSS_C_SERVER_REGISTER mergeServerIds
             */

            /**
             * Constructs a new CROSS_C_SERVER_REGISTER.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_SERVER_REGISTER.
             * @implements ICROSS_C_SERVER_REGISTER
             * @constructor
             * @param {com.message.ICROSS_C_SERVER_REGISTER=} [properties] Properties to set
             */
            function CROSS_C_SERVER_REGISTER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_SERVER_REGISTER serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_C_SERVER_REGISTER
             * @instance
             */
            CROSS_C_SERVER_REGISTER.prototype.serverId = 0;

            /**
             * CROSS_C_SERVER_REGISTER platName.
             * @member {string} platName
             * @memberof com.message.CROSS_C_SERVER_REGISTER
             * @instance
             */
            CROSS_C_SERVER_REGISTER.prototype.platName = "";

            /**
             * CROSS_C_SERVER_REGISTER mergeServerIds.
             * @member {string} mergeServerIds
             * @memberof com.message.CROSS_C_SERVER_REGISTER
             * @instance
             */
            CROSS_C_SERVER_REGISTER.prototype.mergeServerIds = "";

            /**
             * Encodes the specified CROSS_C_SERVER_REGISTER message. Does not implicitly {@link com.message.CROSS_C_SERVER_REGISTER.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_SERVER_REGISTER
             * @static
             * @param {com.message.ICROSS_C_SERVER_REGISTER} message CROSS_C_SERVER_REGISTER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_SERVER_REGISTER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.platName != null && message.hasOwnProperty("platName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.platName);
                if (message.mergeServerIds != null && message.hasOwnProperty("mergeServerIds"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.mergeServerIds);
                return writer;
            };

            /**
             * Decodes a CROSS_C_SERVER_REGISTER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_SERVER_REGISTER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_SERVER_REGISTER} CROSS_C_SERVER_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_SERVER_REGISTER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_SERVER_REGISTER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.platName = reader.string();
                        break;
                    case 3:
                        message.mergeServerIds = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_SERVER_REGISTER;
        })();

        message.CROSS_S_SERVER_REGISTER = (function() {

            /**
             * Properties of a CROSS_S_SERVER_REGISTER.
             * @memberof com.message
             * @interface ICROSS_S_SERVER_REGISTER
             * @property {number|null} [serverId] CROSS_S_SERVER_REGISTER serverId
             */

            /**
             * Constructs a new CROSS_S_SERVER_REGISTER.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_SERVER_REGISTER.
             * @implements ICROSS_S_SERVER_REGISTER
             * @constructor
             * @param {com.message.ICROSS_S_SERVER_REGISTER=} [properties] Properties to set
             */
            function CROSS_S_SERVER_REGISTER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_SERVER_REGISTER serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_S_SERVER_REGISTER
             * @instance
             */
            CROSS_S_SERVER_REGISTER.prototype.serverId = 0;

            /**
             * Encodes the specified CROSS_S_SERVER_REGISTER message. Does not implicitly {@link com.message.CROSS_S_SERVER_REGISTER.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_SERVER_REGISTER
             * @static
             * @param {com.message.ICROSS_S_SERVER_REGISTER} message CROSS_S_SERVER_REGISTER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_SERVER_REGISTER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                return writer;
            };

            /**
             * Decodes a CROSS_S_SERVER_REGISTER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_SERVER_REGISTER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_SERVER_REGISTER} CROSS_S_SERVER_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_SERVER_REGISTER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_SERVER_REGISTER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_SERVER_REGISTER;
        })();

        message.CROSS_C_HEART_BEAT = (function() {

            /**
             * Properties of a CROSS_C_HEART_BEAT.
             * @memberof com.message
             * @interface ICROSS_C_HEART_BEAT
             */

            /**
             * Constructs a new CROSS_C_HEART_BEAT.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_HEART_BEAT.
             * @implements ICROSS_C_HEART_BEAT
             * @constructor
             * @param {com.message.ICROSS_C_HEART_BEAT=} [properties] Properties to set
             */
            function CROSS_C_HEART_BEAT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified CROSS_C_HEART_BEAT message. Does not implicitly {@link com.message.CROSS_C_HEART_BEAT.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_HEART_BEAT
             * @static
             * @param {com.message.ICROSS_C_HEART_BEAT} message CROSS_C_HEART_BEAT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_HEART_BEAT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a CROSS_C_HEART_BEAT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_HEART_BEAT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_HEART_BEAT} CROSS_C_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_HEART_BEAT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_HEART_BEAT();
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

            return CROSS_C_HEART_BEAT;
        })();

        message.CROSS_S_HEART_BEAT = (function() {

            /**
             * Properties of a CROSS_S_HEART_BEAT.
             * @memberof com.message
             * @interface ICROSS_S_HEART_BEAT
             */

            /**
             * Constructs a new CROSS_S_HEART_BEAT.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_HEART_BEAT.
             * @implements ICROSS_S_HEART_BEAT
             * @constructor
             * @param {com.message.ICROSS_S_HEART_BEAT=} [properties] Properties to set
             */
            function CROSS_S_HEART_BEAT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified CROSS_S_HEART_BEAT message. Does not implicitly {@link com.message.CROSS_S_HEART_BEAT.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_HEART_BEAT
             * @static
             * @param {com.message.ICROSS_S_HEART_BEAT} message CROSS_S_HEART_BEAT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_HEART_BEAT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a CROSS_S_HEART_BEAT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_HEART_BEAT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_HEART_BEAT} CROSS_S_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_HEART_BEAT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_HEART_BEAT();
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

            return CROSS_S_HEART_BEAT;
        })();

        message.CROSS_C_SERVER_PUSH = (function() {

            /**
             * Properties of a CROSS_C_SERVER_PUSH.
             * @memberof com.message
             * @interface ICROSS_C_SERVER_PUSH
             * @property {number|null} [serverId] CROSS_C_SERVER_PUSH serverId
             */

            /**
             * Constructs a new CROSS_C_SERVER_PUSH.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_SERVER_PUSH.
             * @implements ICROSS_C_SERVER_PUSH
             * @constructor
             * @param {com.message.ICROSS_C_SERVER_PUSH=} [properties] Properties to set
             */
            function CROSS_C_SERVER_PUSH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_SERVER_PUSH serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_C_SERVER_PUSH
             * @instance
             */
            CROSS_C_SERVER_PUSH.prototype.serverId = 0;

            /**
             * Encodes the specified CROSS_C_SERVER_PUSH message. Does not implicitly {@link com.message.CROSS_C_SERVER_PUSH.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_SERVER_PUSH
             * @static
             * @param {com.message.ICROSS_C_SERVER_PUSH} message CROSS_C_SERVER_PUSH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_SERVER_PUSH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                return writer;
            };

            /**
             * Decodes a CROSS_C_SERVER_PUSH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_SERVER_PUSH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_SERVER_PUSH} CROSS_C_SERVER_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_SERVER_PUSH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_SERVER_PUSH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_SERVER_PUSH;
        })();

        message.CROSS_S_SERVER_PUSH = (function() {

            /**
             * Properties of a CROSS_S_SERVER_PUSH.
             * @memberof com.message
             * @interface ICROSS_S_SERVER_PUSH
             * @property {number|null} [serverId] CROSS_S_SERVER_PUSH serverId
             * @property {number|null} [sendRankData] CROSS_S_SERVER_PUSH sendRankData
             */

            /**
             * Constructs a new CROSS_S_SERVER_PUSH.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_SERVER_PUSH.
             * @implements ICROSS_S_SERVER_PUSH
             * @constructor
             * @param {com.message.ICROSS_S_SERVER_PUSH=} [properties] Properties to set
             */
            function CROSS_S_SERVER_PUSH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_SERVER_PUSH serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_S_SERVER_PUSH
             * @instance
             */
            CROSS_S_SERVER_PUSH.prototype.serverId = 0;

            /**
             * CROSS_S_SERVER_PUSH sendRankData.
             * @member {number} sendRankData
             * @memberof com.message.CROSS_S_SERVER_PUSH
             * @instance
             */
            CROSS_S_SERVER_PUSH.prototype.sendRankData = 0;

            /**
             * Encodes the specified CROSS_S_SERVER_PUSH message. Does not implicitly {@link com.message.CROSS_S_SERVER_PUSH.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_SERVER_PUSH
             * @static
             * @param {com.message.ICROSS_S_SERVER_PUSH} message CROSS_S_SERVER_PUSH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_SERVER_PUSH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.sendRankData != null && message.hasOwnProperty("sendRankData"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sendRankData);
                return writer;
            };

            /**
             * Decodes a CROSS_S_SERVER_PUSH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_SERVER_PUSH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_SERVER_PUSH} CROSS_S_SERVER_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_SERVER_PUSH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_SERVER_PUSH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.sendRankData = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_SERVER_PUSH;
        })();

        message.CROSS_C_HTTP_DATA = (function() {

            /**
             * Properties of a CROSS_C_HTTP_DATA.
             * @memberof com.message
             * @interface ICROSS_C_HTTP_DATA
             * @property {number|null} [serverId] CROSS_C_HTTP_DATA serverId
             * @property {string|null} [platName] CROSS_C_HTTP_DATA platName
             * @property {number|null} [httpType] CROSS_C_HTTP_DATA httpType
             * @property {string|null} [httpData] CROSS_C_HTTP_DATA httpData
             */

            /**
             * Constructs a new CROSS_C_HTTP_DATA.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_HTTP_DATA.
             * @implements ICROSS_C_HTTP_DATA
             * @constructor
             * @param {com.message.ICROSS_C_HTTP_DATA=} [properties] Properties to set
             */
            function CROSS_C_HTTP_DATA(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_HTTP_DATA serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_C_HTTP_DATA
             * @instance
             */
            CROSS_C_HTTP_DATA.prototype.serverId = 0;

            /**
             * CROSS_C_HTTP_DATA platName.
             * @member {string} platName
             * @memberof com.message.CROSS_C_HTTP_DATA
             * @instance
             */
            CROSS_C_HTTP_DATA.prototype.platName = "";

            /**
             * CROSS_C_HTTP_DATA httpType.
             * @member {number} httpType
             * @memberof com.message.CROSS_C_HTTP_DATA
             * @instance
             */
            CROSS_C_HTTP_DATA.prototype.httpType = 0;

            /**
             * CROSS_C_HTTP_DATA httpData.
             * @member {string} httpData
             * @memberof com.message.CROSS_C_HTTP_DATA
             * @instance
             */
            CROSS_C_HTTP_DATA.prototype.httpData = "";

            /**
             * Encodes the specified CROSS_C_HTTP_DATA message. Does not implicitly {@link com.message.CROSS_C_HTTP_DATA.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_HTTP_DATA
             * @static
             * @param {com.message.ICROSS_C_HTTP_DATA} message CROSS_C_HTTP_DATA message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_HTTP_DATA.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.platName != null && message.hasOwnProperty("platName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.platName);
                if (message.httpType != null && message.hasOwnProperty("httpType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.httpType);
                if (message.httpData != null && message.hasOwnProperty("httpData"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.httpData);
                return writer;
            };

            /**
             * Decodes a CROSS_C_HTTP_DATA message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_HTTP_DATA
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_HTTP_DATA} CROSS_C_HTTP_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_HTTP_DATA.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_HTTP_DATA();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.platName = reader.string();
                        break;
                    case 3:
                        message.httpType = reader.int32();
                        break;
                    case 4:
                        message.httpData = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_HTTP_DATA;
        })();

        message.C_DEBUG_COMMON = (function() {

            /**
             * Properties of a C_DEBUG_COMMON.
             * @memberof com.message
             * @interface IC_DEBUG_COMMON
             * @property {string|null} [debugString] C_DEBUG_COMMON debugString
             */

            /**
             * Constructs a new C_DEBUG_COMMON.
             * @memberof com.message
             * @classdesc Represents a C_DEBUG_COMMON.
             * @implements IC_DEBUG_COMMON
             * @constructor
             * @param {com.message.IC_DEBUG_COMMON=} [properties] Properties to set
             */
            function C_DEBUG_COMMON(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_DEBUG_COMMON debugString.
             * @member {string} debugString
             * @memberof com.message.C_DEBUG_COMMON
             * @instance
             */
            C_DEBUG_COMMON.prototype.debugString = "";

            /**
             * Encodes the specified C_DEBUG_COMMON message. Does not implicitly {@link com.message.C_DEBUG_COMMON.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_DEBUG_COMMON
             * @static
             * @param {com.message.IC_DEBUG_COMMON} message C_DEBUG_COMMON message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_DEBUG_COMMON.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.debugString != null && message.hasOwnProperty("debugString"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.debugString);
                return writer;
            };

            /**
             * Decodes a C_DEBUG_COMMON message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_DEBUG_COMMON
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_DEBUG_COMMON} C_DEBUG_COMMON
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_DEBUG_COMMON.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_DEBUG_COMMON();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.debugString = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_DEBUG_COMMON;
        })();

        message.S_DEBUG_COMMON = (function() {

            /**
             * Properties of a S_DEBUG_COMMON.
             * @memberof com.message
             * @interface IS_DEBUG_COMMON
             * @property {string|null} [debugString] S_DEBUG_COMMON debugString
             */

            /**
             * Constructs a new S_DEBUG_COMMON.
             * @memberof com.message
             * @classdesc Represents a S_DEBUG_COMMON.
             * @implements IS_DEBUG_COMMON
             * @constructor
             * @param {com.message.IS_DEBUG_COMMON=} [properties] Properties to set
             */
            function S_DEBUG_COMMON(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_DEBUG_COMMON debugString.
             * @member {string} debugString
             * @memberof com.message.S_DEBUG_COMMON
             * @instance
             */
            S_DEBUG_COMMON.prototype.debugString = "";

            /**
             * Encodes the specified S_DEBUG_COMMON message. Does not implicitly {@link com.message.S_DEBUG_COMMON.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_DEBUG_COMMON
             * @static
             * @param {com.message.IS_DEBUG_COMMON} message S_DEBUG_COMMON message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_DEBUG_COMMON.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.debugString != null && message.hasOwnProperty("debugString"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.debugString);
                return writer;
            };

            /**
             * Decodes a S_DEBUG_COMMON message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_DEBUG_COMMON
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_DEBUG_COMMON} S_DEBUG_COMMON
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_DEBUG_COMMON.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_DEBUG_COMMON();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.debugString = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_DEBUG_COMMON;
        })();

        message.MoneyExchangeMsg = (function() {

            /**
             * Properties of a MoneyExchangeMsg.
             * @memberof com.message
             * @interface IMoneyExchangeMsg
             * @property {number|null} [sysAllKAD] MoneyExchangeMsg sysAllKAD
             * @property {number|null} [exAllKAD] MoneyExchangeMsg exAllKAD
             * @property {number|null} [exRatio] MoneyExchangeMsg exRatio
             */

            /**
             * Constructs a new MoneyExchangeMsg.
             * @memberof com.message
             * @classdesc Represents a MoneyExchangeMsg.
             * @implements IMoneyExchangeMsg
             * @constructor
             * @param {com.message.IMoneyExchangeMsg=} [properties] Properties to set
             */
            function MoneyExchangeMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MoneyExchangeMsg sysAllKAD.
             * @member {number} sysAllKAD
             * @memberof com.message.MoneyExchangeMsg
             * @instance
             */
            MoneyExchangeMsg.prototype.sysAllKAD = 0;

            /**
             * MoneyExchangeMsg exAllKAD.
             * @member {number} exAllKAD
             * @memberof com.message.MoneyExchangeMsg
             * @instance
             */
            MoneyExchangeMsg.prototype.exAllKAD = 0;

            /**
             * MoneyExchangeMsg exRatio.
             * @member {number} exRatio
             * @memberof com.message.MoneyExchangeMsg
             * @instance
             */
            MoneyExchangeMsg.prototype.exRatio = 0;

            /**
             * Encodes the specified MoneyExchangeMsg message. Does not implicitly {@link com.message.MoneyExchangeMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.MoneyExchangeMsg
             * @static
             * @param {com.message.IMoneyExchangeMsg} message MoneyExchangeMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoneyExchangeMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sysAllKAD != null && message.hasOwnProperty("sysAllKAD"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.sysAllKAD);
                if (message.exAllKAD != null && message.hasOwnProperty("exAllKAD"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.exAllKAD);
                if (message.exRatio != null && message.hasOwnProperty("exRatio"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.exRatio);
                return writer;
            };

            /**
             * Decodes a MoneyExchangeMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.MoneyExchangeMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.MoneyExchangeMsg} MoneyExchangeMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoneyExchangeMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.MoneyExchangeMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sysAllKAD = reader.double();
                        break;
                    case 2:
                        message.exAllKAD = reader.double();
                        break;
                    case 3:
                        message.exRatio = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MoneyExchangeMsg;
        })();

        message.PlayerExcInfoMsg = (function() {

            /**
             * Properties of a PlayerExcInfoMsg.
             * @memberof com.message
             * @interface IPlayerExcInfoMsg
             * @property {number|null} [moneyCount] PlayerExcInfoMsg moneyCount
             * @property {number|null} [KADCount] PlayerExcInfoMsg KADCount
             * @property {number|Long|null} [logTime] PlayerExcInfoMsg logTime
             */

            /**
             * Constructs a new PlayerExcInfoMsg.
             * @memberof com.message
             * @classdesc Represents a PlayerExcInfoMsg.
             * @implements IPlayerExcInfoMsg
             * @constructor
             * @param {com.message.IPlayerExcInfoMsg=} [properties] Properties to set
             */
            function PlayerExcInfoMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerExcInfoMsg moneyCount.
             * @member {number} moneyCount
             * @memberof com.message.PlayerExcInfoMsg
             * @instance
             */
            PlayerExcInfoMsg.prototype.moneyCount = 0;

            /**
             * PlayerExcInfoMsg KADCount.
             * @member {number} KADCount
             * @memberof com.message.PlayerExcInfoMsg
             * @instance
             */
            PlayerExcInfoMsg.prototype.KADCount = 0;

            /**
             * PlayerExcInfoMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.PlayerExcInfoMsg
             * @instance
             */
            PlayerExcInfoMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified PlayerExcInfoMsg message. Does not implicitly {@link com.message.PlayerExcInfoMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.PlayerExcInfoMsg
             * @static
             * @param {com.message.IPlayerExcInfoMsg} message PlayerExcInfoMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerExcInfoMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.moneyCount != null && message.hasOwnProperty("moneyCount"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.moneyCount);
                if (message.KADCount != null && message.hasOwnProperty("KADCount"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.KADCount);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.logTime);
                return writer;
            };

            /**
             * Decodes a PlayerExcInfoMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.PlayerExcInfoMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.PlayerExcInfoMsg} PlayerExcInfoMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerExcInfoMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.PlayerExcInfoMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.moneyCount = reader.double();
                        break;
                    case 2:
                        message.KADCount = reader.double();
                        break;
                    case 3:
                        message.logTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PlayerExcInfoMsg;
        })();

        message.C_GET_MONEY_EXCHANGE_INFO = (function() {

            /**
             * Properties of a C_GET_MONEY_EXCHANGE_INFO.
             * @memberof com.message
             * @interface IC_GET_MONEY_EXCHANGE_INFO
             */

            /**
             * Constructs a new C_GET_MONEY_EXCHANGE_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_MONEY_EXCHANGE_INFO.
             * @implements IC_GET_MONEY_EXCHANGE_INFO
             * @constructor
             * @param {com.message.IC_GET_MONEY_EXCHANGE_INFO=} [properties] Properties to set
             */
            function C_GET_MONEY_EXCHANGE_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MONEY_EXCHANGE_INFO message. Does not implicitly {@link com.message.C_GET_MONEY_EXCHANGE_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MONEY_EXCHANGE_INFO
             * @static
             * @param {com.message.IC_GET_MONEY_EXCHANGE_INFO} message C_GET_MONEY_EXCHANGE_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MONEY_EXCHANGE_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MONEY_EXCHANGE_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MONEY_EXCHANGE_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MONEY_EXCHANGE_INFO} C_GET_MONEY_EXCHANGE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MONEY_EXCHANGE_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MONEY_EXCHANGE_INFO();
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

            return C_GET_MONEY_EXCHANGE_INFO;
        })();

        message.S_GET_MONEY_EXCHANGE_INFO = (function() {

            /**
             * Properties of a S_GET_MONEY_EXCHANGE_INFO.
             * @memberof com.message
             * @interface IS_GET_MONEY_EXCHANGE_INFO
             * @property {com.message.IMoneyExchangeMsg|null} [moneyExchangeMsg] S_GET_MONEY_EXCHANGE_INFO moneyExchangeMsg
             * @property {Array.<com.message.IPlayerExcInfoMsg>|null} [playerExcInfoMsg] S_GET_MONEY_EXCHANGE_INFO playerExcInfoMsg
             */

            /**
             * Constructs a new S_GET_MONEY_EXCHANGE_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_MONEY_EXCHANGE_INFO.
             * @implements IS_GET_MONEY_EXCHANGE_INFO
             * @constructor
             * @param {com.message.IS_GET_MONEY_EXCHANGE_INFO=} [properties] Properties to set
             */
            function S_GET_MONEY_EXCHANGE_INFO(properties) {
                this.playerExcInfoMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MONEY_EXCHANGE_INFO moneyExchangeMsg.
             * @member {com.message.IMoneyExchangeMsg|null|undefined} moneyExchangeMsg
             * @memberof com.message.S_GET_MONEY_EXCHANGE_INFO
             * @instance
             */
            S_GET_MONEY_EXCHANGE_INFO.prototype.moneyExchangeMsg = null;

            /**
             * S_GET_MONEY_EXCHANGE_INFO playerExcInfoMsg.
             * @member {Array.<com.message.IPlayerExcInfoMsg>} playerExcInfoMsg
             * @memberof com.message.S_GET_MONEY_EXCHANGE_INFO
             * @instance
             */
            S_GET_MONEY_EXCHANGE_INFO.prototype.playerExcInfoMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_MONEY_EXCHANGE_INFO message. Does not implicitly {@link com.message.S_GET_MONEY_EXCHANGE_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MONEY_EXCHANGE_INFO
             * @static
             * @param {com.message.IS_GET_MONEY_EXCHANGE_INFO} message S_GET_MONEY_EXCHANGE_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MONEY_EXCHANGE_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.moneyExchangeMsg != null && message.hasOwnProperty("moneyExchangeMsg"))
                    $root.com.message.MoneyExchangeMsg.encode(message.moneyExchangeMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.playerExcInfoMsg != null && message.playerExcInfoMsg.length)
                    for (var i = 0; i < message.playerExcInfoMsg.length; ++i)
                        $root.com.message.PlayerExcInfoMsg.encode(message.playerExcInfoMsg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_MONEY_EXCHANGE_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MONEY_EXCHANGE_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MONEY_EXCHANGE_INFO} S_GET_MONEY_EXCHANGE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MONEY_EXCHANGE_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MONEY_EXCHANGE_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.moneyExchangeMsg = $root.com.message.MoneyExchangeMsg.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.playerExcInfoMsg && message.playerExcInfoMsg.length))
                            message.playerExcInfoMsg = [];
                        message.playerExcInfoMsg.push($root.com.message.PlayerExcInfoMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MONEY_EXCHANGE_INFO;
        })();

        message.C_MONEY_EXCHANGE_KAD = (function() {

            /**
             * Properties of a C_MONEY_EXCHANGE_KAD.
             * @memberof com.message
             * @interface IC_MONEY_EXCHANGE_KAD
             * @property {number|null} [moneyCount] C_MONEY_EXCHANGE_KAD moneyCount
             */

            /**
             * Constructs a new C_MONEY_EXCHANGE_KAD.
             * @memberof com.message
             * @classdesc Represents a C_MONEY_EXCHANGE_KAD.
             * @implements IC_MONEY_EXCHANGE_KAD
             * @constructor
             * @param {com.message.IC_MONEY_EXCHANGE_KAD=} [properties] Properties to set
             */
            function C_MONEY_EXCHANGE_KAD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_MONEY_EXCHANGE_KAD moneyCount.
             * @member {number} moneyCount
             * @memberof com.message.C_MONEY_EXCHANGE_KAD
             * @instance
             */
            C_MONEY_EXCHANGE_KAD.prototype.moneyCount = 0;

            /**
             * Encodes the specified C_MONEY_EXCHANGE_KAD message. Does not implicitly {@link com.message.C_MONEY_EXCHANGE_KAD.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_MONEY_EXCHANGE_KAD
             * @static
             * @param {com.message.IC_MONEY_EXCHANGE_KAD} message C_MONEY_EXCHANGE_KAD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_MONEY_EXCHANGE_KAD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.moneyCount != null && message.hasOwnProperty("moneyCount"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.moneyCount);
                return writer;
            };

            /**
             * Decodes a C_MONEY_EXCHANGE_KAD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_MONEY_EXCHANGE_KAD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_MONEY_EXCHANGE_KAD} C_MONEY_EXCHANGE_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_MONEY_EXCHANGE_KAD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_MONEY_EXCHANGE_KAD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.moneyCount = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_MONEY_EXCHANGE_KAD;
        })();

        message.S_MONEY_EXCHANGE_KAD = (function() {

            /**
             * Properties of a S_MONEY_EXCHANGE_KAD.
             * @memberof com.message
             * @interface IS_MONEY_EXCHANGE_KAD
             * @property {number|null} [moneyCount] S_MONEY_EXCHANGE_KAD moneyCount
             * @property {number|null} [KADCount] S_MONEY_EXCHANGE_KAD KADCount
             * @property {com.message.IPlayerExcInfoMsg|null} [playerExcInfoMsg] S_MONEY_EXCHANGE_KAD playerExcInfoMsg
             */

            /**
             * Constructs a new S_MONEY_EXCHANGE_KAD.
             * @memberof com.message
             * @classdesc Represents a S_MONEY_EXCHANGE_KAD.
             * @implements IS_MONEY_EXCHANGE_KAD
             * @constructor
             * @param {com.message.IS_MONEY_EXCHANGE_KAD=} [properties] Properties to set
             */
            function S_MONEY_EXCHANGE_KAD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_MONEY_EXCHANGE_KAD moneyCount.
             * @member {number} moneyCount
             * @memberof com.message.S_MONEY_EXCHANGE_KAD
             * @instance
             */
            S_MONEY_EXCHANGE_KAD.prototype.moneyCount = 0;

            /**
             * S_MONEY_EXCHANGE_KAD KADCount.
             * @member {number} KADCount
             * @memberof com.message.S_MONEY_EXCHANGE_KAD
             * @instance
             */
            S_MONEY_EXCHANGE_KAD.prototype.KADCount = 0;

            /**
             * S_MONEY_EXCHANGE_KAD playerExcInfoMsg.
             * @member {com.message.IPlayerExcInfoMsg|null|undefined} playerExcInfoMsg
             * @memberof com.message.S_MONEY_EXCHANGE_KAD
             * @instance
             */
            S_MONEY_EXCHANGE_KAD.prototype.playerExcInfoMsg = null;

            /**
             * Encodes the specified S_MONEY_EXCHANGE_KAD message. Does not implicitly {@link com.message.S_MONEY_EXCHANGE_KAD.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_MONEY_EXCHANGE_KAD
             * @static
             * @param {com.message.IS_MONEY_EXCHANGE_KAD} message S_MONEY_EXCHANGE_KAD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_MONEY_EXCHANGE_KAD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.moneyCount != null && message.hasOwnProperty("moneyCount"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.moneyCount);
                if (message.KADCount != null && message.hasOwnProperty("KADCount"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.KADCount);
                if (message.playerExcInfoMsg != null && message.hasOwnProperty("playerExcInfoMsg"))
                    $root.com.message.PlayerExcInfoMsg.encode(message.playerExcInfoMsg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_MONEY_EXCHANGE_KAD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_MONEY_EXCHANGE_KAD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_MONEY_EXCHANGE_KAD} S_MONEY_EXCHANGE_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_MONEY_EXCHANGE_KAD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_MONEY_EXCHANGE_KAD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.moneyCount = reader.double();
                        break;
                    case 2:
                        message.KADCount = reader.double();
                        break;
                    case 3:
                        message.playerExcInfoMsg = $root.com.message.PlayerExcInfoMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_MONEY_EXCHANGE_KAD;
        })();

        message.SysBonusMsg = (function() {

            /**
             * Properties of a SysBonusMsg.
             * @memberof com.message
             * @interface ISysBonusMsg
             * @property {number|null} [sysAllBonus] SysBonusMsg sysAllBonus
             * @property {number|null} [todayAllBonus] SysBonusMsg todayAllBonus
             * @property {number|null} [bonusRatio] SysBonusMsg bonusRatio
             */

            /**
             * Constructs a new SysBonusMsg.
             * @memberof com.message
             * @classdesc Represents a SysBonusMsg.
             * @implements ISysBonusMsg
             * @constructor
             * @param {com.message.ISysBonusMsg=} [properties] Properties to set
             */
            function SysBonusMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SysBonusMsg sysAllBonus.
             * @member {number} sysAllBonus
             * @memberof com.message.SysBonusMsg
             * @instance
             */
            SysBonusMsg.prototype.sysAllBonus = 0;

            /**
             * SysBonusMsg todayAllBonus.
             * @member {number} todayAllBonus
             * @memberof com.message.SysBonusMsg
             * @instance
             */
            SysBonusMsg.prototype.todayAllBonus = 0;

            /**
             * SysBonusMsg bonusRatio.
             * @member {number} bonusRatio
             * @memberof com.message.SysBonusMsg
             * @instance
             */
            SysBonusMsg.prototype.bonusRatio = 0;

            /**
             * Encodes the specified SysBonusMsg message. Does not implicitly {@link com.message.SysBonusMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.SysBonusMsg
             * @static
             * @param {com.message.ISysBonusMsg} message SysBonusMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SysBonusMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sysAllBonus != null && message.hasOwnProperty("sysAllBonus"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.sysAllBonus);
                if (message.todayAllBonus != null && message.hasOwnProperty("todayAllBonus"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.todayAllBonus);
                if (message.bonusRatio != null && message.hasOwnProperty("bonusRatio"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.bonusRatio);
                return writer;
            };

            /**
             * Decodes a SysBonusMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.SysBonusMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.SysBonusMsg} SysBonusMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SysBonusMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.SysBonusMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sysAllBonus = reader.double();
                        break;
                    case 2:
                        message.todayAllBonus = reader.double();
                        break;
                    case 3:
                        message.bonusRatio = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SysBonusMsg;
        })();

        message.PersonBonusMsg = (function() {

            /**
             * Properties of a PersonBonusMsg.
             * @memberof com.message
             * @interface IPersonBonusMsg
             * @property {number|null} [diamondCount] PersonBonusMsg diamondCount
             * @property {string|null} [info] PersonBonusMsg info
             * @property {number|Long|null} [logTime] PersonBonusMsg logTime
             */

            /**
             * Constructs a new PersonBonusMsg.
             * @memberof com.message
             * @classdesc Represents a PersonBonusMsg.
             * @implements IPersonBonusMsg
             * @constructor
             * @param {com.message.IPersonBonusMsg=} [properties] Properties to set
             */
            function PersonBonusMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersonBonusMsg diamondCount.
             * @member {number} diamondCount
             * @memberof com.message.PersonBonusMsg
             * @instance
             */
            PersonBonusMsg.prototype.diamondCount = 0;

            /**
             * PersonBonusMsg info.
             * @member {string} info
             * @memberof com.message.PersonBonusMsg
             * @instance
             */
            PersonBonusMsg.prototype.info = "";

            /**
             * PersonBonusMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.PersonBonusMsg
             * @instance
             */
            PersonBonusMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified PersonBonusMsg message. Does not implicitly {@link com.message.PersonBonusMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.PersonBonusMsg
             * @static
             * @param {com.message.IPersonBonusMsg} message PersonBonusMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonBonusMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.diamondCount != null && message.hasOwnProperty("diamondCount"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.diamondCount);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.info);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.logTime);
                return writer;
            };

            /**
             * Decodes a PersonBonusMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.PersonBonusMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.PersonBonusMsg} PersonBonusMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersonBonusMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.PersonBonusMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.diamondCount = reader.double();
                        break;
                    case 2:
                        message.info = reader.string();
                        break;
                    case 3:
                        message.logTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PersonBonusMsg;
        })();

        message.C_GET_BONUS_INFO = (function() {

            /**
             * Properties of a C_GET_BONUS_INFO.
             * @memberof com.message
             * @interface IC_GET_BONUS_INFO
             */

            /**
             * Constructs a new C_GET_BONUS_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_BONUS_INFO.
             * @implements IC_GET_BONUS_INFO
             * @constructor
             * @param {com.message.IC_GET_BONUS_INFO=} [properties] Properties to set
             */
            function C_GET_BONUS_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_BONUS_INFO message. Does not implicitly {@link com.message.C_GET_BONUS_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_BONUS_INFO
             * @static
             * @param {com.message.IC_GET_BONUS_INFO} message C_GET_BONUS_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_BONUS_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_BONUS_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_BONUS_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_BONUS_INFO} C_GET_BONUS_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_BONUS_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_BONUS_INFO();
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

            return C_GET_BONUS_INFO;
        })();

        message.S_GET_BONUS_INFO = (function() {

            /**
             * Properties of a S_GET_BONUS_INFO.
             * @memberof com.message
             * @interface IS_GET_BONUS_INFO
             * @property {com.message.ISysBonusMsg|null} [sysBonusMsg] S_GET_BONUS_INFO sysBonusMsg
             * @property {Array.<com.message.IPersonBonusMsg>|null} [personBonusMsg] S_GET_BONUS_INFO personBonusMsg
             */

            /**
             * Constructs a new S_GET_BONUS_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_BONUS_INFO.
             * @implements IS_GET_BONUS_INFO
             * @constructor
             * @param {com.message.IS_GET_BONUS_INFO=} [properties] Properties to set
             */
            function S_GET_BONUS_INFO(properties) {
                this.personBonusMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_BONUS_INFO sysBonusMsg.
             * @member {com.message.ISysBonusMsg|null|undefined} sysBonusMsg
             * @memberof com.message.S_GET_BONUS_INFO
             * @instance
             */
            S_GET_BONUS_INFO.prototype.sysBonusMsg = null;

            /**
             * S_GET_BONUS_INFO personBonusMsg.
             * @member {Array.<com.message.IPersonBonusMsg>} personBonusMsg
             * @memberof com.message.S_GET_BONUS_INFO
             * @instance
             */
            S_GET_BONUS_INFO.prototype.personBonusMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_BONUS_INFO message. Does not implicitly {@link com.message.S_GET_BONUS_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_BONUS_INFO
             * @static
             * @param {com.message.IS_GET_BONUS_INFO} message S_GET_BONUS_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_BONUS_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sysBonusMsg != null && message.hasOwnProperty("sysBonusMsg"))
                    $root.com.message.SysBonusMsg.encode(message.sysBonusMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.personBonusMsg != null && message.personBonusMsg.length)
                    for (var i = 0; i < message.personBonusMsg.length; ++i)
                        $root.com.message.PersonBonusMsg.encode(message.personBonusMsg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_BONUS_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_BONUS_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_BONUS_INFO} S_GET_BONUS_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_BONUS_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_BONUS_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sysBonusMsg = $root.com.message.SysBonusMsg.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.personBonusMsg && message.personBonusMsg.length))
                            message.personBonusMsg = [];
                        message.personBonusMsg.push($root.com.message.PersonBonusMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_BONUS_INFO;
        })();

        message.PersonInjectMsg = (function() {

            /**
             * Properties of a PersonInjectMsg.
             * @memberof com.message
             * @interface IPersonInjectMsg
             * @property {number|null} [KADCount] PersonInjectMsg KADCount
             * @property {number|Long|null} [cycleId] PersonInjectMsg cycleId
             * @property {number|Long|null} [createTime] PersonInjectMsg createTime
             * @property {number|Long|null} [endTime] PersonInjectMsg endTime
             * @property {number|null} [state] PersonInjectMsg state
             */

            /**
             * Constructs a new PersonInjectMsg.
             * @memberof com.message
             * @classdesc Represents a PersonInjectMsg.
             * @implements IPersonInjectMsg
             * @constructor
             * @param {com.message.IPersonInjectMsg=} [properties] Properties to set
             */
            function PersonInjectMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersonInjectMsg KADCount.
             * @member {number} KADCount
             * @memberof com.message.PersonInjectMsg
             * @instance
             */
            PersonInjectMsg.prototype.KADCount = 0;

            /**
             * PersonInjectMsg cycleId.
             * @member {number|Long} cycleId
             * @memberof com.message.PersonInjectMsg
             * @instance
             */
            PersonInjectMsg.prototype.cycleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PersonInjectMsg createTime.
             * @member {number|Long} createTime
             * @memberof com.message.PersonInjectMsg
             * @instance
             */
            PersonInjectMsg.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PersonInjectMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.PersonInjectMsg
             * @instance
             */
            PersonInjectMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PersonInjectMsg state.
             * @member {number} state
             * @memberof com.message.PersonInjectMsg
             * @instance
             */
            PersonInjectMsg.prototype.state = 0;

            /**
             * Encodes the specified PersonInjectMsg message. Does not implicitly {@link com.message.PersonInjectMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.PersonInjectMsg
             * @static
             * @param {com.message.IPersonInjectMsg} message PersonInjectMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonInjectMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.KADCount != null && message.hasOwnProperty("KADCount"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.KADCount);
                if (message.cycleId != null && message.hasOwnProperty("cycleId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.cycleId);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createTime);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endTime);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
                return writer;
            };

            /**
             * Decodes a PersonInjectMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.PersonInjectMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.PersonInjectMsg} PersonInjectMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersonInjectMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.PersonInjectMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.KADCount = reader.double();
                        break;
                    case 2:
                        message.cycleId = reader.int64();
                        break;
                    case 3:
                        message.createTime = reader.int64();
                        break;
                    case 4:
                        message.endTime = reader.int64();
                        break;
                    case 5:
                        message.state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PersonInjectMsg;
        })();

        message.C_GET_INJECT_INFO = (function() {

            /**
             * Properties of a C_GET_INJECT_INFO.
             * @memberof com.message
             * @interface IC_GET_INJECT_INFO
             */

            /**
             * Constructs a new C_GET_INJECT_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_INJECT_INFO.
             * @implements IC_GET_INJECT_INFO
             * @constructor
             * @param {com.message.IC_GET_INJECT_INFO=} [properties] Properties to set
             */
            function C_GET_INJECT_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_INJECT_INFO message. Does not implicitly {@link com.message.C_GET_INJECT_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_INJECT_INFO
             * @static
             * @param {com.message.IC_GET_INJECT_INFO} message C_GET_INJECT_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_INJECT_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_INJECT_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_INJECT_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_INJECT_INFO} C_GET_INJECT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_INJECT_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_INJECT_INFO();
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

            return C_GET_INJECT_INFO;
        })();

        message.S_GET_INJECT_INFO = (function() {

            /**
             * Properties of a S_GET_INJECT_INFO.
             * @memberof com.message
             * @interface IS_GET_INJECT_INFO
             * @property {number|null} [allInject] S_GET_INJECT_INFO allInject
             * @property {Array.<com.message.IPersonInjectMsg>|null} [personInjectMsg] S_GET_INJECT_INFO personInjectMsg
             */

            /**
             * Constructs a new S_GET_INJECT_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_INJECT_INFO.
             * @implements IS_GET_INJECT_INFO
             * @constructor
             * @param {com.message.IS_GET_INJECT_INFO=} [properties] Properties to set
             */
            function S_GET_INJECT_INFO(properties) {
                this.personInjectMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_INJECT_INFO allInject.
             * @member {number} allInject
             * @memberof com.message.S_GET_INJECT_INFO
             * @instance
             */
            S_GET_INJECT_INFO.prototype.allInject = 0;

            /**
             * S_GET_INJECT_INFO personInjectMsg.
             * @member {Array.<com.message.IPersonInjectMsg>} personInjectMsg
             * @memberof com.message.S_GET_INJECT_INFO
             * @instance
             */
            S_GET_INJECT_INFO.prototype.personInjectMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_INJECT_INFO message. Does not implicitly {@link com.message.S_GET_INJECT_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_INJECT_INFO
             * @static
             * @param {com.message.IS_GET_INJECT_INFO} message S_GET_INJECT_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_INJECT_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allInject != null && message.hasOwnProperty("allInject"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.allInject);
                if (message.personInjectMsg != null && message.personInjectMsg.length)
                    for (var i = 0; i < message.personInjectMsg.length; ++i)
                        $root.com.message.PersonInjectMsg.encode(message.personInjectMsg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_INJECT_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_INJECT_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_INJECT_INFO} S_GET_INJECT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_INJECT_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_INJECT_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.allInject = reader.double();
                        break;
                    case 2:
                        if (!(message.personInjectMsg && message.personInjectMsg.length))
                            message.personInjectMsg = [];
                        message.personInjectMsg.push($root.com.message.PersonInjectMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_INJECT_INFO;
        })();

        message.C_INJECT_KAD = (function() {

            /**
             * Properties of a C_INJECT_KAD.
             * @memberof com.message
             * @interface IC_INJECT_KAD
             * @property {number|null} [KADCount] C_INJECT_KAD KADCount
             * @property {number|Long|null} [cycleId] C_INJECT_KAD cycleId
             */

            /**
             * Constructs a new C_INJECT_KAD.
             * @memberof com.message
             * @classdesc Represents a C_INJECT_KAD.
             * @implements IC_INJECT_KAD
             * @constructor
             * @param {com.message.IC_INJECT_KAD=} [properties] Properties to set
             */
            function C_INJECT_KAD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_INJECT_KAD KADCount.
             * @member {number} KADCount
             * @memberof com.message.C_INJECT_KAD
             * @instance
             */
            C_INJECT_KAD.prototype.KADCount = 0;

            /**
             * C_INJECT_KAD cycleId.
             * @member {number|Long} cycleId
             * @memberof com.message.C_INJECT_KAD
             * @instance
             */
            C_INJECT_KAD.prototype.cycleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_INJECT_KAD message. Does not implicitly {@link com.message.C_INJECT_KAD.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_INJECT_KAD
             * @static
             * @param {com.message.IC_INJECT_KAD} message C_INJECT_KAD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_INJECT_KAD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.KADCount != null && message.hasOwnProperty("KADCount"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.KADCount);
                if (message.cycleId != null && message.hasOwnProperty("cycleId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.cycleId);
                return writer;
            };

            /**
             * Decodes a C_INJECT_KAD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_INJECT_KAD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_INJECT_KAD} C_INJECT_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_INJECT_KAD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_INJECT_KAD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.KADCount = reader.double();
                        break;
                    case 2:
                        message.cycleId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_INJECT_KAD;
        })();

        message.S_INJECT_KAD = (function() {

            /**
             * Properties of a S_INJECT_KAD.
             * @memberof com.message
             * @interface IS_INJECT_KAD
             * @property {number|null} [allInject] S_INJECT_KAD allInject
             * @property {com.message.IPersonInjectMsg|null} [personInjectMsg] S_INJECT_KAD personInjectMsg
             */

            /**
             * Constructs a new S_INJECT_KAD.
             * @memberof com.message
             * @classdesc Represents a S_INJECT_KAD.
             * @implements IS_INJECT_KAD
             * @constructor
             * @param {com.message.IS_INJECT_KAD=} [properties] Properties to set
             */
            function S_INJECT_KAD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_INJECT_KAD allInject.
             * @member {number} allInject
             * @memberof com.message.S_INJECT_KAD
             * @instance
             */
            S_INJECT_KAD.prototype.allInject = 0;

            /**
             * S_INJECT_KAD personInjectMsg.
             * @member {com.message.IPersonInjectMsg|null|undefined} personInjectMsg
             * @memberof com.message.S_INJECT_KAD
             * @instance
             */
            S_INJECT_KAD.prototype.personInjectMsg = null;

            /**
             * Encodes the specified S_INJECT_KAD message. Does not implicitly {@link com.message.S_INJECT_KAD.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_INJECT_KAD
             * @static
             * @param {com.message.IS_INJECT_KAD} message S_INJECT_KAD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_INJECT_KAD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allInject != null && message.hasOwnProperty("allInject"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.allInject);
                if (message.personInjectMsg != null && message.hasOwnProperty("personInjectMsg"))
                    $root.com.message.PersonInjectMsg.encode(message.personInjectMsg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_INJECT_KAD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_INJECT_KAD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_INJECT_KAD} S_INJECT_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_INJECT_KAD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_INJECT_KAD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.allInject = reader.double();
                        break;
                    case 2:
                        message.personInjectMsg = $root.com.message.PersonInjectMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_INJECT_KAD;
        })();

        message.DolphinMsg = (function() {

            /**
             * Properties of a DolphinMsg.
             * @memberof com.message
             * @interface IDolphinMsg
             * @property {number|Long|null} [id] DolphinMsg id
             * @property {number|null} [state] DolphinMsg state
             * @property {number|Long|null} [endTime] DolphinMsg endTime
             * @property {number|Long|null} [createTime] DolphinMsg createTime
             */

            /**
             * Constructs a new DolphinMsg.
             * @memberof com.message
             * @classdesc Represents a DolphinMsg.
             * @implements IDolphinMsg
             * @constructor
             * @param {com.message.IDolphinMsg=} [properties] Properties to set
             */
            function DolphinMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DolphinMsg id.
             * @member {number|Long} id
             * @memberof com.message.DolphinMsg
             * @instance
             */
            DolphinMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinMsg state.
             * @member {number} state
             * @memberof com.message.DolphinMsg
             * @instance
             */
            DolphinMsg.prototype.state = 0;

            /**
             * DolphinMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.DolphinMsg
             * @instance
             */
            DolphinMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinMsg createTime.
             * @member {number|Long} createTime
             * @memberof com.message.DolphinMsg
             * @instance
             */
            DolphinMsg.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified DolphinMsg message. Does not implicitly {@link com.message.DolphinMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DolphinMsg
             * @static
             * @param {com.message.IDolphinMsg} message DolphinMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DolphinMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createTime);
                return writer;
            };

            /**
             * Decodes a DolphinMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DolphinMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DolphinMsg} DolphinMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DolphinMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DolphinMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.state = reader.int32();
                        break;
                    case 3:
                        message.endTime = reader.int64();
                        break;
                    case 4:
                        message.createTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DolphinMsg;
        })();

        message.C_GET_DOLPHIN_INFO = (function() {

            /**
             * Properties of a C_GET_DOLPHIN_INFO.
             * @memberof com.message
             * @interface IC_GET_DOLPHIN_INFO
             */

            /**
             * Constructs a new C_GET_DOLPHIN_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_DOLPHIN_INFO.
             * @implements IC_GET_DOLPHIN_INFO
             * @constructor
             * @param {com.message.IC_GET_DOLPHIN_INFO=} [properties] Properties to set
             */
            function C_GET_DOLPHIN_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DOLPHIN_INFO message. Does not implicitly {@link com.message.C_GET_DOLPHIN_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DOLPHIN_INFO
             * @static
             * @param {com.message.IC_GET_DOLPHIN_INFO} message C_GET_DOLPHIN_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DOLPHIN_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DOLPHIN_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DOLPHIN_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DOLPHIN_INFO} C_GET_DOLPHIN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DOLPHIN_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DOLPHIN_INFO();
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

            return C_GET_DOLPHIN_INFO;
        })();

        message.S_GET_DOLPHIN_INFO = (function() {

            /**
             * Properties of a S_GET_DOLPHIN_INFO.
             * @memberof com.message
             * @interface IS_GET_DOLPHIN_INFO
             * @property {Array.<com.message.IDolphinMsg>|null} [dolphinMsg] S_GET_DOLPHIN_INFO dolphinMsg
             */

            /**
             * Constructs a new S_GET_DOLPHIN_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_DOLPHIN_INFO.
             * @implements IS_GET_DOLPHIN_INFO
             * @constructor
             * @param {com.message.IS_GET_DOLPHIN_INFO=} [properties] Properties to set
             */
            function S_GET_DOLPHIN_INFO(properties) {
                this.dolphinMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DOLPHIN_INFO dolphinMsg.
             * @member {Array.<com.message.IDolphinMsg>} dolphinMsg
             * @memberof com.message.S_GET_DOLPHIN_INFO
             * @instance
             */
            S_GET_DOLPHIN_INFO.prototype.dolphinMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DOLPHIN_INFO message. Does not implicitly {@link com.message.S_GET_DOLPHIN_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DOLPHIN_INFO
             * @static
             * @param {com.message.IS_GET_DOLPHIN_INFO} message S_GET_DOLPHIN_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DOLPHIN_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinMsg != null && message.dolphinMsg.length)
                    for (var i = 0; i < message.dolphinMsg.length; ++i)
                        $root.com.message.DolphinMsg.encode(message.dolphinMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DOLPHIN_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DOLPHIN_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DOLPHIN_INFO} S_GET_DOLPHIN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DOLPHIN_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DOLPHIN_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.dolphinMsg && message.dolphinMsg.length))
                            message.dolphinMsg = [];
                        message.dolphinMsg.push($root.com.message.DolphinMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DOLPHIN_INFO;
        })();

        message.C_BUY_DOLPHIN = (function() {

            /**
             * Properties of a C_BUY_DOLPHIN.
             * @memberof com.message
             * @interface IC_BUY_DOLPHIN
             */

            /**
             * Constructs a new C_BUY_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a C_BUY_DOLPHIN.
             * @implements IC_BUY_DOLPHIN
             * @constructor
             * @param {com.message.IC_BUY_DOLPHIN=} [properties] Properties to set
             */
            function C_BUY_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_BUY_DOLPHIN message. Does not implicitly {@link com.message.C_BUY_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_BUY_DOLPHIN
             * @static
             * @param {com.message.IC_BUY_DOLPHIN} message C_BUY_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_BUY_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_BUY_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_BUY_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_BUY_DOLPHIN} C_BUY_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_BUY_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_BUY_DOLPHIN();
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

            return C_BUY_DOLPHIN;
        })();

        message.S_BUY_DOLPHIN = (function() {

            /**
             * Properties of a S_BUY_DOLPHIN.
             * @memberof com.message
             * @interface IS_BUY_DOLPHIN
             * @property {com.message.IDolphinMsg|null} [dolphinMsg] S_BUY_DOLPHIN dolphinMsg
             */

            /**
             * Constructs a new S_BUY_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a S_BUY_DOLPHIN.
             * @implements IS_BUY_DOLPHIN
             * @constructor
             * @param {com.message.IS_BUY_DOLPHIN=} [properties] Properties to set
             */
            function S_BUY_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_BUY_DOLPHIN dolphinMsg.
             * @member {com.message.IDolphinMsg|null|undefined} dolphinMsg
             * @memberof com.message.S_BUY_DOLPHIN
             * @instance
             */
            S_BUY_DOLPHIN.prototype.dolphinMsg = null;

            /**
             * Encodes the specified S_BUY_DOLPHIN message. Does not implicitly {@link com.message.S_BUY_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_BUY_DOLPHIN
             * @static
             * @param {com.message.IS_BUY_DOLPHIN} message S_BUY_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_BUY_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinMsg != null && message.hasOwnProperty("dolphinMsg"))
                    $root.com.message.DolphinMsg.encode(message.dolphinMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_BUY_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_BUY_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_BUY_DOLPHIN} S_BUY_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_BUY_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_BUY_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinMsg = $root.com.message.DolphinMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_BUY_DOLPHIN;
        })();

        message.C_QUICK_DOLPHIN = (function() {

            /**
             * Properties of a C_QUICK_DOLPHIN.
             * @memberof com.message
             * @interface IC_QUICK_DOLPHIN
             * @property {number|Long|null} [dolphinId] C_QUICK_DOLPHIN dolphinId
             */

            /**
             * Constructs a new C_QUICK_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a C_QUICK_DOLPHIN.
             * @implements IC_QUICK_DOLPHIN
             * @constructor
             * @param {com.message.IC_QUICK_DOLPHIN=} [properties] Properties to set
             */
            function C_QUICK_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_QUICK_DOLPHIN dolphinId.
             * @member {number|Long} dolphinId
             * @memberof com.message.C_QUICK_DOLPHIN
             * @instance
             */
            C_QUICK_DOLPHIN.prototype.dolphinId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_QUICK_DOLPHIN message. Does not implicitly {@link com.message.C_QUICK_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_QUICK_DOLPHIN
             * @static
             * @param {com.message.IC_QUICK_DOLPHIN} message C_QUICK_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_QUICK_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinId != null && message.hasOwnProperty("dolphinId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.dolphinId);
                return writer;
            };

            /**
             * Decodes a C_QUICK_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_QUICK_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_QUICK_DOLPHIN} C_QUICK_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_QUICK_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_QUICK_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_QUICK_DOLPHIN;
        })();

        message.S_QUICK_DOLPHIN = (function() {

            /**
             * Properties of a S_QUICK_DOLPHIN.
             * @memberof com.message
             * @interface IS_QUICK_DOLPHIN
             * @property {com.message.IDolphinMsg|null} [dolphinMsg] S_QUICK_DOLPHIN dolphinMsg
             */

            /**
             * Constructs a new S_QUICK_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a S_QUICK_DOLPHIN.
             * @implements IS_QUICK_DOLPHIN
             * @constructor
             * @param {com.message.IS_QUICK_DOLPHIN=} [properties] Properties to set
             */
            function S_QUICK_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_QUICK_DOLPHIN dolphinMsg.
             * @member {com.message.IDolphinMsg|null|undefined} dolphinMsg
             * @memberof com.message.S_QUICK_DOLPHIN
             * @instance
             */
            S_QUICK_DOLPHIN.prototype.dolphinMsg = null;

            /**
             * Encodes the specified S_QUICK_DOLPHIN message. Does not implicitly {@link com.message.S_QUICK_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_QUICK_DOLPHIN
             * @static
             * @param {com.message.IS_QUICK_DOLPHIN} message S_QUICK_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_QUICK_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinMsg != null && message.hasOwnProperty("dolphinMsg"))
                    $root.com.message.DolphinMsg.encode(message.dolphinMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_QUICK_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_QUICK_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_QUICK_DOLPHIN} S_QUICK_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_QUICK_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_QUICK_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinMsg = $root.com.message.DolphinMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_QUICK_DOLPHIN;
        })();

        message.C_HATCH_DOLPHIN = (function() {

            /**
             * Properties of a C_HATCH_DOLPHIN.
             * @memberof com.message
             * @interface IC_HATCH_DOLPHIN
             * @property {number|Long|null} [dolphinId] C_HATCH_DOLPHIN dolphinId
             */

            /**
             * Constructs a new C_HATCH_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a C_HATCH_DOLPHIN.
             * @implements IC_HATCH_DOLPHIN
             * @constructor
             * @param {com.message.IC_HATCH_DOLPHIN=} [properties] Properties to set
             */
            function C_HATCH_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_HATCH_DOLPHIN dolphinId.
             * @member {number|Long} dolphinId
             * @memberof com.message.C_HATCH_DOLPHIN
             * @instance
             */
            C_HATCH_DOLPHIN.prototype.dolphinId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_HATCH_DOLPHIN message. Does not implicitly {@link com.message.C_HATCH_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_HATCH_DOLPHIN
             * @static
             * @param {com.message.IC_HATCH_DOLPHIN} message C_HATCH_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_HATCH_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinId != null && message.hasOwnProperty("dolphinId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.dolphinId);
                return writer;
            };

            /**
             * Decodes a C_HATCH_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_HATCH_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_HATCH_DOLPHIN} C_HATCH_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_HATCH_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_HATCH_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_HATCH_DOLPHIN;
        })();

        message.S_HATCH_DOLPHIN = (function() {

            /**
             * Properties of a S_HATCH_DOLPHIN.
             * @memberof com.message
             * @interface IS_HATCH_DOLPHIN
             * @property {com.message.IDolphinMsg|null} [dolphinMsg] S_HATCH_DOLPHIN dolphinMsg
             */

            /**
             * Constructs a new S_HATCH_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a S_HATCH_DOLPHIN.
             * @implements IS_HATCH_DOLPHIN
             * @constructor
             * @param {com.message.IS_HATCH_DOLPHIN=} [properties] Properties to set
             */
            function S_HATCH_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_HATCH_DOLPHIN dolphinMsg.
             * @member {com.message.IDolphinMsg|null|undefined} dolphinMsg
             * @memberof com.message.S_HATCH_DOLPHIN
             * @instance
             */
            S_HATCH_DOLPHIN.prototype.dolphinMsg = null;

            /**
             * Encodes the specified S_HATCH_DOLPHIN message. Does not implicitly {@link com.message.S_HATCH_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_HATCH_DOLPHIN
             * @static
             * @param {com.message.IS_HATCH_DOLPHIN} message S_HATCH_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_HATCH_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinMsg != null && message.hasOwnProperty("dolphinMsg"))
                    $root.com.message.DolphinMsg.encode(message.dolphinMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_HATCH_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_HATCH_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_HATCH_DOLPHIN} S_HATCH_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_HATCH_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_HATCH_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinMsg = $root.com.message.DolphinMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_HATCH_DOLPHIN;
        })();

        message.C_FERTILIZE_DOLPHIN = (function() {

            /**
             * Properties of a C_FERTILIZE_DOLPHIN.
             * @memberof com.message
             * @interface IC_FERTILIZE_DOLPHIN
             * @property {number|Long|null} [dolphinId] C_FERTILIZE_DOLPHIN dolphinId
             */

            /**
             * Constructs a new C_FERTILIZE_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a C_FERTILIZE_DOLPHIN.
             * @implements IC_FERTILIZE_DOLPHIN
             * @constructor
             * @param {com.message.IC_FERTILIZE_DOLPHIN=} [properties] Properties to set
             */
            function C_FERTILIZE_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_FERTILIZE_DOLPHIN dolphinId.
             * @member {number|Long} dolphinId
             * @memberof com.message.C_FERTILIZE_DOLPHIN
             * @instance
             */
            C_FERTILIZE_DOLPHIN.prototype.dolphinId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_FERTILIZE_DOLPHIN message. Does not implicitly {@link com.message.C_FERTILIZE_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_FERTILIZE_DOLPHIN
             * @static
             * @param {com.message.IC_FERTILIZE_DOLPHIN} message C_FERTILIZE_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_FERTILIZE_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinId != null && message.hasOwnProperty("dolphinId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.dolphinId);
                return writer;
            };

            /**
             * Decodes a C_FERTILIZE_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_FERTILIZE_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_FERTILIZE_DOLPHIN} C_FERTILIZE_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_FERTILIZE_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_FERTILIZE_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_FERTILIZE_DOLPHIN;
        })();

        message.S_FERTILIZE_DOLPHIN = (function() {

            /**
             * Properties of a S_FERTILIZE_DOLPHIN.
             * @memberof com.message
             * @interface IS_FERTILIZE_DOLPHIN
             * @property {com.message.IDolphinMsg|null} [dolphinMsg] S_FERTILIZE_DOLPHIN dolphinMsg
             */

            /**
             * Constructs a new S_FERTILIZE_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a S_FERTILIZE_DOLPHIN.
             * @implements IS_FERTILIZE_DOLPHIN
             * @constructor
             * @param {com.message.IS_FERTILIZE_DOLPHIN=} [properties] Properties to set
             */
            function S_FERTILIZE_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_FERTILIZE_DOLPHIN dolphinMsg.
             * @member {com.message.IDolphinMsg|null|undefined} dolphinMsg
             * @memberof com.message.S_FERTILIZE_DOLPHIN
             * @instance
             */
            S_FERTILIZE_DOLPHIN.prototype.dolphinMsg = null;

            /**
             * Encodes the specified S_FERTILIZE_DOLPHIN message. Does not implicitly {@link com.message.S_FERTILIZE_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_FERTILIZE_DOLPHIN
             * @static
             * @param {com.message.IS_FERTILIZE_DOLPHIN} message S_FERTILIZE_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_FERTILIZE_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinMsg != null && message.hasOwnProperty("dolphinMsg"))
                    $root.com.message.DolphinMsg.encode(message.dolphinMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_FERTILIZE_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_FERTILIZE_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_FERTILIZE_DOLPHIN} S_FERTILIZE_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_FERTILIZE_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_FERTILIZE_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinMsg = $root.com.message.DolphinMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_FERTILIZE_DOLPHIN;
        })();

        message.DolphinMoneyLogMsg = (function() {

            /**
             * Properties of a DolphinMoneyLogMsg.
             * @memberof com.message
             * @interface IDolphinMoneyLogMsg
             * @property {number|Long|null} [playerId] DolphinMoneyLogMsg playerId
             * @property {number|Long|null} [srcPlayerId] DolphinMoneyLogMsg srcPlayerId
             * @property {number|null} [type] DolphinMoneyLogMsg type
             * @property {number|null} [beforeMoney] DolphinMoneyLogMsg beforeMoney
             * @property {number|null} [changeMoney] DolphinMoneyLogMsg changeMoney
             * @property {number|null} [afterMoney] DolphinMoneyLogMsg afterMoney
             * @property {number|Long|null} [logTime] DolphinMoneyLogMsg logTime
             * @property {string|null} [info] DolphinMoneyLogMsg info
             */

            /**
             * Constructs a new DolphinMoneyLogMsg.
             * @memberof com.message
             * @classdesc Represents a DolphinMoneyLogMsg.
             * @implements IDolphinMoneyLogMsg
             * @constructor
             * @param {com.message.IDolphinMoneyLogMsg=} [properties] Properties to set
             */
            function DolphinMoneyLogMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DolphinMoneyLogMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinMoneyLogMsg srcPlayerId.
             * @member {number|Long} srcPlayerId
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.srcPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinMoneyLogMsg type.
             * @member {number} type
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.type = 0;

            /**
             * DolphinMoneyLogMsg beforeMoney.
             * @member {number} beforeMoney
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.beforeMoney = 0;

            /**
             * DolphinMoneyLogMsg changeMoney.
             * @member {number} changeMoney
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.changeMoney = 0;

            /**
             * DolphinMoneyLogMsg afterMoney.
             * @member {number} afterMoney
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.afterMoney = 0;

            /**
             * DolphinMoneyLogMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinMoneyLogMsg info.
             * @member {string} info
             * @memberof com.message.DolphinMoneyLogMsg
             * @instance
             */
            DolphinMoneyLogMsg.prototype.info = "";

            /**
             * Encodes the specified DolphinMoneyLogMsg message. Does not implicitly {@link com.message.DolphinMoneyLogMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DolphinMoneyLogMsg
             * @static
             * @param {com.message.IDolphinMoneyLogMsg} message DolphinMoneyLogMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DolphinMoneyLogMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.srcPlayerId != null && message.hasOwnProperty("srcPlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.srcPlayerId);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                if (message.beforeMoney != null && message.hasOwnProperty("beforeMoney"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.beforeMoney);
                if (message.changeMoney != null && message.hasOwnProperty("changeMoney"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.changeMoney);
                if (message.afterMoney != null && message.hasOwnProperty("afterMoney"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.afterMoney);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.logTime);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.info);
                return writer;
            };

            /**
             * Decodes a DolphinMoneyLogMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DolphinMoneyLogMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DolphinMoneyLogMsg} DolphinMoneyLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DolphinMoneyLogMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DolphinMoneyLogMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.srcPlayerId = reader.int64();
                        break;
                    case 4:
                        message.type = reader.int32();
                        break;
                    case 5:
                        message.beforeMoney = reader.double();
                        break;
                    case 6:
                        message.changeMoney = reader.double();
                        break;
                    case 7:
                        message.afterMoney = reader.double();
                        break;
                    case 8:
                        message.logTime = reader.int64();
                        break;
                    case 9:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DolphinMoneyLogMsg;
        })();

        message.C_GET_DOLPHIN_MONEY_LOG_LIST = (function() {

            /**
             * Properties of a C_GET_DOLPHIN_MONEY_LOG_LIST.
             * @memberof com.message
             * @interface IC_GET_DOLPHIN_MONEY_LOG_LIST
             */

            /**
             * Constructs a new C_GET_DOLPHIN_MONEY_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_DOLPHIN_MONEY_LOG_LIST.
             * @implements IC_GET_DOLPHIN_MONEY_LOG_LIST
             * @constructor
             * @param {com.message.IC_GET_DOLPHIN_MONEY_LOG_LIST=} [properties] Properties to set
             */
            function C_GET_DOLPHIN_MONEY_LOG_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DOLPHIN_MONEY_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DOLPHIN_MONEY_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DOLPHIN_MONEY_LOG_LIST
             * @static
             * @param {com.message.IC_GET_DOLPHIN_MONEY_LOG_LIST} message C_GET_DOLPHIN_MONEY_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DOLPHIN_MONEY_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DOLPHIN_MONEY_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DOLPHIN_MONEY_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DOLPHIN_MONEY_LOG_LIST} C_GET_DOLPHIN_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DOLPHIN_MONEY_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DOLPHIN_MONEY_LOG_LIST();
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

            return C_GET_DOLPHIN_MONEY_LOG_LIST;
        })();

        message.S_GET_DOLPHIN_MONEY_LOG_LIST = (function() {

            /**
             * Properties of a S_GET_DOLPHIN_MONEY_LOG_LIST.
             * @memberof com.message
             * @interface IS_GET_DOLPHIN_MONEY_LOG_LIST
             * @property {Array.<com.message.IDolphinMoneyLogMsg>|null} [moneyLogMsg] S_GET_DOLPHIN_MONEY_LOG_LIST moneyLogMsg
             */

            /**
             * Constructs a new S_GET_DOLPHIN_MONEY_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_DOLPHIN_MONEY_LOG_LIST.
             * @implements IS_GET_DOLPHIN_MONEY_LOG_LIST
             * @constructor
             * @param {com.message.IS_GET_DOLPHIN_MONEY_LOG_LIST=} [properties] Properties to set
             */
            function S_GET_DOLPHIN_MONEY_LOG_LIST(properties) {
                this.moneyLogMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DOLPHIN_MONEY_LOG_LIST moneyLogMsg.
             * @member {Array.<com.message.IDolphinMoneyLogMsg>} moneyLogMsg
             * @memberof com.message.S_GET_DOLPHIN_MONEY_LOG_LIST
             * @instance
             */
            S_GET_DOLPHIN_MONEY_LOG_LIST.prototype.moneyLogMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DOLPHIN_MONEY_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DOLPHIN_MONEY_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DOLPHIN_MONEY_LOG_LIST
             * @static
             * @param {com.message.IS_GET_DOLPHIN_MONEY_LOG_LIST} message S_GET_DOLPHIN_MONEY_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DOLPHIN_MONEY_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.moneyLogMsg != null && message.moneyLogMsg.length)
                    for (var i = 0; i < message.moneyLogMsg.length; ++i)
                        $root.com.message.DolphinMoneyLogMsg.encode(message.moneyLogMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DOLPHIN_MONEY_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DOLPHIN_MONEY_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DOLPHIN_MONEY_LOG_LIST} S_GET_DOLPHIN_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DOLPHIN_MONEY_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DOLPHIN_MONEY_LOG_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.moneyLogMsg && message.moneyLogMsg.length))
                            message.moneyLogMsg = [];
                        message.moneyLogMsg.push($root.com.message.DolphinMoneyLogMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DOLPHIN_MONEY_LOG_LIST;
        })();

        message.DolphinBuyCountLogMsg = (function() {

            /**
             * Properties of a DolphinBuyCountLogMsg.
             * @memberof com.message
             * @interface IDolphinBuyCountLogMsg
             * @property {number|Long|null} [playerId] DolphinBuyCountLogMsg playerId
             * @property {number|Long|null} [srcPlayerId] DolphinBuyCountLogMsg srcPlayerId
             * @property {number|null} [type] DolphinBuyCountLogMsg type
             * @property {number|null} [beforeMoney] DolphinBuyCountLogMsg beforeMoney
             * @property {number|null} [changeMoney] DolphinBuyCountLogMsg changeMoney
             * @property {number|null} [afterMoney] DolphinBuyCountLogMsg afterMoney
             * @property {number|Long|null} [logTime] DolphinBuyCountLogMsg logTime
             * @property {string|null} [info] DolphinBuyCountLogMsg info
             */

            /**
             * Constructs a new DolphinBuyCountLogMsg.
             * @memberof com.message
             * @classdesc Represents a DolphinBuyCountLogMsg.
             * @implements IDolphinBuyCountLogMsg
             * @constructor
             * @param {com.message.IDolphinBuyCountLogMsg=} [properties] Properties to set
             */
            function DolphinBuyCountLogMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DolphinBuyCountLogMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinBuyCountLogMsg srcPlayerId.
             * @member {number|Long} srcPlayerId
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.srcPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinBuyCountLogMsg type.
             * @member {number} type
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.type = 0;

            /**
             * DolphinBuyCountLogMsg beforeMoney.
             * @member {number} beforeMoney
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.beforeMoney = 0;

            /**
             * DolphinBuyCountLogMsg changeMoney.
             * @member {number} changeMoney
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.changeMoney = 0;

            /**
             * DolphinBuyCountLogMsg afterMoney.
             * @member {number} afterMoney
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.afterMoney = 0;

            /**
             * DolphinBuyCountLogMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinBuyCountLogMsg info.
             * @member {string} info
             * @memberof com.message.DolphinBuyCountLogMsg
             * @instance
             */
            DolphinBuyCountLogMsg.prototype.info = "";

            /**
             * Encodes the specified DolphinBuyCountLogMsg message. Does not implicitly {@link com.message.DolphinBuyCountLogMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DolphinBuyCountLogMsg
             * @static
             * @param {com.message.IDolphinBuyCountLogMsg} message DolphinBuyCountLogMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DolphinBuyCountLogMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.srcPlayerId != null && message.hasOwnProperty("srcPlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.srcPlayerId);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                if (message.beforeMoney != null && message.hasOwnProperty("beforeMoney"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.beforeMoney);
                if (message.changeMoney != null && message.hasOwnProperty("changeMoney"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.changeMoney);
                if (message.afterMoney != null && message.hasOwnProperty("afterMoney"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.afterMoney);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.logTime);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.info);
                return writer;
            };

            /**
             * Decodes a DolphinBuyCountLogMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DolphinBuyCountLogMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DolphinBuyCountLogMsg} DolphinBuyCountLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DolphinBuyCountLogMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DolphinBuyCountLogMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.srcPlayerId = reader.int64();
                        break;
                    case 4:
                        message.type = reader.int32();
                        break;
                    case 5:
                        message.beforeMoney = reader.int32();
                        break;
                    case 6:
                        message.changeMoney = reader.int32();
                        break;
                    case 7:
                        message.afterMoney = reader.int32();
                        break;
                    case 8:
                        message.logTime = reader.int64();
                        break;
                    case 9:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DolphinBuyCountLogMsg;
        })();

        message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST = (function() {

            /**
             * Properties of a C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @memberof com.message
             * @interface IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             */

            /**
             * Constructs a new C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @implements IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @constructor
             * @param {com.message.IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST=} [properties] Properties to set
             */
            function C_GET_DOLPHIN_BUYCOUNT_LOG_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DOLPHIN_BUYCOUNT_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @static
             * @param {com.message.IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST} message C_GET_DOLPHIN_BUYCOUNT_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DOLPHIN_BUYCOUNT_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST} C_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST();
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

            return C_GET_DOLPHIN_BUYCOUNT_LOG_LIST;
        })();

        message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST = (function() {

            /**
             * Properties of a S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @memberof com.message
             * @interface IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @property {Array.<com.message.IDolphinBuyCountLogMsg>|null} [buyCountLogMsg] S_GET_DOLPHIN_BUYCOUNT_LOG_LIST buyCountLogMsg
             */

            /**
             * Constructs a new S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @implements IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @constructor
             * @param {com.message.IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST=} [properties] Properties to set
             */
            function S_GET_DOLPHIN_BUYCOUNT_LOG_LIST(properties) {
                this.buyCountLogMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DOLPHIN_BUYCOUNT_LOG_LIST buyCountLogMsg.
             * @member {Array.<com.message.IDolphinBuyCountLogMsg>} buyCountLogMsg
             * @memberof com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @instance
             */
            S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.prototype.buyCountLogMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DOLPHIN_BUYCOUNT_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @static
             * @param {com.message.IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST} message S_GET_DOLPHIN_BUYCOUNT_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyCountLogMsg != null && message.buyCountLogMsg.length)
                    for (var i = 0; i < message.buyCountLogMsg.length; ++i)
                        $root.com.message.DolphinBuyCountLogMsg.encode(message.buyCountLogMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DOLPHIN_BUYCOUNT_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST} S_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.buyCountLogMsg && message.buyCountLogMsg.length))
                            message.buyCountLogMsg = [];
                        message.buyCountLogMsg.push($root.com.message.DolphinBuyCountLogMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DOLPHIN_BUYCOUNT_LOG_LIST;
        })();

        message.DolphinSpeedCountLogMsg = (function() {

            /**
             * Properties of a DolphinSpeedCountLogMsg.
             * @memberof com.message
             * @interface IDolphinSpeedCountLogMsg
             * @property {number|Long|null} [playerId] DolphinSpeedCountLogMsg playerId
             * @property {number|Long|null} [srcPlayerId] DolphinSpeedCountLogMsg srcPlayerId
             * @property {number|null} [type] DolphinSpeedCountLogMsg type
             * @property {number|null} [beforeMoney] DolphinSpeedCountLogMsg beforeMoney
             * @property {number|null} [changeMoney] DolphinSpeedCountLogMsg changeMoney
             * @property {number|null} [afterMoney] DolphinSpeedCountLogMsg afterMoney
             * @property {number|Long|null} [logTime] DolphinSpeedCountLogMsg logTime
             * @property {string|null} [info] DolphinSpeedCountLogMsg info
             */

            /**
             * Constructs a new DolphinSpeedCountLogMsg.
             * @memberof com.message
             * @classdesc Represents a DolphinSpeedCountLogMsg.
             * @implements IDolphinSpeedCountLogMsg
             * @constructor
             * @param {com.message.IDolphinSpeedCountLogMsg=} [properties] Properties to set
             */
            function DolphinSpeedCountLogMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DolphinSpeedCountLogMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinSpeedCountLogMsg srcPlayerId.
             * @member {number|Long} srcPlayerId
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.srcPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinSpeedCountLogMsg type.
             * @member {number} type
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.type = 0;

            /**
             * DolphinSpeedCountLogMsg beforeMoney.
             * @member {number} beforeMoney
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.beforeMoney = 0;

            /**
             * DolphinSpeedCountLogMsg changeMoney.
             * @member {number} changeMoney
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.changeMoney = 0;

            /**
             * DolphinSpeedCountLogMsg afterMoney.
             * @member {number} afterMoney
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.afterMoney = 0;

            /**
             * DolphinSpeedCountLogMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinSpeedCountLogMsg info.
             * @member {string} info
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @instance
             */
            DolphinSpeedCountLogMsg.prototype.info = "";

            /**
             * Encodes the specified DolphinSpeedCountLogMsg message. Does not implicitly {@link com.message.DolphinSpeedCountLogMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @static
             * @param {com.message.IDolphinSpeedCountLogMsg} message DolphinSpeedCountLogMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DolphinSpeedCountLogMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.srcPlayerId != null && message.hasOwnProperty("srcPlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.srcPlayerId);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                if (message.beforeMoney != null && message.hasOwnProperty("beforeMoney"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.beforeMoney);
                if (message.changeMoney != null && message.hasOwnProperty("changeMoney"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.changeMoney);
                if (message.afterMoney != null && message.hasOwnProperty("afterMoney"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.afterMoney);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.logTime);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.info);
                return writer;
            };

            /**
             * Decodes a DolphinSpeedCountLogMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DolphinSpeedCountLogMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DolphinSpeedCountLogMsg} DolphinSpeedCountLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DolphinSpeedCountLogMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DolphinSpeedCountLogMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.srcPlayerId = reader.int64();
                        break;
                    case 4:
                        message.type = reader.int32();
                        break;
                    case 5:
                        message.beforeMoney = reader.int32();
                        break;
                    case 6:
                        message.changeMoney = reader.int32();
                        break;
                    case 7:
                        message.afterMoney = reader.int32();
                        break;
                    case 8:
                        message.logTime = reader.int64();
                        break;
                    case 9:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DolphinSpeedCountLogMsg;
        })();

        message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST = (function() {

            /**
             * Properties of a C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @memberof com.message
             * @interface IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             */

            /**
             * Constructs a new C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @implements IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @constructor
             * @param {com.message.IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST=} [properties] Properties to set
             */
            function C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @static
             * @param {com.message.IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST} message C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST} C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST();
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

            return C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST;
        })();

        message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST = (function() {

            /**
             * Properties of a S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @memberof com.message
             * @interface IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @property {Array.<com.message.IDolphinSpeedCountLogMsg>|null} [speedCountLogMsg] S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST speedCountLogMsg
             */

            /**
             * Constructs a new S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @implements IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @constructor
             * @param {com.message.IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST=} [properties] Properties to set
             */
            function S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST(properties) {
                this.speedCountLogMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST speedCountLogMsg.
             * @member {Array.<com.message.IDolphinSpeedCountLogMsg>} speedCountLogMsg
             * @memberof com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @instance
             */
            S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.prototype.speedCountLogMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @static
             * @param {com.message.IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST} message S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.speedCountLogMsg != null && message.speedCountLogMsg.length)
                    for (var i = 0; i < message.speedCountLogMsg.length; ++i)
                        $root.com.message.DolphinSpeedCountLogMsg.encode(message.speedCountLogMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST} S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.speedCountLogMsg && message.speedCountLogMsg.length))
                            message.speedCountLogMsg = [];
                        message.speedCountLogMsg.push($root.com.message.DolphinSpeedCountLogMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST;
        })();

        message.C_EXCHANGE_DOLPHIN_MONEY = (function() {

            /**
             * Properties of a C_EXCHANGE_DOLPHIN_MONEY.
             * @memberof com.message
             * @interface IC_EXCHANGE_DOLPHIN_MONEY
             * @property {number|null} [exchangeCount] C_EXCHANGE_DOLPHIN_MONEY exchangeCount
             */

            /**
             * Constructs a new C_EXCHANGE_DOLPHIN_MONEY.
             * @memberof com.message
             * @classdesc Represents a C_EXCHANGE_DOLPHIN_MONEY.
             * @implements IC_EXCHANGE_DOLPHIN_MONEY
             * @constructor
             * @param {com.message.IC_EXCHANGE_DOLPHIN_MONEY=} [properties] Properties to set
             */
            function C_EXCHANGE_DOLPHIN_MONEY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_EXCHANGE_DOLPHIN_MONEY exchangeCount.
             * @member {number} exchangeCount
             * @memberof com.message.C_EXCHANGE_DOLPHIN_MONEY
             * @instance
             */
            C_EXCHANGE_DOLPHIN_MONEY.prototype.exchangeCount = 0;

            /**
             * Encodes the specified C_EXCHANGE_DOLPHIN_MONEY message. Does not implicitly {@link com.message.C_EXCHANGE_DOLPHIN_MONEY.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_EXCHANGE_DOLPHIN_MONEY
             * @static
             * @param {com.message.IC_EXCHANGE_DOLPHIN_MONEY} message C_EXCHANGE_DOLPHIN_MONEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_EXCHANGE_DOLPHIN_MONEY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.exchangeCount != null && message.hasOwnProperty("exchangeCount"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.exchangeCount);
                return writer;
            };

            /**
             * Decodes a C_EXCHANGE_DOLPHIN_MONEY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_EXCHANGE_DOLPHIN_MONEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_EXCHANGE_DOLPHIN_MONEY} C_EXCHANGE_DOLPHIN_MONEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_EXCHANGE_DOLPHIN_MONEY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_EXCHANGE_DOLPHIN_MONEY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.exchangeCount = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_EXCHANGE_DOLPHIN_MONEY;
        })();

        message.S_EXCHANGE_DOLPHIN_MONEY = (function() {

            /**
             * Properties of a S_EXCHANGE_DOLPHIN_MONEY.
             * @memberof com.message
             * @interface IS_EXCHANGE_DOLPHIN_MONEY
             * @property {number|null} [exchangeCount] S_EXCHANGE_DOLPHIN_MONEY exchangeCount
             * @property {number|null} [dolphinBuyCount] S_EXCHANGE_DOLPHIN_MONEY dolphinBuyCount
             * @property {number|null} [dolphinMoney] S_EXCHANGE_DOLPHIN_MONEY dolphinMoney
             */

            /**
             * Constructs a new S_EXCHANGE_DOLPHIN_MONEY.
             * @memberof com.message
             * @classdesc Represents a S_EXCHANGE_DOLPHIN_MONEY.
             * @implements IS_EXCHANGE_DOLPHIN_MONEY
             * @constructor
             * @param {com.message.IS_EXCHANGE_DOLPHIN_MONEY=} [properties] Properties to set
             */
            function S_EXCHANGE_DOLPHIN_MONEY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_EXCHANGE_DOLPHIN_MONEY exchangeCount.
             * @member {number} exchangeCount
             * @memberof com.message.S_EXCHANGE_DOLPHIN_MONEY
             * @instance
             */
            S_EXCHANGE_DOLPHIN_MONEY.prototype.exchangeCount = 0;

            /**
             * S_EXCHANGE_DOLPHIN_MONEY dolphinBuyCount.
             * @member {number} dolphinBuyCount
             * @memberof com.message.S_EXCHANGE_DOLPHIN_MONEY
             * @instance
             */
            S_EXCHANGE_DOLPHIN_MONEY.prototype.dolphinBuyCount = 0;

            /**
             * S_EXCHANGE_DOLPHIN_MONEY dolphinMoney.
             * @member {number} dolphinMoney
             * @memberof com.message.S_EXCHANGE_DOLPHIN_MONEY
             * @instance
             */
            S_EXCHANGE_DOLPHIN_MONEY.prototype.dolphinMoney = 0;

            /**
             * Encodes the specified S_EXCHANGE_DOLPHIN_MONEY message. Does not implicitly {@link com.message.S_EXCHANGE_DOLPHIN_MONEY.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_EXCHANGE_DOLPHIN_MONEY
             * @static
             * @param {com.message.IS_EXCHANGE_DOLPHIN_MONEY} message S_EXCHANGE_DOLPHIN_MONEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_EXCHANGE_DOLPHIN_MONEY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.exchangeCount != null && message.hasOwnProperty("exchangeCount"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.exchangeCount);
                if (message.dolphinBuyCount != null && message.hasOwnProperty("dolphinBuyCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dolphinBuyCount);
                if (message.dolphinMoney != null && message.hasOwnProperty("dolphinMoney"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.dolphinMoney);
                return writer;
            };

            /**
             * Decodes a S_EXCHANGE_DOLPHIN_MONEY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_EXCHANGE_DOLPHIN_MONEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_EXCHANGE_DOLPHIN_MONEY} S_EXCHANGE_DOLPHIN_MONEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_EXCHANGE_DOLPHIN_MONEY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_EXCHANGE_DOLPHIN_MONEY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.exchangeCount = reader.int32();
                        break;
                    case 2:
                        message.dolphinBuyCount = reader.int32();
                        break;
                    case 3:
                        message.dolphinMoney = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_EXCHANGE_DOLPHIN_MONEY;
        })();

        message.S_SYNC_NEW_DOLPHIN = (function() {

            /**
             * Properties of a S_SYNC_NEW_DOLPHIN.
             * @memberof com.message
             * @interface IS_SYNC_NEW_DOLPHIN
             * @property {com.message.IDolphinMsg|null} [dolphinOneMsg] S_SYNC_NEW_DOLPHIN dolphinOneMsg
             * @property {com.message.IDolphinMsg|null} [dolphinTwoMsg] S_SYNC_NEW_DOLPHIN dolphinTwoMsg
             */

            /**
             * Constructs a new S_SYNC_NEW_DOLPHIN.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_NEW_DOLPHIN.
             * @implements IS_SYNC_NEW_DOLPHIN
             * @constructor
             * @param {com.message.IS_SYNC_NEW_DOLPHIN=} [properties] Properties to set
             */
            function S_SYNC_NEW_DOLPHIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_NEW_DOLPHIN dolphinOneMsg.
             * @member {com.message.IDolphinMsg|null|undefined} dolphinOneMsg
             * @memberof com.message.S_SYNC_NEW_DOLPHIN
             * @instance
             */
            S_SYNC_NEW_DOLPHIN.prototype.dolphinOneMsg = null;

            /**
             * S_SYNC_NEW_DOLPHIN dolphinTwoMsg.
             * @member {com.message.IDolphinMsg|null|undefined} dolphinTwoMsg
             * @memberof com.message.S_SYNC_NEW_DOLPHIN
             * @instance
             */
            S_SYNC_NEW_DOLPHIN.prototype.dolphinTwoMsg = null;

            /**
             * Encodes the specified S_SYNC_NEW_DOLPHIN message. Does not implicitly {@link com.message.S_SYNC_NEW_DOLPHIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_NEW_DOLPHIN
             * @static
             * @param {com.message.IS_SYNC_NEW_DOLPHIN} message S_SYNC_NEW_DOLPHIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_NEW_DOLPHIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinOneMsg != null && message.hasOwnProperty("dolphinOneMsg"))
                    $root.com.message.DolphinMsg.encode(message.dolphinOneMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.dolphinTwoMsg != null && message.hasOwnProperty("dolphinTwoMsg"))
                    $root.com.message.DolphinMsg.encode(message.dolphinTwoMsg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYNC_NEW_DOLPHIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_NEW_DOLPHIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_NEW_DOLPHIN} S_SYNC_NEW_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_NEW_DOLPHIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_NEW_DOLPHIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinOneMsg = $root.com.message.DolphinMsg.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.dolphinTwoMsg = $root.com.message.DolphinMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_NEW_DOLPHIN;
        })();

        message.C_GET_SIGN_IN_INFO = (function() {

            /**
             * Properties of a C_GET_SIGN_IN_INFO.
             * @memberof com.message
             * @interface IC_GET_SIGN_IN_INFO
             */

            /**
             * Constructs a new C_GET_SIGN_IN_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_SIGN_IN_INFO.
             * @implements IC_GET_SIGN_IN_INFO
             * @constructor
             * @param {com.message.IC_GET_SIGN_IN_INFO=} [properties] Properties to set
             */
            function C_GET_SIGN_IN_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_SIGN_IN_INFO message. Does not implicitly {@link com.message.C_GET_SIGN_IN_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_SIGN_IN_INFO
             * @static
             * @param {com.message.IC_GET_SIGN_IN_INFO} message C_GET_SIGN_IN_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_SIGN_IN_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_SIGN_IN_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_SIGN_IN_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_SIGN_IN_INFO} C_GET_SIGN_IN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_SIGN_IN_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_SIGN_IN_INFO();
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

            return C_GET_SIGN_IN_INFO;
        })();

        message.S_GET_SIGN_IN_INFO = (function() {

            /**
             * Properties of a S_GET_SIGN_IN_INFO.
             * @memberof com.message
             * @interface IS_GET_SIGN_IN_INFO
             * @property {number|null} [dolphinMoney] S_GET_SIGN_IN_INFO dolphinMoney
             * @property {number|Long|null} [lastTime] S_GET_SIGN_IN_INFO lastTime
             */

            /**
             * Constructs a new S_GET_SIGN_IN_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_SIGN_IN_INFO.
             * @implements IS_GET_SIGN_IN_INFO
             * @constructor
             * @param {com.message.IS_GET_SIGN_IN_INFO=} [properties] Properties to set
             */
            function S_GET_SIGN_IN_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_SIGN_IN_INFO dolphinMoney.
             * @member {number} dolphinMoney
             * @memberof com.message.S_GET_SIGN_IN_INFO
             * @instance
             */
            S_GET_SIGN_IN_INFO.prototype.dolphinMoney = 0;

            /**
             * S_GET_SIGN_IN_INFO lastTime.
             * @member {number|Long} lastTime
             * @memberof com.message.S_GET_SIGN_IN_INFO
             * @instance
             */
            S_GET_SIGN_IN_INFO.prototype.lastTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified S_GET_SIGN_IN_INFO message. Does not implicitly {@link com.message.S_GET_SIGN_IN_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_SIGN_IN_INFO
             * @static
             * @param {com.message.IS_GET_SIGN_IN_INFO} message S_GET_SIGN_IN_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_SIGN_IN_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinMoney != null && message.hasOwnProperty("dolphinMoney"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.dolphinMoney);
                if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastTime);
                return writer;
            };

            /**
             * Decodes a S_GET_SIGN_IN_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_SIGN_IN_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_SIGN_IN_INFO} S_GET_SIGN_IN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_SIGN_IN_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_SIGN_IN_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinMoney = reader.double();
                        break;
                    case 2:
                        message.lastTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_SIGN_IN_INFO;
        })();

        message.C_GET_SIGN_IN_REWARD = (function() {

            /**
             * Properties of a C_GET_SIGN_IN_REWARD.
             * @memberof com.message
             * @interface IC_GET_SIGN_IN_REWARD
             */

            /**
             * Constructs a new C_GET_SIGN_IN_REWARD.
             * @memberof com.message
             * @classdesc Represents a C_GET_SIGN_IN_REWARD.
             * @implements IC_GET_SIGN_IN_REWARD
             * @constructor
             * @param {com.message.IC_GET_SIGN_IN_REWARD=} [properties] Properties to set
             */
            function C_GET_SIGN_IN_REWARD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_SIGN_IN_REWARD message. Does not implicitly {@link com.message.C_GET_SIGN_IN_REWARD.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_SIGN_IN_REWARD
             * @static
             * @param {com.message.IC_GET_SIGN_IN_REWARD} message C_GET_SIGN_IN_REWARD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_SIGN_IN_REWARD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_SIGN_IN_REWARD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_SIGN_IN_REWARD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_SIGN_IN_REWARD} C_GET_SIGN_IN_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_SIGN_IN_REWARD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_SIGN_IN_REWARD();
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

            return C_GET_SIGN_IN_REWARD;
        })();

        message.S_GET_SIGN_IN_REWARD = (function() {

            /**
             * Properties of a S_GET_SIGN_IN_REWARD.
             * @memberof com.message
             * @interface IS_GET_SIGN_IN_REWARD
             * @property {number|null} [dolphinMoney] S_GET_SIGN_IN_REWARD dolphinMoney
             * @property {number|Long|null} [lastTime] S_GET_SIGN_IN_REWARD lastTime
             */

            /**
             * Constructs a new S_GET_SIGN_IN_REWARD.
             * @memberof com.message
             * @classdesc Represents a S_GET_SIGN_IN_REWARD.
             * @implements IS_GET_SIGN_IN_REWARD
             * @constructor
             * @param {com.message.IS_GET_SIGN_IN_REWARD=} [properties] Properties to set
             */
            function S_GET_SIGN_IN_REWARD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_SIGN_IN_REWARD dolphinMoney.
             * @member {number} dolphinMoney
             * @memberof com.message.S_GET_SIGN_IN_REWARD
             * @instance
             */
            S_GET_SIGN_IN_REWARD.prototype.dolphinMoney = 0;

            /**
             * S_GET_SIGN_IN_REWARD lastTime.
             * @member {number|Long} lastTime
             * @memberof com.message.S_GET_SIGN_IN_REWARD
             * @instance
             */
            S_GET_SIGN_IN_REWARD.prototype.lastTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified S_GET_SIGN_IN_REWARD message. Does not implicitly {@link com.message.S_GET_SIGN_IN_REWARD.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_SIGN_IN_REWARD
             * @static
             * @param {com.message.IS_GET_SIGN_IN_REWARD} message S_GET_SIGN_IN_REWARD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_SIGN_IN_REWARD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinMoney != null && message.hasOwnProperty("dolphinMoney"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.dolphinMoney);
                if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastTime);
                return writer;
            };

            /**
             * Decodes a S_GET_SIGN_IN_REWARD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_SIGN_IN_REWARD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_SIGN_IN_REWARD} S_GET_SIGN_IN_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_SIGN_IN_REWARD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_SIGN_IN_REWARD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dolphinMoney = reader.double();
                        break;
                    case 2:
                        message.lastTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_SIGN_IN_REWARD;
        })();

        message.DolphinWaitMsg = (function() {

            /**
             * Properties of a DolphinWaitMsg.
             * @memberof com.message
             * @interface IDolphinWaitMsg
             * @property {number|Long|null} [playerId] DolphinWaitMsg playerId
             * @property {string|null} [mobile] DolphinWaitMsg mobile
             * @property {number|Long|null} [id] DolphinWaitMsg id
             * @property {number|null} [state] DolphinWaitMsg state
             * @property {number|Long|null} [endTime] DolphinWaitMsg endTime
             * @property {number|Long|null} [createTime] DolphinWaitMsg createTime
             */

            /**
             * Constructs a new DolphinWaitMsg.
             * @memberof com.message
             * @classdesc Represents a DolphinWaitMsg.
             * @implements IDolphinWaitMsg
             * @constructor
             * @param {com.message.IDolphinWaitMsg=} [properties] Properties to set
             */
            function DolphinWaitMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DolphinWaitMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.DolphinWaitMsg
             * @instance
             */
            DolphinWaitMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinWaitMsg mobile.
             * @member {string} mobile
             * @memberof com.message.DolphinWaitMsg
             * @instance
             */
            DolphinWaitMsg.prototype.mobile = "";

            /**
             * DolphinWaitMsg id.
             * @member {number|Long} id
             * @memberof com.message.DolphinWaitMsg
             * @instance
             */
            DolphinWaitMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinWaitMsg state.
             * @member {number} state
             * @memberof com.message.DolphinWaitMsg
             * @instance
             */
            DolphinWaitMsg.prototype.state = 0;

            /**
             * DolphinWaitMsg endTime.
             * @member {number|Long} endTime
             * @memberof com.message.DolphinWaitMsg
             * @instance
             */
            DolphinWaitMsg.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DolphinWaitMsg createTime.
             * @member {number|Long} createTime
             * @memberof com.message.DolphinWaitMsg
             * @instance
             */
            DolphinWaitMsg.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified DolphinWaitMsg message. Does not implicitly {@link com.message.DolphinWaitMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DolphinWaitMsg
             * @static
             * @param {com.message.IDolphinWaitMsg} message DolphinWaitMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DolphinWaitMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.mobile);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.id);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.endTime);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createTime);
                return writer;
            };

            /**
             * Decodes a DolphinWaitMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DolphinWaitMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DolphinWaitMsg} DolphinWaitMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DolphinWaitMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DolphinWaitMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.mobile = reader.string();
                        break;
                    case 3:
                        message.id = reader.int64();
                        break;
                    case 4:
                        message.state = reader.int32();
                        break;
                    case 5:
                        message.endTime = reader.int64();
                        break;
                    case 6:
                        message.createTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DolphinWaitMsg;
        })();

        message.C_GET_DOLPHIN_WAIT_LIST = (function() {

            /**
             * Properties of a C_GET_DOLPHIN_WAIT_LIST.
             * @memberof com.message
             * @interface IC_GET_DOLPHIN_WAIT_LIST
             */

            /**
             * Constructs a new C_GET_DOLPHIN_WAIT_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_DOLPHIN_WAIT_LIST.
             * @implements IC_GET_DOLPHIN_WAIT_LIST
             * @constructor
             * @param {com.message.IC_GET_DOLPHIN_WAIT_LIST=} [properties] Properties to set
             */
            function C_GET_DOLPHIN_WAIT_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_DOLPHIN_WAIT_LIST message. Does not implicitly {@link com.message.C_GET_DOLPHIN_WAIT_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_DOLPHIN_WAIT_LIST
             * @static
             * @param {com.message.IC_GET_DOLPHIN_WAIT_LIST} message C_GET_DOLPHIN_WAIT_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_DOLPHIN_WAIT_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_DOLPHIN_WAIT_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_DOLPHIN_WAIT_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_DOLPHIN_WAIT_LIST} C_GET_DOLPHIN_WAIT_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_DOLPHIN_WAIT_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_DOLPHIN_WAIT_LIST();
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

            return C_GET_DOLPHIN_WAIT_LIST;
        })();

        message.S_GET_DOLPHIN_WAIT_LIST = (function() {

            /**
             * Properties of a S_GET_DOLPHIN_WAIT_LIST.
             * @memberof com.message
             * @interface IS_GET_DOLPHIN_WAIT_LIST
             * @property {Array.<com.message.IDolphinWaitMsg>|null} [dolphinWaitMsg] S_GET_DOLPHIN_WAIT_LIST dolphinWaitMsg
             */

            /**
             * Constructs a new S_GET_DOLPHIN_WAIT_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_DOLPHIN_WAIT_LIST.
             * @implements IS_GET_DOLPHIN_WAIT_LIST
             * @constructor
             * @param {com.message.IS_GET_DOLPHIN_WAIT_LIST=} [properties] Properties to set
             */
            function S_GET_DOLPHIN_WAIT_LIST(properties) {
                this.dolphinWaitMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_DOLPHIN_WAIT_LIST dolphinWaitMsg.
             * @member {Array.<com.message.IDolphinWaitMsg>} dolphinWaitMsg
             * @memberof com.message.S_GET_DOLPHIN_WAIT_LIST
             * @instance
             */
            S_GET_DOLPHIN_WAIT_LIST.prototype.dolphinWaitMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_DOLPHIN_WAIT_LIST message. Does not implicitly {@link com.message.S_GET_DOLPHIN_WAIT_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_DOLPHIN_WAIT_LIST
             * @static
             * @param {com.message.IS_GET_DOLPHIN_WAIT_LIST} message S_GET_DOLPHIN_WAIT_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_DOLPHIN_WAIT_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dolphinWaitMsg != null && message.dolphinWaitMsg.length)
                    for (var i = 0; i < message.dolphinWaitMsg.length; ++i)
                        $root.com.message.DolphinWaitMsg.encode(message.dolphinWaitMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_DOLPHIN_WAIT_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_DOLPHIN_WAIT_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_DOLPHIN_WAIT_LIST} S_GET_DOLPHIN_WAIT_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_DOLPHIN_WAIT_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_DOLPHIN_WAIT_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.dolphinWaitMsg && message.dolphinWaitMsg.length))
                            message.dolphinWaitMsg = [];
                        message.dolphinWaitMsg.push($root.com.message.DolphinWaitMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_DOLPHIN_WAIT_LIST;
        })();

        message.S_EXCEPTION_MSG = (function() {

            /**
             * Properties of a S_EXCEPTION_MSG.
             * @memberof com.message
             * @interface IS_EXCEPTION_MSG
             * @property {number|null} [code] S_EXCEPTION_MSG code
             */

            /**
             * Constructs a new S_EXCEPTION_MSG.
             * @memberof com.message
             * @classdesc Represents a S_EXCEPTION_MSG.
             * @implements IS_EXCEPTION_MSG
             * @constructor
             * @param {com.message.IS_EXCEPTION_MSG=} [properties] Properties to set
             */
            function S_EXCEPTION_MSG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_EXCEPTION_MSG code.
             * @member {number} code
             * @memberof com.message.S_EXCEPTION_MSG
             * @instance
             */
            S_EXCEPTION_MSG.prototype.code = 0;

            /**
             * Encodes the specified S_EXCEPTION_MSG message. Does not implicitly {@link com.message.S_EXCEPTION_MSG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_EXCEPTION_MSG
             * @static
             * @param {com.message.IS_EXCEPTION_MSG} message S_EXCEPTION_MSG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_EXCEPTION_MSG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                return writer;
            };

            /**
             * Decodes a S_EXCEPTION_MSG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_EXCEPTION_MSG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_EXCEPTION_MSG} S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_EXCEPTION_MSG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_EXCEPTION_MSG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_EXCEPTION_MSG;
        })();

        message.CROSS_S_EXCEPTION_MSG = (function() {

            /**
             * Properties of a CROSS_S_EXCEPTION_MSG.
             * @memberof com.message
             * @interface ICROSS_S_EXCEPTION_MSG
             * @property {number|Long|null} [playerId] CROSS_S_EXCEPTION_MSG playerId
             * @property {number|null} [code] CROSS_S_EXCEPTION_MSG code
             */

            /**
             * Constructs a new CROSS_S_EXCEPTION_MSG.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_EXCEPTION_MSG.
             * @implements ICROSS_S_EXCEPTION_MSG
             * @constructor
             * @param {com.message.ICROSS_S_EXCEPTION_MSG=} [properties] Properties to set
             */
            function CROSS_S_EXCEPTION_MSG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_EXCEPTION_MSG playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @instance
             */
            CROSS_S_EXCEPTION_MSG.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_S_EXCEPTION_MSG code.
             * @member {number} code
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @instance
             */
            CROSS_S_EXCEPTION_MSG.prototype.code = 0;

            /**
             * Encodes the specified CROSS_S_EXCEPTION_MSG message. Does not implicitly {@link com.message.CROSS_S_EXCEPTION_MSG.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @static
             * @param {com.message.ICROSS_S_EXCEPTION_MSG} message CROSS_S_EXCEPTION_MSG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_EXCEPTION_MSG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                return writer;
            };

            /**
             * Decodes a CROSS_S_EXCEPTION_MSG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_EXCEPTION_MSG} CROSS_S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_EXCEPTION_MSG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_EXCEPTION_MSG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.code = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_EXCEPTION_MSG;
        })();

        message.C_USER_LOGIN = (function() {

            /**
             * Properties of a C_USER_LOGIN.
             * @memberof com.message
             * @interface IC_USER_LOGIN
             * @property {string|null} [mobile] C_USER_LOGIN mobile
             * @property {string|null} [password] C_USER_LOGIN password
             * @property {string|null} [sparam] C_USER_LOGIN sparam
             * @property {number|null} [fromGame] C_USER_LOGIN fromGame
             */

            /**
             * Constructs a new C_USER_LOGIN.
             * @memberof com.message
             * @classdesc Represents a C_USER_LOGIN.
             * @implements IC_USER_LOGIN
             * @constructor
             * @param {com.message.IC_USER_LOGIN=} [properties] Properties to set
             */
            function C_USER_LOGIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_USER_LOGIN mobile.
             * @member {string} mobile
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.mobile = "";

            /**
             * C_USER_LOGIN password.
             * @member {string} password
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.password = "";

            /**
             * C_USER_LOGIN sparam.
             * @member {string} sparam
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.sparam = "";

            /**
             * C_USER_LOGIN fromGame.
             * @member {number} fromGame
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.fromGame = 0;

            /**
             * Encodes the specified C_USER_LOGIN message. Does not implicitly {@link com.message.C_USER_LOGIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USER_LOGIN
             * @static
             * @param {com.message.IC_USER_LOGIN} message C_USER_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USER_LOGIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.password != null && message.hasOwnProperty("password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.sparam);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a C_USER_LOGIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USER_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USER_LOGIN} C_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USER_LOGIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USER_LOGIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    case 3:
                        message.sparam = reader.string();
                        break;
                    case 4:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_USER_LOGIN;
        })();

        message.C_USER_LOGIN_VERIFY_CODE = (function() {

            /**
             * Properties of a C_USER_LOGIN_VERIFY_CODE.
             * @memberof com.message
             * @interface IC_USER_LOGIN_VERIFY_CODE
             * @property {string|null} [mobile] C_USER_LOGIN_VERIFY_CODE mobile
             * @property {string|null} [verifyCode] C_USER_LOGIN_VERIFY_CODE verifyCode
             * @property {string|null} [sparam] C_USER_LOGIN_VERIFY_CODE sparam
             * @property {number|null} [fromGame] C_USER_LOGIN_VERIFY_CODE fromGame
             */

            /**
             * Constructs a new C_USER_LOGIN_VERIFY_CODE.
             * @memberof com.message
             * @classdesc Represents a C_USER_LOGIN_VERIFY_CODE.
             * @implements IC_USER_LOGIN_VERIFY_CODE
             * @constructor
             * @param {com.message.IC_USER_LOGIN_VERIFY_CODE=} [properties] Properties to set
             */
            function C_USER_LOGIN_VERIFY_CODE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_USER_LOGIN_VERIFY_CODE mobile.
             * @member {string} mobile
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.mobile = "";

            /**
             * C_USER_LOGIN_VERIFY_CODE verifyCode.
             * @member {string} verifyCode
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.verifyCode = "";

            /**
             * C_USER_LOGIN_VERIFY_CODE sparam.
             * @member {string} sparam
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.sparam = "";

            /**
             * C_USER_LOGIN_VERIFY_CODE fromGame.
             * @member {number} fromGame
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.fromGame = 0;

            /**
             * Encodes the specified C_USER_LOGIN_VERIFY_CODE message. Does not implicitly {@link com.message.C_USER_LOGIN_VERIFY_CODE.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @static
             * @param {com.message.IC_USER_LOGIN_VERIFY_CODE} message C_USER_LOGIN_VERIFY_CODE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USER_LOGIN_VERIFY_CODE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.verifyCode);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.sparam);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a C_USER_LOGIN_VERIFY_CODE message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USER_LOGIN_VERIFY_CODE} C_USER_LOGIN_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USER_LOGIN_VERIFY_CODE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USER_LOGIN_VERIFY_CODE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.verifyCode = reader.string();
                        break;
                    case 3:
                        message.sparam = reader.string();
                        break;
                    case 4:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_USER_LOGIN_VERIFY_CODE;
        })();

        message.S_USER_LOGIN = (function() {

            /**
             * Properties of a S_USER_LOGIN.
             * @memberof com.message
             * @interface IS_USER_LOGIN
             * @property {number|Long|null} [playerId] S_USER_LOGIN playerId
             * @property {number|null} [fromGame] S_USER_LOGIN fromGame
             */

            /**
             * Constructs a new S_USER_LOGIN.
             * @memberof com.message
             * @classdesc Represents a S_USER_LOGIN.
             * @implements IS_USER_LOGIN
             * @constructor
             * @param {com.message.IS_USER_LOGIN=} [properties] Properties to set
             */
            function S_USER_LOGIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_USER_LOGIN playerId.
             * @member {number|Long} playerId
             * @memberof com.message.S_USER_LOGIN
             * @instance
             */
            S_USER_LOGIN.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_USER_LOGIN fromGame.
             * @member {number} fromGame
             * @memberof com.message.S_USER_LOGIN
             * @instance
             */
            S_USER_LOGIN.prototype.fromGame = 0;

            /**
             * Encodes the specified S_USER_LOGIN message. Does not implicitly {@link com.message.S_USER_LOGIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USER_LOGIN
             * @static
             * @param {com.message.IS_USER_LOGIN} message S_USER_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USER_LOGIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a S_USER_LOGIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USER_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USER_LOGIN} S_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USER_LOGIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USER_LOGIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_USER_LOGIN;
        })();

        message.C_LOGIN_REGISTER = (function() {

            /**
             * Properties of a C_LOGIN_REGISTER.
             * @memberof com.message
             * @interface IC_LOGIN_REGISTER
             * @property {string|null} [mobile] C_LOGIN_REGISTER mobile
             * @property {string|null} [inviteCode] C_LOGIN_REGISTER inviteCode
             * @property {string|null} [password] C_LOGIN_REGISTER password
             * @property {string|null} [rePassword] C_LOGIN_REGISTER rePassword
             * @property {string|null} [verifyCode] C_LOGIN_REGISTER verifyCode
             * @property {string|null} [sparam] C_LOGIN_REGISTER sparam
             * @property {number|null} [fromGame] C_LOGIN_REGISTER fromGame
             */

            /**
             * Constructs a new C_LOGIN_REGISTER.
             * @memberof com.message
             * @classdesc Represents a C_LOGIN_REGISTER.
             * @implements IC_LOGIN_REGISTER
             * @constructor
             * @param {com.message.IC_LOGIN_REGISTER=} [properties] Properties to set
             */
            function C_LOGIN_REGISTER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_LOGIN_REGISTER mobile.
             * @member {string} mobile
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.mobile = "";

            /**
             * C_LOGIN_REGISTER inviteCode.
             * @member {string} inviteCode
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.inviteCode = "";

            /**
             * C_LOGIN_REGISTER password.
             * @member {string} password
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.password = "";

            /**
             * C_LOGIN_REGISTER rePassword.
             * @member {string} rePassword
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.rePassword = "";

            /**
             * C_LOGIN_REGISTER verifyCode.
             * @member {string} verifyCode
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.verifyCode = "";

            /**
             * C_LOGIN_REGISTER sparam.
             * @member {string} sparam
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.sparam = "";

            /**
             * C_LOGIN_REGISTER fromGame.
             * @member {number} fromGame
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.fromGame = 0;

            /**
             * Encodes the specified C_LOGIN_REGISTER message. Does not implicitly {@link com.message.C_LOGIN_REGISTER.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_LOGIN_REGISTER
             * @static
             * @param {com.message.IC_LOGIN_REGISTER} message C_LOGIN_REGISTER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_LOGIN_REGISTER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.inviteCode != null && message.hasOwnProperty("inviteCode"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inviteCode);
                if (message.password != null && message.hasOwnProperty("password"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                if (message.rePassword != null && message.hasOwnProperty("rePassword"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.rePassword);
                if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.verifyCode);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.sparam);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a C_LOGIN_REGISTER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_LOGIN_REGISTER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_LOGIN_REGISTER} C_LOGIN_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_LOGIN_REGISTER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_LOGIN_REGISTER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.inviteCode = reader.string();
                        break;
                    case 3:
                        message.password = reader.string();
                        break;
                    case 4:
                        message.rePassword = reader.string();
                        break;
                    case 5:
                        message.verifyCode = reader.string();
                        break;
                    case 6:
                        message.sparam = reader.string();
                        break;
                    case 7:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_LOGIN_REGISTER;
        })();

        message.S_LOGIN_REGISTER = (function() {

            /**
             * Properties of a S_LOGIN_REGISTER.
             * @memberof com.message
             * @interface IS_LOGIN_REGISTER
             * @property {number|Long|null} [playerId] S_LOGIN_REGISTER playerId
             * @property {number|null} [fromGame] S_LOGIN_REGISTER fromGame
             */

            /**
             * Constructs a new S_LOGIN_REGISTER.
             * @memberof com.message
             * @classdesc Represents a S_LOGIN_REGISTER.
             * @implements IS_LOGIN_REGISTER
             * @constructor
             * @param {com.message.IS_LOGIN_REGISTER=} [properties] Properties to set
             */
            function S_LOGIN_REGISTER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_LOGIN_REGISTER playerId.
             * @member {number|Long} playerId
             * @memberof com.message.S_LOGIN_REGISTER
             * @instance
             */
            S_LOGIN_REGISTER.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_LOGIN_REGISTER fromGame.
             * @member {number} fromGame
             * @memberof com.message.S_LOGIN_REGISTER
             * @instance
             */
            S_LOGIN_REGISTER.prototype.fromGame = 0;

            /**
             * Encodes the specified S_LOGIN_REGISTER message. Does not implicitly {@link com.message.S_LOGIN_REGISTER.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_LOGIN_REGISTER
             * @static
             * @param {com.message.IS_LOGIN_REGISTER} message S_LOGIN_REGISTER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_LOGIN_REGISTER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a S_LOGIN_REGISTER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_LOGIN_REGISTER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_LOGIN_REGISTER} S_LOGIN_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_LOGIN_REGISTER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_LOGIN_REGISTER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 4:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_LOGIN_REGISTER;
        })();

        message.C_SEND_VERIFY_CODE = (function() {

            /**
             * Properties of a C_SEND_VERIFY_CODE.
             * @memberof com.message
             * @interface IC_SEND_VERIFY_CODE
             * @property {string|null} [mobile] C_SEND_VERIFY_CODE mobile
             * @property {number|null} [type] C_SEND_VERIFY_CODE type
             */

            /**
             * Constructs a new C_SEND_VERIFY_CODE.
             * @memberof com.message
             * @classdesc Represents a C_SEND_VERIFY_CODE.
             * @implements IC_SEND_VERIFY_CODE
             * @constructor
             * @param {com.message.IC_SEND_VERIFY_CODE=} [properties] Properties to set
             */
            function C_SEND_VERIFY_CODE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_SEND_VERIFY_CODE mobile.
             * @member {string} mobile
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @instance
             */
            C_SEND_VERIFY_CODE.prototype.mobile = "";

            /**
             * C_SEND_VERIFY_CODE type.
             * @member {number} type
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @instance
             */
            C_SEND_VERIFY_CODE.prototype.type = 0;

            /**
             * Encodes the specified C_SEND_VERIFY_CODE message. Does not implicitly {@link com.message.C_SEND_VERIFY_CODE.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @static
             * @param {com.message.IC_SEND_VERIFY_CODE} message C_SEND_VERIFY_CODE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_SEND_VERIFY_CODE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };

            /**
             * Decodes a C_SEND_VERIFY_CODE message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_SEND_VERIFY_CODE} C_SEND_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_SEND_VERIFY_CODE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_SEND_VERIFY_CODE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_SEND_VERIFY_CODE;
        })();

        message.S_SEND_VERIFY_CODE = (function() {

            /**
             * Properties of a S_SEND_VERIFY_CODE.
             * @memberof com.message
             * @interface IS_SEND_VERIFY_CODE
             * @property {string|null} [mobile] S_SEND_VERIFY_CODE mobile
             * @property {number|null} [state] S_SEND_VERIFY_CODE state
             */

            /**
             * Constructs a new S_SEND_VERIFY_CODE.
             * @memberof com.message
             * @classdesc Represents a S_SEND_VERIFY_CODE.
             * @implements IS_SEND_VERIFY_CODE
             * @constructor
             * @param {com.message.IS_SEND_VERIFY_CODE=} [properties] Properties to set
             */
            function S_SEND_VERIFY_CODE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SEND_VERIFY_CODE mobile.
             * @member {string} mobile
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @instance
             */
            S_SEND_VERIFY_CODE.prototype.mobile = "";

            /**
             * S_SEND_VERIFY_CODE state.
             * @member {number} state
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @instance
             */
            S_SEND_VERIFY_CODE.prototype.state = 0;

            /**
             * Encodes the specified S_SEND_VERIFY_CODE message. Does not implicitly {@link com.message.S_SEND_VERIFY_CODE.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @static
             * @param {com.message.IS_SEND_VERIFY_CODE} message S_SEND_VERIFY_CODE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SEND_VERIFY_CODE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                return writer;
            };

            /**
             * Decodes a S_SEND_VERIFY_CODE message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SEND_VERIFY_CODE} S_SEND_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SEND_VERIFY_CODE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SEND_VERIFY_CODE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SEND_VERIFY_CODE;
        })();

        message.C_USER_LOGOUT = (function() {

            /**
             * Properties of a C_USER_LOGOUT.
             * @memberof com.message
             * @interface IC_USER_LOGOUT
             * @property {number|Long|null} [playerId] C_USER_LOGOUT playerId
             */

            /**
             * Constructs a new C_USER_LOGOUT.
             * @memberof com.message
             * @classdesc Represents a C_USER_LOGOUT.
             * @implements IC_USER_LOGOUT
             * @constructor
             * @param {com.message.IC_USER_LOGOUT=} [properties] Properties to set
             */
            function C_USER_LOGOUT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_USER_LOGOUT playerId.
             * @member {number|Long} playerId
             * @memberof com.message.C_USER_LOGOUT
             * @instance
             */
            C_USER_LOGOUT.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_USER_LOGOUT message. Does not implicitly {@link com.message.C_USER_LOGOUT.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USER_LOGOUT
             * @static
             * @param {com.message.IC_USER_LOGOUT} message C_USER_LOGOUT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USER_LOGOUT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Decodes a C_USER_LOGOUT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USER_LOGOUT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USER_LOGOUT} C_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USER_LOGOUT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USER_LOGOUT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_USER_LOGOUT;
        })();

        message.S_USER_LOGOUT = (function() {

            /**
             * Properties of a S_USER_LOGOUT.
             * @memberof com.message
             * @interface IS_USER_LOGOUT
             * @property {number|Long|null} [playerId] S_USER_LOGOUT playerId
             * @property {boolean|null} [beKickOut] S_USER_LOGOUT beKickOut
             */

            /**
             * Constructs a new S_USER_LOGOUT.
             * @memberof com.message
             * @classdesc Represents a S_USER_LOGOUT.
             * @implements IS_USER_LOGOUT
             * @constructor
             * @param {com.message.IS_USER_LOGOUT=} [properties] Properties to set
             */
            function S_USER_LOGOUT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_USER_LOGOUT playerId.
             * @member {number|Long} playerId
             * @memberof com.message.S_USER_LOGOUT
             * @instance
             */
            S_USER_LOGOUT.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_USER_LOGOUT beKickOut.
             * @member {boolean} beKickOut
             * @memberof com.message.S_USER_LOGOUT
             * @instance
             */
            S_USER_LOGOUT.prototype.beKickOut = false;

            /**
             * Encodes the specified S_USER_LOGOUT message. Does not implicitly {@link com.message.S_USER_LOGOUT.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USER_LOGOUT
             * @static
             * @param {com.message.IS_USER_LOGOUT} message S_USER_LOGOUT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USER_LOGOUT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.beKickOut != null && message.hasOwnProperty("beKickOut"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.beKickOut);
                return writer;
            };

            /**
             * Decodes a S_USER_LOGOUT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USER_LOGOUT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USER_LOGOUT} S_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USER_LOGOUT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USER_LOGOUT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.beKickOut = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_USER_LOGOUT;
        })();

        message.S_USER_LOGIN_BAN = (function() {

            /**
             * Properties of a S_USER_LOGIN_BAN.
             * @memberof com.message
             * @interface IS_USER_LOGIN_BAN
             */

            /**
             * Constructs a new S_USER_LOGIN_BAN.
             * @memberof com.message
             * @classdesc Represents a S_USER_LOGIN_BAN.
             * @implements IS_USER_LOGIN_BAN
             * @constructor
             * @param {com.message.IS_USER_LOGIN_BAN=} [properties] Properties to set
             */
            function S_USER_LOGIN_BAN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified S_USER_LOGIN_BAN message. Does not implicitly {@link com.message.S_USER_LOGIN_BAN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USER_LOGIN_BAN
             * @static
             * @param {com.message.IS_USER_LOGIN_BAN} message S_USER_LOGIN_BAN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USER_LOGIN_BAN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a S_USER_LOGIN_BAN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USER_LOGIN_BAN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USER_LOGIN_BAN} S_USER_LOGIN_BAN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USER_LOGIN_BAN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USER_LOGIN_BAN();
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

            return S_USER_LOGIN_BAN;
        })();

        message.C_SYNC_TIME = (function() {

            /**
             * Properties of a C_SYNC_TIME.
             * @memberof com.message
             * @interface IC_SYNC_TIME
             */

            /**
             * Constructs a new C_SYNC_TIME.
             * @memberof com.message
             * @classdesc Represents a C_SYNC_TIME.
             * @implements IC_SYNC_TIME
             * @constructor
             * @param {com.message.IC_SYNC_TIME=} [properties] Properties to set
             */
            function C_SYNC_TIME(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_SYNC_TIME message. Does not implicitly {@link com.message.C_SYNC_TIME.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_SYNC_TIME
             * @static
             * @param {com.message.IC_SYNC_TIME} message C_SYNC_TIME message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_SYNC_TIME.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_SYNC_TIME message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_SYNC_TIME
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_SYNC_TIME} C_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_SYNC_TIME.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_SYNC_TIME();
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

            return C_SYNC_TIME;
        })();

        message.S_SYNC_TIME = (function() {

            /**
             * Properties of a S_SYNC_TIME.
             * @memberof com.message
             * @interface IS_SYNC_TIME
             * @property {number|Long|null} [time] S_SYNC_TIME time
             */

            /**
             * Constructs a new S_SYNC_TIME.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_TIME.
             * @implements IS_SYNC_TIME
             * @constructor
             * @param {com.message.IS_SYNC_TIME=} [properties] Properties to set
             */
            function S_SYNC_TIME(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_TIME time.
             * @member {number|Long} time
             * @memberof com.message.S_SYNC_TIME
             * @instance
             */
            S_SYNC_TIME.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified S_SYNC_TIME message. Does not implicitly {@link com.message.S_SYNC_TIME.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_TIME
             * @static
             * @param {com.message.IS_SYNC_TIME} message S_SYNC_TIME message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_TIME.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
                return writer;
            };

            /**
             * Decodes a S_SYNC_TIME message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_TIME
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_TIME} S_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_TIME.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_TIME();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.time = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_TIME;
        })();

        message.C_USER_LOGIN_INIT_FINISH = (function() {

            /**
             * Properties of a C_USER_LOGIN_INIT_FINISH.
             * @memberof com.message
             * @interface IC_USER_LOGIN_INIT_FINISH
             */

            /**
             * Constructs a new C_USER_LOGIN_INIT_FINISH.
             * @memberof com.message
             * @classdesc Represents a C_USER_LOGIN_INIT_FINISH.
             * @implements IC_USER_LOGIN_INIT_FINISH
             * @constructor
             * @param {com.message.IC_USER_LOGIN_INIT_FINISH=} [properties] Properties to set
             */
            function C_USER_LOGIN_INIT_FINISH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_USER_LOGIN_INIT_FINISH message. Does not implicitly {@link com.message.C_USER_LOGIN_INIT_FINISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USER_LOGIN_INIT_FINISH
             * @static
             * @param {com.message.IC_USER_LOGIN_INIT_FINISH} message C_USER_LOGIN_INIT_FINISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USER_LOGIN_INIT_FINISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_USER_LOGIN_INIT_FINISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USER_LOGIN_INIT_FINISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USER_LOGIN_INIT_FINISH} C_USER_LOGIN_INIT_FINISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USER_LOGIN_INIT_FINISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USER_LOGIN_INIT_FINISH();
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

            return C_USER_LOGIN_INIT_FINISH;
        })();

        message.S_USER_LOGIN_INIT_FINISH = (function() {

            /**
             * Properties of a S_USER_LOGIN_INIT_FINISH.
             * @memberof com.message
             * @interface IS_USER_LOGIN_INIT_FINISH
             * @property {number|Long|null} [playerId] S_USER_LOGIN_INIT_FINISH playerId
             * @property {com.message.IPlayerPropertyMsg|null} [property] S_USER_LOGIN_INIT_FINISH property
             * @property {com.message.IBasePlayerMsg|null} [basePlayerMsg] S_USER_LOGIN_INIT_FINISH basePlayerMsg
             * @property {Array.<com.message.IFishMsg>|null} [fishMsg] S_USER_LOGIN_INIT_FINISH fishMsg
             * @property {string|null} [buyFishStr] S_USER_LOGIN_INIT_FINISH buyFishStr
             */

            /**
             * Constructs a new S_USER_LOGIN_INIT_FINISH.
             * @memberof com.message
             * @classdesc Represents a S_USER_LOGIN_INIT_FINISH.
             * @implements IS_USER_LOGIN_INIT_FINISH
             * @constructor
             * @param {com.message.IS_USER_LOGIN_INIT_FINISH=} [properties] Properties to set
             */
            function S_USER_LOGIN_INIT_FINISH(properties) {
                this.fishMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_USER_LOGIN_INIT_FINISH playerId.
             * @member {number|Long} playerId
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @instance
             */
            S_USER_LOGIN_INIT_FINISH.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_USER_LOGIN_INIT_FINISH property.
             * @member {com.message.IPlayerPropertyMsg|null|undefined} property
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @instance
             */
            S_USER_LOGIN_INIT_FINISH.prototype.property = null;

            /**
             * S_USER_LOGIN_INIT_FINISH basePlayerMsg.
             * @member {com.message.IBasePlayerMsg|null|undefined} basePlayerMsg
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @instance
             */
            S_USER_LOGIN_INIT_FINISH.prototype.basePlayerMsg = null;

            /**
             * S_USER_LOGIN_INIT_FINISH fishMsg.
             * @member {Array.<com.message.IFishMsg>} fishMsg
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @instance
             */
            S_USER_LOGIN_INIT_FINISH.prototype.fishMsg = $util.emptyArray;

            /**
             * S_USER_LOGIN_INIT_FINISH buyFishStr.
             * @member {string} buyFishStr
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @instance
             */
            S_USER_LOGIN_INIT_FINISH.prototype.buyFishStr = "";

            /**
             * Encodes the specified S_USER_LOGIN_INIT_FINISH message. Does not implicitly {@link com.message.S_USER_LOGIN_INIT_FINISH.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @static
             * @param {com.message.IS_USER_LOGIN_INIT_FINISH} message S_USER_LOGIN_INIT_FINISH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USER_LOGIN_INIT_FINISH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.property != null && message.hasOwnProperty("property"))
                    $root.com.message.PlayerPropertyMsg.encode(message.property, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.basePlayerMsg != null && message.hasOwnProperty("basePlayerMsg"))
                    $root.com.message.BasePlayerMsg.encode(message.basePlayerMsg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.fishMsg != null && message.fishMsg.length)
                    for (var i = 0; i < message.fishMsg.length; ++i)
                        $root.com.message.FishMsg.encode(message.fishMsg[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.buyFishStr != null && message.hasOwnProperty("buyFishStr"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.buyFishStr);
                return writer;
            };

            /**
             * Decodes a S_USER_LOGIN_INIT_FINISH message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USER_LOGIN_INIT_FINISH} S_USER_LOGIN_INIT_FINISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USER_LOGIN_INIT_FINISH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USER_LOGIN_INIT_FINISH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.property = $root.com.message.PlayerPropertyMsg.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.basePlayerMsg = $root.com.message.BasePlayerMsg.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.fishMsg && message.fishMsg.length))
                            message.fishMsg = [];
                        message.fishMsg.push($root.com.message.FishMsg.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.buyFishStr = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_USER_LOGIN_INIT_FINISH;
        })();

        message.S_SYN_PROPERTY = (function() {

            /**
             * Properties of a S_SYN_PROPERTY.
             * @memberof com.message
             * @interface IS_SYN_PROPERTY
             * @property {Array.<com.message.IIntDoubleMapMsg>|null} [mapMsg] S_SYN_PROPERTY mapMsg
             */

            /**
             * Constructs a new S_SYN_PROPERTY.
             * @memberof com.message
             * @classdesc Represents a S_SYN_PROPERTY.
             * @implements IS_SYN_PROPERTY
             * @constructor
             * @param {com.message.IS_SYN_PROPERTY=} [properties] Properties to set
             */
            function S_SYN_PROPERTY(properties) {
                this.mapMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYN_PROPERTY mapMsg.
             * @member {Array.<com.message.IIntDoubleMapMsg>} mapMsg
             * @memberof com.message.S_SYN_PROPERTY
             * @instance
             */
            S_SYN_PROPERTY.prototype.mapMsg = $util.emptyArray;

            /**
             * Encodes the specified S_SYN_PROPERTY message. Does not implicitly {@link com.message.S_SYN_PROPERTY.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYN_PROPERTY
             * @static
             * @param {com.message.IS_SYN_PROPERTY} message S_SYN_PROPERTY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYN_PROPERTY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mapMsg != null && message.mapMsg.length)
                    for (var i = 0; i < message.mapMsg.length; ++i)
                        $root.com.message.IntDoubleMapMsg.encode(message.mapMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYN_PROPERTY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYN_PROPERTY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYN_PROPERTY} S_SYN_PROPERTY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYN_PROPERTY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYN_PROPERTY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.mapMsg && message.mapMsg.length))
                            message.mapMsg = [];
                        message.mapMsg.push($root.com.message.IntDoubleMapMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYN_PROPERTY;
        })();

        message.BasePlayerMsg = (function() {

            /**
             * Properties of a BasePlayerMsg.
             * @memberof com.message
             * @interface IBasePlayerMsg
             * @property {number|Long|null} [playerId] BasePlayerMsg playerId
             * @property {number|null} [state] BasePlayerMsg state
             * @property {string|null} [inviteCode] BasePlayerMsg inviteCode
             * @property {string|null} [mobile] BasePlayerMsg mobile
             * @property {string|null} [name] BasePlayerMsg name
             * @property {string|null} [idNum] BasePlayerMsg idNum
             */

            /**
             * Constructs a new BasePlayerMsg.
             * @memberof com.message
             * @classdesc Represents a BasePlayerMsg.
             * @implements IBasePlayerMsg
             * @constructor
             * @param {com.message.IBasePlayerMsg=} [properties] Properties to set
             */
            function BasePlayerMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BasePlayerMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.BasePlayerMsg
             * @instance
             */
            BasePlayerMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BasePlayerMsg state.
             * @member {number} state
             * @memberof com.message.BasePlayerMsg
             * @instance
             */
            BasePlayerMsg.prototype.state = 0;

            /**
             * BasePlayerMsg inviteCode.
             * @member {string} inviteCode
             * @memberof com.message.BasePlayerMsg
             * @instance
             */
            BasePlayerMsg.prototype.inviteCode = "";

            /**
             * BasePlayerMsg mobile.
             * @member {string} mobile
             * @memberof com.message.BasePlayerMsg
             * @instance
             */
            BasePlayerMsg.prototype.mobile = "";

            /**
             * BasePlayerMsg name.
             * @member {string} name
             * @memberof com.message.BasePlayerMsg
             * @instance
             */
            BasePlayerMsg.prototype.name = "";

            /**
             * BasePlayerMsg idNum.
             * @member {string} idNum
             * @memberof com.message.BasePlayerMsg
             * @instance
             */
            BasePlayerMsg.prototype.idNum = "";

            /**
             * Encodes the specified BasePlayerMsg message. Does not implicitly {@link com.message.BasePlayerMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.BasePlayerMsg
             * @static
             * @param {com.message.IBasePlayerMsg} message BasePlayerMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BasePlayerMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                if (message.inviteCode != null && message.hasOwnProperty("inviteCode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.inviteCode);
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.mobile);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
                if (message.idNum != null && message.hasOwnProperty("idNum"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.idNum);
                return writer;
            };

            /**
             * Decodes a BasePlayerMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.BasePlayerMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.BasePlayerMsg} BasePlayerMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BasePlayerMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.BasePlayerMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.state = reader.int32();
                        break;
                    case 3:
                        message.inviteCode = reader.string();
                        break;
                    case 4:
                        message.mobile = reader.string();
                        break;
                    case 5:
                        message.name = reader.string();
                        break;
                    case 6:
                        message.idNum = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BasePlayerMsg;
        })();

        message.PlayerPropertyMsg = (function() {

            /**
             * Properties of a PlayerPropertyMsg.
             * @memberof com.message
             * @interface IPlayerPropertyMsg
             * @property {number|Long|null} [playerId] PlayerPropertyMsg playerId
             * @property {number|null} [money] PlayerPropertyMsg money
             * @property {number|null} [diamond] PlayerPropertyMsg diamond
             * @property {number|null} [KAD] PlayerPropertyMsg KAD
             * @property {number|null} [keyCount] PlayerPropertyMsg keyCount
             * @property {number|null} [dolphinBuyCount] PlayerPropertyMsg dolphinBuyCount
             * @property {number|null} [dolphinSpeedCount] PlayerPropertyMsg dolphinSpeedCount
             * @property {number|null} [dolphinMoney] PlayerPropertyMsg dolphinMoney
             */

            /**
             * Constructs a new PlayerPropertyMsg.
             * @memberof com.message
             * @classdesc Represents a PlayerPropertyMsg.
             * @implements IPlayerPropertyMsg
             * @constructor
             * @param {com.message.IPlayerPropertyMsg=} [properties] Properties to set
             */
            function PlayerPropertyMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerPropertyMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerPropertyMsg money.
             * @member {number} money
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.money = 0;

            /**
             * PlayerPropertyMsg diamond.
             * @member {number} diamond
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.diamond = 0;

            /**
             * PlayerPropertyMsg KAD.
             * @member {number} KAD
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.KAD = 0;

            /**
             * PlayerPropertyMsg keyCount.
             * @member {number} keyCount
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.keyCount = 0;

            /**
             * PlayerPropertyMsg dolphinBuyCount.
             * @member {number} dolphinBuyCount
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.dolphinBuyCount = 0;

            /**
             * PlayerPropertyMsg dolphinSpeedCount.
             * @member {number} dolphinSpeedCount
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.dolphinSpeedCount = 0;

            /**
             * PlayerPropertyMsg dolphinMoney.
             * @member {number} dolphinMoney
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.dolphinMoney = 0;

            /**
             * Encodes the specified PlayerPropertyMsg message. Does not implicitly {@link com.message.PlayerPropertyMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.PlayerPropertyMsg
             * @static
             * @param {com.message.IPlayerPropertyMsg} message PlayerPropertyMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerPropertyMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.money);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.diamond);
                if (message.KAD != null && message.hasOwnProperty("KAD"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.KAD);
                if (message.keyCount != null && message.hasOwnProperty("keyCount"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.keyCount);
                if (message.dolphinBuyCount != null && message.hasOwnProperty("dolphinBuyCount"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.dolphinBuyCount);
                if (message.dolphinSpeedCount != null && message.hasOwnProperty("dolphinSpeedCount"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.dolphinSpeedCount);
                if (message.dolphinMoney != null && message.hasOwnProperty("dolphinMoney"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.dolphinMoney);
                return writer;
            };

            /**
             * Decodes a PlayerPropertyMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.PlayerPropertyMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.PlayerPropertyMsg} PlayerPropertyMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerPropertyMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.PlayerPropertyMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 3:
                        message.money = reader.double();
                        break;
                    case 4:
                        message.diamond = reader.double();
                        break;
                    case 5:
                        message.KAD = reader.double();
                        break;
                    case 6:
                        message.keyCount = reader.int32();
                        break;
                    case 7:
                        message.dolphinBuyCount = reader.int32();
                        break;
                    case 8:
                        message.dolphinSpeedCount = reader.int32();
                        break;
                    case 9:
                        message.dolphinMoney = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PlayerPropertyMsg;
        })();

        /**
         * PropertyID enum.
         * @name com.message.PropertyID
         * @enum {string}
         * @property {number} LEVEL=0 LEVEL value
         * @property {number} MONEY=1 MONEY value
         * @property {number} DIAMOND=2 DIAMOND value
         * @property {number} KAD=3 KAD value
         * @property {number} KEY=4 KEY value
         * @property {number} DOLPHIN_BUY_COUNT=5 DOLPHIN_BUY_COUNT value
         * @property {number} DOLPHIN_SPEED_COUNT=6 DOLPHIN_SPEED_COUNT value
         * @property {number} DOLPHIN_MONEY=7 DOLPHIN_MONEY value
         */
        message.PropertyID = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LEVEL"] = 0;
            values[valuesById[1] = "MONEY"] = 1;
            values[valuesById[2] = "DIAMOND"] = 2;
            values[valuesById[3] = "KAD"] = 3;
            values[valuesById[4] = "KEY"] = 4;
            values[valuesById[5] = "DOLPHIN_BUY_COUNT"] = 5;
            values[valuesById[6] = "DOLPHIN_SPEED_COUNT"] = 6;
            values[valuesById[7] = "DOLPHIN_MONEY"] = 7;
            return values;
        })();

        message.C_REAL_NAME_VERIFICATION = (function() {

            /**
             * Properties of a C_REAL_NAME_VERIFICATION.
             * @memberof com.message
             * @interface IC_REAL_NAME_VERIFICATION
             * @property {string|null} [mobile] C_REAL_NAME_VERIFICATION mobile
             * @property {string|null} [name] C_REAL_NAME_VERIFICATION name
             * @property {string|null} [idNum] C_REAL_NAME_VERIFICATION idNum
             */

            /**
             * Constructs a new C_REAL_NAME_VERIFICATION.
             * @memberof com.message
             * @classdesc Represents a C_REAL_NAME_VERIFICATION.
             * @implements IC_REAL_NAME_VERIFICATION
             * @constructor
             * @param {com.message.IC_REAL_NAME_VERIFICATION=} [properties] Properties to set
             */
            function C_REAL_NAME_VERIFICATION(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_REAL_NAME_VERIFICATION mobile.
             * @member {string} mobile
             * @memberof com.message.C_REAL_NAME_VERIFICATION
             * @instance
             */
            C_REAL_NAME_VERIFICATION.prototype.mobile = "";

            /**
             * C_REAL_NAME_VERIFICATION name.
             * @member {string} name
             * @memberof com.message.C_REAL_NAME_VERIFICATION
             * @instance
             */
            C_REAL_NAME_VERIFICATION.prototype.name = "";

            /**
             * C_REAL_NAME_VERIFICATION idNum.
             * @member {string} idNum
             * @memberof com.message.C_REAL_NAME_VERIFICATION
             * @instance
             */
            C_REAL_NAME_VERIFICATION.prototype.idNum = "";

            /**
             * Encodes the specified C_REAL_NAME_VERIFICATION message. Does not implicitly {@link com.message.C_REAL_NAME_VERIFICATION.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_REAL_NAME_VERIFICATION
             * @static
             * @param {com.message.IC_REAL_NAME_VERIFICATION} message C_REAL_NAME_VERIFICATION message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_REAL_NAME_VERIFICATION.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.idNum != null && message.hasOwnProperty("idNum"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.idNum);
                return writer;
            };

            /**
             * Decodes a C_REAL_NAME_VERIFICATION message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_REAL_NAME_VERIFICATION
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_REAL_NAME_VERIFICATION} C_REAL_NAME_VERIFICATION
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_REAL_NAME_VERIFICATION.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_REAL_NAME_VERIFICATION();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.idNum = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_REAL_NAME_VERIFICATION;
        })();

        message.S_REAL_NAME_VERIFICATION = (function() {

            /**
             * Properties of a S_REAL_NAME_VERIFICATION.
             * @memberof com.message
             * @interface IS_REAL_NAME_VERIFICATION
             * @property {string|null} [result] S_REAL_NAME_VERIFICATION result
             * @property {string|null} [remark] S_REAL_NAME_VERIFICATION remark
             * @property {com.message.IBasePlayerMsg|null} [basePlayerMsg] S_REAL_NAME_VERIFICATION basePlayerMsg
             */

            /**
             * Constructs a new S_REAL_NAME_VERIFICATION.
             * @memberof com.message
             * @classdesc Represents a S_REAL_NAME_VERIFICATION.
             * @implements IS_REAL_NAME_VERIFICATION
             * @constructor
             * @param {com.message.IS_REAL_NAME_VERIFICATION=} [properties] Properties to set
             */
            function S_REAL_NAME_VERIFICATION(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_REAL_NAME_VERIFICATION result.
             * @member {string} result
             * @memberof com.message.S_REAL_NAME_VERIFICATION
             * @instance
             */
            S_REAL_NAME_VERIFICATION.prototype.result = "";

            /**
             * S_REAL_NAME_VERIFICATION remark.
             * @member {string} remark
             * @memberof com.message.S_REAL_NAME_VERIFICATION
             * @instance
             */
            S_REAL_NAME_VERIFICATION.prototype.remark = "";

            /**
             * S_REAL_NAME_VERIFICATION basePlayerMsg.
             * @member {com.message.IBasePlayerMsg|null|undefined} basePlayerMsg
             * @memberof com.message.S_REAL_NAME_VERIFICATION
             * @instance
             */
            S_REAL_NAME_VERIFICATION.prototype.basePlayerMsg = null;

            /**
             * Encodes the specified S_REAL_NAME_VERIFICATION message. Does not implicitly {@link com.message.S_REAL_NAME_VERIFICATION.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_REAL_NAME_VERIFICATION
             * @static
             * @param {com.message.IS_REAL_NAME_VERIFICATION} message S_REAL_NAME_VERIFICATION message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_REAL_NAME_VERIFICATION.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
                if (message.remark != null && message.hasOwnProperty("remark"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.remark);
                if (message.basePlayerMsg != null && message.hasOwnProperty("basePlayerMsg"))
                    $root.com.message.BasePlayerMsg.encode(message.basePlayerMsg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_REAL_NAME_VERIFICATION message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_REAL_NAME_VERIFICATION
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_REAL_NAME_VERIFICATION} S_REAL_NAME_VERIFICATION
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_REAL_NAME_VERIFICATION.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_REAL_NAME_VERIFICATION();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = reader.string();
                        break;
                    case 2:
                        message.remark = reader.string();
                        break;
                    case 3:
                        message.basePlayerMsg = $root.com.message.BasePlayerMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_REAL_NAME_VERIFICATION;
        })();

        message.C_MODIFY_PASSWORD = (function() {

            /**
             * Properties of a C_MODIFY_PASSWORD.
             * @memberof com.message
             * @interface IC_MODIFY_PASSWORD
             * @property {string|null} [mobile] C_MODIFY_PASSWORD mobile
             * @property {string|null} [password] C_MODIFY_PASSWORD password
             * @property {string|null} [verifyCode] C_MODIFY_PASSWORD verifyCode
             */

            /**
             * Constructs a new C_MODIFY_PASSWORD.
             * @memberof com.message
             * @classdesc Represents a C_MODIFY_PASSWORD.
             * @implements IC_MODIFY_PASSWORD
             * @constructor
             * @param {com.message.IC_MODIFY_PASSWORD=} [properties] Properties to set
             */
            function C_MODIFY_PASSWORD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_MODIFY_PASSWORD mobile.
             * @member {string} mobile
             * @memberof com.message.C_MODIFY_PASSWORD
             * @instance
             */
            C_MODIFY_PASSWORD.prototype.mobile = "";

            /**
             * C_MODIFY_PASSWORD password.
             * @member {string} password
             * @memberof com.message.C_MODIFY_PASSWORD
             * @instance
             */
            C_MODIFY_PASSWORD.prototype.password = "";

            /**
             * C_MODIFY_PASSWORD verifyCode.
             * @member {string} verifyCode
             * @memberof com.message.C_MODIFY_PASSWORD
             * @instance
             */
            C_MODIFY_PASSWORD.prototype.verifyCode = "";

            /**
             * Encodes the specified C_MODIFY_PASSWORD message. Does not implicitly {@link com.message.C_MODIFY_PASSWORD.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_MODIFY_PASSWORD
             * @static
             * @param {com.message.IC_MODIFY_PASSWORD} message C_MODIFY_PASSWORD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_MODIFY_PASSWORD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.password != null && message.hasOwnProperty("password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifyCode);
                return writer;
            };

            /**
             * Decodes a C_MODIFY_PASSWORD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_MODIFY_PASSWORD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_MODIFY_PASSWORD} C_MODIFY_PASSWORD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_MODIFY_PASSWORD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_MODIFY_PASSWORD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    case 3:
                        message.verifyCode = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_MODIFY_PASSWORD;
        })();

        message.S_MODIFY_PASSWORD = (function() {

            /**
             * Properties of a S_MODIFY_PASSWORD.
             * @memberof com.message
             * @interface IS_MODIFY_PASSWORD
             * @property {string|null} [mobile] S_MODIFY_PASSWORD mobile
             */

            /**
             * Constructs a new S_MODIFY_PASSWORD.
             * @memberof com.message
             * @classdesc Represents a S_MODIFY_PASSWORD.
             * @implements IS_MODIFY_PASSWORD
             * @constructor
             * @param {com.message.IS_MODIFY_PASSWORD=} [properties] Properties to set
             */
            function S_MODIFY_PASSWORD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_MODIFY_PASSWORD mobile.
             * @member {string} mobile
             * @memberof com.message.S_MODIFY_PASSWORD
             * @instance
             */
            S_MODIFY_PASSWORD.prototype.mobile = "";

            /**
             * Encodes the specified S_MODIFY_PASSWORD message. Does not implicitly {@link com.message.S_MODIFY_PASSWORD.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_MODIFY_PASSWORD
             * @static
             * @param {com.message.IS_MODIFY_PASSWORD} message S_MODIFY_PASSWORD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_MODIFY_PASSWORD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                return writer;
            };

            /**
             * Decodes a S_MODIFY_PASSWORD message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_MODIFY_PASSWORD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_MODIFY_PASSWORD} S_MODIFY_PASSWORD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_MODIFY_PASSWORD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_MODIFY_PASSWORD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_MODIFY_PASSWORD;
        })();

        message.KeyLogMsg = (function() {

            /**
             * Properties of a KeyLogMsg.
             * @memberof com.message
             * @interface IKeyLogMsg
             * @property {number|Long|null} [playerId] KeyLogMsg playerId
             * @property {number|Long|null} [bePlayerId] KeyLogMsg bePlayerId
             * @property {number|null} [type] KeyLogMsg type
             * @property {number|null} [beforeMoney] KeyLogMsg beforeMoney
             * @property {number|null} [changeMoney] KeyLogMsg changeMoney
             * @property {number|null} [afterMoney] KeyLogMsg afterMoney
             * @property {number|Long|null} [logTime] KeyLogMsg logTime
             * @property {string|null} [info] KeyLogMsg info
             */

            /**
             * Constructs a new KeyLogMsg.
             * @memberof com.message
             * @classdesc Represents a KeyLogMsg.
             * @implements IKeyLogMsg
             * @constructor
             * @param {com.message.IKeyLogMsg=} [properties] Properties to set
             */
            function KeyLogMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * KeyLogMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * KeyLogMsg bePlayerId.
             * @member {number|Long} bePlayerId
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.bePlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * KeyLogMsg type.
             * @member {number} type
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.type = 0;

            /**
             * KeyLogMsg beforeMoney.
             * @member {number} beforeMoney
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.beforeMoney = 0;

            /**
             * KeyLogMsg changeMoney.
             * @member {number} changeMoney
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.changeMoney = 0;

            /**
             * KeyLogMsg afterMoney.
             * @member {number} afterMoney
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.afterMoney = 0;

            /**
             * KeyLogMsg logTime.
             * @member {number|Long} logTime
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.logTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * KeyLogMsg info.
             * @member {string} info
             * @memberof com.message.KeyLogMsg
             * @instance
             */
            KeyLogMsg.prototype.info = "";

            /**
             * Encodes the specified KeyLogMsg message. Does not implicitly {@link com.message.KeyLogMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.KeyLogMsg
             * @static
             * @param {com.message.IKeyLogMsg} message KeyLogMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyLogMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.bePlayerId != null && message.hasOwnProperty("bePlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.bePlayerId);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                if (message.beforeMoney != null && message.hasOwnProperty("beforeMoney"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.beforeMoney);
                if (message.changeMoney != null && message.hasOwnProperty("changeMoney"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.changeMoney);
                if (message.afterMoney != null && message.hasOwnProperty("afterMoney"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.afterMoney);
                if (message.logTime != null && message.hasOwnProperty("logTime"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.logTime);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.info);
                return writer;
            };

            /**
             * Decodes a KeyLogMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.KeyLogMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.KeyLogMsg} KeyLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyLogMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.KeyLogMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.bePlayerId = reader.int64();
                        break;
                    case 4:
                        message.type = reader.int32();
                        break;
                    case 5:
                        message.beforeMoney = reader.double();
                        break;
                    case 6:
                        message.changeMoney = reader.double();
                        break;
                    case 7:
                        message.afterMoney = reader.double();
                        break;
                    case 8:
                        message.logTime = reader.int64();
                        break;
                    case 9:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return KeyLogMsg;
        })();

        message.C_GET_KEY_LIST = (function() {

            /**
             * Properties of a C_GET_KEY_LIST.
             * @memberof com.message
             * @interface IC_GET_KEY_LIST
             */

            /**
             * Constructs a new C_GET_KEY_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_KEY_LIST.
             * @implements IC_GET_KEY_LIST
             * @constructor
             * @param {com.message.IC_GET_KEY_LIST=} [properties] Properties to set
             */
            function C_GET_KEY_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_KEY_LIST message. Does not implicitly {@link com.message.C_GET_KEY_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_KEY_LIST
             * @static
             * @param {com.message.IC_GET_KEY_LIST} message C_GET_KEY_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_KEY_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_KEY_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_KEY_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_KEY_LIST} C_GET_KEY_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_KEY_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_KEY_LIST();
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

            return C_GET_KEY_LIST;
        })();

        message.S_GET_KEY_LIST = (function() {

            /**
             * Properties of a S_GET_KEY_LIST.
             * @memberof com.message
             * @interface IS_GET_KEY_LIST
             * @property {Array.<com.message.IKeyLogMsg>|null} [keyLogMsg] S_GET_KEY_LIST keyLogMsg
             * @property {number|null} [keyCount] S_GET_KEY_LIST keyCount
             */

            /**
             * Constructs a new S_GET_KEY_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_KEY_LIST.
             * @implements IS_GET_KEY_LIST
             * @constructor
             * @param {com.message.IS_GET_KEY_LIST=} [properties] Properties to set
             */
            function S_GET_KEY_LIST(properties) {
                this.keyLogMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_KEY_LIST keyLogMsg.
             * @member {Array.<com.message.IKeyLogMsg>} keyLogMsg
             * @memberof com.message.S_GET_KEY_LIST
             * @instance
             */
            S_GET_KEY_LIST.prototype.keyLogMsg = $util.emptyArray;

            /**
             * S_GET_KEY_LIST keyCount.
             * @member {number} keyCount
             * @memberof com.message.S_GET_KEY_LIST
             * @instance
             */
            S_GET_KEY_LIST.prototype.keyCount = 0;

            /**
             * Encodes the specified S_GET_KEY_LIST message. Does not implicitly {@link com.message.S_GET_KEY_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_KEY_LIST
             * @static
             * @param {com.message.IS_GET_KEY_LIST} message S_GET_KEY_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_KEY_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.keyLogMsg != null && message.keyLogMsg.length)
                    for (var i = 0; i < message.keyLogMsg.length; ++i)
                        $root.com.message.KeyLogMsg.encode(message.keyLogMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.keyCount != null && message.hasOwnProperty("keyCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyCount);
                return writer;
            };

            /**
             * Decodes a S_GET_KEY_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_KEY_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_KEY_LIST} S_GET_KEY_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_KEY_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_KEY_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.keyLogMsg && message.keyLogMsg.length))
                            message.keyLogMsg = [];
                        message.keyLogMsg.push($root.com.message.KeyLogMsg.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.keyCount = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_KEY_LIST;
        })();

        message.C_USE_KEY = (function() {

            /**
             * Properties of a C_USE_KEY.
             * @memberof com.message
             * @interface IC_USE_KEY
             */

            /**
             * Constructs a new C_USE_KEY.
             * @memberof com.message
             * @classdesc Represents a C_USE_KEY.
             * @implements IC_USE_KEY
             * @constructor
             * @param {com.message.IC_USE_KEY=} [properties] Properties to set
             */
            function C_USE_KEY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_USE_KEY message. Does not implicitly {@link com.message.C_USE_KEY.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USE_KEY
             * @static
             * @param {com.message.IC_USE_KEY} message C_USE_KEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USE_KEY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_USE_KEY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USE_KEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USE_KEY} C_USE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USE_KEY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USE_KEY();
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

            return C_USE_KEY;
        })();

        message.S_USE_KEY = (function() {

            /**
             * Properties of a S_USE_KEY.
             * @memberof com.message
             * @interface IS_USE_KEY
             * @property {number|null} [state] S_USE_KEY state
             * @property {number|null} [keyCount] S_USE_KEY keyCount
             */

            /**
             * Constructs a new S_USE_KEY.
             * @memberof com.message
             * @classdesc Represents a S_USE_KEY.
             * @implements IS_USE_KEY
             * @constructor
             * @param {com.message.IS_USE_KEY=} [properties] Properties to set
             */
            function S_USE_KEY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_USE_KEY state.
             * @member {number} state
             * @memberof com.message.S_USE_KEY
             * @instance
             */
            S_USE_KEY.prototype.state = 0;

            /**
             * S_USE_KEY keyCount.
             * @member {number} keyCount
             * @memberof com.message.S_USE_KEY
             * @instance
             */
            S_USE_KEY.prototype.keyCount = 0;

            /**
             * Encodes the specified S_USE_KEY message. Does not implicitly {@link com.message.S_USE_KEY.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USE_KEY
             * @static
             * @param {com.message.IS_USE_KEY} message S_USE_KEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USE_KEY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                if (message.keyCount != null && message.hasOwnProperty("keyCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyCount);
                return writer;
            };

            /**
             * Decodes a S_USE_KEY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USE_KEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USE_KEY} S_USE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USE_KEY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USE_KEY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.state = reader.int32();
                        break;
                    case 2:
                        message.keyCount = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_USE_KEY;
        })();

        message.C_GIVE_KEY = (function() {

            /**
             * Properties of a C_GIVE_KEY.
             * @memberof com.message
             * @interface IC_GIVE_KEY
             * @property {string|null} [mobile] C_GIVE_KEY mobile
             * @property {number|null} [giveCount] C_GIVE_KEY giveCount
             */

            /**
             * Constructs a new C_GIVE_KEY.
             * @memberof com.message
             * @classdesc Represents a C_GIVE_KEY.
             * @implements IC_GIVE_KEY
             * @constructor
             * @param {com.message.IC_GIVE_KEY=} [properties] Properties to set
             */
            function C_GIVE_KEY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_GIVE_KEY mobile.
             * @member {string} mobile
             * @memberof com.message.C_GIVE_KEY
             * @instance
             */
            C_GIVE_KEY.prototype.mobile = "";

            /**
             * C_GIVE_KEY giveCount.
             * @member {number} giveCount
             * @memberof com.message.C_GIVE_KEY
             * @instance
             */
            C_GIVE_KEY.prototype.giveCount = 0;

            /**
             * Encodes the specified C_GIVE_KEY message. Does not implicitly {@link com.message.C_GIVE_KEY.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GIVE_KEY
             * @static
             * @param {com.message.IC_GIVE_KEY} message C_GIVE_KEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GIVE_KEY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.giveCount != null && message.hasOwnProperty("giveCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.giveCount);
                return writer;
            };

            /**
             * Decodes a C_GIVE_KEY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GIVE_KEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GIVE_KEY} C_GIVE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GIVE_KEY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GIVE_KEY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.giveCount = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_GIVE_KEY;
        })();

        message.S_GIVE_KEY = (function() {

            /**
             * Properties of a S_GIVE_KEY.
             * @memberof com.message
             * @interface IS_GIVE_KEY
             * @property {string|null} [mobile] S_GIVE_KEY mobile
             * @property {number|null} [keyCount] S_GIVE_KEY keyCount
             */

            /**
             * Constructs a new S_GIVE_KEY.
             * @memberof com.message
             * @classdesc Represents a S_GIVE_KEY.
             * @implements IS_GIVE_KEY
             * @constructor
             * @param {com.message.IS_GIVE_KEY=} [properties] Properties to set
             */
            function S_GIVE_KEY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GIVE_KEY mobile.
             * @member {string} mobile
             * @memberof com.message.S_GIVE_KEY
             * @instance
             */
            S_GIVE_KEY.prototype.mobile = "";

            /**
             * S_GIVE_KEY keyCount.
             * @member {number} keyCount
             * @memberof com.message.S_GIVE_KEY
             * @instance
             */
            S_GIVE_KEY.prototype.keyCount = 0;

            /**
             * Encodes the specified S_GIVE_KEY message. Does not implicitly {@link com.message.S_GIVE_KEY.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GIVE_KEY
             * @static
             * @param {com.message.IS_GIVE_KEY} message S_GIVE_KEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GIVE_KEY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.keyCount != null && message.hasOwnProperty("keyCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyCount);
                return writer;
            };

            /**
             * Decodes a S_GIVE_KEY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GIVE_KEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GIVE_KEY} S_GIVE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GIVE_KEY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GIVE_KEY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.keyCount = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GIVE_KEY;
        })();

        message.BuyGoodMsg = (function() {

            /**
             * Properties of a BuyGoodMsg.
             * @memberof com.message
             * @interface IBuyGoodMsg
             * @property {number|Long|null} [buyGoodMsgId] BuyGoodMsg buyGoodMsgId
             * @property {number|Long|null} [playerId] BuyGoodMsg playerId
             * @property {string|null} [mobile] BuyGoodMsg mobile
             * @property {number|null} [moneyCount] BuyGoodMsg moneyCount
             * @property {number|null} [diamondPrice] BuyGoodMsg diamondPrice
             * @property {number|Long|null} [createTime] BuyGoodMsg createTime
             */

            /**
             * Constructs a new BuyGoodMsg.
             * @memberof com.message
             * @classdesc Represents a BuyGoodMsg.
             * @implements IBuyGoodMsg
             * @constructor
             * @param {com.message.IBuyGoodMsg=} [properties] Properties to set
             */
            function BuyGoodMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BuyGoodMsg buyGoodMsgId.
             * @member {number|Long} buyGoodMsgId
             * @memberof com.message.BuyGoodMsg
             * @instance
             */
            BuyGoodMsg.prototype.buyGoodMsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BuyGoodMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.BuyGoodMsg
             * @instance
             */
            BuyGoodMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BuyGoodMsg mobile.
             * @member {string} mobile
             * @memberof com.message.BuyGoodMsg
             * @instance
             */
            BuyGoodMsg.prototype.mobile = "";

            /**
             * BuyGoodMsg moneyCount.
             * @member {number} moneyCount
             * @memberof com.message.BuyGoodMsg
             * @instance
             */
            BuyGoodMsg.prototype.moneyCount = 0;

            /**
             * BuyGoodMsg diamondPrice.
             * @member {number} diamondPrice
             * @memberof com.message.BuyGoodMsg
             * @instance
             */
            BuyGoodMsg.prototype.diamondPrice = 0;

            /**
             * BuyGoodMsg createTime.
             * @member {number|Long} createTime
             * @memberof com.message.BuyGoodMsg
             * @instance
             */
            BuyGoodMsg.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified BuyGoodMsg message. Does not implicitly {@link com.message.BuyGoodMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.BuyGoodMsg
             * @static
             * @param {com.message.IBuyGoodMsg} message BuyGoodMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BuyGoodMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsgId != null && message.hasOwnProperty("buyGoodMsgId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.buyGoodMsgId);
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.mobile);
                if (message.moneyCount != null && message.hasOwnProperty("moneyCount"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.moneyCount);
                if (message.diamondPrice != null && message.hasOwnProperty("diamondPrice"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.diamondPrice);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createTime);
                return writer;
            };

            /**
             * Decodes a BuyGoodMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.BuyGoodMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.BuyGoodMsg} BuyGoodMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BuyGoodMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.BuyGoodMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyGoodMsgId = reader.int64();
                        break;
                    case 2:
                        message.playerId = reader.int64();
                        break;
                    case 3:
                        message.mobile = reader.string();
                        break;
                    case 4:
                        message.moneyCount = reader.double();
                        break;
                    case 5:
                        message.diamondPrice = reader.double();
                        break;
                    case 6:
                        message.createTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BuyGoodMsg;
        })();

        message.HistoryPriceMsg = (function() {

            /**
             * Properties of a HistoryPriceMsg.
             * @memberof com.message
             * @interface IHistoryPriceMsg
             * @property {number|null} [historyPrice] HistoryPriceMsg historyPrice
             * @property {number|Long|null} [historyTime] HistoryPriceMsg historyTime
             */

            /**
             * Constructs a new HistoryPriceMsg.
             * @memberof com.message
             * @classdesc Represents a HistoryPriceMsg.
             * @implements IHistoryPriceMsg
             * @constructor
             * @param {com.message.IHistoryPriceMsg=} [properties] Properties to set
             */
            function HistoryPriceMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HistoryPriceMsg historyPrice.
             * @member {number} historyPrice
             * @memberof com.message.HistoryPriceMsg
             * @instance
             */
            HistoryPriceMsg.prototype.historyPrice = 0;

            /**
             * HistoryPriceMsg historyTime.
             * @member {number|Long} historyTime
             * @memberof com.message.HistoryPriceMsg
             * @instance
             */
            HistoryPriceMsg.prototype.historyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified HistoryPriceMsg message. Does not implicitly {@link com.message.HistoryPriceMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.HistoryPriceMsg
             * @static
             * @param {com.message.IHistoryPriceMsg} message HistoryPriceMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryPriceMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.historyPrice != null && message.hasOwnProperty("historyPrice"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.historyPrice);
                if (message.historyTime != null && message.hasOwnProperty("historyTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.historyTime);
                return writer;
            };

            /**
             * Decodes a HistoryPriceMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.HistoryPriceMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.HistoryPriceMsg} HistoryPriceMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryPriceMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.HistoryPriceMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.historyPrice = reader.double();
                        break;
                    case 2:
                        message.historyTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return HistoryPriceMsg;
        })();

        message.C_GET_OCT_MARKET_INFO = (function() {

            /**
             * Properties of a C_GET_OCT_MARKET_INFO.
             * @memberof com.message
             * @interface IC_GET_OCT_MARKET_INFO
             */

            /**
             * Constructs a new C_GET_OCT_MARKET_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_OCT_MARKET_INFO.
             * @implements IC_GET_OCT_MARKET_INFO
             * @constructor
             * @param {com.message.IC_GET_OCT_MARKET_INFO=} [properties] Properties to set
             */
            function C_GET_OCT_MARKET_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_OCT_MARKET_INFO message. Does not implicitly {@link com.message.C_GET_OCT_MARKET_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_OCT_MARKET_INFO
             * @static
             * @param {com.message.IC_GET_OCT_MARKET_INFO} message C_GET_OCT_MARKET_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_OCT_MARKET_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_OCT_MARKET_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_OCT_MARKET_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_OCT_MARKET_INFO} C_GET_OCT_MARKET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_OCT_MARKET_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_OCT_MARKET_INFO();
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

            return C_GET_OCT_MARKET_INFO;
        })();

        message.S_GET_OCT_MARKET_INFO = (function() {

            /**
             * Properties of a S_GET_OCT_MARKET_INFO.
             * @memberof com.message
             * @interface IS_GET_OCT_MARKET_INFO
             * @property {number|null} [sysDiamondPrice] S_GET_OCT_MARKET_INFO sysDiamondPrice
             * @property {number|null} [allDiamond] S_GET_OCT_MARKET_INFO allDiamond
             * @property {Array.<com.message.IHistoryPriceMsg>|null} [historyPriceMsgList] S_GET_OCT_MARKET_INFO historyPriceMsgList
             */

            /**
             * Constructs a new S_GET_OCT_MARKET_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_OCT_MARKET_INFO.
             * @implements IS_GET_OCT_MARKET_INFO
             * @constructor
             * @param {com.message.IS_GET_OCT_MARKET_INFO=} [properties] Properties to set
             */
            function S_GET_OCT_MARKET_INFO(properties) {
                this.historyPriceMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_OCT_MARKET_INFO sysDiamondPrice.
             * @member {number} sysDiamondPrice
             * @memberof com.message.S_GET_OCT_MARKET_INFO
             * @instance
             */
            S_GET_OCT_MARKET_INFO.prototype.sysDiamondPrice = 0;

            /**
             * S_GET_OCT_MARKET_INFO allDiamond.
             * @member {number} allDiamond
             * @memberof com.message.S_GET_OCT_MARKET_INFO
             * @instance
             */
            S_GET_OCT_MARKET_INFO.prototype.allDiamond = 0;

            /**
             * S_GET_OCT_MARKET_INFO historyPriceMsgList.
             * @member {Array.<com.message.IHistoryPriceMsg>} historyPriceMsgList
             * @memberof com.message.S_GET_OCT_MARKET_INFO
             * @instance
             */
            S_GET_OCT_MARKET_INFO.prototype.historyPriceMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_OCT_MARKET_INFO message. Does not implicitly {@link com.message.S_GET_OCT_MARKET_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_OCT_MARKET_INFO
             * @static
             * @param {com.message.IS_GET_OCT_MARKET_INFO} message S_GET_OCT_MARKET_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_OCT_MARKET_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sysDiamondPrice != null && message.hasOwnProperty("sysDiamondPrice"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.sysDiamondPrice);
                if (message.allDiamond != null && message.hasOwnProperty("allDiamond"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.allDiamond);
                if (message.historyPriceMsgList != null && message.historyPriceMsgList.length)
                    for (var i = 0; i < message.historyPriceMsgList.length; ++i)
                        $root.com.message.HistoryPriceMsg.encode(message.historyPriceMsgList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_OCT_MARKET_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_OCT_MARKET_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_OCT_MARKET_INFO} S_GET_OCT_MARKET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_OCT_MARKET_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_OCT_MARKET_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sysDiamondPrice = reader.double();
                        break;
                    case 2:
                        message.allDiamond = reader.double();
                        break;
                    case 3:
                        if (!(message.historyPriceMsgList && message.historyPriceMsgList.length))
                            message.historyPriceMsgList = [];
                        message.historyPriceMsgList.push($root.com.message.HistoryPriceMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_OCT_MARKET_INFO;
        })();

        message.C_GET_OCT_BUYGOOD_LIST = (function() {

            /**
             * Properties of a C_GET_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @interface IC_GET_OCT_BUYGOOD_LIST
             * @property {number|null} [page] C_GET_OCT_BUYGOOD_LIST page
             * @property {number|null} [pageSize] C_GET_OCT_BUYGOOD_LIST pageSize
             */

            /**
             * Constructs a new C_GET_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_OCT_BUYGOOD_LIST.
             * @implements IC_GET_OCT_BUYGOOD_LIST
             * @constructor
             * @param {com.message.IC_GET_OCT_BUYGOOD_LIST=} [properties] Properties to set
             */
            function C_GET_OCT_BUYGOOD_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_GET_OCT_BUYGOOD_LIST page.
             * @member {number} page
             * @memberof com.message.C_GET_OCT_BUYGOOD_LIST
             * @instance
             */
            C_GET_OCT_BUYGOOD_LIST.prototype.page = 0;

            /**
             * C_GET_OCT_BUYGOOD_LIST pageSize.
             * @member {number} pageSize
             * @memberof com.message.C_GET_OCT_BUYGOOD_LIST
             * @instance
             */
            C_GET_OCT_BUYGOOD_LIST.prototype.pageSize = 0;

            /**
             * Encodes the specified C_GET_OCT_BUYGOOD_LIST message. Does not implicitly {@link com.message.C_GET_OCT_BUYGOOD_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_OCT_BUYGOOD_LIST
             * @static
             * @param {com.message.IC_GET_OCT_BUYGOOD_LIST} message C_GET_OCT_BUYGOOD_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_OCT_BUYGOOD_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.page != null && message.hasOwnProperty("page"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
                if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                return writer;
            };

            /**
             * Decodes a C_GET_OCT_BUYGOOD_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_OCT_BUYGOOD_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_OCT_BUYGOOD_LIST} C_GET_OCT_BUYGOOD_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_OCT_BUYGOOD_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_OCT_BUYGOOD_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.page = reader.int32();
                        break;
                    case 2:
                        message.pageSize = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_GET_OCT_BUYGOOD_LIST;
        })();

        message.S_GET_OCT_BUYGOOD_LIST = (function() {

            /**
             * Properties of a S_GET_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @interface IS_GET_OCT_BUYGOOD_LIST
             * @property {Array.<com.message.IBuyGoodMsg>|null} [buyGoodMsgList] S_GET_OCT_BUYGOOD_LIST buyGoodMsgList
             */

            /**
             * Constructs a new S_GET_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_OCT_BUYGOOD_LIST.
             * @implements IS_GET_OCT_BUYGOOD_LIST
             * @constructor
             * @param {com.message.IS_GET_OCT_BUYGOOD_LIST=} [properties] Properties to set
             */
            function S_GET_OCT_BUYGOOD_LIST(properties) {
                this.buyGoodMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_OCT_BUYGOOD_LIST buyGoodMsgList.
             * @member {Array.<com.message.IBuyGoodMsg>} buyGoodMsgList
             * @memberof com.message.S_GET_OCT_BUYGOOD_LIST
             * @instance
             */
            S_GET_OCT_BUYGOOD_LIST.prototype.buyGoodMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_OCT_BUYGOOD_LIST message. Does not implicitly {@link com.message.S_GET_OCT_BUYGOOD_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_OCT_BUYGOOD_LIST
             * @static
             * @param {com.message.IS_GET_OCT_BUYGOOD_LIST} message S_GET_OCT_BUYGOOD_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_OCT_BUYGOOD_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsgList != null && message.buyGoodMsgList.length)
                    for (var i = 0; i < message.buyGoodMsgList.length; ++i)
                        $root.com.message.BuyGoodMsg.encode(message.buyGoodMsgList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_OCT_BUYGOOD_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_OCT_BUYGOOD_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_OCT_BUYGOOD_LIST} S_GET_OCT_BUYGOOD_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_OCT_BUYGOOD_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_OCT_BUYGOOD_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 4:
                        if (!(message.buyGoodMsgList && message.buyGoodMsgList.length))
                            message.buyGoodMsgList = [];
                        message.buyGoodMsgList.push($root.com.message.BuyGoodMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_OCT_BUYGOOD_LIST;
        })();

        message.C_GET_MY_OCT_BUYGOOD_LIST = (function() {

            /**
             * Properties of a C_GET_MY_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @interface IC_GET_MY_OCT_BUYGOOD_LIST
             */

            /**
             * Constructs a new C_GET_MY_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_MY_OCT_BUYGOOD_LIST.
             * @implements IC_GET_MY_OCT_BUYGOOD_LIST
             * @constructor
             * @param {com.message.IC_GET_MY_OCT_BUYGOOD_LIST=} [properties] Properties to set
             */
            function C_GET_MY_OCT_BUYGOOD_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MY_OCT_BUYGOOD_LIST message. Does not implicitly {@link com.message.C_GET_MY_OCT_BUYGOOD_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MY_OCT_BUYGOOD_LIST
             * @static
             * @param {com.message.IC_GET_MY_OCT_BUYGOOD_LIST} message C_GET_MY_OCT_BUYGOOD_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MY_OCT_BUYGOOD_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MY_OCT_BUYGOOD_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MY_OCT_BUYGOOD_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MY_OCT_BUYGOOD_LIST} C_GET_MY_OCT_BUYGOOD_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MY_OCT_BUYGOOD_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MY_OCT_BUYGOOD_LIST();
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

            return C_GET_MY_OCT_BUYGOOD_LIST;
        })();

        message.S_GET_MY_OCT_BUYGOOD_LIST = (function() {

            /**
             * Properties of a S_GET_MY_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @interface IS_GET_MY_OCT_BUYGOOD_LIST
             * @property {Array.<com.message.IBuyGoodMsg>|null} [buyGoodMsgList] S_GET_MY_OCT_BUYGOOD_LIST buyGoodMsgList
             */

            /**
             * Constructs a new S_GET_MY_OCT_BUYGOOD_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_MY_OCT_BUYGOOD_LIST.
             * @implements IS_GET_MY_OCT_BUYGOOD_LIST
             * @constructor
             * @param {com.message.IS_GET_MY_OCT_BUYGOOD_LIST=} [properties] Properties to set
             */
            function S_GET_MY_OCT_BUYGOOD_LIST(properties) {
                this.buyGoodMsgList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MY_OCT_BUYGOOD_LIST buyGoodMsgList.
             * @member {Array.<com.message.IBuyGoodMsg>} buyGoodMsgList
             * @memberof com.message.S_GET_MY_OCT_BUYGOOD_LIST
             * @instance
             */
            S_GET_MY_OCT_BUYGOOD_LIST.prototype.buyGoodMsgList = $util.emptyArray;

            /**
             * Encodes the specified S_GET_MY_OCT_BUYGOOD_LIST message. Does not implicitly {@link com.message.S_GET_MY_OCT_BUYGOOD_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MY_OCT_BUYGOOD_LIST
             * @static
             * @param {com.message.IS_GET_MY_OCT_BUYGOOD_LIST} message S_GET_MY_OCT_BUYGOOD_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MY_OCT_BUYGOOD_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsgList != null && message.buyGoodMsgList.length)
                    for (var i = 0; i < message.buyGoodMsgList.length; ++i)
                        $root.com.message.BuyGoodMsg.encode(message.buyGoodMsgList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_MY_OCT_BUYGOOD_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MY_OCT_BUYGOOD_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MY_OCT_BUYGOOD_LIST} S_GET_MY_OCT_BUYGOOD_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MY_OCT_BUYGOOD_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MY_OCT_BUYGOOD_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 4:
                        if (!(message.buyGoodMsgList && message.buyGoodMsgList.length))
                            message.buyGoodMsgList = [];
                        message.buyGoodMsgList.push($root.com.message.BuyGoodMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MY_OCT_BUYGOOD_LIST;
        })();

        message.C_MARKET_BUY = (function() {

            /**
             * Properties of a C_MARKET_BUY.
             * @memberof com.message
             * @interface IC_MARKET_BUY
             * @property {number|null} [diamondPrice] C_MARKET_BUY diamondPrice
             * @property {number|null} [moneyCount] C_MARKET_BUY moneyCount
             */

            /**
             * Constructs a new C_MARKET_BUY.
             * @memberof com.message
             * @classdesc Represents a C_MARKET_BUY.
             * @implements IC_MARKET_BUY
             * @constructor
             * @param {com.message.IC_MARKET_BUY=} [properties] Properties to set
             */
            function C_MARKET_BUY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_MARKET_BUY diamondPrice.
             * @member {number} diamondPrice
             * @memberof com.message.C_MARKET_BUY
             * @instance
             */
            C_MARKET_BUY.prototype.diamondPrice = 0;

            /**
             * C_MARKET_BUY moneyCount.
             * @member {number} moneyCount
             * @memberof com.message.C_MARKET_BUY
             * @instance
             */
            C_MARKET_BUY.prototype.moneyCount = 0;

            /**
             * Encodes the specified C_MARKET_BUY message. Does not implicitly {@link com.message.C_MARKET_BUY.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_MARKET_BUY
             * @static
             * @param {com.message.IC_MARKET_BUY} message C_MARKET_BUY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_MARKET_BUY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.diamondPrice != null && message.hasOwnProperty("diamondPrice"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.diamondPrice);
                if (message.moneyCount != null && message.hasOwnProperty("moneyCount"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.moneyCount);
                return writer;
            };

            /**
             * Decodes a C_MARKET_BUY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_MARKET_BUY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_MARKET_BUY} C_MARKET_BUY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_MARKET_BUY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_MARKET_BUY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.diamondPrice = reader.double();
                        break;
                    case 3:
                        message.moneyCount = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_MARKET_BUY;
        })();

        message.S_MARKET_BUY = (function() {

            /**
             * Properties of a S_MARKET_BUY.
             * @memberof com.message
             * @interface IS_MARKET_BUY
             * @property {com.message.IBuyGoodMsg|null} [buyGoodMsg] S_MARKET_BUY buyGoodMsg
             */

            /**
             * Constructs a new S_MARKET_BUY.
             * @memberof com.message
             * @classdesc Represents a S_MARKET_BUY.
             * @implements IS_MARKET_BUY
             * @constructor
             * @param {com.message.IS_MARKET_BUY=} [properties] Properties to set
             */
            function S_MARKET_BUY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_MARKET_BUY buyGoodMsg.
             * @member {com.message.IBuyGoodMsg|null|undefined} buyGoodMsg
             * @memberof com.message.S_MARKET_BUY
             * @instance
             */
            S_MARKET_BUY.prototype.buyGoodMsg = null;

            /**
             * Encodes the specified S_MARKET_BUY message. Does not implicitly {@link com.message.S_MARKET_BUY.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_MARKET_BUY
             * @static
             * @param {com.message.IS_MARKET_BUY} message S_MARKET_BUY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_MARKET_BUY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsg != null && message.hasOwnProperty("buyGoodMsg"))
                    $root.com.message.BuyGoodMsg.encode(message.buyGoodMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_MARKET_BUY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_MARKET_BUY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_MARKET_BUY} S_MARKET_BUY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_MARKET_BUY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_MARKET_BUY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyGoodMsg = $root.com.message.BuyGoodMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_MARKET_BUY;
        })();

        message.C_MARKET_SELL = (function() {

            /**
             * Properties of a C_MARKET_SELL.
             * @memberof com.message
             * @interface IC_MARKET_SELL
             * @property {number|Long|null} [buyGoodMsgId] C_MARKET_SELL buyGoodMsgId
             * @property {number|null} [sellMoneyCount] C_MARKET_SELL sellMoneyCount
             */

            /**
             * Constructs a new C_MARKET_SELL.
             * @memberof com.message
             * @classdesc Represents a C_MARKET_SELL.
             * @implements IC_MARKET_SELL
             * @constructor
             * @param {com.message.IC_MARKET_SELL=} [properties] Properties to set
             */
            function C_MARKET_SELL(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_MARKET_SELL buyGoodMsgId.
             * @member {number|Long} buyGoodMsgId
             * @memberof com.message.C_MARKET_SELL
             * @instance
             */
            C_MARKET_SELL.prototype.buyGoodMsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * C_MARKET_SELL sellMoneyCount.
             * @member {number} sellMoneyCount
             * @memberof com.message.C_MARKET_SELL
             * @instance
             */
            C_MARKET_SELL.prototype.sellMoneyCount = 0;

            /**
             * Encodes the specified C_MARKET_SELL message. Does not implicitly {@link com.message.C_MARKET_SELL.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_MARKET_SELL
             * @static
             * @param {com.message.IC_MARKET_SELL} message C_MARKET_SELL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_MARKET_SELL.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsgId != null && message.hasOwnProperty("buyGoodMsgId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.buyGoodMsgId);
                if (message.sellMoneyCount != null && message.hasOwnProperty("sellMoneyCount"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.sellMoneyCount);
                return writer;
            };

            /**
             * Decodes a C_MARKET_SELL message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_MARKET_SELL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_MARKET_SELL} C_MARKET_SELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_MARKET_SELL.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_MARKET_SELL();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyGoodMsgId = reader.int64();
                        break;
                    case 2:
                        message.sellMoneyCount = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_MARKET_SELL;
        })();

        message.S_MARKET_SELL = (function() {

            /**
             * Properties of a S_MARKET_SELL.
             * @memberof com.message
             * @interface IS_MARKET_SELL
             * @property {number|Long|null} [buyGoodMsgId] S_MARKET_SELL buyGoodMsgId
             * @property {number|null} [sellMoneyCount] S_MARKET_SELL sellMoneyCount
             */

            /**
             * Constructs a new S_MARKET_SELL.
             * @memberof com.message
             * @classdesc Represents a S_MARKET_SELL.
             * @implements IS_MARKET_SELL
             * @constructor
             * @param {com.message.IS_MARKET_SELL=} [properties] Properties to set
             */
            function S_MARKET_SELL(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_MARKET_SELL buyGoodMsgId.
             * @member {number|Long} buyGoodMsgId
             * @memberof com.message.S_MARKET_SELL
             * @instance
             */
            S_MARKET_SELL.prototype.buyGoodMsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_MARKET_SELL sellMoneyCount.
             * @member {number} sellMoneyCount
             * @memberof com.message.S_MARKET_SELL
             * @instance
             */
            S_MARKET_SELL.prototype.sellMoneyCount = 0;

            /**
             * Encodes the specified S_MARKET_SELL message. Does not implicitly {@link com.message.S_MARKET_SELL.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_MARKET_SELL
             * @static
             * @param {com.message.IS_MARKET_SELL} message S_MARKET_SELL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_MARKET_SELL.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsgId != null && message.hasOwnProperty("buyGoodMsgId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.buyGoodMsgId);
                if (message.sellMoneyCount != null && message.hasOwnProperty("sellMoneyCount"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.sellMoneyCount);
                return writer;
            };

            /**
             * Decodes a S_MARKET_SELL message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_MARKET_SELL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_MARKET_SELL} S_MARKET_SELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_MARKET_SELL.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_MARKET_SELL();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyGoodMsgId = reader.int64();
                        break;
                    case 2:
                        message.sellMoneyCount = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_MARKET_SELL;
        })();

        message.C_MARKET_CANCEL = (function() {

            /**
             * Properties of a C_MARKET_CANCEL.
             * @memberof com.message
             * @interface IC_MARKET_CANCEL
             * @property {number|Long|null} [buyGoodMsgId] C_MARKET_CANCEL buyGoodMsgId
             */

            /**
             * Constructs a new C_MARKET_CANCEL.
             * @memberof com.message
             * @classdesc Represents a C_MARKET_CANCEL.
             * @implements IC_MARKET_CANCEL
             * @constructor
             * @param {com.message.IC_MARKET_CANCEL=} [properties] Properties to set
             */
            function C_MARKET_CANCEL(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_MARKET_CANCEL buyGoodMsgId.
             * @member {number|Long} buyGoodMsgId
             * @memberof com.message.C_MARKET_CANCEL
             * @instance
             */
            C_MARKET_CANCEL.prototype.buyGoodMsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_MARKET_CANCEL message. Does not implicitly {@link com.message.C_MARKET_CANCEL.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_MARKET_CANCEL
             * @static
             * @param {com.message.IC_MARKET_CANCEL} message C_MARKET_CANCEL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_MARKET_CANCEL.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsgId != null && message.hasOwnProperty("buyGoodMsgId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.buyGoodMsgId);
                return writer;
            };

            /**
             * Decodes a C_MARKET_CANCEL message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_MARKET_CANCEL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_MARKET_CANCEL} C_MARKET_CANCEL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_MARKET_CANCEL.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_MARKET_CANCEL();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyGoodMsgId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_MARKET_CANCEL;
        })();

        message.S_MARKET_CANCEL = (function() {

            /**
             * Properties of a S_MARKET_CANCEL.
             * @memberof com.message
             * @interface IS_MARKET_CANCEL
             * @property {number|Long|null} [buyGoodMsgId] S_MARKET_CANCEL buyGoodMsgId
             */

            /**
             * Constructs a new S_MARKET_CANCEL.
             * @memberof com.message
             * @classdesc Represents a S_MARKET_CANCEL.
             * @implements IS_MARKET_CANCEL
             * @constructor
             * @param {com.message.IS_MARKET_CANCEL=} [properties] Properties to set
             */
            function S_MARKET_CANCEL(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_MARKET_CANCEL buyGoodMsgId.
             * @member {number|Long} buyGoodMsgId
             * @memberof com.message.S_MARKET_CANCEL
             * @instance
             */
            S_MARKET_CANCEL.prototype.buyGoodMsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified S_MARKET_CANCEL message. Does not implicitly {@link com.message.S_MARKET_CANCEL.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_MARKET_CANCEL
             * @static
             * @param {com.message.IS_MARKET_CANCEL} message S_MARKET_CANCEL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_MARKET_CANCEL.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyGoodMsgId != null && message.hasOwnProperty("buyGoodMsgId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.buyGoodMsgId);
                return writer;
            };

            /**
             * Decodes a S_MARKET_CANCEL message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_MARKET_CANCEL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_MARKET_CANCEL} S_MARKET_CANCEL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_MARKET_CANCEL.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_MARKET_CANCEL();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyGoodMsgId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_MARKET_CANCEL;
        })();

        message.MsgEnum = (function() {

            /**
             * Properties of a MsgEnum.
             * @memberof com.message
             * @interface IMsgEnum
             */

            /**
             * Constructs a new MsgEnum.
             * @memberof com.message
             * @classdesc Represents a MsgEnum.
             * @implements IMsgEnum
             * @constructor
             * @param {com.message.IMsgEnum=} [properties] Properties to set
             */
            function MsgEnum(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified MsgEnum message. Does not implicitly {@link com.message.MsgEnum.verify|verify} messages.
             * @function encode
             * @memberof com.message.MsgEnum
             * @static
             * @param {com.message.IMsgEnum} message MsgEnum message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgEnum.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a MsgEnum message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.MsgEnum
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.MsgEnum} MsgEnum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgEnum.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.MsgEnum();
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
             * MsgCode enum.
             * @name com.message.MsgEnum.MsgCode
             * @enum {string}
             * @property {number} MSG_EMPTY=0 MSG_EMPTY value
             * @property {number} S_EXCEPTION_MSG=900 S_EXCEPTION_MSG value
             * @property {number} C_USER_LOGIN=1001 C_USER_LOGIN value
             * @property {number} S_USER_LOGIN=1002 S_USER_LOGIN value
             * @property {number} S_USER_LOGIN_BAN=1003 S_USER_LOGIN_BAN value
             * @property {number} C_USER_LOGIN_VERIFY_CODE=1004 C_USER_LOGIN_VERIFY_CODE value
             * @property {number} C_LOGIN_REGISTER=1005 C_LOGIN_REGISTER value
             * @property {number} S_LOGIN_REGISTER=1006 S_LOGIN_REGISTER value
             * @property {number} C_USER_LOGOUT=1007 C_USER_LOGOUT value
             * @property {number} S_USER_LOGOUT=1008 S_USER_LOGOUT value
             * @property {number} C_USER_LOGIN_INIT_FINISH=1009 C_USER_LOGIN_INIT_FINISH value
             * @property {number} S_USER_LOGIN_INIT_FINISH=1010 S_USER_LOGIN_INIT_FINISH value
             * @property {number} C_MODIFY_PASSWORD=1011 C_MODIFY_PASSWORD value
             * @property {number} S_MODIFY_PASSWORD=1012 S_MODIFY_PASSWORD value
             * @property {number} C_USE_KEY=1013 C_USE_KEY value
             * @property {number} S_USE_KEY=1014 S_USE_KEY value
             * @property {number} C_GIVE_KEY=1015 C_GIVE_KEY value
             * @property {number} S_GIVE_KEY=1016 S_GIVE_KEY value
             * @property {number} C_GET_KEY_LIST=1017 C_GET_KEY_LIST value
             * @property {number} S_GET_KEY_LIST=1018 S_GET_KEY_LIST value
             * @property {number} C_SEND_VERIFY_CODE=1019 C_SEND_VERIFY_CODE value
             * @property {number} S_SEND_VERIFY_CODE=1020 S_SEND_VERIFY_CODE value
             * @property {number} C_GET_FISH_INFO=1051 C_GET_FISH_INFO value
             * @property {number} S_GET_FISH_INFO=1052 S_GET_FISH_INFO value
             * @property {number} C_BUY_FISH=1053 C_BUY_FISH value
             * @property {number} S_BUY_FISH=1054 S_BUY_FISH value
             * @property {number} C_COMBINE_FISH=1055 C_COMBINE_FISH value
             * @property {number} S_COMBINE_FISH=1056 S_COMBINE_FISH value
             * @property {number} C_GET_MONEY_REWARD=1057 C_GET_MONEY_REWARD value
             * @property {number} S_GET_MONEY_REWARD=1058 S_GET_MONEY_REWARD value
             * @property {number} C_GET_MONEY_INFO=1059 C_GET_MONEY_INFO value
             * @property {number} S_GET_MONEY_INFO=1060 S_GET_MONEY_INFO value
             * @property {number} C_DIAMOND_BUY_FISH=1061 C_DIAMOND_BUY_FISH value
             * @property {number} S_DIAMOND_BUY_FISH=1062 S_DIAMOND_BUY_FISH value
             * @property {number} C_GET_MONEY_LOG_LIST=1063 C_GET_MONEY_LOG_LIST value
             * @property {number} S_GET_MONEY_LOG_LIST=1064 S_GET_MONEY_LOG_LIST value
             * @property {number} C_GET_DIAMOND_LOG_LIST=1065 C_GET_DIAMOND_LOG_LIST value
             * @property {number} S_GET_DIAMOND_LOG_LIST=1066 S_GET_DIAMOND_LOG_LIST value
             * @property {number} C_GET_OCT_MARKET_INFO=1101 C_GET_OCT_MARKET_INFO value
             * @property {number} S_GET_OCT_MARKET_INFO=1102 S_GET_OCT_MARKET_INFO value
             * @property {number} C_MARKET_BUY=1103 C_MARKET_BUY value
             * @property {number} S_MARKET_BUY=1104 S_MARKET_BUY value
             * @property {number} C_MARKET_SELL=1105 C_MARKET_SELL value
             * @property {number} S_MARKET_SELL=1106 S_MARKET_SELL value
             * @property {number} C_MARKET_CANCEL=1107 C_MARKET_CANCEL value
             * @property {number} S_MARKET_CANCEL=1108 S_MARKET_CANCEL value
             * @property {number} C_GET_OCT_BUYGOOD_LIST=1109 C_GET_OCT_BUYGOOD_LIST value
             * @property {number} S_GET_OCT_BUYGOOD_LIST=1110 S_GET_OCT_BUYGOOD_LIST value
             * @property {number} C_GET_MY_OCT_BUYGOOD_LIST=1111 C_GET_MY_OCT_BUYGOOD_LIST value
             * @property {number} S_GET_MY_OCT_BUYGOOD_LIST=1112 S_GET_MY_OCT_BUYGOOD_LIST value
             * @property {number} C_GET_MONEY_EXCHANGE_INFO=1201 C_GET_MONEY_EXCHANGE_INFO value
             * @property {number} S_GET_MONEY_EXCHANGE_INFO=1202 S_GET_MONEY_EXCHANGE_INFO value
             * @property {number} C_MONEY_EXCHANGE_KAD=1203 C_MONEY_EXCHANGE_KAD value
             * @property {number} S_MONEY_EXCHANGE_KAD=1204 S_MONEY_EXCHANGE_KAD value
             * @property {number} C_GET_BONUS_INFO=1205 C_GET_BONUS_INFO value
             * @property {number} S_GET_BONUS_INFO=1206 S_GET_BONUS_INFO value
             * @property {number} C_GET_INJECT_INFO=1207 C_GET_INJECT_INFO value
             * @property {number} S_GET_INJECT_INFO=1208 S_GET_INJECT_INFO value
             * @property {number} C_INJECT_KAD=1209 C_INJECT_KAD value
             * @property {number} S_INJECT_KAD=1210 S_INJECT_KAD value
             * @property {number} C_REAL_NAME_VERIFICATION=1221 C_REAL_NAME_VERIFICATION value
             * @property {number} S_REAL_NAME_VERIFICATION=1222 S_REAL_NAME_VERIFICATION value
             * @property {number} C_GET_MY_TEAM_INFO=1301 C_GET_MY_TEAM_INFO value
             * @property {number} S_GET_MY_TEAM_INFO=1302 S_GET_MY_TEAM_INFO value
             * @property {number} C_GET_MY_TEAM_LIST=1303 C_GET_MY_TEAM_LIST value
             * @property {number} S_GET_MY_TEAM_LIST=1304 S_GET_MY_TEAM_LIST value
             * @property {number} C_GET_MY_ADDRESS=1401 C_GET_MY_ADDRESS value
             * @property {number} S_GET_MY_ADDRESS=1402 S_GET_MY_ADDRESS value
             * @property {number} C_GET_EXTRACT_LIST=1403 C_GET_EXTRACT_LIST value
             * @property {number} S_GET_EXTRACT_LIST=1404 S_GET_EXTRACT_LIST value
             * @property {number} C_GET_RECHARGE_LIST=1405 C_GET_RECHARGE_LIST value
             * @property {number} S_GET_RECHARGE_LIST=1406 S_GET_RECHARGE_LIST value
             * @property {number} C_GET_CASH_OUT_ORDER=1501 C_GET_CASH_OUT_ORDER value
             * @property {number} S_GET_CASH_OUT_ORDER=1502 S_GET_CASH_OUT_ORDER value
             * @property {number} C_GET_FEED_COUNT=1503 C_GET_FEED_COUNT value
             * @property {number} S_GET_FEED_COUNT=1504 S_GET_FEED_COUNT value
             * @property {number} C_CASH_OUT_APPLY=1505 C_CASH_OUT_APPLY value
             * @property {number} S_CASH_OUT_APPLY=1506 S_CASH_OUT_APPLY value
             * @property {number} C_GET_SYS_CONFIG=1601 C_GET_SYS_CONFIG value
             * @property {number} S_GET_SYS_CONFIG=1602 S_GET_SYS_CONFIG value
             * @property {number} S_SYNC_SYS_CONFIG=1603 S_SYNC_SYS_CONFIG value
             * @property {number} C_GET_DIRECT_RATE_CONFIG=1605 C_GET_DIRECT_RATE_CONFIG value
             * @property {number} S_GET_DIRECT_RATE_CONFIG=1606 S_GET_DIRECT_RATE_CONFIG value
             * @property {number} S_SYNC_DIRECT_RATE_CONFIG=1607 S_SYNC_DIRECT_RATE_CONFIG value
             * @property {number} C_GET_FISH_CONFIG=1609 C_GET_FISH_CONFIG value
             * @property {number} S_GET_FISH_CONFIG=1610 S_GET_FISH_CONFIG value
             * @property {number} S_SYNC_FISH_CONFIG=1611 S_SYNC_FISH_CONFIG value
             * @property {number} C_GET_INJECT_CYCLE_CONFIG=1613 C_GET_INJECT_CYCLE_CONFIG value
             * @property {number} S_GET_INJECT_CYCLE_CONFIG=1614 S_GET_INJECT_CYCLE_CONFIG value
             * @property {number} S_SYNC_INJECT_CYCLE_CONFIG=1615 S_SYNC_INJECT_CYCLE_CONFIG value
             * @property {number} C_GET_TEAM_RATE_CONFIG=1617 C_GET_TEAM_RATE_CONFIG value
             * @property {number} S_GET_TEAM_RATE_CONFIG=1618 S_GET_TEAM_RATE_CONFIG value
             * @property {number} S_SYNC_TEAM_RATE_CONFIG=1619 S_SYNC_TEAM_RATE_CONFIG value
             * @property {number} C_GET_TRADE_RATE_CONFIG=1621 C_GET_TRADE_RATE_CONFIG value
             * @property {number} S_GET_TRADE_RATE_CONFIG=1622 S_GET_TRADE_RATE_CONFIG value
             * @property {number} S_SYNC_TRADE_RATE_CONFIG=1623 S_SYNC_TRADE_RATE_CONFIG value
             * @property {number} C_GET_DEEP_FISH_CONFIG=1624 C_GET_DEEP_FISH_CONFIG value
             * @property {number} S_GET_DEEP_FISH_CONFIG=1625 S_GET_DEEP_FISH_CONFIG value
             * @property {number} S_SYNC_DEEP_FISH_CONFIG=1626 S_SYNC_DEEP_FISH_CONFIG value
             * @property {number} C_GET_OCEAN_DRAW_CONFIG=1627 C_GET_OCEAN_DRAW_CONFIG value
             * @property {number} S_GET_OCEAN_DRAW_CONFIG=1628 S_GET_OCEAN_DRAW_CONFIG value
             * @property {number} S_SYNC_OCEAN_DRAW_CONFIG=1629 S_SYNC_OCEAN_DRAW_CONFIG value
             * @property {number} S_SYN_PROPERTY=2001 S_SYN_PROPERTY value
             * @property {number} C_SYNC_TIME=2101 C_SYNC_TIME value
             * @property {number} S_SYNC_TIME=2102 S_SYNC_TIME value
             * @property {number} C_DEBUG_COMMON=3101 C_DEBUG_COMMON value
             * @property {number} S_DEBUG_COMMON=3102 S_DEBUG_COMMON value
             * @property {number} C_GET_DOLPHIN_INFO=5001 C_GET_DOLPHIN_INFO value
             * @property {number} S_GET_DOLPHIN_INFO=5002 S_GET_DOLPHIN_INFO value
             * @property {number} C_BUY_DOLPHIN=5003 C_BUY_DOLPHIN value
             * @property {number} S_BUY_DOLPHIN=5004 S_BUY_DOLPHIN value
             * @property {number} C_QUICK_DOLPHIN=5005 C_QUICK_DOLPHIN value
             * @property {number} S_QUICK_DOLPHIN=5006 S_QUICK_DOLPHIN value
             * @property {number} C_HATCH_DOLPHIN=5007 C_HATCH_DOLPHIN value
             * @property {number} S_HATCH_DOLPHIN=5008 S_HATCH_DOLPHIN value
             * @property {number} C_FERTILIZE_DOLPHIN=5009 C_FERTILIZE_DOLPHIN value
             * @property {number} S_FERTILIZE_DOLPHIN=5010 S_FERTILIZE_DOLPHIN value
             * @property {number} C_GET_DOLPHIN_MONEY_LOG_LIST=5011 C_GET_DOLPHIN_MONEY_LOG_LIST value
             * @property {number} S_GET_DOLPHIN_MONEY_LOG_LIST=5012 S_GET_DOLPHIN_MONEY_LOG_LIST value
             * @property {number} C_GET_DOLPHIN_BUYCOUNT_LOG_LIST=5013 C_GET_DOLPHIN_BUYCOUNT_LOG_LIST value
             * @property {number} S_GET_DOLPHIN_BUYCOUNT_LOG_LIST=5014 S_GET_DOLPHIN_BUYCOUNT_LOG_LIST value
             * @property {number} C_EXCHANGE_DOLPHIN_MONEY=5015 C_EXCHANGE_DOLPHIN_MONEY value
             * @property {number} S_EXCHANGE_DOLPHIN_MONEY=5016 S_EXCHANGE_DOLPHIN_MONEY value
             * @property {number} C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST=5017 C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST value
             * @property {number} S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST=5018 S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST value
             * @property {number} C_GET_SIGN_IN_INFO=5019 C_GET_SIGN_IN_INFO value
             * @property {number} S_GET_SIGN_IN_INFO=5020 S_GET_SIGN_IN_INFO value
             * @property {number} C_GET_SIGN_IN_REWARD=5021 C_GET_SIGN_IN_REWARD value
             * @property {number} S_GET_SIGN_IN_REWARD=5022 S_GET_SIGN_IN_REWARD value
             * @property {number} C_GET_DOLPHIN_WAIT_LIST=5023 C_GET_DOLPHIN_WAIT_LIST value
             * @property {number} S_GET_DOLPHIN_WAIT_LIST=5024 S_GET_DOLPHIN_WAIT_LIST value
             * @property {number} S_SYNC_NEW_DOLPHIN=5030 S_SYNC_NEW_DOLPHIN value
             * @property {number} C_GET_DEAP_ACTIVITY_INFO=5101 C_GET_DEAP_ACTIVITY_INFO value
             * @property {number} S_GET_DEAP_ACTIVITY_INFO=5102 S_GET_DEAP_ACTIVITY_INFO value
             * @property {number} C_GET_MY_DEAP_ACTIVITY_INFO=5103 C_GET_MY_DEAP_ACTIVITY_INFO value
             * @property {number} S_GET_MY_DEAP_ACTIVITY_INFO=5104 S_GET_MY_DEAP_ACTIVITY_INFO value
             * @property {number} C_BUY_DEAP_ACTIVITY_FISH=5105 C_BUY_DEAP_ACTIVITY_FISH value
             * @property {number} S_BUY_DEAP_ACTIVITY_FISH=5106 S_BUY_DEAP_ACTIVITY_FISH value
             * @property {number} C_GET_OCEAN_ACTIVITY_INFO=5201 C_GET_OCEAN_ACTIVITY_INFO value
             * @property {number} S_GET_OCEAN_ACTIVITY_INFO=5202 S_GET_OCEAN_ACTIVITY_INFO value
             * @property {number} C_GET_MY_OCEAN_ACTIVITY_INFO=5203 C_GET_MY_OCEAN_ACTIVITY_INFO value
             * @property {number} S_GET_MY_OCEAN_ACTIVITY_INFO=5204 S_GET_MY_OCEAN_ACTIVITY_INFO value
             * @property {number} C_OCEAN_ACTIVITY_DRAW=5205 C_OCEAN_ACTIVITY_DRAW value
             * @property {number} S_OCEAN_ACTIVITY_DRAW=5206 S_OCEAN_ACTIVITY_DRAW value
             * @property {number} C_GET_OCEAN_ACTIVITY_RANK=5207 C_GET_OCEAN_ACTIVITY_RANK value
             * @property {number} S_GET_OCEAN_ACTIVITY_RANK=5208 S_GET_OCEAN_ACTIVITY_RANK value
             * @property {number} C_GET_OCEAN_ACTIVITY_DRAW_LOG=5209 C_GET_OCEAN_ACTIVITY_DRAW_LOG value
             * @property {number} S_GET_OCEAN_ACTIVITY_DRAW_LOG=5210 S_GET_OCEAN_ACTIVITY_DRAW_LOG value
             * @property {number} CROSS_C_HEART_BEAT=100001 CROSS_C_HEART_BEAT value
             * @property {number} CROSS_S_HEART_BEAT=100002 CROSS_S_HEART_BEAT value
             * @property {number} CROSS_C_SERVER_REGISTER=100003 CROSS_C_SERVER_REGISTER value
             * @property {number} CROSS_S_SERVER_REGISTER=100004 CROSS_S_SERVER_REGISTER value
             * @property {number} CROSS_S_EXCEPTION_MSG=100005 CROSS_S_EXCEPTION_MSG value
             * @property {number} CROSS_C_SERVER_PUSH=100006 CROSS_C_SERVER_PUSH value
             * @property {number} CROSS_S_SERVER_PUSH=100007 CROSS_S_SERVER_PUSH value
             * @property {number} CROSS_C_HTTP_DATA=100008 CROSS_C_HTTP_DATA value
             */
            MsgEnum.MsgCode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MSG_EMPTY"] = 0;
                values[valuesById[900] = "S_EXCEPTION_MSG"] = 900;
                values[valuesById[1001] = "C_USER_LOGIN"] = 1001;
                values[valuesById[1002] = "S_USER_LOGIN"] = 1002;
                values[valuesById[1003] = "S_USER_LOGIN_BAN"] = 1003;
                values[valuesById[1004] = "C_USER_LOGIN_VERIFY_CODE"] = 1004;
                values[valuesById[1005] = "C_LOGIN_REGISTER"] = 1005;
                values[valuesById[1006] = "S_LOGIN_REGISTER"] = 1006;
                values[valuesById[1007] = "C_USER_LOGOUT"] = 1007;
                values[valuesById[1008] = "S_USER_LOGOUT"] = 1008;
                values[valuesById[1009] = "C_USER_LOGIN_INIT_FINISH"] = 1009;
                values[valuesById[1010] = "S_USER_LOGIN_INIT_FINISH"] = 1010;
                values[valuesById[1011] = "C_MODIFY_PASSWORD"] = 1011;
                values[valuesById[1012] = "S_MODIFY_PASSWORD"] = 1012;
                values[valuesById[1013] = "C_USE_KEY"] = 1013;
                values[valuesById[1014] = "S_USE_KEY"] = 1014;
                values[valuesById[1015] = "C_GIVE_KEY"] = 1015;
                values[valuesById[1016] = "S_GIVE_KEY"] = 1016;
                values[valuesById[1017] = "C_GET_KEY_LIST"] = 1017;
                values[valuesById[1018] = "S_GET_KEY_LIST"] = 1018;
                values[valuesById[1019] = "C_SEND_VERIFY_CODE"] = 1019;
                values[valuesById[1020] = "S_SEND_VERIFY_CODE"] = 1020;
                values[valuesById[1051] = "C_GET_FISH_INFO"] = 1051;
                values[valuesById[1052] = "S_GET_FISH_INFO"] = 1052;
                values[valuesById[1053] = "C_BUY_FISH"] = 1053;
                values[valuesById[1054] = "S_BUY_FISH"] = 1054;
                values[valuesById[1055] = "C_COMBINE_FISH"] = 1055;
                values[valuesById[1056] = "S_COMBINE_FISH"] = 1056;
                values[valuesById[1057] = "C_GET_MONEY_REWARD"] = 1057;
                values[valuesById[1058] = "S_GET_MONEY_REWARD"] = 1058;
                values[valuesById[1059] = "C_GET_MONEY_INFO"] = 1059;
                values[valuesById[1060] = "S_GET_MONEY_INFO"] = 1060;
                values[valuesById[1061] = "C_DIAMOND_BUY_FISH"] = 1061;
                values[valuesById[1062] = "S_DIAMOND_BUY_FISH"] = 1062;
                values[valuesById[1063] = "C_GET_MONEY_LOG_LIST"] = 1063;
                values[valuesById[1064] = "S_GET_MONEY_LOG_LIST"] = 1064;
                values[valuesById[1065] = "C_GET_DIAMOND_LOG_LIST"] = 1065;
                values[valuesById[1066] = "S_GET_DIAMOND_LOG_LIST"] = 1066;
                values[valuesById[1101] = "C_GET_OCT_MARKET_INFO"] = 1101;
                values[valuesById[1102] = "S_GET_OCT_MARKET_INFO"] = 1102;
                values[valuesById[1103] = "C_MARKET_BUY"] = 1103;
                values[valuesById[1104] = "S_MARKET_BUY"] = 1104;
                values[valuesById[1105] = "C_MARKET_SELL"] = 1105;
                values[valuesById[1106] = "S_MARKET_SELL"] = 1106;
                values[valuesById[1107] = "C_MARKET_CANCEL"] = 1107;
                values[valuesById[1108] = "S_MARKET_CANCEL"] = 1108;
                values[valuesById[1109] = "C_GET_OCT_BUYGOOD_LIST"] = 1109;
                values[valuesById[1110] = "S_GET_OCT_BUYGOOD_LIST"] = 1110;
                values[valuesById[1111] = "C_GET_MY_OCT_BUYGOOD_LIST"] = 1111;
                values[valuesById[1112] = "S_GET_MY_OCT_BUYGOOD_LIST"] = 1112;
                values[valuesById[1201] = "C_GET_MONEY_EXCHANGE_INFO"] = 1201;
                values[valuesById[1202] = "S_GET_MONEY_EXCHANGE_INFO"] = 1202;
                values[valuesById[1203] = "C_MONEY_EXCHANGE_KAD"] = 1203;
                values[valuesById[1204] = "S_MONEY_EXCHANGE_KAD"] = 1204;
                values[valuesById[1205] = "C_GET_BONUS_INFO"] = 1205;
                values[valuesById[1206] = "S_GET_BONUS_INFO"] = 1206;
                values[valuesById[1207] = "C_GET_INJECT_INFO"] = 1207;
                values[valuesById[1208] = "S_GET_INJECT_INFO"] = 1208;
                values[valuesById[1209] = "C_INJECT_KAD"] = 1209;
                values[valuesById[1210] = "S_INJECT_KAD"] = 1210;
                values[valuesById[1221] = "C_REAL_NAME_VERIFICATION"] = 1221;
                values[valuesById[1222] = "S_REAL_NAME_VERIFICATION"] = 1222;
                values[valuesById[1301] = "C_GET_MY_TEAM_INFO"] = 1301;
                values[valuesById[1302] = "S_GET_MY_TEAM_INFO"] = 1302;
                values[valuesById[1303] = "C_GET_MY_TEAM_LIST"] = 1303;
                values[valuesById[1304] = "S_GET_MY_TEAM_LIST"] = 1304;
                values[valuesById[1401] = "C_GET_MY_ADDRESS"] = 1401;
                values[valuesById[1402] = "S_GET_MY_ADDRESS"] = 1402;
                values[valuesById[1403] = "C_GET_EXTRACT_LIST"] = 1403;
                values[valuesById[1404] = "S_GET_EXTRACT_LIST"] = 1404;
                values[valuesById[1405] = "C_GET_RECHARGE_LIST"] = 1405;
                values[valuesById[1406] = "S_GET_RECHARGE_LIST"] = 1406;
                values[valuesById[1501] = "C_GET_CASH_OUT_ORDER"] = 1501;
                values[valuesById[1502] = "S_GET_CASH_OUT_ORDER"] = 1502;
                values[valuesById[1503] = "C_GET_FEED_COUNT"] = 1503;
                values[valuesById[1504] = "S_GET_FEED_COUNT"] = 1504;
                values[valuesById[1505] = "C_CASH_OUT_APPLY"] = 1505;
                values[valuesById[1506] = "S_CASH_OUT_APPLY"] = 1506;
                values[valuesById[1601] = "C_GET_SYS_CONFIG"] = 1601;
                values[valuesById[1602] = "S_GET_SYS_CONFIG"] = 1602;
                values[valuesById[1603] = "S_SYNC_SYS_CONFIG"] = 1603;
                values[valuesById[1605] = "C_GET_DIRECT_RATE_CONFIG"] = 1605;
                values[valuesById[1606] = "S_GET_DIRECT_RATE_CONFIG"] = 1606;
                values[valuesById[1607] = "S_SYNC_DIRECT_RATE_CONFIG"] = 1607;
                values[valuesById[1609] = "C_GET_FISH_CONFIG"] = 1609;
                values[valuesById[1610] = "S_GET_FISH_CONFIG"] = 1610;
                values[valuesById[1611] = "S_SYNC_FISH_CONFIG"] = 1611;
                values[valuesById[1613] = "C_GET_INJECT_CYCLE_CONFIG"] = 1613;
                values[valuesById[1614] = "S_GET_INJECT_CYCLE_CONFIG"] = 1614;
                values[valuesById[1615] = "S_SYNC_INJECT_CYCLE_CONFIG"] = 1615;
                values[valuesById[1617] = "C_GET_TEAM_RATE_CONFIG"] = 1617;
                values[valuesById[1618] = "S_GET_TEAM_RATE_CONFIG"] = 1618;
                values[valuesById[1619] = "S_SYNC_TEAM_RATE_CONFIG"] = 1619;
                values[valuesById[1621] = "C_GET_TRADE_RATE_CONFIG"] = 1621;
                values[valuesById[1622] = "S_GET_TRADE_RATE_CONFIG"] = 1622;
                values[valuesById[1623] = "S_SYNC_TRADE_RATE_CONFIG"] = 1623;
                values[valuesById[1624] = "C_GET_DEEP_FISH_CONFIG"] = 1624;
                values[valuesById[1625] = "S_GET_DEEP_FISH_CONFIG"] = 1625;
                values[valuesById[1626] = "S_SYNC_DEEP_FISH_CONFIG"] = 1626;
                values[valuesById[1627] = "C_GET_OCEAN_DRAW_CONFIG"] = 1627;
                values[valuesById[1628] = "S_GET_OCEAN_DRAW_CONFIG"] = 1628;
                values[valuesById[1629] = "S_SYNC_OCEAN_DRAW_CONFIG"] = 1629;
                values[valuesById[2001] = "S_SYN_PROPERTY"] = 2001;
                values[valuesById[2101] = "C_SYNC_TIME"] = 2101;
                values[valuesById[2102] = "S_SYNC_TIME"] = 2102;
                values[valuesById[3101] = "C_DEBUG_COMMON"] = 3101;
                values[valuesById[3102] = "S_DEBUG_COMMON"] = 3102;
                values[valuesById[5001] = "C_GET_DOLPHIN_INFO"] = 5001;
                values[valuesById[5002] = "S_GET_DOLPHIN_INFO"] = 5002;
                values[valuesById[5003] = "C_BUY_DOLPHIN"] = 5003;
                values[valuesById[5004] = "S_BUY_DOLPHIN"] = 5004;
                values[valuesById[5005] = "C_QUICK_DOLPHIN"] = 5005;
                values[valuesById[5006] = "S_QUICK_DOLPHIN"] = 5006;
                values[valuesById[5007] = "C_HATCH_DOLPHIN"] = 5007;
                values[valuesById[5008] = "S_HATCH_DOLPHIN"] = 5008;
                values[valuesById[5009] = "C_FERTILIZE_DOLPHIN"] = 5009;
                values[valuesById[5010] = "S_FERTILIZE_DOLPHIN"] = 5010;
                values[valuesById[5011] = "C_GET_DOLPHIN_MONEY_LOG_LIST"] = 5011;
                values[valuesById[5012] = "S_GET_DOLPHIN_MONEY_LOG_LIST"] = 5012;
                values[valuesById[5013] = "C_GET_DOLPHIN_BUYCOUNT_LOG_LIST"] = 5013;
                values[valuesById[5014] = "S_GET_DOLPHIN_BUYCOUNT_LOG_LIST"] = 5014;
                values[valuesById[5015] = "C_EXCHANGE_DOLPHIN_MONEY"] = 5015;
                values[valuesById[5016] = "S_EXCHANGE_DOLPHIN_MONEY"] = 5016;
                values[valuesById[5017] = "C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST"] = 5017;
                values[valuesById[5018] = "S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST"] = 5018;
                values[valuesById[5019] = "C_GET_SIGN_IN_INFO"] = 5019;
                values[valuesById[5020] = "S_GET_SIGN_IN_INFO"] = 5020;
                values[valuesById[5021] = "C_GET_SIGN_IN_REWARD"] = 5021;
                values[valuesById[5022] = "S_GET_SIGN_IN_REWARD"] = 5022;
                values[valuesById[5023] = "C_GET_DOLPHIN_WAIT_LIST"] = 5023;
                values[valuesById[5024] = "S_GET_DOLPHIN_WAIT_LIST"] = 5024;
                values[valuesById[5030] = "S_SYNC_NEW_DOLPHIN"] = 5030;
                values[valuesById[5101] = "C_GET_DEAP_ACTIVITY_INFO"] = 5101;
                values[valuesById[5102] = "S_GET_DEAP_ACTIVITY_INFO"] = 5102;
                values[valuesById[5103] = "C_GET_MY_DEAP_ACTIVITY_INFO"] = 5103;
                values[valuesById[5104] = "S_GET_MY_DEAP_ACTIVITY_INFO"] = 5104;
                values[valuesById[5105] = "C_BUY_DEAP_ACTIVITY_FISH"] = 5105;
                values[valuesById[5106] = "S_BUY_DEAP_ACTIVITY_FISH"] = 5106;
                values[valuesById[5201] = "C_GET_OCEAN_ACTIVITY_INFO"] = 5201;
                values[valuesById[5202] = "S_GET_OCEAN_ACTIVITY_INFO"] = 5202;
                values[valuesById[5203] = "C_GET_MY_OCEAN_ACTIVITY_INFO"] = 5203;
                values[valuesById[5204] = "S_GET_MY_OCEAN_ACTIVITY_INFO"] = 5204;
                values[valuesById[5205] = "C_OCEAN_ACTIVITY_DRAW"] = 5205;
                values[valuesById[5206] = "S_OCEAN_ACTIVITY_DRAW"] = 5206;
                values[valuesById[5207] = "C_GET_OCEAN_ACTIVITY_RANK"] = 5207;
                values[valuesById[5208] = "S_GET_OCEAN_ACTIVITY_RANK"] = 5208;
                values[valuesById[5209] = "C_GET_OCEAN_ACTIVITY_DRAW_LOG"] = 5209;
                values[valuesById[5210] = "S_GET_OCEAN_ACTIVITY_DRAW_LOG"] = 5210;
                values[valuesById[100001] = "CROSS_C_HEART_BEAT"] = 100001;
                values[valuesById[100002] = "CROSS_S_HEART_BEAT"] = 100002;
                values[valuesById[100003] = "CROSS_C_SERVER_REGISTER"] = 100003;
                values[valuesById[100004] = "CROSS_S_SERVER_REGISTER"] = 100004;
                values[valuesById[100005] = "CROSS_S_EXCEPTION_MSG"] = 100005;
                values[valuesById[100006] = "CROSS_C_SERVER_PUSH"] = 100006;
                values[valuesById[100007] = "CROSS_S_SERVER_PUSH"] = 100007;
                values[valuesById[100008] = "CROSS_C_HTTP_DATA"] = 100008;
                return values;
            })();

            /**
             * ExceptionCode enum.
             * @name com.message.MsgEnum.ExceptionCode
             * @enum {string}
             * @property {number} EXCEPTION_EMPTY=0 EXCEPTION_EMPTY value
             * @property {number} ERROR_INPUT_PARAMETER=1001 ERROR_INPUT_PARAMETER value
             * @property {number} ERROR_INPUT_NUMBER=1002 ERROR_INPUT_NUMBER value
             * @property {number} NOT_ENOUGH_ITEM_GOODS=1003 NOT_ENOUGH_ITEM_GOODS value
             * @property {number} PASSWROD_NOT_RIGHT=1004 PASSWROD_NOT_RIGHT value
             * @property {number} PASSWROD_REPASSWORD_NOT_MATCH=1005 PASSWROD_REPASSWORD_NOT_MATCH value
             * @property {number} PASSWROD_SIZE_NOT_RIGHT=1006 PASSWROD_SIZE_NOT_RIGHT value
             * @property {number} VERIFY_CODE_NOT_RIGHT=1007 VERIFY_CODE_NOT_RIGHT value
             * @property {number} GOODS_NOT_EXIST=1008 GOODS_NOT_EXIST value
             * @property {number} ERROR_CONFIG=1030 ERROR_CONFIG value
             * @property {number} PLAYER_LEVEL_LIMITED=1038 PLAYER_LEVEL_LIMITED value
             * @property {number} ROLE_NOT_FOUND=1047 ROLE_NOT_FOUND value
             * @property {number} MONEY_NOT_ENOUGH_REWARD=1048 MONEY_NOT_ENOUGH_REWARD value
             * @property {number} CAN_NOT_BUY_BY_U=1049 CAN_NOT_BUY_BY_U value
             * @property {number} U_BUY_FISH_LIMITED=1050 U_BUY_FISH_LIMITED value
             * @property {number} DOLPHIN_BUY_COUNT_NOT_ENOUGH=1051 DOLPHIN_BUY_COUNT_NOT_ENOUGH value
             * @property {number} PLAYER_NOT_FOUND=1052 PLAYER_NOT_FOUND value
             * @property {number} USERNAME_REPEATED=1170 USERNAME_REPEATED value
             * @property {number} NICKNAME_REPEATED=1171 NICKNAME_REPEATED value
             * @property {number} CAN_NOT_USE_ILLEGAL_CHAR=1172 CAN_NOT_USE_ILLEGAL_CHAR value
             * @property {number} CAN_NOT_USE_SENSITIVE_CHAR=1173 CAN_NOT_USE_SENSITIVE_CHAR value
             * @property {number} MOBILE_NOT_RIGHT_PHONE=1174 MOBILE_NOT_RIGHT_PHONE value
             * @property {number} INVITE_CODE_IS_NULL=1175 INVITE_CODE_IS_NULL value
             * @property {number} INVITE_CODE_NOT_FOUND=1176 INVITE_CODE_NOT_FOUND value
             * @property {number} MOBILE_HAS_REGISTER=1177 MOBILE_HAS_REGISTER value
             * @property {number} HAVE_USE_KEY=1178 HAVE_USE_KEY value
             * @property {number} PLAYER_NOT_ACTIVATION=1179 PLAYER_NOT_ACTIVATION value
             * @property {number} PLAYER_NOT_EXIST=1181 PLAYER_NOT_EXIST value
             * @property {number} FISH_MAX_LIMIT=1201 FISH_MAX_LIMIT value
             * @property {number} CAN_NOT_SEND_TO_YOURSELF=1202 CAN_NOT_SEND_TO_YOURSELF value
             * @property {number} MOBILE_NOT_RIGHT=1203 MOBILE_NOT_RIGHT value
             * @property {number} MOBILE_NOT_THE_LOGIN_ONE=1204 MOBILE_NOT_THE_LOGIN_ONE value
             * @property {number} ID_NUM_NOT_RIGHT=1205 ID_NUM_NOT_RIGHT value
             * @property {number} ALREADY_VERIFY_NOT_NEED=1206 ALREADY_VERIFY_NOT_NEED value
             * @property {number} MOBILE_IDNUM_ALREADY_VERIFY=1207 MOBILE_IDNUM_ALREADY_VERIFY value
             * @property {number} VERIFY_HAVE_ERROR_CHECK=1208 VERIFY_HAVE_ERROR_CHECK value
             * @property {number} NOT_VERIFY_CANT_DO=1209 NOT_VERIFY_CANT_DO value
             * @property {number} SIGN_HOUR_NOT_ENOUGH=1210 SIGN_HOUR_NOT_ENOUGH value
             * @property {number} TEAM_EFFECT_NUM_NOT_ENOUGH=1211 TEAM_EFFECT_NUM_NOT_ENOUGH value
             * @property {number} TEAM_EFFECT_RATE_NOT_ENOUGH=1212 TEAM_EFFECT_RATE_NOT_ENOUGH value
             * @property {number} ACTIVITY_NOT_IN_TIME=1213 ACTIVITY_NOT_IN_TIME value
             * @property {number} BUY_COUNT_NOT_ENOUGH=1214 BUY_COUNT_NOT_ENOUGH value
             * @property {number} DRAW_COUNT_NOT_ENOUGH=1215 DRAW_COUNT_NOT_ENOUGH value
             */
            MsgEnum.ExceptionCode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EXCEPTION_EMPTY"] = 0;
                values[valuesById[1001] = "ERROR_INPUT_PARAMETER"] = 1001;
                values[valuesById[1002] = "ERROR_INPUT_NUMBER"] = 1002;
                values[valuesById[1003] = "NOT_ENOUGH_ITEM_GOODS"] = 1003;
                values[valuesById[1004] = "PASSWROD_NOT_RIGHT"] = 1004;
                values[valuesById[1005] = "PASSWROD_REPASSWORD_NOT_MATCH"] = 1005;
                values[valuesById[1006] = "PASSWROD_SIZE_NOT_RIGHT"] = 1006;
                values[valuesById[1007] = "VERIFY_CODE_NOT_RIGHT"] = 1007;
                values[valuesById[1008] = "GOODS_NOT_EXIST"] = 1008;
                values[valuesById[1030] = "ERROR_CONFIG"] = 1030;
                values[valuesById[1038] = "PLAYER_LEVEL_LIMITED"] = 1038;
                values[valuesById[1047] = "ROLE_NOT_FOUND"] = 1047;
                values[valuesById[1048] = "MONEY_NOT_ENOUGH_REWARD"] = 1048;
                values[valuesById[1049] = "CAN_NOT_BUY_BY_U"] = 1049;
                values[valuesById[1050] = "U_BUY_FISH_LIMITED"] = 1050;
                values[valuesById[1051] = "DOLPHIN_BUY_COUNT_NOT_ENOUGH"] = 1051;
                values[valuesById[1052] = "PLAYER_NOT_FOUND"] = 1052;
                values[valuesById[1170] = "USERNAME_REPEATED"] = 1170;
                values[valuesById[1171] = "NICKNAME_REPEATED"] = 1171;
                values[valuesById[1172] = "CAN_NOT_USE_ILLEGAL_CHAR"] = 1172;
                values[valuesById[1173] = "CAN_NOT_USE_SENSITIVE_CHAR"] = 1173;
                values[valuesById[1174] = "MOBILE_NOT_RIGHT_PHONE"] = 1174;
                values[valuesById[1175] = "INVITE_CODE_IS_NULL"] = 1175;
                values[valuesById[1176] = "INVITE_CODE_NOT_FOUND"] = 1176;
                values[valuesById[1177] = "MOBILE_HAS_REGISTER"] = 1177;
                values[valuesById[1178] = "HAVE_USE_KEY"] = 1178;
                values[valuesById[1179] = "PLAYER_NOT_ACTIVATION"] = 1179;
                values[valuesById[1181] = "PLAYER_NOT_EXIST"] = 1181;
                values[valuesById[1201] = "FISH_MAX_LIMIT"] = 1201;
                values[valuesById[1202] = "CAN_NOT_SEND_TO_YOURSELF"] = 1202;
                values[valuesById[1203] = "MOBILE_NOT_RIGHT"] = 1203;
                values[valuesById[1204] = "MOBILE_NOT_THE_LOGIN_ONE"] = 1204;
                values[valuesById[1205] = "ID_NUM_NOT_RIGHT"] = 1205;
                values[valuesById[1206] = "ALREADY_VERIFY_NOT_NEED"] = 1206;
                values[valuesById[1207] = "MOBILE_IDNUM_ALREADY_VERIFY"] = 1207;
                values[valuesById[1208] = "VERIFY_HAVE_ERROR_CHECK"] = 1208;
                values[valuesById[1209] = "NOT_VERIFY_CANT_DO"] = 1209;
                values[valuesById[1210] = "SIGN_HOUR_NOT_ENOUGH"] = 1210;
                values[valuesById[1211] = "TEAM_EFFECT_NUM_NOT_ENOUGH"] = 1211;
                values[valuesById[1212] = "TEAM_EFFECT_RATE_NOT_ENOUGH"] = 1212;
                values[valuesById[1213] = "ACTIVITY_NOT_IN_TIME"] = 1213;
                values[valuesById[1214] = "BUY_COUNT_NOT_ENOUGH"] = 1214;
                values[valuesById[1215] = "DRAW_COUNT_NOT_ENOUGH"] = 1215;
                return values;
            })();

            return MsgEnum;
        })();

        message.CashOutOrderMsg = (function() {

            /**
             * Properties of a CashOutOrderMsg.
             * @memberof com.message
             * @interface ICashOutOrderMsg
             * @property {number|Long|null} [id] CashOutOrderMsg id
             * @property {number|Long|null} [playerId] CashOutOrderMsg playerId
             * @property {string|null} [mobile] CashOutOrderMsg mobile
             * @property {number|null} [money] CashOutOrderMsg money
             * @property {number|null} [fee] CashOutOrderMsg fee
             * @property {string|null} [currencyName] CashOutOrderMsg currencyName
             * @property {string|null} [toAddress] CashOutOrderMsg toAddress
             * @property {string|null} [fromAddress] CashOutOrderMsg fromAddress
             * @property {number|null} [state] CashOutOrderMsg state
             * @property {number|Long|null} [checkTime] CashOutOrderMsg checkTime
             * @property {number|Long|null} [createTime] CashOutOrderMsg createTime
             */

            /**
             * Constructs a new CashOutOrderMsg.
             * @memberof com.message
             * @classdesc Represents a CashOutOrderMsg.
             * @implements ICashOutOrderMsg
             * @constructor
             * @param {com.message.ICashOutOrderMsg=} [properties] Properties to set
             */
            function CashOutOrderMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CashOutOrderMsg id.
             * @member {number|Long} id
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CashOutOrderMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CashOutOrderMsg mobile.
             * @member {string} mobile
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.mobile = "";

            /**
             * CashOutOrderMsg money.
             * @member {number} money
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.money = 0;

            /**
             * CashOutOrderMsg fee.
             * @member {number} fee
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.fee = 0;

            /**
             * CashOutOrderMsg currencyName.
             * @member {string} currencyName
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.currencyName = "";

            /**
             * CashOutOrderMsg toAddress.
             * @member {string} toAddress
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.toAddress = "";

            /**
             * CashOutOrderMsg fromAddress.
             * @member {string} fromAddress
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.fromAddress = "";

            /**
             * CashOutOrderMsg state.
             * @member {number} state
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.state = 0;

            /**
             * CashOutOrderMsg checkTime.
             * @member {number|Long} checkTime
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.checkTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CashOutOrderMsg createTime.
             * @member {number|Long} createTime
             * @memberof com.message.CashOutOrderMsg
             * @instance
             */
            CashOutOrderMsg.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified CashOutOrderMsg message. Does not implicitly {@link com.message.CashOutOrderMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.CashOutOrderMsg
             * @static
             * @param {com.message.ICashOutOrderMsg} message CashOutOrderMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CashOutOrderMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.mobile);
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.money);
                if (message.fee != null && message.hasOwnProperty("fee"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.fee);
                if (message.currencyName != null && message.hasOwnProperty("currencyName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.currencyName);
                if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.toAddress);
                if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.fromAddress);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.state);
                if (message.checkTime != null && message.hasOwnProperty("checkTime"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int64(message.checkTime);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int64(message.createTime);
                return writer;
            };

            /**
             * Decodes a CashOutOrderMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CashOutOrderMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CashOutOrderMsg} CashOutOrderMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CashOutOrderMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CashOutOrderMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.playerId = reader.int64();
                        break;
                    case 3:
                        message.mobile = reader.string();
                        break;
                    case 4:
                        message.money = reader.double();
                        break;
                    case 5:
                        message.fee = reader.double();
                        break;
                    case 6:
                        message.currencyName = reader.string();
                        break;
                    case 7:
                        message.toAddress = reader.string();
                        break;
                    case 8:
                        message.fromAddress = reader.string();
                        break;
                    case 9:
                        message.state = reader.int32();
                        break;
                    case 10:
                        message.checkTime = reader.int64();
                        break;
                    case 11:
                        message.createTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CashOutOrderMsg;
        })();

        message.C_GET_CASH_OUT_ORDER = (function() {

            /**
             * Properties of a C_GET_CASH_OUT_ORDER.
             * @memberof com.message
             * @interface IC_GET_CASH_OUT_ORDER
             */

            /**
             * Constructs a new C_GET_CASH_OUT_ORDER.
             * @memberof com.message
             * @classdesc Represents a C_GET_CASH_OUT_ORDER.
             * @implements IC_GET_CASH_OUT_ORDER
             * @constructor
             * @param {com.message.IC_GET_CASH_OUT_ORDER=} [properties] Properties to set
             */
            function C_GET_CASH_OUT_ORDER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_CASH_OUT_ORDER message. Does not implicitly {@link com.message.C_GET_CASH_OUT_ORDER.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_CASH_OUT_ORDER
             * @static
             * @param {com.message.IC_GET_CASH_OUT_ORDER} message C_GET_CASH_OUT_ORDER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_CASH_OUT_ORDER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_CASH_OUT_ORDER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_CASH_OUT_ORDER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_CASH_OUT_ORDER} C_GET_CASH_OUT_ORDER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_CASH_OUT_ORDER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_CASH_OUT_ORDER();
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

            return C_GET_CASH_OUT_ORDER;
        })();

        message.S_GET_CASH_OUT_ORDER = (function() {

            /**
             * Properties of a S_GET_CASH_OUT_ORDER.
             * @memberof com.message
             * @interface IS_GET_CASH_OUT_ORDER
             * @property {Array.<com.message.ICashOutOrderMsg>|null} [cashOutOrderMsg] S_GET_CASH_OUT_ORDER cashOutOrderMsg
             */

            /**
             * Constructs a new S_GET_CASH_OUT_ORDER.
             * @memberof com.message
             * @classdesc Represents a S_GET_CASH_OUT_ORDER.
             * @implements IS_GET_CASH_OUT_ORDER
             * @constructor
             * @param {com.message.IS_GET_CASH_OUT_ORDER=} [properties] Properties to set
             */
            function S_GET_CASH_OUT_ORDER(properties) {
                this.cashOutOrderMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_CASH_OUT_ORDER cashOutOrderMsg.
             * @member {Array.<com.message.ICashOutOrderMsg>} cashOutOrderMsg
             * @memberof com.message.S_GET_CASH_OUT_ORDER
             * @instance
             */
            S_GET_CASH_OUT_ORDER.prototype.cashOutOrderMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_CASH_OUT_ORDER message. Does not implicitly {@link com.message.S_GET_CASH_OUT_ORDER.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_CASH_OUT_ORDER
             * @static
             * @param {com.message.IS_GET_CASH_OUT_ORDER} message S_GET_CASH_OUT_ORDER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_CASH_OUT_ORDER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cashOutOrderMsg != null && message.cashOutOrderMsg.length)
                    for (var i = 0; i < message.cashOutOrderMsg.length; ++i)
                        $root.com.message.CashOutOrderMsg.encode(message.cashOutOrderMsg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_CASH_OUT_ORDER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_CASH_OUT_ORDER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_CASH_OUT_ORDER} S_GET_CASH_OUT_ORDER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_CASH_OUT_ORDER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_CASH_OUT_ORDER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.cashOutOrderMsg && message.cashOutOrderMsg.length))
                            message.cashOutOrderMsg = [];
                        message.cashOutOrderMsg.push($root.com.message.CashOutOrderMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_CASH_OUT_ORDER;
        })();

        message.C_GET_FEED_COUNT = (function() {

            /**
             * Properties of a C_GET_FEED_COUNT.
             * @memberof com.message
             * @interface IC_GET_FEED_COUNT
             * @property {number|null} [money] C_GET_FEED_COUNT money
             */

            /**
             * Constructs a new C_GET_FEED_COUNT.
             * @memberof com.message
             * @classdesc Represents a C_GET_FEED_COUNT.
             * @implements IC_GET_FEED_COUNT
             * @constructor
             * @param {com.message.IC_GET_FEED_COUNT=} [properties] Properties to set
             */
            function C_GET_FEED_COUNT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_GET_FEED_COUNT money.
             * @member {number} money
             * @memberof com.message.C_GET_FEED_COUNT
             * @instance
             */
            C_GET_FEED_COUNT.prototype.money = 0;

            /**
             * Encodes the specified C_GET_FEED_COUNT message. Does not implicitly {@link com.message.C_GET_FEED_COUNT.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_FEED_COUNT
             * @static
             * @param {com.message.IC_GET_FEED_COUNT} message C_GET_FEED_COUNT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_FEED_COUNT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.money);
                return writer;
            };

            /**
             * Decodes a C_GET_FEED_COUNT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_FEED_COUNT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_FEED_COUNT} C_GET_FEED_COUNT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_FEED_COUNT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_FEED_COUNT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.money = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_GET_FEED_COUNT;
        })();

        message.S_GET_FEED_COUNT = (function() {

            /**
             * Properties of a S_GET_FEED_COUNT.
             * @memberof com.message
             * @interface IS_GET_FEED_COUNT
             * @property {number|null} [feedCount] S_GET_FEED_COUNT feedCount
             */

            /**
             * Constructs a new S_GET_FEED_COUNT.
             * @memberof com.message
             * @classdesc Represents a S_GET_FEED_COUNT.
             * @implements IS_GET_FEED_COUNT
             * @constructor
             * @param {com.message.IS_GET_FEED_COUNT=} [properties] Properties to set
             */
            function S_GET_FEED_COUNT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_FEED_COUNT feedCount.
             * @member {number} feedCount
             * @memberof com.message.S_GET_FEED_COUNT
             * @instance
             */
            S_GET_FEED_COUNT.prototype.feedCount = 0;

            /**
             * Encodes the specified S_GET_FEED_COUNT message. Does not implicitly {@link com.message.S_GET_FEED_COUNT.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_FEED_COUNT
             * @static
             * @param {com.message.IS_GET_FEED_COUNT} message S_GET_FEED_COUNT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_FEED_COUNT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.feedCount != null && message.hasOwnProperty("feedCount"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.feedCount);
                return writer;
            };

            /**
             * Decodes a S_GET_FEED_COUNT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_FEED_COUNT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_FEED_COUNT} S_GET_FEED_COUNT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_FEED_COUNT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_FEED_COUNT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.feedCount = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_FEED_COUNT;
        })();

        message.C_CASH_OUT_APPLY = (function() {

            /**
             * Properties of a C_CASH_OUT_APPLY.
             * @memberof com.message
             * @interface IC_CASH_OUT_APPLY
             * @property {number|null} [money] C_CASH_OUT_APPLY money
             * @property {string|null} [toAddress] C_CASH_OUT_APPLY toAddress
             * @property {string|null} [verifyCode] C_CASH_OUT_APPLY verifyCode
             */

            /**
             * Constructs a new C_CASH_OUT_APPLY.
             * @memberof com.message
             * @classdesc Represents a C_CASH_OUT_APPLY.
             * @implements IC_CASH_OUT_APPLY
             * @constructor
             * @param {com.message.IC_CASH_OUT_APPLY=} [properties] Properties to set
             */
            function C_CASH_OUT_APPLY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_CASH_OUT_APPLY money.
             * @member {number} money
             * @memberof com.message.C_CASH_OUT_APPLY
             * @instance
             */
            C_CASH_OUT_APPLY.prototype.money = 0;

            /**
             * C_CASH_OUT_APPLY toAddress.
             * @member {string} toAddress
             * @memberof com.message.C_CASH_OUT_APPLY
             * @instance
             */
            C_CASH_OUT_APPLY.prototype.toAddress = "";

            /**
             * C_CASH_OUT_APPLY verifyCode.
             * @member {string} verifyCode
             * @memberof com.message.C_CASH_OUT_APPLY
             * @instance
             */
            C_CASH_OUT_APPLY.prototype.verifyCode = "";

            /**
             * Encodes the specified C_CASH_OUT_APPLY message. Does not implicitly {@link com.message.C_CASH_OUT_APPLY.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_CASH_OUT_APPLY
             * @static
             * @param {com.message.IC_CASH_OUT_APPLY} message C_CASH_OUT_APPLY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_CASH_OUT_APPLY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.money);
                if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.toAddress);
                if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifyCode);
                return writer;
            };

            /**
             * Decodes a C_CASH_OUT_APPLY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_CASH_OUT_APPLY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_CASH_OUT_APPLY} C_CASH_OUT_APPLY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_CASH_OUT_APPLY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_CASH_OUT_APPLY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.money = reader.double();
                        break;
                    case 2:
                        message.toAddress = reader.string();
                        break;
                    case 3:
                        message.verifyCode = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_CASH_OUT_APPLY;
        })();

        message.S_CASH_OUT_APPLY = (function() {

            /**
             * Properties of a S_CASH_OUT_APPLY.
             * @memberof com.message
             * @interface IS_CASH_OUT_APPLY
             * @property {number|null} [success] S_CASH_OUT_APPLY success
             * @property {com.message.ICashOutOrderMsg|null} [cashOutOrderMsg] S_CASH_OUT_APPLY cashOutOrderMsg
             */

            /**
             * Constructs a new S_CASH_OUT_APPLY.
             * @memberof com.message
             * @classdesc Represents a S_CASH_OUT_APPLY.
             * @implements IS_CASH_OUT_APPLY
             * @constructor
             * @param {com.message.IS_CASH_OUT_APPLY=} [properties] Properties to set
             */
            function S_CASH_OUT_APPLY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_CASH_OUT_APPLY success.
             * @member {number} success
             * @memberof com.message.S_CASH_OUT_APPLY
             * @instance
             */
            S_CASH_OUT_APPLY.prototype.success = 0;

            /**
             * S_CASH_OUT_APPLY cashOutOrderMsg.
             * @member {com.message.ICashOutOrderMsg|null|undefined} cashOutOrderMsg
             * @memberof com.message.S_CASH_OUT_APPLY
             * @instance
             */
            S_CASH_OUT_APPLY.prototype.cashOutOrderMsg = null;

            /**
             * Encodes the specified S_CASH_OUT_APPLY message. Does not implicitly {@link com.message.S_CASH_OUT_APPLY.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_CASH_OUT_APPLY
             * @static
             * @param {com.message.IS_CASH_OUT_APPLY} message S_CASH_OUT_APPLY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_CASH_OUT_APPLY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cashOutOrderMsg != null && message.hasOwnProperty("cashOutOrderMsg"))
                    $root.com.message.CashOutOrderMsg.encode(message.cashOutOrderMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.success != null && message.hasOwnProperty("success"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.success);
                return writer;
            };

            /**
             * Decodes a S_CASH_OUT_APPLY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_CASH_OUT_APPLY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_CASH_OUT_APPLY} S_CASH_OUT_APPLY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_CASH_OUT_APPLY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_CASH_OUT_APPLY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.success = reader.int32();
                        break;
                    case 1:
                        message.cashOutOrderMsg = $root.com.message.CashOutOrderMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_CASH_OUT_APPLY;
        })();

        message.C_GET_MY_ADDRESS = (function() {

            /**
             * Properties of a C_GET_MY_ADDRESS.
             * @memberof com.message
             * @interface IC_GET_MY_ADDRESS
             */

            /**
             * Constructs a new C_GET_MY_ADDRESS.
             * @memberof com.message
             * @classdesc Represents a C_GET_MY_ADDRESS.
             * @implements IC_GET_MY_ADDRESS
             * @constructor
             * @param {com.message.IC_GET_MY_ADDRESS=} [properties] Properties to set
             */
            function C_GET_MY_ADDRESS(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MY_ADDRESS message. Does not implicitly {@link com.message.C_GET_MY_ADDRESS.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MY_ADDRESS
             * @static
             * @param {com.message.IC_GET_MY_ADDRESS} message C_GET_MY_ADDRESS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MY_ADDRESS.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MY_ADDRESS message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MY_ADDRESS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MY_ADDRESS} C_GET_MY_ADDRESS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MY_ADDRESS.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MY_ADDRESS();
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

            return C_GET_MY_ADDRESS;
        })();

        message.S_GET_MY_ADDRESS = (function() {

            /**
             * Properties of a S_GET_MY_ADDRESS.
             * @memberof com.message
             * @interface IS_GET_MY_ADDRESS
             * @property {string|null} [address] S_GET_MY_ADDRESS address
             */

            /**
             * Constructs a new S_GET_MY_ADDRESS.
             * @memberof com.message
             * @classdesc Represents a S_GET_MY_ADDRESS.
             * @implements IS_GET_MY_ADDRESS
             * @constructor
             * @param {com.message.IS_GET_MY_ADDRESS=} [properties] Properties to set
             */
            function S_GET_MY_ADDRESS(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MY_ADDRESS address.
             * @member {string} address
             * @memberof com.message.S_GET_MY_ADDRESS
             * @instance
             */
            S_GET_MY_ADDRESS.prototype.address = "";

            /**
             * Encodes the specified S_GET_MY_ADDRESS message. Does not implicitly {@link com.message.S_GET_MY_ADDRESS.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MY_ADDRESS
             * @static
             * @param {com.message.IS_GET_MY_ADDRESS} message S_GET_MY_ADDRESS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MY_ADDRESS.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.address != null && message.hasOwnProperty("address"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
                return writer;
            };

            /**
             * Decodes a S_GET_MY_ADDRESS message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MY_ADDRESS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MY_ADDRESS} S_GET_MY_ADDRESS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MY_ADDRESS.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MY_ADDRESS();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.address = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MY_ADDRESS;
        })();

        message.C_GET_EXTRACT_LIST = (function() {

            /**
             * Properties of a C_GET_EXTRACT_LIST.
             * @memberof com.message
             * @interface IC_GET_EXTRACT_LIST
             */

            /**
             * Constructs a new C_GET_EXTRACT_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_EXTRACT_LIST.
             * @implements IC_GET_EXTRACT_LIST
             * @constructor
             * @param {com.message.IC_GET_EXTRACT_LIST=} [properties] Properties to set
             */
            function C_GET_EXTRACT_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_EXTRACT_LIST message. Does not implicitly {@link com.message.C_GET_EXTRACT_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_EXTRACT_LIST
             * @static
             * @param {com.message.IC_GET_EXTRACT_LIST} message C_GET_EXTRACT_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_EXTRACT_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_EXTRACT_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_EXTRACT_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_EXTRACT_LIST} C_GET_EXTRACT_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_EXTRACT_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_EXTRACT_LIST();
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

            return C_GET_EXTRACT_LIST;
        })();

        message.S_GET_EXTRACT_LIST = (function() {

            /**
             * Properties of a S_GET_EXTRACT_LIST.
             * @memberof com.message
             * @interface IS_GET_EXTRACT_LIST
             */

            /**
             * Constructs a new S_GET_EXTRACT_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_EXTRACT_LIST.
             * @implements IS_GET_EXTRACT_LIST
             * @constructor
             * @param {com.message.IS_GET_EXTRACT_LIST=} [properties] Properties to set
             */
            function S_GET_EXTRACT_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified S_GET_EXTRACT_LIST message. Does not implicitly {@link com.message.S_GET_EXTRACT_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_EXTRACT_LIST
             * @static
             * @param {com.message.IS_GET_EXTRACT_LIST} message S_GET_EXTRACT_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_EXTRACT_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a S_GET_EXTRACT_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_EXTRACT_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_EXTRACT_LIST} S_GET_EXTRACT_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_EXTRACT_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_EXTRACT_LIST();
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

            return S_GET_EXTRACT_LIST;
        })();

        message.C_GET_RECHARGE_LIST = (function() {

            /**
             * Properties of a C_GET_RECHARGE_LIST.
             * @memberof com.message
             * @interface IC_GET_RECHARGE_LIST
             */

            /**
             * Constructs a new C_GET_RECHARGE_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_RECHARGE_LIST.
             * @implements IC_GET_RECHARGE_LIST
             * @constructor
             * @param {com.message.IC_GET_RECHARGE_LIST=} [properties] Properties to set
             */
            function C_GET_RECHARGE_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_RECHARGE_LIST message. Does not implicitly {@link com.message.C_GET_RECHARGE_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_RECHARGE_LIST
             * @static
             * @param {com.message.IC_GET_RECHARGE_LIST} message C_GET_RECHARGE_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_RECHARGE_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_RECHARGE_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_RECHARGE_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_RECHARGE_LIST} C_GET_RECHARGE_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_RECHARGE_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_RECHARGE_LIST();
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

            return C_GET_RECHARGE_LIST;
        })();

        message.S_GET_RECHARGE_LIST = (function() {

            /**
             * Properties of a S_GET_RECHARGE_LIST.
             * @memberof com.message
             * @interface IS_GET_RECHARGE_LIST
             */

            /**
             * Constructs a new S_GET_RECHARGE_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_RECHARGE_LIST.
             * @implements IS_GET_RECHARGE_LIST
             * @constructor
             * @param {com.message.IS_GET_RECHARGE_LIST=} [properties] Properties to set
             */
            function S_GET_RECHARGE_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified S_GET_RECHARGE_LIST message. Does not implicitly {@link com.message.S_GET_RECHARGE_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_RECHARGE_LIST
             * @static
             * @param {com.message.IS_GET_RECHARGE_LIST} message S_GET_RECHARGE_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_RECHARGE_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a S_GET_RECHARGE_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_RECHARGE_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_RECHARGE_LIST} S_GET_RECHARGE_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_RECHARGE_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_RECHARGE_LIST();
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

            return S_GET_RECHARGE_LIST;
        })();

        message.MyTeamMsg = (function() {

            /**
             * Properties of a MyTeamMsg.
             * @memberof com.message
             * @interface IMyTeamMsg
             * @property {string|null} [superName] MyTeamMsg superName
             * @property {number|null} [count] MyTeamMsg count
             * @property {number|null} [allCount] MyTeamMsg allCount
             * @property {number|null} [effectDirectNum] MyTeamMsg effectDirectNum
             * @property {number|null} [allEffectNum] MyTeamMsg allEffectNum
             * @property {number|null} [directActivity] MyTeamMsg directActivity
             * @property {number|null} [areaActivity] MyTeamMsg areaActivity
             * @property {number|null} [cashEffectNum] MyTeamMsg cashEffectNum
             */

            /**
             * Constructs a new MyTeamMsg.
             * @memberof com.message
             * @classdesc Represents a MyTeamMsg.
             * @implements IMyTeamMsg
             * @constructor
             * @param {com.message.IMyTeamMsg=} [properties] Properties to set
             */
            function MyTeamMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MyTeamMsg superName.
             * @member {string} superName
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.superName = "";

            /**
             * MyTeamMsg count.
             * @member {number} count
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.count = 0;

            /**
             * MyTeamMsg allCount.
             * @member {number} allCount
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.allCount = 0;

            /**
             * MyTeamMsg effectDirectNum.
             * @member {number} effectDirectNum
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.effectDirectNum = 0;

            /**
             * MyTeamMsg allEffectNum.
             * @member {number} allEffectNum
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.allEffectNum = 0;

            /**
             * MyTeamMsg directActivity.
             * @member {number} directActivity
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.directActivity = 0;

            /**
             * MyTeamMsg areaActivity.
             * @member {number} areaActivity
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.areaActivity = 0;

            /**
             * MyTeamMsg cashEffectNum.
             * @member {number} cashEffectNum
             * @memberof com.message.MyTeamMsg
             * @instance
             */
            MyTeamMsg.prototype.cashEffectNum = 0;

            /**
             * Encodes the specified MyTeamMsg message. Does not implicitly {@link com.message.MyTeamMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.MyTeamMsg
             * @static
             * @param {com.message.IMyTeamMsg} message MyTeamMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyTeamMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.superName != null && message.hasOwnProperty("superName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.superName);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                if (message.allCount != null && message.hasOwnProperty("allCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.allCount);
                if (message.effectDirectNum != null && message.hasOwnProperty("effectDirectNum"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.effectDirectNum);
                if (message.allEffectNum != null && message.hasOwnProperty("allEffectNum"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.allEffectNum);
                if (message.directActivity != null && message.hasOwnProperty("directActivity"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.directActivity);
                if (message.areaActivity != null && message.hasOwnProperty("areaActivity"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.areaActivity);
                if (message.cashEffectNum != null && message.hasOwnProperty("cashEffectNum"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cashEffectNum);
                return writer;
            };

            /**
             * Decodes a MyTeamMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.MyTeamMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.MyTeamMsg} MyTeamMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyTeamMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.MyTeamMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.superName = reader.string();
                        break;
                    case 2:
                        message.count = reader.int32();
                        break;
                    case 3:
                        message.allCount = reader.int32();
                        break;
                    case 4:
                        message.effectDirectNum = reader.int32();
                        break;
                    case 5:
                        message.allEffectNum = reader.int32();
                        break;
                    case 6:
                        message.directActivity = reader.int32();
                        break;
                    case 7:
                        message.areaActivity = reader.int32();
                        break;
                    case 8:
                        message.cashEffectNum = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MyTeamMsg;
        })();

        message.DirectInfoMsg = (function() {

            /**
             * Properties of a DirectInfoMsg.
             * @memberof com.message
             * @interface IDirectInfoMsg
             * @property {string|null} [name] DirectInfoMsg name
             * @property {number|null} [state] DirectInfoMsg state
             * @property {number|null} [effectDirectNum] DirectInfoMsg effectDirectNum
             * @property {number|null} [allEffectNum] DirectInfoMsg allEffectNum
             * @property {number|null} [money] DirectInfoMsg money
             * @property {number|null} [directActivity] DirectInfoMsg directActivity
             * @property {number|null} [teamActivity] DirectInfoMsg teamActivity
             */

            /**
             * Constructs a new DirectInfoMsg.
             * @memberof com.message
             * @classdesc Represents a DirectInfoMsg.
             * @implements IDirectInfoMsg
             * @constructor
             * @param {com.message.IDirectInfoMsg=} [properties] Properties to set
             */
            function DirectInfoMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DirectInfoMsg name.
             * @member {string} name
             * @memberof com.message.DirectInfoMsg
             * @instance
             */
            DirectInfoMsg.prototype.name = "";

            /**
             * DirectInfoMsg state.
             * @member {number} state
             * @memberof com.message.DirectInfoMsg
             * @instance
             */
            DirectInfoMsg.prototype.state = 0;

            /**
             * DirectInfoMsg effectDirectNum.
             * @member {number} effectDirectNum
             * @memberof com.message.DirectInfoMsg
             * @instance
             */
            DirectInfoMsg.prototype.effectDirectNum = 0;

            /**
             * DirectInfoMsg allEffectNum.
             * @member {number} allEffectNum
             * @memberof com.message.DirectInfoMsg
             * @instance
             */
            DirectInfoMsg.prototype.allEffectNum = 0;

            /**
             * DirectInfoMsg money.
             * @member {number} money
             * @memberof com.message.DirectInfoMsg
             * @instance
             */
            DirectInfoMsg.prototype.money = 0;

            /**
             * DirectInfoMsg directActivity.
             * @member {number} directActivity
             * @memberof com.message.DirectInfoMsg
             * @instance
             */
            DirectInfoMsg.prototype.directActivity = 0;

            /**
             * DirectInfoMsg teamActivity.
             * @member {number} teamActivity
             * @memberof com.message.DirectInfoMsg
             * @instance
             */
            DirectInfoMsg.prototype.teamActivity = 0;

            /**
             * Encodes the specified DirectInfoMsg message. Does not implicitly {@link com.message.DirectInfoMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.DirectInfoMsg
             * @static
             * @param {com.message.IDirectInfoMsg} message DirectInfoMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DirectInfoMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                if (message.effectDirectNum != null && message.hasOwnProperty("effectDirectNum"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.effectDirectNum);
                if (message.allEffectNum != null && message.hasOwnProperty("allEffectNum"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.allEffectNum);
                if (message.money != null && message.hasOwnProperty("money"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.money);
                if (message.directActivity != null && message.hasOwnProperty("directActivity"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.directActivity);
                if (message.teamActivity != null && message.hasOwnProperty("teamActivity"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.teamActivity);
                return writer;
            };

            /**
             * Decodes a DirectInfoMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.DirectInfoMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.DirectInfoMsg} DirectInfoMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DirectInfoMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.DirectInfoMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.state = reader.int32();
                        break;
                    case 3:
                        message.effectDirectNum = reader.int32();
                        break;
                    case 4:
                        message.allEffectNum = reader.int32();
                        break;
                    case 5:
                        message.money = reader.double();
                        break;
                    case 6:
                        message.directActivity = reader.int32();
                        break;
                    case 7:
                        message.teamActivity = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DirectInfoMsg;
        })();

        message.C_GET_MY_TEAM_INFO = (function() {

            /**
             * Properties of a C_GET_MY_TEAM_INFO.
             * @memberof com.message
             * @interface IC_GET_MY_TEAM_INFO
             */

            /**
             * Constructs a new C_GET_MY_TEAM_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_MY_TEAM_INFO.
             * @implements IC_GET_MY_TEAM_INFO
             * @constructor
             * @param {com.message.IC_GET_MY_TEAM_INFO=} [properties] Properties to set
             */
            function C_GET_MY_TEAM_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_GET_MY_TEAM_INFO message. Does not implicitly {@link com.message.C_GET_MY_TEAM_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MY_TEAM_INFO
             * @static
             * @param {com.message.IC_GET_MY_TEAM_INFO} message C_GET_MY_TEAM_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MY_TEAM_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_GET_MY_TEAM_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MY_TEAM_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MY_TEAM_INFO} C_GET_MY_TEAM_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MY_TEAM_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MY_TEAM_INFO();
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

            return C_GET_MY_TEAM_INFO;
        })();

        message.S_GET_MY_TEAM_INFO = (function() {

            /**
             * Properties of a S_GET_MY_TEAM_INFO.
             * @memberof com.message
             * @interface IS_GET_MY_TEAM_INFO
             * @property {com.message.IMyTeamMsg|null} [myTeamMsg] S_GET_MY_TEAM_INFO myTeamMsg
             */

            /**
             * Constructs a new S_GET_MY_TEAM_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_MY_TEAM_INFO.
             * @implements IS_GET_MY_TEAM_INFO
             * @constructor
             * @param {com.message.IS_GET_MY_TEAM_INFO=} [properties] Properties to set
             */
            function S_GET_MY_TEAM_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MY_TEAM_INFO myTeamMsg.
             * @member {com.message.IMyTeamMsg|null|undefined} myTeamMsg
             * @memberof com.message.S_GET_MY_TEAM_INFO
             * @instance
             */
            S_GET_MY_TEAM_INFO.prototype.myTeamMsg = null;

            /**
             * Encodes the specified S_GET_MY_TEAM_INFO message. Does not implicitly {@link com.message.S_GET_MY_TEAM_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MY_TEAM_INFO
             * @static
             * @param {com.message.IS_GET_MY_TEAM_INFO} message S_GET_MY_TEAM_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MY_TEAM_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.myTeamMsg != null && message.hasOwnProperty("myTeamMsg"))
                    $root.com.message.MyTeamMsg.encode(message.myTeamMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_MY_TEAM_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MY_TEAM_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MY_TEAM_INFO} S_GET_MY_TEAM_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MY_TEAM_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MY_TEAM_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.myTeamMsg = $root.com.message.MyTeamMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MY_TEAM_INFO;
        })();

        message.C_GET_MY_TEAM_LIST = (function() {

            /**
             * Properties of a C_GET_MY_TEAM_LIST.
             * @memberof com.message
             * @interface IC_GET_MY_TEAM_LIST
             * @property {number|null} [page] C_GET_MY_TEAM_LIST page
             * @property {number|null} [pageSize] C_GET_MY_TEAM_LIST pageSize
             */

            /**
             * Constructs a new C_GET_MY_TEAM_LIST.
             * @memberof com.message
             * @classdesc Represents a C_GET_MY_TEAM_LIST.
             * @implements IC_GET_MY_TEAM_LIST
             * @constructor
             * @param {com.message.IC_GET_MY_TEAM_LIST=} [properties] Properties to set
             */
            function C_GET_MY_TEAM_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_GET_MY_TEAM_LIST page.
             * @member {number} page
             * @memberof com.message.C_GET_MY_TEAM_LIST
             * @instance
             */
            C_GET_MY_TEAM_LIST.prototype.page = 0;

            /**
             * C_GET_MY_TEAM_LIST pageSize.
             * @member {number} pageSize
             * @memberof com.message.C_GET_MY_TEAM_LIST
             * @instance
             */
            C_GET_MY_TEAM_LIST.prototype.pageSize = 0;

            /**
             * Encodes the specified C_GET_MY_TEAM_LIST message. Does not implicitly {@link com.message.C_GET_MY_TEAM_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_MY_TEAM_LIST
             * @static
             * @param {com.message.IC_GET_MY_TEAM_LIST} message C_GET_MY_TEAM_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_MY_TEAM_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.page != null && message.hasOwnProperty("page"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
                if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                return writer;
            };

            /**
             * Decodes a C_GET_MY_TEAM_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_MY_TEAM_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_MY_TEAM_LIST} C_GET_MY_TEAM_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_MY_TEAM_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_MY_TEAM_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.page = reader.int32();
                        break;
                    case 2:
                        message.pageSize = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_GET_MY_TEAM_LIST;
        })();

        message.S_GET_MY_TEAM_LIST = (function() {

            /**
             * Properties of a S_GET_MY_TEAM_LIST.
             * @memberof com.message
             * @interface IS_GET_MY_TEAM_LIST
             * @property {number|null} [page] S_GET_MY_TEAM_LIST page
             * @property {number|null} [pageSize] S_GET_MY_TEAM_LIST pageSize
             * @property {Array.<com.message.IDirectInfoMsg>|null} [directInfoMsg] S_GET_MY_TEAM_LIST directInfoMsg
             */

            /**
             * Constructs a new S_GET_MY_TEAM_LIST.
             * @memberof com.message
             * @classdesc Represents a S_GET_MY_TEAM_LIST.
             * @implements IS_GET_MY_TEAM_LIST
             * @constructor
             * @param {com.message.IS_GET_MY_TEAM_LIST=} [properties] Properties to set
             */
            function S_GET_MY_TEAM_LIST(properties) {
                this.directInfoMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_MY_TEAM_LIST page.
             * @member {number} page
             * @memberof com.message.S_GET_MY_TEAM_LIST
             * @instance
             */
            S_GET_MY_TEAM_LIST.prototype.page = 0;

            /**
             * S_GET_MY_TEAM_LIST pageSize.
             * @member {number} pageSize
             * @memberof com.message.S_GET_MY_TEAM_LIST
             * @instance
             */
            S_GET_MY_TEAM_LIST.prototype.pageSize = 0;

            /**
             * S_GET_MY_TEAM_LIST directInfoMsg.
             * @member {Array.<com.message.IDirectInfoMsg>} directInfoMsg
             * @memberof com.message.S_GET_MY_TEAM_LIST
             * @instance
             */
            S_GET_MY_TEAM_LIST.prototype.directInfoMsg = $util.emptyArray;

            /**
             * Encodes the specified S_GET_MY_TEAM_LIST message. Does not implicitly {@link com.message.S_GET_MY_TEAM_LIST.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_MY_TEAM_LIST
             * @static
             * @param {com.message.IS_GET_MY_TEAM_LIST} message S_GET_MY_TEAM_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_MY_TEAM_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.page != null && message.hasOwnProperty("page"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
                if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                if (message.directInfoMsg != null && message.directInfoMsg.length)
                    for (var i = 0; i < message.directInfoMsg.length; ++i)
                        $root.com.message.DirectInfoMsg.encode(message.directInfoMsg[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_GET_MY_TEAM_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_MY_TEAM_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_MY_TEAM_LIST} S_GET_MY_TEAM_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_MY_TEAM_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_MY_TEAM_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.page = reader.int32();
                        break;
                    case 2:
                        message.pageSize = reader.int32();
                        break;
                    case 3:
                        if (!(message.directInfoMsg && message.directInfoMsg.length))
                            message.directInfoMsg = [];
                        message.directInfoMsg.push($root.com.message.DirectInfoMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_MY_TEAM_LIST;
        })();

        return message;
    })();

    return com;
})();