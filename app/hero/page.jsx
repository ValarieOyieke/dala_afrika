import Image from "next/image";

const Hero = () => {
    return (  
      <section className="hero">
       <div className="hero-text"> 
        <h1>Building the future of Web3 in Africa</h1>
        <p>A Web3 community in Africa that educates, informs, and onboards Africans on blockchain and Web3 technologies. 
            We collaborate on projects and initiatives with blockchains seeking to enter the African space, 
            and discuss ideas and debate topics with like-minded individuals to 
            help investors and developers advance their ideas in the African space.
          </p>
      </div>

      <div>
          <Image 
            src='/curr.png'  
            width={400}
            height={300}
            alt="Picture of bitcoin currency"
            />     
      </div>
        </section>
    );
}
 
export default Hero;