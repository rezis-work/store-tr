export interface ProductProps {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  price: number;
  row: number;
  title: string;
  position: string;
  ratings: number;
  description: string;
  brand: string;
  slug: {
    current: string;
    _type: string;
  };
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  category: [
    {
      _key: string;
      _ref: string;
      _type: string;
    }
  ];
  isnew: boolean;
  body: any;
  quantity: number;
}

export interface StateProps {
  trcomerce: {
    productData: ProductProps[];
  };
}
