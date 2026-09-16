// not generated file :p
import spacepack from "@moonlight-mod/wp/spacepack_spacepack";
import type {
	BinaryReadOptions,
	BinaryWriteOptions,
	IBinaryReader,
	IBinaryWriter,
	PartialMessage,
} from "@protobuf-ts/runtime";
import { MessageType, reflectionMergePartial, UnknownFieldHandler, WireType } from "@protobuf-ts/runtime";
import { Favorites } from "./webpackModules/favourites";

export interface CustomUserSettings {
	versions?: CustomUserSettings_Versions;
	settings?: CustomUserSettings_ClientSettings;
}

export interface CustomUserSettings_Versions {
	clientVersion: number;
	serverVersion: number;
	dataVersion: number;
}

export interface CustomUserSettings_ClientSettings {
	favorites?: any;
}

class CustomUserSettings$Type extends MessageType<CustomUserSettings> {
	constructor() {
		super("CustomUserSettings", [
			{ no: 1, name: "versions", kind: "message", T: () => CustomUserSettings_Versions },
			{ no: 2, name: "settings", kind: "message", T: () => CustomUserSettings_ClientSettings },
		]);
	}

	create(value?: PartialMessage<CustomUserSettings>): CustomUserSettings {
		const message = globalThis.Object.create(this.messagePrototype!);
		if (value !== undefined) reflectionMergePartial<CustomUserSettings>(this, message, value);
		return message;
	}

	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: CustomUserSettings,
	): CustomUserSettings {
		let message = target ?? this.create(),
			end = reader.pos + length;
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag();
			switch (fieldNo) {
				case /* optional CustomUserSettings.Versions versions */ 1:
					message.versions = CustomUserSettings_Versions.internalBinaryRead(
						reader,
						reader.uint32(),
						options,
						message.versions,
					);
					break;
				case /* optional CustomUserSettings.ClientSettings settings */ 2:
					message.settings = CustomUserSettings_ClientSettings.internalBinaryRead(
						reader,
						reader.uint32(),
						options,
						message.settings,
					);
					break;
				default:
					let u = options.readUnknownField;
					if (u === "throw") {
						throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
					}
					let d = reader.skip(wireType);
					if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
			}
		}
		return message;
	}
	internalBinaryWrite(message: CustomUserSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
		/* optional CustomUserSettings.Versions versions = 1; */
		if (message.versions) {
			CustomUserSettings_Versions.internalBinaryWrite(
				message.versions,
				writer.tag(1, WireType.LengthDelimited).fork(),
				options,
			).join();
		}
		/* optional CustomUserSettings.ClientSettings settings = 2; */
		if (message.settings) {
			CustomUserSettings_ClientSettings.internalBinaryWrite(
				message.settings,
				writer.tag(2, WireType.LengthDelimited).fork(),
				options,
			).join();
		}
		let u = options.writeUnknownFields;
		if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
		return writer;
	}
}

export const CustomUserSettings = new CustomUserSettings$Type();

class CustomUserSettings_Versions$Type extends MessageType<CustomUserSettings_Versions> {
	constructor() {
		super("CustomUserSettings.Versions", [
			{ no: 1, name: "client_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
			{ no: 2, name: "server_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
			{ no: 3, name: "data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
		]);
	}
	create(value?: PartialMessage<CustomUserSettings_Versions>): CustomUserSettings_Versions {
		const message = globalThis.Object.create(this.messagePrototype!);
		message.clientVersion = 0;
		message.serverVersion = 0;
		message.dataVersion = 0;
		if (value !== undefined) reflectionMergePartial<CustomUserSettings_Versions>(this, message, value);
		return message;
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: CustomUserSettings_Versions,
	): CustomUserSettings_Versions {
		let message = target ?? this.create(),
			end = reader.pos + length;
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag();
			switch (fieldNo) {
				case /* uint32 client_version */ 1:
					message.clientVersion = reader.uint32();
					break;
				case /* uint32 server_version */ 2:
					message.serverVersion = reader.uint32();
					break;
				case /* uint32 data_version */ 3:
					message.dataVersion = reader.uint32();
					break;
				default:
					let u = options.readUnknownField;
					if (u === "throw") {
						throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
					}
					let d = reader.skip(wireType);
					if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
			}
		}
		return message;
	}
	internalBinaryWrite(
		message: CustomUserSettings_Versions,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		/* uint32 client_version = 1; */
		if (message.clientVersion !== 0) writer.tag(1, WireType.Varint).uint32(message.clientVersion);
		/* uint32 server_version = 2; */
		if (message.serverVersion !== 0) writer.tag(2, WireType.Varint).uint32(message.serverVersion);
		/* uint32 data_version = 3; */
		if (message.dataVersion !== 0) writer.tag(3, WireType.Varint).uint32(message.dataVersion);
		let u = options.writeUnknownFields;
		if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
		return writer;
	}
}

export const CustomUserSettings_Versions = new CustomUserSettings_Versions$Type();

class CustomUserSettings_ClientSettings$Type extends MessageType<CustomUserSettings_ClientSettings> {
	constructor() {
		super("CustomUserSettings.ClientSettings", [
			{ no: 74022981, name: "favorites", kind: "message", T: () => Favorites },
		]);
	}
	create(value?: PartialMessage<CustomUserSettings_ClientSettings>): CustomUserSettings_ClientSettings {
		const message = globalThis.Object.create(this.messagePrototype!);
		if (value !== undefined) reflectionMergePartial<CustomUserSettings_ClientSettings>(this, message, value);
		return message;
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: CustomUserSettings_ClientSettings,
	): CustomUserSettings_ClientSettings {
		let message = target ?? this.create(),
			end = reader.pos + length;
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag();
			switch (fieldNo) {
				case 74022981:
					message.favorites = Favorites.internalBinaryRead(
						reader,
						reader.uint32(),
						options,
						message.favorites,
					);
					break;
				default:
					let u = options.readUnknownField;
					if (u === "throw") {
						throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
					}
					let d = reader.skip(wireType);
					if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
			}
		}
		return message;
	}
	internalBinaryWrite(
		message: CustomUserSettings_ClientSettings,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		if (message.favorites) {
			Favorites.internalBinaryWrite(
				message.favorites,
				writer.tag(74022981, WireType.LengthDelimited).fork(),
				options,
			).join();
		}
		let u = options.writeUnknownFields;
		if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
		return writer;
	}
}

export const CustomUserSettings_ClientSettings = new CustomUserSettings_ClientSettings$Type();
