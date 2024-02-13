import clsx from "clsx";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

interface InputBtnProps{
    title: string;
    onClick: ()=> void;
    disabled: boolean;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    classNames?: string;
}


export default function InputBtn({title,onClick, disabled, Icon, classNames}: InputBtnProps){
    const [isHovered, setIsHovered] = useState(false);

    const bounceProps = useSpring({
        to: { scale: isHovered ? 1.2 : 1 },
        config: { tension: 300, friction: 10 },
    });

    return (
        <animated.button
            {...{title, onClick, disabled}}
            style={bounceProps}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon 
                className={
                    clsx(
                        'w-[26px]', 
                        classNames,
                        disabled ? ' stroke-zinc-200 dark:stroke-zinc-500' : ' stroke-slate-500 dark:stroke-white'
                    )
                } 
            />
        </animated.button>
    )
}