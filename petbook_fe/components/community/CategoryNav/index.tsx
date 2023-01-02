import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import useCategories from "@lib/hooks/article/useCategories";
import useActiveCategory from "@lib/hooks/article/useActiveCategory";
import navigator from "@lib/modules/navigator";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import { CategoryNavDiv, CategoryNavButton } from "./styled";

const CategoryNav = () => {
  const { categories, status } = useCategories({ all: true });
  const { categoryName } = useActiveCategory();
  const onClick = (category: CategoryItem) => () => {
    navigator(getHrefWithCategory(category), undefined, {
      shallow: true,
    });
  };
  return (
    <CategoryNavDiv>
      {status === "success"
        ? categories.map((category) => (
            <CategoryNavButton
              key={category.id}
              onClick={onClick(category)}
              active={categoryName === category.name ? "true" : ""}
            >
              {category.name}
            </CategoryNavButton>
          ))
        : null}
    </CategoryNavDiv>
  );
};

export default CategoryNav;