import styled from "styled-components";

import IconButton from "./IconButton";

import ViewPriceModal from "./ViewPriceModal";

import { Modal, ModalContents, ModalOpenButton } from "../Modal";

const Wrapper = styled.div`
  width: 160px;
  margin-right: 50px;
`;

function ViewPrice({ campaign }) {
  return (
    <Wrapper>
      <Modal>
        <ModalOpenButton>
          <IconButton type="price" />
        </ModalOpenButton>
        <ModalContents>
          <ViewPriceModal {...campaign} />
        </ModalContents>
      </Modal>
    </Wrapper>
  );
}

export default ViewPrice;
