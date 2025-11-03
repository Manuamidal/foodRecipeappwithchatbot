import React from "react";
import { useEffect } from "react";


export default function Chatbot() {
     useEffect(() => {
        (function() {
              if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                  window.chatbase = (...args) => {
                      if (!window.chatbase.q) { window.chatbase.q = []; }
                      window.chatbase.q.push(args);
                  };
                  window.chatbase = new Proxy(window.chatbase, {
                      get(target, prop) {
                          if (prop === "q") { return target.q; }
                          return (...args) => target(prop, ...args);
                      }
                  });
              }
              const onLoad = function() {
                  const script = document.createElement("script");
                  script.src = "https://www.chatbase.co/embed.min.js";
                  script.id = "roSd5ZmxfkxBDhO8SvFP8";
                  script.domain = "www.chatbase.co";
                  document.body.appendChild(script);
                  window.addEventListener("load", onLoad);
              }
              return () => {
                  window.removeEventListener("load", onLoad);
              };
          })();
      }, []);
    return (
        <div>
            <iframe
      src="https://www.chatbase.co/chatbot-iframe/roSd5ZmxfkxBDhO8SvFP8"
       width="1350px"
       height="500px"
      style={{border:"none",placeItems:"center"}}
      frameborder="0">  </iframe>
        </div>
    );
}