export enum TransactionStatus {
  /**
   * 初始化
   */
  INITIATED = 'initiated',
  /**
   * 待确认
   */
  PENDING = 'pending',
  /**
   * 已确认
   */
  CONFIRMED = 'confirmed',
  /**
   * 已完成
   */
  COMPLETED = 'completed',
  /**
   * 已拒绝
   */
  REJECTED = 'rejected',
  /**
   * 已失败
   */
  FAILED = 'failed'
}

export enum TransactionType {
  /**
   * 投资
   */
  INVESTMENT = 'investment',
  /**
   * 赎回
   */
  REDEMPTION = 'redemption',
  /**
   * 利息支付
   */
  INTEREST_PAYMENT = 'interest_payment',
  /**
   * 利息提取
   */
  INTEREST_WITHDRAWAL = 'interest_withdrawal',
  /**
   * 存款
   */
  DEPOSIT = 'deposit',
  /**
   * 提款
   */
  WITHDRAWAL = 'withdrawal'
}
