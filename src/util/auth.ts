// import { jwtDecode } from 'jwt-decode';

const setUser = (profile: any) => {
	localStorage.setItem('user', JSON.stringify(profile));
};
const setToken = (token: string) => {
	window.localStorage.setItem('token', token);
};

const setRefreshToken = (token: string) => {
	window.localStorage.setItem('refreshToken', token);
};

const getToken = () => {
	if (typeof window !== 'undefined') {
		return window.localStorage.getItem('token');
	}
};

const getRefreshToken = () => {
	return window.localStorage.getItem('refresh-token');
};

const getDecodedJwt = () => {
	try {
		const token = getToken();
		// return jwtDecode(token!);
	} catch (e) {
		return {};
	}
};

const logOut = () => {
	window.localStorage.clear();
	window.location.replace("/");
};

const isAuthenticated = () => {
	try {
		// const decodedToken = getDecodedJwt();

		// const { exp } = decodedToken;
		// const currentTime = Date.now() / 1000;

    // exp! > currentTime;
		return getToken() != null;
	} catch (e) {
		return false;
	}
};

const Auth = {
	isAuthenticated,
	getDecodedJwt,
	setToken,
	setUser,
	getToken,
	setRefreshToken,
	getRefreshToken,
	logOut,
};

export default Auth;
