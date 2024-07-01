import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const options = {
  threshold: 0.1,
};

export const useElements = () => {
  const [ref1, inView1] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);
  const [ref4, inView4] = useInView(options);

  const refsArray = [ref1, ref2, ref3, ref4];
  const inViewArray = [inView1, inView2, inView3, inView4];

  useEffect(() => {
	console.log('inView1', inView1)
  }, [inView1]);

  return { refsArray, inViewArray };
};
