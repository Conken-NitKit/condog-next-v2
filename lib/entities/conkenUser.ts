import { DatabaseEntity } from './base';

export type ConkenUser = DatabaseEntity<{
  /**
   * 学籍番号
   */
  studentId: string;
  /**
   * PCの機種名
   */
  pcName: string;
  /**
   * 入部日
   */
  joinedAt: number;
  /**
   * 役職
   */
  position: string;
  /**
   * 現在のエンジニアグレード
   * 0: 未設定
   * 1: シード
   * 2: スプラウト
   * 3: ジュニア
   * 4: ルーキー
   * 5: ミドル
   * 6: シニア
   * 7: マスター
   */
  engineerGrade: number;
  /**
   * 現在の成長フェーズ
   * 0: 未設定
   * 1: 播種期 (sowing season)
   * 2: 開花期 (blooming season)
   * 3: 収穫期 (harvest season)
   * 4: 繁殖期 (breeding season)
   */
  growthPhase: number;
  /**
   * 所属しているグループのID
   * 複数グループを兼ねている場合、業務比率が多い職種を選択してください
   * - Web班
   * - ゲーム班
   * - イラスト班
   */
  groupId: string | null;
  /**
   * 所属している開発グループのID
   */
  developmentGroupId: string | null;
  /**
   * 所属しているマネジメントグループのID
   */
  managementGroupId: string | null;
}>;
