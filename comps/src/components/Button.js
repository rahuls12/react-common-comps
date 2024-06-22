import PropTypes from "prop-types";
import className from "classnames";
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  outline,
  rounded,
  warning,
  ...rest
}) {

  const classes = twMerge(className('flex item-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white text-blue': outline && primary,
    'bg-white text-gray': outline && secondary,
    'bg-white text-green': outline && success,
    'bg-white text-yellow': outline && warning,
    'bg-white text-red': outline && danger,
  }))
  return (
    <button {...rest} className={classes}>
      {children || "blue"}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const counter =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (counter > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
