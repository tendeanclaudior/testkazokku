const sampleImages = [
  require('../assets/image/Food.png'),
  require('../assets/image/Shopping.png'),
  require('../assets/image/Healts.png'),
];

const sampleTitles = ['Food', 'Shopping', 'Healts'];

const getRandomItem = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];
const getRandomDay = () => {
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  return getRandomItem(days);
};

const getRandomTime = () => {
  let hours24 = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, '0');
  const period = hours24 >= 12 ? 'PM' : 'AM';
  const hours12 = (hours24 % 12 || 12).toString().padStart(2, '0');
  return `${hours12}:${minutes} ${period}`;
};

const getRandomAmount = () => {
  const randomAmount = Math.floor(Math.random() * 10000) + 100;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(randomAmount);
};

export const generateHistorys = (count = 10) => {
  return Array.from({length: count}, () => {
    const title = getRandomItem(sampleTitles);
    let image = '';

    switch (title) {
      case 'Food':
        image = sampleImages[0];
        break;
      case 'Shopping':
        image = sampleImages[1];
        break;
      case 'Healts':
        image = sampleImages[2];
        break;
    }

    return {
      image,
      title,
      day: getRandomDay(),
      amount: getRandomAmount(),
      time: getRandomTime(),
    };
  });
};
