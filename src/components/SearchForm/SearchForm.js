import "./SearchForm.css";

function SearchForm({
  onSearch,
  onChange,
  placeholder,
  buttonLabel,
  customClassName,
}) {
  function handleSearch(evt) {
    onSearch(evt);
  }

  function handleChange(evt) {
    onChange(evt);
  }

  return (
    <form
      className={`${customClassName ? `${customClassName} ` : ""}searchbar`}
      onSubmit={handleSearch}
    >
      <input
        className="searchbar__term"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      <button className="button searchbar__button">{buttonLabel}</button>
    </form>
  );
}

export default SearchForm;
