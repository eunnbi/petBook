import RequestCore from "./RequestCore";

export default class UserAPI extends RequestCore {
  /**
   *
   * 유저 회원가입 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.email POST 할 이메일 입니다.
   * @param body.nickname POST 할 닉네임 입니다.
   * @param body.password POST 할 비밀번호 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 유저 토큰을 반환합니다.
   */
  public register = async (
    body: {
      email: string;
      nickname: string;
      password: string;
    },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/register",
      headerObj: config && config.headerObj,
    });
    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  /**
   *
   * 유저 이메일 체크 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.userId POST 할 이메일 입니다.
   */
  public registerCheckEmail = async (
    body: {
      userId: string;
    },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/${body.userId}/vetify-email`,
      headerObj: config && config.headerObj,
    });
    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  /**
   *
   * 유저 닉네임 체크 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.nickname POST 할 닉네임 입니다.
   */

  public registerCheckNickname = async (
    params: { nickname: string },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters<Nick>({
      uri: `/check-nickname-exist`,
      headerObj: config && config.headerObj,
      params,
    });
    const result = await this.getResult({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
interface Nick {
  nickname: string;
}
