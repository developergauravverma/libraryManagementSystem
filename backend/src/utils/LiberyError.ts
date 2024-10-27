export class UnableToSaveUserError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class UnableUsernameOrPasswordError extends Error {
  constructor(message: string) {
    super(message);
  }
}
