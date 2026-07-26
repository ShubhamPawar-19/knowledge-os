export class StorageError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "StorageError";
  }
}

export class InvalidFileError extends StorageError {
  constructor(message: string) {
    super(message);
    this.name = "InvalidFileError";
  }
}

export class UploadFailedError extends StorageError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "UploadFailedError";
  }
}

export class DeleteFailedError extends StorageError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "DeleteFailedError";
  }
}