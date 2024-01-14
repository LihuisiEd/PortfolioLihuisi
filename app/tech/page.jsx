'use client'
import Subtitle from "@/components/Subtitle"
import TechGrid from "@/components/TechGrid"
import { useEffect, useState } from 'react';
import OtherTechs from "@/components/OtherTechs"
import SkeletonTechs from "@/components/Skeletons/SkeletonTechs";
export default function Tech() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);
        };

        fetchData();
    }, []);
    return (
        <div className="mx-10 lg:mx-0 mt-28 ">
            {isLoading ? (
                <SkeletonTechs />
            ) : (
                <div>
                    <Subtitle>Tech</Subtitle>
                    <TechGrid></TechGrid>
                    <Subtitle>Other techs</Subtitle>
                    <OtherTechs></OtherTechs>
                </div>
            )}

        </div>
    )
}