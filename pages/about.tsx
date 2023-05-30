import type { NextPage } from "next";
import Terminal from "../components/Terminal";
import { info } from "../utils/info";
const AboutPage: NextPage = () => {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className="text-theme_green">(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className="text-theme_green">(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }} className="mt-4">
          {" "}
          Proficient With
        </p>
        <ul className="columns-2">
          {info.skills.proficientWith.map((proficiency, index) => (
            <li className="my-2" key={index}>
              {proficiency}
            </li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }} className="mt-4">
          {" "}
          Exposed To
        </p>
        <ul className="columns-2">
          {info.skills.exposedTo.map((skill, index) => (
            <li className="my-2" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className="text-theme_green">(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul className="columns-2 mt-4">
          {info.hobbies.map((hobby, index) => (
            <li className="my-2" key={index}>
              <span className="m-4">{hobby.emoji}</span>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center mt-12 max-w-3xl mx-auto">
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </div>
  );
};
export default AboutPage;
