
import Image from 'next/image'
import Subtitle from "./Subtitle";

import TechFrontend from "./TechsFrontend";
import TechBackend from "./TechsBackend";
export default function TechGrid() {

    return (
        <div className="mx-4 sm:mx-0 sm:mr-4">
            <TechFrontend></TechFrontend>
            <TechBackend></TechBackend>
        </div>
    );
}