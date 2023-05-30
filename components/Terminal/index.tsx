import { FaCircle } from "react-icons/fa";
interface ITerminalProps {
  text: JSX.Element;
}
const Terminal: React.FC<ITerminalProps> = ({ text }) => {
  return (
    <div className="max-w-3xl w-full mx-auto mb-12 ">
      <div className=" flex  w-full  p-3 rounded-t-xl  mt-3 space-x-2 bg-theme_gray">
        <span className="text-theme_red text-sm ">
          <FaCircle />
        </span>
        <span className="text-theme_yellow text-sm">
          <FaCircle />
        </span>
        <span className="text-theme_green text-sm">
          <FaCircle />
        </span>
      </div>
      <div className="bg-theme_terminal text-2xl rounded-b-xl font-sans text-cyan-50 p-10">
        {text}
      </div>
    </div>
  );
};

export default Terminal;
