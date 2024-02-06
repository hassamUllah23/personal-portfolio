import React, { useEffect, useState } from "react";
import { Gulzar, Orbitron } from "next/font/google";
import { Snippet } from "@nextui-org/react";
import { TechnologiesEnum } from "@/app/utils";
import "./style.css";
import { BsDownload } from "react-icons/bs";

type Props = {};
const gulzar = Gulzar({ weight: "400", subsets: ["latin"] });
const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

function Intro({}: Props) {
  const [filePath, setFilePath] = useState<string>("");
  const fileName = "resume.pdf";
  useEffect(() => {
    const originUrl = window.location.origin;
    setFilePath(
      originUrl.includes("localhost")
        ? `${window.location.origin}/${fileName}`
        : `${window.location.origin}/personal-portfolio/${fileName}`,
    );

    if (originUrl.includes("localhost"))
      setFilePath(`${window.location.origin}/${fileName}`);
  }, []);

  const handleOpen = () => {
    const anchorTag = document.createElement("a");
    anchorTag.href = filePath;
    anchorTag.target = "blank";
    document.body.appendChild(anchorTag);
    anchorTag.click();
    anchorTag.remove();
  };

  const technologies: Array<TechnologiesEnum> = [
    TechnologiesEnum.react,
    TechnologiesEnum.node,
    TechnologiesEnum.express,
    TechnologiesEnum.mongo,
  ];
  return (
    <main>
      <div
        className={`flex flex-row justify-center content-center w-full h-5/6 pb-10 sm:pb-20 lg:pb-60 pt-10 md:pt-36`}
      >
        <div className="flex flex-col justify-center content-center w-full">
          <div className="flex flex-row justify-center pb-10">
            <h1
              className={`text-3xl sm:text-4xl md:text-6xl font-bold text-center`}
            >
              Full Stack Developer
            </h1>
          </div>

          <div
            className={`w-full ${gulzar.className} flex flex-row justify-center  sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            <p>{`Hassam   |   حسام`}</p>
          </div>

          <div className="flex flex-row justify-center gap-x-3 sm:gap-x-5 md:gap-x-5 lg:gap-x-10 content center my-10">
            {technologies.map((technology, index) => {
              return (
                <div key={index} className={`${orbitron.className}`}>
                  <p className="text-tiny sm:text-lg">{technology}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-center w-full">
            <div
              className="flex flex-row justify-center cursor-pointer w-full sm:w-1/2 md:w-1/3 "
              onClick={handleOpen}
            >
              <Snippet
                className="w-full text-tiny sm:text-base neonText shadow shadow-blue-500"
                copyIcon={<BsDownload />}
                disableCopy
              >
                npm install @resume/hassam
              </Snippet>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Intro };
