"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Main from "@/app/main/page";
import MyPage from "@/app/mypage/page";
import * as _ from "./style";

export default function Slider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slides = [Main, MyPage];

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const CurrentSlide = slides[index];

    return (
        <_.Container>
            <_.ArrowBtn onClick={prevSlide}>
                <Image
                    src="/assets/arrow.svg"
                    alt="prev"
                    width={24}
                    height={24}
                />
            </_.ArrowBtn>

            <_.Wrapper>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        initial={{ x: direction === 1 ? -40 : 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === 1 ? 40 : -40, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <CurrentSlide />
                    </motion.div>
                </AnimatePresence>
            </_.Wrapper>
            <_.ArrowBtn onClick={nextSlide}>
                <Image
                    src="/assets/arrow.svg"
                    alt="next"
                    width={24}
                    height={24}
                    style={{ transform: "rotate(180deg)" }}
                />
            </_.ArrowBtn>
        </_.Container>
    );
}