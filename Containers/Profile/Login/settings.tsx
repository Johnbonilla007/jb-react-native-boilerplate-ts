export interface ResponseAthenticate {
  user: {
    userName: string;
    fullName: string;
    id: number;
  };
  message: string;
  validationErrorMessage: string;
  success: Boolean;
}

export interface RequestAthenticate {
  userName: string;
  password: string;
}

export interface ResponsePayload {}
