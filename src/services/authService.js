const SESSION_TIMEOUT = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
// Replace the above line with `process.env.VUE_APP_SESSION_TIMEOUT` to get the value from .env file

export const authService = {
  // Check if the user is authenticated by verifying the existence of the auth token in local storage
  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    const expiryTime = localStorage.getItem('expiryTime');
    if (token && expiryTime) {
      const now = new Date().getTime();
      if (now > expiryTime) {
        this.logout(); // Session has expired
        return false;
      }
      return true;
    }
    return false;
  },

  // Login method: Tries to authenticate the user using hardcoded credentials first, then falls back to backend service
  async login(username, password) {
    // HARD-CODED CREDENTIALS
    // The following block is for development purposes. It allows logging in with hardcoded credentials.
    // Replace or remove this section for production.
    if (username === 'test' && password === 'Vietnix@2024') {
      // Simulate a successful response from the backend
      const fakeJwt = 'fake-jwt-token';
      const now = new Date().getTime();
      const expiryTime = now + SESSION_TIMEOUT;
      localStorage.setItem('authToken', fakeJwt);
      localStorage.setItem('expiryTime', expiryTime);
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
        const now = new Date().getTime();
        const expiryTime = now + SESSION_TIMEOUT;
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('expiryTime', expiryTime);
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
    localStorage.removeItem('expiryTime');
  },
};
