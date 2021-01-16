const camelToSnakeCase = (text: string) =>
  text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const getPathWithParams = (path: string, params: object) => {
  const queryKeys = Object.keys(params);

  const query = queryKeys.reduce((acc, currrentKey, index) => {
    const paramKey = camelToSnakeCase(currrentKey);
    const paramValue = params[currrentKey];
    const param = `${paramKey}=${
      typeof paramValue === 'string' ? camelToSnakeCase(paramValue) : paramValue
    }${index === queryKeys.length - 1 ? '' : '&'}`;
    return `${acc}${param}`;
  }, '?');

  return path + query;
};

export { camelToSnakeCase, getPathWithParams };
