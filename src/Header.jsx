export function Header() {
  return (
    <div className="bg-gray-600 p-4">
      <p className="text-4xl font-extrabold ml-5 mt-2">
        <a href="/">Todo List</a>
      </p>
      <div className="flex mt-2 bg-red-700 w-16 text-white rounded-lg text-center">
        <p className="order-last">
          <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}
