import LinkedNavBar from "../Core/LinkedNavBar";

type NavMenuProps = {
  InputWrap: JSX.Element;
  InputLeftSide?: JSX.Element;
  InputMenu: JSX.Element;
  InputButton: JSX.Element;
  InputRightSide?: JSX.Element;

  to: string | string[];
  name: string | string[];
  currentPath?: string;

  rightSideTo: string | string[];
  rightSideName?: string | string[];
  rightSideCurrentPath?: string;
};

const NavMenu = ({
  InputWrap,
  InputLeftSide,
  InputMenu,
  InputButton,
  InputRightSide,

  to,
  name,
  currentPath,

  rightSideTo,
  rightSideName,
  rightSideCurrentPath,
}: NavMenuProps) => {
  return (
    <LinkedNavBar>
      <LinkedNavBar.Wrap as={InputWrap}>
        <LinkedNavBar.LeftSide as={InputLeftSide} />
        <LinkedNavBar.Menu as={InputMenu}>
          {typeof to === "string" && typeof name === "string" ? (
            <LinkedNavBar.Button
              as={InputButton}
              to={to}
              value={name}
              currentPath={currentPath}
            />
          ) : (
            typeof to === "object" &&
            typeof name === "object" &&
            to.map((page, idx) => (
              <LinkedNavBar.Button
                key={`${page}_${name[idx]}`}
                as={InputButton}
                to={page}
                value={name[idx]}
                currentPath={currentPath}
              />
            ))
          )}
        </LinkedNavBar.Menu>
        <LinkedNavBar.RightSide
          as={InputRightSide}
          to={rightSideTo}
          value={rightSideName}
          currentPath={rightSideCurrentPath}
        />
      </LinkedNavBar.Wrap>
    </LinkedNavBar>
  );
};

NavMenu.defaultProps = {
  InputLeftSide: <></>,
  InputRightSide: <></>,
  currentPath: "",
  rightSideName: "",
  rightSideCurrentPath: "",
};

export default NavMenu;
