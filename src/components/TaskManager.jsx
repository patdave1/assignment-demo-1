import React,{usestate} from "react";
import TaskItem from "./TaskItem";

function TaskManager() {
    const [tasks, setTasks] = usestate(["Learn Html", "Learn CSS", "Learn JS", "Learn React.Js"]);
    const [input, setInput] = usestate("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (input ==="") return;
        // console.log("Form ssubmitted");
        setTasks([input, ...tasks])
        setInput("");

    };
    return (
        <div className="h-screen bg-blue-600 justify-center items-center">
        <div className="max-w-xl bg-white rounded-xl px-5 py-10">
        <form 
        onSubmit={handleSubmit}
        className="space-x-5 w-full flex w[30rem] mb-10 justify-between">
            <input  type="text" 
            className="border-2 border-blue-400 p-2 rounded-md outline-name w-10/12"
            OnChange={(e => setInput (e.tagart.vlaue))}
            value={input}
            />
           <button type="submit"className="border-2 bg-blue-600  text-white text text-lg py-2 px-7 rounded-md">Add</button>
           </form>

            <div className="space-y-2 overflow-y-auto h-56">
                {
                    tasks.map((task) => (
                        <TaskItem task={task} />
                    )) }
                {/* <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem /> */}
                </div>
                </div>
                </div>

    );

}
export default TaskManager