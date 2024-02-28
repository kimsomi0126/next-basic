import Link from "next/link";
import style from "./styles/style.module.css";

export default function Home() {
  return (
    <>
      <h1>첫페이지</h1>
      <ul className={style.list}>
        <li>
          <Link href="/detail/서울">서울</Link>
        </li>
        <li>
          <Link href="/detail/대전">대전</Link>
        </li>
        <li>
          <Link href="/detail/광주">광주</Link>
        </li>
        <li>
          <Link href="/detail/대구">대구</Link>
        </li>
        <li>
          <Link href="/detail/부산">부산</Link>
        </li>
        <li>
          <Link href="/detail/제주">제주</Link>
        </li>
      </ul>
    </>
  );
}
