export enum LoanBundleSeniorPayoutMethod {
  /**
   * 每月
   */
  MONTHLY = 'monthly',
  /**
   * 每季度
   */
  QUARTERLY = 'quarterly'
}

export enum LoanBundleJuniorPayoutMethod {
  /**
   * 一次性
   */
  LUMP_SUM = 'lump_sum'
}

export enum LoanBundleStatus {
  /**
   * 草稿
   */
  DRAFT = 'draft',
  /**
   * 审核
   */
  REVIEW = 'review',
  /**
   * 即将开始
   */
  UPCOMING = 'upcoming',
  /**
   * 募集
   */
  RAISING = 'raising',
  /**
   * 售罄
   */
  SOLD_OUT = 'sold_out',
  /**
   * 赎回
   */
  REDEMPTION = 'redemption',
  /**
   * 部分赎回
   */
  PARTIALLY_REDEEMED = 'partially_redeemed',
  /**
   * 完成
   */
  COMPLETED = 'completed'
}

export enum LoanBundleInterestPaymentFrequency {
  /**
   * 月付
   */
  MONTHLY = 'monthly',
  /**
   * 季付
   */
  QUARTERLY = 'quarterly',
  /**
   * 年付
   */
  ANNUALLY = 'annually',
  /**
   * 到期付
   */
  MATURITY = 'maturity'
}
