import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContent = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['gray-900']};
  padding: 2rem;
  border-radius: 8px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 300px;
  input {
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['green-500']};
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  button {
    height: 50px;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['green-500']};
    font-weight: bold;
    padding: 0 1.25rem;

    &:hover {
      background: ${(props) => props.theme['green-700']};
    }

    a {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
