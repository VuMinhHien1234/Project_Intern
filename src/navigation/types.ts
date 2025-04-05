
export enum AppRoute {
    PERSON_ITEM = "PersonItem",
    LOGIN = "Login"
}

type PersonItemType = {
      id: string;
      name: string;
      dateOfBirth: string;
      email: string;
      phoneNumber: string;
      birthPlace: string;
      livePlace: string;
      image: string;
}

export type RootStackParamsList ={
    [AppRoute.LOGIN] : undefined,
    [AppRoute.PERSON_ITEM] : {
        item: PersonItemType
    }
}