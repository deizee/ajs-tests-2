import checkHealth from '../health';

test('Проверяем, что возвращается строка "healthy" при передаче значения "90"', () => {
  const player = { name: 'Маг', health: 90 };
  const health = checkHealth(player);

  expect(health).toBe('healthy');
});

test('Проверяем, что возвращается строка "wounded" при передаче значения 50', () => {
  const player = { name: 'Маг', health: 50 };
  const health = checkHealth(player);

  expect(health).toBe('wounded');
});

test('Проверяем, что возвращается строка "wounded" при передаче значения 25', () => {
  const player = { name: 'Маг', health: 25 };
  const health = checkHealth(player);

  expect(health).toBe('wounded');
});

test('Проверяем, что возвращается строка "critical" при передаче значения 15', () => {
  const player = { name: 'Маг', health: 15 };
  const health = checkHealth(player);

  expect(health).toBe('critical');
});

test('Проверяем, что возвращается строка "critical" при передаче значения 5', () => {
  const player = { name: 'Маг', health: 5 };
  const health = checkHealth(player);

  expect(health).toBe('critical');
});
