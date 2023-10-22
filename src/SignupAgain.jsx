export function SignupAgain() {
  return (
    <section>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-auto bg-slate-200">
        <main className="bg-blue-600 flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                id="Name"
                name="name"
                className="mt-1 w-full rounded-md border-blue-200 border-2 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                className="mt-1 w-full rounded-md border-blue-200 border-2  bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                className="mt-1 w-full rounded-md border-blue-200 border-2  bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                className="mt-1 w-full rounded-md border-blue-200 border-2  bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                type="submit"
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

              <p className="mt-4 text-sm text-slate-600 sm:mt-0">
                Already have an account?
                <br />
                <a href="/login" className="text-gray-700 underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
}
