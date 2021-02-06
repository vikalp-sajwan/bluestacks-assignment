import styled from "styled-components";

import Text from "../../assets/Text";
import * as colors from "../../assets/colors";
import popupThumb from "../../assets/images/Bitmap-popup.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const GameInfoWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  height: 150px;
  width: 150px;
`;

function ViewPriceModal({ region, name, price }) {
  return (
    <Wrapper>
      <GameInfoWrapper>
        <Img src={popupThumb} />
        <div
          style={{
            alignSelf: "flex-end",
            marginBottom: "13px",
          }}
        >
          <Text size="s" weight="medium" color={colors.primary}>
            {name}
          </Text>
          <Text size="s" weight="light" color={colors.textGrayUS}>
            {region}
          </Text>
        </div>
      </GameInfoWrapper>
      <div style={{ margin: "15px" }}>
        <Text size="l" weight="bold" color={colors.primary}>
          Pricing
        </Text>
        {price.map((item, idx) => (
          <div
            key={idx}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text size="s" weight="light" color={colors.gray10}>
              {Object.keys(item)[0]}
            </Text>
            <Text size="s" weight="bold">
              {Object.values(item)[0]}
            </Text>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ViewPriceModal;
