export class IError extends Error {
	code: number;
	location: string | undefined;
	constructor(message: string, code: number, location?: string) {
		super(message);
		this.code = code;
		this.location = location;
	}
}