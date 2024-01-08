import MeCard from "@/components/MeCard"
import Technical from "@/components/Technical"
import OtherSkills from "@/components/OtherSKills"

export default function Home() {
    return (
        <div className="scroll-non">
            <MeCard></MeCard>
            <Technical></Technical>
            <OtherSkills></OtherSkills>

        </div>
    )
}