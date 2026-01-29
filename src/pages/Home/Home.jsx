import Banner from "../../components/Home/Banner";
import OurService from "../../components/Home/OurService";
import MatchExperience from "../../components/Home/MatchExperience";
import FanTestimonials from "../../components/Home/FanTestimonials";

export default function Home(){
    return (
     <div className=""> 
        <Banner />
        <OurService />
        <MatchExperience />
        <FanTestimonials />
     </div>
    );
}