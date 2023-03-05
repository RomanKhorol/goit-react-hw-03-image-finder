import { Overlay, Window } from './Modal.styled';

const Modal = ({ children }) => (
  <Overlay>
    <Window>{children}</Window>
  </Overlay>
);
export default Modal;
