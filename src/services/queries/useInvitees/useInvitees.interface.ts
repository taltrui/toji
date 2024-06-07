export enum DietaryRestriction {
  CELIAC = "CELIAC",
  VEGETARIAN = "VEGETARIAN",
  OTHER = "OTHER",
}

export interface Invitee {
  id?: string;
  name: string;
  surname: string;
  minor: boolean;
  dietary_restriction?: DietaryRestriction[];
  dietary_restrictions_detail: string;
  invitation?: string;
}
