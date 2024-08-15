export interface IPropsLogin {
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IPropsRegister {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  setFirstName: (value: string) => void;
  setUsername: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IAuthState {
  user: {
    user: IPublicUser;
  };
  isLogged: boolean;
}

export interface IPublicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
