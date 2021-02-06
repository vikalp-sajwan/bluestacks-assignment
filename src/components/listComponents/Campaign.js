import Text from "../../assets/Text";
import styled from "styled-components";

import * as colors from "../../assets/colors";

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
  background: url(${(props) => `/images/${props.image_url}.png`});
  margin-right: 10px;
`;

function Campaign({ region, name, image_url }) {
  return (
    <Wrapper>
      <Img image_url={image_url} />
      <WrapperText>
        <Text size="s" weight="light">
          {name}
        </Text>

        <Text size="xs" weight="light" color={colors.textGrayUS}>
          {region}
        </Text>
      </WrapperText>
    </Wrapper>
  );
}

export default Campaign;
