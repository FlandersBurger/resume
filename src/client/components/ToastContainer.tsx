import styled, { keyframes } from "styled-components";
import { useApp } from "../context/AppContext";

const toastIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ToastWrapper = styled.div`
  position: fixed;
  top: 58px;
  right: 16px;
  z-index: 9999;
  pointer-events: none;
`;

const ToastItem = styled.div`
  pointer-events: auto;
  background: #333;
  color: #fff;
  padding: 10px 18px;
  border-radius: 4px;
  margin-bottom: 8px;
  min-width: 200px;
  max-width: 350px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  animation: ${toastIn} 0.3s ease;
`;

export function ToastContainer() {
  const { toasts } = useApp();

  return (
    <ToastWrapper id="toast">
      {toasts.map((t) => (
        <ToastItem key={t.id}>{t.message}</ToastItem>
      ))}
    </ToastWrapper>
  );
}
