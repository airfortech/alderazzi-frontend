import { Types } from "mongoose";
import { ShortKeyResponse } from "./Key";
import { ShortKeyGiverResponse } from "./KeyGiver";

export interface KeyGiverDrop {
  keyGiver: Types.ObjectId;
  drop: Types.ObjectId | null;
  dropDate: number;
  nextRespawnDate: number | null;
  createdAt: number;
  isActive: boolean;
}

export interface KeyGiverDropResponse
  extends Omit<KeyGiverDrop, "isActive" | "keyGiver" | "drop"> {
  id: string;
  keyGiver: ShortKeyGiverResponse;
  drop: ShortKeyResponse | null;
}

export interface TableKeyGiverDropResponse
  extends Omit<KeyGiverDropResponse, "keyGiver" | "drop"> {
  keyGiverId: string;
  keyGiverName: string;
  keyGiverShort: string;
  keyGiverDomain: string;
  keyGiverRespawnTime: number | null;
  keyGiverLocations: string;
  dropId: string | null;
  dropName: string | null;
}

export interface KeyGiverDropAddRequest
  extends Omit<
    KeyGiverDrop,
    "isActive" | "keyGiver" | "drop" | "nextRespawnDate" | "createdAt"
  > {
  keyGiver: string;
  drop: string | null;
}

export interface KeyGiverDropUpdateRequest
  extends Omit<
    KeyGiverDropAddRequest,
    "keyGiver" | "drop" | "dropDate" | "nextRespawnDate"
  > {
  keyGiver: string;
  drop?: string | null;
  dropDate?: number;
}

export interface KeyGiverDropsStats {
  keyGiversDone: number;
  drops: number;
  date: string;
}

export enum KeyGiverDropsStatsTimeOptions {
  currentWeek = "current_week",
  last5days = "last5days",
  last10days = "last10days",
  last30days = "last30days",
  currentMonth = "current_month",
  last2months = "last2months",
  last6months = "last6months",
  currentYear = "current_year",
  last12months = "last12months",
  alltime = "alltime",
}
