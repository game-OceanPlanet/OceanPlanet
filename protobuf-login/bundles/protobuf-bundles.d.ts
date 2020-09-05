type Long = protobuf.Long;

/** Namespace com. */
declare namespace com {

    /** Namespace message. */
    namespace message {

        /** Properties of an IntIntMapMsg. */
        interface IIntIntMapMsg {

            /** IntIntMapMsg key */
            key?: (number|null);

            /** IntIntMapMsg value */
            value?: (number|null);
        }

        /** Represents an IntIntMapMsg. */
        class IntIntMapMsg implements IIntIntMapMsg {

            /**
             * Constructs a new IntIntMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IIntIntMapMsg);

            /** IntIntMapMsg key. */
            public key: number;

            /** IntIntMapMsg value. */
            public value: number;

            /**
             * Encodes the specified IntIntMapMsg message. Does not implicitly {@link com.message.IntIntMapMsg.verify|verify} messages.
             * @param message IntIntMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IIntIntMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an IntIntMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntIntMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.IntIntMapMsg;
        }

        /** Properties of a StringIntMapMsg. */
        interface IStringIntMapMsg {

            /** StringIntMapMsg key */
            key?: (string|null);

            /** StringIntMapMsg value */
            value?: (number|null);
        }

        /** Represents a StringIntMapMsg. */
        class StringIntMapMsg implements IStringIntMapMsg {

            /**
             * Constructs a new StringIntMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IStringIntMapMsg);

            /** StringIntMapMsg key. */
            public key: string;

            /** StringIntMapMsg value. */
            public value: number;

            /**
             * Encodes the specified StringIntMapMsg message. Does not implicitly {@link com.message.StringIntMapMsg.verify|verify} messages.
             * @param message StringIntMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IStringIntMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a StringIntMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringIntMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.StringIntMapMsg;
        }

        /** Properties of an IntLongMapMsg. */
        interface IIntLongMapMsg {

            /** IntLongMapMsg key */
            key?: (number|null);

            /** IntLongMapMsg value */
            value?: (number|Long|null);
        }

        /** Represents an IntLongMapMsg. */
        class IntLongMapMsg implements IIntLongMapMsg {

            /**
             * Constructs a new IntLongMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IIntLongMapMsg);

            /** IntLongMapMsg key. */
            public key: number;

            /** IntLongMapMsg value. */
            public value: (number|Long);

            /**
             * Encodes the specified IntLongMapMsg message. Does not implicitly {@link com.message.IntLongMapMsg.verify|verify} messages.
             * @param message IntLongMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IIntLongMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an IntLongMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntLongMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.IntLongMapMsg;
        }

        /** Properties of an IntFloatMapMsg. */
        interface IIntFloatMapMsg {

            /** IntFloatMapMsg key */
            key?: (number|null);

            /** IntFloatMapMsg value */
            value?: (number|null);
        }

        /** Represents an IntFloatMapMsg. */
        class IntFloatMapMsg implements IIntFloatMapMsg {

            /**
             * Constructs a new IntFloatMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IIntFloatMapMsg);

            /** IntFloatMapMsg key. */
            public key: number;

            /** IntFloatMapMsg value. */
            public value: number;

            /**
             * Encodes the specified IntFloatMapMsg message. Does not implicitly {@link com.message.IntFloatMapMsg.verify|verify} messages.
             * @param message IntFloatMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IIntFloatMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an IntFloatMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntFloatMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.IntFloatMapMsg;
        }

        /** Properties of an ItemMsg. */
        interface IItemMsg {

            /** ItemMsg itemId */
            itemId?: (number|null);

            /** ItemMsg num */
            num?: (number|null);
        }

        /** Represents an ItemMsg. */
        class ItemMsg implements IItemMsg {

            /**
             * Constructs a new ItemMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IItemMsg);

            /** ItemMsg itemId. */
            public itemId: number;

            /** ItemMsg num. */
            public num: number;

            /**
             * Encodes the specified ItemMsg message. Does not implicitly {@link com.message.ItemMsg.verify|verify} messages.
             * @param message ItemMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IItemMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ItemMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.ItemMsg;
        }

        /** Properties of an ItemListMsg. */
        interface IItemListMsg {

            /** ItemListMsg list */
            list?: (com.message.IItemMsg[]|null);
        }

        /** Represents an ItemListMsg. */
        class ItemListMsg implements IItemListMsg {

            /**
             * Constructs a new ItemListMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IItemListMsg);

            /** ItemListMsg list. */
            public list: com.message.IItemMsg[];

            /**
             * Encodes the specified ItemListMsg message. Does not implicitly {@link com.message.ItemListMsg.verify|verify} messages.
             * @param message ItemListMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ItemListMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemListMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.ItemListMsg;
        }

        /** Properties of a CROSS_C_SERVER_REGISTER. */
        interface ICROSS_C_SERVER_REGISTER {

            /** CROSS_C_SERVER_REGISTER serverId */
            serverId?: (number|null);

            /** CROSS_C_SERVER_REGISTER platName */
            platName?: (string|null);

            /** CROSS_C_SERVER_REGISTER mergeServerIds */
            mergeServerIds?: (string|null);
        }

        /** Represents a CROSS_C_SERVER_REGISTER. */
        class CROSS_C_SERVER_REGISTER implements ICROSS_C_SERVER_REGISTER {

            /**
             * Constructs a new CROSS_C_SERVER_REGISTER.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_SERVER_REGISTER);

            /** CROSS_C_SERVER_REGISTER serverId. */
            public serverId: number;

            /** CROSS_C_SERVER_REGISTER platName. */
            public platName: string;

            /** CROSS_C_SERVER_REGISTER mergeServerIds. */
            public mergeServerIds: string;

            /**
             * Encodes the specified CROSS_C_SERVER_REGISTER message. Does not implicitly {@link com.message.CROSS_C_SERVER_REGISTER.verify|verify} messages.
             * @param message CROSS_C_SERVER_REGISTER message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_SERVER_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_SERVER_REGISTER message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_SERVER_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_SERVER_REGISTER;
        }

        /** Properties of a CROSS_S_SERVER_REGISTER. */
        interface ICROSS_S_SERVER_REGISTER {

            /** CROSS_S_SERVER_REGISTER serverId */
            serverId?: (number|null);
        }

        /** Represents a CROSS_S_SERVER_REGISTER. */
        class CROSS_S_SERVER_REGISTER implements ICROSS_S_SERVER_REGISTER {

            /**
             * Constructs a new CROSS_S_SERVER_REGISTER.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_SERVER_REGISTER);

            /** CROSS_S_SERVER_REGISTER serverId. */
            public serverId: number;

            /**
             * Encodes the specified CROSS_S_SERVER_REGISTER message. Does not implicitly {@link com.message.CROSS_S_SERVER_REGISTER.verify|verify} messages.
             * @param message CROSS_S_SERVER_REGISTER message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_SERVER_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_SERVER_REGISTER message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_SERVER_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_SERVER_REGISTER;
        }

        /** Properties of a CROSS_C_HEART_BEAT. */
        interface ICROSS_C_HEART_BEAT {
        }

        /** Represents a CROSS_C_HEART_BEAT. */
        class CROSS_C_HEART_BEAT implements ICROSS_C_HEART_BEAT {

            /**
             * Constructs a new CROSS_C_HEART_BEAT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_HEART_BEAT);

            /**
             * Encodes the specified CROSS_C_HEART_BEAT message. Does not implicitly {@link com.message.CROSS_C_HEART_BEAT.verify|verify} messages.
             * @param message CROSS_C_HEART_BEAT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_HEART_BEAT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_HEART_BEAT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_HEART_BEAT;
        }

        /** Properties of a CROSS_S_HEART_BEAT. */
        interface ICROSS_S_HEART_BEAT {
        }

        /** Represents a CROSS_S_HEART_BEAT. */
        class CROSS_S_HEART_BEAT implements ICROSS_S_HEART_BEAT {

            /**
             * Constructs a new CROSS_S_HEART_BEAT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_HEART_BEAT);

            /**
             * Encodes the specified CROSS_S_HEART_BEAT message. Does not implicitly {@link com.message.CROSS_S_HEART_BEAT.verify|verify} messages.
             * @param message CROSS_S_HEART_BEAT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_HEART_BEAT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_HEART_BEAT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_HEART_BEAT;
        }

        /** Properties of a CROSS_C_SERVER_PUSH. */
        interface ICROSS_C_SERVER_PUSH {

            /** CROSS_C_SERVER_PUSH serverId */
            serverId?: (number|null);
        }

        /** Represents a CROSS_C_SERVER_PUSH. */
        class CROSS_C_SERVER_PUSH implements ICROSS_C_SERVER_PUSH {

            /**
             * Constructs a new CROSS_C_SERVER_PUSH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_SERVER_PUSH);

            /** CROSS_C_SERVER_PUSH serverId. */
            public serverId: number;

            /**
             * Encodes the specified CROSS_C_SERVER_PUSH message. Does not implicitly {@link com.message.CROSS_C_SERVER_PUSH.verify|verify} messages.
             * @param message CROSS_C_SERVER_PUSH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_SERVER_PUSH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_SERVER_PUSH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_SERVER_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_SERVER_PUSH;
        }

        /** Properties of a CROSS_S_SERVER_PUSH. */
        interface ICROSS_S_SERVER_PUSH {

            /** CROSS_S_SERVER_PUSH serverId */
            serverId?: (number|null);

            /** CROSS_S_SERVER_PUSH sendRankData */
            sendRankData?: (number|null);
        }

        /** Represents a CROSS_S_SERVER_PUSH. */
        class CROSS_S_SERVER_PUSH implements ICROSS_S_SERVER_PUSH {

            /**
             * Constructs a new CROSS_S_SERVER_PUSH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_SERVER_PUSH);

            /** CROSS_S_SERVER_PUSH serverId. */
            public serverId: number;

            /** CROSS_S_SERVER_PUSH sendRankData. */
            public sendRankData: number;

            /**
             * Encodes the specified CROSS_S_SERVER_PUSH message. Does not implicitly {@link com.message.CROSS_S_SERVER_PUSH.verify|verify} messages.
             * @param message CROSS_S_SERVER_PUSH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_SERVER_PUSH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_SERVER_PUSH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_SERVER_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_SERVER_PUSH;
        }

        /** Properties of a CROSS_C_HTTP_DATA. */
        interface ICROSS_C_HTTP_DATA {

            /** CROSS_C_HTTP_DATA serverId */
            serverId?: (number|null);

            /** CROSS_C_HTTP_DATA platName */
            platName?: (string|null);

            /** CROSS_C_HTTP_DATA httpType */
            httpType?: (number|null);

            /** CROSS_C_HTTP_DATA httpData */
            httpData?: (string|null);
        }

        /** Represents a CROSS_C_HTTP_DATA. */
        class CROSS_C_HTTP_DATA implements ICROSS_C_HTTP_DATA {

            /**
             * Constructs a new CROSS_C_HTTP_DATA.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_HTTP_DATA);

            /** CROSS_C_HTTP_DATA serverId. */
            public serverId: number;

            /** CROSS_C_HTTP_DATA platName. */
            public platName: string;

            /** CROSS_C_HTTP_DATA httpType. */
            public httpType: number;

            /** CROSS_C_HTTP_DATA httpData. */
            public httpData: string;

            /**
             * Encodes the specified CROSS_C_HTTP_DATA message. Does not implicitly {@link com.message.CROSS_C_HTTP_DATA.verify|verify} messages.
             * @param message CROSS_C_HTTP_DATA message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_HTTP_DATA, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_HTTP_DATA message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_HTTP_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_HTTP_DATA;
        }

        /** Properties of a C_DEBUG_COMMON. */
        interface IC_DEBUG_COMMON {

            /** C_DEBUG_COMMON debugString */
            debugString?: (string|null);
        }

        /** Represents a C_DEBUG_COMMON. */
        class C_DEBUG_COMMON implements IC_DEBUG_COMMON {

            /**
             * Constructs a new C_DEBUG_COMMON.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_DEBUG_COMMON);

            /** C_DEBUG_COMMON debugString. */
            public debugString: string;

            /**
             * Encodes the specified C_DEBUG_COMMON message. Does not implicitly {@link com.message.C_DEBUG_COMMON.verify|verify} messages.
             * @param message C_DEBUG_COMMON message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_DEBUG_COMMON, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_DEBUG_COMMON message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_DEBUG_COMMON
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_DEBUG_COMMON;
        }

        /** Properties of a S_DEBUG_COMMON. */
        interface IS_DEBUG_COMMON {

