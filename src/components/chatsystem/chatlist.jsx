import { useEffect } from "react";
import { GetChatList } from "../../api/chat/friendschat";

const ChatList = () => {
    useEffect(()=>{
      const get_chat_list = async()=>{
        try{
            const response = await GetChatList()
            console.log("response", response)
        }catch(error){
            console.log("error", error)
        }
      }
      get_chat_list()
    })
    return (
            <>
            
            </>
    )
};
export default ChatList;
