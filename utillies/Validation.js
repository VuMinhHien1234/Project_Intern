//validate email
export const isValidEmail = (email) => {
    if (!email || typeof email !== "string") {
        return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
};


//validate password:
export const isValidPassword = (password) => {
    if (!password || typeof password !== "string") {
        return false;
    }
    return password.trim().length >= 3;
};