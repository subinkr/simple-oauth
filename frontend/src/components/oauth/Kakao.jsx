import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/User";

export default () => {
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        const getAccessToken = async () => {
            if (code) {
                const response = await fetch(
                    "http://localhost:4000/auth/kakao/callback",
                    {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            code,
                        }),
                    }
                );
                const result = await response.json();
                setUser(result);
            }
        };
        getAccessToken();
        navigate("/");
    });
    return <div>Login to Kakao</div>;
};
