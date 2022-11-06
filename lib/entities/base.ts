export type DatabaseEntity<P> = P & {
  /**
   * システムで一意に識別するためのID
   */
  primaryId: string;
};
