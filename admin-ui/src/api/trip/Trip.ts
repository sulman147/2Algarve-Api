import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  listing?: Listing;
  tripinfo: string;
  updatedAt: Date;
  user?: User;
};
