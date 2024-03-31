'use client';
import { Center, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const { push, back } = useRouter();

  function onLoginRequest() {
    if (!(uname && pass)) {return}

    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: uname,
        password: pass
      })
    }).then(res => 
      res.json()
    ).then(data => {
      sessionStorage.setItem('sxxxi-token', data.token);
    })
  }

  return <Center>
    <VStack>
      <input type="text" value={uname} onChange={e => setUname(e.currentTarget.value)}/>
      <input type="password" value={pass} onChange={e => setPass(e.currentTarget.value)}/>
      <input type="button" value={'Login'} onClick={onLoginRequest} />
    </VStack>
  </Center>
}