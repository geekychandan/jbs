import React, { forwardRef } from "react";
import clsx from "clsx";
import NavBar from "./NavBar";

const Bounded = forwardRef(({ as: Comp = "section", className, children, ...restProps }, ref) => {
  return (
    <Comp
      ref={ref}
      className={clsx("relative w-full   overflow-x-hidden", className)} // 🔥 Removed min-h-screen to allow full scrolling
      {...restProps}
    >
      {/* Background Layer: Prevent Overflow Issues */}
      <div className="absolute inset-0 -z-50 w-full h-full  bg-slate-900"></div>

      

      {/* Main Content */}
      {/* <div className="relative mx-auto w-full max-w-6xl">{children}</div> */}
      <div className="relative mx-auto w-full ">{children}</div>

      {/* Background Gradients */}
      <div className="background-gradient1 absolute inset-0 -z-50 w-full h-full max-w-full overflow-hidden"></div>
      <div className="background-gradient2 absolute inset-0 -z-50 w-full h-full max-w-full overflow-hidden"></div>

      {/* Noise Texture */}
      <div
        width={100}
        height={100}
        className='absolute top-0 w-full h-full bg-[url("/noise.png")] opacity-20'
      ></div>
      {/* <div
        className="pointer-events-none absolute  inset-0 -z-30 w-full h-full opacity-40 mix-blend-soft-light"
        style={{ backgroundImage: "url(/noise.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      ></div> */}
      {/* <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noise.png')] opacity-20 mix-blend-soft-light"></div> 
      */}
            <div
        width={100}
        height={100}
        // className='absolute top-0 w-full h-full bg-[url("/noise.png")] opacity-20'
      ></div>
    </Comp>
  );
});

Bounded.displayName = "Bounded";

export default Bounded;
