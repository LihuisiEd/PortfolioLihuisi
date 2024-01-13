import MeCard from "@/components/MeCard"
import Technical from "@/components/Technical"
import OtherSkills from "@/components/OtherSKills"
import Media from "@/components/Media"
export default function Home() {
    return (
        <div className="scroll-non mx-10 lg:mx-0 mt-28 lg:mt-0">
            <MeCard></MeCard>
            <Technical></Technical>
            <OtherSkills></OtherSkills>
            <Media></Media>
        </div>
    )
}