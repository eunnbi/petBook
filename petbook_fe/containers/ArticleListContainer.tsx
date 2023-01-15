import ArticleList from "@components/community/ArticleList";
import useArticleList from "@components/community/ArticleList/useArticleList";
import CategoryNav from "@components/community/CategoryNav";
import SearchBar from "@components/community/SearchBar";

const ArticleListContainer = () => {
  const { status, articles, totalPages, params } = useArticleList();
  const { searchText, categoryName } = params;
  return (
    <>
      <div className="heading">
        <h1>
          {searchText ? (
            <>
              <span>&ldquo;{searchText}&rdquo;에 대한 검색결과</span>
              <span>총 {status === "loading" ? "" : articles.length}개</span>
            </>
          ) : (
            categoryName
          )}
        </h1>
        <SearchBar />
      </div>
      {!searchText && <CategoryNav />}
      <ArticleList
        status={status}
        articles={articles}
        totalPages={totalPages}
      />
    </>
  );
};

export default ArticleListContainer;
