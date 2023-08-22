export type PackageDetails = {
  name: string;
  uuid: string;
  duration: string;
  type: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  features: string[];
  mostPopular: boolean;
};

export type MetaType = {
  lastPage: string;
  page: string;
  perPage: string;
  total: string;
};
