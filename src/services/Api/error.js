export class ErrorResponse {
  constructor({graphQLErrors, networkError})  {
    this._graphQLErrors = graphQLErrors;
    this._networkError = networkError;
  }

  static fromRaw(error) {
    return new ErrorResponse(error);
  }

  errors() {
    return [
      ...this._graphQLErrors,
      ...(this._networkError? this._networkError.result.errors : []),
    ];	
  }

  errorMessages() {
    return this.errors().map(({message}) => message);
  }
}
