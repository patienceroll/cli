/** 通用接口返回数据格式 */
export type BaseResponse<T> = {
  status: number;
  data: T;
  msg?: string;
};

/** 分页数据返回格式 */
export type PagingResponse<T> = {
  totalCount: number;
  pageSize: number;
  totalPage: number;
  currentPage: number;
  list: T[];
};

type Method = "GET" | "POST" | "PUT" | "DELETE" | "FORM_DATA";

/** 请求函数类型 */
export type ToFetch = <T>(
  url: string,
  params: any,
  method: Method,
  headers?: { [key: string]: any }
) => Promise<T>;

/** 对象转换为字符串 */
const objectToString = (object: { [key: string]: any }) => {
  const List = Object.keys(object);
  let value = "";
  List.forEach(
    (item) => (value = value.concat(`${item}=${String(object[item])}&`))
  );
  return value;
};

const toFetch: ToFetch = (url, params, method, header = {}) => {
  let fetchUrl = url;
  const requestInit: RequestInit = {
    method,
    headers: header,
  };

  /** 除了form_data 形式或者传入的header里面有content-type的情况,设置content_type */
  if (method !== "FORM_DATA" || !header["content-type"]) {
    requestInit.headers = {
      ...requestInit.headers,
      "content-type": "application/json",
    };
  }

  if (method === "GET") {
    fetchUrl = fetchUrl + objectToString(params) + "_=" + new Date().getTime();
  }

  if (method === "DELETE") {
    requestInit.body = JSON.stringify({ ...params, _: new Date().getTime() });
  }

  if (method === "FORM_DATA") {
    requestInit.method = "POST";
    requestInit.body = params;
  }

  if (method === "POST" || method === "PUT") {
    requestInit.body = JSON.stringify(params);
  }

  return fetch(fetchUrl, requestInit)
    .then((response) => {
      try {
        return response.json();
      } catch (e) {
        throw new Error(`${response.status},${response.statusText}`);
      }
    })
    .then((response) => {
      if (response.status === 0) return response;
      return Promise.reject();
    });
};

export default toFetch;
