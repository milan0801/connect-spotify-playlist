import { redirectToAuthCodeFlow, getAccessToken, getTokenByRefresh } from "./authCodeWithPkce.js";


const clientId = "26aab99817c9450589f4c76ae70abf30";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const refreshToken = localStorage.getItem("refresh_token");

if (!code && refreshToken === 'undefined') {
    redirectToAuthCodeFlow(clientId);
} else if (refreshToken === 'undefined') {
    const accessToken = await getAccessToken(clientId, code);
} else {
    const accessToken = await getTokenByRefresh(clientId, refreshToken);
}

