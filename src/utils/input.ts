export const validateInput = (target: HTMLInputElement) => {
  const { value, name, type, checked, min, max } = target;

  if (typeof min !== 'undefined' && parseInt(value, 10) < parseInt(min, 10)) {
    return false;
  }

  if (typeof max !== 'undefined' && parseInt(value, 10) > parseInt(max, 10)) {
    return false;
  }

  return true;
};

export const parseInput = (target: HTMLInputElement) => {
  const { value, name, type, checked } = target as HTMLInputElement;

  if (type === 'checkbox') {
    return checked;
  }

  return value;
};
