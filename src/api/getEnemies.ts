import { config } from "../config/config";

interface Enemy {
  id: string;
  name: string;
}

export interface GetEnemies {
  status: string;
  message?: string;
  data: Enemy[];
}

export const getEnemies = async (): Promise<GetEnemies> => {
  const response = await fetch(config.apiUrl + "/enemies");
  return response.json();
};
