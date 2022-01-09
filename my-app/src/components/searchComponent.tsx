interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBar = ({ searchValue, setSearchValue }: Props) => (
  <input
    data-test="Event-search"
    value={searchValue}
    onChange={(event) => setSearchValue(event.target.value)}
  />
);

export default SearchBar;

