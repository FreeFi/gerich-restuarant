import images from './images';

const wines = [
  {
    title: 'Чапел Хилл Шираз',
    price: '5600 р',
    tags: 'AU | Бутылка',
  },
  {
    title: 'Катена Мальби',
    price: '5900 р',
    tags: 'AU | Бутылка',
  },
  {
    title: 'Ла Вьей Роуз',
    price: '4400 р',
    tags: 'FR | 750 мл',
  },
  {
    title: 'Рино Пэйл Эль',
    price: '3100 р',
    tags: 'CA | 750 мл',
  },
  {
    title: 'Ирландский Гиннесс',
    price: '2600 р',
    tags: 'IE | 750 мл',
  },
];

const cocktails = [
  {
    title: 'Апероль Спритц',
    price: '2000 Р',
    tags: 'Апероль | Вилла Маркези просекко | сода | 30 мл',
  },
  {
    title: "Темный и бурный",
    price: '1600 Р',
    tags: 'Темный ром | Имбирное пиво | Ломтик лайма',
  },
  {
    title: 'Дайкуири',
    price: '1000 Р',
    tags: 'Ром | Цитрусовый сок | Сахар',
  },
  {
    title: 'Старомодный',
    price: '3100 Р',
    tags: 'Бурбон | Коричневый сахар | Ангостура Биттерс',
  },
  {
    title: 'Негрони',
    price: '2600 Р',
    tags: 'Джин | сладкий вермут | Кампари | Апельсиновый гарнир',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Биб Гурман',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Восходящая звезда',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'АА гостеприимство',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Выдающийся шеф-повар',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
