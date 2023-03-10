import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';
import NewsCard from './components/NewsCard';
import { IArticleCard } from '@/interfaces/article';
import { EArticleType } from '@/constants/article';
import { nowToCreated } from '@/utils/time';

const Container = styled.div`
  //border: 1px solid #fff;
  margin-top: 45px;

  max-width: 960px;

  & .loadMore-container {
    display: flex;
    justify-content: center;

    width: 960px;

    padding-bottom: 25px;

    & .loadMore-btn {
      margin-top: 30px;

      width: 130px;
      height: 45px;
      //padding: 8px 16px;
      border-radius: 8px;

      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;

      border: none;

      background-color: ${({ theme }) => theme.color.primary};
      color: #3d3d3d; // TODO: manage the color using theme instead

      cursor: pointer;
    }
  }
`;

type ShowCaseBodyProps = {
  articleType: EArticleType;
  filteredArticle: IArticleCard[] | undefined;
};
const ShowCaseBody = ({ articleType, filteredArticle }: ShowCaseBodyProps) => {
  const loadMoreArticles = () => {};

  return (
    <Container>
      {filteredArticle?.map((article: IArticleCard) => {
        const { createdTime } = article;
        const date = nowToCreated(createdTime);
        return articleType === EArticleType.NEWS ? (
          <NewsCard
            key={article.id}
            article={{ ...article, date }}
          />
        ) : (
          <ReviewCard
            key={article.id}
            article={{ ...article, date }}
          />
        );
      })}

      {/* load more button, this should lift up */}
      <div className="loadMore-container">
        <button
          type="button"
          className="loadMore-btn"
          onClick={loadMoreArticles}
        >
          Load more
        </button>
      </div>
    </Container>
  );
};

export default ShowCaseBody;
