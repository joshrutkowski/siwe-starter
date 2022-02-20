// Iron Session support: https://github.com/vvo/iron-session

export const ironOptions = {
  cookieName: 'myapp_cookiename',
  password: 'complex_password_at_least_32_characters_long',
  cookieOptions: {
    maxAge: undefined,
    secure: process.env.NODE_ENV === 'production',
  },
};
