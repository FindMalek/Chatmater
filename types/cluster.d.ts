import { UserType } from "@/types/user";

export type ClusterType = {
  id: string;
  user: UserType;
  details: ClusterDetailsType;
  messages: MessageType[];
};

export type ClusterDetailsType = {
  version: string;
  maxVersion: string;
  count: number;
  linkedClusters: string[];
  about: string;
};

export type MessageType = {
  id: string;
  content: string;
  repliedTo: boolean;
};
