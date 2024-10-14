declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BASE_URL: string;
  }
}

interface Badge {
  text: string;
  color: string;
}

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  stock: number;
  sold: number;
  badges: Badge[];
}
