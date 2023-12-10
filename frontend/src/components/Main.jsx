import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../recoil/User";

const Wrapper = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const Title = styled.div`
    padding: 40px 0;
    font-size: 36px;
    font-weight: bold;
`;

const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const Button = styled.button`
    width: 200px;
    height: 100px;
    font-size: 24px;
`;

export default () => {
    const user = useRecoilValue(userState);
    const github = () => {
        window.open(
            "https://github.com/login/oauth/authorize" +
                `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`,
            "_self"
        );
    };

    const google = () => {
        window.open(
            "https://accounts.google.com/o/oauth2/v2/auth" +
                `?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}` +
                `&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT}` +
                "&response_type=token" +
                "&scope=https://www.googleapis.com/auth/userinfo.email",
            "_self"
        );
    };

    const kakao = () => {
        window.open(
            "https://kauth.kakao.com/oauth/authorize" +
                `?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}` +
                `&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT}` +
                "&response_type=code",
            "_self"
        );
    };

    return (
        <Wrapper>
            <Title>유저 소셜 아이디: {user.id}</Title>
            <LoginWrapper>
                <Button onClick={github}>Github</Button>
                <Button onClick={google}>Google</Button>
                <Button onClick={kakao}>Kakao</Button>
            </LoginWrapper>
        </Wrapper>
    );
};
