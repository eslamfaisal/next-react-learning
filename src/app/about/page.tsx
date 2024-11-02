// app/about/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();

    const goToHomePage = () => {
        router.push("/");
    };

    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About page of the app.</p>
            <button onClick={goToHomePage} style={{ padding: "10px", marginTop: "10px" }}>
                Go to Home Page
            </button>
        </div>
    );
}
