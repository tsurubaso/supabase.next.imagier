import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import NavBar from '../../components/NavBar';
import ClientSideMarkdown from '../../components/ClientSideMarkdown'; // Import the new client-side component






const TemplatePage = async () => {
  const filePath = path.join(process.cwd(), "public/books/template.md");
  const fileContent = fs.readFileSync(filePath, "utf8");



  return (
    <div>
       <NavBar />
    <div className="markdown-content">
     <ClientSideMarkdown content={fileContent} />;
      
       
      {/* <ReactMarkdown>{fileContent}</ReactMarkdown> */}
      
      
 
      
    </div>
    </div>
  );
};

export default TemplatePage;
