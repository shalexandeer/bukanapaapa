import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { setAuthLocalStorageData } from "../utils/storage";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  token: string;
  user: User;
  login: (data: LoginResponseData) => void;
  logout: () => void;
  register: (data: { data: User; token: string }) => void;
  updateProfileAuth: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    nama: "",
    username: "",
    roles: "",
    uniqueId: "",
  });

  const [token, setToken] = useState<string>(
    localStorage.getItem("access_token") || "",
  );

  const navigate = useNavigate();

  const login = (data: LoginResponseData) => {
    const { user, accessToken, refreshToken } = data;

    setAuthLocalStorageData(
      "set",
      JSON.stringify(user),
      refreshToken,
      accessToken,
    );
    setToken(accessToken);
    setUser(user);
  };

  const updateProfileAuth = (data: Partial<User>) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const register = ({ data, token }: { data: User; token: string }) => {
    setUser(data);
    setToken(token);
    navigate(-1 || "/");
  };

  const logout = () => {
    setUser({ nama: "", username: "", roles: "", uniqueId: "" });
    setToken("");

    setAuthLocalStorageData("remove");
    navigate("/auth/login");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("access_token");
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, register, updateProfileAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
