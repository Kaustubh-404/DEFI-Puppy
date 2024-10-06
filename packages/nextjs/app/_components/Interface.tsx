import React, { forwardRef } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

interface InterfaceProps {
  props?: any;
  ref?: any;
}

const Interface = forwardRef<HTMLDivElement, InterfaceProps>((props, ref) => {
  const { animations, animationIndex, setAnimationIndex }: any = useCharacterAnimations();

  return (
    <div className="absolute w-full h-full bottom-2 pointer-events-none" ref={ref}>
      <div className="absolute bottom-[8vh] w-full">
        <div className="flex justify-center items-center w-[90%] gap-4 mx-auto p-4 overflow-auto pointer-events-auto button-container">
          {animations.map((animation: string, index: number) => (
            <button
              key={`${animation}-${index}`}
              onClick={() => setAnimationIndex(index)}
              className={`px-4 py-2  border-none text-black text-xl font-bold rounded cursor-pointer ${
                index === animationIndex ? "bg-[#C7BEF8]" : "bg-[#EFECFD]"
              }`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

Interface.displayName = "Interface";

export default Interface;