            /** S_DEBUG_COMMON debugString */
            debugString?: (string|null);
        }

        /** Represents a S_DEBUG_COMMON. */
        class S_DEBUG_COMMON implements IS_DEBUG_COMMON {

            /**
             * Constructs a new S_DEBUG_COMMON.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_DEBUG_COMMON);

            /** S_DEBUG_COMMON debugString. */
            public debugString: string;

            /**
             * Encodes the specified S_DEBUG_COMMON message. Does not implicitly {@link com.message.S_DEBUG_COMMON.verify|verify} messages.
             * @param message S_DEBUG_COMMON message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_DEBUG_COMMON, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_DEBUG_COMMON message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_DEBUG_COMMON
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_DEBUG_COMMON;
        }

        /** Properties of a S_EXCEPTION_MSG. */
        interface IS_EXCEPTION_MSG {

            /** S_EXCEPTION_MSG code */
            code?: (number|null);
        }

        /** Represents a S_EXCEPTION_MSG. */
        class S_EXCEPTION_MSG implements IS_EXCEPTION_MSG {

            /**
             * Constructs a new S_EXCEPTION_MSG.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_EXCEPTION_MSG);

            /** S_EXCEPTION_MSG code. */
            public code: number;

            /**
             * Encodes the specified S_EXCEPTION_MSG message. Does not implicitly {@link com.message.S_EXCEPTION_MSG.verify|verify} messages.
             * @param message S_EXCEPTION_MSG message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_EXCEPTION_MSG, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_EXCEPTION_MSG message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_EXCEPTION_MSG;
        }

        /** Properties of a CROSS_S_EXCEPTION_MSG. */
        interface ICROSS_S_EXCEPTION_MSG {

            /** CROSS_S_EXCEPTION_MSG playerId */
            playerId?: (number|Long|null);

            /** CROSS_S_EXCEPTION_MSG code */
            code?: (number|null);
        }

        /** Represents a CROSS_S_EXCEPTION_MSG. */
        class CROSS_S_EXCEPTION_MSG implements ICROSS_S_EXCEPTION_MSG {

            /**
             * Constructs a new CROSS_S_EXCEPTION_MSG.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_EXCEPTION_MSG);

            /** CROSS_S_EXCEPTION_MSG playerId. */
            public playerId: (number|Long);

            /** CROSS_S_EXCEPTION_MSG code. */
            public code: number;

            /**
             * Encodes the specified CROSS_S_EXCEPTION_MSG message. Does not implicitly {@link com.message.CROSS_S_EXCEPTION_MSG.verify|verify} messages.
             * @param message CROSS_S_EXCEPTION_MSG message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_EXCEPTION_MSG, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_EXCEPTION_MSG message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_EXCEPTION_MSG;
        }

        /** Properties of a C_USER_LOGIN. */
        interface IC_USER_LOGIN {

            /** C_USER_LOGIN username */
            username?: (number|Long|null);

            /** C_USER_LOGIN gameSite */
            gameSite?: (string|null);

            /** C_USER_LOGIN sparam */
            sparam?: (string|null);
        }

        /** Represents a C_USER_LOGIN. */
        class C_USER_LOGIN implements IC_USER_LOGIN {

            /**
             * Constructs a new C_USER_LOGIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USER_LOGIN);

            /** C_USER_LOGIN username. */
            public username: (number|Long);

            /** C_USER_LOGIN gameSite. */
            public gameSite: string;

            /** C_USER_LOGIN sparam. */
            public sparam: string;

            /**
             * Encodes the specified C_USER_LOGIN message. Does not implicitly {@link com.message.C_USER_LOGIN.verify|verify} messages.
             * @param message C_USER_LOGIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USER_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USER_LOGIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USER_LOGIN;
        }

        /** Properties of a S_USER_LOGIN. */
        interface IS_USER_LOGIN {

            /** S_USER_LOGIN playerId */
            playerId?: (number|Long|null);
        }

        /** Represents a S_USER_LOGIN. */
        class S_USER_LOGIN implements IS_USER_LOGIN {

            /**
             * Constructs a new S_USER_LOGIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGIN);

            /** S_USER_LOGIN playerId. */
            public playerId: (number|Long);

            /**
             * Encodes the specified S_USER_LOGIN message. Does not implicitly {@link com.message.S_USER_LOGIN.verify|verify} messages.
             * @param message S_USER_LOGIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGIN;
        }

        /** Properties of a C_LOGIN_REGISTER. */
        interface IC_LOGIN_REGISTER {

            /** C_LOGIN_REGISTER username */
            username?: (number|Long|null);

            /** C_LOGIN_REGISTER gameSite */
            gameSite?: (string|null);

            /** C_LOGIN_REGISTER nickname */
            nickname?: (string|null);

            /** C_LOGIN_REGISTER heroId */
            heroId?: (number|null);

            /** C_LOGIN_REGISTER sparam */
            sparam?: (string|null);
        }

        /** Represents a C_LOGIN_REGISTER. */
        class C_LOGIN_REGISTER implements IC_LOGIN_REGISTER {

            /**
             * Constructs a new C_LOGIN_REGISTER.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_LOGIN_REGISTER);

            /** C_LOGIN_REGISTER username. */
            public username: (number|Long);

            /** C_LOGIN_REGISTER gameSite. */
            public gameSite: string;

            /** C_LOGIN_REGISTER nickname. */
            public nickname: string;

            /** C_LOGIN_REGISTER heroId. */
            public heroId: number;

            /** C_LOGIN_REGISTER sparam. */
            public sparam: string;

            /**
             * Encodes the specified C_LOGIN_REGISTER message. Does not implicitly {@link com.message.C_LOGIN_REGISTER.verify|verify} messages.
             * @param message C_LOGIN_REGISTER message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_LOGIN_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_LOGIN_REGISTER message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_LOGIN_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_LOGIN_REGISTER;
        }

        /** Properties of a C_USER_LOGOUT. */
        interface IC_USER_LOGOUT {

            /** C_USER_LOGOUT playerId */
            playerId?: (number|Long|null);
        }

        /** Represents a C_USER_LOGOUT. */
        class C_USER_LOGOUT implements IC_USER_LOGOUT {

            /**
             * Constructs a new C_USER_LOGOUT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USER_LOGOUT);

            /** C_USER_LOGOUT playerId. */
            public playerId: (number|Long);

            /**
             * Encodes the specified C_USER_LOGOUT message. Does not implicitly {@link com.message.C_USER_LOGOUT.verify|verify} messages.
             * @param message C_USER_LOGOUT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USER_LOGOUT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USER_LOGOUT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USER_LOGOUT;
        }

        /** Properties of a S_USER_LOGOUT. */
        interface IS_USER_LOGOUT {

            /** S_USER_LOGOUT playerId */
            playerId?: (number|Long|null);

            /** S_USER_LOGOUT beKickOut */
            beKickOut?: (boolean|null);
        }

        /** Represents a S_USER_LOGOUT. */
        class S_USER_LOGOUT implements IS_USER_LOGOUT {

            /**
             * Constructs a new S_USER_LOGOUT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGOUT);

            /** S_USER_LOGOUT playerId. */
            public playerId: (number|Long);

            /** S_USER_LOGOUT beKickOut. */
            public beKickOut: boolean;

            /**
             * Encodes the specified S_USER_LOGOUT message. Does not implicitly {@link com.message.S_USER_LOGOUT.verify|verify} messages.
             * @param message S_USER_LOGOUT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGOUT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGOUT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGOUT;
        }

        /** Properties of a S_USER_LOGIN_BAN. */
        interface IS_USER_LOGIN_BAN {
        }

        /** Represents a S_USER_LOGIN_BAN. */
        class S_USER_LOGIN_BAN implements IS_USER_LOGIN_BAN {

            /**
             * Constructs a new S_USER_LOGIN_BAN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGIN_BAN);

            /**
             * Encodes the specified S_USER_LOGIN_BAN message. Does not implicitly {@link com.message.S_USER_LOGIN_BAN.verify|verify} messages.
             * @param message S_USER_LOGIN_BAN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGIN_BAN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGIN_BAN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGIN_BAN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGIN_BAN;
        }

        /** Properties of a C_SYNC_TIME. */
        interface IC_SYNC_TIME {
        }

        /** Represents a C_SYNC_TIME. */
        class C_SYNC_TIME implements IC_SYNC_TIME {

            /**
             * Constructs a new C_SYNC_TIME.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_SYNC_TIME);

            /**
             * Encodes the specified C_SYNC_TIME message. Does not implicitly {@link com.message.C_SYNC_TIME.verify|verify} messages.
             * @param message C_SYNC_TIME message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_SYNC_TIME, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_SYNC_TIME message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_SYNC_TIME;
        }

        /** Properties of a S_SYNC_TIME. */
        interface IS_SYNC_TIME {

            /** S_SYNC_TIME time */
            time?: (number|Long|null);
        }

        /** Represents a S_SYNC_TIME. */
        class S_SYNC_TIME implements IS_SYNC_TIME {

            /**
             * Constructs a new S_SYNC_TIME.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SYNC_TIME);

            /** S_SYNC_TIME time. */
            public time: (number|Long);

            /**
             * Encodes the specified S_SYNC_TIME message. Does not implicitly {@link com.message.S_SYNC_TIME.verify|verify} messages.
             * @param message S_SYNC_TIME message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SYNC_TIME, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SYNC_TIME message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SYNC_TIME;
        }

        /** Properties of a C_GET_NICKNAME_INFO. */
        interface IC_GET_NICKNAME_INFO {

            /** C_GET_NICKNAME_INFO nickName */
            nickName?: (string|null);
        }

        /** Represents a C_GET_NICKNAME_INFO. */
        class C_GET_NICKNAME_INFO implements IC_GET_NICKNAME_INFO {

            /**
             * Constructs a new C_GET_NICKNAME_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_NICKNAME_INFO);

            /** C_GET_NICKNAME_INFO nickName. */
            public nickName: string;

            /**
             * Encodes the specified C_GET_NICKNAME_INFO message. Does not implicitly {@link com.message.C_GET_NICKNAME_INFO.verify|verify} messages.
             * @param message C_GET_NICKNAME_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_NICKNAME_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_NICKNAME_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_NICKNAME_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_NICKNAME_INFO;
        }

        /** Properties of a S_GET_NICKNAME_INFO. */
        interface IS_GET_NICKNAME_INFO {

            /** S_GET_NICKNAME_INFO nickName */
            nickName?: (string|null);

            /** S_GET_NICKNAME_INFO canUse */
            canUse?: (boolean|null);
        }

        /** Represents a S_GET_NICKNAME_INFO. */
        class S_GET_NICKNAME_INFO implements IS_GET_NICKNAME_INFO {

            /**
             * Constructs a new S_GET_NICKNAME_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_NICKNAME_INFO);

            /** S_GET_NICKNAME_INFO nickName. */
            public nickName: string;

            /** S_GET_NICKNAME_INFO canUse. */
            public canUse: boolean;

            /**
             * Encodes the specified S_GET_NICKNAME_INFO message. Does not implicitly {@link com.message.S_GET_NICKNAME_INFO.verify|verify} messages.
             * @param message S_GET_NICKNAME_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_NICKNAME_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_NICKNAME_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_NICKNAME_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_NICKNAME_INFO;
        }

        /** Properties of a C_SEND_SDK_DATA. */
        interface IC_SEND_SDK_DATA {

            /** C_SEND_SDK_DATA reportStr */
            reportStr?: (string|null);

            /** C_SEND_SDK_DATA reportUrl */
            reportUrl?: (string|null);
        }

        /** Represents a C_SEND_SDK_DATA. */
        class C_SEND_SDK_DATA implements IC_SEND_SDK_DATA {

            /**
             * Constructs a new C_SEND_SDK_DATA.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_SEND_SDK_DATA);

            /** C_SEND_SDK_DATA reportStr. */
            public reportStr: string;

            /** C_SEND_SDK_DATA reportUrl. */
            public reportUrl: string;

            /**
             * Encodes the specified C_SEND_SDK_DATA message. Does not implicitly {@link com.message.C_SEND_SDK_DATA.verify|verify} messages.
             * @param message C_SEND_SDK_DATA message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_SEND_SDK_DATA, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_SEND_SDK_DATA message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_SEND_SDK_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_SEND_SDK_DATA;
        }

        /** Properties of a S_SEND_SDK_DATA. */
        interface IS_SEND_SDK_DATA {

