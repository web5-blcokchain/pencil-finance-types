export enum UserKycStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export enum UserRole {
  INVESTOR = 'investor',
  BROKER = 'broker',
  ADMIN = 'admin'
}

export enum UserAuthType {
  EMAIL = 'email',
  WALLET = 'wallet',
  GOOGLE = 'google',
  APPLE = 'apple'
}

export enum UserStatus {
  REGISTERED = 'registered',
  VERIFIED = 'verified',
  ACTIVE = 'active',
  DORMANT = 'dormant',
  DISABLED = 'disabled'
}
