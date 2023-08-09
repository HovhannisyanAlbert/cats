interface cateType {
  id: number;
  name: string;
}

interface itemCatType {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface initialStateType {
  cat: cateType[];
  itemCat:itemCatType[];
  defaultCats:itemCatType[];
  
}
