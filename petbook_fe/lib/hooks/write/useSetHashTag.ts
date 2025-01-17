import writeState from "@atoms/pageAtoms/community/writeState";
import { itrRemove } from "@lib/utils/iterableFunctions";
import localConsole from "@lib/utils/localConsole";
import { setterError } from "@lib/utils/recoilSetterHandler";
import replaceAll from "@lib/utils/replaceAll";
import React from "react";
import { useSetRecoilState } from "recoil";

// TODO : setWrite 안에 있어 가독성이 떨어지는 코드들 리팩터링
const useSetHashTag = (
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // const [inputHash, setWrite] = useSelectorState(writeState, {
  //   inputHash: "",
  // });

  const setWrite = useSetRecoilState(writeState);

  let removeTag: (textValue: string) => void;
  let setTags: (textValue: string) => void = () => undefined;

  removeTag = (textValue: string) => {
    setWrite((write) => {
      return {
        ...write,
        inputHash: itrRemove((tag) => tag === textValue, write.inputHash),
      };
    });
  };

  if (setIsError) {
    setTags = (textValue: string) => {
      setWrite((write) => {
        const hashFilter = textValue.includes("#")
          ? replaceAll(textValue, "#", "")
          : textValue;

        const addTag = hashFilter.trim().split(" ").join("");

        // 중복 필터링
        // 5개 제한
        // 15글자 제한
        // 공백 필터링

        if (
          write.inputHash.find((hashTag) => hashTag === addTag) ||
          write.inputHash.length >= 5 ||
          textValue.length > 15
        ) {
          setterError(write, setIsError);

          return {
            ...write,
            inputHash: [...write.inputHash],
          };
        }

        return {
          ...write,
          inputHash: [...write.inputHash, addTag],
        };
      });
    };
  }

  return { removeTag, setTags };
};

export default useSetHashTag;
