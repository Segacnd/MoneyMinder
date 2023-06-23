import Car from '@/assets/icons/car';
import Closes from '@/assets/icons/closes';
import Family from '@/assets/icons/family';
import Food from '@/assets/icons/food';
import Gifts from '@/assets/icons/gifts';
import Health from '@/assets/icons/health';
import Home from '@/assets/icons/house';
import ListIcon from '@/assets/icons/list';
import Rent from '@/assets/icons/rent';

export const currencyList = [
  { currency: 'BYN', symbol: 'BYN' },
  { currency: 'USD', symbol: '$' },
  { currency: 'EUR', symbol: '€' },
  { currency: 'RUB', symbol: '₽' },
];

export const expensesCategoryList = [
  { category: 'auto', label: Car },
  { category: 'home', label: Home },
  { category: 'health', label: Health },
  { category: 'personal', label: Health },
  { category: 'closet', label: Closes },
  { category: 'food', label: Food },
  { category: 'gifts', label: Gifts },
  { category: 'family', label: Family },
  { category: 'rent', label: Rent },
  { category: 'other', label: ListIcon },
];

export const currencySymbolsList: string[] = [];

currencyList.forEach((el) => {
  currencySymbolsList.push(el.symbol);
});
/* eslint-disable-next-line */
export const generateNewId = (array: any[]): number => {
  if (!array.length) {
    return 0;
  }

  const res = array.map((el) => el.id);

  return Math.max(...res) + 1;
};
