'use client'

import React, { useEffect, useState } from 'react'
import { StreamChat, Channel as StreamChannel } from 'stream-chat'
import {
  Chat,
  Channel,
  LoadingIndicator,
  MessageInput,
  Thread,
  Window,
  MessageList,
  ChannelHeader,
  ChannelList,
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/index.css'

const user1 = {
  id: '1',
  name: 'user-1',
  image: 'https://getstream.imgix.net/images/random_svg/k.png',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSJ9.lwpRiNDlJdLNpIatzOpByjWdMHlcAvTvq4s6vyh3tmo',
}
const user2 = {
  id: '2',
  name: 'user-2',
  image: 'https://getstream.imgix.net/images/random_svg/k.png',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMiJ9.4B_dx0B6w5MFVb5jIaZV2JA7XGIHeg1nSGWyBX_plQg',
}
const user3 = {
  id: '3',
  name: 'user-3',
  image: 'https://getstream.imgix.net/images/random_svg/k.png',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMyJ9.50BhhQJdEtlRYHVyRkZrXbKNBUaLoEcoCmwHE85rWSA',
}

const users = [user1, user2, user3]
const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length)
  return users[randomIndex]
}

const WhatsAppChat = () => {
  const [chatClient, setChatClient] = useState<StreamChat | null>(null)
  const [channel, setChannel] = useState<StreamChannel | null>(null)

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('bf7rgeuhje6t')
      const user = getRandomUser()

      client.connectUser(user, user.token)
      // const channel = client.channel('team', 'general', {
      //   name: 'General',
      //   image: 'https://getstream.imgix.net/images/random_svg/1.png',
      // })

      // await channel.create()
      // channel.addMembers([user.id])
      // setChannel(channel)
      setChatClient(client)
    }

    initChat()

    return () => {
      if (chatClient) chatClient.disconnectUser()
    }
  }, [chatClient])

  if (!chatClient) {
    return <LoadingIndicator />
  }

  return (
    <Chat client={chatClient} theme={"messaging light"}>
      <ChannelList/>
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default WhatsAppChat
