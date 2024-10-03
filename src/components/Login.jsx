
export default function Login({ isLogged, handleLogin }) {

    return (
        <>
            <div className="flex gap-4 items-center">
                {isLogged && <p>Olá, Usuario.</p>}
                <button onClick={handleLogin} className={`bg-${isLogged ? "white" : "bg-blue-500"} text-purple-800 px-4 py-1 rounded`} >
                    {isLogged ? "Logout" : "Login"}
                </button>
            </div>
        </>
    )
}