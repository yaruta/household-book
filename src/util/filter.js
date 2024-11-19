export function filterTable(data, selectedDate) {
    
  const selectedData = Object.values(data).filter((item) => {
    const itemsYear = item.id.substring(0, 4);
    const itemsMonth = item.id.substring(4, 6);

    return itemsYear === selectedDate.year && itemsMonth === selectedDate.month;
  });

  return selectedData;
}
