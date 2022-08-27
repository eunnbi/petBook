import { useRouter } from "next/router";
import HtmlHeader from "../components/common/HtmlHeader";
import TopNav from "../components/TopNav";

//
import SocialLogin from "../components/login/SocialLogin";
import EmailLogin from "../components/login/EmailLogin";

//
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

const Main = styled.main`
  height: calc(100vh - 61px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffbf4;
  h1 {
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 40px;
  }
`;

const NotLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b6b6b6;
  font-size: 20px;
  margin-bottom: 55px;
  svg {
    font-size: 55px;
    margin-bottom: 25px;
  }
`;

const LoginWrap = styled.div`
  width: 679px;
  margin: 0 auto;
  margin-top: 194px;
  position: relative;
  .login_title {
    p {
      margin-bottom: 8px;
    }
    h2 {
      margin-bottom: 32px;
    }
  }
  .login_form {
    margin-bottom: 20px;
    input {
      margin-bottom: 10px;
    }
  }
  .automatic_login {
    margin-bottom: 40px;
  }
  .action {
    font-size: 14px;
    color: #444;
    margin: 30px 0 102px 0;
    li {
      cursor: pointer;
      &:first-child {
        margin-right: 70px;
      }
    }
  }
  a {
    display: block;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
    border-radius: 12px;
    margin-bottom: 12px;
    box-sizing: border-box;
    &:last-child {
      margin-bottom: 0;
    }
    &.email {
      padding: 28px 0;
      background-color: var(--main);
      margin-bottom: 60px;
    }
    &.naver {
      background-color: #41d97e;
    }
    &.kakao {
      background-color: #ffc700;
    }
    &.google {
      background-color: #7270ff;
    }
  }
`;

const Login = () => {
  const router = useRouter();
  const isRedirect = router.query.redirect;
  return (
    <>
      <HtmlHeader />
      <TopNav />
      <Main>
        <LoginWrap>
          {isRedirect ? (
            <NotLogin>
              <BsCheckCircleFill />
              <p>로그인이 필요한 서비스입니다.</p>
            </NotLogin>
          ) : isRedirect === undefined ? (
            <>
              <div className="login_title">
                <p>이색동물 유저들의 소통공간, Petbook</p>
                <h2>로그인 후 다양한 콘텐츠를 즐겨보세요!</h2>
              </div>

              {/* 일반 로그인 영역 */}
              <EmailLogin />

              {/* 소셜 로그인 영역 */}
              <SocialLogin />

              <ul className="action flex center">
                <li>회원가입</li>
                <li>아이디/비밀번호 찾기</li>
              </ul>
            </>
          ) : (
            <>
              <h2>로그인 완료 / 홈으로 이동</h2>
            </>
          )}
        </LoginWrap>
      </Main>
    </>
  );
};

export default Login;
