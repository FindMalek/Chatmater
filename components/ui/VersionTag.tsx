import { Badge } from "@component/ui/Badge";

export function VersionTag({ tagType = "version-1" }) {
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
