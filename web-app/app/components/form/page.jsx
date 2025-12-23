"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// 🔥 Separate mutation function
async function createTodo(todo) {
    const res = await fetch("http://localhost:5000/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: todo }),
    });

    if (!res.ok) throw new Error("Failed to create todo");

    return res.json();
}

export default function Form() {
    const queryClient = useQueryClient();
    const [todo, setTodo] = useState("");

    const mutation = useMutation({
        mutationFn: createTodo,   
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
            setTodo("");
        },
        onError: (err) => console.log(err),
    });

    return (
        <div>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button onClick={() => mutation.mutate(todo)}>
                create
            </button>
        </div>
    );
}