            /** S_SEND_SDK_DATA canUse */
            canUse?: (boolean|null);
        }

        /** Represents a S_SEND_SDK_DATA. */
        class S_SEND_SDK_DATA implements IS_SEND_SDK_DATA {

            /**
             * Constructs a new S_SEND_SDK_DATA.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SEND_SDK_DATA);

            /** S_SEND_SDK_DATA canUse. */
            public canUse: boolean;

            /**
             * Encodes the specified S_SEND_SDK_DATA message. Does not implicitly {@link com.message.S_SEND_SDK_DATA.verify|verify} messages.
             * @param message S_SEND_SDK_DATA message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SEND_SDK_DATA, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SEND_SDK_DATA message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SEND_SDK_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SEND_SDK_DATA;
        }

        /** Properties of a C_USER_LOGIN_INIT_FINISH. */
        interface IC_USER_LOGIN_INIT_FINISH {
        }

        /** Represents a C_USER_LOGIN_INIT_FINISH. */
        class C_USER_LOGIN_INIT_FINISH implements IC_USER_LOGIN_INIT_FINISH {

            /**
             * Constructs a new C_USER_LOGIN_INIT_FINISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USER_LOGIN_INIT_FINISH);

            /**
             * Encodes the specified C_USER_LOGIN_INIT_FINISH message. Does not implicitly {@link com.message.C_USER_LOGIN_INIT_FINISH.verify|verify} messages.
             * @param message C_USER_LOGIN_INIT_FINISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USER_LOGIN_INIT_FINISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USER_LOGIN_INIT_FINISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USER_LOGIN_INIT_FINISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USER_LOGIN_INIT_FINISH;
        }

        /** Properties of a S_USER_LOGIN_INIT_FINISH. */
        interface IS_USER_LOGIN_INIT_FINISH {

            /** S_USER_LOGIN_INIT_FINISH playerId */
            playerId?: (number|Long|null);

            /** S_USER_LOGIN_INIT_FINISH nickname */
            nickname?: (string|null);

            /** S_USER_LOGIN_INIT_FINISH heroId */
            heroId?: (number|null);

            /** S_USER_LOGIN_INIT_FINISH property */
            property?: (com.message.IPlayerPropertyMsg|null);

            /** S_USER_LOGIN_INIT_FINISH extMsg */
            extMsg?: (com.message.IPlayerExtMsg|null);

            /** S_USER_LOGIN_INIT_FINISH offlineMsg */
            offlineMsg?: (com.message.IOfflineHangupMsg|null);

            /** S_USER_LOGIN_INIT_FINISH openServerDay */
            openServerDay?: (number|null);

            /** S_USER_LOGIN_INIT_FINISH openServetTime */
            openServetTime?: (number|Long|null);

            /** S_USER_LOGIN_INIT_FINISH mergeServerDay */
            mergeServerDay?: (number|null);

            /** S_USER_LOGIN_INIT_FINISH mergeSeverTime */
            mergeSeverTime?: (number|Long|null);

            /** S_USER_LOGIN_INIT_FINISH guildId */
            guildId?: (number|Long|null);

            /** S_USER_LOGIN_INIT_FINISH time */
            time?: (number|Long|null);

            /** S_USER_LOGIN_INIT_FINISH createTime */
            createTime?: (number|Long|null);

            /** S_USER_LOGIN_INIT_FINISH useTitle */
            useTitle?: (number|null);

            /** S_USER_LOGIN_INIT_FINISH useHeadFrame */
            useHeadFrame?: (number|null);

            /** S_USER_LOGIN_INIT_FINISH gmFlag */
            gmFlag?: (number|null);
        }

        /** Represents a S_USER_LOGIN_INIT_FINISH. */
        class S_USER_LOGIN_INIT_FINISH implements IS_USER_LOGIN_INIT_FINISH {

            /**
             * Constructs a new S_USER_LOGIN_INIT_FINISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGIN_INIT_FINISH);

            /** S_USER_LOGIN_INIT_FINISH playerId. */
            public playerId: (number|Long);

            /** S_USER_LOGIN_INIT_FINISH nickname. */
            public nickname: string;

            /** S_USER_LOGIN_INIT_FINISH heroId. */
            public heroId: number;

            /** S_USER_LOGIN_INIT_FINISH property. */
            public property?: (com.message.IPlayerPropertyMsg|null);

            /** S_USER_LOGIN_INIT_FINISH extMsg. */
            public extMsg?: (com.message.IPlayerExtMsg|null);

            /** S_USER_LOGIN_INIT_FINISH offlineMsg. */
            public offlineMsg?: (com.message.IOfflineHangupMsg|null);

            /** S_USER_LOGIN_INIT_FINISH openServerDay. */
            public openServerDay: number;

            /** S_USER_LOGIN_INIT_FINISH openServetTime. */
            public openServetTime: (number|Long);

            /** S_USER_LOGIN_INIT_FINISH mergeServerDay. */
            public mergeServerDay: number;

            /** S_USER_LOGIN_INIT_FINISH mergeSeverTime. */
            public mergeSeverTime: (number|Long);

            /** S_USER_LOGIN_INIT_FINISH guildId. */
            public guildId: (number|Long);

            /** S_USER_LOGIN_INIT_FINISH time. */
            public time: (number|Long);

            /** S_USER_LOGIN_INIT_FINISH createTime. */
            public createTime: (number|Long);

            /** S_USER_LOGIN_INIT_FINISH useTitle. */
            public useTitle: number;

            /** S_USER_LOGIN_INIT_FINISH useHeadFrame. */
            public useHeadFrame: number;

            /** S_USER_LOGIN_INIT_FINISH gmFlag. */
            public gmFlag: number;

            /**
             * Encodes the specified S_USER_LOGIN_INIT_FINISH message. Does not implicitly {@link com.message.S_USER_LOGIN_INIT_FINISH.verify|verify} messages.
             * @param message S_USER_LOGIN_INIT_FINISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGIN_INIT_FINISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGIN_INIT_FINISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGIN_INIT_FINISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGIN_INIT_FINISH;
        }

        /** Properties of an OfflineHangupMsg. */
        interface IOfflineHangupMsg {

            /** OfflineHangupMsg time */
            time?: (number|Long|null);

            /** OfflineHangupMsg exp */
            exp?: (number|Long|null);

            /** OfflineHangupMsg money */
            money?: (number|Long|null);

            /** OfflineHangupMsg heroExp */
            heroExp?: (number|Long|null);

            /** OfflineHangupMsg state */
            state?: (number|null);
        }

        /** Represents an OfflineHangupMsg. */
        class OfflineHangupMsg implements IOfflineHangupMsg {

            /**
             * Constructs a new OfflineHangupMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IOfflineHangupMsg);

            /** OfflineHangupMsg time. */
            public time: (number|Long);

            /** OfflineHangupMsg exp. */
            public exp: (number|Long);

            /** OfflineHangupMsg money. */
            public money: (number|Long);

            /** OfflineHangupMsg heroExp. */
            public heroExp: (number|Long);

            /** OfflineHangupMsg state. */
            public state: number;

            /**
             * Encodes the specified OfflineHangupMsg message. Does not implicitly {@link com.message.OfflineHangupMsg.verify|verify} messages.
             * @param message OfflineHangupMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IOfflineHangupMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an OfflineHangupMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OfflineHangupMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.OfflineHangupMsg;
        }

        /** Properties of a C_GET_GUIDE_ID. */
        interface IC_GET_GUIDE_ID {
        }

        /** Represents a C_GET_GUIDE_ID. */
        class C_GET_GUIDE_ID implements IC_GET_GUIDE_ID {

            /**
             * Constructs a new C_GET_GUIDE_ID.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_GUIDE_ID);

            /**
             * Encodes the specified C_GET_GUIDE_ID message. Does not implicitly {@link com.message.C_GET_GUIDE_ID.verify|verify} messages.
             * @param message C_GET_GUIDE_ID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_GUIDE_ID, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_GUIDE_ID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_GUIDE_ID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_GUIDE_ID;
        }

        /** Properties of a S_GET_GUIDE_ID. */
        interface IS_GET_GUIDE_ID {

            /** S_GET_GUIDE_ID id */
            id?: (number|null);
        }

        /** Represents a S_GET_GUIDE_ID. */
        class S_GET_GUIDE_ID implements IS_GET_GUIDE_ID {

            /**
             * Constructs a new S_GET_GUIDE_ID.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_GUIDE_ID);

            /** S_GET_GUIDE_ID id. */
            public id: number;

            /**
             * Encodes the specified S_GET_GUIDE_ID message. Does not implicitly {@link com.message.S_GET_GUIDE_ID.verify|verify} messages.
             * @param message S_GET_GUIDE_ID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_GUIDE_ID, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_GUIDE_ID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_GUIDE_ID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_GUIDE_ID;
        }

        /** Properties of a C_SAVE_GUIDE_ID. */
        interface IC_SAVE_GUIDE_ID {

            /** C_SAVE_GUIDE_ID id */
            id?: (number|null);
        }

        /** Represents a C_SAVE_GUIDE_ID. */
        class C_SAVE_GUIDE_ID implements IC_SAVE_GUIDE_ID {

            /**
             * Constructs a new C_SAVE_GUIDE_ID.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_SAVE_GUIDE_ID);

            /** C_SAVE_GUIDE_ID id. */
            public id: number;

            /**
             * Encodes the specified C_SAVE_GUIDE_ID message. Does not implicitly {@link com.message.C_SAVE_GUIDE_ID.verify|verify} messages.
             * @param message C_SAVE_GUIDE_ID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_SAVE_GUIDE_ID, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_SAVE_GUIDE_ID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_SAVE_GUIDE_ID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_SAVE_GUIDE_ID;
        }

        /** Properties of a C_GET_MODULE_REWARD_INFO. */
        interface IC_GET_MODULE_REWARD_INFO {
        }

        /** Represents a C_GET_MODULE_REWARD_INFO. */
        class C_GET_MODULE_REWARD_INFO implements IC_GET_MODULE_REWARD_INFO {

            /**
             * Constructs a new C_GET_MODULE_REWARD_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MODULE_REWARD_INFO);

            /**
             * Encodes the specified C_GET_MODULE_REWARD_INFO message. Does not implicitly {@link com.message.C_GET_MODULE_REWARD_INFO.verify|verify} messages.
             * @param message C_GET_MODULE_REWARD_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MODULE_REWARD_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MODULE_REWARD_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MODULE_REWARD_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MODULE_REWARD_INFO;
        }

        /** Properties of a S_GET_MODULE_REWARD_INFO. */
        interface IS_GET_MODULE_REWARD_INFO {

            /** S_GET_MODULE_REWARD_INFO ids */
            ids?: (number[]|null);
        }

        /** Represents a S_GET_MODULE_REWARD_INFO. */
        class S_GET_MODULE_REWARD_INFO implements IS_GET_MODULE_REWARD_INFO {

            /**
             * Constructs a new S_GET_MODULE_REWARD_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MODULE_REWARD_INFO);

            /** S_GET_MODULE_REWARD_INFO ids. */
            public ids: number[];

            /**
             * Encodes the specified S_GET_MODULE_REWARD_INFO message. Does not implicitly {@link com.message.S_GET_MODULE_REWARD_INFO.verify|verify} messages.
             * @param message S_GET_MODULE_REWARD_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MODULE_REWARD_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MODULE_REWARD_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MODULE_REWARD_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MODULE_REWARD_INFO;
        }

        /** Properties of a C_GET_MODULE_REWARD. */
        interface IC_GET_MODULE_REWARD {

            /** C_GET_MODULE_REWARD id */
            id?: (number|null);
        }

        /** Represents a C_GET_MODULE_REWARD. */
        class C_GET_MODULE_REWARD implements IC_GET_MODULE_REWARD {

            /**
             * Constructs a new C_GET_MODULE_REWARD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MODULE_REWARD);

            /** C_GET_MODULE_REWARD id. */
            public id: number;

            /**
             * Encodes the specified C_GET_MODULE_REWARD message. Does not implicitly {@link com.message.C_GET_MODULE_REWARD.verify|verify} messages.
             * @param message C_GET_MODULE_REWARD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MODULE_REWARD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MODULE_REWARD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MODULE_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MODULE_REWARD;
        }

        /** Properties of a S_GET_MODULE_REWARD. */
        interface IS_GET_MODULE_REWARD {

            /** S_GET_MODULE_REWARD id */
            id?: (number|null);
        }

