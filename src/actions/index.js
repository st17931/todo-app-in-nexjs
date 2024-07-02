'use server';

import { revalidatePath } from "next/cache";
import { prisma } from "../utils/prisma"

export async function createTodo(formData){
    const input = formData.get("input");
    if(!input.trim()){
        return;
    }

    await prisma.todo.create({
        data:{
            title: input,

        }
    })

    revalidatePath("/")
}