import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  const icons = [
    <FaRegThumbsUp key="0" />,
    <MdPeople key="1" />,
    <MdOutlineProductionQuantityLimits key="2" />,
    <GiTreeDoor key="3" />,
  ];

  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => (
          <StatisticsItem
            key={id}
            icon={icons[index]}
            title={title}
            total={total}
          />
        ))}
      </ul>
    </>
  );
};
