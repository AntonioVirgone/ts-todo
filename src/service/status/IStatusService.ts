export interface IStatusService {
  changeStatus(userCode: string, itemId: string): Promise<void>;
}
