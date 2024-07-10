'use client'

import React, { useEffect, useState } from 'react'
import { StreamChat, Channel as StreamChannel } from 'stream-chat'
import {
  Chat,
  Channel,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  VirtualizedMessageList,
  Thread,
  Window,
} from 'stream-chat-react'

import 'stream-chat-react/dist/css/index.css'

const user = {
  id: '2',
  name: 'user-1',
  image: 'https://getstream.imgix.net/images/random_svg/K.png',
}

const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMiJ9.4B_dx0B6w5MFVb5jIaZV2JA7XGIHeg1nSGWyBX_plQg'

const filters = { type: 'messaging', members: { $in: [user.id] } }
const sort = { last_message_at: -1 } as const

const WhatsAppChat = () => {
  const [chatClient, setChatClient] = useState<StreamChat | null>(null)
  const [channel, setChannel] = useState<StreamChannel | null>(null)

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('bf7rgeuhje6t')
      await client.connectUser(user, userToken)
      const channel = client.channel('messaging', "learn-tutorial", {
        image: "https://getstream.imgix.net/images/random_svg/K.png",
        name: "Let's learn",
        members: [user.id]
      })

      setChannel(channel);
      setChatClient(client)
    }

    initChat()
  }, [])

  if (!chatClient) {
    return <LoadingIndicator />
  }

  return (
    <Chat client={chatClient}>
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <VirtualizedMessageList
            additionalVirtuosoProps={{
              increaseViewportBy: { top: 400, bottom: 200 },
            }}
          />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default WhatsAppChat
