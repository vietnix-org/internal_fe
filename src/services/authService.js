const SESSION_TIMEOUT = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
// Note: Replace the above line with `process.env.VUE_APP_SESSION_TIMEOUT` to get the value from .env file

export const authService = {
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

  getRole() {
    return localStorage.getItem('userRole');
  },

  async login(username, password) {
    // HARD-CODED CREDENTIALS
    if (username === 'test' && password === 'Vietnix@2024') {
      const fakeJwt = 'fake-jwt-token';
      const now = new Date().getTime();
      const expiryTime = now + SESSION_TIMEOUT;
      localStorage.setItem('authToken', fakeJwt);
      localStorage.setItem('expiryTime', expiryTime);
      localStorage.setItem('userRole', 'admin'); // Set the role to admin for testing
      return { success: true, token: fakeJwt };
    }

    // BACKEND SERVICE CALL
    try {
      const response = await fetch('BACKEND_LOGIN_URL', {
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

      if (data.token) {
        const now = new Date().getTime();
        const expiryTime = now + SESSION_TIMEOUT;
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('expiryTime', expiryTime);
        localStorage.setItem('userRole', data.role); // Store the user role from backend
        return { success: true, token: data.token };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Error during login:', error);
      return { success: false };
    }
  },

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('expiryTime');
    localStorage.removeItem('userRole');
  },
};
