import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { PriceData } from "./Coin";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 12px;
  padding: 10px 20px;
  border-radius: 10px;

  span {
    &:first-child {
      font-size: 10px;
      font-weight: 500;
      color: ${(props) => props.theme.accentColor};
    }
    &:last-child {
      font-size: 14px;
    }
  }
`;

interface IOutletContext {
  coinId: string;
  tickersData: PriceData;
}

function Price() {
  const { tickersData } = useOutletContext<IOutletContext>();
  return (
    <>
      <Item>
        <span>PERCENT CHANGE - 15 MINUTE</span>
        <span>{tickersData?.quotes?.USD?.percent_change_15m}</span>
      </Item>
      <Item>
        <span>PERCENT CHANGE - 30 MINUTE</span>
        <span>{tickersData?.quotes?.USD?.percent_change_30m}</span>
      </Item>
      <Item>
        <span>PERCENT CHANGE - 1 HOUR</span>
        <span>{tickersData?.quotes?.USD?.percent_change_1h}</span>
      </Item>
      <Item>
        <span>PERCENT CHANGE - 6 HOUR</span>
        <span>{tickersData?.quotes?.USD?.percent_change_6h}</span>
      </Item>
      <Item>
        <span>PERCENT CHANGE - 12 HOUR</span>
        <span>{tickersData?.quotes?.USD?.percent_change_12h}</span>
      </Item>
      <Item>
        <span>PERCENT CHANGE - 24 HOUR</span>
        <span>{tickersData?.quotes?.USD?.percent_change_24h}</span>
      </Item>
      <Item>
        <span>PERCENT CHANGE - 30 DAY</span>
        <span>{tickersData?.quotes?.USD?.percent_change_30d}</span>
      </Item>
      <Item>
        <span>PERCENT CHANGE - 1 YEAR</span>
        <span>{tickersData?.quotes?.USD?.percent_change_1y}</span>
      </Item>
    </>
  );
}

export default Price;
