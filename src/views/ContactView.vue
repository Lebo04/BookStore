<template>
    <div>
      <section>
         <div class="contact">
           <div class="cont">
             <h2 class="title">Contact me</h2>
             <div class="contact-cont">
               <div class="container">
                 <div class="row">
                   <div class="col">
                     <div class="col lefty">
                       <img
                         src=""
                         width="250"
                         alt=""
                       />
                       <div class="texts">Get in Touch</div>
                       <div class="icons">
                         <div class="row">
                           <div class="info">
                             <div class="head">
                               <i class="fas fa-user"></i> KG Book Store
                             </div>
                           </div>
                         </div>
                         <br />
                         <div class="row">
                           <div class="info">
                             <div class="head">
                               <i class="fas fa-map-marker-alt"></i> 66 Mpetsheni
                               Street, ILitha park, Khayelitsha, 7784
                             </div>
                           </div>
                         </div>
                         <br />
                         <div class="row">
                           <div class="info">
                             <div class="head">
                               <i class="fas fa-envelope"></i>
                               nobomvukelebogile497@gmail.com
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="col">
                     <div class="col righty">
                       <div class="texts">Message Us</div>
                       <form
                         action="https://formspree.io/f/xlekezzl"
                         method="POST"
                       >
                         <div class="fields">
                           <label for="name">Full name</label>
                           <div class="field name">
                             <input
                               type="text"
                               name="Name"
                               class="name"
                               id="name"
                               placeholder="Enter your name"
                               required
                             />
                           </div>
                           <label for="email">Email</label>
                           <div class="field email">
                             <input
                               type="email"
                               name="Email"
                               class="email"
                               id="email"
                               placeholder="Enter your email mail"
                               required
                             />
                           </div>
                         </div>
   
                         <label for="description">Message</label>
                         <div class="field textarea">
                           <textarea
                             name="Description"
                             cols="30"
                             rows="10"
                             placeholder="Describe the project.."
                           ></textarea>
                         </div>
                         <div class="button">
                           <button type="submit">Send message</button>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="we">
           <h2>WE ARE SOCIAL</h2>
   
           <a href="https://www.instagram.com/lebonobomvu"
             ><i
               class="fa fa-instagram fa-bounce"
               style="
                 --fa-bounce-scale-x: 1;
                 --fa-bounce-scale-y: 1;
                 --fa-bounce-scale-x: 1;
                 --fa-bounce-scale-y: 1;
                 --fa-bounce-rebound: 0;
               "
             ></i
           ></a>
           <a href="https://www.facebook.com/kilebogile.lebza"
             ><i
               class="fa fa-facebook fa-beat"
               style="--fa-animation-duration: 0.5s"
             ></i
           ></a>
           <a href="https://www.twitter.com/kelebogile_04"
             ><i
               class="fa fa-twitter fa-bounce"
               style="
                 --fa-bounce-scale-x: 1;
                 --fa-bounce-scale-y: 1;
                 --fa-bounce-scale-x: 1;
                 --fa-bounce-scale-y: 1;
                 --fa-bounce-rebound: 0;
               "
             ></i
           ></a>
           <a href="https://www.youtube.com"
             ><i
               class="fa fa-youtube fa-beat"
               style="--fa-animation-duration: 0.5s"
             ></i
           ></a>
           <a href="https://www.linkedin.com/in/kelebogile-nobomvu-a6389717a"
             ><i
               class="fa fa-linkedin fa-bounce"
               style="
                 --fa-bounce-scale-x: 1;
                 --fa-bounce-scale-y: 1;
                 --fa-bounce-scale-x: 1;
                 --fa-bounce-scale-y: 1;
                 --fa-bounce-rebound: 0;
               "
             ></i
           ></a>
           <a href="https://github.com/Lebo04"
             ><i
               class="fa fa-github fa-beat"
               style="--fa-animation-duration: 0.5s"
             ></i
           ></a>
         </div>
       </section>
    </div>
</template>
<script>
export default {
   components: {
  
   } 
}
</script>
<style scoped>
.we {
    text-align: center;
    padding-bottom: 4rem;
    padding-top: 9rem;
  }
  
  .we h2 {
    font-size: 3rem;
  }
  
  .we a {
    font-size: 1.5rem;
    padding: 1rem;
    color: crimson;
  }
  
  .we a:hover {
    color: #fff;
  }
  
  input {
    margin-bottom: 2rem;
  }
  
  .social a:hover {
    color: #111;
  }
  
  .cont {
    transform: translateY(10%);
  }
  
  .cont .title {
    position: relative;
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  
  section .title::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 18rem;
    height: 0.2rem;
    background: #111;
    transform: translateX(-50%);
  }
  section .title::after {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    font-size: 2rem;
    background: #fff;
    transform: translateX(-50%);
  }
  
  .contact {
    margin-left: 4rem;
  }
  
  form .form-control {
    border: none;
  }
  
  .contact .row i {
    color: crimson;
    font-size: 1.5rem;
  }
  
  .contact .texts {
    font-size: 2rem;
    font-weight: 600;
  }
  
  .contact .lefty .head,
  .contact .lefty .sub-title {
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  .contact .lefty .sub-title {
    padding-left: 1.4rem;
  }
  
  .contact .lefty {
    align-items: left;
  }
  
  .contact .righty form label {
    font-weight: 600;
  }
  
  input {
    height: 2.3rem;
    width: 70%;
  }
  .contact .cont .right form .textarea textarea {
    width: 70%;
    border-radius: 1rem;
    resize: none;
  }
  
  .contact .cont form ::placeholder {
    padding-left: 1rem;
    color: rgba(245, 154, 169, 0.903);
  }
  
  .contact .righty form .button button {
    width: 30%;
    padding: 1rem;
    border: 0.1rem solid #111;
    background: #111;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .contact .righty form .button button:hover {
    background: none;
    color: #111;
  }
</style>