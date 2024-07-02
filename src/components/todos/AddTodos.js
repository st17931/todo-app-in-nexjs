import Input from "../input/input";
import Form from "../form/form";
import Button from "../button/button";
import { createTodo } from "@/actions";

const AddTodo = ()=>{
    return(
        <div>
            <Form action={createTodo}>
                <div className="flex gap-2 ">
                    <Input name={"input"} type={"text"} placeholder={"Add Todo Here..."}/>
                    <Button type={"submit"} text={"Add"} bgColor={"bg-blue-600"} />
                </div>
            </Form>
        </div>
    )
}

export default AddTodo;