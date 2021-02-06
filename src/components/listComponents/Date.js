import Text from "../../assets/Text";
import styled from "styled-components";

import moment from "moment";

import * as colors from "../../assets/colors";

const Wrapper = styled.div`
  display: flex;
  width: 120px;
  flex-direction: column;
  margin: 20px;
`;

function Date({ timeStamp }) {
  return (
    <Wrapper>
      <Text size="s" weight="light" color={colors.primary}>
        {moment(timeStamp).format("MMM YYYY, DD")}
      </Text>

      <Text size="xs" weight="light" color={colors.gray10} italic>
        {moment(timeStamp).fromNow()}
      </Text>
    </Wrapper>
  );
}

export default Date;
