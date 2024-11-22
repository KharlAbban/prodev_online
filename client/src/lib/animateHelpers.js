import gsap from "gsap"
import {useGSAP} from "@gsap/react"

export const animateItemNoScroll = (target, delay, animationOptions) => {
    useGSAP(() => {
        gsap.from(target, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            delay: delay,
            ...animationOptions
        })
    }, []);
}