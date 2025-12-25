export const generateRandomEmail = () => {
    return `testuser_${Math.floor(Math.random() * 100000)}@example.com`;
};

export const generatePassword = () => {
    return 'Password123!';
};

export const getAuthToken = () => {
    // Logic to retrieve token if stored or needed
    return localStorage.getItem('token');
}