        /** Represents a S_GET_MODULE_REWARD. */
        class S_GET_MODULE_REWARD implements IS_GET_MODULE_REWARD {

            /**
             * Constructs a new S_GET_MODULE_REWARD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MODULE_REWARD);

            /** S_GET_MODULE_REWARD id. */
            public id: number;

            /**
             * Encodes the specified S_GET_MODULE_REWARD message. Does not implicitly {@link com.message.S_GET_MODULE_REWARD.verify|verify} messages.
             * @param message S_GET_MODULE_REWARD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MODULE_REWARD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MODULE_REWARD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MODULE_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MODULE_REWARD;
        }

        /** Properties of a C_SYNC_LOAD_FINISH. */
        interface IC_SYNC_LOAD_FINISH {
        }

        /** Represents a C_SYNC_LOAD_FINISH. */
        class C_SYNC_LOAD_FINISH implements IC_SYNC_LOAD_FINISH {

            /**
             * Constructs a new C_SYNC_LOAD_FINISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_SYNC_LOAD_FINISH);

            /**
             * Encodes the specified C_SYNC_LOAD_FINISH message. Does not implicitly {@link com.message.C_SYNC_LOAD_FINISH.verify|verify} messages.
             * @param message C_SYNC_LOAD_FINISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_SYNC_LOAD_FINISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_SYNC_LOAD_FINISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_SYNC_LOAD_FINISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_SYNC_LOAD_FINISH;
        }

        /** Properties of a S_LOGIN_OFFLINE_HANGUP_PUSH. */
        interface IS_LOGIN_OFFLINE_HANGUP_PUSH {

            /** S_LOGIN_OFFLINE_HANGUP_PUSH offlineMsg */
            offlineMsg?: (com.message.IOfflineHangupMsg|null);
        }

        /** Represents a S_LOGIN_OFFLINE_HANGUP_PUSH. */
        class S_LOGIN_OFFLINE_HANGUP_PUSH implements IS_LOGIN_OFFLINE_HANGUP_PUSH {

            /**
             * Constructs a new S_LOGIN_OFFLINE_HANGUP_PUSH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_LOGIN_OFFLINE_HANGUP_PUSH);

            /** S_LOGIN_OFFLINE_HANGUP_PUSH offlineMsg. */
            public offlineMsg?: (com.message.IOfflineHangupMsg|null);

            /**
             * Encodes the specified S_LOGIN_OFFLINE_HANGUP_PUSH message. Does not implicitly {@link com.message.S_LOGIN_OFFLINE_HANGUP_PUSH.verify|verify} messages.
             * @param message S_LOGIN_OFFLINE_HANGUP_PUSH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_LOGIN_OFFLINE_HANGUP_PUSH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_LOGIN_OFFLINE_HANGUP_PUSH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_LOGIN_OFFLINE_HANGUP_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_LOGIN_OFFLINE_HANGUP_PUSH;
        }

        /** Properties of a S_LOGIN_BACK_PACK_PUSH. */
        interface IS_LOGIN_BACK_PACK_PUSH {
        }

        /** Represents a S_LOGIN_BACK_PACK_PUSH. */
        class S_LOGIN_BACK_PACK_PUSH implements IS_LOGIN_BACK_PACK_PUSH {

            /**
             * Constructs a new S_LOGIN_BACK_PACK_PUSH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_LOGIN_BACK_PACK_PUSH);

            /**
             * Encodes the specified S_LOGIN_BACK_PACK_PUSH message. Does not implicitly {@link com.message.S_LOGIN_BACK_PACK_PUSH.verify|verify} messages.
             * @param message S_LOGIN_BACK_PACK_PUSH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_LOGIN_BACK_PACK_PUSH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_LOGIN_BACK_PACK_PUSH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_LOGIN_BACK_PACK_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_LOGIN_BACK_PACK_PUSH;
        }

        /** Properties of a PlayerPropertyMsg. */
        interface IPlayerPropertyMsg {

            /** PlayerPropertyMsg playerId */
            playerId?: (number|Long|null);

            /** PlayerPropertyMsg level */
            level?: (number|null);

            /** PlayerPropertyMsg exp */
            exp?: (number|Long|null);

            /** PlayerPropertyMsg diamond */
            diamond?: (number|Long|null);

            /** PlayerPropertyMsg money */
            money?: (number|Long|null);

            /** PlayerPropertyMsg vipLevel */
            vipLevel?: (number|null);

            /** PlayerPropertyMsg guildDonate */
            guildDonate?: (number|Long|null);

            /** PlayerPropertyMsg honor */
            honor?: (number|null);

            /** PlayerPropertyMsg demonScore */
            demonScore?: (number|null);

            /** PlayerPropertyMsg practice */
            practice?: (number|null);

            /** PlayerPropertyMsg fightVal */
            fightVal?: (number|Long|null);

            /** PlayerPropertyMsg expPool */
            expPool?: (number|Long|null);

            /** PlayerPropertyMsg bindDiamond */
            bindDiamond?: (number|null);

            /** PlayerPropertyMsg towerChip */
            towerChip?: (number|null);

            /** PlayerPropertyMsg heroQuality */
            heroQuality?: (number|null);

            /** PlayerPropertyMsg nanTianGateScore */
            nanTianGateScore?: (number|null);

            /** PlayerPropertyMsg xianJing */
            xianJing?: (number|null);

            /** PlayerPropertyMsg friendScore */
            friendScore?: (number|null);

            /** PlayerPropertyMsg aBiHellScore */
            aBiHellScore?: (number|null);

            /** PlayerPropertyMsg heroSol */
            heroSol?: (number|Long|null);
        }

        /** Represents a PlayerPropertyMsg. */
        class PlayerPropertyMsg implements IPlayerPropertyMsg {

            /**
             * Constructs a new PlayerPropertyMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPlayerPropertyMsg);

            /** PlayerPropertyMsg playerId. */
            public playerId: (number|Long);

            /** PlayerPropertyMsg level. */
            public level: number;

            /** PlayerPropertyMsg exp. */
            public exp: (number|Long);

            /** PlayerPropertyMsg diamond. */
            public diamond: (number|Long);

            /** PlayerPropertyMsg money. */
            public money: (number|Long);

            /** PlayerPropertyMsg vipLevel. */
            public vipLevel: number;

            /** PlayerPropertyMsg guildDonate. */
            public guildDonate: (number|Long);

            /** PlayerPropertyMsg honor. */
            public honor: number;

            /** PlayerPropertyMsg demonScore. */
            public demonScore: number;

            /** PlayerPropertyMsg practice. */
            public practice: number;

            /** PlayerPropertyMsg fightVal. */
            public fightVal: (number|Long);

            /** PlayerPropertyMsg expPool. */
            public expPool: (number|Long);

            /** PlayerPropertyMsg bindDiamond. */
            public bindDiamond: number;

            /** PlayerPropertyMsg towerChip. */
            public towerChip: number;

            /** PlayerPropertyMsg heroQuality. */
            public heroQuality: number;

            /** PlayerPropertyMsg nanTianGateScore. */
            public nanTianGateScore: number;

            /** PlayerPropertyMsg xianJing. */
            public xianJing: number;

            /** PlayerPropertyMsg friendScore. */
            public friendScore: number;

            /** PlayerPropertyMsg aBiHellScore. */
            public aBiHellScore: number;

            /** PlayerPropertyMsg heroSol. */
            public heroSol: (number|Long);

            /**
             * Encodes the specified PlayerPropertyMsg message. Does not implicitly {@link com.message.PlayerPropertyMsg.verify|verify} messages.
             * @param message PlayerPropertyMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPlayerPropertyMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PlayerPropertyMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerPropertyMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PlayerPropertyMsg;
        }

        /** Properties of a PlayerExtMsg. */
        interface IPlayerExtMsg {

            /** PlayerExtMsg onlineTime */
            onlineTime?: (number|Long|null);

            /** PlayerExtMsg curHangupIntId */
            curHangupIntId?: (number|null);

            /** PlayerExtMsg imageDressMsg */
            imageDressMsg?: (com.message.IImageDressMsg[]|null);

            /** PlayerExtMsg defeatNum */
            defeatNum?: (number|null);

            /** PlayerExtMsg dayOnlineTime */
            dayOnlineTime?: (number|Long|null);

            /** PlayerExtMsg monthRechargeValue */
            monthRechargeValue?: (number|Long|null);

            /** PlayerExtMsg passHellInsId */
            passHellInsId?: (number|null);

            /** PlayerExtMsg zhenFaType */
            zhenFaType?: (number|null);

            /** PlayerExtMsg chapterId */
            chapterId?: (number|null);

            /** PlayerExtMsg heroChallengeId */
            heroChallengeId?: (number|null);
        }

        /** Represents a PlayerExtMsg. */
        class PlayerExtMsg implements IPlayerExtMsg {

            /**
             * Constructs a new PlayerExtMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPlayerExtMsg);

            /** PlayerExtMsg onlineTime. */
            public onlineTime: (number|Long);

            /** PlayerExtMsg curHangupIntId. */
            public curHangupIntId: number;

            /** PlayerExtMsg imageDressMsg. */
            public imageDressMsg: com.message.IImageDressMsg[];

            /** PlayerExtMsg defeatNum. */
            public defeatNum: number;

            /** PlayerExtMsg dayOnlineTime. */
            public dayOnlineTime: (number|Long);

            /** PlayerExtMsg monthRechargeValue. */
            public monthRechargeValue: (number|Long);

            /** PlayerExtMsg passHellInsId. */
            public passHellInsId: number;

            /** PlayerExtMsg zhenFaType. */
            public zhenFaType: number;

            /** PlayerExtMsg chapterId. */
            public chapterId: number;

            /** PlayerExtMsg heroChallengeId. */
            public heroChallengeId: number;

            /**
             * Encodes the specified PlayerExtMsg message. Does not implicitly {@link com.message.PlayerExtMsg.verify|verify} messages.
             * @param message PlayerExtMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPlayerExtMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PlayerExtMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerExtMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PlayerExtMsg;
        }

        /** Properties of an ImageDressMsg. */
        interface IImageDressMsg {

            /** ImageDressMsg type */
            type?: (number|null);

            /** ImageDressMsg imageId */
            imageId?: (number|null);
        }

        /** Represents an ImageDressMsg. */
        class ImageDressMsg implements IImageDressMsg {

            /**
             * Constructs a new ImageDressMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IImageDressMsg);

            /** ImageDressMsg type. */
            public type: number;

            /** ImageDressMsg imageId. */
            public imageId: number;

            /**
             * Encodes the specified ImageDressMsg message. Does not implicitly {@link com.message.ImageDressMsg.verify|verify} messages.
             * @param message ImageDressMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IImageDressMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ImageDressMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImageDressMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.ImageDressMsg;
        }

        /** Properties of a BasePlayerMsg. */
        interface IBasePlayerMsg {

            /** BasePlayerMsg playerId */
            playerId?: (number|Long|null);

            /** BasePlayerMsg playerName */
            playerName?: (string|null);

            /** BasePlayerMsg heroId */
            heroId?: (number|Long|null);

            /** BasePlayerMsg level */
            level?: (number|null);

            /** BasePlayerMsg power */
            power?: (number|Long|null);

            /** BasePlayerMsg serverId */
            serverId?: (number|null);

            /** BasePlayerMsg imageDressMsg */
            imageDressMsg?: (com.message.IImageDressMsg[]|null);

            /** BasePlayerMsg heroQuality */
            heroQuality?: (number|null);

            /** BasePlayerMsg useTitle */
            useTitle?: (number|null);

            /** BasePlayerMsg useHeadFrame */
            useHeadFrame?: (number|null);

            /** BasePlayerMsg zhenFaType */
            zhenFaType?: (number|null);
        }

        /** Represents a BasePlayerMsg. */
        class BasePlayerMsg implements IBasePlayerMsg {

            /**
             * Constructs a new BasePlayerMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IBasePlayerMsg);

            /** BasePlayerMsg playerId. */
            public playerId: (number|Long);

            /** BasePlayerMsg playerName. */
            public playerName: string;

            /** BasePlayerMsg heroId. */
            public heroId: (number|Long);

            /** BasePlayerMsg level. */
            public level: number;

            /** BasePlayerMsg power. */
            public power: (number|Long);

            /** BasePlayerMsg serverId. */
            public serverId: number;

            /** BasePlayerMsg imageDressMsg. */
            public imageDressMsg: com.message.IImageDressMsg[];

