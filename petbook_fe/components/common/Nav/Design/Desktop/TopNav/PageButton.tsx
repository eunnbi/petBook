import { PropsWithChildren } from "react";
import styled from "styled-components";

const PageButtonA = styled.a`
  height: 100%;
  padding: 0 35px;

  transition: all 0.3s ease-in-out;

  font-size: 1rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);

  background: #fff;

  outline: none;
  border: none;

  white-space: nowrap;

  .Page__Button__Text {
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: content-box;

    height: calc(100% - 4px);

    ${(props: PageButtonProps) =>
      props.isCurrentPage
        ? {
            fontWeight: "bold",
            color: "#FF2E00",
            borderBottom: "4px solid #ff2e00",
          }
        : ""}
  }

  &:hover {
    opacity: 0.5;
    color: #ff2e00;
  }
`;

type PageButtonProps = {
  isCurrentPage?: boolean;
};

const PageButton = (props: PropsWithChildren<PageButtonProps>) => {
  const { children } = props;

  return (
    <PageButtonA {...props}>
      <span className="Page__Button__Text">{children}</span>
    </PageButtonA>
  );
};

PageButton.defaultProps = {
  isCurrentPage: undefined,
};

export default PageButton;
