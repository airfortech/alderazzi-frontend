import { config } from "../config/config";

interface Enemy {
  id: string;
  name: string;
}

export interface SaveEnemies {
  status: string;
  message?: string;
  data: string;
}

export const saveEnemies = async (data: Enemy[]): Promise<SaveEnemies> => {
  const response = await fetch(config.apiUrl + "/enemies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
