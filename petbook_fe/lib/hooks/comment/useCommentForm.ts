import commentState from "@atoms/pageAtoms/community/commentState";
import localConsole from "@lib/utils/localConsole";
import { COMMENT_CREATE } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { MutableRefObject, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useSetResource } from "../common/useResource";

export default function useCommentForm({ initialContent, textareaRef } : {
  initialContent: string,
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>
}) {
    const router = useRouter();
    const setComment = useSetRecoilState(commentState);
    const { mutate: createComment, isSuccess: isCreateSuccess } = useSetResource(COMMENT_CREATE);
    const onChange = (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { value } = e.target;
      setComment((comment) => ({ ...comment, content: value }));
    };

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { articleId } = router.query as { articleId: string };
        setComment((comment) => {
          const { content, commentId, parentId } = comment;
          localConsole.log(`content: ${content}, commentId: ${commentId || "null"}, parentId: ${parentId || "null"}, articleId: ${articleId}`);
          if (content === "") return comment;
          if (commentId === null) {
            // comment_create
            // createComment({ content, parentId, articleId: Number(articleId) });
          } else {
            // comment_update
          }
          if (textareaRef.current != null) textareaRef.current.value = "";
          return { content: "", commentId: null, parentId: null };
        });
    };
    useEffect(() => {
        if (initialContent !== "") setComment((comment) => ({ ...comment, content: initialContent }));
    }, []);
    return { onChange, onSubmit };
}
