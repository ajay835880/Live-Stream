import React from 'react';
import { useParams } from 'react-router-dom';
import { appId, secret } from  "./variables"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function room() {
    const {id} = useParams();
    const liveStream = async(element)=>{
        const appID = appId;
  const serverSecret = secret ;
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),  "Ajay Kushwaha");
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  zp.joinRoom({
    container: element,
    scenario:{
        mode: ZegoUIKitPrebuilt.LiveStreaming,
       
    },
    sharedLinks:[
        {
            name: "cpoy link",
            url: `http://localhost:5173/room/${id}`,
        }
    ],
  });

    };
  return (
    <>
    <div ref={liveStream} >

    </div>
    </>
  )
}

export default room
