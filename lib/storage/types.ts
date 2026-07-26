export interface UploadFileInput {
  key: string;
  body: Buffer | Uint8Array;
  contentType: string;
}

export interface DeleteFileInput {
  key: string;
}