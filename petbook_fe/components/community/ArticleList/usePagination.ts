import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import navigator from "@lib/modules/navigator";

export const usePage = () => {
  const router = useRouter();
  const pageParam = Number(router.query?.page);
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  return currentPage;
};

export default function usePagination({
  totalPages,
  btnNum,
  basePath,
}: {
  totalPages: number;
  btnNum: number;
  basePath: string;
}) {
  const [offset, setOffset] = useState(1);
  const currentPage = usePage();
  const router = useRouter();
  const changeCurrentPage = (page: number) => {
    const params = new URLSearchParams(router.asPath.split("?")[1]);
    params.delete("page");
    const path =
      params.toString().length !== 0
        ? `${basePath}?${params.toString()}&page=${page}`
        : `${basePath}?page=${page}`;
    navigator({
      url: path,
      options: {
        shallow: true,
        scroll: true,
      },
    });
  };

  // currentPage가 1 ~ totalPages range에 존재하는지 판단
  useEffect(() => {
    if (totalPages === 0) return;
    if (currentPage < 1) {
      changeCurrentPage(1);
    } else if (currentPage > totalPages) {
      changeCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // currentPage 변화에 따른 button offset 판단
  useEffect(() => {
    if (currentPage >= offset + btnNum) {
      setOffset((oldOffset) => oldOffset + btnNum);
    } else if (currentPage < offset) {
      setOffset((oldOffset) => oldOffset - btnNum);
    }
  }, [currentPage]);

  return {
    currentPage,
    changeCurrentPage,
    offset,
  };
}
