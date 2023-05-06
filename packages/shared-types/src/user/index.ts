import { Language, Currency } from "..";

/**
 * @description
 * This is the user interface.
 */
export interface User {
  id: string;
  identifier: UserIdentifier;
  password: string;
  role: UserRole;
  identity: UserIdentity;
  gameProfile: GameProfile;
  addresses: Location[];
  preferences: UserPreferences;
  connections: UserConnection[];
  accountStatus: UserAccountStatus;
  updatedAt: Date;
  createdAt: Date;
}

export interface UserIdentifier {
  [key: string]: string;
}

export enum UserRole {
  ADMIN = 2,
  USER = 1,
}

export interface UserIdentity {
  firstName: string;
  lastName: string;
  fullName: string;
  profilePictureUrl?: string;
  birthDate: Date;
}

export interface GameProfile {
  userName: string;
}

export interface UserPreferences {
  language: Language;
  currency: Currency;
  notifications: {
    email: {
      newsletter: boolean;
      message: boolean;
    };
    push: {
      message: boolean;
    };
  };
}

export interface UserConnection {
  ip: string;
  os: UserConnectionOS;
  device: UserConnectionDevice;
  client: UserConnectionClient;
  updatedAt: Date;
  createdAt: Date;
}

export interface UserConnectionOS {
  name: string;
  version: string;
}

export interface UserConnectionDevice {
  type: string;
  brand: string;
}

export interface UserConnectionClient {
  name: string;
  version: string;
}

export interface UserAccountStatus {
  status: string;
  reason?: string;
  since?: Date;
}

export enum UserAccountStatusType {
  ACTIVE = "active",
  DEACTIVATED = "deactivated",
  SUSPENDED = "suspended",
}
