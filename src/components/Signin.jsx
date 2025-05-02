
export default function Signin (){
    return(
        <div>
            <form>
                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300 ease"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}