            /** BasePlayerMsg heroQuality. */
            public heroQuality: number;

            /** BasePlayerMsg useTitle. */
            public useTitle: number;

            /** BasePlayerMsg useHeadFrame. */
            public useHeadFrame: number;

            /** BasePlayerMsg zhenFaType. */
            public zhenFaType: number;

            /**
             * Encodes the specified BasePlayerMsg message. Does not implicitly {@link com.message.BasePlayerMsg.verify|verify} messages.
             * @param message BasePlayerMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IBasePlayerMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a BasePlayerMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BasePlayerMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.BasePlayerMsg;
        }

        /** Properties of a BUY_GOODS_INFO. */
        interface IBUY_GOODS_INFO {

            /** BUY_GOODS_INFO marketId */
            marketId?: (number|null);

            /** BUY_GOODS_INFO count */
            count?: (number|null);
        }

        /** Represents a BUY_GOODS_INFO. */
        class BUY_GOODS_INFO implements IBUY_GOODS_INFO {

            /**
             * Constructs a new BUY_GOODS_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IBUY_GOODS_INFO);

            /** BUY_GOODS_INFO marketId. */
            public marketId: number;

            /** BUY_GOODS_INFO count. */
            public count: number;

            /**
             * Encodes the specified BUY_GOODS_INFO message. Does not implicitly {@link com.message.BUY_GOODS_INFO.verify|verify} messages.
             * @param message BUY_GOODS_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IBUY_GOODS_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a BUY_GOODS_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BUY_GOODS_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.BUY_GOODS_INFO;
        }

        /** Properties of a C_MARKET_BUY. */
        interface IC_MARKET_BUY {

            /** C_MARKET_BUY buyInfo */
            buyInfo?: (com.message.IBUY_GOODS_INFO|null);
        }

        /** Represents a C_MARKET_BUY. */
        class C_MARKET_BUY implements IC_MARKET_BUY {

            /**
             * Constructs a new C_MARKET_BUY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_MARKET_BUY);

            /** C_MARKET_BUY buyInfo. */
            public buyInfo?: (com.message.IBUY_GOODS_INFO|null);

            /**
             * Encodes the specified C_MARKET_BUY message. Does not implicitly {@link com.message.C_MARKET_BUY.verify|verify} messages.
             * @param message C_MARKET_BUY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_MARKET_BUY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_MARKET_BUY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_MARKET_BUY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_MARKET_BUY;
        }

        /** Properties of a S_MARKET_BUY. */
        interface IS_MARKET_BUY {

            /** S_MARKET_BUY buyInfo */
            buyInfo?: (com.message.IBUY_GOODS_INFO|null);
        }

        /** Represents a S_MARKET_BUY. */
        class S_MARKET_BUY implements IS_MARKET_BUY {

            /**
             * Constructs a new S_MARKET_BUY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_MARKET_BUY);

            /** S_MARKET_BUY buyInfo. */
            public buyInfo?: (com.message.IBUY_GOODS_INFO|null);

            /**
             * Encodes the specified S_MARKET_BUY message. Does not implicitly {@link com.message.S_MARKET_BUY.verify|verify} messages.
             * @param message S_MARKET_BUY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_MARKET_BUY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_MARKET_BUY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_MARKET_BUY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_MARKET_BUY;
        }

        /** Properties of a C_LIST_MARKET_LIMIT_INFO. */
        interface IC_LIST_MARKET_LIMIT_INFO {

            /** C_LIST_MARKET_LIMIT_INFO shopType */
            shopType?: (number|null);
        }

        /** Represents a C_LIST_MARKET_LIMIT_INFO. */
        class C_LIST_MARKET_LIMIT_INFO implements IC_LIST_MARKET_LIMIT_INFO {

            /**
             * Constructs a new C_LIST_MARKET_LIMIT_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_LIST_MARKET_LIMIT_INFO);

            /** C_LIST_MARKET_LIMIT_INFO shopType. */
            public shopType: number;

            /**
             * Encodes the specified C_LIST_MARKET_LIMIT_INFO message. Does not implicitly {@link com.message.C_LIST_MARKET_LIMIT_INFO.verify|verify} messages.
             * @param message C_LIST_MARKET_LIMIT_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_LIST_MARKET_LIMIT_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_LIST_MARKET_LIMIT_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_LIST_MARKET_LIMIT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_LIST_MARKET_LIMIT_INFO;
        }

        /** Properties of a S_LIST_MARKET_LIMIT_INFO. */
        interface IS_LIST_MARKET_LIMIT_INFO {

            /** S_LIST_MARKET_LIMIT_INFO shopType */
            shopType?: (number|null);

            /** S_LIST_MARKET_LIMIT_INFO limitInfo */
            limitInfo?: (com.message.IBUY_GOODS_INFO[]|null);
        }

        /** Represents a S_LIST_MARKET_LIMIT_INFO. */
        class S_LIST_MARKET_LIMIT_INFO implements IS_LIST_MARKET_LIMIT_INFO {

            /**
             * Constructs a new S_LIST_MARKET_LIMIT_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_LIST_MARKET_LIMIT_INFO);

            /** S_LIST_MARKET_LIMIT_INFO shopType. */
            public shopType: number;

            /** S_LIST_MARKET_LIMIT_INFO limitInfo. */
            public limitInfo: com.message.IBUY_GOODS_INFO[];

            /**
             * Encodes the specified S_LIST_MARKET_LIMIT_INFO message. Does not implicitly {@link com.message.S_LIST_MARKET_LIMIT_INFO.verify|verify} messages.
             * @param message S_LIST_MARKET_LIMIT_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_LIST_MARKET_LIMIT_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_LIST_MARKET_LIMIT_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_LIST_MARKET_LIMIT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_LIST_MARKET_LIMIT_INFO;
        }

        /** Properties of a MsgEnum. */
        interface IMsgEnum {
        }

        /** Represents a MsgEnum. */
        class MsgEnum implements IMsgEnum {

            /**
             * Constructs a new MsgEnum.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IMsgEnum);

            /**
             * Encodes the specified MsgEnum message. Does not implicitly {@link com.message.MsgEnum.verify|verify} messages.
             * @param message MsgEnum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IMsgEnum, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MsgEnum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgEnum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.MsgEnum;
        }

        namespace MsgEnum {

            /** MsgCode enum. */
            enum MsgCode {
                MSG_EMPTY = 0,
                S_EXCEPTION_MSG = 900,
                C_USER_LOGIN = 1001,
                S_USER_LOGIN = 1002,
                S_USER_LOGIN_BAN = 1003,
                C_LOGIN_REGISTER = 1005,
                C_USER_LOGOUT = 1007,
                S_USER_LOGOUT = 1008,
                C_USER_LOGIN_INIT_FINISH = 1009,
                S_USER_LOGIN_INIT_FINISH = 1010,
                C_GET_PLAYER_INFO = 1021,
                S_GET_PLAYER_INFO = 1022,
                C_EDIT_PLAYER_NICKNAME = 1023,
                S_EDIT_PLAYER_NICKNAME = 1024,
                S_RECHARGE_RTN_PUSH = 1025,
                C_RECHARGE_RTN_REWARD = 1026,
                S_RECHARGE_RTN_REWARD = 1027,
                S_LOGIN_OFFLINE_HANGUP_PUSH = 1028,
                S_LOGIN_BACK_PACK_PUSH = 1029,
                C_GET_NICKNAME_INFO = 1030,
                S_GET_NICKNAME_INFO = 1031,
                C_SEND_SDK_DATA = 1032,
                S_SEND_SDK_DATA = 1033,
                C_SYNC_LOAD_FINISH = 2000,
                S_SYN_PROPERTY = 2001,
                C_SYNC_TIME = 2101,
                S_SYNC_TIME = 2102,
                C_DEBUG_COMMON = 3101,
                S_DEBUG_COMMON = 3102,
                C_CHECK_CDK_INFO = 6500,
                S_CHECK_CDK_INFO = 6501,
                C_GET_CDK_REWARD = 6502,
                S_GET_CDK_REWARD = 6503,
                CROSS_C_HEART_BEAT = 100001,
                CROSS_S_HEART_BEAT = 100002,
                CROSS_C_SERVER_REGISTER = 100003,
                CROSS_S_SERVER_REGISTER = 100004,
                CROSS_S_EXCEPTION_MSG = 100005,
                CROSS_C_SERVER_PUSH = 100006,
                CROSS_S_SERVER_PUSH = 100007,
                CROSS_C_HTTP_DATA = 100008
            }

            /** ExceptionCode enum. */
            enum ExceptionCode {
                EXCEPTION_EMPTY = 0,
                ERROR_INPUT_PARAMETER = 1001,
                ERROR_INPUT_NUMBER = 1002,
                NOT_ENOUGH_ITEM_GOODS = 1003,
                BAG_ITEM_CAN_NOT_USE = 1004,
                GOODS_NOT_EXIST = 1007,
                ERROR_CONFIG = 1030,
                PLAYER_LEVEL_LIMITED = 1038,
                ROLE_NOT_FOUND = 1047,
                MAIL_NOT_FOUND = 1048,
                MAIL_NO_ACCESSORY = 1049,
                MAIL_ACCESSORY_RECEIVED = 1050,
                MAIL_DELETEFAILD_BYACCESSORY = 1051,
                PLAYER_NOT_FOUND = 1052,
                USERNAME_REPEATED = 1170,
                NICKNAME_REPEATED = 1171,
                CAN_NOT_USE_ILLEGAL_CHAR = 1172,
                CAN_NOT_USE_SENSITIVE_CHAR = 1173,
                SIGN_DAY_LARGE = 1178,
                SIGN_DAY_NOT_ENOUGH = 1179,
                PLAYER_NOT_EXIST = 1181
            }
        }

        /** Properties of a S_SYN_FIGHTER_PROPERTY. */
        interface IS_SYN_FIGHTER_PROPERTY {

            /** S_SYN_FIGHTER_PROPERTY mapMsg */
            mapMsg?: (com.message.IIntFloatMapMsg[]|null);
        }

        /** Represents a S_SYN_FIGHTER_PROPERTY. */
        class S_SYN_FIGHTER_PROPERTY implements IS_SYN_FIGHTER_PROPERTY {

            /**
             * Constructs a new S_SYN_FIGHTER_PROPERTY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SYN_FIGHTER_PROPERTY);

            /** S_SYN_FIGHTER_PROPERTY mapMsg. */
            public mapMsg: com.message.IIntFloatMapMsg[];

            /**
             * Encodes the specified S_SYN_FIGHTER_PROPERTY message. Does not implicitly {@link com.message.S_SYN_FIGHTER_PROPERTY.verify|verify} messages.
             * @param message S_SYN_FIGHTER_PROPERTY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SYN_FIGHTER_PROPERTY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SYN_FIGHTER_PROPERTY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SYN_FIGHTER_PROPERTY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SYN_FIGHTER_PROPERTY;
        }

        /** Properties of a S_SYN_PROPERTY. */
        interface IS_SYN_PROPERTY {

            /** S_SYN_PROPERTY mapMsg */
            mapMsg?: (com.message.IIntLongMapMsg[]|null);
        }

        /** Represents a S_SYN_PROPERTY. */
        class S_SYN_PROPERTY implements IS_SYN_PROPERTY {

            /**
             * Constructs a new S_SYN_PROPERTY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SYN_PROPERTY);

            /** S_SYN_PROPERTY mapMsg. */
            public mapMsg: com.message.IIntLongMapMsg[];

            /**
             * Encodes the specified S_SYN_PROPERTY message. Does not implicitly {@link com.message.S_SYN_PROPERTY.verify|verify} messages.
             * @param message S_SYN_PROPERTY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SYN_PROPERTY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SYN_PROPERTY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SYN_PROPERTY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SYN_PROPERTY;
        }

        /** PropertyID enum. */
        enum PropertyID {
            LEVEL = 0,
            EXP = 1,
            DIAMOND = 2,
            MONEY = 3,
            EXP_POOL = 4,
            GUILD_DONATE = 5,
            HONOR = 8,
            DEMON_SOCRE = 9,
            FIGHT_VAL = 10,
            PRACTICE = 11,
            BIND_DIAMOND = 12,
            TOWER_CHIP = 13,
            HERO_QUALITY = 14,
            OP_LUCK_SCORE = 15,
            NAN_TIAN_GATE_SCORE = 16,
            XIAN_JING = 17,
            FRIEND_SCORE = 18,
            ABI_HELL_SCORE = 19,
            HERO_SOL = 20
        }

