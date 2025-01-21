import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import NavBar from '../../components/NavBar';
import ClientSideMarkdown from '../../components/ClientSideMarkdown'; // Import the new client-side component






const TemplatePage = async () => {
  const filePath = path.join(process.cwd(), "public/books/BaseA.md");
  const fileContent = fs.readFileSync(filePath, "utf8");



  return (
    <div>
       <NavBar />
    <div className="markdown-content">
     <ClientSideMarkdown content={fileContent} />;
      
       
    
      
      
 
      
    </div>
    </div>
  );
};

export default TemplatePage;
