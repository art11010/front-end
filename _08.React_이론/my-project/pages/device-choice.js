import React, { useState } from "react";
import { useRouter } from 'next/router'
import BottomButton from './../src/components/BottomButton'
import RadioGroup from './../src/components/RadioGroup'
import Radio from './../src/components/Radio'

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState('');

  const goNextPage = () => {
    localStorage.setItem('selected_device',selectedDevice);
    router.push('/accessory-choice')
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          아이맥과 맥북 중 원하는 장비를 선택해주세요.
        </h3>
      </div>

      <RadioGroup name="device" onChange={(state) => setSelectedDevice(state)}>
        <Radio
          id="iMac"
          name="device"
          value="iMac"
          label="iMac"
        />
        <Radio
          id="Macbook"
          name="device"
          value="Macbook"
          label="Macbook"
        />
      </RadioGroup>

      <BottomButton onClick={ goNextPage }>악세서리 선택 화면으로 넘어아기</BottomButton>
    </div>
  );
}
