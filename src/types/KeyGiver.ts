export interface KeyGiver {
  id: string;
  name: string;
  description?: string;
  respawnTime: number;
  respawns?: {
    date: string;
    keyName: string;
  }[];
  lastRespawn?: string;
  nextRespawn: string;
  isActive?: boolean;
}

export interface KeyGiverTableData
  extends Omit<
    KeyGiver,
    "description" | "respawns" | "lastRespawn" | "isActive"
  > {}
