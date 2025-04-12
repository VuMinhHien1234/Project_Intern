
export type UserData={
  id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
    birthdate: string;
    gender: string;
    isActive: boolean;
    roles: string[];
}

export type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
    Details: undefined;
  };