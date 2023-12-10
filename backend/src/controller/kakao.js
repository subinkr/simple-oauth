const kakao = async (req, res) => {
    const { code } = req.body;
    const kakaoTokenResponse = await fetch(
        "https://kauth.kakao.com/oauth/token",
        {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT}&code=${code}`,
        }
    );
    const kakaoTokenResult = await kakaoTokenResponse.json();

    const kakaoAccessToken = kakaoTokenResult.access_token;
    const response = await fetch("https://kapi.kakao.com/v2/user/me", {
        method: "get",
        headers: {
            Authorization: `Bearer ${kakaoAccessToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
    });
    const result = await response.json();

    res.json(result);
};

module.exports = { kakao };
