export function resFun(
  status: Number,
  data: String,
  dataObj: Object,
  error: false
) {
  return [{ status, data, dataObj, error }];
}

export function userGet(status: Number, dataObj: object, error: false) {
  return [{ status, dataObj, error }];
}

export function errFun(status: Number, errorMsg: any, error: true) {
  return [{ status, errorMsg, error }];
}
