import axios from "axios";

export function LogoutLink() {
  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a href="#" className="bg-red-500 rounded-lg w-16 text-center" onClick={handleLogoutClick}>
      Logout
    </a>
  );
}
