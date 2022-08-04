// Получение случайного числа в заданном диапазоне, включительно.

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
