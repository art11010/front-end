import React, { useEffect, useState } from "react";
import { fetchUser } from "../src/modules/api";

export default function start() {
  const [name, setName] = useState("제로베이스");

  useEffect(() => {
    async function fetch() {
      const res = await fetchUser();
      setName(res.name);
    }
    fetch();
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          { name }님, 입사를 축하드립니다! 원하시는 개발 장비를 선택해주세요.
        </h3>
      </div>
    </div>
  );
}
