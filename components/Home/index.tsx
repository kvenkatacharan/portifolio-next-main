import Image from "next/image";
import me from "../../public/img/self.png";
import { info } from "../../utils/info";
import EmojiBullet from "../EmojiBullet";
import SocialIcon from "../SocialIcon";
import Style from "./Home.module.css";
function Home() {
  return (
    <>
      <div className="flex items-center justify-center max-w-4xl mx-auto  h-[600px]     ">
        <div className="flex space-x-12">
          <div className="rounded-full w-[40vh] h-[40vh] flex justify-center bg-gradient-to-r from-green-400 to-blue-500 ">
            <Image src={me} alt="profile" className="rounded-full" />
          </div>

          <div className=" mt-2  space-y-4">
            <h1 className="text-5xl font-bold ">
              {" "}
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {" "}
                {info.firstName} <span className={Style.hand}>🤚</span>
              </span>
            </h1>
            <h2 className="text-3xl font-bold "> {info.position}.</h2>
            <div className=" mx-4 mt-4">
              <ul className=" space-y-2">
                {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                ))}
              </ul>
            </div>
            <div className="flex mx-8">
              {info.socials.map((social, index) => (
                <SocialIcon
                  key={index}
                  link={social.link}
                  Icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
