import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, updateNickname } from '../mocks/api';

// api를 통해 현재 닉네임 값 가져오기 -> getUser()
// handlSubmit : 업데이트 된 inputValue를 서버에 전송해서, 닉네임 값 업데이트하기 -> updateNickname()
export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery('@getUser', getUser, {
    staleTime: Infinity,
  });
  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue)
  };

  if ( isLoading ) return <span>Loading...</span>

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: { data.nickName }</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
