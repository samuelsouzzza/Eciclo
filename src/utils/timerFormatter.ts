export const timerFormatter = (data1: Date, data2: Date): string => {
  const diffInMs = data2.getTime() - data1.getTime();
  const numDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (numDays === 0) {
    return 'Hoje';
  } else if (numDays === 1) {
    return 'Ontem';
  } else if (numDays >= 1 && numDays <= 6) {
    return `Há ${Math.floor(numDays)}d`;
  } else if (numDays >= 7 && numDays <= 29) {
    return `Há ${Math.floor(numDays / 7)}s `;
  } else if (numDays >= 30 && numDays <= 359) {
    return `Há ${Math.floor(numDays / 30)}m`;
  } else {
    return '...';
  }
};
