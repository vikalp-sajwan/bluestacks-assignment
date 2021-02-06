import Text from "../../assets/Text";
import styled from "styled-components";

import * as colors from "../../assets/colors";

const Wrapper = styled.div`
  display: flex;
  width: 120px;
  flex-direction: column;
  margin: 20px;
`;

function Date() {
  return (
    <Wrapper>
      <Text size="s" weight="light" color={colors.primary}>
        Oct 2019, 28
      </Text>

      <Text size="xs" weight="light" color={colors.gray10} italic>
        5 Days Ago
      </Text>
    </Wrapper>
  );
}

export default Date;
