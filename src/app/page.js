import AddTodo from "@/components/todos/AddTodos";
import { prisma } from "@/utils/prisma";


async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true
    },
    orderBy: {
      createdAt: "asc"
    }
  })

  return data;
}

export default async function Home() {

  const data = await getData();

  return (
    <div
      className=" w-screen h-screen py-20"
    >
      <h1
        className="text-4xl font-extrabold uppercase mb-5 text-center"
      >
        Todo App
      </h1>

      <div
        className="flex justify-center flex-col items-center"
      >
        {/* {input todos} */}
        <AddTodo />
        {/* {map todos} */}

        <div 
          className="flex flex-col gap-5 items-center justify-center mt-10 w-screen"
        >
          {
            data.map((todo,id) => {
              return <div key={id}>{todo.title}</div>
            })
          }
        </div>

      </div>

    </div>
  );
}
