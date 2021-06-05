export const limitDescription = (entity, limit) => {
  const processed = Object.values(entity).map((item) => {
    item.description = `${item.description.slice(0, limit).trim()}...`;
    return item;
  });

  return processed.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue;
    return accumulator;
  }, {});
};
