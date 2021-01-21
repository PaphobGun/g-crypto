const camelToSnakeCase = (text: string) =>
  text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const getParamValue = (value: string | number | Array<string>) => {
  let paramValue: string | number;

  if (typeof value === 'string') {
    paramValue = camelToSnakeCase(value);
  } else if (Array.isArray(value)) {
    paramValue = value.join(',');
  } else {
    paramValue = value;
  }

  return paramValue;
};

const getPathWithParams = (path: string, params: object) => {
  const queryKeys = Object.keys(params);

  const query = queryKeys.reduce((acc, currrentKey, index) => {
    const paramKey = camelToSnakeCase(currrentKey);
    const paramValue = params[currrentKey];
    const param = `${paramKey}=${getParamValue(paramValue)}${
      index === queryKeys.length - 1 ? '' : '&'
    }`;
    return `${acc}${param}`;
  }, '?');

  return path + query;
};

const formatAmount = (amount: string | number, precision: boolean = false) => {
  if (!amount) return '';

  if (amount < 1 && amount > 0) {
    return amount;
  }

  const [int, decimal] = amount.toString().split('.');
  return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${
    precision ? `.${decimal || '00'}` : ''
  }`;
};

export { camelToSnakeCase, getPathWithParams, formatAmount };
