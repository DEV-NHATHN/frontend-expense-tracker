type LoadingSkeletonProps = {
  className?: string;
};

const LoadingSkeleton = ({ className }: LoadingSkeletonProps) => {
  // destructuring
  return <div className={`skeleton ${className}`}></div>;
};

export default LoadingSkeleton;
