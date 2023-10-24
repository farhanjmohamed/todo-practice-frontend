export function Footer() {
  return (
    <div>
      <footer className="bg-slate-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-center">
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Todo List &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
