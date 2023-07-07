export interface CardDataModel {
  id: number;
  title: string;
  description: string;
  imageUrl: string;  
  created_date: string;
  author: string;

}

export function emptyCardData(): CardDataModel {
  return {
    id: 0,
    title: '',    
    description: '',
    imageUrl: 'assets/gas-oil.png',
    created_date: '2020-07-22',
    author: 'Alex Paul'
  }

}
