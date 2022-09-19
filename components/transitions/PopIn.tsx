import React from 'react'
import { useTransition, animated } from 'react-spring'

export const PopIn = ({children}:{children: any}) => {
    const transition = useTransition(children, {
        from: {
            opacity: 0,
            transform: "translateY(-30%)"
          },
          enter: {
            opacity: 1,
            transform: "translateY(0)"
          },
          reset: true,
          leave: { transform: "translateY(30%)" }
    });

    return (
        <div>
          {transition(
            (props, item) =>
              item && <animated.div style={props}>{children}</animated.div>
          )}
        </div>
    );
}
