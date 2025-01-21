// import Sidebar from "./SideBar";
import BlogPage from "./BlogPage";
// import "./single.css";

export default function Single() {
  return (
    <div className="single flex flex-col lg:flex-row gap-6  ">
      <BlogPage />
      {/* <Sidebar /> */}
    </div>
  );
}
