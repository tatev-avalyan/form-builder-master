import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  max-width: 880px;
  padding: 0 30px;
`

interface IWrapper {
  isOver: boolean
}

export const Wrapper = styled.div<IWrapper>`
  min-height: 300px;
  display: flex; 
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  transition: 0.2s all;
  border: 1px dashed #d4d4d4;
  border-color: ${({ isOver }) => (isOver ? '#58cfef' : '')})
`

export const DropZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #f2fbff;
  border: 1px dotted #8cdbff;
  color: #8cdbff;
  font-weight: 700;
  margin: auto 0 0 0;

  &:hover {
    border-color: #58cfef;
  }
`