        /** Properties of a C_GET_PLAYER_INFO. */
        interface IC_GET_PLAYER_INFO {

            /** C_GET_PLAYER_INFO playerId */
            playerId?: (number|Long|null);

            /** C_GET_PLAYER_INFO serverId */
            serverId?: (number|null);

            /** C_GET_PLAYER_INFO formationType */
            formationType?: (number|null);
        }

        /** Represents a C_GET_PLAYER_INFO. */
        class C_GET_PLAYER_INFO implements IC_GET_PLAYER_INFO {

            /**
             * Constructs a new C_GET_PLAYER_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_PLAYER_INFO);

            /** C_GET_PLAYER_INFO playerId. */
            public playerId: (number|Long);

            /** C_GET_PLAYER_INFO serverId. */
            public serverId: number;

            /** C_GET_PLAYER_INFO formationType. */
            public formationType: number;

            /**
             * Encodes the specified C_GET_PLAYER_INFO message. Does not implicitly {@link com.message.C_GET_PLAYER_INFO.verify|verify} messages.
             * @param message C_GET_PLAYER_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_PLAYER_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_PLAYER_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_PLAYER_INFO;
        }

        /** Properties of a S_GET_PLAYER_INFO. */
        interface IS_GET_PLAYER_INFO {

            /** S_GET_PLAYER_INFO playerInfo */
            playerInfo?: (com.message.IPlayerBaseInfoMsg|null);

            /** S_GET_PLAYER_INFO playerAllInfo */
            playerAllInfo?: (com.message.IPLAYER_ALL_INFO|null);

            /** S_GET_PLAYER_INFO formationType */
            formationType?: (number|null);
        }

        /** Represents a S_GET_PLAYER_INFO. */
        class S_GET_PLAYER_INFO implements IS_GET_PLAYER_INFO {

            /**
             * Constructs a new S_GET_PLAYER_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_PLAYER_INFO);

            /** S_GET_PLAYER_INFO playerInfo. */
            public playerInfo?: (com.message.IPlayerBaseInfoMsg|null);

            /** S_GET_PLAYER_INFO playerAllInfo. */
            public playerAllInfo?: (com.message.IPLAYER_ALL_INFO|null);

            /** S_GET_PLAYER_INFO formationType. */
            public formationType: number;

            /**
             * Encodes the specified S_GET_PLAYER_INFO message. Does not implicitly {@link com.message.S_GET_PLAYER_INFO.verify|verify} messages.
             * @param message S_GET_PLAYER_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_PLAYER_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_PLAYER_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_PLAYER_INFO;
        }

        /** Properties of a PLAYER_ALL_INFO. */
        interface IPLAYER_ALL_INFO {

            /** PLAYER_ALL_INFO formationHeros */
            formationHeros?: (com.message.IFORMATION_HERO_INFO1[]|null);

            /** PLAYER_ALL_INFO heros */
            heros?: (com.message.IHERO_INFO[]|null);
        }

        /** Represents a PLAYER_ALL_INFO. */
        class PLAYER_ALL_INFO implements IPLAYER_ALL_INFO {

            /**
             * Constructs a new PLAYER_ALL_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPLAYER_ALL_INFO);

            /** PLAYER_ALL_INFO formationHeros. */
            public formationHeros: com.message.IFORMATION_HERO_INFO1[];

            /** PLAYER_ALL_INFO heros. */
            public heros: com.message.IHERO_INFO[];

            /**
             * Encodes the specified PLAYER_ALL_INFO message. Does not implicitly {@link com.message.PLAYER_ALL_INFO.verify|verify} messages.
             * @param message PLAYER_ALL_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPLAYER_ALL_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PLAYER_ALL_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PLAYER_ALL_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PLAYER_ALL_INFO;
        }

        /** Properties of a PROPERTY_INFO. */
        interface IPROPERTY_INFO {

            /** PROPERTY_INFO propId */
            propId?: (number|null);

            /** PROPERTY_INFO propVal */
            propVal?: (number|Long|null);
        }

        /** Represents a PROPERTY_INFO. */
        class PROPERTY_INFO implements IPROPERTY_INFO {

            /**
             * Constructs a new PROPERTY_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPROPERTY_INFO);

            /** PROPERTY_INFO propId. */
            public propId: number;

            /** PROPERTY_INFO propVal. */
            public propVal: (number|Long);

            /**
             * Encodes the specified PROPERTY_INFO message. Does not implicitly {@link com.message.PROPERTY_INFO.verify|verify} messages.
             * @param message PROPERTY_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPROPERTY_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PROPERTY_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PROPERTY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PROPERTY_INFO;
        }

        /** Properties of a FORMATION_HERO_INFO1. */
        interface IFORMATION_HERO_INFO1 {

            /** FORMATION_HERO_INFO1 heroId */
            heroId?: (number|null);

            /** FORMATION_HERO_INFO1 pos */
            pos?: (number|null);

            /** FORMATION_HERO_INFO1 index */
            index?: (number|null);

            /** FORMATION_HERO_INFO1 propInfos */
            propInfos?: (com.message.IPROPERTY_INFO[]|null);
        }

        /** Represents a FORMATION_HERO_INFO1. */
        class FORMATION_HERO_INFO1 implements IFORMATION_HERO_INFO1 {

            /**
             * Constructs a new FORMATION_HERO_INFO1.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IFORMATION_HERO_INFO1);

            /** FORMATION_HERO_INFO1 heroId. */
            public heroId: number;

            /** FORMATION_HERO_INFO1 pos. */
            public pos: number;

            /** FORMATION_HERO_INFO1 index. */
            public index: number;

            /** FORMATION_HERO_INFO1 propInfos. */
            public propInfos: com.message.IPROPERTY_INFO[];

            /**
             * Encodes the specified FORMATION_HERO_INFO1 message. Does not implicitly {@link com.message.FORMATION_HERO_INFO1.verify|verify} messages.
             * @param message FORMATION_HERO_INFO1 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IFORMATION_HERO_INFO1, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a FORMATION_HERO_INFO1 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FORMATION_HERO_INFO1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.FORMATION_HERO_INFO1;
        }

        /** Properties of a HERO_INFO. */
        interface IHERO_INFO {

            /** HERO_INFO heroId */
            heroId?: (number|null);

            /** HERO_INFO heroLevel */
            heroLevel?: (number|null);

            /** HERO_INFO heroTuPoLevel */
            heroTuPoLevel?: (number|null);

            /** HERO_INFO wakeUpLevel */
            wakeUpLevel?: (number|null);

            /** HERO_INFO starUpLevel */
            starUpLevel?: (number|null);

            /** HERO_INFO skills */
            skills?: (number[]|null);

            /** HERO_INFO flyLevel */
            flyLevel?: (number|null);
        }

        /** Represents a HERO_INFO. */
        class HERO_INFO implements IHERO_INFO {

            /**
             * Constructs a new HERO_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IHERO_INFO);

            /** HERO_INFO heroId. */
            public heroId: number;

            /** HERO_INFO heroLevel. */
            public heroLevel: number;

            /** HERO_INFO heroTuPoLevel. */
            public heroTuPoLevel: number;

            /** HERO_INFO wakeUpLevel. */
            public wakeUpLevel: number;

            /** HERO_INFO starUpLevel. */
            public starUpLevel: number;

            /** HERO_INFO skills. */
            public skills: number[];

            /** HERO_INFO flyLevel. */
            public flyLevel: number;

            /**
             * Encodes the specified HERO_INFO message. Does not implicitly {@link com.message.HERO_INFO.verify|verify} messages.
             * @param message HERO_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IHERO_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a HERO_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HERO_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.HERO_INFO;
        }

        /** Properties of a C_EDIT_PLAYER_NICKNAME. */
        interface IC_EDIT_PLAYER_NICKNAME {

            /** C_EDIT_PLAYER_NICKNAME nickname */
            nickname?: (string|null);
        }

        /** Represents a C_EDIT_PLAYER_NICKNAME. */
        class C_EDIT_PLAYER_NICKNAME implements IC_EDIT_PLAYER_NICKNAME {

            /**
             * Constructs a new C_EDIT_PLAYER_NICKNAME.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_EDIT_PLAYER_NICKNAME);

            /** C_EDIT_PLAYER_NICKNAME nickname. */
            public nickname: string;

            /**
             * Encodes the specified C_EDIT_PLAYER_NICKNAME message. Does not implicitly {@link com.message.C_EDIT_PLAYER_NICKNAME.verify|verify} messages.
             * @param message C_EDIT_PLAYER_NICKNAME message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_EDIT_PLAYER_NICKNAME, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_EDIT_PLAYER_NICKNAME message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_EDIT_PLAYER_NICKNAME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_EDIT_PLAYER_NICKNAME;
        }

        /** Properties of a S_EDIT_PLAYER_NICKNAME. */
        interface IS_EDIT_PLAYER_NICKNAME {

            /** S_EDIT_PLAYER_NICKNAME nickname */
            nickname?: (string|null);
        }

        /** Represents a S_EDIT_PLAYER_NICKNAME. */
        class S_EDIT_PLAYER_NICKNAME implements IS_EDIT_PLAYER_NICKNAME {

            /**
             * Constructs a new S_EDIT_PLAYER_NICKNAME.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_EDIT_PLAYER_NICKNAME);

            /** S_EDIT_PLAYER_NICKNAME nickname. */
            public nickname: string;

            /**
             * Encodes the specified S_EDIT_PLAYER_NICKNAME message. Does not implicitly {@link com.message.S_EDIT_PLAYER_NICKNAME.verify|verify} messages.
             * @param message S_EDIT_PLAYER_NICKNAME message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_EDIT_PLAYER_NICKNAME, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_EDIT_PLAYER_NICKNAME message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_EDIT_PLAYER_NICKNAME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_EDIT_PLAYER_NICKNAME;
        }

        /** Properties of a PlayerBaseInfoMsg. */
        interface IPlayerBaseInfoMsg {

            /** PlayerBaseInfoMsg playerId */
            playerId?: (number|Long|null);

            /** PlayerBaseInfoMsg nickname */
            nickname?: (string|null);

            /** PlayerBaseInfoMsg level */
            level?: (number|null);

            /** PlayerBaseInfoMsg heroId */
            heroId?: (number|null);

            /** PlayerBaseInfoMsg vipLevel */
            vipLevel?: (number|null);

            /** PlayerBaseInfoMsg fightVal */
            fightVal?: (number|Long|null);

            /** PlayerBaseInfoMsg loverPlayerId */
            loverPlayerId?: (number|Long|null);

            /** PlayerBaseInfoMsg loverName */
            loverName?: (string|null);

            /** PlayerBaseInfoMsg guildName */
            guildName?: (string|null);

            /** PlayerBaseInfoMsg guildId */
            guildId?: (number|Long|null);

            /** PlayerBaseInfoMsg friendType */
            friendType?: (number|null);

            /** PlayerBaseInfoMsg friendSubType */
            friendSubType?: (number|null);

            /** PlayerBaseInfoMsg wingId */
            wingId?: (number|null);

            /** PlayerBaseInfoMsg wingImageId */
            wingImageId?: (number|null);

            /** PlayerBaseInfoMsg mountId */
            mountId?: (number|null);

            /** PlayerBaseInfoMsg mountImageId */
            mountImageId?: (number|null);

            /** PlayerBaseInfoMsg holoId */
            holoId?: (number|null);

            /** PlayerBaseInfoMsg holoImageId */
            holoImageId?: (number|null);

            /** PlayerBaseInfoMsg shouhuId */
            shouhuId?: (number|null);

            /** PlayerBaseInfoMsg shouhuImageId */
            shouhuImageId?: (number|null);

            /** PlayerBaseInfoMsg heroQuality */
            heroQuality?: (number|null);

            /** PlayerBaseInfoMsg useTitle */
            useTitle?: (number|null);

            /** PlayerBaseInfoMsg useHeadFrame */
            useHeadFrame?: (number|null);
        }

        /** Represents a PlayerBaseInfoMsg. */
        class PlayerBaseInfoMsg implements IPlayerBaseInfoMsg {

            /**
             * Constructs a new PlayerBaseInfoMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPlayerBaseInfoMsg);

            /** PlayerBaseInfoMsg playerId. */
            public playerId: (number|Long);

            /** PlayerBaseInfoMsg nickname. */
            public nickname: string;

            /** PlayerBaseInfoMsg level. */
            public level: number;

            /** PlayerBaseInfoMsg heroId. */
            public heroId: number;

