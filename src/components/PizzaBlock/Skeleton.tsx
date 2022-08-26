import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton: React.FC = () => (
  <ContentLoader
    className={'pizza-block'}
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="136" cy="133" r="127" />
    <rect x="0" y="289" rx="0" ry="0" width="280" height="21" />
    <rect x="0" y="331" rx="10" ry="10" width="280" height="78" />
    <rect x="0" y="428" rx="0" ry="0" width="90" height="30" />
    <rect x="137" y="420" rx="30" ry="30" width="131" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
