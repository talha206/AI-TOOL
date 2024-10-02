import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Chatbox from "./components/Chatbox";

export default function Home() {
  return (
    <div className="flex flex-row">   
     
  <Sidebar/>
  <span className="w-[80%] ml-20">
   <Header/>
  <Chatbox/></span>
    </div>
  );
}
