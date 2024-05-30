import "./IconButton.css";

function IconButton({ onClick, iconPath, customClassName }) {
  function handleClick(evt) {
    onClick(evt);
  }

  return (
    <button
      className={`icon-button${customClassName ? ` ${customClassName}` : ""}`}
      onClick={handleClick}
    >
      <div className="icon-button__content">
        <img
          className="icon-button__icon"
          alt="button icon"
          src={iconPath}
        ></img>
      </div>
    </button>
  );
}

export default IconButton;
