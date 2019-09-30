export interface ResponseDto<T> {

  status: string;
  message: string;
  payload: T;

}
