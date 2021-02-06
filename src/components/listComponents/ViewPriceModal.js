import styled from "styled-components";

import Text from "../../assets/Text";
import * as colors from "../../assets/colors";
import popupThumb from "../../assets/images/Bitmap-popup.png";

const Wrapper = styled.div`
  width: 100%;
  ${"" /* height: 450px; */}
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const GameInfoWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  ${"" /* position: absolute;
  top: 17px;
  left: 182px; */}
  height: 150px;
  width: 150px;
`;

function ViewPriceModal() {
  return (
    <Wrapper>
      <GameInfoWrapper>
        <Img src={popupThumb} />
        <div
          style={{
            alignSelf: "flex-end",
            "margin-bottom": "13px",
          }}
        >
          <Text size="s" weight="medium" color={colors.primary}>
            PUBG MOBILE
          </Text>
          <Text size="s" weight="light" color={colors.textGrayUS}>
            US
          </Text>
        </div>
      </GameInfoWrapper>
      <div style={{ margin: "15px" }}>
        <Text size="l" weight="bold" color={colors.primary}>
          Pricing
        </Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text size="s" weight="light" color={colors.gray10}>
            1 Week - 1 Month
          </Text>
          <Text size="s" weight="bold">
            $ 100.00
          </Text>
        </div>
      </div>
    </Wrapper>
  );
}

export default ViewPriceModal;
