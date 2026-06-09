import { useRef } from "react";

function Profile() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Profile Page</h1>

      <input
        ref={inputRef}
        placeholder="Enter Name"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default Profile;