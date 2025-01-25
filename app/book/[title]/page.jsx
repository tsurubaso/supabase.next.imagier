import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import NavBar from "../../../components/NavBar";
//there is an error but as I try to solve it nothing work, then I will leave it as it is

const BookPage = async ({ params }) => {
  const { title } = params; // Correctly destructure `title` from `params`

  // Resolve the file path based on the title
  const filePath = path.join(process.cwd(), `public/books/${title}.md`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    // Handle file not found case
    return (
      <div>
        <NavBar />
        <div className="p-8 text-center text-red-600">
          <h1>Book not found</h1>
          <p>The book with the title "{title}" does not exist.</p>
        </div>
      </div>
    );
  }

  // Read the markdown file content
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <div>
      <NavBar />
      <div className="p-8">
        <div className="markdown-content">
          <ReactMarkdown>{fileContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
