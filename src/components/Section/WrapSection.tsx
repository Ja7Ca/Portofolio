import { FC, ReactNode } from "react";

interface PropsWrapSection {
  title: string;
  classWrap: string;
  children?: ReactNode;
  id?: string;
}

const WrapSection: FC<PropsWrapSection> = ({
  title,
  classWrap,
  children,
  id,
}) => {
  return (
    <section className="py-8" id={id}>
      <div className="container px-5">
        <h2 className="text-[2rem] md:text-5xl leading-[56px] font-bold text-white mb-6">
          {title}
        </h2>
        <div className={classWrap}>{children}</div>
      </div>
    </section>
  );
};

export default WrapSection;
