import styled from './Statistics.module.css'
import { IconContext } from "react-icons";

export const StatisticsItem = ({total, title, icon }) => {
  return <li className={styled.item}>
    <IconContext.Provider value={{ size:32}}>{icon}</IconContext.Provider>
    <span className={styled.counter}>{ total}</span>
    <p className={styled.text}>{ title}</p>
  </li>;
};
