import axios from "axios";

const API_BASE_URL = "http://localhost:4000";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth service
export const authService = {
  // Sign up
  async signUp(userData) {
    const response = await api.post("/student/signup", userData);
    return response.data;
  },

  // Sign in
  async signIn(email, password) {
    const response = await api.post("/auth/signin", { email, password });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  },

  // Verify email
  async verifyEmail(token) {
    const response = await api.post("/auth/verify-email", { token });
    return response.data;
  },

  // Forgot password
  async forgotPassword(email) {
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  },

  // Reset password
  async resetPassword(token, newPassword) {
    const response = await api.post("/auth/reset-password", {
      token,
      newPassword,
    });
    return response.data;
  },

  // Sign out
  signOut() {
    localStorage.removeItem("token");
  },
};

// User service
export const userService = {
  // Get user profile
  async getProfile() {
    const response = await api.get("/users/profile");
    return response.data;
  },

  // Update user profile
  async updateProfile(profileData) {
    const response = await api.put("/users/profile", profileData);
    return response.data;
  },

  // Upload profile picture
  async uploadProfilePicture(file) {
    const formData = new FormData();
    formData.append("profilePicture", file);
    const response = await api.post("/users/profile/picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};

// Chat service
export const chatService = {
  // Get chat history
  async getChatHistory() {
    const response = await api.get("/chat/history");
    return response.data;
  },

  // Send message
  async sendMessage(message) {
    const response = await api.post("/chat/message", { message });
    return response.data;
  },
};

// Error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error cases
    if (error.response?.status === 401) {
      authService.signOut();
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export default api;
