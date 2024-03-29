import fs from "fs";
import path from "path";

import { ClusterType } from "@/types/cluster";
import MessageCard from "@component/display/MessageCard";

export const metadata = {
  title: "Recommender",
};

async function getClusters() {
  const filePath = path.join(process.cwd(), "data", "clusters.json");
  const rawData = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(rawData);
  return data;
}

export default async function Page() {
  const clusters = (await getClusters()) as ClusterType[];

  return (
    <div className="space-y-2">
      {clusters.map((cluster) => (
        <MessageCard key={cluster.id} cluster={cluster} />
      ))}
    </div>
  );
}
