"use client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/shared";
import { ArrowDown, CanvasSvg } from "./components/svg";
import { useRef, useState } from "react";
import { SoftShadows } from "@react-three/drei";
import {
  failureGestures,
  successGestures,
  welcomeGestures,
} from "@/utils/static";
import { getRandomElementFromArray } from "@/utils";
import { toast } from "react-toastify";

function isValidEthereumAddress(address?: string): boolean {
  if (!address) return false;
  const ethAddressPattern: RegExp = /^0x[a-fA-F0-9]{40}$/;

  return ethAddressPattern.test(address);
}

export default function Home() {
  const [activeAction, setActiveAction] = useState(
    getRandomElementFromArray(welcomeGestures)
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleNext = () => {
    const isValid = isValidEthereumAddress(inputRef.current?.value);
    if (isValid) {
      setActiveAction(getRandomElementFromArray(successGestures, activeAction));
      toast.success("🦄 Valid Address!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } else {
      setActiveAction(getRandomElementFromArray(failureGestures, activeAction));
      toast.error("Invalid Address!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <main className="app__main__wrapper">
      <div className="app__form__flex">
        {/* <div>
          <CanvasSvg>
          <div className="canvas__container">
            <Canvas
              shadows
              id="c"
              className="canvas"
              camera={{
                fov: 60,
                near: 0.1,
                far: 1000,
                position: [0, 0, 2.5],
              }}
            >
              <color args={[0xffffff * Math.random()]} attach="background" />

              <Experience />
            </Canvas>
          </div>
          </CanvasSvg>
        </div> */}
        <div className="app__canvas__container__relative">
          {/* eslint-disable-next-line */}
          <img
            src="/assets/vector.png"
            className="app__vector__image"
            alt="vector"
          />
          <div className="canvas__container">
            <Canvas
              shadows
              id="c"
              className="canvas"
              camera={{
                fov: 60,
                near: 0.1,
                far: 1000,
                position: [0, 0, 2.5],
              }}
            >
              <color args={[0xa397e7]} attach="background" />
              <fog attach="fog" args={[0xa397e7, 20, 100]} />
              {/* <SoftShadows size={25} /> */}
              <Experience
                handleProgress={(progress: number) => {}}
                activeAction={activeAction}
              />
            </Canvas>
          </div>
        </div>
        <div className="app__form__content">
          <div className="welcome__text__con">
            <p className="welcome__text">Welcome Back</p>
          </div>

          <div className="app__form__title">
            <h3>Wallet Checker</h3>
            <p>Input Wallet address for qualification status</p>
          </div>

          <div className="app__input__con">
            <div className="app__input__relative">
              <div className="app__flex__con">
                <input type="text" placeholder="" required ref={inputRef} />
                <p className="app__input__placeholder">Eth Wallet Address</p>
              </div>
            </div>

            <p>Please enter a valid wallet address</p>
          </div>

          <div className="app__button__con">
            <div className="app__flex__con">
              <button type="button" onClick={handleNext}>
                Next
                <ArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
