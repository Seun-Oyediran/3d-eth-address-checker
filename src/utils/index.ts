export function getRandomElementFromArray<T>(arr: T[], previousValue?: T): T {
  if (!previousValue) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  let randomIndex: number;
  let randomElement: T;

  do {
    randomIndex = Math.floor(Math.random() * arr.length);
    randomElement = arr[randomIndex];
  } while (randomElement === previousValue);

  return randomElement;
}
