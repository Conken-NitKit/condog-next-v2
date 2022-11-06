import { DatabaseEntity } from './base';

export type User = DatabaseEntity<{
  /**
   * ユーザーが変更可能なID
   * プロフィールページのURLにも使用される
   */
  accountId: string;
  /**
   * アカウントIDの変更が可能か
   */
  allowUpdateAccountId?: boolean;
  /**
   * ユーザー名（ニックネーム可）
   */
  name: string;
  /**
   * ユーザー紹介文
   */
  biography?: string;
  /**
   * プロフィールアイコンのURL
   */
  iconAccessUrl?: string;
  /**
   * プロフィールバナーのURL
   */
  bannerAccessUrl?: string;
  /**
   * メールアドレス
   */
  email?: string;
  /**
   * 本名
   */
  realName?: string;
  /**
   * 生年月日
   * YYYYMMDD形式
   */
  birthday?: string; // \d{4}/\d{2}/\d{2}
  /**
   * 電話番号
   */
  phoneNumber?: string;
  /**
   * LINEのユーザーID
   */
  lineId?: string;
  /**
   * TwitterのユーザーID
   */
  twitterId?: string;
  /**
   * InstagramのユーザーID
   */
  instagramId?: string;
  /**
   * GitHubのユーザーID
   */
  githubId?: string;
  /**
   * AtCoderのユーザーID
   */
  atcoderId?: string;
  /**
   * 自分のサイトのURL
   */
  websiteUrl?: string;
  /**
   * アカウント作成者のシステムID
   */
  createdBy: string;
  /**
   * アカウント情報の更新者のシステムID
   */
  updatedBy: string;
  /**
   * アカウント作成日時
   */
  createdAt: number;
  /**
   * アカウント情報の更新日時
   */
  updatedAt: number;
}>;
