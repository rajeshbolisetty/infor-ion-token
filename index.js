const axios = require("axios");

async function fetchAccessToken(url, clientId, secret, username, password) {
  try {
    const { data } = await axios.post(
      url,
      new URLSearchParams({
        grant_type: "password",
        username,
        password,
        client_id: clientId,
        client_secret: secret,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error("Failed to obtain access token");
  }
}

async function fetchRefreshToken(url, clientId, secret, refreshToken) {
  try {
    const { data } = await axios.post(
      url,
      new URLSearchParams({
        grant_type: "refresh_token",
        client_id: clientId,
        client_secret: secret,
        refresh_token: refreshToken,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error("Failed to obtain refresh token");
  }
}

module.exports = {
  fetchAccessToken,
  fetchRefreshToken,
};
