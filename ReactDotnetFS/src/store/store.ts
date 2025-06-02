import { legacy_createStore } from "@reduxjs/toolkit";
import About from "../components/About";
import CounterReducer from "../components/CounterReducer";

export function configureTheStore()
{
    return legacy_createStore(CounterReducer)
}