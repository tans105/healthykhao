// This is a temporary place. Will soon be moved to a database

const BREAKFAST = [
  {name: 'Masala Oats', type: 0},
  {name: 'Besan Cheela', type: 0},
  {name: 'Moong dal cheela', type: 0},
  {name: 'Veg Dalia', type: 0},
  {name: 'Upma', type: 0},
  {name: 'Idli Sambhar', type: 0},
  {name: 'Sabudana Khichdi', type: 0},
  {name: 'Poha', type: 0},
  {name: 'Veg Sandwich', type: 0},
  {name: 'Suji Cheela', type: 1},
  {name: 'Sewaiyan', type: 1},
  {name: 'Mooli Paranthe', type: 1},
  {name: 'Onion Parathe', type: 1},
  {name: 'Pav Bhaji', type: 2},
  {name: 'Aaloo Puri', type: 2},
  {name: 'Dosa', type: 2},
  {name: 'Aaloo Sandwich', type: 2},
  {name: 'Daal Paranthe', type: 1},
  {name: 'Macroni', type: 2},
]

/**
 * allowedTime =>
 *  1: Lunch Only
 *  2: Dinner Only
 *  3: Doesn't Matter
 */
const MAIN_COURSE = [
  {name: 'Choley Chawal', type: 0, allowedTime: 1},
  {name: 'Rajma Chawal', type: 0, allowedTime: 1},
  {name: 'Kadi Chawal', type: 0, allowedTime: 1},
  {name: 'Bharwa Karela', type: 0, allowedTime: 3},
  {name: 'Arvi Gravy', type: 0, allowedTime: 3},
  {name: 'Arvi Fry', type: 0, allowedTime: 3},
  {name: 'Mix Veg', type: 0, allowedTime: 3},
  {name: 'Aaloo Chana', type: 0, allowedTime: 3},
  {name: 'Palak Paneer', type: 0, allowedTime: 3},
  {name: 'Aloo Beans', type: 0, allowedTime: 3},
  {name: 'Kundru Fry', type: 0, allowedTime: 3},
  {name: 'Bhindi Fry', type: 0, allowedTime: 3},
  {name: 'Chana Daal Lauki', type: 0, allowedTime: 3},
  {name: 'Khichdi', type: 0, allowedTime: 3},
  {name: 'Aaloo gobhi', type: 1, allowedTime: 3},
  {name: 'Besan sabzi', type: 1, allowedTime: 3},
  {name: 'Matar Paneer', type: 1, allowedTime: 3},
  {name: 'Lauki Kofta', type: 1, allowedTime: 3},
  {name: 'Jeera Lauki', type: 1, allowedTime: 3},
  {name: 'Sev Tamatar', type: 1, allowedTime: 3},
  {name: 'Baingan Bharta', type: 1, allowedTime: 3},
  {name: 'Matar Mushroom', type: 1, allowedTime: 3},
  {name: 'Aaloo Matar Sabzi', type: 2, allowedTime: 3},
  {name: 'Dum Aaloo', type: 2, allowedTime: 3},
  {name: 'Veg Manchurian', type: 2, allowedTime: 3},
  {name: 'Soya chilli', type: 2, allowedTime: 3},
  {name: 'Chilli Paneer', type: 2, allowedTime: 3},
  {name: 'Chilli Mushroom', type: 2, allowedTime: 3},
  {name: 'Sarso Fish', type: 2, isNonVeg: true, allowedTime: 3},
  {name: 'Chicken curry', type: 2, isNonVeg: true, allowedTime: 3},
  {name: 'Prawns curry', type: 2, isNonVeg: true, allowedTime: 3},
  {name: 'Chilli Prawns', type: 2, isNonVeg: true, allowedTime: 3},
]


export {
  BREAKFAST,
  MAIN_COURSE
}
