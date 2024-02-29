import HomeButton from "@/app/components/Homebutton";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

//Next.js의 fetch 사용하기
const getTodoDetail = async (id: string) => {
  const res = await fetch(`${API_URL}/todos/${id}`);
  // console.log(res.status);
  // console.log(typeof res.status); //데이터종류
  if (res.status !== 200) {
    // 에러
    throw new Error("데이터를 가져오는데 실패했습니다.");
  } else {
    return res.json();
  }
};

const page = async ({ params }: Props) => {
  const res = await getTodoDetail(params.id);
  console.log(res);
  return (
    <div>
      <h2>Todos 상세페이지{params.id}</h2>

      <table>
        <colgroup>
          <col width="3%" />
          <col width="8%" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td className="txt-center">
              <input
                type="checkbox"
                name="completed"
                defaultChecked={res.completed ? true : false}
              />
            </td>
            <td className="txt-center">{res.userId}</td>
            <td>{res.title}</td>
          </tr>
        </tbody>
      </table>
      <HomeButton />
    </div>
  );
};

export default page;
