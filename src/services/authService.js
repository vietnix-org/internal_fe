// src/services/authService.js

// Authentication Service
// This service handles user authentication, including JWT token storage and validation.

export const authService = {
  // Check if the user is authenticated by verifying the existence of the auth token in local storage
  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },

  // Login method: Tries to authenticate the user using hardcoded credentials first, then falls back to backend service
  async login(username, password) {
    // HARD-CODED CREDENTIALS
    // The following block is for development purposes. It allows logging in with hardcoded credentials.
    // Replace or remove this section for production.
    if (username === 'test' && password === 'Vietnix@2024') {
      // Simulate a successful response from the backend
      const fakeJwt = 'fake-jwt-token';
      localStorage.setItem('authToken', fakeJwt);
      return { success: true, token: fakeJwt };
    }

    // BACKEND SERVICE CALL
    // Attempt to authenticate with the backend service using the provided username and password
    try {
      const response = await fetch('YOUR_BACKEND_LOGIN_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // If the backend responds with a token, store it in local storage
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        return { success: true, token: data.token };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Error during login:', error);
      return { success: false };
    }
  },

  // Logout method: Removes the auth token from local storage
  logout() {
    localStorage.removeItem('authToken');
  },
};