            /** PlayerBaseInfoMsg vipLevel. */
            public vipLevel: number;

            /** PlayerBaseInfoMsg fightVal. */
            public fightVal: (number|Long);

            /** PlayerBaseInfoMsg loverPlayerId. */
            public loverPlayerId: (number|Long);

            /** PlayerBaseInfoMsg loverName. */
            public loverName: string;

            /** PlayerBaseInfoMsg guildName. */
            public guildName: string;

            /** PlayerBaseInfoMsg guildId. */
            public guildId: (number|Long);

            /** PlayerBaseInfoMsg friendType. */
            public friendType: number;

            /** PlayerBaseInfoMsg friendSubType. */
            public friendSubType: number;

            /** PlayerBaseInfoMsg wingId. */
            public wingId: number;

            /** PlayerBaseInfoMsg wingImageId. */
            public wingImageId: number;

            /** PlayerBaseInfoMsg mountId. */
            public mountId: number;

            /** PlayerBaseInfoMsg mountImageId. */
            public mountImageId: number;

            /** PlayerBaseInfoMsg holoId. */
            public holoId: number;

            /** PlayerBaseInfoMsg holoImageId. */
            public holoImageId: number;

            /** PlayerBaseInfoMsg shouhuId. */
            public shouhuId: number;

            /** PlayerBaseInfoMsg shouhuImageId. */
            public shouhuImageId: number;

            /** PlayerBaseInfoMsg heroQuality. */
            public heroQuality: number;

            /** PlayerBaseInfoMsg useTitle. */
            public useTitle: number;

            /** PlayerBaseInfoMsg useHeadFrame. */
            public useHeadFrame: number;

            /**
             * Encodes the specified PlayerBaseInfoMsg message. Does not implicitly {@link com.message.PlayerBaseInfoMsg.verify|verify} messages.
             * @param message PlayerBaseInfoMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPlayerBaseInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PlayerBaseInfoMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerBaseInfoMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PlayerBaseInfoMsg;
        }

        /** Properties of a CROSS_C_GET_PLAYER_INFO. */
        interface ICROSS_C_GET_PLAYER_INFO {

            /** CROSS_C_GET_PLAYER_INFO playerId */
            playerId?: (number|Long|null);

            /** CROSS_C_GET_PLAYER_INFO serverId */
            serverId?: (number|null);

            /** CROSS_C_GET_PLAYER_INFO targetId */
            targetId?: (number|Long|null);

            /** CROSS_C_GET_PLAYER_INFO targetServerId */
            targetServerId?: (number|null);

            /** CROSS_C_GET_PLAYER_INFO formationType */
            formationType?: (number|null);
        }

        /** Represents a CROSS_C_GET_PLAYER_INFO. */
        class CROSS_C_GET_PLAYER_INFO implements ICROSS_C_GET_PLAYER_INFO {

            /**
             * Constructs a new CROSS_C_GET_PLAYER_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_GET_PLAYER_INFO);

            /** CROSS_C_GET_PLAYER_INFO playerId. */
            public playerId: (number|Long);

            /** CROSS_C_GET_PLAYER_INFO serverId. */
            public serverId: number;

            /** CROSS_C_GET_PLAYER_INFO targetId. */
            public targetId: (number|Long);

            /** CROSS_C_GET_PLAYER_INFO targetServerId. */
            public targetServerId: number;

            /** CROSS_C_GET_PLAYER_INFO formationType. */
            public formationType: number;

            /**
             * Encodes the specified CROSS_C_GET_PLAYER_INFO message. Does not implicitly {@link com.message.CROSS_C_GET_PLAYER_INFO.verify|verify} messages.
             * @param message CROSS_C_GET_PLAYER_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_GET_PLAYER_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_GET_PLAYER_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_GET_PLAYER_INFO;
        }

        /** Properties of a CROSS_S_GET_PLAYER_INFO. */
        interface ICROSS_S_GET_PLAYER_INFO {

            /** CROSS_S_GET_PLAYER_INFO playerId */
            playerId?: (number|Long|null);

            /** CROSS_S_GET_PLAYER_INFO serverId */
            serverId?: (number|null);

            /** CROSS_S_GET_PLAYER_INFO playerInfo */
            playerInfo?: (com.message.IPlayerBaseInfoMsg|null);

            /** CROSS_S_GET_PLAYER_INFO playerAllInfo */
            playerAllInfo?: (com.message.IPLAYER_ALL_INFO|null);

            /** CROSS_S_GET_PLAYER_INFO formationType */
            formationType?: (number|null);
        }

        /** Represents a CROSS_S_GET_PLAYER_INFO. */
        class CROSS_S_GET_PLAYER_INFO implements ICROSS_S_GET_PLAYER_INFO {

            /**
             * Constructs a new CROSS_S_GET_PLAYER_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_GET_PLAYER_INFO);

            /** CROSS_S_GET_PLAYER_INFO playerId. */
            public playerId: (number|Long);

            /** CROSS_S_GET_PLAYER_INFO serverId. */
            public serverId: number;

            /** CROSS_S_GET_PLAYER_INFO playerInfo. */
            public playerInfo?: (com.message.IPlayerBaseInfoMsg|null);

            /** CROSS_S_GET_PLAYER_INFO playerAllInfo. */
            public playerAllInfo?: (com.message.IPLAYER_ALL_INFO|null);

            /** CROSS_S_GET_PLAYER_INFO formationType. */
            public formationType: number;

            /**
             * Encodes the specified CROSS_S_GET_PLAYER_INFO message. Does not implicitly {@link com.message.CROSS_S_GET_PLAYER_INFO.verify|verify} messages.
             * @param message CROSS_S_GET_PLAYER_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_GET_PLAYER_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_GET_PLAYER_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_GET_PLAYER_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_GET_PLAYER_INFO;
        }

        /** Properties of a S_SYN_SHOW_BUBBLE. */
        interface IS_SYN_SHOW_BUBBLE {

            /** S_SYN_SHOW_BUBBLE bubbleId */
            bubbleId?: (number|null);
        }

        /** Represents a S_SYN_SHOW_BUBBLE. */
        class S_SYN_SHOW_BUBBLE implements IS_SYN_SHOW_BUBBLE {

            /**
             * Constructs a new S_SYN_SHOW_BUBBLE.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SYN_SHOW_BUBBLE);

            /** S_SYN_SHOW_BUBBLE bubbleId. */
            public bubbleId: number;

            /**
             * Encodes the specified S_SYN_SHOW_BUBBLE message. Does not implicitly {@link com.message.S_SYN_SHOW_BUBBLE.verify|verify} messages.
             * @param message S_SYN_SHOW_BUBBLE message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SYN_SHOW_BUBBLE, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SYN_SHOW_BUBBLE message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SYN_SHOW_BUBBLE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SYN_SHOW_BUBBLE;
        }

        /** Properties of a CROSS_C_SEND_PLYAER_DATA. */
        interface ICROSS_C_SEND_PLYAER_DATA {

            /** CROSS_C_SEND_PLYAER_DATA serverId */
            serverId?: (number|null);

            /** CROSS_C_SEND_PLYAER_DATA datas */
            datas?: (com.message.ICROSS_PLAYER_DATA[]|null);
        }

        /** Represents a CROSS_C_SEND_PLYAER_DATA. */
        class CROSS_C_SEND_PLYAER_DATA implements ICROSS_C_SEND_PLYAER_DATA {

            /**
             * Constructs a new CROSS_C_SEND_PLYAER_DATA.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_SEND_PLYAER_DATA);

            /** CROSS_C_SEND_PLYAER_DATA serverId. */
            public serverId: number;

            /** CROSS_C_SEND_PLYAER_DATA datas. */
            public datas: com.message.ICROSS_PLAYER_DATA[];

            /**
             * Encodes the specified CROSS_C_SEND_PLYAER_DATA message. Does not implicitly {@link com.message.CROSS_C_SEND_PLYAER_DATA.verify|verify} messages.
             * @param message CROSS_C_SEND_PLYAER_DATA message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_SEND_PLYAER_DATA, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_SEND_PLYAER_DATA message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_SEND_PLYAER_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_SEND_PLYAER_DATA;
        }

        /** Properties of a CROSS_S_SEND_PLAYER_DATA. */
        interface ICROSS_S_SEND_PLAYER_DATA {

            /** CROSS_S_SEND_PLAYER_DATA serverId */
            serverId?: (number|null);

            /** CROSS_S_SEND_PLAYER_DATA updateNum */
            updateNum?: (number|null);
        }

        /** Represents a CROSS_S_SEND_PLAYER_DATA. */
        class CROSS_S_SEND_PLAYER_DATA implements ICROSS_S_SEND_PLAYER_DATA {

            /**
             * Constructs a new CROSS_S_SEND_PLAYER_DATA.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_SEND_PLAYER_DATA);

            /** CROSS_S_SEND_PLAYER_DATA serverId. */
            public serverId: number;

            /** CROSS_S_SEND_PLAYER_DATA updateNum. */
            public updateNum: number;

            /**
             * Encodes the specified CROSS_S_SEND_PLAYER_DATA message. Does not implicitly {@link com.message.CROSS_S_SEND_PLAYER_DATA.verify|verify} messages.
             * @param message CROSS_S_SEND_PLAYER_DATA message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_SEND_PLAYER_DATA, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_SEND_PLAYER_DATA message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_SEND_PLAYER_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_SEND_PLAYER_DATA;
        }

        /** Properties of a CROSS_PLAYER_DATA. */
        interface ICROSS_PLAYER_DATA {

            /** CROSS_PLAYER_DATA playerId */
            playerId?: (number|Long|null);

            /** CROSS_PLAYER_DATA playerLevel */
            playerLevel?: (number|null);

            /** CROSS_PLAYER_DATA nickName */
            nickName?: (string|null);

            /** CROSS_PLAYER_DATA fightValue */
            fightValue?: (number|Long|null);
        }

        /** Represents a CROSS_PLAYER_DATA. */
        class CROSS_PLAYER_DATA implements ICROSS_PLAYER_DATA {

            /**
             * Constructs a new CROSS_PLAYER_DATA.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_PLAYER_DATA);

            /** CROSS_PLAYER_DATA playerId. */
            public playerId: (number|Long);

            /** CROSS_PLAYER_DATA playerLevel. */
            public playerLevel: number;

            /** CROSS_PLAYER_DATA nickName. */
            public nickName: string;

            /** CROSS_PLAYER_DATA fightValue. */
            public fightValue: (number|Long);

            /**
             * Encodes the specified CROSS_PLAYER_DATA message. Does not implicitly {@link com.message.CROSS_PLAYER_DATA.verify|verify} messages.
             * @param message CROSS_PLAYER_DATA message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_PLAYER_DATA, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_PLAYER_DATA message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_PLAYER_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_PLAYER_DATA;
        }

        /** Properties of a CROSS_C_GET_PLAYER_BATTLE_INFO. */
        interface ICROSS_C_GET_PLAYER_BATTLE_INFO {

            /** CROSS_C_GET_PLAYER_BATTLE_INFO serverId */
            serverId?: (number|null);

            /** CROSS_C_GET_PLAYER_BATTLE_INFO playerId */
            playerId?: (number|Long|null);

            /** CROSS_C_GET_PLAYER_BATTLE_INFO targetServerId */
            targetServerId?: (number|null);

            /** CROSS_C_GET_PLAYER_BATTLE_INFO targetPlayerId */
            targetPlayerId?: (number|Long|null);
        }

        /** Represents a CROSS_C_GET_PLAYER_BATTLE_INFO. */
        class CROSS_C_GET_PLAYER_BATTLE_INFO implements ICROSS_C_GET_PLAYER_BATTLE_INFO {

            /**
             * Constructs a new CROSS_C_GET_PLAYER_BATTLE_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_GET_PLAYER_BATTLE_INFO);

            /** CROSS_C_GET_PLAYER_BATTLE_INFO serverId. */
            public serverId: number;

            /** CROSS_C_GET_PLAYER_BATTLE_INFO playerId. */
            public playerId: (number|Long);

            /** CROSS_C_GET_PLAYER_BATTLE_INFO targetServerId. */
            public targetServerId: number;

            /** CROSS_C_GET_PLAYER_BATTLE_INFO targetPlayerId. */
            public targetPlayerId: (number|Long);

