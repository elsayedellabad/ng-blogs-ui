export interface UserCardDataModel {
  id: number;
  name: string;
  company: string;
  imageUrl: string;
}

export function emptyUserCardData(): UserCardDataModel {
  return {
    id: 0,
    name: '',
    company: '',
    imageUrl: 'assets/man.png'
  }

}
