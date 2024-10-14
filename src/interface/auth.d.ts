// Define the type for the login form data
interface LoginForm {
  username: string;
  password: string;
}

// Define the type for the user data
interface User {
  nama: string;
  username: string;
  roles: string;
  uniqueId: string;
}

interface LoginResponseData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

// Define the type for the response data
interface LoginResponse {
  status: boolean;
  message: string;
  data: LoginResponseData;
}
