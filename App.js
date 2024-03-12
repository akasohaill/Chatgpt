import './App.css';
import chatgpt_logo from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import query from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import send from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gpt_logo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openAi';
import {useState} from 'react'

function App() {

  const [input,setInput]=useState("")

  const handleSend = async () => {
      const res = await sendMsgToOpenAI(input);
      console.log(res); // Assuming you want to log the response for now
    
  }


  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={chatgpt_logo} className='logo' alt="logo" /><span className="brand">ChatGpt</span></div>
          <button className="midBtn"><img src={addbtn} className='addbtn' alt="" />New Chat</button>
          <div className="upperSideBottom">
          <button className='query'><img src={query} alt="" />What is ChatGPT?</button>
          <button className='query'><img src={query} alt="" />Who is Sohail?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listItemImg" />Home</div>
          <div className="listItems"><img src={saved} alt="" className="listItemImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listItemImg" />Upgrade To Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img  className="chatimg" src={userIcon} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis esse repudiandae consectetur.</p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gpt_logo} alt="" /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias soluta laudantium fugiat dolor, modi quo voluptas quam ipsam quas rerum, sequi ducimus praesentium reprehenderit perferendis qui cupiditate maxime. Excepturi vero ex assumenda non eius saepe veritatis unde quia natus alias, officiis vel sit velit aliquid dolorum. Quos repudiandae et rerum culpa! Culpa nihil neque doloremque? Voluptatum, a itaque quas atque ut ipsam repellat vitae facilis aut magnam! Ipsam fuga officiis, quas maxime adipisci temporibus qui amet quia quasi aspernatur ullam tenetur inventore error tempore sunt velit dolor minus quod obcaecati nihil nam perferendis. Rerum voluptates, esse sint quidem nostrum in? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis neque voluptatem temporibus accusantium facere fuga itaque animi, ad, quas consequuntur inventore ducimus quia nulla laudantium dolor, quisquam labore libero aliquam ullam! Reiciendis eos sapiente voluptatum iure expedita veritatis sit. Libero voluptatem, dicta omnis reiciendis voluptas vero ipsam aliquam ut, maiores repellat, hic excepturi quaerat! Ratione voluptas dolorem, reiciendis optio recusandae laborum est quo odio nemo, illo aperiam suscipit! Consequatur delectus, natus omnis facilis maxime reiciendis magni tempore. Minus praesentium laudantium pariatur ratione nesciunt, illo et veniam magni. Ab ullam similique ad minus eos qui facere doloribus, perferendis aliquam maxime.</p>
          </div>
        </div>
        <div className="chatsFooter">
          <div className="inp">
          <input type="text" name="" id="" placeholder="Send any message" value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={send} alt="" /></button>
          </div>
          <p>chatGPT may produce inaccurate information, people ,place or facts. ChatGpt August 20 version</p>
        </div>
      </div>
    </div>
  );
}

export default App;
