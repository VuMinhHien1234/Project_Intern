//validate email
export const isValidEmail = (email: string) => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
};

//validate password:
export const isValidPassword = (password: string) => {
  if (!password || typeof password !== 'string') {
    return false;
  }
  return password.trim().length >= 3;
};
