//background images are in css
import './App.css';

function App() {
  return (/*since were using jsx the function body needs to be in a general tag like a div or an empty element <> </>. Also remember that all elements need to be closed so no self-closing elements! Also class needs to be turned into className because class is something else in JS*/
    <> 
      
      
       <main className="background">
         <section className="left">
         <h1>Learn to code by<br  /> watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
         </section>

         <section className="right">
            <button className="top-button"><strong>Try it free 7 days</strong> then $20/mo. thereafter</button>
            <div className="square">
                <form action="">
                    <input className="first" type="text" value="Jonathan"/> 
                    
                    <br />
                    <input type="text" placeholder="Last Name"/>
                    <br />
                    <input type="email" placeholder="Email Address"/>
                    <br />
                    <input type="password" placeholder="Password"/>
                </form>
                <button className="bottom-button"><small>CLAIM YOUR FREE TRIAL</small></button>
                <footer>
                    <small>By clicking the button, you are agreeing to our <strong><span>Terms and Services</span></strong></small>
                </footer>
            </div>
        </section>
       </main>
     
     
    </>
  );
}

export default App;
