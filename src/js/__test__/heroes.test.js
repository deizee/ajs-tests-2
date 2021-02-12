import sortHeroesByHealth from '../heroes';

test('Проверяем правильность сортировки массива', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroesByHealth(heroes)).toEqual(sortHeroes);
  expect(sortHeroesByHealth(heroes)).not.toBe(sortHeroes);
});
