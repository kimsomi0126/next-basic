import Link from "next/link";
import style from "./styles/style.module.css";
import { Todo } from "./type/TodoType";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Open API 호출하기
const getTodoList = async () => {
  const res = await fetch(`${API_URL}/todos`);
  // console.log(res.status);
  // console.log(typeof res.status); //데이터종류
  if (res.status !== 200) {
    // 에러
    throw new Error("데이터를 가져오는데 실패했습니다.");
  } else {
    return res.json();
  }
};

export default async function Home() {
  const res = await getTodoList();
  console.log("데이터", res);
  return (
    <>
      <h1>첫페이지</h1>
      <ul className={style.list}>
        <li>
          <Link href="/detail/서울?cityName=서울">서울</Link>
        </li>
        <li>
          <Link href="/detail/대전?cityName=대전">대전</Link>
        </li>
        <li>
          <Link href="/detail/광주?cityName=광주">광주</Link>
        </li>
        <li>
          <Link href="/detail/대구?cityName=대구">대구</Link>
        </li>
        <li>
          <Link href="/detail/부산?cityName=부산">부산</Link>
        </li>
        <li>
          <Link href="/detail/제주?cityName=제주">제주</Link>
        </li>
      </ul>
      {/* 목록 출력하기 */}
      <table>
        <colgroup>
          <col width="3%" />
          <col width="8%" />
          <col />
        </colgroup>
        <tbody>
          {Array.isArray(res) &&
            res.map((item: Todo, index: number) => (
              <tr key={index}>
                <td className="txt-center">
                  <input
                    type="checkbox"
                    name="completed"
                    defaultChecked={item.completed ? true : false}
                  />
                </td>
                <td className="txt-center">{item.userId}</td>
                <td>
                  <Link href={`/todos/${item.id}`}>{item.title}</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
