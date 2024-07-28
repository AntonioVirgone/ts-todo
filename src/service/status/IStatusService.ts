export interface IStatusService {
  back(userCode: string, itemId: string): Promise<void>;
  next(userCode: string, itemId: string): Promise<void>;
}
