import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>Search Page</h1>

      <input
        type="text"
        placeholder="Search"
        onChange={(e) =>
          setSearchParams({
            name: e.target.value,
          })
        }
      />

      <h2>
        Search: {searchParams.get("name")}
      </h2>
    </div>
  );
}

export default SearchPage;