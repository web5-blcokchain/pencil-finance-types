export enum UserKycStatus {
  /**
   * 待处理
   */
  PENDING = 'pending',
  /**
   * 已批准
   */
  APPROVED = 'approved',
  /**
   * 已拒绝
   */
  REJECTED = 'rejected'
}

export enum UserRole {
  /**
   * 投资者
   */
  INVESTOR = 'investor',
  /**
   * 经纪人
   */
  BROKER = 'broker',
  /**
   * 管理员
   */
  ADMIN = 'admin'
}

export enum UserAuthType {
  /**
   * 邮箱
   */
  EMAIL = 'email',
  /**
   * 钱包
   */
  WALLET = 'wallet',
  /**
   * 谷歌
   */
  GOOGLE = 'google',
  /**
   * 苹果
   */
  APPLE = 'apple'
}

export enum UserStatus {
  /**
   * 已注册
   */
  REGISTERED = 'registered',
  /**
   * 已验证
   */
  VERIFIED = 'verified',
  /**
   * 活跃
   */
  ACTIVE = 'active',
  /**
   * 休眠
   */
  DORMANT = 'dormant',
  /**
   * 已禁用
   */
  DISABLED = 'disabled'
}
