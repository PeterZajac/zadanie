export type TFruit = {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
  error?: string;
  image?: string;
};

export type FruitProps = {
  data: TFruit[];
};

export type TableWrapProps = {
  children: React.ReactNode;
};

export type PaginationButtonsProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  page: number;
  totalPages: number;
};
