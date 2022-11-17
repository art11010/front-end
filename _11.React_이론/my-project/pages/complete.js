import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import BottomButton from './../src/components/BottomButton';
import { fetchUser } from "../src/modules/api";

export default function complete() {
  const [name, setName] = useState("제로베이스");
  const router = useRouter();
  const [choice, setChoice] = useState({ device: '', accssory : '' });

  useEffect(() => {
    async function fetch() {
      const res = await fetchUser();
      setName(res.name);
    }
    fetch();

    const device = localStorage.getItem('selected_device');
    const accssory = localStorage.getItem('selected_accssory');

    setChoice({ device, accssory });
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
        { name }님이 선택하신 장비는 { choice.device }, 악세서리는 {choice.accssory}입니다. <br />
        맞으시다면 제출하기 버튼, 다시 선택 하시려면 첫 화면으로 돌아가기 버튼을 클릭해주세요.
        </h3>
      </div>
      <BottomButton onClick={
        () => router.push('/start')
      }>첫 화면으로 돌아가기</BottomButton>
    </div>
  );
}
