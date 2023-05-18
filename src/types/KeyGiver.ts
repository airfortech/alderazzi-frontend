export interface KeyGiver {
  id: string;
  name: string;
  description?: string;
  respawnTime: number;
  respawns?: {
    date: number;
    keyName: string;
  }[];
  lastRespawn?: number;
  nextRespawn: number;
  isActive?: boolean;
}

export interface KeyGiverTableData
  extends Omit<
    KeyGiver,
    "description" | "respawns" | "lastRespawn" | "isActive"
  > {}
