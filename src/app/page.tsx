// app/page.tsx
"use client";

import React from "react";
import {useRouter} from "next/navigation";

// Pizza data list
const ProjectsList = [{
    name: "Pizza Project", description: "The classic pizza topping", path: "/pizza",
}];

// Main Home component
export default function Home() {
    return (<div>
        <ProjectsListComponent projects={ProjectsList}/>
    </div>);
}

// ProjectsListComponent Component - iterates over the pizza list and renders PizzaCompo
function ProjectsListComponent({projects}: { projects: Project[] }) {
    return (<div>
        {projects.map((project) => (<PizzaCompo key={project.name} {...project} />))}
    </div>);
}

// Pizza component
interface Project {
    name: string;
    description: string;
    path: string;
}

function PizzaCompo({name, description, path}: Project) {
    const router = useRouter();

    const goToAboutPage = (path: string) => {
        router.push(path);
    };

    return (<div
        style={{
            border: "1px solid #ccc", padding: "10px", margin: "10px", cursor: "pointer",
        }}
        onClick={() => goToAboutPage(path)}
    >
        <h2>{name}</h2>
        <p>{description}</p>
    </div>);
}
