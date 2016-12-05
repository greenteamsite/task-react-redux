export function updateArrayItem(items, index, { name, value }) {
  const updatedItem = Object.assign({}, items[index]);
  updatedItem[name] = value;
  return [
    ...items.slice(0, index),
    updatedItem,
    ...items.slice(index + 1),
  ];
}

export function addArrayItem(items, item) {
  return [
    ...items,
    item,
  ];
}

export function removeArrayItem(items, index) {
  return [
    ...items.slice(0, index),
    ...items.slice(index + 1),
  ];
}
