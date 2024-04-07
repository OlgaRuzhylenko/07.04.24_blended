import stats from './data/stats.json';
import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';
import data from '../src/data/article.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={data.poster}
          tag={data.tag}
          title={data.title}
          description={data.description}
          name={data.name}
          avatar={data.avatar}
          postedAt={data.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
