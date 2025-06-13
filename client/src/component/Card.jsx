import React from "react";

const Card = ({ name, value }) => {
    return (
        <div className="px-12 rounded-xl py-8 bg-white shadow-[0px_0px_15px_0px] shadow-slate-300 font-poppins flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">{value}</h2>
            <h4 className="text-lg font-alata">{name}</h4>
        </div>
    );
};

export default Card;
