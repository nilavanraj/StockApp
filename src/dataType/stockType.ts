export type UserHolding = {
    symbol: string;
    quantity: number;
    ltp: number;
    avgPrice: number;
    close: number;
  };
  
  export type Data = {
    userHolding: UserHolding[];
  };
  
  export type ApiResponse = {
    data: Data;
  };
  