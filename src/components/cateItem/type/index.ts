export interface pageDateType{
    page:number,
    limit:number,
  }
  
  
export interface itemType{
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface cateItemProps{
  limit:number,
  setLimit:(limit:number)=>void
}