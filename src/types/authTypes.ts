export type UserType = {
  id: number;
  name: string;
  email: string;
  token: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type RegistrationRequestType = {
  name: string;
  email: string;
  password: string;
};
