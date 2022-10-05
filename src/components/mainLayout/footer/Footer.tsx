import React from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = ({
  seeFotter,
  setSeeFotter,
}: {
  seeFotter: boolean;
  setSeeFotter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { ref: ref1, inView: inView1 } = useInView();

  if (inView1) {
    setSeeFotter(!seeFotter);
  }

  return (
    <div ref={ref1} className="text-main flex justify-around border-t-2 border-mainBorder z-20">
      <div className="flex w-2/6 justify-around">
        <div>qwe</div>
        <div>qwe</div>
      </div>
      <div className="flex w-2/6 justify-around">
        <div>qwe</div>
        <div>Form</div>
      </div>
    </div>
  );
};

export default Footer;
