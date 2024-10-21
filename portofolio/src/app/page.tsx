import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>This is the homepage of my portofolio</p>
      <Link href='/about'>Go About </Link>
    </div>
  );
}
