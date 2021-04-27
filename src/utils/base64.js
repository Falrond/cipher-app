export const Encrypt = input => {
  return btoa(input);
};

export const Decrypt = input => {
  return atob(input);
};
