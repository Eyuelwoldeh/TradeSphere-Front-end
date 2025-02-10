import { useState, useContext } from "react";
import { login } from "../../api/authApi";
import { UserContext }  from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login: loginUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await login(email, password);
            loginUser(userData);
            navigate("/messages"); // Redirect after login
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
}

export default Login;