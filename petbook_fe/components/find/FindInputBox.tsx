import { registerFormState } from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";

import { IconBox, InputBox } from "./style/styledFindSubmit";

interface LoginProps {
  current: string;
  axiosValue: string;
  IconType: string;
}

const FindInputBox = ({ current, axiosValue, IconType }: LoginProps) => {
  // const setLoginForm = useSetRecoilState(registerFormState);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    // setLoginForm((user) => ({
    //   ...user,
    //   [`${axiosValue}`]: e.target.value,
    // }));
  };

  return (
    <div>
      <InputBox>
        <IconBox>
          <div className={`${IconType}`} />
        </IconBox>
        <label htmlFor={`${current}`}>
          <input
            type={`${axiosValue}`}
            id={`${current}`}
            placeholder={`${current}을 입력해주세요 `}
            onChange={onChange}
          />
        </label>
      </InputBox>
    </div>
  );
};
export default FindInputBox;
