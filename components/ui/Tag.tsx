import { Badge } from "@component/ui/Badge";

export function VersionTag({ tagType }: { tagType: string }) {
  const versionMatch = tagType.match(/\d+$/);
  const versionNumber = versionMatch ? parseInt(versionMatch[0], 10) : 1;

  const maxVersion = 100;

  const getColorForVersion = (version: number) => {
    const ratio = version / maxVersion;
    if (ratio < 0.33) return "text-green-700 bg-green-100 hover:bg-green-200";
    if (ratio < 0.66)
      return "text-yellow-700 bg-yellow-100 hover:bg-yellow-200";
    return "text-red-700 bg-red-100 hover:bg-red-200";
  };

  const versionColorClass = getColorForVersion(versionNumber);

  return (
    <Badge
      variant={"secondary"}
      className={`min-w-fit text-xs py-0 ${versionColorClass}`}
    >
      {tagType.charAt(0).toUpperCase() + tagType.slice(1).replace(/-/g, " ")}
    </Badge>
  );
}

export function TeamTag({ tagName }: { tagName: string }) {
  const getColorForTeam = (team: string) => {
    if (team === "team-gigi")
      return "text-fuchsia-700 bg-fuchsia-100 hover:bg-fuchsia-200";
    if (team === "team-prei") return "text-red-700 bg-red-100 hover:bg-red-200";
    if (team === "team-nigga")
      return "text-emerald-700 bg-emerald-100 hover:bg-emerald-200";
    return "text-blue-700 bg-blue-100 hover:bg-blue-200";
  };
  const teamColorClass = getColorForTeam(tagName);

  return (
    <Badge
      variant={"secondary"}
      className={`min-w-fit text-xs py-0 ${teamColorClass}`}
    >
      {tagName.charAt(0).toUpperCase() + tagName.slice(1).replace(/-/g, " ")}
    </Badge>
  );
}
