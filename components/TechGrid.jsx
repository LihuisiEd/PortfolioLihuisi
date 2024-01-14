
import Image from 'next/image'
import Subtitle from "./Subtitle";

import TechFrontend from "./TechsFrontend";
import TechBackend from "./TechsBackend";
export default function TechGrid() {

    return (
        <div className="lg:mr-4">
            <TechFrontend></TechFrontend>
            <TechBackend></TechBackend>
        </div>
    );
}