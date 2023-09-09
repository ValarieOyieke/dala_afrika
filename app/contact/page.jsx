import Image from 'next/image'


export const metadata = {
    title: 'Dala Afrika | Contact Us',
  }

const Contacts = () => {
    return ( 
        <>
        <section className="contacts">
          {/* <div className="contact-image">
              <Image src='/contact.png' layout="fill"/>
            </div> */}
            <div className="contactForm">
              <h2>GET IN TOUCH</h2>
              <p>Got any Questions? We are here to help !</p>
              <form>
                 <div className="inputBox">
                   <input type="text" name="" required="required"/>
                   <span>FULL NAME</span>
                 </div>
                 <div className="inputBox">
                   <input type="email" name="" required="required"/>
                   <span>EMAIL</span>
                 </div>
                 <div className="inputBox">
                   <input type="text" name="" required="required"/>
                   <span>PHONE</span>
                 </div>
                 <div className="inputBox">
                   <textarea required="required"></textarea>
                   <span>MESSAGE</span>
                 </div>
                 <div className="inputBox">
                   <input type="submit" name="" value="SEND MESSAGE"/>
                 </div>
              </form>
            </div>
        </section>
        </>
     );
}
 
export default Contacts;