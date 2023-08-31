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
  isActive: boolean;
};

export type MetaType = {
  lastPage: string;
  page: string;
  perPage: string;
  total: string;
};



export type FeaturesType ={
  name: string;
  list: string[];
  uuid: string;
  createdAt: string;
  updatedAt: string;


}


export type UserType = {
  email: string;
  uuid: string;
  lastSeen: string;
  role:string[];
}