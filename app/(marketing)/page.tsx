import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Link href="/recommender">
      <Image src="/og.png" alt="Step up bro" width={1200} height={630} />
    </Link>
  );
}
