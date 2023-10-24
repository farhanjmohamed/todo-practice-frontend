import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <div className="bg-gray-300 ">
      <p className="text-4xl text-black font-extrabold ml-5 pt-4">
        <a href="/">Todo List</a>
      </p>

      {localStorage.jwt === undefined ? (
        <>
          <div className="flex justify-end pb-2 pr-2">
            <a className=" bg-red-700 w-16 text-center text-white rounded-lg " href="/signup">
              Signup
            </a>
            <a className=" ml-2 bg-red-700 w-16 text-center text-white rounded-lg" href="/login">
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
