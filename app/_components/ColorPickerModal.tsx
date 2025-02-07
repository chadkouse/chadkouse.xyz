'use client'
import { lazy, useCallback, useLayoutEffect, useRef, useState } from "react";
import { Color } from "./ColorPicker";
import { ColorMix } from "./Icons";

const ColorPicker = lazy(() => import("./ColorPicker"));

export default function ColorPickerModal() {
  const handleColorChanged = useCallback((color: Color): void => {
    console.log("Got Color Change", color);
    document.documentElement.style.setProperty('--link', `#${color.hex}FF`);
    document.documentElement.style.setProperty('--link-hover', `#${color.hex}AA`);
    localStorage.setItem("link-color", color.hex);
    localStorage.setItem("link-color-expires", `${Date.now()+(10*60*60*1000)}`);
  },[]);

  const modalRef = useRef<HTMLDivElement>(null);
  const toggleColorPicker = useCallback((): void => {
    const currentSetting = modalRef.current?.getAttribute("aria-hidden");
    modalRef.current?.setAttribute("aria-hidden", currentSetting === "true"? "false" : "true");
  }, [modalRef]);

  const [color, setColor] = useState<string | undefined>(undefined);
  const [colorReady, setColorReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (localStorage.getItem("link-color-expires") &&
      parseInt(localStorage.getItem("link-color-expires") ?? "0") > Date.now() &&
      localStorage.getItem("link-color") != null) {
      setColor(localStorage.getItem("link-color") ?? undefined);
    }
    setColorReady(true);
  }, [])

  return (
    <>
      <button className="hover:text-link-hover transition-colors" onClick={toggleColorPicker}>
        <ColorMix className="inline-block w-8 h-8"></ColorMix>
      </button>
      <div ref={modalRef} aria-hidden className="absolute top-8 right-10 aria-hidden:hidden w-max z-10">
        {colorReady && <ColorPicker default_value={color} onColorChanged={handleColorChanged} />}
      </div>
    </>
  )
}