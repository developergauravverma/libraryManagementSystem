export type User = {
  _id: string;
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  firstName: string;
  lasteName: string;
  email: string;
  password: string;
};

export interface loginUserPayload {
  email: string;
  password: string;
}

export interface RegisterUserPayload {
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
