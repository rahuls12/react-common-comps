import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const handleClick = (e) => {
    // the if condition is for when someone wants to open a new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
