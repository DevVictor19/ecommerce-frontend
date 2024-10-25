export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type SignupRequest = {
  username: string;
  email: string;
  password: string;
};
