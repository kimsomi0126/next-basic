//"use client";
// @은 /src 를 가르키는 절대 경로입니다.
import style from "@/app/styles/detail.module.css";
import HomeButton from "@/app/components/Homebutton";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React from "react";

type Props = {
  params: {
    city: string;
  };
  searchParams: {
    cityName: string;
  };
};

export function generateMetadata({ params, searchParams }: Props) {
  return {
    title: `Next.js 프로젝트 : ${searchParams.cityName}지역상세`,
    description: `${searchParams.cityName}지역 상세페이지`,
  };
}

const Detail = ({ params, searchParams }: Props) => {
  const cityName = searchParams.cityName;
  // 첫 페이지로 이동
  // 주의사항 : react-router-dom (X)
  // import { useRouter } from "next/navigation";

  return (
    <>
      <div className={style.detailTitle}>상세내용 : {cityName}</div>
      {/* <Link href="/">이전페이지</Link> */}
      {/* <button onClick={() => handleClick()}>이전으로</button> */}
      <HomeButton />
    </>
  );
};

export default Detail;
