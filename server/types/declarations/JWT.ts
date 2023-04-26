export interface Authenticated extends Request {
	user?: { id: string; role: string; scopes: Array<string> };
}
