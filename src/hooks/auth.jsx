import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/sessions",
        { email, password },
        { withCredentials: true }
      );
      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("It's not possible to signin");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    setData({});
    window.location.href = "/";
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    if (user && Object.keys(JSON.parse(user)).length > 0) {
      setData({
        user: JSON.parse(user),
      });
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
