import React from "react";
import {styled} from "styled-components";

const StatsJaugeContainer = styled.div`
    margin: ${(props) => props.margin ?? ""};
`;

const Jauge = styled.div`
    margin: 0 10px;
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.colorJauge ?? props.theme.primary};
`;

const StatsJauge = ({title, minValue, maxValue, ...props}) => {
    return (
      <StatsJaugeContainer {...props}>
          {title}
          <div style={{display: "flex", alignItems: "center"}}>
              {minValue} <Jauge/> {maxValue}
          </div>
      </StatsJaugeContainer>
    );
};

export default StatsJauge;