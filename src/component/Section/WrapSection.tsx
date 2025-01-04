import { FC, ReactNode } from "react";

interface PropsWrapSection {
    title: string,
    classWrap: string,
    children?: ReactNode;
    id?: string;
 }
 
const WrapSection: FC<PropsWrapSection> = (props) => {
    return (
        <section className="py-8" id={props.id}>
            <div className="container px-5">
                <h1 className="text-[2rem] md:text-5xl lead-[56px] font-bold text-white">{props.title}</h1>
                <div className={props.classWrap}>{props.children}</div>
            </div>
        </section>
    );
};

export default WrapSection;
