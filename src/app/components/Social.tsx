import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <div className="space-x-4">
      <Link href={"/"}>
        <Image src={"/social1.svg"} alt="" width={55} height={55} />
      </Link>

      <Link href={"/"}>
        <Image src={"/social2.svg"} alt="" width={55} height={55} />
      </Link>

      <Link href={"/"}>
        <Image src={"/social3.svg"} alt="" width={55} height={55} />
      </Link>
    </div>
  );
};

export default Social;
