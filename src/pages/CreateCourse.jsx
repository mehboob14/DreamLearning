import { useState } from "react";
import { Card, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";
import { MdDelete, MdAdd } from "react-icons/md";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [subtopics, setSubtopics] = useState([""]);

  const handleAddSubtopic = () => setSubtopics([...subtopics, ""]);

  const handleRemoveSubtopic = (index) => {
    const updated = [...subtopics];
    updated.splice(index, 1);
    setSubtopics(updated);
  };

  const handleSubtopicChange = (value, index) => {
    const updated = [...subtopics];
    updated[index] = value;
    setSubtopics(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      subtopics: subtopics.filter((s) => s.trim() !== ""),
    };
    console.log("Submitting:", payload);
  };

  const inputClass =
    "w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow";

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-md mx-auto mt-10 p-6 shadow bg-white">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h5" color="blue-gray">
            Create Course
          </Typography>

          <input
            type="text"
            className={inputClass}
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {subtopics.map((sub, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                className={inputClass + " flex-1"}
                placeholder={`Subtopic ${index + 1}`}
                value={sub}
                onChange={(e) => handleSubtopicChange(e.target.value, index)}
              />
              {subtopics.length > 1 && (
                <MdDelete
                  className="text-red-500 text-xl cursor-pointer"
                  onClick={() => handleRemoveSubtopic(index)}
                />
              )}
            </div>
          ))}

          <Button
            onClick={handleAddSubtopic}
            type="button"
            variant="outlined"
            className="flex items-center gap-2 w-fit text-blue-700 border-blue-500"
          >
            <MdAdd /> Add Subtopics
          </Button>
        </CardBody>

        <CardFooter className="pt-0">
        <button class="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Create Course
    </button>
        </CardFooter>
      </Card>
    </form>
  );
}
