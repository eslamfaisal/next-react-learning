// app/about/page.tsx
"use client";

import React from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function PizzaProject() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Access query parameters
    const paramValue = searchParams.get("q"); // Replace "paramName" with your query parameter name

    console.log("Query parameter value: ", paramValue);

    const goToHomePage = () => {
        router.push("/");
    };

    return (<div className="container">
        <button onClick={goToHomePage} style={{padding: "10px", marginTop: "10px"}}>
            Go to Home Page
        </button>
        <Header/>
        <Menu/>
        <Footer/>
    </div>);
}

interface Pizza {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
}


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {
    const style: React.CSSProperties = {};

    return (<header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
    </header>);
}

function Menu() {
    const pizzas: Pizza[] = pizzaData;
    const numPizzas: number = pizzas.length;

    return (<main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (<>
            <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
            </p>

            <ul className="pizzas">
                {pizzas.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/>))}
            </ul>
        </>) : (<p>We&#39;re still working on our menu. Please come back later :)</p>)}
    </main>);
}

interface PizzaProps {
    pizzaObj: Pizza;
}

function Pizza({pizzaObj}: PizzaProps) {
    console.log(pizzaObj);

    return (<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
    </li>);
}

function Footer() {
    const hour: number = new Date().getHours();
    const openHour: number = 12;
    const closeHour: number = 22;
    const isOpen: boolean = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (<footer className="footer">
        {isOpen ? (<Order closeHour={closeHour} openHour={openHour}/>) : (<p>
            We&#39;re happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>)}
    </footer>);
}

interface OrderProps {
    closeHour: number;
    openHour: number;
}

function Order({closeHour, openHour}: OrderProps) {
    return (<div className="order">
        <p>
            We&#39;re open from {openHour}:00 to {closeHour}:00. Come visit us or order
            online.
        </p>
        <button className="btn">Order</button>
    </div>);
}

export {Header, Menu, Pizza, Footer, Order};