import React, { useState } from "react";
import { useRouter } from 'next/router';
import BottomButton from './../src/components/BottomButton';
import RadioGroup from './../src/components/RadioGroup';
import Radio from './../src/components/Radio';


export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccssory, setSelectedAccssory] = useState('');

  const goNextPage = () => {
    localStorage.setItem('selected_accssory',selectedAccssory);
    router.push('/complete')
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          모니터와 키보드 중 원하는 악세서리를 선택해주세요.
        </h3>
      </div>

      <RadioGroup name="accessory" onChange={(state) => setSelectedAccssory(state)}>
        <Radio
          id="Moniter"
          name="accessory"
          value="Moniter"
          label="Moniter"
        />
        <Radio
          id="Keyboard"
          name="accessory"
          value="Keyboard"
          label="Keyboard"
        />
      </RadioGroup>

      <BottomButton onClick={ goNextPage }>제출 완료 화면으로 넘어아기</BottomButton>
    </div>
  );
}
