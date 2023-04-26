export interface Authenticated extends Request {
	user?: { email: string; role: string; scopes: Array<string> };
}
