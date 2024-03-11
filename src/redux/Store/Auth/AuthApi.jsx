const API_BASE_URL = 'https://connections-api.herokuapp.com';

export async function loginAPI(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
}

export async function registerAPI(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to register');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering:', error.message);
    throw error;
  }
}

export async function logoutAPI() {
  try {
    const response = await fetch(`${API_BASE_URL}/users/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to logout');
    }
  } catch (error) {
    console.error('Error logging out:', error.message);
    throw error;
  }
}
