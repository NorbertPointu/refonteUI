import React from 'react';
import { useSkeleton, Skeleton } from '@invisionag/react-skeletons';
import axios from 'axios';

const LoadableComponent = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const { withSkeleton } = useSkeleton({
    isLoading,
    Skeleton: () => (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="rect" width={210} height={118} />
      </div>
    ),
  });

  React.useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts?_limit=5').then((data) => {
      setTimeout(() => {
        setData(data.data);
        setIsLoading(false);
      }, 2000)
    });
  }, []);

  return withSkeleton(<p>{JSON.stringify(data)}</p>);
};

export default LoadableComponent
