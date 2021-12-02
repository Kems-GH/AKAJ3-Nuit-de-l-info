import React from 'react';
import Link from "next/link";

const index = () => {
    return (
        <div className={"my-28 text-xl text-gray-700 p-10 text-center"}>
            <div className="text-5xl text-gray-400">ERROR 500</div>
            <div className="my-16 block">
                Oups.. Il semblerait qu&apos;il y ait une erreur de notre côté
            </div>
            <Link href={"/"}>
                <a
                    className={"rounded px-4 py-2 shadow bg-gray-700 text-white transition hover:bg-gray-500 active:bg-atouLightOrange"}>Clique
                    ici pour revenir sur la page d&apos;accueil</a></Link>

        </div>
    );
};

export default index;