import * as React from "react";
import "@reach/dialog/styles.css";
import { Dialog as ReachDialog } from "@reach/dialog";
import styled from "styled-components";

import Text from "../assets/Text";
import * as colors from "../assets/colors";

const Dialog = styled(ReachDialog)`
  max-width: 450px;
  border-radius: 3px;
  padding-bottom: 3.5em;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.2);
  margin: 50% auto;
`;

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

const ModalContext = React.createContext();

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext);
  return (
    <Dialog
      aria-label="modal button"
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      {...props}
    />
  );
}

function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      {children}
      <ModalDismissButton>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: `2px solid ${colors.dark}`,
            margin: "25px auto",
            padding: "10px 15px",
          }}
        >
          <Text weight="bold" size="small" color={colors.dark}>
            Close
          </Text>
        </button>
      </ModalDismissButton>
    </ModalContentsBase>
  );
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };
