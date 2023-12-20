import { redirectToAuthCodeFlow, getAccessToken, getTokenByRefresh } from './authCodeWithPkce';

export default async function login() {
  const clientId = "1a9eecf6542b49128c910e3583fde33e";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const refreshToken = localStorage.getItem("refresh_token");

  let accessToken;
  if (refreshToken && refreshToken !== 'undefined') {
    accessToken = await getTokenByRefresh(clientId, refreshToken);
  } else if (!code) {
    await redirectToAuthCodeFlow(clientId);
  } else {
    accessToken = await getAccessToken(clientId, code);
  } 
  return accessToken;
}