            /**
             * Encodes the specified CROSS_C_GET_PLAYER_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_C_GET_PLAYER_BATTLE_INFO.verify|verify} messages.
             * @param message CROSS_C_GET_PLAYER_BATTLE_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_GET_PLAYER_BATTLE_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_GET_PLAYER_BATTLE_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_GET_PLAYER_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_GET_PLAYER_BATTLE_INFO;
        }

        /** Properties of a CROSS_S_GET_PLAYER_BATTLE_INFO. */
        interface ICROSS_S_GET_PLAYER_BATTLE_INFO {

            /** CROSS_S_GET_PLAYER_BATTLE_INFO serverId */
            serverId?: (number|null);

            /** CROSS_S_GET_PLAYER_BATTLE_INFO playerId */
            playerId?: (number|Long|null);
        }

        /** Represents a CROSS_S_GET_PLAYER_BATTLE_INFO. */
        class CROSS_S_GET_PLAYER_BATTLE_INFO implements ICROSS_S_GET_PLAYER_BATTLE_INFO {

            /**
             * Constructs a new CROSS_S_GET_PLAYER_BATTLE_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_GET_PLAYER_BATTLE_INFO);

            /** CROSS_S_GET_PLAYER_BATTLE_INFO serverId. */
            public serverId: number;

            /** CROSS_S_GET_PLAYER_BATTLE_INFO playerId. */
            public playerId: (number|Long);

            /**
             * Encodes the specified CROSS_S_GET_PLAYER_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_S_GET_PLAYER_BATTLE_INFO.verify|verify} messages.
             * @param message CROSS_S_GET_PLAYER_BATTLE_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_GET_PLAYER_BATTLE_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_GET_PLAYER_BATTLE_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_GET_PLAYER_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_GET_PLAYER_BATTLE_INFO;
        }

        /** Properties of a CROSS_C_GET_PLAYER_ABI_HELL. */
        interface ICROSS_C_GET_PLAYER_ABI_HELL {

            /** CROSS_C_GET_PLAYER_ABI_HELL serverId */
            serverId?: (number|null);

            /** CROSS_C_GET_PLAYER_ABI_HELL playerId */
            playerId?: (number|Long|null);

            /** CROSS_C_GET_PLAYER_ABI_HELL playerLevel */
            playerLevel?: (number|null);
        }

        /** Represents a CROSS_C_GET_PLAYER_ABI_HELL. */
        class CROSS_C_GET_PLAYER_ABI_HELL implements ICROSS_C_GET_PLAYER_ABI_HELL {

            /**
             * Constructs a new CROSS_C_GET_PLAYER_ABI_HELL.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_GET_PLAYER_ABI_HELL);

            /** CROSS_C_GET_PLAYER_ABI_HELL serverId. */
            public serverId: number;

            /** CROSS_C_GET_PLAYER_ABI_HELL playerId. */
            public playerId: (number|Long);

            /** CROSS_C_GET_PLAYER_ABI_HELL playerLevel. */
            public playerLevel: number;

            /**
             * Encodes the specified CROSS_C_GET_PLAYER_ABI_HELL message. Does not implicitly {@link com.message.CROSS_C_GET_PLAYER_ABI_HELL.verify|verify} messages.
             * @param message CROSS_C_GET_PLAYER_ABI_HELL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_GET_PLAYER_ABI_HELL, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_GET_PLAYER_ABI_HELL message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_GET_PLAYER_ABI_HELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_GET_PLAYER_ABI_HELL;
        }

        /** Properties of a CROSS_S_GET_PLAYER_ABI_HELL. */
        interface ICROSS_S_GET_PLAYER_ABI_HELL {

            /** CROSS_S_GET_PLAYER_ABI_HELL serverId */
            serverId?: (number|null);

            /** CROSS_S_GET_PLAYER_ABI_HELL playerId */
            playerId?: (number|Long|null);

            /** CROSS_S_GET_PLAYER_ABI_HELL targetDatas */
            targetDatas?: (string|null);
        }

        /** Represents a CROSS_S_GET_PLAYER_ABI_HELL. */
        class CROSS_S_GET_PLAYER_ABI_HELL implements ICROSS_S_GET_PLAYER_ABI_HELL {

            /**
             * Constructs a new CROSS_S_GET_PLAYER_ABI_HELL.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_GET_PLAYER_ABI_HELL);

            /** CROSS_S_GET_PLAYER_ABI_HELL serverId. */
            public serverId: number;

            /** CROSS_S_GET_PLAYER_ABI_HELL playerId. */
            public playerId: (number|Long);

            /** CROSS_S_GET_PLAYER_ABI_HELL targetDatas. */
            public targetDatas: string;

            /**
             * Encodes the specified CROSS_S_GET_PLAYER_ABI_HELL message. Does not implicitly {@link com.message.CROSS_S_GET_PLAYER_ABI_HELL.verify|verify} messages.
             * @param message CROSS_S_GET_PLAYER_ABI_HELL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_GET_PLAYER_ABI_HELL, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_GET_PLAYER_ABI_HELL message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_GET_PLAYER_ABI_HELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_GET_PLAYER_ABI_HELL;
        }

        /** Properties of a CROSS_C_PLAYER_SYS_BATTLE_INFO. */
        interface ICROSS_C_PLAYER_SYS_BATTLE_INFO {

            /** CROSS_C_PLAYER_SYS_BATTLE_INFO playerId */
            playerId?: (number|Long|null);

            /** CROSS_C_PLAYER_SYS_BATTLE_INFO recordId */
            recordId?: (string|null);

            /** CROSS_C_PLAYER_SYS_BATTLE_INFO paramType */
            paramType?: (number|null);
        }

        /** Represents a CROSS_C_PLAYER_SYS_BATTLE_INFO. */
        class CROSS_C_PLAYER_SYS_BATTLE_INFO implements ICROSS_C_PLAYER_SYS_BATTLE_INFO {

            /**
             * Constructs a new CROSS_C_PLAYER_SYS_BATTLE_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_PLAYER_SYS_BATTLE_INFO);

            /** CROSS_C_PLAYER_SYS_BATTLE_INFO playerId. */
            public playerId: (number|Long);

            /** CROSS_C_PLAYER_SYS_BATTLE_INFO recordId. */
            public recordId: string;

            /** CROSS_C_PLAYER_SYS_BATTLE_INFO paramType. */
            public paramType: number;

            /**
             * Encodes the specified CROSS_C_PLAYER_SYS_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO.verify|verify} messages.
             * @param message CROSS_C_PLAYER_SYS_BATTLE_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_PLAYER_SYS_BATTLE_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_PLAYER_SYS_BATTLE_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_PLAYER_SYS_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_PLAYER_SYS_BATTLE_INFO;
        }

        /** Properties of a CROSS_S_PLAYER_SYS_BATTLE_INFO. */
        interface ICROSS_S_PLAYER_SYS_BATTLE_INFO {

            /** CROSS_S_PLAYER_SYS_BATTLE_INFO playerId */
            playerId?: (number|Long|null);

            /** CROSS_S_PLAYER_SYS_BATTLE_INFO recordId */
            recordId?: (string|null);

            /** CROSS_S_PLAYER_SYS_BATTLE_INFO paramType */
            paramType?: (number|null);
        }

        /** Represents a CROSS_S_PLAYER_SYS_BATTLE_INFO. */
        class CROSS_S_PLAYER_SYS_BATTLE_INFO implements ICROSS_S_PLAYER_SYS_BATTLE_INFO {

            /**
             * Constructs a new CROSS_S_PLAYER_SYS_BATTLE_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_PLAYER_SYS_BATTLE_INFO);

            /** CROSS_S_PLAYER_SYS_BATTLE_INFO playerId. */
            public playerId: (number|Long);

            /** CROSS_S_PLAYER_SYS_BATTLE_INFO recordId. */
            public recordId: string;

            /** CROSS_S_PLAYER_SYS_BATTLE_INFO paramType. */
            public paramType: number;

            /**
             * Encodes the specified CROSS_S_PLAYER_SYS_BATTLE_INFO message. Does not implicitly {@link com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO.verify|verify} messages.
             * @param message CROSS_S_PLAYER_SYS_BATTLE_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_PLAYER_SYS_BATTLE_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_PLAYER_SYS_BATTLE_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_PLAYER_SYS_BATTLE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_PLAYER_SYS_BATTLE_INFO;
        }

        /** Properties of a CROSS_C_PLAYER_QUERY_INFO. */
        interface ICROSS_C_PLAYER_QUERY_INFO {

            /** CROSS_C_PLAYER_QUERY_INFO playerIds */
            playerIds?: ((number|Long)[]|null);
        }

        /** Represents a CROSS_C_PLAYER_QUERY_INFO. */
        class CROSS_C_PLAYER_QUERY_INFO implements ICROSS_C_PLAYER_QUERY_INFO {

            /**
             * Constructs a new CROSS_C_PLAYER_QUERY_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_PLAYER_QUERY_INFO);

            /** CROSS_C_PLAYER_QUERY_INFO playerIds. */
            public playerIds: (number|Long)[];

            /**
             * Encodes the specified CROSS_C_PLAYER_QUERY_INFO message. Does not implicitly {@link com.message.CROSS_C_PLAYER_QUERY_INFO.verify|verify} messages.
             * @param message CROSS_C_PLAYER_QUERY_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_PLAYER_QUERY_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_PLAYER_QUERY_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_PLAYER_QUERY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_PLAYER_QUERY_INFO;
        }

        /** Properties of a CROSS_S_PLAYER_QUERY_INFO. */
        interface ICROSS_S_PLAYER_QUERY_INFO {

            /** CROSS_S_PLAYER_QUERY_INFO playerIds */
            playerIds?: ((number|Long)[]|null);
        }

        /** Represents a CROSS_S_PLAYER_QUERY_INFO. */
        class CROSS_S_PLAYER_QUERY_INFO implements ICROSS_S_PLAYER_QUERY_INFO {

            /**
             * Constructs a new CROSS_S_PLAYER_QUERY_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_PLAYER_QUERY_INFO);

            /** CROSS_S_PLAYER_QUERY_INFO playerIds. */
            public playerIds: (number|Long)[];

            /**
             * Encodes the specified CROSS_S_PLAYER_QUERY_INFO message. Does not implicitly {@link com.message.CROSS_S_PLAYER_QUERY_INFO.verify|verify} messages.
             * @param message CROSS_S_PLAYER_QUERY_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_PLAYER_QUERY_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_PLAYER_QUERY_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_PLAYER_QUERY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_PLAYER_QUERY_INFO;
        }

        /** Properties of a C_PLAYER_BUY_TIMES. */
        interface IC_PLAYER_BUY_TIMES {

            /** C_PLAYER_BUY_TIMES buyType */
            buyType?: (number|null);
        }

        /** Represents a C_PLAYER_BUY_TIMES. */
        class C_PLAYER_BUY_TIMES implements IC_PLAYER_BUY_TIMES {

            /**
             * Constructs a new C_PLAYER_BUY_TIMES.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_PLAYER_BUY_TIMES);

            /** C_PLAYER_BUY_TIMES buyType. */
            public buyType: number;

            /**
             * Encodes the specified C_PLAYER_BUY_TIMES message. Does not implicitly {@link com.message.C_PLAYER_BUY_TIMES.verify|verify} messages.
             * @param message C_PLAYER_BUY_TIMES message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_PLAYER_BUY_TIMES, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_PLAYER_BUY_TIMES message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_PLAYER_BUY_TIMES
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_PLAYER_BUY_TIMES;
        }

        /** Properties of a S_PLAYER_BUY_TIMES. */
        interface IS_PLAYER_BUY_TIMES {

            /** S_PLAYER_BUY_TIMES buyType */
            buyType?: (number|null);

            /** S_PLAYER_BUY_TIMES buyTimes */
            buyTimes?: (number|null);
        }

        /** Represents a S_PLAYER_BUY_TIMES. */
        class S_PLAYER_BUY_TIMES implements IS_PLAYER_BUY_TIMES {

            /**
             * Constructs a new S_PLAYER_BUY_TIMES.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_PLAYER_BUY_TIMES);

            /** S_PLAYER_BUY_TIMES buyType. */
            public buyType: number;

            /** S_PLAYER_BUY_TIMES buyTimes. */
            public buyTimes: number;

            /**
             * Encodes the specified S_PLAYER_BUY_TIMES message. Does not implicitly {@link com.message.S_PLAYER_BUY_TIMES.verify|verify} messages.
             * @param message S_PLAYER_BUY_TIMES message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_PLAYER_BUY_TIMES, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_PLAYER_BUY_TIMES message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_PLAYER_BUY_TIMES
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_PLAYER_BUY_TIMES;
        }
    }
}
