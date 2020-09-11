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
             * @property {number|null} [money] PlayerPropertyMsg money
             * @property {number|null} [diamond] PlayerPropertyMsg diamond
             * @property {number|null} [frozenDiamond] PlayerPropertyMsg frozenDiamond
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
             * PlayerPropertyMsg frozenDiamond.
             * @member {number} frozenDiamond
             * @memberof com.message.PlayerPropertyMsg
             * @instance
             */
            PlayerPropertyMsg.prototype.frozenDiamond = 0;

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
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.money);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.diamond);
                if (message.frozenDiamond != null && message.hasOwnProperty("frozenDiamond"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.frozenDiamond);
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
                        message.money = reader.double();
                        break;
                    case 4:
                        message.diamond = reader.double();
                        break;
                    case 5:
                        message.frozenDiamond = reader.double();
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

        message.BuyGoodMsg = (function() {

            /**
             * Properties of a BuyGoodMsg.
             * @memberof com.message
             * @interface IBuyGoodMsg
             * @property {number|Long|null} [buyGoodMsgId] BuyGoodMsg buyGoodMsgId
             * @property {number|Long|null} [playerId] BuyGoodMsg playerId
             * @property {string|null} [username] BuyGoodMsg username
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
             * BuyGoodMsg username.
             * @member {string} username
             * @memberof com.message.BuyGoodMsg
             * @instance
             */
            BuyGoodMsg.prototype.username = "";

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
                if (message.username != null && message.hasOwnProperty("username"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
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
                        message.username = reader.string();
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
             * @property {Array.<com.message.IHistoryPriceMsg>|null} [historyPriceMsgList] S_GET_OCT_MARKET_INFO historyPriceMsgList
             * @property {Array.<com.message.IBuyGoodMsg>|null} [buyGoodMsgList] S_GET_OCT_MARKET_INFO buyGoodMsgList
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
                this.buyGoodMsgList = [];
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
             * S_GET_OCT_MARKET_INFO historyPriceMsgList.
             * @member {Array.<com.message.IHistoryPriceMsg>} historyPriceMsgList
             * @memberof com.message.S_GET_OCT_MARKET_INFO
             * @instance
             */
            S_GET_OCT_MARKET_INFO.prototype.historyPriceMsgList = $util.emptyArray;

            /**
             * S_GET_OCT_MARKET_INFO buyGoodMsgList.
             * @member {Array.<com.message.IBuyGoodMsg>} buyGoodMsgList
             * @memberof com.message.S_GET_OCT_MARKET_INFO
             * @instance
             */
            S_GET_OCT_MARKET_INFO.prototype.buyGoodMsgList = $util.emptyArray;

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
                if (message.historyPriceMsgList != null && message.historyPriceMsgList.length)
                    for (var i = 0; i < message.historyPriceMsgList.length; ++i)
                        $root.com.message.HistoryPriceMsg.encode(message.historyPriceMsgList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.buyGoodMsgList != null && message.buyGoodMsgList.length)
                    for (var i = 0; i < message.buyGoodMsgList.length; ++i)
                        $root.com.message.BuyGoodMsg.encode(message.buyGoodMsgList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                    case 3:
                        if (!(message.historyPriceMsgList && message.historyPriceMsgList.length))
                            message.historyPriceMsgList = [];
                        message.historyPriceMsgList.push($root.com.message.HistoryPriceMsg.decode(reader, reader.uint32()));
                        break;
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

            return S_GET_OCT_MARKET_INFO;
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
             * @property {number} C_LOGIN_REGISTER=1005 C_LOGIN_REGISTER value
             * @property {number} C_USER_LOGOUT=1007 C_USER_LOGOUT value
             * @property {number} S_USER_LOGOUT=1008 S_USER_LOGOUT value
             * @property {number} C_USER_LOGIN_INIT_FINISH=1009 C_USER_LOGIN_INIT_FINISH value
             * @property {number} S_USER_LOGIN_INIT_FINISH=1010 S_USER_LOGIN_INIT_FINISH value
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
             * @property {number} FISH_MAX_LIMIT=1201 FISH_MAX_LIMIT value
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
                values[valuesById[1201] = "FISH_MAX_LIMIT"] = 1201;
                return values;
            })();

            return MsgEnum;
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

        /**
         * PropertyID enum.
         * @name com.message.PropertyID
         * @enum {string}
         * @property {number} LEVEL=0 LEVEL value
         * @property {number} MONEY=1 MONEY value
         * @property {number} DIAMOND=2 DIAMOND value
         */
        message.PropertyID = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LEVEL"] = 0;
            values[valuesById[1] = "MONEY"] = 1;
            values[valuesById[2] = "DIAMOND"] = 2;
            return values;
        })();

        return message;
    })();

    return com;
})();