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

        message.FishMsg = (function() {

            /**
             * Properties of a FishMsg.
             * @memberof com.message
             * @interface IFishMsg
             * @property {number|Long|null} [id] FishMsg id
             * @property {number|null} [level] FishMsg level
             * @property {number|Long|null} [fishId] FishMsg fishId
             * @property {number|null} [state] FishMsg state
             * @property {number|Long|null} [allMoney] FishMsg allMoney
             * @property {number|Long|null} [extMoney] FishMsg extMoney
             * @property {number|Long|null} [todayMoney] FishMsg todayMoney
             * @property {number|null} [allDay] FishMsg allDay
             * @property {number|null} [leftDay] FishMsg leftDay
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
             * @member {number|Long} allMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.allMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishMsg extMoney.
             * @member {number|Long} extMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.extMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishMsg todayMoney.
             * @member {number|Long} todayMoney
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.todayMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishMsg allDay.
             * @member {number} allDay
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.allDay = 0;

            /**
             * FishMsg leftDay.
             * @member {number} leftDay
             * @memberof com.message.FishMsg
             * @instance
             */
            FishMsg.prototype.leftDay = 0;

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
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.allMoney);
                if (message.extMoney != null && message.hasOwnProperty("extMoney"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.extMoney);
                if (message.todayMoney != null && message.hasOwnProperty("todayMoney"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.todayMoney);
                if (message.allDay != null && message.hasOwnProperty("allDay"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.allDay);
                if (message.leftDay != null && message.hasOwnProperty("leftDay"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.leftDay);
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
                        message.allMoney = reader.int64();
                        break;
                    case 6:
                        message.extMoney = reader.int64();
                        break;
                    case 7:
                        message.todayMoney = reader.int64();
                        break;
                    case 8:
                        message.allDay = reader.int32();
                        break;
                    case 9:
                        message.leftDay = reader.int32();
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
                if (message.fishMsg != null && message.hasOwnProperty("fishMsg"))
                    $root.com.message.FishMsg.encode(message.fishMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
             * @property {number|Long|null} [money] S_GET_MONEY_REWARD money
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
             * @member {number|Long} money
             * @memberof com.message.S_GET_MONEY_REWARD
             * @instance
             */
            S_GET_MONEY_REWARD.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.money);
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
                        message.money = reader.int64();
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
             * @property {number|Long|null} [money] S_GET_MONEY_INFO money
             * @property {number|Long|null} [diamond] S_GET_MONEY_INFO diamond
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
             * @member {number|Long} money
             * @memberof com.message.S_GET_MONEY_INFO
             * @instance
             */
            S_GET_MONEY_INFO.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_GET_MONEY_INFO diamond.
             * @member {number|Long} diamond
             * @memberof com.message.S_GET_MONEY_INFO
             * @instance
             */
            S_GET_MONEY_INFO.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.money);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.diamond);
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
                        message.money = reader.int64();
                        break;
                    case 4:
                        message.diamond = reader.int64();
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

        message.C_USER_LOGIN = (function() {

            /**
             * Properties of a C_USER_LOGIN.
             * @memberof com.message
             * @interface IC_USER_LOGIN
             * @property {number|Long|null} [username] C_USER_LOGIN username
             * @property {string|null} [gameSite] C_USER_LOGIN gameSite
             * @property {string|null} [sparam] C_USER_LOGIN sparam
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
             * C_USER_LOGIN username.
             * @member {number|Long} username
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.username = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * C_USER_LOGIN gameSite.
             * @member {string} gameSite
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.gameSite = "";

            /**
             * C_USER_LOGIN sparam.
             * @member {string} sparam
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.sparam = "";

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
                if (message.username != null && message.hasOwnProperty("username"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.username);
                if (message.gameSite != null && message.hasOwnProperty("gameSite"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameSite);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.sparam);
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
                        message.username = reader.int64();
                        break;
                    case 2:
                        message.gameSite = reader.string();
                        break;
                    case 3:
                        message.sparam = reader.string();
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

        message.S_USER_LOGIN = (function() {

            /**
             * Properties of a S_USER_LOGIN.
             * @memberof com.message
             * @interface IS_USER_LOGIN
             * @property {number|Long|null} [playerId] S_USER_LOGIN playerId
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
             * @property {number|Long|null} [username] C_LOGIN_REGISTER username
             * @property {string|null} [gameSite] C_LOGIN_REGISTER gameSite
             * @property {string|null} [nickname] C_LOGIN_REGISTER nickname
             * @property {number|null} [heroId] C_LOGIN_REGISTER heroId
             * @property {string|null} [sparam] C_LOGIN_REGISTER sparam
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
             * C_LOGIN_REGISTER username.
             * @member {number|Long} username
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.username = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * C_LOGIN_REGISTER gameSite.
             * @member {string} gameSite
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.gameSite = "";

            /**
             * C_LOGIN_REGISTER nickname.
             * @member {string} nickname
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.nickname = "";

            /**
             * C_LOGIN_REGISTER heroId.
             * @member {number} heroId
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.heroId = 0;

            /**
             * C_LOGIN_REGISTER sparam.
             * @member {string} sparam
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.sparam = "";

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
                if (message.username != null && message.hasOwnProperty("username"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.username);
                if (message.gameSite != null && message.hasOwnProperty("gameSite"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameSite);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.heroId);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.sparam);
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
                        message.username = reader.int64();
                        break;
                    case 2:
                        message.gameSite = reader.string();
                        break;
                    case 3:
                        message.nickname = reader.string();
                        break;
                    case 4:
                        message.heroId = reader.int32();
                        break;
                    case 5:
                        message.sparam = reader.string();
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

        message.C_GET_NICKNAME_INFO = (function() {

            /**
             * Properties of a C_GET_NICKNAME_INFO.
             * @memberof com.message
             * @interface IC_GET_NICKNAME_INFO
             * @property {string|null} [nickName] C_GET_NICKNAME_INFO nickName
             */

            /**
             * Constructs a new C_GET_NICKNAME_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_NICKNAME_INFO.
             * @implements IC_GET_NICKNAME_INFO
             * @constructor
             * @param {com.message.IC_GET_NICKNAME_INFO=} [properties] Properties to set
             */
            function C_GET_NICKNAME_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_GET_NICKNAME_INFO nickName.
             * @member {string} nickName
             * @memberof com.message.C_GET_NICKNAME_INFO
             * @instance
             */
            C_GET_NICKNAME_INFO.prototype.nickName = "";

            /**
             * Encodes the specified C_GET_NICKNAME_INFO message. Does not implicitly {@link com.message.C_GET_NICKNAME_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_NICKNAME_INFO
             * @static
             * @param {com.message.IC_GET_NICKNAME_INFO} message C_GET_NICKNAME_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_NICKNAME_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
                return writer;
            };

            /**
             * Decodes a C_GET_NICKNAME_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_NICKNAME_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_NICKNAME_INFO} C_GET_NICKNAME_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_NICKNAME_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_NICKNAME_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nickName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_GET_NICKNAME_INFO;
        })();

        message.S_GET_NICKNAME_INFO = (function() {

            /**
             * Properties of a S_GET_NICKNAME_INFO.
             * @memberof com.message
             * @interface IS_GET_NICKNAME_INFO
             * @property {string|null} [nickName] S_GET_NICKNAME_INFO nickName
             * @property {boolean|null} [canUse] S_GET_NICKNAME_INFO canUse
             */

            /**
             * Constructs a new S_GET_NICKNAME_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_NICKNAME_INFO.
             * @implements IS_GET_NICKNAME_INFO
             * @constructor
             * @param {com.message.IS_GET_NICKNAME_INFO=} [properties] Properties to set
             */
            function S_GET_NICKNAME_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_NICKNAME_INFO nickName.
             * @member {string} nickName
             * @memberof com.message.S_GET_NICKNAME_INFO
             * @instance
             */
            S_GET_NICKNAME_INFO.prototype.nickName = "";

            /**
             * S_GET_NICKNAME_INFO canUse.
             * @member {boolean} canUse
             * @memberof com.message.S_GET_NICKNAME_INFO
             * @instance
             */
            S_GET_NICKNAME_INFO.prototype.canUse = false;

            /**
             * Encodes the specified S_GET_NICKNAME_INFO message. Does not implicitly {@link com.message.S_GET_NICKNAME_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_NICKNAME_INFO
             * @static
             * @param {com.message.IS_GET_NICKNAME_INFO} message S_GET_NICKNAME_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_NICKNAME_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
                if (message.canUse != null && message.hasOwnProperty("canUse"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.canUse);
                return writer;
            };

            /**
             * Decodes a S_GET_NICKNAME_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_NICKNAME_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_NICKNAME_INFO} S_GET_NICKNAME_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_NICKNAME_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_NICKNAME_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nickName = reader.string();
                        break;
                    case 2:
                        message.canUse = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_NICKNAME_INFO;
        })();

        message.C_SEND_SDK_DATA = (function() {

            /**
             * Properties of a C_SEND_SDK_DATA.
             * @memberof com.message
             * @interface IC_SEND_SDK_DATA
             * @property {string|null} [reportStr] C_SEND_SDK_DATA reportStr
             * @property {string|null} [reportUrl] C_SEND_SDK_DATA reportUrl
             */

            /**
             * Constructs a new C_SEND_SDK_DATA.
             * @memberof com.message
             * @classdesc Represents a C_SEND_SDK_DATA.
             * @implements IC_SEND_SDK_DATA
             * @constructor
             * @param {com.message.IC_SEND_SDK_DATA=} [properties] Properties to set
             */
            function C_SEND_SDK_DATA(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_SEND_SDK_DATA reportStr.
             * @member {string} reportStr
             * @memberof com.message.C_SEND_SDK_DATA
             * @instance
             */
            C_SEND_SDK_DATA.prototype.reportStr = "";

            /**
             * C_SEND_SDK_DATA reportUrl.
             * @member {string} reportUrl
             * @memberof com.message.C_SEND_SDK_DATA
             * @instance
             */
            C_SEND_SDK_DATA.prototype.reportUrl = "";

            /**
             * Encodes the specified C_SEND_SDK_DATA message. Does not implicitly {@link com.message.C_SEND_SDK_DATA.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_SEND_SDK_DATA
             * @static
             * @param {com.message.IC_SEND_SDK_DATA} message C_SEND_SDK_DATA message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_SEND_SDK_DATA.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reportStr != null && message.hasOwnProperty("reportStr"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.reportStr);
                if (message.reportUrl != null && message.hasOwnProperty("reportUrl"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.reportUrl);
                return writer;
            };

            /**
             * Decodes a C_SEND_SDK_DATA message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_SEND_SDK_DATA
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_SEND_SDK_DATA} C_SEND_SDK_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_SEND_SDK_DATA.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_SEND_SDK_DATA();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.reportStr = reader.string();
                        break;
                    case 2:
                        message.reportUrl = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_SEND_SDK_DATA;
        })();

        message.S_SEND_SDK_DATA = (function() {

            /**
             * Properties of a S_SEND_SDK_DATA.
             * @memberof com.message
             * @interface IS_SEND_SDK_DATA
             * @property {boolean|null} [canUse] S_SEND_SDK_DATA canUse
             */

            /**
             * Constructs a new S_SEND_SDK_DATA.
             * @memberof com.message
             * @classdesc Represents a S_SEND_SDK_DATA.
             * @implements IS_SEND_SDK_DATA
             * @constructor
             * @param {com.message.IS_SEND_SDK_DATA=} [properties] Properties to set
             */
            function S_SEND_SDK_DATA(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SEND_SDK_DATA canUse.
             * @member {boolean} canUse
             * @memberof com.message.S_SEND_SDK_DATA
             * @instance
             */
            S_SEND_SDK_DATA.prototype.canUse = false;

            /**
             * Encodes the specified S_SEND_SDK_DATA message. Does not implicitly {@link com.message.S_SEND_SDK_DATA.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SEND_SDK_DATA
             * @static
             * @param {com.message.IS_SEND_SDK_DATA} message S_SEND_SDK_DATA message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SEND_SDK_DATA.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.canUse != null && message.hasOwnProperty("canUse"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.canUse);
                return writer;
            };

            /**
             * Decodes a S_SEND_SDK_DATA message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SEND_SDK_DATA
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SEND_SDK_DATA} S_SEND_SDK_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SEND_SDK_DATA.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SEND_SDK_DATA();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.canUse = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SEND_SDK_DATA;
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
             * @property {com.message.ITeamMsg|null} [teamMsg] S_USER_LOGIN_INIT_FINISH teamMsg
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
             * S_USER_LOGIN_INIT_FINISH teamMsg.
             * @member {com.message.ITeamMsg|null|undefined} teamMsg
             * @memberof com.message.S_USER_LOGIN_INIT_FINISH
             * @instance
             */
            S_USER_LOGIN_INIT_FINISH.prototype.teamMsg = null;

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
                if (message.teamMsg != null && message.hasOwnProperty("teamMsg"))
                    $root.com.message.TeamMsg.encode(message.teamMsg, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                        message.teamMsg = $root.com.message.TeamMsg.decode(reader, reader.uint32());
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

        message.BasePlayerMsg = (function() {

            /**
             * Properties of a BasePlayerMsg.
             * @memberof com.message
             * @interface IBasePlayerMsg
             * @property {number|Long|null} [playerId] BasePlayerMsg playerId
             * @property {string|null} [name] BasePlayerMsg name
             * @property {string|null} [idNum] BasePlayerMsg idNum
             * @property {number|null} [state] BasePlayerMsg state
             * @property {string|null} [inviteCode] BasePlayerMsg inviteCode
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
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.idNum != null && message.hasOwnProperty("idNum"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.idNum);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
                if (message.inviteCode != null && message.hasOwnProperty("inviteCode"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.inviteCode);
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
                        message.name = reader.string();
                        break;
                    case 3:
                        message.idNum = reader.string();
                        break;
                    case 4:
                        message.state = reader.int32();
                        break;
                    case 5:
                        message.inviteCode = reader.string();
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
             * @property {number|Long|null} [money] PlayerPropertyMsg money
             * @property {number|Long|null} [diamond] PlayerPropertyMsg diamond
             * @property {number|Long|null} [frozenDiamond] PlayerPropertyMsg frozenDiamond
             * @property {number|null} [available] PlayerPropertyMsg available
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
             * @member {number|Long} money
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerPropertyMsg diamond.
             * @member {number|Long} diamond
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerPropertyMsg frozenDiamond.
             * @member {number|Long} frozenDiamond
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.frozenDiamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerPropertyMsg available.
             * @member {number} available
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.available = 0;

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
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.money);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.diamond);
                if (message.frozenDiamond != null && message.hasOwnProperty("frozenDiamond"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.frozenDiamond);
                if (message.available != null && message.hasOwnProperty("available"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.available);
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
                        message.money = reader.int64();
                        break;
                    case 4:
                        message.diamond = reader.int64();
                        break;
                    case 5:
                        message.frozenDiamond = reader.int64();
                        break;
                    case 6:
                        message.available = reader.int32();
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

        message.TeamMsg = (function() {

            /**
             * Properties of a TeamMsg.
             * @memberof com.message
             * @interface ITeamMsg
             * @property {number|Long|null} [playerId] TeamMsg playerId
             * @property {number|null} [count] TeamMsg count
             * @property {number|null} [realCount] TeamMsg realCount
             * @property {Array.<com.message.ITeamMemberMsg>|null} [teamMemberMsg] TeamMsg teamMemberMsg
             */

            /**
             * Constructs a new TeamMsg.
             * @memberof com.message
             * @classdesc Represents a TeamMsg.
             * @implements ITeamMsg
             * @constructor
             * @param {com.message.ITeamMsg=} [properties] Properties to set
             */
            function TeamMsg(properties) {
                this.teamMemberMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TeamMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.TeamMsg
             * @instance
             */
            TeamMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TeamMsg count.
             * @member {number} count
             * @memberof com.message.TeamMsg
             * @instance
             */
            TeamMsg.prototype.count = 0;

            /**
             * TeamMsg realCount.
             * @member {number} realCount
             * @memberof com.message.TeamMsg
             * @instance
             */
            TeamMsg.prototype.realCount = 0;

            /**
             * TeamMsg teamMemberMsg.
             * @member {Array.<com.message.ITeamMemberMsg>} teamMemberMsg
             * @memberof com.message.TeamMsg
             * @instance
             */
            TeamMsg.prototype.teamMemberMsg = $util.emptyArray;

            /**
             * Encodes the specified TeamMsg message. Does not implicitly {@link com.message.TeamMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.TeamMsg
             * @static
             * @param {com.message.ITeamMsg} message TeamMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                if (message.realCount != null && message.hasOwnProperty("realCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.realCount);
                if (message.teamMemberMsg != null && message.teamMemberMsg.length)
                    for (var i = 0; i < message.teamMemberMsg.length; ++i)
                        $root.com.message.TeamMemberMsg.encode(message.teamMemberMsg[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a TeamMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.TeamMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.TeamMsg} TeamMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.TeamMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.count = reader.int32();
                        break;
                    case 3:
                        message.realCount = reader.int32();
                        break;
                    case 4:
                        if (!(message.teamMemberMsg && message.teamMemberMsg.length))
                            message.teamMemberMsg = [];
                        message.teamMemberMsg.push($root.com.message.TeamMemberMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TeamMsg;
        })();

        message.TeamMemberMsg = (function() {

            /**
             * Properties of a TeamMemberMsg.
             * @memberof com.message
             * @interface ITeamMemberMsg
             * @property {number|Long|null} [playerId] TeamMemberMsg playerId
             * @property {number|null} [state] TeamMemberMsg state
             * @property {number|null} [available] TeamMemberMsg available
             */

            /**
             * Constructs a new TeamMemberMsg.
             * @memberof com.message
             * @classdesc Represents a TeamMemberMsg.
             * @implements ITeamMemberMsg
             * @constructor
             * @param {com.message.ITeamMemberMsg=} [properties] Properties to set
             */
            function TeamMemberMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TeamMemberMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.TeamMemberMsg
             * @instance
             */
            TeamMemberMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TeamMemberMsg state.
             * @member {number} state
             * @memberof com.message.TeamMemberMsg
             * @instance
             */
            TeamMemberMsg.prototype.state = 0;

            /**
             * TeamMemberMsg available.
             * @member {number} available
             * @memberof com.message.TeamMemberMsg
             * @instance
             */
            TeamMemberMsg.prototype.available = 0;

            /**
             * Encodes the specified TeamMemberMsg message. Does not implicitly {@link com.message.TeamMemberMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.TeamMemberMsg
             * @static
             * @param {com.message.ITeamMemberMsg} message TeamMemberMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamMemberMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
                if (message.available != null && message.hasOwnProperty("available"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.available);
                return writer;
            };

            /**
             * Decodes a TeamMemberMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.TeamMemberMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.TeamMemberMsg} TeamMemberMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamMemberMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.TeamMemberMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 4:
                        message.state = reader.int32();
                        break;
                    case 6:
                        message.available = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TeamMemberMsg;
        })();

        message.BUY_GOODS_INFO = (function() {

            /**
             * Properties of a BUY_GOODS_INFO.
             * @memberof com.message
             * @interface IBUY_GOODS_INFO
             * @property {number|null} [marketId] BUY_GOODS_INFO marketId
             * @property {number|null} [count] BUY_GOODS_INFO count
             */

            /**
             * Constructs a new BUY_GOODS_INFO.
             * @memberof com.message
             * @classdesc Represents a BUY_GOODS_INFO.
             * @implements IBUY_GOODS_INFO
             * @constructor
             * @param {com.message.IBUY_GOODS_INFO=} [properties] Properties to set
             */
            function BUY_GOODS_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BUY_GOODS_INFO marketId.
             * @member {number} marketId
             * @memberof com.message.BUY_GOODS_INFO
             * @instance
             */
            BUY_GOODS_INFO.prototype.marketId = 0;

            /**
             * BUY_GOODS_INFO count.
             * @member {number} count
             * @memberof com.message.BUY_GOODS_INFO
             * @instance
             */
            BUY_GOODS_INFO.prototype.count = 0;

            /**
             * Encodes the specified BUY_GOODS_INFO message. Does not implicitly {@link com.message.BUY_GOODS_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.BUY_GOODS_INFO
             * @static
             * @param {com.message.IBUY_GOODS_INFO} message BUY_GOODS_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BUY_GOODS_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.marketId != null && message.hasOwnProperty("marketId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.marketId);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                return writer;
            };

            /**
             * Decodes a BUY_GOODS_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.BUY_GOODS_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.BUY_GOODS_INFO} BUY_GOODS_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BUY_GOODS_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.BUY_GOODS_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.marketId = reader.int32();
                        break;
                    case 2:
                        message.count = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BUY_GOODS_INFO;
        })();

        message.C_MARKET_BUY = (function() {

            /**
             * Properties of a C_MARKET_BUY.
             * @memberof com.message
             * @interface IC_MARKET_BUY
             * @property {com.message.IBUY_GOODS_INFO|null} [buyInfo] C_MARKET_BUY buyInfo
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
             * C_MARKET_BUY buyInfo.
             * @member {com.message.IBUY_GOODS_INFO|null|undefined} buyInfo
             * @memberof com.message.C_MARKET_BUY
             * @instance
             */
            C_MARKET_BUY.prototype.buyInfo = null;

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
                if (message.buyInfo != null && message.hasOwnProperty("buyInfo"))
                    $root.com.message.BUY_GOODS_INFO.encode(message.buyInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.buyInfo = $root.com.message.BUY_GOODS_INFO.decode(reader, reader.uint32());
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
             * @property {com.message.IBUY_GOODS_INFO|null} [buyInfo] S_MARKET_BUY buyInfo
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
             * S_MARKET_BUY buyInfo.
             * @member {com.message.IBUY_GOODS_INFO|null|undefined} buyInfo
             * @memberof com.message.S_MARKET_BUY
             * @instance
             */
            S_MARKET_BUY.prototype.buyInfo = null;

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
                if (message.buyInfo != null && message.hasOwnProperty("buyInfo"))
                    $root.com.message.BUY_GOODS_INFO.encode(message.buyInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.buyInfo = $root.com.message.BUY_GOODS_INFO.decode(reader, reader.uint32());
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

        message.C_LIST_MARKET_LIMIT_INFO = (function() {

            /**
             * Properties of a C_LIST_MARKET_LIMIT_INFO.
             * @memberof com.message
             * @interface IC_LIST_MARKET_LIMIT_INFO
             * @property {number|null} [shopType] C_LIST_MARKET_LIMIT_INFO shopType
             */

            /**
             * Constructs a new C_LIST_MARKET_LIMIT_INFO.
             * @memberof com.message
             * @classdesc Represents a C_LIST_MARKET_LIMIT_INFO.
             * @implements IC_LIST_MARKET_LIMIT_INFO
             * @constructor
             * @param {com.message.IC_LIST_MARKET_LIMIT_INFO=} [properties] Properties to set
             */
            function C_LIST_MARKET_LIMIT_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_LIST_MARKET_LIMIT_INFO shopType.
             * @member {number} shopType
             * @memberof com.message.C_LIST_MARKET_LIMIT_INFO
             * @instance
             */
            C_LIST_MARKET_LIMIT_INFO.prototype.shopType = 0;

            /**
             * Encodes the specified C_LIST_MARKET_LIMIT_INFO message. Does not implicitly {@link com.message.C_LIST_MARKET_LIMIT_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_LIST_MARKET_LIMIT_INFO
             * @static
             * @param {com.message.IC_LIST_MARKET_LIMIT_INFO} message C_LIST_MARKET_LIMIT_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_LIST_MARKET_LIMIT_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shopType != null && message.hasOwnProperty("shopType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shopType);
                return writer;
            };

            /**
             * Decodes a C_LIST_MARKET_LIMIT_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_LIST_MARKET_LIMIT_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_LIST_MARKET_LIMIT_INFO} C_LIST_MARKET_LIMIT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_LIST_MARKET_LIMIT_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_LIST_MARKET_LIMIT_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.shopType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_LIST_MARKET_LIMIT_INFO;
        })();

        message.S_LIST_MARKET_LIMIT_INFO = (function() {

            /**
             * Properties of a S_LIST_MARKET_LIMIT_INFO.
             * @memberof com.message
             * @interface IS_LIST_MARKET_LIMIT_INFO
             * @property {number|null} [shopType] S_LIST_MARKET_LIMIT_INFO shopType
             * @property {Array.<com.message.IBUY_GOODS_INFO>|null} [limitInfo] S_LIST_MARKET_LIMIT_INFO limitInfo
             */

            /**
             * Constructs a new S_LIST_MARKET_LIMIT_INFO.
             * @memberof com.message
             * @classdesc Represents a S_LIST_MARKET_LIMIT_INFO.
             * @implements IS_LIST_MARKET_LIMIT_INFO
             * @constructor
             * @param {com.message.IS_LIST_MARKET_LIMIT_INFO=} [properties] Properties to set
             */
            function S_LIST_MARKET_LIMIT_INFO(properties) {
                this.limitInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_LIST_MARKET_LIMIT_INFO shopType.
             * @member {number} shopType
             * @memberof com.message.S_LIST_MARKET_LIMIT_INFO
             * @instance
             */
            S_LIST_MARKET_LIMIT_INFO.prototype.shopType = 0;

            /**
             * S_LIST_MARKET_LIMIT_INFO limitInfo.
             * @member {Array.<com.message.IBUY_GOODS_INFO>} limitInfo
             * @memberof com.message.S_LIST_MARKET_LIMIT_INFO
             * @instance
             */
            S_LIST_MARKET_LIMIT_INFO.prototype.limitInfo = $util.emptyArray;

            /**
             * Encodes the specified S_LIST_MARKET_LIMIT_INFO message. Does not implicitly {@link com.message.S_LIST_MARKET_LIMIT_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_LIST_MARKET_LIMIT_INFO
             * @static
             * @param {com.message.IS_LIST_MARKET_LIMIT_INFO} message S_LIST_MARKET_LIMIT_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_LIST_MARKET_LIMIT_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shopType != null && message.hasOwnProperty("shopType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shopType);
                if (message.limitInfo != null && message.limitInfo.length)
                    for (var i = 0; i < message.limitInfo.length; ++i)
                        $root.com.message.BUY_GOODS_INFO.encode(message.limitInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_LIST_MARKET_LIMIT_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_LIST_MARKET_LIMIT_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_LIST_MARKET_LIMIT_INFO} S_LIST_MARKET_LIMIT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_LIST_MARKET_LIMIT_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_LIST_MARKET_LIMIT_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.shopType = reader.int32();
                        break;
                    case 2:
                        if (!(message.limitInfo && message.limitInfo.length))
                            message.limitInfo = [];
                        message.limitInfo.push($root.com.message.BUY_GOODS_INFO.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_LIST_MARKET_LIMIT_INFO;
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
             * @property {number} C_LOGIN_REGISTER=1005 C_LOGIN_REGISTER value
             * @property {number} C_USER_LOGOUT=1007 C_USER_LOGOUT value
             * @property {number} S_USER_LOGOUT=1008 S_USER_LOGOUT value
             * @property {number} C_USER_LOGIN_INIT_FINISH=1009 C_USER_LOGIN_INIT_FINISH value
             * @property {number} S_USER_LOGIN_INIT_FINISH=1010 S_USER_LOGIN_INIT_FINISH value
             * @property {number} C_GET_PLAYER_INFO=1021 C_GET_PLAYER_INFO value
             * @property {number} S_GET_PLAYER_INFO=1022 S_GET_PLAYER_INFO value
             * @property {number} C_EDIT_PLAYER_NICKNAME=1023 C_EDIT_PLAYER_NICKNAME value
             * @property {number} S_EDIT_PLAYER_NICKNAME=1024 S_EDIT_PLAYER_NICKNAME value
             * @property {number} C_GET_NICKNAME_INFO=1030 C_GET_NICKNAME_INFO value
             * @property {number} S_GET_NICKNAME_INFO=1031 S_GET_NICKNAME_INFO value
             * @property {number} C_SEND_SDK_DATA=1032 C_SEND_SDK_DATA value
             * @property {number} S_SEND_SDK_DATA=1033 S_SEND_SDK_DATA value
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
             * @property {number} S_SYN_PROPERTY=2001 S_SYN_PROPERTY value
             * @property {number} C_SYNC_TIME=2101 C_SYNC_TIME value
             * @property {number} S_SYNC_TIME=2102 S_SYNC_TIME value
             * @property {number} C_DEBUG_COMMON=3101 C_DEBUG_COMMON value
             * @property {number} S_DEBUG_COMMON=3102 S_DEBUG_COMMON value
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
                values[valuesById[1005] = "C_LOGIN_REGISTER"] = 1005;
                values[valuesById[1007] = "C_USER_LOGOUT"] = 1007;
                values[valuesById[1008] = "S_USER_LOGOUT"] = 1008;
                values[valuesById[1009] = "C_USER_LOGIN_INIT_FINISH"] = 1009;
                values[valuesById[1010] = "S_USER_LOGIN_INIT_FINISH"] = 1010;
                values[valuesById[1021] = "C_GET_PLAYER_INFO"] = 1021;
                values[valuesById[1022] = "S_GET_PLAYER_INFO"] = 1022;
                values[valuesById[1023] = "C_EDIT_PLAYER_NICKNAME"] = 1023;
                values[valuesById[1024] = "S_EDIT_PLAYER_NICKNAME"] = 1024;
                values[valuesById[1030] = "C_GET_NICKNAME_INFO"] = 1030;
                values[valuesById[1031] = "S_GET_NICKNAME_INFO"] = 1031;
                values[valuesById[1032] = "C_SEND_SDK_DATA"] = 1032;
                values[valuesById[1033] = "S_SEND_SDK_DATA"] = 1033;
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
                values[valuesById[2001] = "S_SYN_PROPERTY"] = 2001;
                values[valuesById[2101] = "C_SYNC_TIME"] = 2101;
                values[valuesById[2102] = "S_SYNC_TIME"] = 2102;
                values[valuesById[3101] = "C_DEBUG_COMMON"] = 3101;
                values[valuesById[3102] = "S_DEBUG_COMMON"] = 3102;
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
             * @property {number} BAG_ITEM_CAN_NOT_USE=1004 BAG_ITEM_CAN_NOT_USE value
             * @property {number} GOODS_NOT_EXIST=1007 GOODS_NOT_EXIST value
             * @property {number} ERROR_CONFIG=1030 ERROR_CONFIG value
             * @property {number} PLAYER_LEVEL_LIMITED=1038 PLAYER_LEVEL_LIMITED value
             * @property {number} ROLE_NOT_FOUND=1047 ROLE_NOT_FOUND value
             * @property {number} MAIL_NOT_FOUND=1048 MAIL_NOT_FOUND value
             * @property {number} MAIL_NO_ACCESSORY=1049 MAIL_NO_ACCESSORY value
             * @property {number} MAIL_ACCESSORY_RECEIVED=1050 MAIL_ACCESSORY_RECEIVED value
             * @property {number} MAIL_DELETEFAILD_BYACCESSORY=1051 MAIL_DELETEFAILD_BYACCESSORY value
             * @property {number} PLAYER_NOT_FOUND=1052 PLAYER_NOT_FOUND value
             * @property {number} USERNAME_REPEATED=1170 USERNAME_REPEATED value
             * @property {number} NICKNAME_REPEATED=1171 NICKNAME_REPEATED value
             * @property {number} CAN_NOT_USE_ILLEGAL_CHAR=1172 CAN_NOT_USE_ILLEGAL_CHAR value
             * @property {number} CAN_NOT_USE_SENSITIVE_CHAR=1173 CAN_NOT_USE_SENSITIVE_CHAR value
             * @property {number} SIGN_DAY_LARGE=1178 SIGN_DAY_LARGE value
             * @property {number} SIGN_DAY_NOT_ENOUGH=1179 SIGN_DAY_NOT_ENOUGH value
             * @property {number} PLAYER_NOT_EXIST=1181 PLAYER_NOT_EXIST value
             */
            MsgEnum.ExceptionCode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EXCEPTION_EMPTY"] = 0;
                values[valuesById[1001] = "ERROR_INPUT_PARAMETER"] = 1001;
                values[valuesById[1002] = "ERROR_INPUT_NUMBER"] = 1002;
                values[valuesById[1003] = "NOT_ENOUGH_ITEM_GOODS"] = 1003;
                values[valuesById[1004] = "BAG_ITEM_CAN_NOT_USE"] = 1004;
                values[valuesById[1007] = "GOODS_NOT_EXIST"] = 1007;
                values[valuesById[1030] = "ERROR_CONFIG"] = 1030;
                values[valuesById[1038] = "PLAYER_LEVEL_LIMITED"] = 1038;
                values[valuesById[1047] = "ROLE_NOT_FOUND"] = 1047;
                values[valuesById[1048] = "MAIL_NOT_FOUND"] = 1048;
                values[valuesById[1049] = "MAIL_NO_ACCESSORY"] = 1049;
                values[valuesById[1050] = "MAIL_ACCESSORY_RECEIVED"] = 1050;
                values[valuesById[1051] = "MAIL_DELETEFAILD_BYACCESSORY"] = 1051;
                values[valuesById[1052] = "PLAYER_NOT_FOUND"] = 1052;
                values[valuesById[1170] = "USERNAME_REPEATED"] = 1170;
                values[valuesById[1171] = "NICKNAME_REPEATED"] = 1171;
                values[valuesById[1172] = "CAN_NOT_USE_ILLEGAL_CHAR"] = 1172;
                values[valuesById[1173] = "CAN_NOT_USE_SENSITIVE_CHAR"] = 1173;
                values[valuesById[1178] = "SIGN_DAY_LARGE"] = 1178;
                values[valuesById[1179] = "SIGN_DAY_NOT_ENOUGH"] = 1179;
                values[valuesById[1181] = "PLAYER_NOT_EXIST"] = 1181;
                return values;
            })();

            return MsgEnum;
        })();

        message.S_SYN_FIGHTER_PROPERTY = (function() {

            /**
             * Properties of a S_SYN_FIGHTER_PROPERTY.
             * @memberof com.message
             * @interface IS_SYN_FIGHTER_PROPERTY
             * @property {Array.<com.message.IIntFloatMapMsg>|null} [mapMsg] S_SYN_FIGHTER_PROPERTY mapMsg
             */

            /**
             * Constructs a new S_SYN_FIGHTER_PROPERTY.
             * @memberof com.message
             * @classdesc Represents a S_SYN_FIGHTER_PROPERTY.
             * @implements IS_SYN_FIGHTER_PROPERTY
             * @constructor
             * @param {com.message.IS_SYN_FIGHTER_PROPERTY=} [properties] Properties to set
             */
            function S_SYN_FIGHTER_PROPERTY(properties) {
                this.mapMsg = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYN_FIGHTER_PROPERTY mapMsg.
             * @member {Array.<com.message.IIntFloatMapMsg>} mapMsg
             * @memberof com.message.S_SYN_FIGHTER_PROPERTY
             * @instance
             */
            S_SYN_FIGHTER_PROPERTY.prototype.mapMsg = $util.emptyArray;

            /**
             * Encodes the specified S_SYN_FIGHTER_PROPERTY message. Does not implicitly {@link com.message.S_SYN_FIGHTER_PROPERTY.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYN_FIGHTER_PROPERTY
             * @static
             * @param {com.message.IS_SYN_FIGHTER_PROPERTY} message S_SYN_FIGHTER_PROPERTY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYN_FIGHTER_PROPERTY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mapMsg != null && message.mapMsg.length)
                    for (var i = 0; i < message.mapMsg.length; ++i)
                        $root.com.message.IntFloatMapMsg.encode(message.mapMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a S_SYN_FIGHTER_PROPERTY message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYN_FIGHTER_PROPERTY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYN_FIGHTER_PROPERTY} S_SYN_FIGHTER_PROPERTY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYN_FIGHTER_PROPERTY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYN_FIGHTER_PROPERTY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.mapMsg && message.mapMsg.length))
                            message.mapMsg = [];
                        message.mapMsg.push($root.com.message.IntFloatMapMsg.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYN_FIGHTER_PROPERTY;
        })();

        message.S_SYN_PROPERTY = (function() {

            /**
             * Properties of a S_SYN_PROPERTY.
             * @memberof com.message
             * @interface IS_SYN_PROPERTY
             * @property {Array.<com.message.IIntLongMapMsg>|null} [mapMsg] S_SYN_PROPERTY mapMsg
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
             * @member {Array.<com.message.IIntLongMapMsg>} mapMsg
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
                        $root.com.message.IntLongMapMsg.encode(message.mapMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.mapMsg.push($root.com.message.IntLongMapMsg.decode(reader, reader.uint32()));
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

        /**
         * PropertyID enum.
         * @name com.message.PropertyID
         * @enum {string}
         * @property {number} LEVEL=0 LEVEL value
         * @property {number} EXP=1 EXP value
         * @property {number} DIAMOND=2 DIAMOND value
         * @property {number} MONEY=3 MONEY value
         * @property {number} EXP_POOL=4 EXP_POOL value
         * @property {number} GUILD_DONATE=5 GUILD_DONATE value
         * @property {number} HONOR=8 HONOR value
         * @property {number} DEMON_SOCRE=9 DEMON_SOCRE value
         * @property {number} FIGHT_VAL=10 FIGHT_VAL value
         * @property {number} PRACTICE=11 PRACTICE value
         * @property {number} BIND_DIAMOND=12 BIND_DIAMOND value
         * @property {number} TOWER_CHIP=13 TOWER_CHIP value
         * @property {number} HERO_QUALITY=14 HERO_QUALITY value
         * @property {number} OP_LUCK_SCORE=15 OP_LUCK_SCORE value
         * @property {number} NAN_TIAN_GATE_SCORE=16 NAN_TIAN_GATE_SCORE value
         * @property {number} XIAN_JING=17 XIAN_JING value
         * @property {number} FRIEND_SCORE=18 FRIEND_SCORE value
         * @property {number} ABI_HELL_SCORE=19 ABI_HELL_SCORE value
         * @property {number} HERO_SOL=20 HERO_SOL value
         */
        message.PropertyID = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LEVEL"] = 0;
            values[valuesById[1] = "EXP"] = 1;
            values[valuesById[2] = "DIAMOND"] = 2;
            values[valuesById[3] = "MONEY"] = 3;
            values[valuesById[4] = "EXP_POOL"] = 4;
            values[valuesById[5] = "GUILD_DONATE"] = 5;
            values[valuesById[8] = "HONOR"] = 8;
            values[valuesById[9] = "DEMON_SOCRE"] = 9;
            values[valuesById[10] = "FIGHT_VAL"] = 10;
            values[valuesById[11] = "PRACTICE"] = 11;
            values[valuesById[12] = "BIND_DIAMOND"] = 12;
            values[valuesById[13] = "TOWER_CHIP"] = 13;
            values[valuesById[14] = "HERO_QUALITY"] = 14;
            values[valuesById[15] = "OP_LUCK_SCORE"] = 15;
            values[valuesById[16] = "NAN_TIAN_GATE_SCORE"] = 16;
            values[valuesById[17] = "XIAN_JING"] = 17;
            values[valuesById[18] = "FRIEND_SCORE"] = 18;
            values[valuesById[19] = "ABI_HELL_SCORE"] = 19;
            values[valuesById[20] = "HERO_SOL"] = 20;
            return values;
        })();

        message.C_GET_PLAYER_INFO = (function() {

            /**
             * Properties of a C_GET_PLAYER_INFO.
             * @memberof com.message
             * @interface IC_GET_PLAYER_INFO
             * @property {number|Long|null} [playerId] C_GET_PLAYER_INFO playerId
             * @property {number|null} [serverId] C_GET_PLAYER_INFO serverId
             * @property {number|null} [formationType] C_GET_PLAYER_INFO formationType
             */

            /**
             * Constructs a new C_GET_PLAYER_INFO.
             * @memberof com.message
             * @classdesc Represents a C_GET_PLAYER_INFO.
             * @implements IC_GET_PLAYER_INFO
             * @constructor
             * @param {com.message.IC_GET_PLAYER_INFO=} [properties] Properties to set
             */
            function C_GET_PLAYER_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_GET_PLAYER_INFO playerId.
             * @member {number|Long} playerId
             * @memberof com.message.C_GET_PLAYER_INFO
             * @instance
             */
            C_GET_PLAYER_INFO.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * C_GET_PLAYER_INFO serverId.
             * @member {number} serverId
             * @memberof com.message.C_GET_PLAYER_INFO
             * @instance
             */
            C_GET_PLAYER_INFO.prototype.serverId = 0;

            /**
             * C_GET_PLAYER_INFO formationType.
             * @member {number} formationType
             * @memberof com.message.C_GET_PLAYER_INFO
             * @instance
             */
            C_GET_PLAYER_INFO.prototype.formationType = 0;

            /**
             * Encodes the specified C_GET_PLAYER_INFO message. Does not implicitly {@link com.message.C_GET_PLAYER_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_GET_PLAYER_INFO
             * @static
             * @param {com.message.IC_GET_PLAYER_INFO} message C_GET_PLAYER_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_GET_PLAYER_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverId);
                if (message.formationType != null && message.hasOwnProperty("formationType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.formationType);
                return writer;
            };

            /**
             * Decodes a C_GET_PLAYER_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_GET_PLAYER_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_GET_PLAYER_INFO} C_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_GET_PLAYER_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_GET_PLAYER_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.serverId = reader.int32();
                        break;
                    case 3:
                        message.formationType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_GET_PLAYER_INFO;
        })();

        message.S_GET_PLAYER_INFO = (function() {

            /**
             * Properties of a S_GET_PLAYER_INFO.
             * @memberof com.message
             * @interface IS_GET_PLAYER_INFO
             * @property {com.message.IPlayerBaseInfoMsg|null} [playerInfo] S_GET_PLAYER_INFO playerInfo
             * @property {com.message.IPLAYER_ALL_INFO|null} [playerAllInfo] S_GET_PLAYER_INFO playerAllInfo
             * @property {number|null} [formationType] S_GET_PLAYER_INFO formationType
             */

            /**
             * Constructs a new S_GET_PLAYER_INFO.
             * @memberof com.message
             * @classdesc Represents a S_GET_PLAYER_INFO.
             * @implements IS_GET_PLAYER_INFO
             * @constructor
             * @param {com.message.IS_GET_PLAYER_INFO=} [properties] Properties to set
             */
            function S_GET_PLAYER_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_GET_PLAYER_INFO playerInfo.
             * @member {com.message.IPlayerBaseInfoMsg|null|undefined} playerInfo
             * @memberof com.message.S_GET_PLAYER_INFO
             * @instance
             */
            S_GET_PLAYER_INFO.prototype.playerInfo = null;

            /**
             * S_GET_PLAYER_INFO playerAllInfo.
             * @member {com.message.IPLAYER_ALL_INFO|null|undefined} playerAllInfo
             * @memberof com.message.S_GET_PLAYER_INFO
             * @instance
             */
            S_GET_PLAYER_INFO.prototype.playerAllInfo = null;

            /**
             * S_GET_PLAYER_INFO formationType.
             * @member {number} formationType
             * @memberof com.message.S_GET_PLAYER_INFO
             * @instance
             */
            S_GET_PLAYER_INFO.prototype.formationType = 0;

            /**
             * Encodes the specified S_GET_PLAYER_INFO message. Does not implicitly {@link com.message.S_GET_PLAYER_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_GET_PLAYER_INFO
             * @static
             * @param {com.message.IS_GET_PLAYER_INFO} message S_GET_PLAYER_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_GET_PLAYER_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    $root.com.message.PlayerBaseInfoMsg.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.playerAllInfo != null && message.hasOwnProperty("playerAllInfo"))
                    $root.com.message.PLAYER_ALL_INFO.encode(message.playerAllInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.formationType != null && message.hasOwnProperty("formationType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.formationType);
                return writer;
            };

            /**
             * Decodes a S_GET_PLAYER_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_GET_PLAYER_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_GET_PLAYER_INFO} S_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_GET_PLAYER_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_GET_PLAYER_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerInfo = $root.com.message.PlayerBaseInfoMsg.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.playerAllInfo = $root.com.message.PLAYER_ALL_INFO.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.formationType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_GET_PLAYER_INFO;
        })();

        message.PLAYER_ALL_INFO = (function() {

            /**
             * Properties of a PLAYER_ALL_INFO.
             * @memberof com.message
             * @interface IPLAYER_ALL_INFO
             * @property {Array.<com.message.IFORMATION_HERO_INFO1>|null} [formationHeros] PLAYER_ALL_INFO formationHeros
             * @property {Array.<com.message.IHERO_INFO>|null} [heros] PLAYER_ALL_INFO heros
             */

            /**
             * Constructs a new PLAYER_ALL_INFO.
             * @memberof com.message
             * @classdesc Represents a PLAYER_ALL_INFO.
             * @implements IPLAYER_ALL_INFO
             * @constructor
             * @param {com.message.IPLAYER_ALL_INFO=} [properties] Properties to set
             */
            function PLAYER_ALL_INFO(properties) {
                this.formationHeros = [];
                this.heros = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PLAYER_ALL_INFO formationHeros.
             * @member {Array.<com.message.IFORMATION_HERO_INFO1>} formationHeros
             * @memberof com.message.PLAYER_ALL_INFO
             * @instance
             */
            PLAYER_ALL_INFO.prototype.formationHeros = $util.emptyArray;

            /**
             * PLAYER_ALL_INFO heros.
             * @member {Array.<com.message.IHERO_INFO>} heros
             * @memberof com.message.PLAYER_ALL_INFO
             * @instance
             */
            PLAYER_ALL_INFO.prototype.heros = $util.emptyArray;

            /**
             * Encodes the specified PLAYER_ALL_INFO message. Does not implicitly {@link com.message.PLAYER_ALL_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.PLAYER_ALL_INFO
             * @static
             * @param {com.message.IPLAYER_ALL_INFO} message PLAYER_ALL_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PLAYER_ALL_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.formationHeros != null && message.formationHeros.length)
                    for (var i = 0; i < message.formationHeros.length; ++i)
                        $root.com.message.FORMATION_HERO_INFO1.encode(message.formationHeros[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.heros != null && message.heros.length)
                    for (var i = 0; i < message.heros.length; ++i)
                        $root.com.message.HERO_INFO.encode(message.heros[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a PLAYER_ALL_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.PLAYER_ALL_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.PLAYER_ALL_INFO} PLAYER_ALL_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PLAYER_ALL_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.PLAYER_ALL_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.formationHeros && message.formationHeros.length))
                            message.formationHeros = [];
                        message.formationHeros.push($root.com.message.FORMATION_HERO_INFO1.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.heros && message.heros.length))
                            message.heros = [];
                        message.heros.push($root.com.message.HERO_INFO.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PLAYER_ALL_INFO;
        })();

        message.PROPERTY_INFO = (function() {

            /**
             * Properties of a PROPERTY_INFO.
             * @memberof com.message
             * @interface IPROPERTY_INFO
             * @property {number|null} [propId] PROPERTY_INFO propId
             * @property {number|Long|null} [propVal] PROPERTY_INFO propVal
             */

            /**
             * Constructs a new PROPERTY_INFO.
             * @memberof com.message
             * @classdesc Represents a PROPERTY_INFO.
             * @implements IPROPERTY_INFO
             * @constructor
             * @param {com.message.IPROPERTY_INFO=} [properties] Properties to set
             */
            function PROPERTY_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PROPERTY_INFO propId.
             * @member {number} propId
             * @memberof com.message.PROPERTY_INFO
             * @instance
             */
            PROPERTY_INFO.prototype.propId = 0;

            /**
             * PROPERTY_INFO propVal.
             * @member {number|Long} propVal
             * @memberof com.message.PROPERTY_INFO
             * @instance
             */
            PROPERTY_INFO.prototype.propVal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified PROPERTY_INFO message. Does not implicitly {@link com.message.PROPERTY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.PROPERTY_INFO
             * @static
             * @param {com.message.IPROPERTY_INFO} message PROPERTY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PROPERTY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.propId != null && message.hasOwnProperty("propId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.propId);
                if (message.propVal != null && message.hasOwnProperty("propVal"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.propVal);
                return writer;
            };

            /**
             * Decodes a PROPERTY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.PROPERTY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.PROPERTY_INFO} PROPERTY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PROPERTY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.PROPERTY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.propId = reader.int32();
                        break;
                    case 2:
                        message.propVal = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PROPERTY_INFO;
        })();

        message.FORMATION_HERO_INFO1 = (function() {

            /**
             * Properties of a FORMATION_HERO_INFO1.
             * @memberof com.message
             * @interface IFORMATION_HERO_INFO1
             * @property {number|null} [heroId] FORMATION_HERO_INFO1 heroId
             * @property {number|null} [pos] FORMATION_HERO_INFO1 pos
             * @property {number|null} [index] FORMATION_HERO_INFO1 index
             * @property {Array.<com.message.IPROPERTY_INFO>|null} [propInfos] FORMATION_HERO_INFO1 propInfos
             */

            /**
             * Constructs a new FORMATION_HERO_INFO1.
             * @memberof com.message
             * @classdesc Represents a FORMATION_HERO_INFO1.
             * @implements IFORMATION_HERO_INFO1
             * @constructor
             * @param {com.message.IFORMATION_HERO_INFO1=} [properties] Properties to set
             */
            function FORMATION_HERO_INFO1(properties) {
                this.propInfos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FORMATION_HERO_INFO1 heroId.
             * @member {number} heroId
             * @memberof com.message.FORMATION_HERO_INFO1
             * @instance
             */
            FORMATION_HERO_INFO1.prototype.heroId = 0;

            /**
             * FORMATION_HERO_INFO1 pos.
             * @member {number} pos
             * @memberof com.message.FORMATION_HERO_INFO1
             * @instance
             */
            FORMATION_HERO_INFO1.prototype.pos = 0;

            /**
             * FORMATION_HERO_INFO1 index.
             * @member {number} index
             * @memberof com.message.FORMATION_HERO_INFO1
             * @instance
             */
            FORMATION_HERO_INFO1.prototype.index = 0;

            /**
             * FORMATION_HERO_INFO1 propInfos.
             * @member {Array.<com.message.IPROPERTY_INFO>} propInfos
             * @memberof com.message.FORMATION_HERO_INFO1
             * @instance
             */
            FORMATION_HERO_INFO1.prototype.propInfos = $util.emptyArray;

            /**
             * Encodes the specified FORMATION_HERO_INFO1 message. Does not implicitly {@link com.message.FORMATION_HERO_INFO1.verify|verify} messages.
             * @function encode
             * @memberof com.message.FORMATION_HERO_INFO1
             * @static
             * @param {com.message.IFORMATION_HERO_INFO1} message FORMATION_HERO_INFO1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FORMATION_HERO_INFO1.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
                if (message.pos != null && message.hasOwnProperty("pos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pos);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.index);
                if (message.propInfos != null && message.propInfos.length)
                    for (var i = 0; i < message.propInfos.length; ++i)
                        $root.com.message.PROPERTY_INFO.encode(message.propInfos[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FORMATION_HERO_INFO1 message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.FORMATION_HERO_INFO1
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.FORMATION_HERO_INFO1} FORMATION_HERO_INFO1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FORMATION_HERO_INFO1.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.FORMATION_HERO_INFO1();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.int32();
                        break;
                    case 2:
                        message.pos = reader.int32();
                        break;
                    case 3:
                        message.index = reader.int32();
                        break;
                    case 4:
                        if (!(message.propInfos && message.propInfos.length))
                            message.propInfos = [];
                        message.propInfos.push($root.com.message.PROPERTY_INFO.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FORMATION_HERO_INFO1;
        })();

        message.HERO_INFO = (function() {

            /**
             * Properties of a HERO_INFO.
             * @memberof com.message
             * @interface IHERO_INFO
             * @property {number|null} [heroId] HERO_INFO heroId
             * @property {number|null} [heroLevel] HERO_INFO heroLevel
             * @property {number|null} [heroTuPoLevel] HERO_INFO heroTuPoLevel
             * @property {number|null} [wakeUpLevel] HERO_INFO wakeUpLevel
             * @property {number|null} [starUpLevel] HERO_INFO starUpLevel
             * @property {Array.<number>|null} [skills] HERO_INFO skills
             * @property {number|null} [flyLevel] HERO_INFO flyLevel
             */

            /**
             * Constructs a new HERO_INFO.
             * @memberof com.message
             * @classdesc Represents a HERO_INFO.
             * @implements IHERO_INFO
             * @constructor
             * @param {com.message.IHERO_INFO=} [properties] Properties to set
             */
            function HERO_INFO(properties) {
                this.skills = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HERO_INFO heroId.
             * @member {number} heroId
             * @memberof com.message.HERO_INFO
             * @instance
             */
            HERO_INFO.prototype.heroId = 0;

            /**
             * HERO_INFO heroLevel.
             * @member {number} heroLevel
             * @memberof com.message.HERO_INFO
             * @instance
             */
            HERO_INFO.prototype.heroLevel = 0;

            /**
             * HERO_INFO heroTuPoLevel.
             * @member {number} heroTuPoLevel
             * @memberof com.message.HERO_INFO
             * @instance
             */
            HERO_INFO.prototype.heroTuPoLevel = 0;

            /**
             * HERO_INFO wakeUpLevel.
             * @member {number} wakeUpLevel
             * @memberof com.message.HERO_INFO
             * @instance
             */
            HERO_INFO.prototype.wakeUpLevel = 0;

            /**
             * HERO_INFO starUpLevel.
             * @member {number} starUpLevel
             * @memberof com.message.HERO_INFO
             * @instance
             */
            HERO_INFO.prototype.starUpLevel = 0;

            /**
             * HERO_INFO skills.
             * @member {Array.<number>} skills
             * @memberof com.message.HERO_INFO
             * @instance
             */
            HERO_INFO.prototype.skills = $util.emptyArray;

            /**
             * HERO_INFO flyLevel.
             * @member {number} flyLevel
             * @memberof com.message.HERO_INFO
             * @instance
             */
            HERO_INFO.prototype.flyLevel = 0;

            /**
             * Encodes the specified HERO_INFO message. Does not implicitly {@link com.message.HERO_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.HERO_INFO
             * @static
             * @param {com.message.IHERO_INFO} message HERO_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HERO_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
                if (message.heroLevel != null && message.hasOwnProperty("heroLevel"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heroLevel);
                if (message.heroTuPoLevel != null && message.hasOwnProperty("heroTuPoLevel"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.heroTuPoLevel);
                if (message.wakeUpLevel != null && message.hasOwnProperty("wakeUpLevel"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wakeUpLevel);
                if (message.starUpLevel != null && message.hasOwnProperty("starUpLevel"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.starUpLevel);
                if (message.skills != null && message.skills.length) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork();
                    for (var i = 0; i < message.skills.length; ++i)
                        writer.int32(message.skills[i]);
                    writer.ldelim();
                }
                if (message.flyLevel != null && message.hasOwnProperty("flyLevel"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.flyLevel);
                return writer;
            };

            /**
             * Decodes a HERO_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.HERO_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.HERO_INFO} HERO_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HERO_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.HERO_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.int32();
                        break;
                    case 2:
                        message.heroLevel = reader.int32();
                        break;
                    case 3:
                        message.heroTuPoLevel = reader.int32();
                        break;
                    case 4:
                        message.wakeUpLevel = reader.int32();
                        break;
                    case 5:
                        message.starUpLevel = reader.int32();
                        break;
                    case 6:
                        if (!(message.skills && message.skills.length))
                            message.skills = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.skills.push(reader.int32());
                        } else
                            message.skills.push(reader.int32());
                        break;
                    case 7:
                        message.flyLevel = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return HERO_INFO;
        })();

        message.C_EDIT_PLAYER_NICKNAME = (function() {

            /**
             * Properties of a C_EDIT_PLAYER_NICKNAME.
             * @memberof com.message
             * @interface IC_EDIT_PLAYER_NICKNAME
             * @property {string|null} [nickname] C_EDIT_PLAYER_NICKNAME nickname
             */

            /**
             * Constructs a new C_EDIT_PLAYER_NICKNAME.
             * @memberof com.message
             * @classdesc Represents a C_EDIT_PLAYER_NICKNAME.
             * @implements IC_EDIT_PLAYER_NICKNAME
             * @constructor
             * @param {com.message.IC_EDIT_PLAYER_NICKNAME=} [properties] Properties to set
             */
            function C_EDIT_PLAYER_NICKNAME(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_EDIT_PLAYER_NICKNAME nickname.
             * @member {string} nickname
             * @memberof com.message.C_EDIT_PLAYER_NICKNAME
             * @instance
             */
            C_EDIT_PLAYER_NICKNAME.prototype.nickname = "";

            /**
             * Encodes the specified C_EDIT_PLAYER_NICKNAME message. Does not implicitly {@link com.message.C_EDIT_PLAYER_NICKNAME.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_EDIT_PLAYER_NICKNAME
             * @static
             * @param {com.message.IC_EDIT_PLAYER_NICKNAME} message C_EDIT_PLAYER_NICKNAME message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_EDIT_PLAYER_NICKNAME.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                return writer;
            };

            /**
             * Decodes a C_EDIT_PLAYER_NICKNAME message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_EDIT_PLAYER_NICKNAME
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_EDIT_PLAYER_NICKNAME} C_EDIT_PLAYER_NICKNAME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_EDIT_PLAYER_NICKNAME.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_EDIT_PLAYER_NICKNAME();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.nickname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_EDIT_PLAYER_NICKNAME;
        })();

        message.S_EDIT_PLAYER_NICKNAME = (function() {

            /**
             * Properties of a S_EDIT_PLAYER_NICKNAME.
             * @memberof com.message
             * @interface IS_EDIT_PLAYER_NICKNAME
             * @property {string|null} [nickname] S_EDIT_PLAYER_NICKNAME nickname
             */

            /**
             * Constructs a new S_EDIT_PLAYER_NICKNAME.
             * @memberof com.message
             * @classdesc Represents a S_EDIT_PLAYER_NICKNAME.
             * @implements IS_EDIT_PLAYER_NICKNAME
             * @constructor
             * @param {com.message.IS_EDIT_PLAYER_NICKNAME=} [properties] Properties to set
             */
            function S_EDIT_PLAYER_NICKNAME(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_EDIT_PLAYER_NICKNAME nickname.
             * @member {string} nickname
             * @memberof com.message.S_EDIT_PLAYER_NICKNAME
             * @instance
             */
            S_EDIT_PLAYER_NICKNAME.prototype.nickname = "";

            /**
             * Encodes the specified S_EDIT_PLAYER_NICKNAME message. Does not implicitly {@link com.message.S_EDIT_PLAYER_NICKNAME.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_EDIT_PLAYER_NICKNAME
             * @static
             * @param {com.message.IS_EDIT_PLAYER_NICKNAME} message S_EDIT_PLAYER_NICKNAME message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_EDIT_PLAYER_NICKNAME.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                return writer;
            };

            /**
             * Decodes a S_EDIT_PLAYER_NICKNAME message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_EDIT_PLAYER_NICKNAME
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_EDIT_PLAYER_NICKNAME} S_EDIT_PLAYER_NICKNAME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_EDIT_PLAYER_NICKNAME.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_EDIT_PLAYER_NICKNAME();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.nickname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_EDIT_PLAYER_NICKNAME;
        })();

        message.PlayerBaseInfoMsg = (function() {

            /**
             * Properties of a PlayerBaseInfoMsg.
             * @memberof com.message
             * @interface IPlayerBaseInfoMsg
             * @property {number|Long|null} [playerId] PlayerBaseInfoMsg playerId
             * @property {string|null} [nickname] PlayerBaseInfoMsg nickname
             * @property {number|null} [level] PlayerBaseInfoMsg level
             * @property {number|null} [heroId] PlayerBaseInfoMsg heroId
             * @property {number|null} [vipLevel] PlayerBaseInfoMsg vipLevel
             * @property {number|Long|null} [fightVal] PlayerBaseInfoMsg fightVal
             * @property {number|Long|null} [loverPlayerId] PlayerBaseInfoMsg loverPlayerId
             * @property {string|null} [loverName] PlayerBaseInfoMsg loverName
             * @property {string|null} [guildName] PlayerBaseInfoMsg guildName
             * @property {number|Long|null} [guildId] PlayerBaseInfoMsg guildId
             * @property {number|null} [friendType] PlayerBaseInfoMsg friendType
             * @property {number|null} [friendSubType] PlayerBaseInfoMsg friendSubType
             * @property {number|null} [wingId] PlayerBaseInfoMsg wingId
             * @property {number|null} [wingImageId] PlayerBaseInfoMsg wingImageId
             * @property {number|null} [mountId] PlayerBaseInfoMsg mountId
             * @property {number|null} [mountImageId] PlayerBaseInfoMsg mountImageId
             * @property {number|null} [holoId] PlayerBaseInfoMsg holoId
             * @property {number|null} [holoImageId] PlayerBaseInfoMsg holoImageId
             * @property {number|null} [shouhuId] PlayerBaseInfoMsg shouhuId
             * @property {number|null} [shouhuImageId] PlayerBaseInfoMsg shouhuImageId
             * @property {number|null} [heroQuality] PlayerBaseInfoMsg heroQuality
             * @property {number|null} [useTitle] PlayerBaseInfoMsg useTitle
             * @property {number|null} [useHeadFrame] PlayerBaseInfoMsg useHeadFrame
             */

            /**
             * Constructs a new PlayerBaseInfoMsg.
             * @memberof com.message
             * @classdesc Represents a PlayerBaseInfoMsg.
             * @implements IPlayerBaseInfoMsg
             * @constructor
             * @param {com.message.IPlayerBaseInfoMsg=} [properties] Properties to set
             */
            function PlayerBaseInfoMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerBaseInfoMsg playerId.
             * @member {number|Long} playerId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerBaseInfoMsg nickname.
             * @member {string} nickname
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.nickname = "";

            /**
             * PlayerBaseInfoMsg level.
             * @member {number} level
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.level = 0;

            /**
             * PlayerBaseInfoMsg heroId.
             * @member {number} heroId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.heroId = 0;

            /**
             * PlayerBaseInfoMsg vipLevel.
             * @member {number} vipLevel
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.vipLevel = 0;

            /**
             * PlayerBaseInfoMsg fightVal.
             * @member {number|Long} fightVal
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.fightVal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerBaseInfoMsg loverPlayerId.
             * @member {number|Long} loverPlayerId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.loverPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerBaseInfoMsg loverName.
             * @member {string} loverName
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.loverName = "";

            /**
             * PlayerBaseInfoMsg guildName.
             * @member {string} guildName
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.guildName = "";

            /**
             * PlayerBaseInfoMsg guildId.
             * @member {number|Long} guildId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerBaseInfoMsg friendType.
             * @member {number} friendType
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.friendType = 0;

            /**
             * PlayerBaseInfoMsg friendSubType.
             * @member {number} friendSubType
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.friendSubType = 0;

            /**
             * PlayerBaseInfoMsg wingId.
             * @member {number} wingId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.wingId = 0;

            /**
             * PlayerBaseInfoMsg wingImageId.
             * @member {number} wingImageId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.wingImageId = 0;

            /**
             * PlayerBaseInfoMsg mountId.
             * @member {number} mountId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.mountId = 0;

            /**
             * PlayerBaseInfoMsg mountImageId.
             * @member {number} mountImageId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.mountImageId = 0;

            /**
             * PlayerBaseInfoMsg holoId.
             * @member {number} holoId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.holoId = 0;

            /**
             * PlayerBaseInfoMsg holoImageId.
             * @member {number} holoImageId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.holoImageId = 0;

            /**
             * PlayerBaseInfoMsg shouhuId.
             * @member {number} shouhuId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.shouhuId = 0;

            /**
             * PlayerBaseInfoMsg shouhuImageId.
             * @member {number} shouhuImageId
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.shouhuImageId = 0;

            /**
             * PlayerBaseInfoMsg heroQuality.
             * @member {number} heroQuality
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.heroQuality = 0;

            /**
             * PlayerBaseInfoMsg useTitle.
             * @member {number} useTitle
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.useTitle = 0;

            /**
             * PlayerBaseInfoMsg useHeadFrame.
             * @member {number} useHeadFrame
             * @memberof com.message.PlayerBaseInfoMsg
             * @instance
             */
            PlayerBaseInfoMsg.prototype.useHeadFrame = 0;

            /**
             * Encodes the specified PlayerBaseInfoMsg message. Does not implicitly {@link com.message.PlayerBaseInfoMsg.verify|verify} messages.
             * @function encode
             * @memberof com.message.PlayerBaseInfoMsg
             * @static
             * @param {com.message.IPlayerBaseInfoMsg} message PlayerBaseInfoMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerBaseInfoMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.heroId);
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vipLevel);
                if (message.fightVal != null && message.hasOwnProperty("fightVal"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fightVal);
                if (message.loverPlayerId != null && message.hasOwnProperty("loverPlayerId"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.loverPlayerId);
                if (message.loverName != null && message.hasOwnProperty("loverName"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.loverName);
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.guildName);
                if (message.guildId != null && message.hasOwnProperty("guildId"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int64(message.guildId);
                if (message.friendType != null && message.hasOwnProperty("friendType"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.friendType);
                if (message.friendSubType != null && message.hasOwnProperty("friendSubType"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.friendSubType);
                if (message.wingId != null && message.hasOwnProperty("wingId"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.wingId);
                if (message.wingImageId != null && message.hasOwnProperty("wingImageId"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.wingImageId);
                if (message.mountId != null && message.hasOwnProperty("mountId"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.mountId);
                if (message.mountImageId != null && message.hasOwnProperty("mountImageId"))
                    writer.uint32(/* id 16, wireType 0 =*/128).int32(message.mountImageId);
                if (message.holoId != null && message.hasOwnProperty("holoId"))
                    writer.uint32(/* id 17, wireType 0 =*/136).int32(message.holoId);
                if (message.holoImageId != null && message.hasOwnProperty("holoImageId"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int32(message.holoImageId);
                if (message.shouhuId != null && message.hasOwnProperty("shouhuId"))
                    writer.uint32(/* id 19, wireType 0 =*/152).int32(message.shouhuId);
                if (message.shouhuImageId != null && message.hasOwnProperty("shouhuImageId"))
                    writer.uint32(/* id 20, wireType 0 =*/160).int32(message.shouhuImageId);
                if (message.heroQuality != null && message.hasOwnProperty("heroQuality"))
                    writer.uint32(/* id 21, wireType 0 =*/168).int32(message.heroQuality);
                if (message.useTitle != null && message.hasOwnProperty("useTitle"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int32(message.useTitle);
                if (message.useHeadFrame != null && message.hasOwnProperty("useHeadFrame"))
                    writer.uint32(/* id 23, wireType 0 =*/184).int32(message.useHeadFrame);
                return writer;
            };

            /**
             * Decodes a PlayerBaseInfoMsg message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.PlayerBaseInfoMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.PlayerBaseInfoMsg} PlayerBaseInfoMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerBaseInfoMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.PlayerBaseInfoMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.nickname = reader.string();
                        break;
                    case 3:
                        message.level = reader.int32();
                        break;
                    case 4:
                        message.heroId = reader.int32();
                        break;
                    case 5:
                        message.vipLevel = reader.int32();
                        break;
                    case 6:
                        message.fightVal = reader.int64();
                        break;
                    case 7:
                        message.loverPlayerId = reader.int64();
                        break;
                    case 8:
                        message.loverName = reader.string();
                        break;
                    case 9:
                        message.guildName = reader.string();
                        break;
                    case 10:
                        message.guildId = reader.int64();
                        break;
                    case 11:
                        message.friendType = reader.int32();
                        break;
                    case 12:
                        message.friendSubType = reader.int32();
                        break;
                    case 13:
                        message.wingId = reader.int32();
                        break;
                    case 14:
                        message.wingImageId = reader.int32();
                        break;
                    case 15:
                        message.mountId = reader.int32();
                        break;
                    case 16:
                        message.mountImageId = reader.int32();
                        break;
                    case 17:
                        message.holoId = reader.int32();
                        break;
                    case 18:
                        message.holoImageId = reader.int32();
                        break;
                    case 19:
                        message.shouhuId = reader.int32();
                        break;
                    case 20:
                        message.shouhuImageId = reader.int32();
                        break;
                    case 21:
                        message.heroQuality = reader.int32();
                        break;
                    case 22:
                        message.useTitle = reader.int32();
                        break;
                    case 23:
                        message.useHeadFrame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PlayerBaseInfoMsg;
        })();

        message.CROSS_C_GET_PLAYER_INFO = (function() {

            /**
             * Properties of a CROSS_C_GET_PLAYER_INFO.
             * @memberof com.message
             * @interface ICROSS_C_GET_PLAYER_INFO
             * @property {number|Long|null} [playerId] CROSS_C_GET_PLAYER_INFO playerId
             * @property {number|null} [serverId] CROSS_C_GET_PLAYER_INFO serverId
             * @property {number|Long|null} [targetId] CROSS_C_GET_PLAYER_INFO targetId
             * @property {number|null} [targetServerId] CROSS_C_GET_PLAYER_INFO targetServerId
             * @property {number|null} [formationType] CROSS_C_GET_PLAYER_INFO formationType
             */

            /**
             * Constructs a new CROSS_C_GET_PLAYER_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_GET_PLAYER_INFO.
             * @implements ICROSS_C_GET_PLAYER_INFO
             * @constructor
             * @param {com.message.ICROSS_C_GET_PLAYER_INFO=} [properties] Properties to set
             */
            function CROSS_C_GET_PLAYER_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_GET_PLAYER_INFO playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_C_GET_PLAYER_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_INFO.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_C_GET_PLAYER_INFO serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_C_GET_PLAYER_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_INFO.prototype.serverId = 0;

            /**
             * CROSS_C_GET_PLAYER_INFO targetId.
             * @member {number|Long} targetId
             * @memberof com.message.CROSS_C_GET_PLAYER_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_INFO.prototype.targetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_C_GET_PLAYER_INFO targetServerId.
             * @member {number} targetServerId
             * @memberof com.message.CROSS_C_GET_PLAYER_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_INFO.prototype.targetServerId = 0;

            /**
             * CROSS_C_GET_PLAYER_INFO formationType.
             * @member {number} formationType
             * @memberof com.message.CROSS_C_GET_PLAYER_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_INFO.prototype.formationType = 0;

            /**
             * Encodes the specified CROSS_C_GET_PLAYER_INFO message. Does not implicitly {@link com.message.CROSS_C_GET_PLAYER_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_GET_PLAYER_INFO
             * @static
             * @param {com.message.ICROSS_C_GET_PLAYER_INFO} message CROSS_C_GET_PLAYER_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_GET_PLAYER_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverId);
                if (message.targetId != null && message.hasOwnProperty("targetId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.targetId);
                if (message.targetServerId != null && message.hasOwnProperty("targetServerId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.targetServerId);
                if (message.formationType != null && message.hasOwnProperty("formationType"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.formationType);
                return writer;
            };

            /**
             * Decodes a CROSS_C_GET_PLAYER_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_GET_PLAYER_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_GET_PLAYER_INFO} CROSS_C_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_GET_PLAYER_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_GET_PLAYER_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.serverId = reader.int32();
                        break;
                    case 3:
                        message.targetId = reader.int64();
                        break;
                    case 4:
                        message.targetServerId = reader.int32();
                        break;
                    case 5:
                        message.formationType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_GET_PLAYER_INFO;
        })();

        message.CROSS_S_GET_PLAYER_INFO = (function() {

            /**
             * Properties of a CROSS_S_GET_PLAYER_INFO.
             * @memberof com.message
             * @interface ICROSS_S_GET_PLAYER_INFO
             * @property {number|Long|null} [playerId] CROSS_S_GET_PLAYER_INFO playerId
             * @property {number|null} [serverId] CROSS_S_GET_PLAYER_INFO serverId
             * @property {com.message.IPlayerBaseInfoMsg|null} [playerInfo] CROSS_S_GET_PLAYER_INFO playerInfo
             * @property {com.message.IPLAYER_ALL_INFO|null} [playerAllInfo] CROSS_S_GET_PLAYER_INFO playerAllInfo
             * @property {number|null} [formationType] CROSS_S_GET_PLAYER_INFO formationType
             */

            /**
             * Constructs a new CROSS_S_GET_PLAYER_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_GET_PLAYER_INFO.
             * @implements ICROSS_S_GET_PLAYER_INFO
             * @constructor
             * @param {com.message.ICROSS_S_GET_PLAYER_INFO=} [properties] Properties to set
             */
            function CROSS_S_GET_PLAYER_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_GET_PLAYER_INFO playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_S_GET_PLAYER_INFO
             * @instance
             */
            CROSS_S_GET_PLAYER_INFO.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_S_GET_PLAYER_INFO serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_S_GET_PLAYER_INFO
             * @instance
             */
            CROSS_S_GET_PLAYER_INFO.prototype.serverId = 0;

            /**
             * CROSS_S_GET_PLAYER_INFO playerInfo.
             * @member {com.message.IPlayerBaseInfoMsg|null|undefined} playerInfo
             * @memberof com.message.CROSS_S_GET_PLAYER_INFO
             * @instance
             */
            CROSS_S_GET_PLAYER_INFO.prototype.playerInfo = null;

            /**
             * CROSS_S_GET_PLAYER_INFO playerAllInfo.
             * @member {com.message.IPLAYER_ALL_INFO|null|undefined} playerAllInfo
             * @memberof com.message.CROSS_S_GET_PLAYER_INFO
             * @instance
             */
            CROSS_S_GET_PLAYER_INFO.prototype.playerAllInfo = null;

            /**
             * CROSS_S_GET_PLAYER_INFO formationType.
             * @member {number} formationType
             * @memberof com.message.CROSS_S_GET_PLAYER_INFO
             * @instance
             */
            CROSS_S_GET_PLAYER_INFO.prototype.formationType = 0;

            /**
             * Encodes the specified CROSS_S_GET_PLAYER_INFO message. Does not implicitly {@link com.message.CROSS_S_GET_PLAYER_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_GET_PLAYER_INFO
             * @static
             * @param {com.message.ICROSS_S_GET_PLAYER_INFO} message CROSS_S_GET_PLAYER_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_GET_PLAYER_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverId);
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    $root.com.message.PlayerBaseInfoMsg.encode(message.playerInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.playerAllInfo != null && message.hasOwnProperty("playerAllInfo"))
                    $root.com.message.PLAYER_ALL_INFO.encode(message.playerAllInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.formationType != null && message.hasOwnProperty("formationType"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.formationType);
                return writer;
            };

            /**
             * Decodes a CROSS_S_GET_PLAYER_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_GET_PLAYER_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_GET_PLAYER_INFO} CROSS_S_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_GET_PLAYER_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_GET_PLAYER_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.serverId = reader.int32();
                        break;
                    case 3:
                        message.playerInfo = $root.com.message.PlayerBaseInfoMsg.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.playerAllInfo = $root.com.message.PLAYER_ALL_INFO.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.formationType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_GET_PLAYER_INFO;
        })();

        message.S_SYN_SHOW_BUBBLE = (function() {

            /**
             * Properties of a S_SYN_SHOW_BUBBLE.
             * @memberof com.message
             * @interface IS_SYN_SHOW_BUBBLE
             * @property {number|null} [bubbleId] S_SYN_SHOW_BUBBLE bubbleId
             */

            /**
             * Constructs a new S_SYN_SHOW_BUBBLE.
             * @memberof com.message
             * @classdesc Represents a S_SYN_SHOW_BUBBLE.
             * @implements IS_SYN_SHOW_BUBBLE
             * @constructor
             * @param {com.message.IS_SYN_SHOW_BUBBLE=} [properties] Properties to set
             */
            function S_SYN_SHOW_BUBBLE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYN_SHOW_BUBBLE bubbleId.
             * @member {number} bubbleId
             * @memberof com.message.S_SYN_SHOW_BUBBLE
             * @instance
             */
            S_SYN_SHOW_BUBBLE.prototype.bubbleId = 0;

            /**
             * Encodes the specified S_SYN_SHOW_BUBBLE message. Does not implicitly {@link com.message.S_SYN_SHOW_BUBBLE.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYN_SHOW_BUBBLE
             * @static
             * @param {com.message.IS_SYN_SHOW_BUBBLE} message S_SYN_SHOW_BUBBLE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYN_SHOW_BUBBLE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bubbleId != null && message.hasOwnProperty("bubbleId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bubbleId);
                return writer;
            };

            /**
             * Decodes a S_SYN_SHOW_BUBBLE message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYN_SHOW_BUBBLE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYN_SHOW_BUBBLE} S_SYN_SHOW_BUBBLE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYN_SHOW_BUBBLE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYN_SHOW_BUBBLE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bubbleId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYN_SHOW_BUBBLE;
        })();

        message.CROSS_C_SEND_PLYAER_DATA = (function() {

            /**
             * Properties of a CROSS_C_SEND_PLYAER_DATA.
             * @memberof com.message
             * @interface ICROSS_C_SEND_PLYAER_DATA
             * @property {number|null} [serverId] CROSS_C_SEND_PLYAER_DATA serverId
             * @property {Array.<com.message.ICROSS_PLAYER_DATA>|null} [datas] CROSS_C_SEND_PLYAER_DATA datas
             */

            /**
             * Constructs a new CROSS_C_SEND_PLYAER_DATA.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_SEND_PLYAER_DATA.
             * @implements ICROSS_C_SEND_PLYAER_DATA
             * @constructor
             * @param {com.message.ICROSS_C_SEND_PLYAER_DATA=} [properties] Properties to set
             */
            function CROSS_C_SEND_PLYAER_DATA(properties) {
                this.datas = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_SEND_PLYAER_DATA serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_C_SEND_PLYAER_DATA
             * @instance
             */
            CROSS_C_SEND_PLYAER_DATA.prototype.serverId = 0;

            /**
             * CROSS_C_SEND_PLYAER_DATA datas.
             * @member {Array.<com.message.ICROSS_PLAYER_DATA>} datas
             * @memberof com.message.CROSS_C_SEND_PLYAER_DATA
             * @instance
             */
            CROSS_C_SEND_PLYAER_DATA.prototype.datas = $util.emptyArray;

            /**
             * Encodes the specified CROSS_C_SEND_PLYAER_DATA message. Does not implicitly {@link com.message.CROSS_C_SEND_PLYAER_DATA.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_SEND_PLYAER_DATA
             * @static
             * @param {com.message.ICROSS_C_SEND_PLYAER_DATA} message CROSS_C_SEND_PLYAER_DATA message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_SEND_PLYAER_DATA.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.datas != null && message.datas.length)
                    for (var i = 0; i < message.datas.length; ++i)
                        $root.com.message.CROSS_PLAYER_DATA.encode(message.datas[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a CROSS_C_SEND_PLYAER_DATA message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_SEND_PLYAER_DATA
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_SEND_PLYAER_DATA} CROSS_C_SEND_PLYAER_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_SEND_PLYAER_DATA.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_SEND_PLYAER_DATA();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        if (!(message.datas && message.datas.length))
                            message.datas = [];
                        message.datas.push($root.com.message.CROSS_PLAYER_DATA.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_SEND_PLYAER_DATA;
        })();

        message.CROSS_S_SEND_PLAYER_DATA = (function() {

            /**
             * Properties of a CROSS_S_SEND_PLAYER_DATA.
             * @memberof com.message
             * @interface ICROSS_S_SEND_PLAYER_DATA
             * @property {number|null} [serverId] CROSS_S_SEND_PLAYER_DATA serverId
             * @property {number|null} [updateNum] CROSS_S_SEND_PLAYER_DATA updateNum
             */

            /**
             * Constructs a new CROSS_S_SEND_PLAYER_DATA.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_SEND_PLAYER_DATA.
             * @implements ICROSS_S_SEND_PLAYER_DATA
             * @constructor
             * @param {com.message.ICROSS_S_SEND_PLAYER_DATA=} [properties] Properties to set
             */
            function CROSS_S_SEND_PLAYER_DATA(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_SEND_PLAYER_DATA serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_S_SEND_PLAYER_DATA
             * @instance
             */
            CROSS_S_SEND_PLAYER_DATA.prototype.serverId = 0;

            /**
             * CROSS_S_SEND_PLAYER_DATA updateNum.
             * @member {number} updateNum
             * @memberof com.message.CROSS_S_SEND_PLAYER_DATA
             * @instance
             */
            CROSS_S_SEND_PLAYER_DATA.prototype.updateNum = 0;

            /**
             * Encodes the specified CROSS_S_SEND_PLAYER_DATA message. Does not implicitly {@link com.message.CROSS_S_SEND_PLAYER_DATA.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_SEND_PLAYER_DATA
             * @static
             * @param {com.message.ICROSS_S_SEND_PLAYER_DATA} message CROSS_S_SEND_PLAYER_DATA message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_SEND_PLAYER_DATA.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.updateNum != null && message.hasOwnProperty("updateNum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.updateNum);
                return writer;
            };

            /**
             * Decodes a CROSS_S_SEND_PLAYER_DATA message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_SEND_PLAYER_DATA
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_SEND_PLAYER_DATA} CROSS_S_SEND_PLAYER_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_SEND_PLAYER_DATA.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_SEND_PLAYER_DATA();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.updateNum = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_SEND_PLAYER_DATA;
        })();

        message.CROSS_PLAYER_DATA = (function() {

            /**
             * Properties of a CROSS_PLAYER_DATA.
             * @memberof com.message
             * @interface ICROSS_PLAYER_DATA
             * @property {number|Long|null} [playerId] CROSS_PLAYER_DATA playerId
             * @property {number|null} [playerLevel] CROSS_PLAYER_DATA playerLevel
             * @property {string|null} [nickName] CROSS_PLAYER_DATA nickName
             * @property {number|Long|null} [fightValue] CROSS_PLAYER_DATA fightValue
             */

            /**
             * Constructs a new CROSS_PLAYER_DATA.
             * @memberof com.message
             * @classdesc Represents a CROSS_PLAYER_DATA.
             * @implements ICROSS_PLAYER_DATA
             * @constructor
             * @param {com.message.ICROSS_PLAYER_DATA=} [properties] Properties to set
             */
            function CROSS_PLAYER_DATA(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_PLAYER_DATA playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_PLAYER_DATA
             * @instance
             */
            CROSS_PLAYER_DATA.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_PLAYER_DATA playerLevel.
             * @member {number} playerLevel
             * @memberof com.message.CROSS_PLAYER_DATA
             * @instance
             */
            CROSS_PLAYER_DATA.prototype.playerLevel = 0;

            /**
             * CROSS_PLAYER_DATA nickName.
             * @member {string} nickName
             * @memberof com.message.CROSS_PLAYER_DATA
             * @instance
             */
            CROSS_PLAYER_DATA.prototype.nickName = "";

            /**
             * CROSS_PLAYER_DATA fightValue.
             * @member {number|Long} fightValue
             * @memberof com.message.CROSS_PLAYER_DATA
             * @instance
             */
            CROSS_PLAYER_DATA.prototype.fightValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified CROSS_PLAYER_DATA message. Does not implicitly {@link com.message.CROSS_PLAYER_DATA.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_PLAYER_DATA
             * @static
             * @param {com.message.ICROSS_PLAYER_DATA} message CROSS_PLAYER_DATA message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_PLAYER_DATA.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.playerLevel != null && message.hasOwnProperty("playerLevel"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerLevel);
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
                if (message.fightValue != null && message.hasOwnProperty("fightValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fightValue);
                return writer;
            };

            /**
             * Decodes a CROSS_PLAYER_DATA message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_PLAYER_DATA
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_PLAYER_DATA} CROSS_PLAYER_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_PLAYER_DATA.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_PLAYER_DATA();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.playerLevel = reader.int32();
                        break;
                    case 3:
                        message.nickName = reader.string();
                        break;
                    case 4:
                        message.fightValue = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_PLAYER_DATA;
        })();

        message.CROSS_C_GET_PLAYER_BATTLE_INFO = (function() {

            /**
             * Properties of a CROSS_C_GET_PLAYER_BATTLE_INFO.
             * @memberof com.message
             * @interface ICROSS_C_GET_PLAYER_BATTLE_INFO
             * @property {number|null} [serverId] CROSS_C_GET_PLAYER_BATTLE_INFO serverId
             * @property {number|Long|null} [playerId] CROSS_C_GET_PLAYER_BATTLE_INFO playerId
             * @property {number|null} [targetServerId] CROSS_C_GET_PLAYER_BATTLE_INFO targetServerId
             * @property {number|Long|null} [targetPlayerId] CROSS_C_GET_PLAYER_BATTLE_INFO targetPlayerId
             */

            /**
             * Constructs a new CROSS_C_GET_PLAYER_BATTLE_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_GET_PLAYER_BATTLE_INFO.
             * @implements ICROSS_C_GET_PLAYER_BATTLE_INFO
             * @constructor
             * @param {com.message.ICROSS_C_GET_PLAYER_BATTLE_INFO=} [properties] Properties to set
             */
            function CROSS_C_GET_PLAYER_BATTLE_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_GET_PLAYER_BATTLE_INFO serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_C_GET_PLAYER_BATTLE_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_BATTLE_INFO.prototype.serverId = 0;

            /**
             * CROSS_C_GET_PLAYER_BATTLE_INFO playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_C_GET_PLAYER_BATTLE_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_BATTLE_INFO.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_C_GET_PLAYER_BATTLE_INFO targetServerId.
             * @member {number} targetServerId
             * @memberof com.message.CROSS_C_GET_PLAYER_BATTLE_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_BATTLE_INFO.prototype.targetServerId = 0;

            /**
             * CROSS_C_GET_PLAYER_BATTLE_INFO targetPlayerId.
             * @member {number|Long} targetPlayerId
             * @memberof com.message.CROSS_C_GET_PLAYER_BATTLE_INFO
             * @instance
             */
            CROSS_C_GET_PLAYER_BATTLE_INFO.prototype.targetPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified CROSS_C_GET_PLAYER_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_C_GET_PLAYER_BATTLE_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_GET_PLAYER_BATTLE_INFO
             * @static
             * @param {com.message.ICROSS_C_GET_PLAYER_BATTLE_INFO} message CROSS_C_GET_PLAYER_BATTLE_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_GET_PLAYER_BATTLE_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                if (message.targetServerId != null && message.hasOwnProperty("targetServerId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.targetServerId);
                if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.targetPlayerId);
                return writer;
            };

            /**
             * Decodes a CROSS_C_GET_PLAYER_BATTLE_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_GET_PLAYER_BATTLE_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_GET_PLAYER_BATTLE_INFO} CROSS_C_GET_PLAYER_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_GET_PLAYER_BATTLE_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_GET_PLAYER_BATTLE_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.playerId = reader.int64();
                        break;
                    case 3:
                        message.targetServerId = reader.int32();
                        break;
                    case 4:
                        message.targetPlayerId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_GET_PLAYER_BATTLE_INFO;
        })();

        message.CROSS_S_GET_PLAYER_BATTLE_INFO = (function() {

            /**
             * Properties of a CROSS_S_GET_PLAYER_BATTLE_INFO.
             * @memberof com.message
             * @interface ICROSS_S_GET_PLAYER_BATTLE_INFO
             * @property {number|null} [serverId] CROSS_S_GET_PLAYER_BATTLE_INFO serverId
             * @property {number|Long|null} [playerId] CROSS_S_GET_PLAYER_BATTLE_INFO playerId
             */

            /**
             * Constructs a new CROSS_S_GET_PLAYER_BATTLE_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_GET_PLAYER_BATTLE_INFO.
             * @implements ICROSS_S_GET_PLAYER_BATTLE_INFO
             * @constructor
             * @param {com.message.ICROSS_S_GET_PLAYER_BATTLE_INFO=} [properties] Properties to set
             */
            function CROSS_S_GET_PLAYER_BATTLE_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_GET_PLAYER_BATTLE_INFO serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_S_GET_PLAYER_BATTLE_INFO
             * @instance
             */
            CROSS_S_GET_PLAYER_BATTLE_INFO.prototype.serverId = 0;

            /**
             * CROSS_S_GET_PLAYER_BATTLE_INFO playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_S_GET_PLAYER_BATTLE_INFO
             * @instance
             */
            CROSS_S_GET_PLAYER_BATTLE_INFO.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified CROSS_S_GET_PLAYER_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_S_GET_PLAYER_BATTLE_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_GET_PLAYER_BATTLE_INFO
             * @static
             * @param {com.message.ICROSS_S_GET_PLAYER_BATTLE_INFO} message CROSS_S_GET_PLAYER_BATTLE_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_GET_PLAYER_BATTLE_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                return writer;
            };

            /**
             * Decodes a CROSS_S_GET_PLAYER_BATTLE_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_GET_PLAYER_BATTLE_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_GET_PLAYER_BATTLE_INFO} CROSS_S_GET_PLAYER_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_GET_PLAYER_BATTLE_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_GET_PLAYER_BATTLE_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.playerId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_GET_PLAYER_BATTLE_INFO;
        })();

        message.CROSS_C_GET_PLAYER_ABI_HELL = (function() {

            /**
             * Properties of a CROSS_C_GET_PLAYER_ABI_HELL.
             * @memberof com.message
             * @interface ICROSS_C_GET_PLAYER_ABI_HELL
             * @property {number|null} [serverId] CROSS_C_GET_PLAYER_ABI_HELL serverId
             * @property {number|Long|null} [playerId] CROSS_C_GET_PLAYER_ABI_HELL playerId
             * @property {number|null} [playerLevel] CROSS_C_GET_PLAYER_ABI_HELL playerLevel
             */

            /**
             * Constructs a new CROSS_C_GET_PLAYER_ABI_HELL.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_GET_PLAYER_ABI_HELL.
             * @implements ICROSS_C_GET_PLAYER_ABI_HELL
             * @constructor
             * @param {com.message.ICROSS_C_GET_PLAYER_ABI_HELL=} [properties] Properties to set
             */
            function CROSS_C_GET_PLAYER_ABI_HELL(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_GET_PLAYER_ABI_HELL serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_C_GET_PLAYER_ABI_HELL
             * @instance
             */
            CROSS_C_GET_PLAYER_ABI_HELL.prototype.serverId = 0;

            /**
             * CROSS_C_GET_PLAYER_ABI_HELL playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_C_GET_PLAYER_ABI_HELL
             * @instance
             */
            CROSS_C_GET_PLAYER_ABI_HELL.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_C_GET_PLAYER_ABI_HELL playerLevel.
             * @member {number} playerLevel
             * @memberof com.message.CROSS_C_GET_PLAYER_ABI_HELL
             * @instance
             */
            CROSS_C_GET_PLAYER_ABI_HELL.prototype.playerLevel = 0;

            /**
             * Encodes the specified CROSS_C_GET_PLAYER_ABI_HELL message. Does not implicitly {@link com.message.CROSS_C_GET_PLAYER_ABI_HELL.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_GET_PLAYER_ABI_HELL
             * @static
             * @param {com.message.ICROSS_C_GET_PLAYER_ABI_HELL} message CROSS_C_GET_PLAYER_ABI_HELL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_GET_PLAYER_ABI_HELL.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                if (message.playerLevel != null && message.hasOwnProperty("playerLevel"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerLevel);
                return writer;
            };

            /**
             * Decodes a CROSS_C_GET_PLAYER_ABI_HELL message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_GET_PLAYER_ABI_HELL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_GET_PLAYER_ABI_HELL} CROSS_C_GET_PLAYER_ABI_HELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_GET_PLAYER_ABI_HELL.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_GET_PLAYER_ABI_HELL();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.playerId = reader.int64();
                        break;
                    case 3:
                        message.playerLevel = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_GET_PLAYER_ABI_HELL;
        })();

        message.CROSS_S_GET_PLAYER_ABI_HELL = (function() {

            /**
             * Properties of a CROSS_S_GET_PLAYER_ABI_HELL.
             * @memberof com.message
             * @interface ICROSS_S_GET_PLAYER_ABI_HELL
             * @property {number|null} [serverId] CROSS_S_GET_PLAYER_ABI_HELL serverId
             * @property {number|Long|null} [playerId] CROSS_S_GET_PLAYER_ABI_HELL playerId
             * @property {string|null} [targetDatas] CROSS_S_GET_PLAYER_ABI_HELL targetDatas
             */

            /**
             * Constructs a new CROSS_S_GET_PLAYER_ABI_HELL.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_GET_PLAYER_ABI_HELL.
             * @implements ICROSS_S_GET_PLAYER_ABI_HELL
             * @constructor
             * @param {com.message.ICROSS_S_GET_PLAYER_ABI_HELL=} [properties] Properties to set
             */
            function CROSS_S_GET_PLAYER_ABI_HELL(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_GET_PLAYER_ABI_HELL serverId.
             * @member {number} serverId
             * @memberof com.message.CROSS_S_GET_PLAYER_ABI_HELL
             * @instance
             */
            CROSS_S_GET_PLAYER_ABI_HELL.prototype.serverId = 0;

            /**
             * CROSS_S_GET_PLAYER_ABI_HELL playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_S_GET_PLAYER_ABI_HELL
             * @instance
             */
            CROSS_S_GET_PLAYER_ABI_HELL.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_S_GET_PLAYER_ABI_HELL targetDatas.
             * @member {string} targetDatas
             * @memberof com.message.CROSS_S_GET_PLAYER_ABI_HELL
             * @instance
             */
            CROSS_S_GET_PLAYER_ABI_HELL.prototype.targetDatas = "";

            /**
             * Encodes the specified CROSS_S_GET_PLAYER_ABI_HELL message. Does not implicitly {@link com.message.CROSS_S_GET_PLAYER_ABI_HELL.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_GET_PLAYER_ABI_HELL
             * @static
             * @param {com.message.ICROSS_S_GET_PLAYER_ABI_HELL} message CROSS_S_GET_PLAYER_ABI_HELL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_GET_PLAYER_ABI_HELL.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                if (message.targetDatas != null && message.hasOwnProperty("targetDatas"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetDatas);
                return writer;
            };

            /**
             * Decodes a CROSS_S_GET_PLAYER_ABI_HELL message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_GET_PLAYER_ABI_HELL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_GET_PLAYER_ABI_HELL} CROSS_S_GET_PLAYER_ABI_HELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_GET_PLAYER_ABI_HELL.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_GET_PLAYER_ABI_HELL();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.int32();
                        break;
                    case 2:
                        message.playerId = reader.int64();
                        break;
                    case 3:
                        message.targetDatas = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_GET_PLAYER_ABI_HELL;
        })();

        message.CROSS_C_PLAYER_SYS_BATTLE_INFO = (function() {

            /**
             * Properties of a CROSS_C_PLAYER_SYS_BATTLE_INFO.
             * @memberof com.message
             * @interface ICROSS_C_PLAYER_SYS_BATTLE_INFO
             * @property {number|Long|null} [playerId] CROSS_C_PLAYER_SYS_BATTLE_INFO playerId
             * @property {string|null} [recordId] CROSS_C_PLAYER_SYS_BATTLE_INFO recordId
             * @property {number|null} [paramType] CROSS_C_PLAYER_SYS_BATTLE_INFO paramType
             */

            /**
             * Constructs a new CROSS_C_PLAYER_SYS_BATTLE_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_PLAYER_SYS_BATTLE_INFO.
             * @implements ICROSS_C_PLAYER_SYS_BATTLE_INFO
             * @constructor
             * @param {com.message.ICROSS_C_PLAYER_SYS_BATTLE_INFO=} [properties] Properties to set
             */
            function CROSS_C_PLAYER_SYS_BATTLE_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_PLAYER_SYS_BATTLE_INFO playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO
             * @instance
             */
            CROSS_C_PLAYER_SYS_BATTLE_INFO.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_C_PLAYER_SYS_BATTLE_INFO recordId.
             * @member {string} recordId
             * @memberof com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO
             * @instance
             */
            CROSS_C_PLAYER_SYS_BATTLE_INFO.prototype.recordId = "";

            /**
             * CROSS_C_PLAYER_SYS_BATTLE_INFO paramType.
             * @member {number} paramType
             * @memberof com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO
             * @instance
             */
            CROSS_C_PLAYER_SYS_BATTLE_INFO.prototype.paramType = 0;

            /**
             * Encodes the specified CROSS_C_PLAYER_SYS_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO
             * @static
             * @param {com.message.ICROSS_C_PLAYER_SYS_BATTLE_INFO} message CROSS_C_PLAYER_SYS_BATTLE_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_PLAYER_SYS_BATTLE_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.recordId != null && message.hasOwnProperty("recordId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.recordId);
                if (message.paramType != null && message.hasOwnProperty("paramType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.paramType);
                return writer;
            };

            /**
             * Decodes a CROSS_C_PLAYER_SYS_BATTLE_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO} CROSS_C_PLAYER_SYS_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_PLAYER_SYS_BATTLE_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.recordId = reader.string();
                        break;
                    case 3:
                        message.paramType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_PLAYER_SYS_BATTLE_INFO;
        })();

        message.CROSS_S_PLAYER_SYS_BATTLE_INFO = (function() {

            /**
             * Properties of a CROSS_S_PLAYER_SYS_BATTLE_INFO.
             * @memberof com.message
             * @interface ICROSS_S_PLAYER_SYS_BATTLE_INFO
             * @property {number|Long|null} [playerId] CROSS_S_PLAYER_SYS_BATTLE_INFO playerId
             * @property {string|null} [recordId] CROSS_S_PLAYER_SYS_BATTLE_INFO recordId
             * @property {number|null} [paramType] CROSS_S_PLAYER_SYS_BATTLE_INFO paramType
             */

            /**
             * Constructs a new CROSS_S_PLAYER_SYS_BATTLE_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_PLAYER_SYS_BATTLE_INFO.
             * @implements ICROSS_S_PLAYER_SYS_BATTLE_INFO
             * @constructor
             * @param {com.message.ICROSS_S_PLAYER_SYS_BATTLE_INFO=} [properties] Properties to set
             */
            function CROSS_S_PLAYER_SYS_BATTLE_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_PLAYER_SYS_BATTLE_INFO playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO
             * @instance
             */
            CROSS_S_PLAYER_SYS_BATTLE_INFO.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_S_PLAYER_SYS_BATTLE_INFO recordId.
             * @member {string} recordId
             * @memberof com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO
             * @instance
             */
            CROSS_S_PLAYER_SYS_BATTLE_INFO.prototype.recordId = "";

            /**
             * CROSS_S_PLAYER_SYS_BATTLE_INFO paramType.
             * @member {number} paramType
             * @memberof com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO
             * @instance
             */
            CROSS_S_PLAYER_SYS_BATTLE_INFO.prototype.paramType = 0;

            /**
             * Encodes the specified CROSS_S_PLAYER_SYS_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO
             * @static
             * @param {com.message.ICROSS_S_PLAYER_SYS_BATTLE_INFO} message CROSS_S_PLAYER_SYS_BATTLE_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_PLAYER_SYS_BATTLE_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.recordId != null && message.hasOwnProperty("recordId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.recordId);
                if (message.paramType != null && message.hasOwnProperty("paramType"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.paramType);
                return writer;
            };

            /**
             * Decodes a CROSS_S_PLAYER_SYS_BATTLE_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO} CROSS_S_PLAYER_SYS_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_PLAYER_SYS_BATTLE_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.recordId = reader.string();
                        break;
                    case 4:
                        message.paramType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_PLAYER_SYS_BATTLE_INFO;
        })();

        message.CROSS_C_PLAYER_QUERY_INFO = (function() {

            /**
             * Properties of a CROSS_C_PLAYER_QUERY_INFO.
             * @memberof com.message
             * @interface ICROSS_C_PLAYER_QUERY_INFO
             * @property {Array.<number|Long>|null} [playerIds] CROSS_C_PLAYER_QUERY_INFO playerIds
             */

            /**
             * Constructs a new CROSS_C_PLAYER_QUERY_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_C_PLAYER_QUERY_INFO.
             * @implements ICROSS_C_PLAYER_QUERY_INFO
             * @constructor
             * @param {com.message.ICROSS_C_PLAYER_QUERY_INFO=} [properties] Properties to set
             */
            function CROSS_C_PLAYER_QUERY_INFO(properties) {
                this.playerIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_C_PLAYER_QUERY_INFO playerIds.
             * @member {Array.<number|Long>} playerIds
             * @memberof com.message.CROSS_C_PLAYER_QUERY_INFO
             * @instance
             */
            CROSS_C_PLAYER_QUERY_INFO.prototype.playerIds = $util.emptyArray;

            /**
             * Encodes the specified CROSS_C_PLAYER_QUERY_INFO message. Does not implicitly {@link com.message.CROSS_C_PLAYER_QUERY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_C_PLAYER_QUERY_INFO
             * @static
             * @param {com.message.ICROSS_C_PLAYER_QUERY_INFO} message CROSS_C_PLAYER_QUERY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_C_PLAYER_QUERY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerIds != null && message.playerIds.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.playerIds.length; ++i)
                        writer.int64(message.playerIds[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Decodes a CROSS_C_PLAYER_QUERY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_C_PLAYER_QUERY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_C_PLAYER_QUERY_INFO} CROSS_C_PLAYER_QUERY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_C_PLAYER_QUERY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_C_PLAYER_QUERY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.playerIds && message.playerIds.length))
                            message.playerIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.playerIds.push(reader.int64());
                        } else
                            message.playerIds.push(reader.int64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_C_PLAYER_QUERY_INFO;
        })();

        message.CROSS_S_PLAYER_QUERY_INFO = (function() {

            /**
             * Properties of a CROSS_S_PLAYER_QUERY_INFO.
             * @memberof com.message
             * @interface ICROSS_S_PLAYER_QUERY_INFO
             * @property {Array.<number|Long>|null} [playerIds] CROSS_S_PLAYER_QUERY_INFO playerIds
             */

            /**
             * Constructs a new CROSS_S_PLAYER_QUERY_INFO.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_PLAYER_QUERY_INFO.
             * @implements ICROSS_S_PLAYER_QUERY_INFO
             * @constructor
             * @param {com.message.ICROSS_S_PLAYER_QUERY_INFO=} [properties] Properties to set
             */
            function CROSS_S_PLAYER_QUERY_INFO(properties) {
                this.playerIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_PLAYER_QUERY_INFO playerIds.
             * @member {Array.<number|Long>} playerIds
             * @memberof com.message.CROSS_S_PLAYER_QUERY_INFO
             * @instance
             */
            CROSS_S_PLAYER_QUERY_INFO.prototype.playerIds = $util.emptyArray;

            /**
             * Encodes the specified CROSS_S_PLAYER_QUERY_INFO message. Does not implicitly {@link com.message.CROSS_S_PLAYER_QUERY_INFO.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_PLAYER_QUERY_INFO
             * @static
             * @param {com.message.ICROSS_S_PLAYER_QUERY_INFO} message CROSS_S_PLAYER_QUERY_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_PLAYER_QUERY_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerIds != null && message.playerIds.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.playerIds.length; ++i)
                        writer.int64(message.playerIds[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Decodes a CROSS_S_PLAYER_QUERY_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_PLAYER_QUERY_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_PLAYER_QUERY_INFO} CROSS_S_PLAYER_QUERY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_PLAYER_QUERY_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_PLAYER_QUERY_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.playerIds && message.playerIds.length))
                            message.playerIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.playerIds.push(reader.int64());
                        } else
                            message.playerIds.push(reader.int64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_PLAYER_QUERY_INFO;
        })();

        message.C_PLAYER_BUY_TIMES = (function() {

            /**
             * Properties of a C_PLAYER_BUY_TIMES.
             * @memberof com.message
             * @interface IC_PLAYER_BUY_TIMES
             * @property {number|null} [buyType] C_PLAYER_BUY_TIMES buyType
             */

            /**
             * Constructs a new C_PLAYER_BUY_TIMES.
             * @memberof com.message
             * @classdesc Represents a C_PLAYER_BUY_TIMES.
             * @implements IC_PLAYER_BUY_TIMES
             * @constructor
             * @param {com.message.IC_PLAYER_BUY_TIMES=} [properties] Properties to set
             */
            function C_PLAYER_BUY_TIMES(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_PLAYER_BUY_TIMES buyType.
             * @member {number} buyType
             * @memberof com.message.C_PLAYER_BUY_TIMES
             * @instance
             */
            C_PLAYER_BUY_TIMES.prototype.buyType = 0;

            /**
             * Encodes the specified C_PLAYER_BUY_TIMES message. Does not implicitly {@link com.message.C_PLAYER_BUY_TIMES.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_PLAYER_BUY_TIMES
             * @static
             * @param {com.message.IC_PLAYER_BUY_TIMES} message C_PLAYER_BUY_TIMES message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_PLAYER_BUY_TIMES.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyType != null && message.hasOwnProperty("buyType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.buyType);
                return writer;
            };

            /**
             * Decodes a C_PLAYER_BUY_TIMES message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_PLAYER_BUY_TIMES
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_PLAYER_BUY_TIMES} C_PLAYER_BUY_TIMES
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_PLAYER_BUY_TIMES.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_PLAYER_BUY_TIMES();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_PLAYER_BUY_TIMES;
        })();

        message.S_PLAYER_BUY_TIMES = (function() {

            /**
             * Properties of a S_PLAYER_BUY_TIMES.
             * @memberof com.message
             * @interface IS_PLAYER_BUY_TIMES
             * @property {number|null} [buyType] S_PLAYER_BUY_TIMES buyType
             * @property {number|null} [buyTimes] S_PLAYER_BUY_TIMES buyTimes
             */

            /**
             * Constructs a new S_PLAYER_BUY_TIMES.
             * @memberof com.message
             * @classdesc Represents a S_PLAYER_BUY_TIMES.
             * @implements IS_PLAYER_BUY_TIMES
             * @constructor
             * @param {com.message.IS_PLAYER_BUY_TIMES=} [properties] Properties to set
             */
            function S_PLAYER_BUY_TIMES(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_PLAYER_BUY_TIMES buyType.
             * @member {number} buyType
             * @memberof com.message.S_PLAYER_BUY_TIMES
             * @instance
             */
            S_PLAYER_BUY_TIMES.prototype.buyType = 0;

            /**
             * S_PLAYER_BUY_TIMES buyTimes.
             * @member {number} buyTimes
             * @memberof com.message.S_PLAYER_BUY_TIMES
             * @instance
             */
            S_PLAYER_BUY_TIMES.prototype.buyTimes = 0;

            /**
             * Encodes the specified S_PLAYER_BUY_TIMES message. Does not implicitly {@link com.message.S_PLAYER_BUY_TIMES.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_PLAYER_BUY_TIMES
             * @static
             * @param {com.message.IS_PLAYER_BUY_TIMES} message S_PLAYER_BUY_TIMES message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_PLAYER_BUY_TIMES.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buyType != null && message.hasOwnProperty("buyType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.buyType);
                if (message.buyTimes != null && message.hasOwnProperty("buyTimes"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.buyTimes);
                return writer;
            };

            /**
             * Decodes a S_PLAYER_BUY_TIMES message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_PLAYER_BUY_TIMES
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_PLAYER_BUY_TIMES} S_PLAYER_BUY_TIMES
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_PLAYER_BUY_TIMES.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_PLAYER_BUY_TIMES();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buyType = reader.int32();
                        break;
                    case 2:
                        message.buyTimes = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_PLAYER_BUY_TIMES;
        })();

        return message;
    })();

    return com;
})();