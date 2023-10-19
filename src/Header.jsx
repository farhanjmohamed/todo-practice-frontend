import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <div className="bg-gray-600 p-4">
      <p className="text-4xl font-extrabold ml-5 mt-2">
        <a href="/">Todo List</a>
      </p>

      {localStorage.jwt === undefined ? (
        <>
          <div className="text-right">
            <a className=" mt-2 bg-red-700 w-16 text-white rounded-lg " href="/signup">
              Signup
            </a>
            <a className=" ml-2 bg-red-700 w-20 text-white rounded-lg" href="/login">
              Login
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="w-24">
            <LogoutLink />
          </div>
        </>
      )}
    </div>
  );
}
