export const timerFormatter = (data1: Date, data2: Date): string => {
  const diffInMs = data2.getTime() - data1.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const numDays = Math.floor(diffInDays);

  switch (numDays) {
    case 0:
      return 'Hoje';
    case 1:
      return 'Ontem';
    default:
      return `há ${numDays}d`;
  }
};
