import Text from "../../assets/Text";
import styled from "styled-components";

import * as colors from "../../assets/colors";

import gameThumb from "../../assets/images/Bitmap.png";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
  min-width: 200px;
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

function Campaign() {
  return (
    <Wrapper>
      <Img src={gameThumb} />
      <WrapperText>
        <Text size="s" weight="light">
          Summoners War
        </Text>

        <Text size="xs" weight="light" color={colors.textGrayUS}>
          US
        </Text>
      </WrapperText>
    </Wrapper>
  );
}

export default Campaign;
