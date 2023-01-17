import { ReactNode } from "react";

export interface IProps {
    children: ReactNode;
}

export interface ICalculatorData {
    amount: number,
    installments: number,
    mdr: number,
    days: []
}

export interface IDaysReceive {
    1: number,
    15: number,
    30: number,
    90: number
}