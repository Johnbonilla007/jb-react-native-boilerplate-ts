import { isNull, isUndefined } from "lodash";

export const getUrl = () => {
  const env = window.location?.host;

  switch (env) {
    case "localhost:8081":
      return "http://192.168.0.27:44317/api/v2";

    default:
      return "http://192.168.0.27:44317/api/v2";
  }
};

export const getRequestUserInfo = () => {
  // let userInfo = sessionStorage.getItem("userInfo");
  // if (userInfo) {
  //   userInfo = JSON.parse(userInfo);

  //   return userInfo;
  // }

  return {};
};

export const getRequestUserInfoByService = (): {
  modifiedBy?: string;
  createdBy?: string;
} => {
  // let userInfo = sessionStorage.getItem("userInfo");

  // if (userInfo) {
  //   const parsedUserInfo = JSON.parse(userInfo) as { userName: string };

  //   return {
  //     modifiedBy: parsedUserInfo.userName,
  //     createdBy: parsedUserInfo.userName,
  //   };
  // }

  return {};
};

export const getRequestUserInfoSecurityObjects = () =>
  // sessionStorage.securityObjects
  //   ? JSON.parse(sessionStorage.securityObjects)
  [];

export const getLoggedUserName = ""; //sessionStorage.userName;
const _isArray = (value: any): value is any[] => Array.isArray(value);
const _isString = (value: any): value is string => typeof value === "string";
const _isNumber = (value: any): value is number => typeof value === "number";

export const objectParametize = (
  obj: Record<string, any>,
  q: boolean,
  parent?: string
): string => {
  const str: string[] = [];
  const delimiter = "&";
  let objKey: string | undefined;

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    switch (typeof value) {
      case "object":
        if (value) {
          if (_isArray(value)) {
            value.forEach((arrObject) => {
              objKey = parent ? `${parent}.${key}` : key;

              if (_isString(arrObject) || _isNumber(arrObject)) {
                str.push(`${objKey}=${arrObject}`);
              } else if (typeof arrObject === "object") {
                str.push(objectParametize(arrObject, false, objKey));
              }
            });
          } else {
            objKey = parent ? `${parent}.${key}` : key;
            str.push(objectParametize(value, false, objKey));
          }
        }
        break;
      default:
        if (value) {
          objKey = parent ? `${parent}.${key}` : key;
          str.push(`${objKey}=${value}`);
        }
    }
  });

  return (q ? "?" : "") + str.join(delimiter);
};

export class restClient {
  isUndefined = (value: any): value is undefined =>
    typeof value === "undefined";
  isNull = (value: any): value is null => value === null;

  static httpGet = async (
    url: string,
    obj: Record<string, any>,
    useWaitControl: boolean = true
  ): Promise<any> => {
    if (useWaitControl) {
      // //waitControlShow();
    }

    const request = {
      ...obj,
      requestUserInfo: getRequestUserInfoByService(),
    };
    let urlparam = "";

    if (request) {
      urlparam = `&${objectParametize(request, false)}`;
    }

    const paramUrl = `${url}?format=json${urlparam}`;

    try {
      const response = await fetch(`${getUrl()}${paramUrl}`);

      if (useWaitControl) {
        // //waitControlHide();
      }

      if (isUndefined(response) || isNull(response)) {
        return response;
      }

      if (response.status === 404) {
        // //waitControlHide();
        return response;
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      if (useWaitControl) {
        // //waitControlHide();
      }
      return error;
    }
  };

  static httpPost = async (
    url: string,
    obj: Record<string, any>,
    useWaitControl: boolean = true
  ): Promise<any> => {
    if (useWaitControl) {
      // //waitControlShow();
    }
  
    const requestUserInfo = getRequestUserInfoByService();

    const request = {
      ...obj,
      requestUserInfo,
    };

    const baseUrl = getUrl();

    try {
      const response = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: { "Content-type": "application/json" },
      });

      if (isUndefined(response) || isNull(response)) {
        if (useWaitControl) {
          // //waitControlHide();
        }
        return response;
      }

      if (response.status === 404) {
        if (useWaitControl) {
          // //waitControlHide();
        }
        return response;
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error: any) {
      if (useWaitControl) {
        // //waitControlHide();
      }
      // Handle error here, e.g., toast.error(error.message);
      return error;
    } finally {
      if (useWaitControl) {
        // //waitControlHide();
      }
    }
  };

  static httpPut = async (
    url: string,
    obj: Record<string, any>,
    useWaitControl: boolean = true
  ): Promise<any> => {
    if (useWaitControl) {
      //waitControlShow();
    }

    const request = {
      ...obj,
      RequestUserInfo: getRequestUserInfoByService(),
    };

    try {
      const response = await fetch(`${getUrl()}${url}`, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: { "Content-type": "application/json" },
      });

      if (isUndefined(response) || isNull(response)) {
        return response;
      }

      if (response.status === 404) {
        if (useWaitControl) {
          //waitControlHide();
        }
        return response;
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error: any) {
      if (useWaitControl) {
        //waitControlHide();
      }
      // Handle error here, e.g., toast.error(error.message);
      return error;
    } finally {
      if (useWaitControl) {
        //waitControlHide();
      }
    }
  };

  static httpDelete = async (
    url: string,
    obj: Record<string, any>,
    useWaitControl: boolean = true
  ): Promise<any> => {
    if (useWaitControl) {
      // waitControlShow();
    }

    const request = {
      ...obj,
      RequestUserInfo: getRequestUserInfoByService(),
    };

    try {
      const response = await fetch(`${getUrl()}${url}`, {
        method: "DELETE",
        body: JSON.stringify(request),
        headers: { "Content-type": "application/json" },
      });

      if (isUndefined(response) || isNull(response)) {
        if (useWaitControl) {
          // waitControlHide();
        }
        return response;
      }

      if (response.status === 404) {
        if (useWaitControl) {
          // waitControlHide();
        }
        return response;
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error: any) {
      if (useWaitControl) {
        // waitControlHide();
      }
      // Handle error here, e.g., toast.error(error.message);
      return error;
    } finally {
      if (useWaitControl) {
        // waitControlHide();
      }
    }
  };
}
