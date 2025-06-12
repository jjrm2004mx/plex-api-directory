import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError(t('messageLogin'));
      } else {
        setError(t('unexpectedError') || "Unexpected error");
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center text-sm">
            {error}
          </div>
        )}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {t('username') || "Username"}
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder={t('username') || "Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {t('password') || "Password"}
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder={t('password') || "Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors font-semibold"
        >
          {t('login') || "Login"}
        </button>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}