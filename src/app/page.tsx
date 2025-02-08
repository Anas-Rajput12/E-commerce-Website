import Header from "@/components/header/Header";
import FeaturedPosts from "@/components/hero/FeaturedPosts";
import HeroBottom from "@/components/hero/HeroBottom";
import HeroCards from "@/components/hero/HeroCards";
import Hero from "@/components/hero/HeroTop";




export default function Home() {
  return (
   <>

 <Header/>
 <Hero/>
 <HeroCards/>
 <HeroBottom/>
 <FeaturedPosts/>
  </>
  );
}
